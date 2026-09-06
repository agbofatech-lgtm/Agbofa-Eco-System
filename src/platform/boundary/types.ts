/**
 * Phase 2.2 Boundary types.
 * Structural chain enforcement only. Not admission. Not issuance. Not execution.
 * Organization is represented on Subject, not on BrokerRequest/Grant/Capability.
 * Request-layer organization boundary is NOT REPRESENTED and is not invented.
 */

export type BoundaryCode =
  | "subject-grant-mismatch"
  | "grant-capability-mismatch"
  | "capability-subject-mismatch"
  | "capability-request-mismatch"
  | "subject-tenant-mismatch";

export interface BoundaryViolation {
  readonly boundary: BoundaryCode;
  readonly reason: BoundaryCode;
}

export type BoundaryResult =
  | { readonly passed: true; readonly violations: [] }
  | { readonly passed: false; readonly violations: readonly [BoundaryViolation, ...BoundaryViolation[]] };

export function boundaryPass(): BoundaryResult {
  return { passed: true, violations: [] };
}

export function boundaryFail(code: BoundaryCode): BoundaryResult {
  return { passed: false, violations: [{ boundary: code, reason: code }] };
}
