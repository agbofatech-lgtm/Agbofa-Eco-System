import type { AuthorityGrant } from "../contracts.ts";
import type { ExecutionRequest } from "./types.ts";

export function authorityWhy(
  req: ExecutionRequest,
  revokedGrantIds: Set<string>,
): string | null {
  const g = req.grant;
  if (!g) return "missing-authority";
  if (g.status === "revoked" || revokedGrantIds.has(g.grantId)) return "revoked-authority";
  if (g.status === "expired" || Date.parse(g.expiresAt) <= Date.parse(req.nowIso)) {
    return "expired-authority";
  }
  if (g.status !== "active" && g.status !== "pending") return "invalid-authority-status";
  const origin = g.issuedBy;
  if (origin !== "constitution" && typeof origin === "string" && origin.length === 0) {
    return "authority-origin-empty";
  }
  const forbidden = new Set([
    "broker",
    "kernel",
    "worker",
    "agent",
    "capability-system",
    "iam",
    "provider",
  ]);
  if (forbidden.has(String(origin))) return "kernel-broker-not-grantor";
  if (!g.chain || g.chain.length === 0) return "authority-chain-incomplete";
  if (g.scope.tenantId !== req.tenantId) return "wrong-tenant";
  if (g.scope.productId && g.scope.productId !== req.productId) return "wrong-product";
  if (g.scope.environmentId && g.scope.environmentId !== req.environmentId) {
    return "wrong-environment";
  }
  return null;
}
