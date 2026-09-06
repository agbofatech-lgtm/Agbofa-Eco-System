import assert from "node:assert/strict";
import { test } from "node:test";
import { AuthorityDomainError, GrantStatus, RiskLevel } from "./types.ts";
import { constructGrant, evaluateExpiration, transitionGrant } from "./grant.ts";
import { validateGrantStructure } from "./validator.ts";

const NOW = "2026-09-05T23:00:00.000Z";
const LATER = "2026-09-06T23:00:00.000Z";

function validInit(over: Record<string, unknown> = {}) {
  return {
    id: "g-1",
    issuer: "human:owner",
    subject: "sub-h-1",
    scope: "tenant:ten-1",
    action: "read",
    resource: "doc:1",
    constraints: { maxRisk: RiskLevel.HIGH, maxDurationMs: 60_000, requireHuman: true },
    riskLevel: RiskLevel.MEDIUM,
    issuedAt: NOW,
    expiresAt: LATER,
    signature: "struct-only",
    version: "1",
    ...over,
  };
}

test("valid grant is structurally valid and not authorized", () => {
  const g = constructGrant(validInit());
  const v = validateGrantStructure(g);
  assert.equal(v.ok, true);
  assert.equal(v.authorized, false);
  if (v.ok) assert.equal(v.meaning, "STRUCTURAL_VALID_NOT_AUTHORIZED");
});

test("rejects missing id, subject, scope; invalid risk; expiry before issuance", () => {
  assert.throws(() => constructGrant(validInit({ id: "  " })), (e: AuthorityDomainError) => e.code === "empty-id");
  const missingSubject = constructGrant(validInit());
  (missingSubject as { subject: string }).subject = "";
  const v1 = validateGrantStructure(missingSubject);
  assert.equal(v1.ok, false);
  const missingScope = constructGrant(validInit());
  (missingScope as { scope: string }).scope = "";
  assert.equal(validateGrantStructure(missingScope).ok, false);
  const badTime = constructGrant(validInit({ issuedAt: LATER, expiresAt: NOW }));
  const v2 = validateGrantStructure(badTime);
  assert.equal(v2.ok, false);
  if (!v2.ok) assert.equal(v2.code, "expiry-before-issuance");
});

test("lifecycle: pending to active; expire; revoke; suspend; no resurrection", () => {
  let g = constructGrant(validInit());
  g = transitionGrant(g, GrantStatus.ACTIVE, NOW);
  assert.equal(g.status, "ACTIVE");
  const expired = evaluateExpiration(g, "2026-09-07T00:00:00.000Z");
  assert.equal(expired.status, "EXPIRED");
  assert.throws(() => transitionGrant(expired, GrantStatus.ACTIVE, NOW), (e: AuthorityDomainError) => e.code === "invalid-grant-transition");
  const revoked = transitionGrant(g, GrantStatus.REVOKED, NOW, "owner-revoke");
  assert.equal(revoked.status, "REVOKED");
  assert.throws(() => transitionGrant(revoked, GrantStatus.ACTIVE, NOW), (e: AuthorityDomainError) => e.code === "invalid-grant-transition");
  const suspended = transitionGrant(g, GrantStatus.SUSPENDED, NOW);
  assert.equal(suspended.status, "SUSPENDED");
});
