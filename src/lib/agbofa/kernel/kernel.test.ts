import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AuthorityGrant, CapabilityToken } from "../contracts.ts";
import { admit, containIfQuarantined, haltIfRevoked } from "./broker.ts";
import { emptySupervisor } from "./supervisor.ts";
import { emptyStore, type ExecutionRequest } from "./types.ts";

const NOW = "2026-09-04T18:00:00.000Z";
const LATER = "2026-09-05T18:00:00.000Z";

function grant(p: Partial<AuthorityGrant> = {}): AuthorityGrant {
  const { scope, ...rest } = p;
  return {
    grantId: "g1",
    subject: "agent-1",
    chain: ["constitution", "human-owner", "g1"],
    issuedBy: "human-owner",
    issuedAt: "2026-09-01T00:00:00.000Z",
    expiresAt: LATER,
    status: "active",
    ...rest,
    scope: { tenantId: "t1", productId: "p1", environmentId: "workspace", ...scope },
  };
}

function token(p: Partial<CapabilityToken> = {}): CapabilityToken {
  const { scope, subject, ...rest } = p;
  return {
    tokenId: "tok1",
    constitutionVersion: "v5.3",
    tenantId: "t1",
    productId: "p1",
    environmentId: "workspace",
    capability: "docs.read",
    action: "read",
    resource: "docs",
    authorityGrantId: "g1",
    proposalId: "pr1",
    riskClass: "LOW",
    issuer: "capability-system",
    issuedAt: NOW,
    expiresAt: LATER,
    nonce: "n1",
    status: "active",
    ...rest,
    subject: subject ?? { type: "agent", id: "agent-1" },
    scope: {
      maxDurationSec: 60,
      maxOperations: 10,
      allowedCommands: ["read"],
      network: "none",
      filesystem: "workspace_only",
      ...scope,
    },
  };
}

function req(p: Partial<ExecutionRequest> = {}): ExecutionRequest {
  return {
    requestId: "r1",
    caller: "agent",
    actorId: "agent-1",
    tenantId: "t1",
    productId: "p1",
    environmentId: "workspace",
    action: "read",
    resource: "docs",
    riskClass: "LOW",
    grant: grant(),
    token: token(),
    nowIso: NOW,
    ...p,
  };
}

describe("Category 1 — genuine admission", () => {
  it("lawful chain is ALLOW but execution DENY without isolation attestation", () => {
    const d = admit(req(), emptyStore());
    assert.equal(d.chain, "ALLOW");
    assert.equal(d.disposition, "DENY");
    assert.equal(d.why, "isolation-unavailable");
    assert.equal(d.isolationBound, false);
    assert.equal(d.isolationAttestation.verified, false);
    assert.equal(d.hostExecuted, false);
    assert.equal(d.hostExecutionAttempted, false);
    assert.equal(d.executionBackend, "none");
    assert.equal(d.evidenceClass, "admission");
  });

  it("INV missing authority", () => {
    const d = admit(req({ grant: null }), emptyStore());
    assert.equal(d.chain, "DENY");
    assert.equal(d.why, "missing-authority");
  });

  it("INV missing capability", () => {
    const d = admit(req({ token: null }), emptyStore());
    assert.equal(d.why, "missing-capability");
  });

  it("wrong tenant / product / environment / subject", () => {
    assert.equal(admit(req({ tenantId: "t2" }), emptyStore()).why, "wrong-tenant");
    assert.equal(admit(req({ productId: "p2" }), emptyStore()).why, "wrong-product");
    assert.equal(
      admit(req({ environmentId: "production", token: token({ environmentId: "workspace" }) }), emptyStore()).disposition,
      "DENY",
    );
    assert.equal(
      admit(req({ token: token({ subject: { type: "agent", id: "other" } }) }), emptyStore()).why,
      "wrong-subject",
    );
  });

  it("worker/broker cannot issue grants", () => {
    assert.equal(admit(req({ grant: grant({ issuedBy: "worker" }) }), emptyStore()).why, "kernel-broker-not-grantor");
    assert.equal(admit(req({ grant: grant({ issuedBy: "broker" }) }), emptyStore()).why, "kernel-broker-not-grantor");
  });

  it("intelligence and sidecar callers", () => {
    assert.equal(admit(req({ caller: "intelligence" }), emptyStore()).why, "intelligence-not-executor");
    assert.equal(admit(req({ caller: "sidecar" }), emptyStore()).why, "broker-bypass");
  });

  it("unclassified consequential", () => {
    assert.equal(admit(req({ riskClass: null }), emptyStore()).why, "unclassified-consequential");
  });

  it("open network is admission policy DENY", () => {
    assert.equal(admit(req({ requestedNetwork: "open" }), emptyStore()).why, "unauthorized-egress");
  });

  it("child parentScope mismatch", () => {
    const d = admit(
      req({
        parentScope: {
          tenantId: "t1",
          productId: "p1",
          environmentId: "workspace",
          action: "read",
          resource: "docs",
        },
        environmentId: "production",
        token: token({ environmentId: "production" }),
        grant: grant({ scope: { tenantId: "t1", productId: "p1", environmentId: "production" } }),
      }),
      emptyStore(),
    );
    assert.equal(d.why, "child-exceeds-parent");
  });

  it("scheduler without grant", () => {
    assert.equal(admit(req({ caller: "scheduler", grant: null, token: null }), emptyStore()).why, "scheduler-bypass");
  });

  it("queue revalidates revoked grant from store", () => {
    const s = emptyStore();
    s.revokedGrantIds.add("g1");
    const d = admit(req({ queued: true }), s);
    assert.equal(d.disposition, "DENY");
    assert.match(d.why, /revoked|stale/);
  });

  it("retry bound", () => {
    assert.equal(admit(req({ retry: true, retryCount: 9, maxRetries: 1 }), emptyStore()).why, "retry-exceeded");
  });

  it("emergency production deploy", () => {
    const d = admit(
      req({
        environmentId: "production",
        action: "deploy",
        resource: "app",
        riskClass: "HIGH",
        grant: grant({ scope: { tenantId: "t1", productId: "p1", environmentId: "production" } }),
        token: token({ environmentId: "production", action: "deploy", resource: "app", riskClass: "HIGH" }),
        emergency: true,
      }),
      emptyStore(),
    );
    assert.equal(d.why, "emergency-production-bypass");
  });

  it("worker-reported oracles are ignored", () => {
    const d = admit(
      req({
        workerReported: {
          sandboxEscapeDetected: true,
          timeoutExceeded: true,
          quarantineBypass: true,
          alternativePath: true,
          osRoot: true,
        },
      }),
      emptyStore(),
    );
    assert.equal(d.why, "isolation-unavailable");
    assert.equal(d.chain, "ALLOW");
    assert.notEqual(d.disposition, "QUARANTINE");
  });
});

describe("Category 1 — quarantine and revocation from store", () => {
  it("quarantined actor cannot be admitted (no bypass flag)", () => {
    const s = emptyStore();
    s.quarantinedActors.add("agent-1");
    const d = admit(req(), s);
    assert.equal(d.why, "quarantine-bypass");
    assert.equal(d.sensorSource, "store");
  });

  it("in-flight logical run + quarantine → HALT policy (not SIGKILL)", () => {
    const s = emptyStore();
    s.quarantinedActors.add("agent-1");
    const d = containIfQuarantined(req(), s, true);
    assert.equal(d?.disposition, "HALT");
    assert.equal(d?.why, "quarantine-inflight");
    assert.equal(d?.evidenceClass, "admission");
  });

  it("revocation uses store ids, not a revokeDuringExecution flag", () => {
    const s = emptyStore();
    s.revokedGrantIds.add("g1");
    const d = haltIfRevoked(req(), s);
    assert.equal(d?.disposition, "HALT");
    assert.equal(d?.sensorSource, "store");
    assert.equal(d?.isolationBound, false);
  });
});

describe("Category 2 — supervisor disposition wiring (not OS detection)", () => {
  const cases: Array<{ kind: Parameters<ReturnType<typeof emptySupervisor>["report"]>[0]["kind"]; expect: string }> = [
    { kind: "sandbox-escape", expect: "QUARANTINE" },
    { kind: "timeout", expect: "HALT" },
    { kind: "resource-limit", expect: "HALT" },
    { kind: "unauthorized-egress", expect: "CONTAIN" },
    { kind: "secret-boundary", expect: "QUARANTINE" },
    { kind: "isolation-downgrade", expect: "QUARANTINE" },
    { kind: "recursive-spawn", expect: "HALT" },
    { kind: "host-fallback-attempt", expect: "DENY" },
    { kind: "broker-bypass-attempt", expect: "DENY" },
    { kind: "continue-after-escape", expect: "QUARANTINE" },
  ];

  for (const c of cases) {
    it(`wiring ${c.kind}`, () => {
      const sup = emptySupervisor();
      sup.report({ kind: c.kind, source: "test-harness-supervisor", atIso: NOW });
      const d = admit(req({ requestId: c.kind }), emptyStore(), { supervisor: sup });
      assert.equal(d.disposition, c.expect);
      assert.equal(d.evidenceClass, "supervisor-disposition");
      assert.equal(d.isolationBound, false);
      assert.equal(d.hostExecutionAttempted, false);
    });
  }
});

describe("Category 3 — runtime enforcement", () => {
  it("count is zero: no OS worker, cgroup, netns, or process kill", () => {
    assert.equal(0, 0);
  });
});

describe("Category 4 — not implementable here", () => {
  it("physical isolation attestation cannot be verified", () => {
    const d = admit(req(), emptyStore());
    assert.equal(d.isolationAttestation.status, "unavailable");
    assert.equal(d.isolationAttestation.verified, false);
    assert.equal(d.isolationBound, false);
  });
});

describe("false-evidence guards", () => {
  it("admit never sets isolationBound true in this increment", () => {
    const d = admit(req(), emptyStore());
    assert.equal(d.isolationBound, false);
  });

  it("hostExecuted is backend-none, not isolation proof", () => {
    const d = admit(req(), emptyStore());
    assert.equal(d.executionBackend, "none");
    assert.equal(d.hostExecuted, false);
  });

  it("agbofa kernel source does not spawn host processes", () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    for (const f of ["broker.ts", "guard.ts", "index.ts"]) {
      const src = readFileSync(join(dir, f), "utf8");
      assert.equal(src.includes("child_process"), false, f);
      assert.equal(src.includes("spawn("), false, f);
    }
  });
});
