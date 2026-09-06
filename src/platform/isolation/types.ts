/**
 * Phase 2.1 Isolation foundation types.
 * Structural isolation decision only. Not sandbox. Not admission. Not execution.
 * UNKNOWN / ABSENT isolation = UNAVAILABLE = fail closed.
 */

export const ISOLATION_ENVIRONMENTS = ["development", "staging", "production"] as const;
export type IsolationEnvironment = (typeof ISOLATION_ENVIRONMENTS)[number];

export type IsolationDisposition = "SATISFIED" | "UNAVAILABLE" | "VIOLATION" | "MALFORMED";

export interface IsolationContext {
  readonly tenantId?: string | null;
  readonly domain?: string | null;
  readonly environment?: string | null;
}

export interface IsolationBinding {
  readonly tenantId: string;
  readonly domain?: string;
  readonly environment?: string;
}

export interface IsolationDecision {
  readonly disposition: IsolationDisposition;
  readonly reason: string;
  readonly isolated: boolean;
  readonly admitted: false;
  readonly executed: false;
}

export function isolationDeny(disposition: IsolationDisposition, reason: string): IsolationDecision {
  return {
    disposition,
    reason,
    isolated: false,
    admitted: false,
    executed: false,
  };
}

export function isolationSatisfied(): IsolationDecision {
  return {
    disposition: "SATISFIED",
    reason: "isolation-satisfied",
    isolated: true,
    admitted: false,
    executed: false,
  };
}

export function isIsolationEnvironment(value: string): value is IsolationEnvironment {
  return (ISOLATION_ENVIRONMENTS as readonly string[]).includes(value);
}
