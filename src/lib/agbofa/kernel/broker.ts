import { unavailableAttestation, type IsolationAttestation } from "./attestation.ts";
import { authorityWhy } from "./authority.ts";
import { appendDecisionAudit, verifyAuditChain } from "./audit.ts";
import { capabilityWhy } from "./capability.ts";
import { isolationPolicyWhy } from "./guard.ts";
import { isQuarantined, quarantineActor, shouldQuarantine } from "./quarantine.ts";
import {
  emptySupervisor,
  type IsolationSupervisor,
  type SupervisorEventKind,
} from "./supervisor.ts";
import type {
  ChainVerdict,
  EvidenceClass,
  ExecutionRequest,
  ExecutionState,
  KernelDecision,
  KernelStore,
  SensorSource,
} from "./types.ts";

const SUPERVISOR_MAP: Record<
  SupervisorEventKind,
  { disposition: KernelDecision["disposition"]; state: ExecutionState; why: string }
> = {
  "sandbox-escape": { disposition: "QUARANTINE", state: "QUARANTINED", why: "sandbox-escape" },
  timeout: { disposition: "HALT", state: "TIMEOUT", why: "timeout" },
  "resource-limit": { disposition: "HALT", state: "HALTED", why: "resource-limit" },
  "unauthorized-egress": { disposition: "CONTAIN", state: "CONTAINED", why: "unauthorized-egress" },
  "secret-boundary": { disposition: "QUARANTINE", state: "QUARANTINED", why: "secret-boundary" },
  "isolation-downgrade": { disposition: "QUARANTINE", state: "QUARANTINED", why: "isolation-downgrade" },
  "recursive-spawn": { disposition: "HALT", state: "HALTED", why: "recursive-spawn" },
  "host-fallback-attempt": { disposition: "DENY", state: "DENIED", why: "broker-bypass" },
  "broker-bypass-attempt": { disposition: "DENY", state: "DENIED", why: "broker-bypass" },
  "continue-after-escape": { disposition: "QUARANTINE", state: "QUARANTINED", why: "continue-after-escape" },
};

function base(
  req: ExecutionRequest,
  attestation: IsolationAttestation,
  extra: Partial<KernelDecision> & Pick<KernelDecision, "chain" | "disposition" | "state" | "why">,
): KernelDecision {
  return {
    isolationBound: false,
    isolationAttestation: attestation,
    quarantined: false,
    hostExecuted: false,
    hostExecutionAttempted: false,
    executionBackend: "none",
    evidenceClass: extra.evidenceClass ?? "admission",
    sensorSource: extra.sensorSource ?? "request",
    auditWhy: extra.why,
    ...extra,
  };
}

export interface AdmitOptions {
  supervisor?: IsolationSupervisor;
}

/**
 * Sole admission point. Never mints authority. Never host-executes.
 * Worker-reported signals on the request are ignored.
 * IsolationBound is true only if an independent attestation is verified —
 * which this repository cannot produce. Consequential execution DENY.
 */
export function admit(
  req: ExecutionRequest,
  store: KernelStore,
  options: AdmitOptions = {},
): KernelDecision {
  const supervisor = options.supervisor ?? emptySupervisor();
  const attestation = unavailableAttestation(req);
  void req.workerReported;

  const finish = (d: KernelDecision): KernelDecision => {
    appendDecisionAudit(store, req, d);
    if (shouldQuarantine(d.why) || d.disposition === "QUARANTINE") {
      quarantineActor(store, req.actorId);
      d.quarantined = true;
    }
    return d;
  };

  const deny = (
    why: string,
    chain: ChainVerdict,
    evidenceClass: EvidenceClass,
    sensorSource: SensorSource,
    disposition: KernelDecision["disposition"] = "DENY",
    state: ExecutionState = "DENIED",
  ) =>
    finish(
      base(req, attestation, {
        chain,
        disposition,
        state,
        why,
        evidenceClass,
        sensorSource,
      }),
    );

  if (store.auditFrozen || !verifyAuditChain(store)) {
    store.auditFrozen = true;
    return deny("audit-frozen", "DENY", "admission", "store");
  }

  for (const kind of Object.keys(SUPERVISOR_MAP) as SupervisorEventKind[]) {
    if (supervisor.has(kind)) {
      const m = SUPERVISOR_MAP[kind];
      return deny(m.why, "DENY", "supervisor-disposition", "supervisor", m.disposition, m.state);
    }
  }

  if (isQuarantined(store, req.actorId)) {
    return deny("quarantine-bypass", "DENY", "admission", "store");
  }

  if (req.caller === "intelligence") {
    return deny("intelligence-not-executor", "DENY", "admission", "request");
  }
  if (req.caller === "sidecar") {
    return deny("broker-bypass", "DENY", "admission", "request");
  }
  if (req.caller === "scheduler" && !req.queued && !req.grant) {
    return deny("scheduler-bypass", "DENY", "admission", "request");
  }

  if (!req.riskClass) {
    return deny("unclassified-consequential", "DENY", "admission", "request");
  }

  const aWhy = authorityWhy(req, store.revokedGrantIds);
  if (aWhy) return deny(aWhy, "DENY", "admission", "request");
  const cWhy = capabilityWhy(req, store.revokedTokenIds);
  if (cWhy) return deny(cWhy, "DENY", "admission", "request");

  if (req.emergency && req.environmentId === "production" && req.action === "deploy") {
    return deny("emergency-production-bypass", "DENY", "admission", "request");
  }

  if (req.queued || req.retry) {
    const reA = authorityWhy(req, store.revokedGrantIds);
    const reC = capabilityWhy(req, store.revokedTokenIds);
    if (reA || reC) return deny("stale-queue", "DENY", "admission", "store");
  }
  if (req.retry && (req.retryCount ?? 0) > (req.maxRetries ?? 1)) {
    return deny("retry-exceeded", "DENY", "admission", "request");
  }

  const iWhy = isolationPolicyWhy(req);
  if (iWhy) return deny(iWhy, "DENY", "admission", "request");

  if (
    req.grant &&
    store.revokedGrantIds.has(req.grant.grantId)
  ) {
    return deny("revoke-during-execution", "DENY", "admission", "store", "HALT", "HALTED");
  }

  /* Chain is ALLOW. Physical isolation is unavailable in this increment.
     Do not mint isolationBound. Do not ADMIT worker execution. */
  return deny("isolation-unavailable", "ALLOW", "admission", "none");
}

export function haltIfRevoked(
  req: ExecutionRequest,
  store: KernelStore,
): KernelDecision | null {
  if (!req.grant) return null;
  const revoked =
    store.revokedGrantIds.has(req.grant.grantId) ||
    (req.token ? store.revokedTokenIds.has(req.token.tokenId) : false);
  if (!revoked) return null;
  appendDecisionAudit(store, req, { why: "revoke-during-execution", disposition: "HALT" });
  return {
    chain: "DENY",
    disposition: "HALT",
    state: "HALTED",
    why: "revoke-during-execution",
    isolationBound: false,
    isolationAttestation: unavailableAttestation(req),
    quarantined: false,
    hostExecuted: false,
    hostExecutionAttempted: false,
    executionBackend: "none",
    evidenceClass: "admission",
    sensorSource: "store",
    auditWhy: "revoke-during-execution",
  };
}

/** In-memory "running" marker for quarantine/revoke-of-inflight policy tests. Not an OS process. */
export interface LogicalRun {
  request: ExecutionRequest;
  state: "RUNNING";
}

export function beginLogicalRun(req: ExecutionRequest, decision: KernelDecision): LogicalRun | null {
  if (decision.chain !== "ALLOW") return null;
  if (decision.isolationBound) return null;
  return null;
}

/**
 * Apply store quarantine to a claimed in-flight logical execution.
 * Cannot SIGKILL. Returns HALT policy only.
 */
export function containIfQuarantined(
  req: ExecutionRequest,
  store: KernelStore,
  inFlight: boolean,
): KernelDecision | null {
  if (!inFlight) return null;
  if (!isQuarantined(store, req.actorId)) return null;
  appendDecisionAudit(store, req, { why: "quarantine-inflight", disposition: "HALT" });
  return {
    chain: "DENY",
    disposition: "HALT",
    state: "HALTED",
    why: "quarantine-inflight",
    isolationBound: false,
    isolationAttestation: unavailableAttestation(req),
    quarantined: true,
    hostExecuted: false,
    hostExecutionAttempted: false,
    executionBackend: "none",
    evidenceClass: "admission",
    sensorSource: "store",
    auditWhy: "quarantine-inflight",
  };
}
