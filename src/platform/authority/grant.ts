/**
 * AuthorityGrant domain model — structure only.
 * issuer and signature are structural references, not cryptographic trust.
 * No issueGrant(), authorize(), admit(), or resolveAuthority().
 * EXPIRED → ACTIVE and REVOKED → ACTIVE are forbidden.
 */
import {
  AuthorityDomainError,
  GrantStatus,
  action,
  grantId,
  resource,
  scope,
  type Action,
  type Constraints,
  type GrantId,
  type GrantStatus as Status,
  type Resource,
  type RiskLevel,
  type Scope,
} from "./types.ts";

const ALLOWED: Record<Status, readonly Status[]> = {
  PENDING: ["ACTIVE"],
  ACTIVE: ["EXPIRED", "REVOKED", "SUSPENDED"],
  SUSPENDED: ["ACTIVE", "REVOKED"],
  EXPIRED: [],
  REVOKED: [],
};

export interface GrantInit {
  id: string;
  issuer: string;
  subject: string;
  scope: string;
  action: string;
  resource: string;
  constraints: Constraints;
  riskLevel: RiskLevel;
  issuedAt: string;
  expiresAt: string;
  signature: string;
  version: string;
}

export interface AuthorityGrant {
  readonly id: GrantId;
  readonly issuer: string;
  readonly subject: string;
  readonly scope: Scope;
  readonly action: Action;
  readonly resource: Resource;
  readonly constraints: Constraints;
  readonly riskLevel: RiskLevel;
  readonly issuedAt: string;
  readonly expiresAt: string;
  readonly status: Status;
  readonly revokedAt: string | null;
  readonly revocationReason: string | null;
  readonly signature: string;
  readonly version: string;
}

export function constructGrant(init: GrantInit): AuthorityGrant {
  return {
    id: grantId(init.id),
    issuer: init.issuer.trim(),
    subject: init.subject.trim(),
    scope: scope(init.scope),
    action: action(init.action),
    resource: resource(init.resource),
    constraints: { ...init.constraints },
    riskLevel: init.riskLevel,
    issuedAt: init.issuedAt,
    expiresAt: init.expiresAt,
    status: GrantStatus.PENDING,
    revokedAt: null,
    revocationReason: null,
    signature: init.signature.trim(),
    version: init.version.trim(),
  };
}

export function evaluateExpiration(grant: AuthorityGrant, now: string): AuthorityGrant {
  if (grant.status === GrantStatus.REVOKED) return grant;
  if (grant.status === GrantStatus.EXPIRED) return grant;
  if (Date.parse(grant.expiresAt) <= Date.parse(now)) {
    return { ...grant, status: GrantStatus.EXPIRED };
  }
  return grant;
}

export function transitionGrant(
  grant: AuthorityGrant,
  next: Status,
  now: string,
  reason?: string,
): AuthorityGrant {
  const current = evaluateExpiration(grant, now);
  const allowed = ALLOWED[current.status];
  if (!allowed.includes(next)) {
    throw new AuthorityDomainError(
      "invalid-grant-transition",
      `cannot transition ${current.status} → ${next}`,
    );
  }
  return {
    ...current,
    status: next,
    revokedAt: next === GrantStatus.REVOKED ? now : current.revokedAt,
    revocationReason: next === GrantStatus.REVOKED ? (reason ?? "revoked") : current.revocationReason,
  };
}

export const GRANT_TRANSITIONS = ALLOWED;
