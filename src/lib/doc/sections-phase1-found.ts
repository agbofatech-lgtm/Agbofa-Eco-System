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
        title: "Phase 1 deep draft is not in the received freeze",
        t: "This text is issued against v5.3 for Human Owner review. It does not amend Articles 2–16. Compact A.1–A.3 remain the short form until this draft is accepted. Switch to the operative issue.",
      },
    ],
    v2,
  };
}

export const PHASE1_FOUND: Section[] = [
  s(
    "ph1",
    "I.0",
    "Phase 1",
    "Phase 1 — draft status",
    "Preamble, Foundations, Vocabulary, Principles, Article 1. For review. Not v5.4. Not a redesign.",
    [
      {
        k: "callout",
        tone: "law",
        title: "Draft control",
        t: "This Phase 1 text is a deep constitutional draft against AGBOFA v5.3. It is FOR REVIEW. It does not create v5.4 or v6. It does not rewrite Articles 2–16. Compact Article 1 in A.3 remains the short operative form until the Human Owner accepts this draft. The Constitution Reader is not the AGBOFA platform. Status of runtime enforcement: SPECIFIED — ENFORCEMENT PENDING.",
      },
      {
        k: "ul",
        items: [
          "Permanent Constitution governs M0–M5.",
          "First increment is 30 days: enterprise-ready first operational release of the constitutional spine — not an MVP, not M5 completion.",
          "Architecture concepts of v5.3 are preserved: Trust Kernel, Governance Engine, Authority System, Capability System, Execution Broker, Isolation Guard, Verification Engine, Evidence Store, Audit System, Recovery System, Product Passport, AgentProposal, CapabilityToken, EvidenceEnvelope, AuditEvent.",
          "If a weakness is found, it is flagged below. Law is not silently changed.",
        ],
      },
    ],
  ),

  s(
    "preamble",
    "I",
    "Preamble",
    "Preamble",
    "Why AGBOFA exists, what it is, and why this Constitution is supreme.",
    [
      {
        k: "quote",
        t: "AGBOFA is a governed digital ecosystem containing a digital product operating system, a product factory, an intelligence layer, governance infrastructure, execution infrastructure, and the products and organizations operating within it.",
      },
      {
        k: "p",
        t: "This Constitution is established because intelligence, automation, and scale do not create legitimate authority. AGBOFA exists so that digital products may be discovered, specified, built, verified, deployed, and operated under explicit human sovereignty, bounded capability, independent verification, durable evidence, persistent audit, and recoverable control.",
      },
      {
        k: "p",
        t: "The problem this Constitution solves is the substitution of model output for authority, of execution for success, of assertion for evidence, and of operational convenience for law. Without a supreme governing instrument, a capable system will treat recommendation as command, tool access as permission, prior success as a grant, and emergency as a permanent exception.",
      },
      {
        k: "p",
        t: "This Constitution is the supreme governing law of AGBOFA. It binds humans acting in AGBOFA roles, agents, workers, products, tenants, environments, providers, tools, workflows, and future autonomous systems. No actor may suspend it because a model is more capable, a deadline is near, a provider requires it, or a feature is commercially valuable.",
      },
      {
        k: "p",
        t: "Humans remain accountable for AGBOFA's existence and for major consequential actions. Intelligence may reason, recommend, discover, plan, and propose. Intelligence does not inherently possess authority. Autonomy is granted, bounded, evidenced, revocable, and never self-issued. Trust is earned by evidence, not by confidence scores.",
      },
      {
        k: "p",
        t: "Security, tenant and product isolation, independent verification, persistent audit, and constitutional recovery are not optional phases. They are conditions of lawful operation at every maturity from M0 through M5. Enterprise responsibility includes multi-tenant, multi-product, multi-environment, and multi-provider operation without escape from this law.",
      },
      {
        k: "p",
        t: "Architecture may evolve. Providers may be replaced. Implementation increments may compress. This Constitution remains. AGBOFA may be highly intelligent, highly autonomous, highly capable, and highly scalable. It must never become sovereign over the humans and institutions it is designed to serve.",
      },
    ],
  ),

  s(
    "found",
    "II",
    "Foundations",
    "Constitutional foundations",
    "Supremacy, scope, jurisdiction, supremacy over intelligence, supremacy over implementation.",
    [
      { k: "h", t: "2.1 Constitutional supremacy", l: 2 },
      {
        k: "p",
        t: "This Constitution is superior to agents, models, providers, policies, workflows, applications, operators, automation, execution systems, and future autonomous systems. A lower layer may implement the Constitution. A lower layer may not override it. Operational convenience, model recommendation, provider constraint, and commercial value are not sources of constitutional authority.",
      },
      {
        k: "p",
        t: "No actor may suspend constitutional requirements because the system is highly capable. Capability increases the duty of control. It does not reduce it.",
      },
      {
        k: "ul",
        items: [
          "An agent cannot override governance.",
          "A worker cannot override authority.",
          "A capability cannot override this Constitution.",
          "An AI recommendation cannot override deterministic governance.",
          "A technical administrator privilege is not constitutional authority unless independently granted as such.",
        ],
      },
      { k: "h", t: "2.2 Scope", l: 2 },
      {
        k: "p",
        t: "This Constitution governs all AGBOFA operations and all actors and objects through which AGBOFA acts: humans in AGBOFA roles; agents; workers; products; tenants; environments; execution; governance; data; evidence; audit; recovery; external providers and tools; and future autonomous systems admitted into the ecosystem.",
      },
      {
        k: "p",
        t: "Products built by AGBOFA inherit constitutional constraints applicable to their tenant, environment, and risk class. A product does not become extra-constitutional by being deployed.",
      },
      { k: "h", t: "2.3 Jurisdiction", l: 2 },
      {
        k: "p",
        t: "Constitutional authority applies whenever an action is proposed, authorized, executed, verified, evidenced, audited, or recovered under AGBOFA, including when work is delegated to an external tool or provider. AGBOFA cannot escape this Constitution by changing provider, model, agent, worker, environment, product, tenant, process, or tool, nor by spawning a new execution identity.",
      },
      { k: "h", t: "2.4 Supremacy over intelligence", l: 2 },
      {
        k: "p",
        t: "Intelligence may reason, recommend, discover, plan, and propose. Intelligence does not inherently possess authority. A more capable model does not automatically receive more authority. Autonomy is explicitly granted, bounded by duty, tenant, product, environment, and risk class, and is earned under Article 12. Model confidence is not a risk class and is not an authority grant.",
      },
      { k: "h", t: "2.5 Supremacy over implementation", l: 2 },
      {
        k: "p",
        t: "No software implementation may claim authority to change this Constitution because change is technically easier, a provider requires it, a model recommends it, an agent requests it, an incident is occurring, a deadline is approaching, or a feature is commercially valuable. Implementation increments describe delivery. They do not limit or amend this Constitution. The 30-day increment is the first operational release of the enforcement spine. It is not an MVP restatement of the law and not completion of M5.",
      },
      { k: "h", t: "2.6 Constitutional hierarchy", l: 2 },
      {
        k: "ol",
        items: [
          "Constitution — supreme governing law.",
          "Constitutional Principles — general principles derived from the Constitution; not bijective with Articles.",
          "Governance Policies — operational rules implementing constitutional requirements.",
          "Authority Grants — explicit grants of permission.",
          "Capability Grants — bounded technical ability (CapabilityToken).",
          "Execution — Worker operation within authorized boundaries.",
          "Verification — independent determination of whether a result satisfies requirements.",
          "Evidence — proof supporting a claim (EvidenceEnvelope).",
          "Audit — persistent record of decision, action, evidence, and governance context (AuditEvent).",
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "No upward override",
        t: "No lower layer may override a higher layer. A CapabilityToken that contradicts this Constitution is void. An execution that contradicts a token is unlawful. A verification of one's own execution is not verification.",
      },
    ],
  ),

  s(
    "vocab",
    "II.V",
    "Vocabulary",
    "Constitutional vocabulary",
    "Controlled terms. Canonical v5.3 names. These are boundaries, not slogans.",
    [
      {
        k: "table",
        cols: ["Term", "Meaning"],
        rows: [
          ["AGBOFA", "The governed digital ecosystem comprising the digital product operating system, product factory, intelligence layer, governance and execution infrastructure, and the products and organizations operating within it."],
          ["Constitution", "The supreme governing law of AGBOFA. Articles 1–16. Not a style guide and not this Reader."],
          ["Constitutional Article", "An operative rule of the Constitution. Binding on every actor."],
          ["Constitutional Principle", "A general principle derived from the Constitution (P1–P15). Not bijective with Articles."],
          ["Human", "A natural person acting in an authenticated AGBOFA role (owner, operator, auditor, approver). Not an agent. Not a worker."],
          ["Human Authority", "Authority that originates in a Human Identity or in this Constitution as assigned to humans. Not derived from model output."],
          ["Tenant", "Isolated organizational scope. A scope, not an actor."],
          ["Product", "A governed digital product belonging to one tenant, identified by Product Passport. A scope, not an actor."],
          ["Environment", "A bound on execution and deployment (workspace, staging, production, recovery)."],
          ["Agent", "An AGBOFA identity that may advise, propose, or verify according to catalogued duty. Not a worker. Not a human."],
          ["Worker", "Ephemeral execution identity minted per admitted proposal, bound to tenant, product, environment, and token. Cannot propose, approve, or verify."],
          ["Intelligence", "Model or provider output admitted only as reasoning toward a proposal. Not authority."],
          ["Proposal / AgentProposal", "The only lawful input from an agent toward execution. Not approval. Not a token. Not execution."],
          ["Authority / Authority Grant", "Explicit, attributable permission recorded by the Authority System. Not implied by access, success, or confidence."],
          ["Capability / CapabilityToken", "Bounded technical ability to perform a named action on a named resource. Not transferable authority. Void if it exceeds its grant."],
          ["Governance / Governance Engine", "Evaluation of versioned policy against a classified proposal. Cannot classify risk (Trust Kernel classifies)."],
          ["Trust Kernel", "Constitutional enforcement core of the Governance layer: deterministic risk floor, default-deny, autonomy ceiling, HIGH/CRITICAL human gate. Enforces authority boundaries. Does not originate, enlarge, or become sovereign authority. Not a second governance system."],
          ["Execution Broker", "Sole admission point for execution. Never executes product work on the host."],
          ["Isolation Guard", "Binds a worker to tenant, product, and environment. Deny is the default across boundaries."],
          ["Execution", "Worker operation inside an admitted sandbox. A claim about the world, not success."],
          ["Verification", "Independent determination by a duty=verify identity that is not the executor and not the proposer of the same work."],
          ["Evidence / EvidenceEnvelope", "Structured proof of a claim at E1–E4. E0 (assertion only) is never success."],
          ["Audit / AuditEvent", "Append-only record of who, what, why, authority, capability, resource, decision. Hash chain plus write-control."],
          ["Recovery", "Constitutional freeze, rollback, restore. Human-authorized, evidenced, audited. Not an operations convenience."],
          ["Autonomy", "Per-actor grant A0–A5. Earned, not assumed. A2 is duty-bounded governed action, not product-implementation execution by default."],
          ["Risk", "CRITICAL, HIGH, MEDIUM, LOW as classified by the Trust Kernel deterministic table. AI may propose a class; it cannot lower the floor."],
          ["Approval", "Attributable Human decision on a proposal, required for HIGH and CRITICAL, and for other acts this Constitution reserves."],
          ["Revocation", "Invalidation of an authority grant or token. Prospective. Does not rewrite audit history."],
          ["Freeze", "Human-authorized halt of execution and, where ordered, of further token minting. Testable. Always reachable."],
          ["Learning / Institutional Knowledge", "Memory admitted only from verified outcomes with evidence. Not a grant of authority."],
          ["Provider", "Replaceable intelligence adapter behind the Intelligence Contract. Never a source of AGBOFA authority."],
        ],
      },
      { k: "h", t: "Identity inequalities (constitutional boundaries)", l: 2 },
      {
        k: "ul",
        items: [
          "Human ≠ Agent ≠ Worker.",
          "Intelligence ≠ Authority.",
          "Proposal ≠ Approval ≠ Capability ≠ Execution.",
          "Execution ≠ Success.",
          "Verification ≠ Execution.",
          "Evidence ≠ Assertion.",
          "Audit ≠ Evidence (audit records the event; evidence proves the claim).",
          "Tenant / Product / Environment ≠ Actor.",
        ],
      },
    ],
  ),

  s(
    "prin",
    "III",
    "Principles",
    "Constitutional principles P1–P15",
    "Preserved from v5.3. Not bijective with Articles 1–16. Article 7 has no dedicated principle.",
    [
      {
        k: "callout",
        tone: "note",
        title: "Not bijective",
        t: "P1–P15 are not one-to-one with Articles 1–16. Article 7 (Execution is not success) has no dedicated principle. P2 (Constitutional supremacy) has no dedicated article; Article 2 is AGBOFA sovereignty, a related but different rule. Articles are not rewritten to force numbering.",
      },
      {
        k: "table",
        cols: ["ID", "Principle", "Meaning", "Purpose", "Articles"],
        rows: [
          ["P1", "Human Sovereignty", "Humans remain accountable for AGBOFA and for major consequential actions. Automation is permitted; sovereignty is not transferred.", "Prevent intelligence, automation, or administrators from becoming sovereign.", "Art. 1 (primary); 4, 11, 12, 15"],
          ["P2", "Constitutional Supremacy", "This Constitution governs all actors, including AGBOFA itself.", "Prevent local policy, providers, or code from outranking the law.", "Foundations 2.1; Art. 2 related, not identical"],
          ["P3", "Intelligence Is Not Authority", "No model, agent, or output automatically possesses authority.", "Block recommendation-as-command.", "Art. 3, 16"],
          ["P4", "Authority Is Explicit and Traceable", "Every consequential action has an identifiable authority source.", "Forbid implied, inherited, or 'the agent knew' authority.", "Art. 4"],
          ["P5", "Capability Is Scoped and Constrained", "Technical ability is bounded by token: tenant, product, environment, action, resource, time.", "Forbid broad access and token-as-sovereignty.", "Art. 5"],
          ["P6", "Execution Is Isolated", "Intelligence never receives unrestricted execution. All execution is brokered and bound.", "Forbid host execution, production login, broker bypass.", "Art. 6, 14"],
          ["P7", "Verification Is Independent", "Important outcomes are verified by a component that did not perform the action.", "Forbid self-certification.", "Art. 8"],
          ["P8", "Evidence Precedes Trust", "Claims about state, quality, or success require evidence. E0 is not success.", "Forbid trust-by-assertion.", "Art. 9"],
          ["P9", "Audit Is Persistent and Tamper-Evident", "Consequential actions create durable records that cannot be silently modified or deleted.", "Enable reconstruction and detect tampering.", "Art. 10"],
          ["P10", "Governance Cannot Be Weakened by the Governed", "No governed agent may modify the rules that govern it.", "Preserve Article 11.", "Art. 11"],
          ["P11", "Autonomy Is Earned", "Autonomy increases only on evidence and human approval. It never self-increases.", "Preserve Article 12.", "Art. 12"],
          ["P12", "Learning Requires Verified Outcomes", "Model output is not institutional knowledge.", "Prevent memory poisoning and authority-by-learning.", "Art. 13"],
          ["P13", "Tenant Isolation Is Absolute", "Cross-tenant, cross-product, and cross-environment access is default-deny.", "Preserve Article 14.", "Art. 14"],
          ["P14", "Recovery Is Constitutional", "Freeze, rollback, and restore are law, authorized, evidenced, and audited.", "Preserve Article 15. Recovery is not an ops shortcut.", "Art. 15, 1"],
          ["P15", "Provider Independence", "No provider is irreplaceable. Core does not import vendor authority.", "Preserve Article 16.", "Art. 16, 3"],
        ],
      },
    ],
  ),
];
