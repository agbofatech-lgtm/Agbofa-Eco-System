# AGBOFA Continuity / Handover

**Status of this document:** authoritative checkpoint for any successor agent or engineer.  
**Do not assume prior chat history.** Clone or pull this repository, read this file first, then inspect the tree.

| Field | Value |
| --- | --- |
| Constitution version | v5.3 (no v5.4 authorized) |
| Checkpoint date | 2026-09-05 |
| Law last changed | `78cb9d14c41b4467556cf63f37b8fc60409228cd` — Articles 11 and 12 marked DRAFTED in reader source |
| Hygiene parent | `dcd4ab48c80a941e2a59a8ff9e6bc00f00339c95` — Article 11 tests aligned to ledger |
| Runtime | SPECIFIED ≠ IMPLEMENTED |
| Reader | Constitution Reader is a **document interface**, not the AGBOFA platform |
| Gate | Baseline freeze after H5/H6 reader consistency. Runtime Phase 1 is **not** started by this checkpoint |

---

## A. Project identity

**AGBOFA** is a governed digital product operating system / ecosystem. It owns authority, governance, execution admission, isolation, verification, evidence, audit, memory, and recovery. Intelligence providers are replaceable. They are not sovereign.

Authoritative compact source: `attachments/pasted-text.txt`. Status-bearing reader law: `src/lib/constitution/articles.ts` + `src/lib/constitution/ledger.ts`. Compact A.3 display catalogue (not a status ledger): `src/lib/doc/articles.ts`. Deep drafts: `src/lib/doc/sections-phase*.ts`. Kernel (admission only): `src/lib/agbofa/kernel/`.

---

## B. Current exact state

Status objects: `src/lib/constitution/ledger.ts` and `src/lib/constitution/articles.ts`.

| Articles | Status | Rule |
| --- | --- |
| **1–10** | **LOCKED / HUMAN ACCEPTED** | **DO NOT MODIFY the law.** |
| **11 — Governance Cannot Be Weakened by the Governed** | **DRAFT — OWNER REVIEW REQUIRED** | Compact A.3 unchanged. Classifier in `article11.ts` is an oracle, **not** a Governance Engine. Not locked. |
| **12 — Autonomy Is Earned** | **DRAFT — OWNER REVIEW REQUIRED** | Compact A.3 unchanged. A0–A5 is the sole operative ladder. Classifier in `article12.ts` is an oracle, **not** an Autonomy Engine. Compact A.4 L4 self-verify is non-operative. Not locked. |
| **13–16** | **COMPACT / NOT AUTHORIZED** | Compact A.3 text exists. Do not treat as acceptance. Do not implement. |

**Phase 9:** LOCKED. Runtime Evidence Store remains unimplemented.

**Article 10 constitutional law:** LOCKED.

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

**Kernel honesty:** `admit()` is fail-closed and in-process. A lawful chain still returns `disposition: DENY`, `why: isolation-unavailable`, `isolationBound: false`, `executionBackend: none`. Grants and tokens are caller-supplied predicates. There is no issuance service, no durable grant store, and no host execution backend.

**Named cross-invariants INV-X-GEN / INV-X-COMPOSE / INV-X-ABSENCE** are not repository law objects. Concepts exist in article prose and in fail-closed kernel behavior. Do not invent the IDs as locked law.

**Article 5 compact presentation:** `src/lib/doc/articles.ts` matches compact A.3. `src/lib/constitution/articles.ts` currently uses a different Art. 5 compact string while remaining LOCKED. Reconciling that string is Owner-gated. Do not rewrite it in hygiene.

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

Intelligence ≠ authority. Capability ≠ authority. Execution ≠ success. No second Broker. Worker ephemeral. Evidence precedes trust. Audit append-only. Provider permission ≠ grant. SPECIFIED ≠ IMPLEMENTED. No v5.4. No Article 17.

---

## F. Work boundary

**Allowed without new authorization:** read repo; tests of reader/kernel; documentation hygiene that does not change locked law.

**Requires Owner authorization:** amend Articles 1–10 (including Art. 5 compact reconciliation); lock or amend Articles 11–16; add named INV-X-* identifiers as law; Evidence Store; production/durable/cryptographic Audit System; Authority issuance service; host execution backend; horizon implementation; claiming production audit/M4/M5/Day-30; Runtime Phase 1.

**Forbidden:** second sovereignty/admission path; resident Workers; treating audit or evidence as grants; treating compact Articles 13–16 as authorized; treating Article 11/12 oracles as Governance or Autonomy Engines; creating Article 17 or v5.4.

---

## G. Next authorized step

Reader copy is derived from `ledger.ts`. Dual-catalogue roles are labelled. Constitutional tests of the kernel and Article 11 are wired.

Do **not** begin Runtime Phase 1 automatically. Do not lock Articles 11–16. Do not start Product Intelligence. Do not implement horizon items.

Owner decisions that do not block a baseline freeze:

1. Article 5 compact: restore A.3 wording, or accept the current LOCKED-module short form.
2. Whether named INV-X-* identifiers may be added as an index to existing article prose.
3. Whether Runtime Phase 1 (Identity / Authority / Capability skeleton) is authorized.

---

## H. Runtime honesty

Not certified: OS isolation, Evidence Store, production Audit System, AG-VER/AG-SECV, Day-30, M4/M5, Authority issuance, Generated Subject Registry.
