/**
 * Phase 2.0 Broker foundation types.
 * Eligibility evaluation only. Not issuance. Not admission. Not execution.
 * Kernel admit() remains the only admission prototype.
 * Isolation and Boundary are not implemented here.
 */

export type BrokerDisposition = "ALLOW" | "DENY";

export interface BrokerRequest {
  readonly subjectId?: string | null;
  readonly grantId?: string | null;
  readonly capabilityId?: string | null;
  readonly action?: string | null;
  readonly resource?: string | null;
}

export interface BrokerDecision {
  readonly disposition: BrokerDisposition;
  readonly reason: string;
  readonly eligible: boolean;
  readonly admitted: false;
  readonly executed: false;
  readonly issuedGrant: false;
  readonly issuedCapability: false;
}

export function deny(reason: string): BrokerDecision {
  return {
    disposition: "DENY",
    reason,
    eligible: false,
    admitted: false,
    executed: false,
    issuedGrant: false,
    issuedCapability: false,
  };
}

export function allowEligible(): BrokerDecision {
  return {
    disposition: "ALLOW",
    reason: "eligible-not-admitted",
    eligible: true,
    admitted: false,
    executed: false,
    issuedGrant: false,
    issuedCapability: false,
  };
}
