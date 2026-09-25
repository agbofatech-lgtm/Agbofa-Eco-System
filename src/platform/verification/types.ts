/**
 * Phase 3.0 — Result + Verification contracts.
 * SPECIFIED ≠ IMPLEMENTED. PROTOTYPE ≠ PRODUCTION.
 * Not a Verification Engine. Not Article 8 production enforcement.
 * Not admission. Not execution. Not issuance. Not Evidence. Not Audit. Not Governance.
 *
 * Dual-world boundary (preserved, not merged):
 * - This module binds the platform world (Subject ids, Broker eligibility snapshots).
 * - It does not import or alias src/lib/agbofa/contracts.ts AuthorityGrant / CapabilityToken.
 * - It does not import KernelAuditRecord, KernelDecision, or a future AuditEvent.
 * - BrokerDecision.ALLOW is not a verification verb.
 *
 * First Result: eligibility / policy artifact only.
 */

export const PHASE_3_SLICE = "3.0" as const;
export const VERIFICATION_PROTOTYPE_LABEL = "SPECIFIED-NOT-IMPLEMENTED" as const;
export type VerificationPrototypeLabel = typeof VERIFICATION_PROTOTYPE_LABEL;

export const RESULT_KINDS = ["eligibility-artifact", "policy-artifact"] as const;
export type ResultKind = (typeof RESULT_KINDS)[number];

export type VerificationDisposition = "PASS" | "FAIL" | "INDETERMINATE";

export interface EligibilityPolicyResult {
  readonly resultId: string;
  readonly kind: ResultKind;
  readonly subjectId: string;
  readonly actorId: string;
  readonly claim: string;
  readonly eligible?: boolean;
  readonly brokerDisposition?: "ALLOW" | "DENY";
  readonly brokerReason?: string;
  readonly prototypeLabel: VerificationPrototypeLabel;
  readonly admitted: false;
  readonly executed: false;
  readonly issuedGrant: false;
  readonly issuedCapability: false;
}

export interface VerificationRequest {
  readonly result?: EligibilityPolicyResult | null;
  readonly verifierId?: string | null;
  readonly claim?: string | null;
}

export interface VerificationVerdict {
  readonly disposition: VerificationDisposition;
  readonly reason: string;
  readonly independent: boolean;
  readonly prototypeLabel: VerificationPrototypeLabel;
  readonly admitted: false;
  readonly executed: false;
  readonly issuedGrant: false;
  readonly issuedCapability: false;
  readonly authorized: false;
}

export function verificationClosed(
  disposition: VerificationDisposition,
  reason: string,
  independent: boolean,
): VerificationVerdict {
  return {
    disposition,
    reason,
    independent,
    prototypeLabel: VERIFICATION_PROTOTYPE_LABEL,
    admitted: false,
    executed: false,
    issuedGrant: false,
    issuedCapability: false,
    authorized: false,
  };
}

export function eligibilityPolicyResult(input: {
  resultId: string;
  kind: ResultKind;
  subjectId: string;
  actorId: string;
  claim: string;
  eligible?: boolean;
  brokerDisposition?: "ALLOW" | "DENY";
  brokerReason?: string;
}): EligibilityPolicyResult {
  return {
    resultId: input.resultId,
    kind: input.kind,
    subjectId: input.subjectId,
    actorId: input.actorId,
    claim: input.claim,
    eligible: input.eligible,
    brokerDisposition: input.brokerDisposition,
    brokerReason: input.brokerReason,
    prototypeLabel: VERIFICATION_PROTOTYPE_LABEL,
    admitted: false,
    executed: false,
    issuedGrant: false,
    issuedCapability: false,
  };
}
