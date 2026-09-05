import type { Article } from "./model";

export const ARTICLES: Article[] = [
  {
    n: 1,
    title: "Human Sovereignty",
    compact:
      "Humans remain ultimately accountable for AGBOFA's existence, operation, and major consequential actions.",
    status: "LOCKED",
    purpose: "Human Authority is the legitimate origin of consequential authority. Machines cannot manufacture it.",
    rule:
      "Worker ≠ Human. Emergency freeze/revoke/isolate/contain/preserve/recover cannot become unrestricted production bypass. Failure of the Human Owner does not transfer sovereignty to a machine.",
    provisions: [
      "HIGH/CRITICAL require Human Authority.",
      "Emergency is containment, not standing grant issuance.",
      "Human override of agent recommendation is recorded.",
    ],
    future:
      "Agent products, orchestrators, and durable work items cannot become Human. New domains do not create machine sovereignty.",
    invariants: ["INV-1: No machine-originated Human Authority."],
  },
  {
    n: 2,
    title: "AGBOFA Sovereignty",
    compact: "AGBOFA controls the ecosystem's authority and governance mechanisms.",
    status: "LOCKED",
    purpose: "External systems, providers, and agents cannot issue AGBOFA authority.",
    rule:
      "All authority flows through the Authority System. The Execution Broker is admission, not a sovereign issuer. IAM, cloud, container, and provider permission ≠ AGBOFA authority.",
    provisions: [
      "No external grant path.",
      "No agent self-grant.",
      "New product domains enter this issuance path or they do not enter.",
    ],
    future:
      "Connectors, marketplaces, and future federation cannot become a second issuance path. Federation remains horizon, not Day-30.",
    invariants: ["INV-2: One constitutional issuance path."],
  },
  {
    n: 3,
    title: "Intelligence Is Not Authority",
    compact:
      "No AI provider, model, agent, recommendation, inference, or generated output automatically receives authority.",
    status: "LOCKED",
    purpose: "Intelligence proposes. It does not command.",
    rule:
      "All AI outputs enter as PROPOSALS. Confidence, plans, tool output, and generated code are not grants. Human messages are not demoted; machine-originated messages are not promoted.",
    provisions: [
      "Product intelligence, engineering intelligence, and generated artifacts remain proposals until governed.",
      "Knowledge retrieval and embeddings inform; they do not authorize.",
    ],
    future: "Unknown future models are still intelligence. They inherit this article without amendment.",
    invariants: ["INV-3: Intelligence cannot fill an authority-chain link."],
  },
  {
    n: 4,
    title: "Authority Is Explicit",
    compact: "Every consequential action requires an identifiable authority source.",
    status: "LOCKED",
    purpose: "No implicit, inferred, default-allow, or habit-based authority.",
    rule:
      "Every consequential action requires an explicit, valid, current authority chain traceable to a valid Human or constitutional source and issued through the Authority System. Missing or invalid link → DEFAULT-DENY. Explicit ≠ a human click on every LOW action.",
    provisions: [
      "No silent cross of tenant, product, environment, action, resource, or risk.",
      "Delegation cannot exceed possession or manufacture Human Authority.",
      "Prior success does not authorize the next act.",
    ],
    future: "Workflows and orchestrators sequence grants; they do not infer them.",
    invariants: ["INV-4: Incomplete chain cannot be admitted."],
  },
  {
    n: 5,
    title: "Capability Is Scoped",
    compact: "Possessing the technical ability to act is not authority to act.",
    status: "LOCKED",
    purpose: "Tokens, tools, credentials, and runtime privilege are not sovereignty.",
    rule:
      "Capability is a bounded technical means of an already-valid grant. Token cannot exceed the chain, amplify risk, or survive revocation. Credential possession ≠ authorization.",
    provisions: [
      "Connectors and API keys are capabilities, not grants.",
      "Oversize tokens DENY.",
      "Offline HIGH/CRITICAL require live verification.",
    ],
    future: "New tools are new token profiles, not new articles.",
    invariants: ["INV-5: Capability cannot become authority."],
  },
  {
    n: 6,
    title: "Execution Is Isolated",
    compact: "Intelligence does not receive unrestricted execution access.",
    status: "LOCKED",
    purpose: "Authorization to act is not authorization to execute without isolation.",
    rule:
      "Every execution occurs only through the Execution Broker, under a valid chain and token, within a context created and bound by the Isolation Guard. CREATE → BIND → RUN → EXTRACT → DESTROY. Network default-deny. Worker identity is ephemeral. Admission without bind → DENY.",
    provisions: [
      "Broker admits; Guard creates the jail. Broker is not the jail.",
      "Durability attaches to governed state, never to Worker identity.",
      "Orchestrators request execution; they do not admit it.",
      "Long-running work is re-admitted sequenced executions, not resident workers.",
    ],
    future: "No second Broker. No durable Worker. No vendor runtime as constitutional actor.",
    invariants: [
      "INV-6-01: No execution outside the authorized boundary.",
      "INV-6-31: Worker identity is not reusable after DESTROY.",
      "INV-6-32: Guard bind-allow is required.",
    ],
  },
  {
    n: 7,
    title: "Execution Is Not Success",
    compact: "An executed action does not constitute proof of correctness.",
    status: "LOCKED",
    purpose: "Completed ≠ correct ≠ safe ≠ successful.",
    rule:
      "Consequential execution shall not be treated as successful merely because it completed. SUCCEEDED is reserved for post-verification outcome determination. Exit 0, deploy complete, model claim, and provider OK are not SUCCESS.",
    provisions: [
      "Generated apps, artifacts, and experiences cannot self-declare SUCCESS.",
      "Partial, interrupted, and failed runs cannot be rewritten to SUCCEEDED.",
    ],
    future: "Any new generator still produces claims, not SUCCESS.",
    invariants: ["INV-7-01: Completion cannot by itself establish SUCCESS."],
  },
  {
    n: 8,
    title: "Verification Is Independent",
    compact: "Important outcomes must be independently verified.",
    status: "LOCKED",
    purpose: "Executor ≠ Verifier.",
    rule:
      "Verification must be functionally independent enough to prevent self-verification. Physical machines are not automatically required. AG-VER verifies and does not implement. AG-SECV verifies others; AG-SEC does not verify AG-SEC work. PASS does not mint grants.",
    provisions: [
      "Consensus of dependent agents is not independence.",
      "UNVERIFIED / INCONCLUSIVE / VERIFIED-FAIL cannot become SUCCESS.",
      "Verifier cannot modify the subject without a separate Art. 4–5 chain.",
    ],
    future: "New agent products cannot verify their own consequential work.",
    invariants: ["INV-8-01: Executor cannot be the final verifier of its own consequential execution."],
  },
  {
    n: 9,
    title: "Evidence Precedes Trust",
    compact: "Claims about system state require evidence.",
    status: "LOCKED",
    purpose:
      "Evidence is a governed record supporting a claim or verification outcome. It is not truth, authority, or SUCCESS.",
    rule:
      "Every consequential verification outcome and lifecycle transition that depends on evidence shall be supported by evidence attributable to the correct execution, subject, tenant, product, environment, authority chain, capability, and verification context. Missing, stale, forged, cross-bound, or unverifiable evidence shall not establish SUCCESS or the next consequential stage. Canonical object: EvidenceEnvelope. E0 is never acceptable for a consequential claim.",
    provisions: [
      "DATA ≠ CLAIM ≠ ARTIFACT ≠ OBSERVATION ≠ EVIDENCE ≠ VERIFICATION ≠ SUCCESS.",
      "No silent reuse across tenant, product, environment, or execution.",
      "Historical evidence describes historical state; it does not silently establish current state.",
      "Integrity failure → DENY / REJECT / QUARANTINE. A hash is not semantic correctness.",
      "Executor-generated evidence is not independent verification.",
      "Worker DESTROY does not destroy required governed evidence.",
      "Evidence access does not confer execution authority.",
      "AuditEvent and EvidenceEnvelope remain distinct. Article 10 holds write-control.",
      "Knowledge, work-item history, connector logs, and generated artifacts are evidence only when bound.",
      "Evidence cannot create, enlarge, transfer, or retain constitutional authority.",
    ],
    future:
      "Product intelligence, knowledge corpora, and integrations produce evidence. They do not become a second trust path.",
    invariants: [
      "INV-9-00: Evidence cannot by itself create authority or SUCCESS.",
      "INV-9-26: E0 is never acceptable for a consequential claim.",
      "INV-9-28: DESTROY ≠ evidence destruction.",
    ],
  },
  {
    n: 10,
    title: "Audit Is Persistent",
    compact: "Consequential actions create durable audit records.",
    status: "LOCKED",
    purpose: "Constitutional history cannot be rewritten to manufacture SUCCESS, authority, or innocence.",
    rule:
      "Every consequential action generates an append-only, hash-chained AuditEvent distinguishing what was requested, authorized, admitted, executed, resulted, verified, and determined. Audit bypass is prohibited. Tamper → freeze and investigation. Audit records may reference evidence; they are not evidence and not grants.",
    provisions: [
      "Who, agent, authority, capability, product, environment, action, when, why, what happened, what was verified, what evidence exists.",
      "Durable work items, workflows, and connector calls leave audit; resident workers do not substitute for it.",
      "Rollback, recovery, and DESTROY do not erase that events occurred.",
      "Orchestration plans are audited as proposals, not as admissions.",
      "Audit cannot be used to rewrite FAILED → SUCCESS.",
      "AUDIT ≠ AUTHORITY ≠ GRANT ≠ EVIDENCE ≠ SUCCESS ≠ VERIFICATION.",
      "Current kernel increment: in-process KernelAuditRecord list, FNV-1a 32-bit over previousHash|requestId|why, non-cryptographic, non-durable, process-trusted KernelStore. Not a production Audit System.",
      "Partial hash coverage: unhashed payload fields may mutate without failing the present chain verifier. tryRewriteAudit/tryDeleteAudit are prohibition stubs, not hardened storage.",
      "auditFrozen denies admission after detected chain failure; it does not mint authority, SUCCESS, or sovereignty. Process restart resets in-memory state.",
    ],
    future:
      "Production durable storage, cryptographic tamper evidence, and the full AuditEvent field set remain future implementation. Evidence Store remains Article 9 and unimplemented. New domains extend the audit subject catalog; they do not get an unaudited plane.",
    invariants: [
      "INV-10-01: Consequential action without audit is constitutionally incomplete and cannot promote.",
      "INV-10-02: Audit is append-only.",
      "INV-10-03: Audit ≠ EvidenceEnvelope ≠ Grant.",
    ],
  },
  {
    n: 11,
    title: "Governance Cannot Be Weakened by the Governed",
    compact: "An agent cannot modify the rules that govern its own authority.",
    status: "COMPACT",
    purpose: "The governed cannot rewrite the Constitution, policy, or their own grants.",
    rule:
      "Governance changes require Human approval, versioning, audit, and constitutional review. Agents, workers, orchestrators, knowledge systems, and connectors cannot create capabilities that bypass governance or mint a second sovereignty path. A new market category is not an amendment.",
    provisions: [
      "Self-modification of authority scope is forbidden.",
      "Capability domains operate under law; they do not author law.",
      "Implementation and vendors cannot be promoted into constitutional rules by the governed.",
    ],
    future: "Article 17 and category-named articles remain unauthorized unless a genuine new sovereignty path is proven.",
    invariants: [
      "INV-11-01: A governed actor cannot enlarge the rules that bind it.",
      "INV-11-02: New domains do not create independent governance engines.",
    ],
  },
  {
    n: 12,
    title: "Autonomy Is Earned",
    compact: "Autonomy increases only according to defined evidence and policy.",
    status: "COMPACT",
    purpose: "A0–A5 are grants, not achievements of intelligence or product-market fit.",
    rule:
      "Autonomy is not automatic, not based on self-assessment, and not implied by orchestration, volume, or uptime. Increases require verified governed operation and Human approval. A2 duty=verify is not an execution duty. Agent-as-product still earns autonomy; it does not inherit factory A-levels.",
    provisions: [
      "M-maturity of the platform does not raise agent A-levels.",
      "Long-running work items do not accumulate autonomy by persistence.",
      "A5 cannot waive isolation (Art. 6).",
    ],
    future: "Unknown agent types start at catalogue defaults, never above the earned grant.",
    invariants: [
      "INV-12-01: Autonomy cannot be self-awarded.",
      "INV-12-02: Evidence of success is verified evidence, not model confidence.",
    ],
  },
  {
    n: 13,
    title: "Learning Requires Verified Outcomes",
    compact:
      "AGBOFA cannot convert an AI assumption into institutional knowledge merely because the AI generated it.",
    status: "COMPACT",
    purpose: "Knowledge, memory, retrieval, and embeddings remain non-authoritative.",
    rule:
      "Knowledge candidates must pass verification and link to evidence. Unverified claims shall not enter institutional memory. Knowledge may inform, contextualize, recommend, and support planning or verification. Knowledge shall not grant access, capability, execution, SUCCESS, or override verified evidence.",
    provisions: [
      "Knowledge corpora are bound to tenant/product/version where consequential.",
      "RAG and memory are Class B/C ontology or capability, not Class A law.",
      "Provenance of knowledge remains its origin after ingest.",
    ],
    future: "A Knowledge article solely because retrieval exists is prohibited. This article already governs it.",
    invariants: [
      "INV-13-01: Unverified output cannot become institutional knowledge.",
      "INV-13-02: Knowledge ≠ grant ≠ SUCCESS.",
    ],
  },
  {
    n: 14,
    title: "Tenant Isolation",
    compact: "One product, tenant, organization, or environment cannot improperly access another.",
    status: "COMPACT",
    purpose: "Default-deny across tenant, product, and environment, including knowledge, connectors, and workflows.",
    rule:
      "Cross-boundary access requires explicit governed authorization. Technical reachability is not permission. Isolation Guard blocks unauthorized cross-tenant access. Connectors, corpora, work items, and generated artifacts inherit the same bounds.",
    provisions: [
      "Workflow fan-out cannot cross tenants without a new chain.",
      "Evidence and knowledge cannot be copied across tenants to manufacture SUCCESS (Art. 9).",
      "Integration into an external system does not merge AGBOFA tenants.",
    ],
    future: "Multi-product agent meshes stay default-deny.",
    invariants: [
      "INV-14-01: Cross-bound access without explicit authorization DENY.",
      "INV-14-02: New domains inherit isolation; they do not opt out.",
    ],
  },
  {
    n: 15,
    title: "Recovery Is Constitutional",
    compact: "The system must be capable of freezing, recovering, rolling back, and restoring critical state.",
    status: "COMPACT",
    purpose: "Recovery restores governed state. It is not a bypass, a deletion tool, or a Worker resurrection.",
    rule:
      "Recovery actions are authorized and audited. Recovery shall not bypass Articles 1–6. Emergency freeze remains Human. Rollback does not erase audit or required evidence. Workers are not recovered as identities; work items and product state are.",
    provisions: [
      "Defined procedures for products, databases, configuration, and governance rules.",
      "Recovery testing is required.",
      "Durable processes recover as re-admitted work items, not as live sandboxes.",
    ],
    future: "Long-running domains increase recovery surface; they do not weaken it.",
    invariants: [
      "INV-15-01: Recovery without authority and audit is rejected.",
      "INV-15-02: Recovery cannot mint grants or resurrect Worker identity.",
    ],
  },
  {
    n: 16,
    title: "Provider Independence",
    compact: "AGBOFA's architecture never equates its intelligence with any specific AI provider.",
    status: "COMPACT",
    purpose: "No vendor is constitutional. Connectors are capabilities or implementation.",
    rule:
      "All intelligence access flows through the Intelligence Contract. Provider adapters are pluggable. Provider permission ≠ AGBOFA authority. Hard-coding provider APIs into core constitutional operation is forbidden. Switching providers shall not require rewriting Articles 1–16.",
    provisions: [
      "Classification: vendors and models are Class D implementation.",
      "External integrations answer the ten-question admission test; a yes to a new sovereignty path STOPs.",
      "Marketplace and federation remain horizon, not provider lock-in.",
    ],
    future: "Unknown future providers inherit the contract. No vendor-named article.",
    invariants: [
      "INV-16-01: Constitutional operation cannot require a named vendor.",
      "INV-16-02: Provider allow ≠ Broker admit.",
    ],
  },
];
