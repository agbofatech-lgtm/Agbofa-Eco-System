import assert from "node:assert/strict";
import { test } from "node:test";
import { evaluateIsolation } from "./isolation.ts";
import { isolationDenied, isolationSatisfied, type IsolationContext } from "./types.ts";

const ctx: IsolationContext = {
  tenantId: "ten-1",
  domain: "agbofa.core",
  environment: "production",
};

function flags(d: ReturnType<typeof evaluateIsolation>) {
  assert.equal(d.admitted, false);
  assert.equal(d.executed, false);
  assert.equal(d.issuedGrant, false);
  assert.equal(d.issuedCapability, false);
}

test("valid isolation context is satisfied and not admitted", () => {
  const d = evaluateIsolation(ctx, { tenantId: "ten-1" });
  assert.equal(d.disposition, "SATISFIED");
  assert.equal(d.reason, "isolation-satisfied");
  assert.equal(d.isolated, true);
  flags(d);
});

test("missing or malformed context is unavailable or malformed", () => {
  assert.equal(evaluateIsolation(null).reason, "isolation-unavailable");
  assert.equal(evaluateIsolation(undefined).reason, "isolation-unavailable");
  assert.equal(evaluateIsolation({ ...ctx, tenantId: "" }).reason, "missing-tenant");
  assert.equal(evaluateIsolation({ ...ctx, domain: "  " }).reason, "missing-domain");
  assert.equal(evaluateIsolation({ ...ctx, environment: null }).reason, "missing-environment");
  assert.equal(evaluateIsolation({ ...ctx, environment: "prod" }).reason, "invalid-environment");
});

test("tenant domain environment mismatches violate isolation", () => {
  assert.equal(evaluateIsolation(ctx, { tenantId: "ten-other" }).reason, "tenant-mismatch");
  assert.equal(evaluateIsolation(ctx, { tenantId: "ten-1", domain: "other.core" }).reason, "domain-mismatch");
  assert.equal(evaluateIsolation(ctx, { tenantId: "ten-1", environment: "development" }).reason, "environment-mismatch");
});

test("wildcards and prefixes cannot satisfy isolation", () => {
  assert.equal(evaluateIsolation({ ...ctx, domain: "*.core" }).reason, "wildcard-forbidden");
  assert.equal(evaluateIsolation({ ...ctx, tenantId: "ten-*" }).reason, "wildcard-forbidden");
  assert.equal(evaluateIsolation({ ...ctx, domain: "agbofa/" }).reason, "wildcard-forbidden");
});

test("isolation constructors cannot admit or execute", () => {
  const bad = isolationDenied("UNAVAILABLE", "isolation-unavailable");
  assert.equal(bad.isolated, false);
  flags(bad);
  const ok = isolationSatisfied();
  assert.equal(ok.isolated, true);
  flags(ok);
});
