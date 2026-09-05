# AGBOFA Continuity / Handover

**Status of this document:** authoritative checkpoint for any successor agent or engineer.  
**Do not assume prior chat history.** Clone or pull this repository, read this file first, then inspect the tree.

| Field | Value |
| --- | --- |
| Constitution version | v5.3 (no v5.4 authorized) |
| Checkpoint date | 2026-09-05 |
| Baseline commit | this lock commit on `main` — `docs(constitution): lock Article 10 after human acceptance` |
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
| **1–9** | **LOCKED — HUMAN ACCEPTED** | **DO NOT MODIFY** |
| **10 — Audit Is Persistent** | **LOCKED — HUMAN ACCEPTED** | **DO NOT MODIFY the law.** Kernel increment remains limited (below). |
| **11–16** | **COMPACT / NOT AUTHORIZED** | Compact A.3 text exists. Do not treat as acceptance. Do not implement. |

**Phase 9:** LOCKED. Runtime Evidence Store remains unimplemented.

**Article 10 constitutional law:** LOCKED. Compact A.3 unchanged.

**Article 10 kernel increment (accepted limitations):**

- in-memory `KernelAuditRecord[]` on `KernelStore`
- FNV-1a **32-bit** over `previousHash\|requestId\|why` only
- **non-cryptographic** — not tamper evidence
- **partial hash coverage** — unhashed payload fields may mutate without failing `verifyAuditChain`
- **process-trusted store** — direct mutation of `auditLog` / `auditFrozen` / `previousAuditHash` is not a production boundary
- `tryRewriteAudit` / `tryDeleteAudit` / `freezeForTamper` are **not** hardened storage controls
- freeze denies admission; it does **not** mint authority, SUCCESS, or sovereignty
- process restart **resets** the chain — **not durable**
- **not** a production Audit System
- **not** the Article 9 Evidence Store

`AUDIT ≠ AUTHORITY ≠ GRANT ≠ EVIDENCE ≠ SUCCESS ≠ VERIFICATION`.

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

**Allowed without new authorization:** read repo; tests of reader/kernel; documentation hygiene that does not change locked law.

**Requires Owner authorization:** amend 1–10; Article 11+; Evidence Store; production/durable/cryptographic Audit System; horizon implementation; claiming production audit/M4/M5/Day-30.

**Forbidden:** second sovereignty/admission path; resident Workers; treating audit or evidence as grants; treating compact Articles 11–16 as authorized.

---

## G. Next authorized step

**Article 11 remains separately gated and requires explicit Owner authorization.**

Do not begin Article 11 automatically. Do not start Product Intelligence. Do not implement horizon items.

---

## H. Runtime honesty

Not certified: OS isolation, Evidence Store, production Audit System, AG-VER/AG-SECV, Day-30, M4/M5.
