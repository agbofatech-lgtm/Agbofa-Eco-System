/**
 * Article 6 in-process kernel — Round 3.
 * Admission + fail-closed. No OS isolation. No host execution backend.
 * Worker-reported signals are ignored. isolationBound is never true here.
 * SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform.
 */
export { admit, haltIfRevoked, containIfQuarantined } from "./broker.ts";
export { emptyStore } from "./types.ts";
export { emptySupervisor, IsolationSupervisor } from "./supervisor.ts";
export { unavailableAttestation } from "./attestation.ts";
export type {
  ExecutionRequest,
  KernelDecision,
  KernelStore,
  Disposition,
  ExecutionState,
  ChainVerdict,
  EvidenceClass,
} from "./types.ts";
