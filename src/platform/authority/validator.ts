/**
 * Structural grant validator.
 * VALID STRUCTURE ≠ AUTHORIZED GRANT.
 * This module never claims constitutional authorization.
 */
import {
  AuthorityDomainError,
  GrantStatus,
  RISK_RANK,
  isRiskLevel,
  type GrantStatus as Status,
} from "./types.ts";
import type { AuthorityGrant } from "./grant.ts";

export type StructuralVerdict =
  | { ok: true; authorized: false; meaning: "STRUCTURAL_VALID_NOT_AUTHORIZED" }
  | { ok: false; authorized: false; code: string; message: string };

const STATUSES = new Set<Status>(Object.values(GrantStatus));

export function validateGrantStructure(grant: AuthorityGrant): StructuralVerdict {
  try {
    assertStructure(grant);
    return { ok: true, authorized: false, meaning: "STRUCTURAL_VALID_NOT_AUTHORIZED" };
  } catch (err) {
    const e = err as AuthorityDomainError;
    return {
      ok: false,
      authorized: false,
      code: e.code ?? "invalid-grant",
      message: e.message,
    };
  }
}

export function assertStructure(grant: AuthorityGrant): void {
  if (!grant.id) throw new AuthorityDomainError("missing-grant-id", "grant id is required");
  if (!grant.issuer) throw new AuthorityDomainError("missing-issuer", "issuer reference is required");
  if (!grant.subject) throw new AuthorityDomainError("missing-subject", "subject reference is required");
  if (!grant.scope) throw new AuthorityDomainError("missing-scope", "scope is required");
  if (!grant.action) throw new AuthorityDomainError("missing-action", "action is required");
  if (!grant.resource) throw new AuthorityDomainError("missing-resource", "resource is required");
  if (!grant.constraints || !isRiskLevel(grant.constraints.maxRisk)) {
    throw new AuthorityDomainError("malformed-constraints", "constraints.maxRisk must be a RiskLevel");
  }
  if (grant.constraints.maxDurationMs !== undefined && grant.constraints.maxDurationMs <= 0) {
    throw new AuthorityDomainError("malformed-constraints", "constraints.maxDurationMs must be positive");
  }
  if (!isRiskLevel(grant.riskLevel)) {
    throw new AuthorityDomainError("invalid-risk", `invalid risk level: ${String(grant.riskLevel)}`);
  }
  if (RISK_RANK[grant.riskLevel] > RISK_RANK[grant.constraints.maxRisk]) {
    throw new AuthorityDomainError("risk-exceeds-constraint", "riskLevel exceeds constraints.maxRisk");
  }
  if (!grant.issuedAt || Number.isNaN(Date.parse(grant.issuedAt))) {
    throw new AuthorityDomainError("invalid-issued-at", "issuedAt must be a valid timestamp");
  }
  if (!grant.expiresAt || Number.isNaN(Date.parse(grant.expiresAt))) {
    throw new AuthorityDomainError("invalid-expires-at", "expiresAt must be a valid timestamp");
  }
  if (Date.parse(grant.expiresAt) <= Date.parse(grant.issuedAt)) {
    throw new AuthorityDomainError("expiry-before-issuance", "expiresAt must be after issuedAt");
  }
  if (!STATUSES.has(grant.status)) {
    throw new AuthorityDomainError("invalid-status", `invalid grant status: ${String(grant.status)}`);
  }
  if (!grant.signature) throw new AuthorityDomainError("missing-signature", "signature is structural data only");
  if (!grant.version) throw new AuthorityDomainError("missing-version", "version is required");
}
