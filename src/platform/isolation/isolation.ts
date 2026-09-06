/**
 * Fail-closed isolation evaluator.
 * Structural checks only. Does not admit, execute, issue, or start a sandbox.
 */
import {
  ISOLATION_ENVIRONMENTS,
  isolationDenied,
  isolationSatisfied,
  type IsolationBinding,
  type IsolationContext,
  type IsolationEnvironment,
  type IsolationVerdict,
} from "./types.ts";

function present(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0 && value === value.trim();
}

function wildcard(value: string): boolean {
  return value.includes("*") || value.includes("?") || value.endsWith("/") || value.includes("...");
}

function isEnvironment(value: string): value is IsolationEnvironment {
  return (ISOLATION_ENVIRONMENTS as readonly string[]).includes(value);
}

export function evaluateIsolation(
  context: IsolationContext | null | undefined,
  binding: IsolationBinding | null | undefined = {},
): IsolationVerdict {
  if (context == null || typeof context !== "object") {
    return isolationDenied("UNAVAILABLE", "isolation-unavailable");
  }

  if (!present(context.tenantId)) return isolationDenied("MALFORMED", "missing-tenant");
  if (!present(context.domain)) return isolationDenied("MALFORMED", "missing-domain");
  if (!present(context.environment)) return isolationDenied("MALFORMED", "missing-environment");

  if (wildcard(context.tenantId) || wildcard(context.domain) || wildcard(context.environment)) {
    return isolationDenied("VIOLATION", "wildcard-forbidden");
  }

  if (!isEnvironment(context.environment)) {
    return isolationDenied("MALFORMED", "invalid-environment");
  }

  if (present(binding?.tenantId) && binding.tenantId !== context.tenantId) {
    return isolationDenied("VIOLATION", "tenant-mismatch");
  }
  if (present(binding?.domain) && binding.domain !== context.domain) {
    return isolationDenied("VIOLATION", "domain-mismatch");
  }
  if (present(binding?.environment) && binding.environment !== context.environment) {
    return isolationDenied("VIOLATION", "environment-mismatch");
  }

  return isolationSatisfied();
}
