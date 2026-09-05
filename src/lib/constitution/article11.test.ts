import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { ARTICLES } from "./articles.ts";
import { LEDGER, VERSION } from "./ledger.ts";
import {
  ARTICLE_11_STATUS,
  ATTACK_ORACLE,
  COMPACT_ARTICLE_11,
  classifyGovernanceLayer,
  effectOverLabel,
  isLegitimateEvolution,
  weakensGovernance,
} from "./article11.ts";

const COMPACT = "An agent cannot modify the rules that govern its own authority.";

describe("Article 11 draft — constitutional oracle, not a Governance Engine", () => {
  it("compact A.3 short form is unchanged", () => {
    const art11 = ARTICLES.find((a) => a.n === 11);
    assert.equal(art11?.compact, COMPACT);
    assert.equal(COMPACT_ARTICLE_11, COMPACT);
    const pasted = readFileSync("attachments/pasted-text.txt", "utf8");
    assert.match(pasted, /An agent cannot modify the rules that govern its own authority\./);
  });

  it("Article 11 and Article 12 are DRAFTED, not LOCKED", () => {
    const art11 = ARTICLES.find((a) => a.n === 11);
    const art12 = ARTICLES.find((a) => a.n === 12);
    assert.equal(art11?.status, "DRAFTED");
    assert.equal(ARTICLE_11_STATUS, "DRAFTED");
    assert.equal(art12?.status, "DRAFTED");
    assert.equal(
      LEDGER.find((r) => r.n === "11")?.status,
      "DRAFT — OWNER REVIEW REQUIRED",
    );
    assert.equal(
      LEDGER.find((r) => r.n === "12")?.status,
      "DRAFT — OWNER REVIEW REQUIRED",
    );
    assert.equal(VERSION, "v5.3");
  });

  it("Articles 1–10 remain LOCKED", () => {
    for (const a of ARTICLES.filter((x) => x.n >= 1 && x.n <= 10)) {
      assert.equal(a.status, "LOCKED", `Article ${a.n}`);
    }
  });

  it("Article 11 draft carries four-problem split, act split, and INV-11-A1..A8", () => {
    const art11 = ARTICLES.find((a) => a.n === 11);
    const hay = JSON.stringify({
      article: art11,
      ledger11: LEDGER.find((r) => r.n === "11"),
    });
    for (const needle of [
      "GOVERNANCE MODIFICATION",
      "GOVERNANCE ADMINISTRATION",
      "POLICY CONFIGURATION",
      "RUNTIME EXECUTION",
      "PROPOSAL",
      "APPROVAL",
      "VERSIONING",
      "IMPLEMENTATION",
      "INDEPENDENT VERIFICATION",
      "INV-11-A1",
      "INV-11-A2",
      "INV-11-A3",
      "INV-11-A4",
      "INV-11-A5",
      "INV-11-A6",
      "INV-11-A7",
      "INV-11-A8",
      "DRAFT — OWNER REVIEW REQUIRED",
    ]) {
      assert.ok(hay.includes(needle), needle);
    }
  });

  it("adversarial oracle classifies required attacks as MODIFICATION", () => {
    const names = ATTACK_ORACLE.map((r) => r.attack);
    for (const need of [
      "self-exemption",
      "configuration laundering",
      "interpretation capture",
      "emergency exemption",
      "recovery exemption",
      "autonomy exemption",
      "provider-path bypass",
      "shadow Broker",
      "parallel governance engine",
      "relabeling",
      "generated-product sovereignty",
    ]) {
      assert.ok(names.includes(need), need);
    }
    for (const row of ATTACK_ORACLE) {
      assert.equal(row.layer, "MODIFICATION");
    }
  });

  it("effect over label: config/patch labels cannot hide floor-lowering", () => {
    const layer = classifyGovernanceLayer({
      label: "config flag",
      lowersConstitutionalFloor: true,
    });
    assert.equal(effectOverLabel("config flag", layer), "MODIFICATION");
    assert.equal(weakensGovernance({ lowersConstitutionalFloor: true }), true);
  });

  it("legitimate Human-authorized evolution remains possible without weakening", () => {
    assert.equal(
      isLegitimateEvolution({
        isHumanAuthorizedAmendment: true,
        staysInsidePolicyFloors: true,
      }),
      true,
    );
    assert.equal(
      classifyGovernanceLayer({
        isHumanAuthorizedAmendment: true,
      }),
      "MODIFICATION",
    );
    assert.equal(
      classifyGovernanceLayer({
        isAdmittedExecutionOfApprovedText: true,
      }),
      "EXECUTION",
    );
    assert.equal(
      classifyGovernanceLayer({
        isScopedAdminUnderExistingLaw: true,
      }),
      "ADMINISTRATION",
    );
    assert.equal(
      classifyGovernanceLayer({
        staysInsidePolicyFloors: true,
      }),
      "CONFIGURATION",
    );
  });

  it("emergency, recovery, and unlabeled changes do not become exemptions", () => {
    assert.equal(
      classifyGovernanceLayer({ usesEmergencyOrRecoveryAsRewrite: true }),
      "MODIFICATION",
    );
    assert.equal(classifyGovernanceLayer({ label: "hygiene" }), "MODIFICATION");
    assert.equal(
      isLegitimateEvolution({
        isHumanAuthorizedAmendment: true,
        usesEmergencyOrRecoveryAsRewrite: true,
      }),
      false,
    );
  });
});
