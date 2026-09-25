/**
 * Phase 3.0 fail-closed verification classifier.
 * SPECIFIED ≠ IMPLEMENTED. Not a Verification Engine.
 * PASS means: an independent verifier structurally accepted a well-formed
 * eligibility/policy artifact. PASS ≠ eligible. PASS ≠ ADMIT. PASS ≠ SUCCESS.
 */
import {
  RESULT_KINDS,
  VERIFICATION_PROTOTYPE_LABEL,
  verificationClosed,
  type EligibilityPolicyResult,
  type ResultKind,
  type VerificationRequest,
  type VerificationVerdict,
} from "./types.ts";

function present(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0 && value === value.trim();
}

function isResultKind(value: unknown): value is ResultKind {
  return typeof value === "string" && (RESULT_KINDS as readonly string[]).includes(value);
}

const CONSEQUENTIAL_CLAIM =
  /\b(admit(?:ted)?|execute(?:d)?|issu(?:e|ed)|grant|authority|success|sovereign)\b/i;

function consequentialClaim(claim: string): boolean {
  const normalized = claim.replace(/eligible-not-admitted/gi, " ").replace(/not-admitted/gi, " ");
  return CONSEQUENTIAL_CLAIM.test(normalized);
}

export function evaluateVerification(request: VerificationRequest | null | undefined): VerificationVerdict {
  if (request == null || typeof request !== "object") {
    return verificationClosed("FAIL", "malformed-request", false);
  }

  const result = request.result;
  if (result == null || typeof result !== "object") {
    return verificationClosed("INDETERMINATE", "missing-result", false);
  }

  if (!present(request.verifierId)) {
    return verificationClosed("FAIL", "missing-verifier", false);
  }

  if (!present(result.resultId) || !present(result.subjectId) || !present(result.actorId) || !present(result.claim)) {
    return verificationClosed("FAIL", "malformed-result", false);
  }

  if (result.prototypeLabel !== VERIFICATION_PROTOTYPE_LABEL) {
    return verificationClosed("FAIL", "unlabeled-prototype", false);
  }

  if (result.admitted !== false || result.executed !== false || result.issuedGrant !== false || result.issuedCapability !== false) {
    return verificationClosed("FAIL", "promotion-forbidden", false);
  }

  if (!isResultKind(result.kind)) {
    return verificationClosed("FAIL", "result-kind-forbidden", false);
  }

  if (request.verifierId === result.actorId || request.verifierId === result.subjectId) {
    return verificationClosed("FAIL", "verifier-not-independent", false);
  }

  const claim = present(request.claim) ? request.claim : result.claim;
  if (!present(claim)) {
    return verificationClosed("FAIL", "malformed-claim", false);
  }

  if (consequentialClaim(claim)) {
    return verificationClosed("INDETERMINATE", "consequential-claim-requires-evidence", true);
  }

  return verificationClosed("PASS", "independent-structural-verification", true);
}

export function isEligibilityPolicyResult(value: EligibilityPolicyResult): boolean {
  return (
    value.admitted === false &&
    value.executed === false &&
    value.issuedGrant === false &&
    value.issuedCapability === false &&
    isResultKind(value.kind)
  );
}
