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
        title: "Phase 10 Article 10 — LOCKED / HUMAN ACCEPTED",
        t: "Compact Article 10 in A.3 remains the short form. Articles 1–9 are LOCKED. Article 10 is LOCKED as constitutional law. Production Audit System remains unimplemented.",
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
    "Phase 10 — Article 10 lock status",
    "Audit Is Persistent. LOCKED — HUMAN ACCEPTED. Kernel increment ≠ production Audit System.",
    [
      {
        k: "callout",
        tone: "law",
        title: "Authoritative Article 10 subject",
        t: "v5.3 compact: Article 10 — Audit Is Persistent. Compact A.3 not replaced. Articles 1–9 LOCKED / UNCHANGED. Article 10 LOCKED / HUMAN ACCEPTED under Owner authorization 2026-09-05. Constitutional law is locked. Current kernel increment: in-memory, non-cryptographic FNV-1a 32-bit over previousHash|requestId|why, process-trusted KernelStore, non-durable. NOT a production Audit System. SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform. No v5.4. Article 11 CLOSED / NOT AUTHORIZED.",
      },
      {
        k: "table",
        cols: ["Phase", "Article", "Status"],
        rows: [
          ["Phase 1–9", "Articles 1–9", "LOCKED / HUMAN ACCEPTED — UNCHANGED"],
          ["Phase 10", "Article 10", "LOCKED / HUMAN ACCEPTED"],
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
    "Append-only, hash-chained history. Audit ≠ evidence ≠ grant ≠ SUCCESS. LOCKED.",
    [
      {
        k: "callout",
        tone: "note",
        title: "A.3 compact form — not replaced",
        t: "A.3 Article 10 remains Audit Is Persistent. This lock operationalizes append-only write-control, hash chaining, freeze-on-tamper, and the rule that audit cannot rewrite SUCCESS or mint authority. Canonical object remains AuditEvent. Kernel KernelAuditRecord is an admission-kernel subset, not a competing audit type and not a production Audit System.",
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
        t: "The in-process kernel appends a KernelAuditRecord on every admit/halt/contain decision. Hash is FNV-1a 32-bit over previousHash|requestId|why — non-cryptographic, incomplete field coverage, process-trusted store. tryRewriteAudit/tryDeleteAudit are prohibition stubs, not hardened storage. Restart resets memory. This does not implement durable storage, cryptographic signatures, or the full AuditEvent field set. SPECIFIED ≠ IMPLEMENTED.",
      },
      { k: "h", t: "10.6 Accepted limitations (lock conditions)", l: 2 },
      {
        k: "table",
        cols: ["Limitation", "Meaning"],
        rows: [
          ["In-memory", "Process restart erases the current chain. Not durable persistence."],
          ["Non-cryptographic", "FNV-1a 32-bit is not cryptographic tamper evidence."],
          ["Partial hash coverage", "Unhashed payload fields may mutate without failing verifyAuditChain."],
          ["Process-trusted store", "Direct mutation of auditLog / auditFrozen / previousAuditHash is not a production boundary."],
          ["Append stubs", "tryRewriteAudit / tryDeleteAudit / freezeForTamper are not hardened storage controls."],
          ["Freeze", "Denies admission; does not mint authority, SUCCESS, or sovereignty."],
        ],
      },
    ],
  ),

  s(
    "a10adv",
    "XIII.A",
    "Art. 10 Attack",
    "Article 10 — adversarial matrix",
    "ATK-10. Audit cannot mint authority or SUCCESS. LOCKED.",
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
    "INV-10. LOCKED — HUMAN ACCEPTED. Kernel increment remains limited.",
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
      {
        k: "callout",
        tone: "law",
        title: "LOCKED — HUMAN ACCEPTED",
        t: "Article 10 is constitutional law and is LOCKED. Compact A.3 unchanged. Articles 1–9 unchanged. The current kernel contains a limited in-memory, non-cryptographic audit-chain increment. The production durable Audit System remains future. Audit remains separate from authority, evidence, verification, and SUCCESS. Article 11 remains CLOSED / NOT AUTHORIZED. No v5.4. SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform.",
      },
    ],
  ),
];
