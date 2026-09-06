import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { constructGrant, evaluateExpiration, transitionGrant, type GrantInit } from "./grant.ts";
import { GrantStatus, AuthorityDomainError } from "./types.ts";
import { validateGrantStructure } from "./validator.ts";

const ISSUED = "2026-09-05T00:00:00.000Z";
const EXPIRES = "2026-09-06T00:00:00.000Z";
const NOW = "2026-09-05T12:00:00.000Z";
const AFTER = "2026-09-07T00:00:00.000Z";

function init(p: Partial<GrantInit> = {}): GrantInit {
  return {
    id: "grant-1",
    issuer: "human-owner",
    subject: "agent-1",
    scope: "tenant:ten-1",
    action: "read",
    resource: "doc:42",
    constraints: { maxRisk: "HIGH", maxDurationMs: 60_000, requireHuman: true },
    riskLevel: "LOW",
    issuedAt: ISSUED,
    expiresAt: EXPIRES,
    signature: "unsigned-structural",
    version: "1",
    ...p,
  };
}

describe("Authority domain — structure", () => {
  it("constructs a complete grant that is structurally valid and not authorized", () => {
    const g = constructGrant(init());
    const v = validateGrantStructure(g);
    assert.equal(v.ok, true);
    assert.equal(v.authorized, false);
    if (v.ok) assert.equal(v.meaning, "STRUCTURAL_VALID_NOT_AUTHORIZED");
    assert.equal(g.status, GrantStatus.PENDING);
  });

  it("rejects empty id / scope and expiry-before-issuance", () => {
    assert.throws(() => constructGrant(init({ id: "" })), AuthorityDomainError);
    assert.throws(() => constructGrant(init({ scope: "" })), AuthorityDomainError);
    const flipped = { ...constructGrant(init()), issuedAt: EXPIRES, expiresAt: ISSUED };
    const v = validateGrantStructure(flipped);
    assert.equal(v.ok, false);
    if (!v.ok) assert.equal(v.code, "expiry-before-issuance");
  });
});

describe("Authority domain — lifecycle", () => {
  it("allows PENDING→ACTIVE→EXPIRED|REVOKED|SUSPENDED", () => {
    let g = constructGrant(init());
    g = transitionGrant(g, GrantStatus.ACTIVE, NOW);
    assert.equal(g.status, GrantStatus.ACTIVE);
    assert.equal(transitionGrant(g, GrantStatus.EXPIRED, AFTER).status, GrantStatus.EXPIRED);
    assert.equal(transitionGrant(g, GrantStatus.REVOKED, NOW, "owner-revoke").status, GrantStatus.REVOKED);
    assert.equal(transitionGrant(g, GrantStatus.SUSPENDED, NOW).status, GrantStatus.SUSPENDED);
  });

  it("denies EXPIRED→ACTIVE and REVOKED→ACTIVE", () => {
    let g = constructGrant(init());
    g = transitionGrant(g, GrantStatus.ACTIVE, NOW);
    const expired = transitionGrant(g, GrantStatus.EXPIRED, AFTER);
    assert.throws(() => transitionGrant(expired, GrantStatus.ACTIVE, AFTER), (err: unknown) => {
      assert.ok(err instanceof AuthorityDomainError);
      assert.equal(err.code, "invalid-grant-transition");
      return true;
    });
    const revoked = transitionGrant(g, GrantStatus.REVOKED, NOW, "revoked");
    assert.throws(() => transitionGrant(revoked, GrantStatus.ACTIVE, NOW), AuthorityDomainError);
  });

  it("evaluateExpiration expires ACTIVE grants without resurrecting REVOKED", () => {
    let g = constructGrant(init());
    g = transitionGrant(g, GrantStatus.ACTIVE, NOW);
    assert.equal(evaluateExpiration(g, NOW).status, GrantStatus.ACTIVE);
    assert.equal(evaluateExpiration(g, AFTER).status, GrantStatus.EXPIRED);
    const revoked = transitionGrant(g, GrantStatus.REVOKED, NOW, "revoked");
    assert.equal(evaluateExpiration(revoked, AFTER).status, GrantStatus.REVOKED);
  });
});

describe("Authority domain — honesty", () => {
  it("validator never claims authorization", () => {
    const v = validateGrantStructure(constructGrant(init()));
    assert.equal(v.authorized, false);
    assert.equal("admitted" in v, false);
  });
});
