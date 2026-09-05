import type { Block } from "./types";

/**
 * A.3 compact display catalogue for the Constitution Reader.
 * Status-bearing law: src/lib/constitution/articles.ts + ledger.ts.
 * Compact A.3 one-liners: attachments/pasted-text.txt.
 * This file is presentation from compact A.3. It is not a status ledger,
 * not an amendment surface, and not a second Constitution.
 * Art.5 text here matches A.3. The LOCKED reader module currently uses a
 * different Art.5 compact string — Owner decision; do not reconcile here.
 * SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform. No v5.4. No Article 17.
 */
export const ARTICLES: Extract<Block, { k: "article" }>[] = [
  {
    k: "article",
    n: 1,
    title: "Human Sovereignty",
    text: "Humans remain ultimately accountable for AGBOFA's existence, operation, and major consequential actions.",
    scope: "All AGBOFA operations, decisions, and actions.",
    prohibitions: [
      "AGBOFA shall not take actions that remove or diminish human accountability.",
      "No agent may claim to act without human oversight for constitutionally significant actions.",
    ],
    requirements: [
      "Human approval is required for all actions classified as HIGH or CRITICAL risk.",
      "A designated human owner must possess emergency freeze authority at all times.",
      "Human decisions that override agent recommendations must be recorded with rationale.",
    ],
    enforcement:
      "The Trust Kernel shall reject any action classified as HIGH or CRITICAL risk that lacks valid human approval.",
    consequence: "System freeze and constitutional review.",
  },
  {
    k: "article",
    n: 2,
    title: "AGBOFA Sovereignty",
    text: "AGBOFA controls the ecosystem's authority and governance mechanisms.",
    scope: "All authority grants, governance rules, policy definitions, and capability assignments.",
    prohibitions: [
      "No external system may directly grant authority within AGBOFA.",
      "No agent may self-grant authority.",
    ],
    requirements: [
      "All authority flows through the AGBOFA Governance Engine.",
      "All governance rules are versioned and stored in the Constitution repository.",
      "All authority grants are recorded as audit events.",
    ],
    enforcement:
      "The Authority System shall reject any authority grant that does not originate from an authorized governance source.",
    consequence: "Invalid authority revocation and security investigation.",
  },
  {
    k: "article",
    n: 3,
    title: "Intelligence Is Not Authority",
    text: "No AI provider, model, agent, recommendation, inference, or generated output automatically receives authority.",
    scope: "All AI-generated outputs, recommendations, plans, and proposals.",
    prohibitions: [
      "AI outputs shall not be treated as commands.",
      "AI recommendations shall not be auto-executed without governance evaluation.",
      "AI confidence shall not substitute for authority.",
    ],
    requirements: [
      "All AI outputs enter the system as PROPOSALS.",
      "Proposals must pass through governance evaluation before execution.",
      "The distinction between intelligence and authority must be explicit in every agent interaction.",
    ],
    enforcement:
      "The Execution Broker shall reject any action whose authority chain does not trace to a valid, non-AI authority source.",
    consequence: "Action rejection and agent capability suspension.",
  },
  {
    k: "article",
    n: 4,
    title: "Authority Is Explicit",
    text: "Every consequential action requires an identifiable authority source.",
    scope: "All consequential actions within AGBOFA.",
    prohibitions: [
      "Implicit authority is prohibited.",
      '"The agent knew what to do" is not an authority source.',
      "Default allow is prohibited.",
    ],
    requirements: [
      "Every action carries an authority chain.",
      "Authority chains must be traceable to a human or constitutional source.",
      "Authority grants must have defined scope, duration, and revocation conditions.",
    ],
    enforcement: "Actions lacking valid authority chains are rejected at the Trust Kernel.",
    consequence: "Action rejection and audit flag.",
  },
  {
    k: "article",
    n: 5,
    title: "Capability Is Scoped",
    text: "An actor can only perform actions for which it possesses the required capability.",
    scope: "All actor actions within AGBOFA.",
    prohibitions: [
      'Broad capabilities (e.g., "agent has access to everything") are prohibited.',
      "Capability escalation without governance approval is prohibited.",
      "Capability reuse across product boundaries is prohibited by default.",
    ],
    requirements: [
      "All capabilities are defined with explicit scope, environment, and expiry.",
      "Capability tokens are required for all execution actions.",
      "Capability tokens are short-lived and renewable only through governance.",
    ],
    enforcement:
      "The Capability System shall reject any execution attempt with missing, expired, or out-of-scope capability tokens.",
    consequence: "Capability revocation and security audit.",
  },
  {
    k: "article",
    n: 6,
    title: "Execution Is Isolated",
    text: "Intelligence does not receive unrestricted execution access.",
    scope: "All execution activities.",
    prohibitions: [
      "Direct agent access to production systems is prohibited.",
      "Execution outside isolated workspaces is prohibited.",
      "Bypassing the Execution Broker is prohibited.",
    ],
    requirements: [
      "All execution occurs through the Execution Broker.",
      "All execution occurs in isolated workspaces.",
      "All execution carries resource limits, timeouts, and failure handling.",
    ],
    enforcement:
      "The Execution Broker shall reject any direct execution attempt that bypasses its governance chain.",
    consequence: "Execution rejection and agent quarantine.",
  },
  {
    k: "article",
    n: 7,
    title: "Execution Is Not Success",
    text: "An executed action does not constitute proof of correctness.",
    scope: "All execution outcomes.",
    prohibitions: [
      'Treating "the command ran" as "the command was correct."',
      "Accepting agent claims of success without independent verification.",
      "Skipping verification for consequential actions.",
    ],
    requirements: [
      "All consequential actions require independent verification.",
      "Verification must be performed by a component separate from the executing agent.",
      "Verification results must be recorded as evidence.",
    ],
    enforcement:
      "The Verification Engine shall flag any consequential action lacking verification evidence.",
    consequence: "Action marked unverified and blocked from promotion.",
  },
  {
    k: "article",
    n: 8,
    title: "Verification Is Independent",
    text: "Important outcomes must be independently verified.",
    scope: "All important outcomes, including builds, tests, deployments, and data operations.",
    prohibitions: [
      "Agents verifying their own work.",
      "Verification by the same component that performed the action.",
      "Verification that only checks surface-level success.",
    ],
    requirements: [
      "Verification is performed by dedicated verification agents or systems.",
      "Verification checks both functional correctness and constitutional compliance.",
      "Verification produces evidence that is stored and auditable.",
    ],
    enforcement:
      "Outcomes lacking independent verification are blocked from advancing to the next lifecycle stage.",
    consequence: "Outcome rejection and re-execution requirement.",
  },
  {
    k: "article",
    n: 9,
    title: "Evidence Precedes Trust",
    text: "Claims about system state require evidence.",
    scope: "All claims about system state, product quality, or operational success.",
    prohibitions: [
      "Accepting agent assertions without evidence.",
      "Treating absence of errors as evidence of correctness.",
      "Storing claims without supporting evidence.",
    ],
    requirements: [
      "Every consequential claim carries evidence.",
      "Evidence must be machine-verifiable where possible.",
      "Evidence must be stored in the Evidence Store with proper provenance.",
    ],
    enforcement:
      "Claims lacking evidence are marked unverified and cannot be used for decision-making.",
    consequence: "Claim rejection and investigation.",
  },
  {
    k: "article",
    n: 10,
    title: "Audit Is Persistent",
    text: "Consequential actions create durable audit records.",
    scope: "All consequential actions.",
    prohibitions: [
      "Audit record modification or deletion.",
      "Audit bypass for any reason.",
      "Tampering with audit timestamps, hashes, or chains.",
    ],
    requirements: [
      "All consequential actions generate audit events.",
      "Audit events are append-only.",
      "Audit events are hash-chained for tamper evidence.",
      "Audit records include: who, which agent, which authority, which capability, which product, which environment, what action, when, why, what happened, what was verified, what evidence exists.",
    ],
    enforcement: "The Audit System shall detect any tampering attempt and trigger a security alert.",
    consequence: "System freeze and security investigation.",
  },
  {
    k: "article",
    n: 11,
    title: "Governance Cannot Be Weakened by the Governed",
    text: "An agent cannot modify the rules that govern its own authority.",
    scope: "All governance rules, policies, and authority definitions.",
    prohibitions: [
      "Agent modification of its own authority scope.",
      "Agent modification of governance rules that apply to itself.",
      "Agent creation of new capabilities that bypass governance.",
    ],
    requirements: [
      "Governance changes require human approval.",
      "Governance changes are versioned and audited.",
      "Governance changes are subject to constitutional review.",
    ],
    enforcement:
      "The Governance Engine shall reject any governance change originating from a governed agent.",
    consequence: "Change rejection and agent suspension.",
  },
  {
    k: "article",
    n: 12,
    title: "Autonomy Is Earned",
    text: "Autonomy increases only according to defined evidence and policy.",
    scope: "All agent autonomy levels.",
    prohibitions: [
      "Automatic autonomy grants.",
      "Autonomy increases without evidence of reliability.",
      "Autonomy based on AI self-assessment.",
    ],
    requirements: [
      "Autonomy levels are defined in the Constitution.",
      "Autonomy increases require evidence of successful governed operation.",
      "Autonomy increases require human approval.",
    ],
    enforcement:
      "The Trust Kernel shall enforce autonomy levels and reject actions exceeding authorized autonomy.",
    consequence: "Action rejection and autonomy level reduction.",
  },
  {
    k: "article",
    n: 13,
    title: "Learning Requires Verified Outcomes",
    text: "AGBOFA cannot convert an AI assumption into institutional knowledge merely because the AI generated it.",
    scope: "All institutional knowledge and learning.",
    prohibitions: [
      "Direct promotion of AI outputs to knowledge without verification.",
      "Treating AI confidence as knowledge validity.",
      "Storing unverified claims in institutional memory.",
    ],
    requirements: [
      "Knowledge candidates must pass through verification.",
      "Verified outcomes must be linked to their evidence.",
      "Knowledge must be versioned and auditable.",
    ],
    enforcement:
      "The Memory System shall reject knowledge candidates lacking verification evidence.",
    consequence: "Knowledge candidate rejection.",
  },
  {
    k: "article",
    n: 14,
    title: "Tenant Isolation",
    text: "One product, tenant, organization, or environment cannot improperly access another.",
    scope: "All cross-tenant, cross-product, and cross-environment interactions.",
    prohibitions: [
      "Cross-tenant data access by default.",
      "Cross-product agent access by default.",
      "Cross-environment capability use by default.",
    ],
    requirements: [
      "All tenant data is isolated by default.",
      "Cross-boundary access requires explicit, governed authorization.",
      "Tenant isolation is tested continuously.",
    ],
    enforcement:
      "The Isolation Guard shall detect and block any cross-tenant access attempt lacking explicit authorization.",
    consequence: "Access denial, isolation breach alert, and security investigation.",
  },
  {
    k: "article",
    n: 15,
    title: "Recovery Is Constitutional",
    text: "The system must be capable of freezing, recovering, rolling back, and restoring critical state.",
    scope: "All critical state, including products, databases, configurations, and governance rules.",
    prohibitions: [
      "Operating without defined recovery procedures.",
      "Recovery procedures that bypass governance.",
      "Recovery actions that are not audited.",
    ],
    requirements: [
      "Recovery procedures are defined for all critical state.",
      "Recovery actions are authorized and audited.",
      "Recovery testing occurs regularly.",
      "Emergency freeze capability exists and is testable.",
    ],
    enforcement:
      "The Recovery System shall reject recovery actions lacking proper authorization and audit trail.",
    consequence: "Recovery action rejection and constitutional review.",
  },
  {
    k: "article",
    n: 16,
    title: "Provider Independence",
    text: "AGBOFA's architecture never equates its intelligence with any specific AI provider.",
    scope: "All intelligence integration points.",
    prohibitions: [
      "Hard-coding provider-specific APIs in core AGBOFA components.",
      "Requiring provider-specific features for constitutional operation.",
      "Treating any provider as irreplaceable.",
    ],
    requirements: [
      "All intelligence access flows through the Intelligence Contract.",
      "Provider adapters are pluggable and versioned.",
      "Provider switching is possible without core changes.",
    ],
    enforcement:
      "The Intelligence Contract shall reject any direct provider access that bypasses the abstraction layer.",
    consequence: "Architecture violation flag and refactoring requirement.",
  },
];
