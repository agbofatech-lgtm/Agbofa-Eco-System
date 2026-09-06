/**
 * Phase 2.1 Isolation foundation.
 * Structural isolation decision only. Not admission. Not execution. Not a sandbox.
 * UNKNOWN → NOT AVAILABLE → FAIL CLOSED.
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
  readonly tenantId?: string | null;
  readonly domain?: string | null;
  readonly environment?: string | null;
}

export interface IsolationVerdict {
  readonly disposition: IsolationDisposition;
  readonly reason: string;
  readonly isolated: boolean;
  readonly admitted: false;
  readonly executed: false;
  readonly issuedGrant: false;
  readonly issuedCapability: false;
}

export function isolationDenied(disposition: IsolationDisposition, reason: string): IsolationVerdict {
  return {
    disposition,
    reason,
    isolated: false,
    admitted: false,
    executed: false,
    issuedGrant: false,
    issuedCapability: false,
  };
}

export function isolationSatisfied(reason = "isolation-satisfied"): IsolationVerdict {
  return {
    disposition: "SATISFIED",
    reason,
    isolated: true,
    admitted: false,
    executed: false,
    issuedGrant: false,
    issuedCapability: false,
  };
}
