import assert from "node:assert/strict";
import { test } from "node:test";
import * as brokerModule from "./broker.ts";
import { evaluateBroker, type BrokerLookups } from "./broker.ts";
import { allowEligible, deny } from "./types.ts";
import { createSubject, transitionSubject } from "../identity/subject.ts";
import { constructGrant, transitionGrant } from "../authority/grant.ts";
import { GrantStatus, RiskLevel } from "../authority/types.ts";
import { constructCapability, transitionCapability } from "../capability/capability.ts";
import { CapabilityStatus } from "../capability/types.ts";

const NOW = "2026-09-05T23:00:00.000Z";
const LATER = "2026-09-06T23:00:00.000Z";
const MID = "2026-09-06T12:00:00.000Z";

function flags(d: { admitted: boolean; executed: boolean; issuedGrant: boolean; issuedCapability: boolean }) {
  assert.equal(d.admitted, false);
  assert.equal(d.executed, false);
  assert.equal(d.issuedGrant, false);
  assert.equal(d.issuedCapability, false);
}

function subject(status: "PENDING" | "ACTIVE" = "ACTIVE") {
  return createSubject({
    id: "sub-h-1",
    type: "Human",
    origin: { kind: "human-registered", source: "owner" },
    tenantId: "ten-1",
    organizationId: "org-1",
    createdAt: NOW,
    status,
  });
}

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

function capability(over: Record<string, unknown> = {}) {
  const c = constructCapability({
    capabilityId: "c-1",
    grantId: "g-1",
    subjectId: "sub-h-1",
    scope: "tenant:ten-1",
    action: "read",
    resource: "doc:1",
    constraints: { maxRisk: RiskLevel.MEDIUM, maxDurationMs: 30_000, requireHuman: true },
    expiresAt: MID,
    ...over,
  });
  return transitionCapability(c, CapabilityStatus.ACTIVE);
}

function lookups(over: Partial<BrokerLookups> = {}): BrokerLookups {
  const s = subject();
  const g = grant();
  const c = capability();
  return {
    subject: (id) => (id === s.id ? s : undefined),
    grant: (id) => (id === g.id ? g : undefined),
    capability: (id) => (id === c.capabilityId ? c : undefined),
    ...over,
  };
}

const valid = {
  subjectId: "sub-h-1",
  grantId: "g-1",
  capabilityId: "c-1",
  action: "read",
  resource: "doc:1",
};

test("decision model: deny and allowEligible constructors", () => {
  const d = deny("unknown-decision");
  assert.equal(d.disposition, "DENY");
  assert.equal(d.eligible, false);
  assert.equal(d.reason, "unknown-decision");
  flags(d);
  const a = allowEligible();
  assert.equal(a.disposition, "ALLOW");
  assert.equal(a.eligible, true);
  assert.equal(a.reason, "eligible-not-admitted");
  flags(a);
});

test("valid chain is eligible-not-admitted and never admitted", () => {
  const d = evaluateBroker(valid, lookups());
  assert.equal(d.disposition, "ALLOW");
  assert.equal(d.reason, "eligible-not-admitted");
  assert.equal(d.eligible, true);
  flags(d);
});

test("missing vs unknown vs invalid subject", () => {
  assert.equal(evaluateBroker({ ...valid, subjectId: "" }, lookups()).reason, "missing-subject");
  assert.equal(evaluateBroker({ ...valid, subjectId: "nope" }, lookups()).reason, "unknown-subject");
  const pending = subject("PENDING");
  assert.equal(
    evaluateBroker(valid, lookups({ subject: (id) => (id === pending.id ? pending : undefined) })).reason,
    "invalid-subject",
  );
  const suspended = transitionSubject(subject(), "SUSPENDED", NOW, "hold");
  assert.equal(
    evaluateBroker(valid, lookups({ subject: (id) => (id === suspended.id ? suspended : undefined) })).reason,
    "invalid-subject",
  );
  const terminated = transitionSubject(suspended, "TERMINATED", NOW, "end");
  assert.equal(
    evaluateBroker(valid, lookups({ subject: (id) => (id === terminated.id ? terminated : undefined) })).reason,
    "invalid-subject",
  );
});

test("missing vs unknown vs invalid grant", () => {
  assert.equal(evaluateBroker({ ...valid, grantId: "" }, lookups()).reason, "missing-grant");
  assert.equal(evaluateBroker({ ...valid, grantId: "nope" }, lookups()).reason, "unknown-grant");
  const pendingGrant = constructGrant({
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
  assert.equal(
    evaluateBroker(valid, lookups({ grant: (id) => (id === pendingGrant.id ? pendingGrant : undefined) })).reason,
    "invalid-grant",
  );
  const revoked = transitionGrant(grant(), GrantStatus.REVOKED, NOW, "revoked");
  assert.equal(
    evaluateBroker(valid, lookups({ grant: (id) => (id === revoked.id ? revoked : undefined) })).reason,
    "invalid-grant",
  );
  const expired = transitionGrant(grant(), GrantStatus.EXPIRED, NOW);
  assert.equal(
    evaluateBroker(valid, lookups({ grant: (id) => (id === expired.id ? expired : undefined) })).reason,
    "invalid-grant",
  );
});

test("missing vs unknown vs invalid capability", () => {
  assert.equal(evaluateBroker({ ...valid, capabilityId: "" }, lookups()).reason, "missing-capability");
  assert.equal(evaluateBroker({ ...valid, capabilityId: "nope" }, lookups()).reason, "unknown-capability");
  const pendingCap = constructCapability({
    capabilityId: "c-1",
    grantId: "g-1",
    subjectId: "sub-h-1",
    scope: "tenant:ten-1",
    action: "read",
    resource: "doc:1",
    constraints: { maxRisk: RiskLevel.MEDIUM, maxDurationMs: 30_000, requireHuman: true },
    expiresAt: MID,
  });
  assert.equal(
    evaluateBroker(valid, lookups({ capability: (id) => (id === pendingCap.capabilityId ? pendingCap : undefined) })).reason,
    "invalid-capability",
  );
  const revokedCap = transitionCapability(capability(), CapabilityStatus.REVOKED);
  assert.equal(
    evaluateBroker(valid, lookups({ capability: (id) => (id === revokedCap.capabilityId ? revokedCap : undefined) })).reason,
    "invalid-capability",
  );
  const expiredCap = transitionCapability(capability(), CapabilityStatus.EXPIRED);
  assert.equal(
    evaluateBroker(valid, lookups({ capability: (id) => (id === expiredCap.capabilityId ? expiredCap : undefined) })).reason,
    "invalid-capability",
  );
});

test("containment and request mismatch deny", () => {
  const look = lookups();
  assert.equal(evaluateBroker(valid, lookups({ capability: () => capability({ scope: "tenant:other" }) })).reason, "scope-exceeds");
  assert.equal(evaluateBroker(valid, lookups({ capability: () => capability({ action: "write" }) })).reason, "action-exceeds");
  assert.equal(evaluateBroker(valid, lookups({ capability: () => capability({ resource: "doc:2" }) })).reason, "resource-exceeds");
  assert.equal(
    evaluateBroker(valid, lookups({ capability: () => capability({ expiresAt: "2026-09-08T00:00:00.000Z" }) })).reason,
    "expiry-exceeds",
  );
  assert.equal(
    evaluateBroker(
      valid,
      lookups({
        capability: () =>
          capability({ constraints: { maxRisk: RiskLevel.CRITICAL, maxDurationMs: 30_000, requireHuman: true } }),
      }),
    ).reason,
    "constraint-weakened",
  );
  assert.equal(evaluateBroker(valid, lookups({ capability: () => capability({ subjectId: "other" }) })).reason, "subject-mismatch");
  assert.equal(evaluateBroker({ ...valid, action: "write" }, look).reason, "action-mismatch");
  assert.equal(evaluateBroker({ ...valid, resource: "doc:2" }, look).reason, "resource-mismatch");
});

test("malformed request and unknown-decision constructor deny", () => {
  assert.equal(evaluateBroker(null, lookups()).reason, "malformed-request");
  assert.equal(evaluateBroker(undefined, lookups()).reason, "malformed-request");
  assert.equal(evaluateBroker({ ...valid, action: "" }, lookups()).reason, "malformed-request");
  const d = deny("unknown-decision");
  assert.equal(d.disposition, "DENY");
  assert.equal(d.eligible, false);
});

test("broker cannot issue, execute, or admit", () => {
  const d = evaluateBroker(valid, lookups());
  flags(d);
  assert.equal("issueGrant" in brokerModule, false);
  assert.equal("issueCapability" in brokerModule, false);
  assert.equal("admit" in brokerModule, false);
  assert.equal("execute" in brokerModule, false);
});
