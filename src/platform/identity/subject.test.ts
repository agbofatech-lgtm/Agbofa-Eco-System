import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SubjectRegistry } from "./registry.ts";
import { createSubject, transitionSubject } from "./subject.ts";
import {
  asOrganizationId,
  asSubjectId,
  asTenantId,
  DomainError,
  type SubjectType,
} from "./types.ts";

const T0 = "2026-09-05T00:00:00.000Z";
const T1 = "2026-09-05T01:00:00.000Z";
const T2 = "2026-09-05T02:00:00.000Z";
const T3 = "2026-09-05T03:00:00.000Z";

function draft(p: { id?: string; type?: SubjectType; tenantId?: string; organizationId?: string } = {}) {
  return {
    id: p.id ?? "sub-1",
    type: p.type ?? ("Human" as const),
    origin: { kind: "human-registered" as const, source: "owner-register" },
    tenantId: p.tenantId ?? "tenant-a",
    organizationId: p.organizationId ?? "org-a",
    createdAt: T0,
  };
}

describe("Identity domain — creation", () => {
  it("creates Human, Agent, and System subjects", () => {
    for (const type of ["Human", "Agent", "System"] as const) {
      const s = createSubject(draft({ id: type, type }));
      assert.equal(s.type, type);
      assert.equal(s.status, "PENDING");
      assert.equal(s.origin.kind, "human-registered");
      assert.notEqual(s.origin.source, "authority");
    }
  });

  it("rejects empty identifiers", () => {
    assert.throws(() => createSubject(draft({ id: "  " })), DomainError);
    assert.throws(() => createSubject(draft({ tenantId: "" })), DomainError);
  });
});

describe("Identity domain — registry", () => {
  it("retrieves by id, tenant, and organization", () => {
    const reg = new SubjectRegistry();
    const human = createSubject(draft({ id: "h1", type: "Human" }));
    const agent = createSubject(draft({ id: "a1", type: "Agent", organizationId: "org-b" }));
    reg.register(human);
    reg.register(agent);
    assert.equal(reg.getById(asSubjectId("h1"))?.type, "Human");
    assert.equal(reg.findByTenant(asTenantId("tenant-a")).length, 2);
    assert.equal(reg.findByOrganization(asOrganizationId("org-b")).length, 1);
    assert.equal(reg.persistence, "memory");
  });

  it("rejects duplicate subject ids", () => {
    const reg = new SubjectRegistry();
    reg.register(createSubject(draft({ id: "dup" })));
    assert.throws(() => reg.register(createSubject(draft({ id: "dup" }))), (err: unknown) => {
      assert.ok(err instanceof DomainError);
      assert.equal(err.code, "duplicate-subject-id");
      return true;
    });
  });
});

describe("Identity domain — lifecycle", () => {
  it("allows PENDING→ACTIVE→SUSPENDED→TERMINATED and ACTIVE→QUARANTINED", () => {
    let s = createSubject(draft());
    s = transitionSubject(s, "ACTIVE", T1, "activate");
    assert.equal(s.status, "ACTIVE");
    const quarantined = transitionSubject(s, "QUARANTINED", T2, "contain");
    assert.equal(quarantined.status, "QUARANTINED");
    const terminatedQ = transitionSubject(quarantined, "TERMINATED", T3, "end");
    assert.equal(terminatedQ.status, "TERMINATED");
    const suspended = transitionSubject(s, "SUSPENDED", T2, "pause");
    assert.equal(transitionSubject(suspended, "TERMINATED", T3, "end").status, "TERMINATED");
  });

  it("allows SUSPENDED→ACTIVE and denies TERMINATED resurrection", () => {
    let s = createSubject(draft());
    s = transitionSubject(s, "ACTIVE", T1, "on");
    s = transitionSubject(s, "SUSPENDED", T2, "pause");
    s = transitionSubject(s, "ACTIVE", T3, "resume");
    assert.equal(s.status, "ACTIVE");
    s = transitionSubject(s, "SUSPENDED", "2026-09-05T04:00:00.000Z", "pause-2");
    s = transitionSubject(s, "TERMINATED", "2026-09-05T05:00:00.000Z", "end");
    assert.throws(() => transitionSubject(s, "ACTIVE", "2026-09-05T06:00:00.000Z", "resurrect"), (err: unknown) => {
      assert.ok(err instanceof DomainError);
      assert.equal(err.code, "invalid-transition");
      return true;
    });
    assert.throws(() => transitionSubject(s, "PENDING", "2026-09-05T06:00:00.000Z", "reset"), DomainError);
  });
});
