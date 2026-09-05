# AGBOFA Continuity / Handover

**Status of this document:** authoritative checkpoint for any successor agent or engineer.  
**Do not assume prior chat history.** Clone or pull this repository, read this file first, then inspect the tree.

| Field | Value |
| --- | --- |
| Constitution version | v5.3 (no v5.4 authorized) |
| Checkpoint date | 2026-09-05 |
| Checkpoint purpose | Preserve architectural and constitutional state |
| Runtime | SPECIFIED ≠ IMPLEMENTED |
| Reader | Constitution Reader in this repo is a **document interface**, not the AGBOFA platform |

---

## A. Project identity

**AGBOFA** is a governed digital product operating system / ecosystem. It owns authority, governance, execution admission, isolation, verification, evidence, audit, memory, and recovery. Intelligence providers (including any model) are replaceable. They are not sovereign.

The **Constitution** is the supreme governing law of the AGBOFA Ecosystem. Compact Articles 1–16 live as the short form (A.3). Deep drafts operationalize compact law. They do not replace compact titles.

Architectural mission: build products through a governed factory while remaining technology-neutral, provider-independent, and sovereignty-focused.

Authoritative compact source in this workspace snapshot: `attachments/pasted-text.txt` (received v5.0 freeze that v5.3 still rests on). Reader source of current article text: `src/lib/constitution/articles.ts`. Classification / future-readiness interpretation: `src/lib/constitution/interpretation.ts`. Ledger: `src/lib/constitution/ledger.ts`.

---

## B. Current exact state (checkpoint authority)

This checkpoint **reasserts** the following as the continuation boundary. Treat it as binding even if a UI label in the reader currently shows a more advanced lock on Article 9.

| Articles | Status | Rule for next agent |
| --- | --- | --- |
| **1–8** | **LOCKED — HUMAN ACCEPTED** | **DO NOT MODIFY** |
| **9 — Evidence Precedes Trust** | **DRAFT / NOT YET DEEP-LOCKED** | Do not treat as locked. Do not auto-lock. Deep-lock only after explicit Human Acceptance of the draft. |
| **10–16** | **COMPACT + reader-side deepening present; NOT FULLY DEEP-LOCKED** | Deepen under existing compact law. Do not auto-lock. Do not invent Article 17. |

**Current activity:** constitutional architecture continuation (documentation and drafting). Not platform implementation. Not Day-30 certification.

**Latest architectural decision:** Future-readiness audit completed and accepted as interpretation.

**Key conclusion:** new product domains and future capabilities do **not** automatically require new constitutional sovereignty paths. Classify below the Constitution unless a genuinely new sovereignty, authority, execution-admission, verification, or trust path cannot be governed by Articles 1–16.

**Reader UI note:** `src/lib/constitution/ledger.ts` may still display Article 9 as LOCKED from a prior drafting session. That display is **not** Human deep-lock. This handover is the status of record. Do not “fix” Articles 1–8 to reconcile labels. Do not silently lock Article 9.

---

## C. Constitutional spine (do not reinterpret locked text)

```
Human / AGBOFA Sovereignty
        ↓
Explicit Authority          (Art. 4)
        ↓
Scoped Capability           (Art. 5)
        ↓
Broker                      (admit only)
        ↓
Guard                       (create/bind isolation)
        ↓
Ephemeral Worker            (CREATE→BIND→RUN→EXTRACT→DESTROY)
        ↓
Independent Verification    (executor ≠ verifier)
        ↓
Evidence                    (attributable, bound; ≠ SUCCESS)
        ↓
Audit                       (append-only history)
```

Locked compact intent (do not rewrite):

1. Humans remain ultimately accountable.
2. AGBOFA controls issuance; externals do not grant authority.
3. Intelligence is not authority; outputs are proposals.
4. Every consequential action needs an explicit, current authority chain.
5. Technical ability / tokens / credentials are not authority.
6. Execution is isolated; Broker admits; Guard binds; Worker is ephemeral.
7. Execution is not success.
8. Verification is independent.

Article 9 compact: claims about system state require evidence. Evidence is not authority and not SUCCESS.

---

## D. Future-readiness decision (accepted interpretation)

```
CONSTITUTION
     ↓
PLATFORM ONTOLOGY
     ↓
CAPABILITY DOMAIN
     ↓
IMPLEMENTATION
```

Market categories, vendors, frameworks, and AI tools do **not** become articles.

Classification of every new concept:

| Class | Meaning |
| --- | --- |
| A | Constitutional principle (sovereignty / authority / trust / admission / verification / fundamental bounds). Highest amendment bar. |
| B | Platform ontology (Product, Agent, Work Item, Knowledge Corpus, Connector, Evidence, …). Ontology ≠ authority. |
| C | Capability domain (intelligence, automation, knowledge, experience, integration, …) under existing law. |
| D | Implementation (vendors, models, engines, APIs, UI, infra). Never promoted into law. |
| E | Architectural horizon. Recorded, not authorized to implement. |

Amendment is justified **only** where a genuinely new sovereignty path, authority model, execution admission path, verification model, or trust model cannot be governed by the existing architecture.

Horizon items (not implementation, not amendments) are listed in `docs/ARCHITECTURE-HORIZON.md`.

---

## E. Invariants to preserve

- Intelligence ≠ authority.
- Explicit authority required; default-deny.
- Scoped capability; token ≠ sovereignty.
- No second sovereignty path.
- No second Broker; orchestrators coordinate, they do not admit.
- No bypass of constitutional admission.
- Worker is ephemeral; durability attaches to governed **state / work items / evidence**, never to Worker identity.
- Execution ≠ success.
- Independent verification; executor ≠ verifier.
- Evidence precedes trust; evidence ≠ SUCCESS ≠ grant.
- Tenant isolation default-deny.
- Governance cannot be weakened by the governed.
- Provider independence; provider permission ≠ AGBOFA authority.
- Knowledge / memory / embeddings do not grant access or SUCCESS.
- Connectors are capabilities or implementation, not issuers.
- SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform. No v5.4.

---

## F. Work boundary for the next agent

**Allowed without new Human authorization**

- Read this file, compact source, and reader sources.
- Continue **Article 9** deep draft toward Human Acceptance (do not auto-lock).
- Deepen **Articles 10–16** against compact A.3 and the future-readiness interpretation.
- Documentation, tests of the **reader**, and repository hygiene.

**Requires explicit Human authorization**

- Locking any article (including 9–16).
- Amending Articles 1–8.
- Creating Article 17, v5.4, or market-category articles.
- Implementing Architectural Horizon items (Product Intelligence, workflows, orchestrators, connectors, durable workers, marketplace, federation, etc.).
- Claiming runtime enforcement, M4/M5, Day-30, or production certification.
- Creating a second Broker, grant path, or verification path.

**Forbidden**

- Redesigning the spine.
- Treating conversation history as source of truth over this repository.
- Implementing resident Workers.
- Treating RAG, tools, API keys, or vendor IAM as grants.

---

## G. Suggested next constitutional task

1. Pull this checkpoint.
2. Treat Article 9 as **draft**. Complete evidence binding / provenance / integrity against compact “Evidence Precedes Trust” and `EvidenceEnvelope` if/when platform contracts exist. Stop for Human Acceptance.
3. Then deepen Articles 10–16 one at a time, same gate.
4. Do not start Product Intelligence or any horizon item.

---

## H. Runtime honesty

Nothing in this checkpoint certifies:

- container / OS isolation
- Verification Engine
- Evidence Store
- AG-VER / AG-SECV running
- Day-30 enterprise completion
- M4 / M5

The Constitution specifies. Implementation later must prove enforcement.
