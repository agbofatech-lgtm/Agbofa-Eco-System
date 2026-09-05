import type { Block, Section } from "./types";

function s(
  id: string,
  num: string,
  nav: string,
  title: string,
  dek: string,
  v2: Block[],
): Section {
  return {
    id,
    part: "Constitution",
    partId: "A",
    num,
    nav,
    title,
    dek,
    v1: [
      {
        k: "callout",
        tone: "note",
        title: "Phase 10 Article 10 deep draft is not in the received freeze",
        t: "Compact Article 10 in A.3 remains the short form. Articles 1–9 are LOCKED. Switch to the operative issue.",
      },
    ],
    v2,
  };
}

export const PHASE10_A10: Section[] = [
  s(
    "ph10",
    "XIII.0",
    "Phase 10",
    "Phase 10 — Article 10 draft status",
    "Audit Is Persistent. DRAFTED — NOT LOCKED. Kernel admission audit only.",
    [
      {
        k: "callout",
        tone: "law",
        title: "Authoritative Article 10 subject",
        t: "v5.3 compact: Article 10 — Audit Is Persistent. Compact: Consequential actions create durable audit records. Scope: all consequential actions. Prohibited: modification or deletion; bypass; tampering with timestamps, hashes, or chains. Required: events for all consequential actions; append-only; hash-chained; records include who, agent, authority, capability, product, environment, action, when, why, what happened, what was verified, what evidence exists. Enforcement: tamper detection triggers security alert. Consequence: system freeze and investigation. Compact A.3 not replaced. Articles 1–9 LOCKED. Article 10 NOT LOCKED. Runtime kernel: append-only in-process log — NOT a production Audit System. SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform. No v5.4. Article 11 CLOSED.",
      },
      {
        k: "table",
        cols: ["Phase", "Article", "Status"],
        rows: [
          ["Phase 1–9", "Articles 1–9", "LOCKED / HUMAN ACCEPTED — UNCHANGED"],
          ["Phase 10", "Article 10", "DRAFTED — NOT LOCKED"],
          ["Phase 11", "Article 11", "CLOSED / NOT AUTHORIZED"],
        ],
      },
    ],
  ),

  s(
    "a10law",
    "XIII",
    "Art. 10 Law",
    "Article 10 — Audit Is Persistent (law)",
    "Append-only, hash-chained history. Audit ≠ evidence ≠ grant ≠ SUCCESS. NOT LOCKED.",
    [
      {
        k: "callout",
        tone: "note",
        title: "A.3 compact form — not replaced",
        t: "A.3 Article 10 remains Audit Is Persistent. This draft operationalizes append-only write-control, hash chaining, freeze-on-tamper, and the rule that audit cannot rewrite SUCCESS or mint authority. Canonical object remains AuditEvent. Kernel KernelAuditRecord is an admission-kernel subset, not a competing audit type.",
      },
      { k: "h", t: "10.1 Purpose", l: 2 },
      {
        k: "p",
        t: "Constitutional history cannot be rewritten to manufacture SUCCESS, authority, or innocence. Every consequential action generates an audit record. Audit supports investigation. Audit is not evidence of correctness and not a grant.",
      },
      { k: "h", t: "10.2 Constitutional rule", l: 2 },
      {
        k: "p",
        t: "Every consequential action shall generate an append-only, hash-chained AuditEvent distinguishing what was requested, authorized, admitted, executed, resulted, verified, and determined. Bypass is prohibited. Tamper → freeze and investigation. Missing audit makes a consequential promotion constitutionally incomplete.",
      },
      { k: "h", t: "10.3 Distinctions", l: 2 },
      {
        k: "table",
        cols: ["Object", "Must not become"],
        rows: [
          ["AuditEvent", "EvidenceEnvelope, Grant, SUCCESS, Human Authority"],
          ["EvidenceEnvelope", "AuditEvent (Art. 9)"],
          ["KernelAuditRecord", "Production Audit System / SOC2 certification"],
        ],
      },
      { k: "h", t: "10.4 Write-control", l: 2 },
      {
        k: "p",
        t: "Append-only. Modification DENY. Deletion DENY. Rollback, recovery, and Worker DESTROY do not erase that events occurred. Freeze of execution after tamper does not freeze the duty to record the freeze itself.",
      },
      { k: "h", t: "10.5 Kernel increment", l: 2 },
      {
        k: "p",
        t: "The in-process kernel appends a KernelAuditRecord on every admit/halt/contain decision. Hash is a non-cryptographic chain for testable write-control. This does not implement durable storage, cryptographic signatures, or the full AuditEvent field set. SPECIFIED ≠ IMPLEMENTED.",
      },
    ],
  ),

  s(
    "a10adv",
    "XIII.A",
    "Art. 10 Attack",
    "Article 10 — adversarial matrix",
    "ATK-10. Audit cannot mint authority or SUCCESS. NOT LOCKED.",
    [
      {
        k: "table",
        cols: ["ID", "Attack", "Disposition"],
        rows: [
          ["ATK-10-01", "Modify prior audit record", "DENY; freeze"],
          ["ATK-10-02", "Delete audit record", "DENY; freeze"],
          ["ATK-10-03", "Bypass admit without audit", "DENY — incomplete"],
          ["ATK-10-04", "Break hash chain", "Detect; freeze execution"],
          ["ATK-10-05", "Treat audit as EvidenceEnvelope", "DENY that use"],
          ["ATK-10-06", "Treat audit as Grant", "DENY"],
          ["ATK-10-07", "Rewrite FAILED→SUCCESS via audit", "DENY"],
          ["ATK-10-08", "Orchestrator log as admission audit", "Not Broker admit"],
          ["ATK-10-09", "Provider log as AGBOFA audit", "Not AGBOFA audit"],
          ["ATK-10-10", "Continue execution after freeze", "DENY audit-frozen"],
          ["ATK-10-11", "Cross-tenant audit as local SUCCESS", "DENY (Art. 9/14)"],
          ["ATK-10-12", "DESTROY worker to hide audit", "DENY — DESTROY ≠ audit wipe"],
        ],
      },
    ],
  ),

  s(
    "a10inv",
    "XIII.I",
    "Art. 10 Invariants",
    "Article 10 — invariants",
    "INV-10. DRAFTED — NOT LOCKED.",
    [
      {
        k: "table",
        cols: ["ID", "Invariant", "Expected"],
        rows: [
          ["INV-10-01", "Consequential admit() writes exactly one new audit record", "log grows by 1"],
          ["INV-10-02", "Audit is append-only", "rewrite/delete DENY"],
          ["INV-10-03", "Audit ≠ EvidenceEnvelope ≠ Grant", "cannot mint chain/token/SUCCESS"],
          ["INV-10-04", "Hash chain verifies or execution freezes", "audit-frozen DENY"],
          ["INV-10-05", "Frozen store still records the deny", "append continues"],
          ["INV-10-06", "Audit cannot rewrite historical failure", "DENY"],
        ],
      },
    ],
  ),
];
