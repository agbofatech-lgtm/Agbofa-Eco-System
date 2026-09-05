import type {
  AuthorityGrant,
  Autonomy,
  CapabilityToken,
  RiskClass,
} from "../contracts.ts";
import type { IsolationAttestation } from "./attestation.ts";

export type CallerKind =
  | "human"
  | "agent"
  | "worker"
  | "service"
  | "scheduler"
  | "queue"
  | "tool"
  | "intelligence"
  | "sidecar";

export type Disposition =
  | "DENY"
  | "HALT"
  | "CONTAIN"
  | "QUARANTINE"
  | "ADMIT";

export type ChainVerdict = "ALLOW" | "DENY";

export type ExecutionState =
  | "REQUESTED"
  | "VALIDATING"
  | "DENIED"
  | "ADMITTED"
  | "ISOLATING"
  | "RUNNING"
  | "TIMEOUT"
  | "CANCELLED"
  | "HALTED"
  | "CONTAINED"
  | "QUARANTINED"
  | "SUCCEEDED"
  | "FAILED";

export type EvidenceClass =
  | "admission"
  | "supervisor-disposition"
  | "not-implemented";

export type SensorSource = "request" | "store" | "supervisor" | "none";

/**
 * Worker-reported observations. UNTRUSTED.
 * admit() ignores this object. Do not pass it as security evidence.
 * Kept so callers cannot silently reintroduce oracle injection.
 */
export interface WorkerReportedSignals {
  sandboxEscapeDetected?: boolean;
  timeoutExceeded?: boolean;
  resourceExceeded?: boolean;
  unauthorizedEgress?: boolean;
  secretBoundaryViolation?: boolean;
  inheritUnrelatedSecrets?: boolean;
  isolationDowngradeAttempt?: boolean;
  recursiveSpawn?: boolean;
  revokeDuringExecution?: boolean;
  alternativePath?: boolean;
  hostFallbackAttempt?: boolean;
  quarantineBypass?: boolean;
  continueAfterEscape?: boolean;
  osRoot?: boolean;
  stolenToken?: boolean;
  intelligenceDirectExecute?: boolean;
  childExceedsParent?: boolean;
  providerAllow?: boolean;
  iamAllow?: boolean;
}

export interface ExecutionRequest {
  requestId: string;
  caller: CallerKind;
  actorId: string;
  workerId?: string;
  tenantId: string;
  productId: string;
  environmentId: string;
  action: string;
  resource: string;
  riskClass?: RiskClass | null;
  grant?: AuthorityGrant | null;
  token?: CapabilityToken | null;
  nowIso: string;
  autonomy?: Autonomy;
  parentScope?: {
    tenantId: string;
    productId: string;
    environmentId: string;
    action: string;
    resource: string;
  };
  requestedNetwork?: "none" | "allowlist" | "open";
  retryCount?: number;
  maxRetries?: number;
  queued?: boolean;
  retry?: boolean;
  emergency?: boolean;
  /** If present, must be ignored by admit(). */
  workerReported?: WorkerReportedSignals;
}

export interface KernelDecision {
  chain: ChainVerdict;
  disposition: Disposition;
  state: ExecutionState;
  why: string;
  isolationBound: boolean;
  isolationAttestation: IsolationAttestation;
  quarantined: boolean;
  /**
   * Always false in this increment: there is no execution backend.
   * NOT isolation evidence. Means: kernel did not invoke a host worker.
   */
  hostExecuted: boolean;
  hostExecutionAttempted: boolean;
  executionBackend: "none";
  evidenceClass: EvidenceClass;
  sensorSource: SensorSource;
  auditWhy: string;
}

export interface IsolationBind {
  workerId: string;
  tenantId: string;
  productId: string;
  environmentId: string;
  filesystem: "workspace_only";
  network: "none" | "allowlist";
  secrets: "admitted_only";
}

export interface KernelAuditRecord {
  eventId: string;
  timestamp: string;
  requestId: string;
  actorId: string;
  caller: string;
  tenantId: string;
  productId: string;
  environmentId: string;
  action: string;
  resource: string;
  decision: string;
  why: string;
  authorityGrantId?: string;
  tokenId?: string;
  hash: string;
  previousHash: string;
}

export interface KernelStore {
  revokedGrantIds: Set<string>;
  revokedTokenIds: Set<string>;
  quarantinedActors: Set<string>;
  previousAuditHash: string;
  auditLog: KernelAuditRecord[];
  auditFrozen: boolean;
}

export function emptyStore(): KernelStore {
  return {
    revokedGrantIds: new Set(),
    revokedTokenIds: new Set(),
    quarantinedActors: new Set(),
    previousAuditHash: "genesis",
    auditLog: [],
    auditFrozen: false,
  };
}
