import assert from "node:assert/strict";
import { test } from "node:test";
import * as verificationModule from "./classifier.ts";
import { evaluateVerification, isEligibilityPolicyResult } from "./classifier.ts";
import {
  VERIFICATION_PROTOTYPE_LABEL,
  eligibilityPolicyResult,
  type EligibilityPolicyResult,
} from "./types.ts";

function flags(v: {
  admitted: boolean;
  executed: boolean;
  issuedGrant: boolean;
  issuedCapability: boolean;
  authorized?: boolean;
}) {
  assert.equal(v.admitted, false);
  assert.equal(v.executed, false);
  assert.equal(v.issuedGrant, false);
  assert.equal(v.issuedCapability, false);
  if ("authorized" in v) assert.equal(v.authorized, false);
}

function artifact(over: Partial<EligibilityPolicyResult> = {}): EligibilityPolicyResult {
  return eligibilityPolicyResult({
    resultId: over.resultId ?? "res-1",
    kind: over.kind ?? "eligibility-artifact",
    subjectId: over.subjectId ?? "sub-h-1",
    actorId: over.actorId ?? "broker-eval",
    claim: over.claim ?? "subject is structurally eligible for read on doc:1",
    eligible: over.eligible ?? true,
    brokerDisposition: over.brokerDisposition ?? "ALLOW",
    brokerReason: over.brokerReason ?? "eligible-not-admitted",
  });
}

test("eligibility/policy result is labeled prototype and never admitted", () => {
  const r = artifact();
  assert.equal(r.prototypeLabel, VERIFICATION_PROTOTYPE_LABEL);
  assert.equal(r.kind, "eligibility-artifact");
  flags(r);
  assert.equal(isEligibilityPolicyResult(r), true);
});

test("independent verifier structurally passes a well-formed eligibility artifact", () => {
  const v = evaluateVerification({ result: artifact(), verifierId: "verifier-1" });
  assert.equal(v.disposition, "PASS");
  assert.equal(v.reason, "independent-structural-verification");
  assert.equal(v.independent, true);
  assert.equal(v.prototypeLabel, VERIFICATION_PROTOTYPE_LABEL);
  flags(v);
});

test("policy artifact is an authorized first Result kind", () => {
  const v = evaluateVerification({
    result: artifact({ kind: "policy-artifact", claim: "policy floor unchanged" }),
    verifierId: "verifier-1",
  });
  assert.equal(v.disposition, "PASS");
  flags(v);
});

test("missing or malformed request fails closed", () => {
  assert.equal(evaluateVerification(null).reason, "malformed-request");
  assert.equal(evaluateVerification(undefined).reason, "malformed-request");
  assert.equal(evaluateVerification({ verifierId: "verifier-1" }).reason, "missing-result");
  assert.equal(evaluateVerification({ result: null, verifierId: "verifier-1" }).reason, "missing-result");
  assert.equal(evaluateVerification({ result: artifact(), verifierId: "" }).reason, "missing-verifier");
  assert.equal(evaluateVerification({ result: artifact(), verifierId: "  " }).reason, "missing-verifier");
  flags(evaluateVerification(null));
});

test("self-verification is denied even if labeled verify", () => {
  const sameActor = evaluateVerification({ result: artifact({ actorId: "agent-1" }), verifierId: "agent-1" });
  assert.equal(sameActor.disposition, "FAIL");
  assert.equal(sameActor.reason, "verifier-not-independent");
  assert.equal(sameActor.independent, false);
  flags(sameActor);

  const sameSubject = evaluateVerification({ result: artifact({ subjectId: "sub-h-1" }), verifierId: "sub-h-1" });
  assert.equal(sameSubject.reason, "verifier-not-independent");
  flags(sameSubject);
});

test("malformed result and forbidden kind fail closed", () => {
  assert.equal(
    evaluateVerification({
      result: artifact({ resultId: "" }),
      verifierId: "verifier-1",
    }).reason,
    "malformed-result",
  );
  const forbidden = artifact();
  const v = evaluateVerification({
    result: { ...forbidden, kind: "execution-result" as EligibilityPolicyResult["kind"] },
    verifierId: "verifier-1",
  });
  assert.equal(v.disposition, "FAIL");
  assert.equal(v.reason, "result-kind-forbidden");
  flags(v);
});

test("promotion flags on a result fail closed", () => {
  const promoted = { ...artifact(), admitted: true as unknown as false };
  const v = evaluateVerification({ result: promoted, verifierId: "verifier-1" });
  assert.equal(v.disposition, "FAIL");
  assert.equal(v.reason, "promotion-forbidden");
  flags(v);
});

test("consequential trust/authority claims are indeterminate without an evidence plane", () => {
  const v = evaluateVerification({
    result: artifact({ claim: "execution succeeded and grant is issued" }),
    verifierId: "verifier-1",
  });
  assert.equal(v.disposition, "INDETERMINATE");
  assert.equal(v.reason, "consequential-claim-requires-evidence");
  assert.equal(v.independent, true);
  flags(v);
});

test("PASS is not admission, issuance, or Broker ALLOW reuse", () => {
  const v = evaluateVerification({ result: artifact(), verifierId: "verifier-1" });
  assert.equal(v.disposition, "PASS");
  assert.notEqual(v.disposition, "ALLOW");
  flags(v);
  assert.equal("issueGrant" in verificationModule, false);
  assert.equal("issueCapability" in verificationModule, false);
  assert.equal("admit" in verificationModule, false);
  assert.equal("execute" in verificationModule, false);
});
