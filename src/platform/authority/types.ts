/**
 * Phase 1 Authority domain primitives.
 * STRUCTURAL VALIDATION ≠ AUTHORITY ISSUANCE.
 * Creating a grant object is not constitutional issuance.
 * Kernel admit() remains the only admission prototype.
 */
export type GrantId = string & { readonly __brand: "GrantId" };
export type Scope = string & { readonly __brand: "Scope" };
export type Action = string & { readonly __brand: "Action" };
export type Resource = string & { readonly __brand: "Resource" };

export const RiskLevel = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
  CRITICAL: "CRITICAL",
} as const;
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];

export const GrantStatus = {
  PENDING: "PENDING",
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  REVOKED: "REVOKED",
  SUSPENDED: "SUSPENDED",
} as const;
export type GrantStatus = (typeof GrantStatus)[keyof typeof GrantStatus];

export interface Constraints {
  readonly maxRisk: RiskLevel;
  readonly maxDurationMs?: number;
  readonly requireHuman?: boolean;
}

export class AuthorityDomainError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.name = "AuthorityDomainError";
    this.code = code;
  }
}

function brand(kind: string, value: string): string {
  const v = value.trim();
  if (!v) throw new AuthorityDomainError("empty-id", `${kind} must be a non-empty string`);
  return v;
}

export function grantId(value: string): GrantId {
  return brand("GrantId", value) as GrantId;
}
export function scope(value: string): Scope {
  return brand("Scope", value) as Scope;
}
export function action(value: string): Action {
  return brand("Action", value) as Action;
}
export function resource(value: string): Resource {
  return brand("Resource", value) as Resource;
}

export const RISK_RANK: Record<RiskLevel, number> = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  CRITICAL: 4,
};

export function isRiskLevel(value: string): value is RiskLevel {
  return value in RISK_RANK;
}
