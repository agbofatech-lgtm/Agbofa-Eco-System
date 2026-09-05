import type { ExecutionRequest } from "./types.ts";

/**
 * Isolation attestation is issued only by the Isolation Supervisor.
 * The worker/agent/kernel-boolean is not a source of isolation truth.
 * In this repository the supervisor cannot establish an OS jail.
 */
export type IsolationStatus = "unavailable" | "failed" | "verified";

export interface IsolationAttestation {
  attestationId: string;
  issuer: "isolation-supervisor";
  status: IsolationStatus;
  /** True only if an independent supervisor verified a real execution context. */
  verified: boolean;
  tenantId: string;
  productId: string;
  environmentId: string;
  processBoundary: "none" | "namespace";
  filesystemBoundary: "none" | "workspace_only";
  networkBoundary: "none" | "policy";
  credentialBoundary: "none" | "admitted_only";
  resourceBoundary: "none" | "cgroup";
  timeoutDeadlineIso: string | null;
  createdAt: string;
  expiresAt: string;
  why: string;
}

export function unavailableAttestation(req: ExecutionRequest): IsolationAttestation {
  return {
    attestationId: `att-unavail-${req.requestId}`,
    issuer: "isolation-supervisor",
    status: "unavailable",
    verified: false,
    tenantId: req.tenantId,
    productId: req.productId,
    environmentId: req.environmentId,
    processBoundary: "none",
    filesystemBoundary: "none",
    networkBoundary: "none",
    credentialBoundary: "none",
    resourceBoundary: "none",
    timeoutDeadlineIso: null,
    createdAt: req.nowIso,
    expiresAt: req.nowIso,
    why: "isolation-unavailable",
  };
}
