import assert from "node:assert/strict";
import { test } from "node:test";
import { createSubject } from "../identity/subject.ts";
import { constructGrant, transitionGrant } from "../authority/grant.ts";
import { GrantStatus, RiskLevel } from "../authority/types.ts";
import { constructCapability, transitionCapability } from "../capability/capability.ts";
import { CapabilityStatus } from "../capability/types.ts";
import { enforceBoundary } from "./enforcer.ts";

const NOW = "2026-09-05T23:00:00.000Z";
const LATER = "2026-09-06T23:00:00.000Z";
const MID = "2026-09-06T12:00:00.000Z";

function subject() {
  return createSubject({
    id: "sub-h-1",
    type: "Human",
    origin: { kind: "human-registered", source: "owner" },
    tenantId: "ten-1",
    organizationId: "org-1",
    createdAt: NOW,
    status: "ACTIVE",
  });
}

function grant(over: Record<string, string> = {}) {
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
    ...over,
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

const request = {
  subjectId: "sub-h-1",
  grantId: "g-1",
  capabilityId: "c-1",
  action: "read",
  resource: "doc:1",
  isolation: { tenantId: "ten-1", domain: "agbofa.core", environment: "production" },
};

test("valid subject-grant-capability-request chain passes", () => {
  const result = enforceBoundary({ subject: subject(), grant: grant(), capability: capability(), request });
  assert.equal(result.passed, true);
  assert.deepEqual(result.violations, []);
});

test("subject to grant mismatch fails closed", () => {
  const result = enforceBoundary({
    subject: subject(),
    grant: grant({ subject: "other-sub" }),
    capability: capability(),
    request,
  });
  assert.equal(result.passed, false);
  assert.equal(result.violations[0]?.reason, "subject-grant-mismatch");
});

test("grant to capability mismatch fails closed", () => {
  const result = enforceBoundary({
    subject: subject(),
    grant: grant(),
    capability: capability({ grantId: "g-other" }),
    request,
  });
  assert.equal(result.passed, false);
  assert.equal(result.violations[0]?.reason, "grant-capability-mismatch");
});

test("capability subject mismatch fails closed", () => {
  const result = enforceBoundary({
    subject: subject(),
    grant: grant(),
    capability: capability({ subjectId: "other-sub" }),
    request,
  });
  assert.equal(result.passed, false);
  assert.equal(result.violations[0]?.reason, "capability-subject-mismatch");
});

test("capability action mismatch against request fails closed", () => {
  const result = enforceBoundary({
    subject: subject(),
    grant: grant(),
    capability: capability(),
    request: { ...request, action: "write" },
  });
  assert.equal(result.passed, false);
  assert.equal(result.violations[0]?.reason, "capability-request-mismatch");
});

test("capability resource mismatch against request fails closed", () => {
  const result = enforceBoundary({
    subject: subject(),
    grant: grant(),
    capability: capability(),
    request: { ...request, resource: "doc:2" },
  });
  assert.equal(result.passed, false);
  assert.equal(result.violations[0]?.reason, "capability-request-mismatch");
});

test("subject to tenant mismatch fails closed", () => {
  const result = enforceBoundary({
    subject: subject(),
    grant: grant(),
    capability: capability(),
    request: { ...request, isolation: { ...request.isolation, tenantId: "ten-other" } },
  });
  assert.equal(result.passed, false);
  assert.equal(result.violations[0]?.reason, "subject-tenant-mismatch");
});
