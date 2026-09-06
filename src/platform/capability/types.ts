/**
 * Phase 1 Capability domain primitives.
 * Re-exports Scope/Action/Resource from authority so they cannot drift.
 * CAPABILITY ≠ AUTHORITY. CAPABILITY VALIDITY ≠ EXECUTION ADMISSION.
 */
export {
  action,
  resource,
  scope,
  RISK_RANK,
  RiskLevel,
  type Action,
  type Constraints,
  type Resource,
  type RiskLevel as Risk,
  type Scope,
} from "../authority/types.ts";

export type CapabilityId = string & { readonly __brand: "CapabilityId" };

export const CapabilityStatus = {
  PENDING: "PENDING",
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  REVOKED: "REVOKED",
} as const;
export type CapabilityStatus = (typeof CapabilityStatus)[keyof typeof CapabilityStatus];

export class CapabilityDomainError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.name = "CapabilityDomainError";
    this.code = code;
  }
}

export function capabilityId(value: string): CapabilityId {
  const v = value.trim();
  if (!v) throw new CapabilityDomainError("empty-id", "CapabilityId must be a non-empty string");
  return v as CapabilityId;
}
