# AGBOFA Continuity / Handover

**Status of this document:** authoritative checkpoint for any successor agent or engineer.  
**Do not assume prior chat history.** Clone or pull this repository, read this file first, then inspect the tree.

| Field | Value |
| --- | --- |
| Constitution version | v5.3 (no v5.4 authorized) |
| Checkpoint date | 2026-09-05 |
| Baseline commit | `9472356e4acb34c1d1002fb026be511584dec8bc` |
| Runtime | SPECIFIED ≠ IMPLEMENTED |
| Reader | Constitution Reader is a **document interface**, not the AGBOFA platform |

---

## A. Project identity

**AGBOFA** is a governed digital product operating system / ecosystem. It owns authority, governance, execution admission, isolation, verification, evidence, audit, memory, and recovery. Intelligence providers are replaceable. They are not sovereign.

Authoritative compact source: `attachments/pasted-text.txt`. Reader summaries: `src/lib/constitution/articles.ts`. Deep drafts: `src/lib/doc/sections-phase*.ts`. Kernel (admission only): `src/lib/agbofa/kernel/`.

---

## B. Current exact state

| Articles | Status | Rule |
| --- | --- | --- |
| **1–8** | **LOCKED — HUMAN ACCEPTED** | **DO NOT MODIFY** |
| **9 — Evidence Precedes Trust** | **LOCKED — HUMAN ACCEPTED** (Phase 9 closed 2026-09-05) | **DO NOT MODIFY.** Runtime Evidence Store still pending. |
| **10 — Audit Is Persistent** | **DRAFTED — NOT LOCKED** | Deep draft + kernel append-only log. Do not auto-lock. |
| **11–16** | Compact / not fully deep-locked | Not authorized this increment. |

**Phase 9 acceptance:** CONDITIONALLY ACCEPTED then closed under Owner authorization. Condition: runtime Evidence Store remains unimplemented (correct under SPECIFIED ≠ IMPLEMENTED). `npm test` has pre-existing platform-script failures unrelated to Article 9. Kernel tests are the constitutional kernel evidence.

**Article 10 increment:** in-process `KernelAuditRecord` append-only hash chain on `admit()`. Not a production Audit System. Audit ≠ EvidenceEnvelope ≠ Grant ≠ SUCCESS.

---

## C. Constitutional spine

```
Human / AGBOFA Sovereignty
        ↓
Explicit Authority
        ↓
Scoped Capability
        ↓
Broker (admit only)
        ↓
Guard
        ↓
Ephemeral Worker
        ↓
Independent Verification
        ↓
Evidence
        ↓
Audit
```

---

## D. Future-readiness

```
CONSTITUTION → ONTOLOGY → CAPABILITY DOMAIN → IMPLEMENTATION
```

Horizon items: `docs/ARCHITECTURE-HORIZON.md`. Not authorized to implement.

---

## E. Invariants

Intelligence ≠ authority. Capability ≠ authority. Execution ≠ success. No second Broker. Worker ephemeral. Evidence precedes trust. Audit append-only. Provider permission ≠ grant. SPECIFIED ≠ IMPLEMENTED. No v5.4.

---

## F. Work boundary

**Allowed without new authorization:** read repo; tests of reader/kernel; documentation hygiene.

**Requires Owner authorization:** lock Article 10; amend 1–9; Article 11+; horizon implementation; claiming production audit/M4/M5/Day-30.

**Forbidden:** second sovereignty/admission path; resident Workers; treating audit or evidence as grants.

---

## G. Next authorized step

Await Owner authorization. Suggested: Human Acceptance gate for Article 10, or deepen Article 11 only if explicitly authorized. Do not start Product Intelligence.

---

## H. Runtime honesty

Not certified: OS isolation, Evidence Store, production Audit System, AG-VER/AG-SECV, Day-30, M4/M5.
