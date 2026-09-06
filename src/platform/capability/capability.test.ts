import assert from "node:assert/strict";
import { test } from "node:test";
import { GrantStatus, RiskLevel } from "../authority/types.ts";
import { constructGrant, transitionGrant } from "../authority/grant.ts";
import { CapabilityDomainError, CapabilityStatus } from "./types.ts";
import { constructCapability, transitionCapability } from "./capability.ts";
import { validateCapability } from "./validator.ts";

const NOW = "2026-09-05T23:00:00.000Z";
const LATER = "2026-09-06T23:00:00.000Z";

function grant() {
  const g = constructGrant({
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
  });
  return transitionGrant(g, GrantStatus.ACTIVE, NOW);
}

function cap(over: Record<string, unknown> = {}) {
  return constructCapability({
    capabilityId: "c-1",
    grantId: "g-1",
    subjectId: "sub-h-1",
    scope: "tenant:ten-1",
    action: "read",
    resource: "doc:1",
    constraints: { maxRisk: RiskLevel.MEDIUM, maxDurationMs: 30_000, requireHuman: true },
    expiresAt: "2026-09-06T12:00:00.000Z",
    ...over,
  });
}

test("valid capability with parent grant is structurally valid and not admitted", () => {
  const g = grant();
  const v = validateCapability(cap(), (id) => (id === g.id ? g : undefined));
  assert.equal(v.ok, true);
  assert.equal(v.admitted, false);
  assert.equal(v.authorized, false);
});

test("missing parent grant denied", () => {
  const v = validateCapability(cap(), () => undefined);
  assert.equal(v.ok, false);
  if (!v.ok) assert.equal(v.code, "missing-parent");
});

test("subject mismatch denied", () => {
  const g = grant();
  const v = validateCapability(cap({ subjectId: "other" }), (id) => (id === g.id ? g : undefined));
  assert.equal(v.ok, false);
  if (!v.ok) assert.equal(v.code, "subject-mismatch");
});

test("containment: scope, action, resource, expiry, constraints", () => {
  const g = grant();
  const look = (id: string) => (id === g.id ? g : undefined);
  assert.equal(validateCapability(cap({ scope: "tenant:other" }), look).ok, false);
  assert.equal(validateCapability(cap({ action: "write" }), look).ok, false);
  assert.equal(validateCapability(cap({ resource: "doc:2" }), look).ok, false);
  const late = validateCapability(cap({ expiresAt: "2026-09-08T00:00:00.000Z" }), look);
  assert.equal(late.ok, false);
  if (!late.ok) assert.equal(late.code, "expiry-exceeds");
  const weakRisk = validateCapability(
    cap({ constraints: { maxRisk: RiskLevel.CRITICAL, maxDurationMs: 30_000, requireHuman: true } }),
    look,
  );
  assert.equal(weakRisk.ok, false);
  if (!weakRisk.ok) assert.equal(weakRisk.code, "constraint-weakened");
  const dropHuman = validateCapability(
    cap({ constraints: { maxRisk: RiskLevel.MEDIUM, maxDurationMs: 30_000, requireHuman: false } }),
    look,
  );
  assert.equal(dropHuman.ok, false);
});

test("lifecycle: pending to active; expire; revoke; no resurrection", () => {
  let c = cap();
  c = transitionCapability(c, CapabilityStatus.ACTIVE);
  assert.equal(c.status, "ACTIVE");
  const expired = transitionCapability(c, CapabilityStatus.EXPIRED);
  assert.equal(expired.status, "EXPIRED");
  assert.throws(
    () => transitionCapability(expired, CapabilityStatus.ACTIVE),
    (e: CapabilityDomainError) => e.code === "invalid-capability-transition",
  );
  const revoked = transitionCapability(c, CapabilityStatus.REVOKED);
  assert.throws(
    () => transitionCapability(revoked, CapabilityStatus.ACTIVE),
    (e: CapabilityDomainError) => e.code === "invalid-capability-transition",
  );
});
