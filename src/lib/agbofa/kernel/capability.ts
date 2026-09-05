import type { AuthorityGrant, CapabilityToken, RiskClass } from "../contracts.ts";
import type { ExecutionRequest } from "./types.ts";

const RISK_RANK: Record<RiskClass, number> = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  CRITICAL: 4,
};

export function tokenExceedsGrant(token: CapabilityToken, grant: AuthorityGrant): boolean {
  if (token.authorityGrantId !== grant.grantId) return true;
  if (token.tenantId !== grant.scope.tenantId) return true;
  if (grant.scope.productId && token.productId !== grant.scope.productId) return true;
  if (grant.scope.environmentId && token.environmentId !== grant.scope.environmentId) {
    return true;
  }
  const grantExp = Date.parse(grant.expiresAt);
  const tokenExp = Date.parse(token.expiresAt);
  if (tokenExp > grantExp) return true;
  return false;
}

export function capabilityWhy(
  req: ExecutionRequest,
  revokedTokenIds: Set<string>,
): string | null {
  const t = req.token;
  if (!t) return "missing-capability";
  if (!req.grant) return "missing-authority";
  if (t.status === "revoked" || revokedTokenIds.has(t.tokenId) || t.revocationId) {
    return "revoked-capability";
  }
  if (t.status === "expired" || Date.parse(t.expiresAt) <= Date.parse(req.nowIso)) {
    return "expired-capability";
  }
  if (t.status !== "active") return "invalid-capability-status";
  if (t.issuer !== "capability-system") return "forged-capability";
  if (tokenExceedsGrant(t, req.grant)) return "token-exceeds-authority";
  if (t.tenantId !== req.tenantId) return "wrong-tenant";
  if (t.productId !== req.productId) return "wrong-product";
  if (t.environmentId !== req.environmentId) return "wrong-environment";
  if (t.action !== req.action) return "wrong-action";
  if (t.resource !== req.resource) return "wrong-resource";
  if (t.subject.id !== req.actorId && t.subject.id !== req.workerId) {
    return "wrong-subject";
  }
  if (req.riskClass && RISK_RANK[t.riskClass] > RISK_RANK[req.riskClass]) {
    return "risk-amplification";
  }
  return null;
}

export function riskAmplifies(token: CapabilityToken, declared: RiskClass | null | undefined): boolean {
  if (!declared) return false;
  return RISK_RANK[token.riskClass] > RISK_RANK[declared];
}
