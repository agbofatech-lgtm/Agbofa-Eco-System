import type { ExecutionRequest } from "./types.ts";

/** Admission-time isolation *policy* checks. Not physical isolation. */
export function isolationPolicyWhy(req: ExecutionRequest): string | null {
  if (req.token && req.token.scope.filesystem !== "workspace_only") {
    return "filesystem-not-isolated";
  }
  if (req.requestedNetwork === "open") return "unauthorized-egress";
  if (
    req.token &&
    req.requestedNetwork === "allowlist" &&
    req.token.scope.network !== "allowlist"
  ) {
    return "network-exceeds-token";
  }
  if (req.parentScope) {
    const p = req.parentScope;
    if (
      p.tenantId !== req.tenantId ||
      p.productId !== req.productId ||
      p.environmentId !== req.environmentId ||
      (p.action !== req.action && p.action !== "*")
    ) {
      return "child-exceeds-parent";
    }
  }
  return null;
}
