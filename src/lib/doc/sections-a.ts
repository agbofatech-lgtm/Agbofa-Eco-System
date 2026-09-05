import { ARTICLES } from "./articles";
import type { Block, Section } from "./types";

function s(
  id: string,
  num: string,
  nav: string,
  title: string,
  dek: string,
  v1: Block[],
  v2?: Block[],
): Section {
  return { id, part: "Constitution", partId: "A", num, nav, title, dek, v1, ...(v2 ? { v2 } : {}) };
}

export const PART_A: Section[] = [
  s(
    "a1",
    "A.1",
    "Preamble",
    "Preamble",
    "AGBOFA is a governed digital product operating system. This Constitution is supreme.",
    [
      {
        k: "p",
        t: "AGBOFA (Autonomous Governed Blockchain-Oriented Factory Architecture) is established as a governed digital product operating system. This Constitution is the supreme authority governing all actors, systems, agents, models, and processes within the AGBOFA ecosystem.",
      },
      {
        k: "p",
        t: "The purpose of this Constitution is to ensure that artificial intelligence may autonomously design, build, and operate digital products safely, verifiably, and constitutionally, while human sovereignty remains absolute and every consequential action carries evidence, accountability, and the possibility of audit.",
      },
      {
        k: "callout",
        tone: "law",
        title: "Supremacy",
        t: "No agent, model, subsystem, or process may violate this Constitution. No authority may be exercised except through the mechanisms defined herein.",
      },
    ],
  ),

  s(
    "a2",
    "A.2",
    "Principles",
    "Permanent architectural principles",
    "P1–P15 do not change with maturity, timeline, or provider.",
    [
      {
        k: "p",
        t: "These principles are permanent. They do not change with maturity level, implementation timeline, or provider selection.",
      },
      {
        k: "table",
        cols: ["ID", "Principle", "Statement"],
        rows: [
          ["P1", "Human Sovereignty", "Humans are ultimately accountable for AGBOFA's existence and major consequential actions."],
          ["P2", "Constitutional Supremacy", "The Constitution governs all actors, including AGBOFA itself. No agent, model, or process may violate it."],
          ["P3", "Intelligence Is Not Authority", "No AI provider, model, agent, or generated output automatically possesses authority. Authority must be explicitly granted through constitutional mechanisms."],
          ["P4", "Authority Is Explicit and Traceable", "Every consequential action requires an identifiable authority source that can be traced through the governance chain."],
          ["P5", "Capability Is Scoped and Constrained", "An actor can only perform actions for which it has been granted both authority and technical capability, within defined boundaries."],
          ["P6", "Execution Is Isolated", "Intelligence never receives unrestricted execution access. All execution occurs through governed, isolated channels."],
          ["P7", "Verification Is Independent", "Important outcomes must be independently verified before they are accepted as true or successful."],
          ["P8", "Evidence Precedes Trust", "Claims about system state, product quality, or operational success require evidence. Trust is earned, not assumed."],
          ["P9", "Audit Is Persistent and Tamper-Evident", "Consequential actions create durable audit records that cannot be silently modified or deleted."],
          ["P10", "Governance Cannot Be Weakened by the Governed", "No agent, model, or subsystem may modify the rules that govern its own authority."],
          ["P11", "Autonomy Is Earned", "Autonomy increases only according to demonstrated evidence of reliability, safety, and constitutional compliance."],
          ["P12", "Learning Requires Verified Outcomes", "AGBOFA cannot convert an AI assumption or recommendation into institutional knowledge merely because an AI generated it."],
          ["P13", "Tenant Isolation Is Absolute", "Products, tenants, organizations, and environments are isolated by default. Cross-boundary access requires explicit, governed authorization."],
          ["P14", "Recovery Is Constitutional", "The system must be capable of freezing, recovering, rolling back, and restoring critical state. Recovery procedures are themselves governed."],
          ["P15", "Provider Independence", "AGBOFA's architecture never equates its intelligence with any specific AI provider. Providers are replaceable through defined contracts."],
        ],
      },
    ],
  ),

  s(
    "a3",
    "A.3",
    "Articles",
    "Constitutional articles",
    "Articles 1–16. The operative law of every actor, agent, and subsystem.",
    [
      {
        k: "p",
        t: "The sixteen articles are the operative law of AGBOFA. They bind every actor. They do not change with maturity, timeline, or provider.",
      },
      ...ARTICLES,
    ],
  ),

  s(
    "a4",
    "A.4",
    "Autonomy",
    "Autonomy levels",
    "Autonomy is earned. No agent starts above proposal. L in the freeze is autonomy, not maturity.",
    [
      {
        k: "p",
        t: "The received freeze (v5.0) published a single L0–L5 ladder here. That ladder is agent autonomy, not enterprise maturity. v5.1 splits the numbering: autonomy uses A0–A5; enterprise maturity uses M0–M5 (Part E). Evidence stays E0–E4.",
      },
      {
        k: "callout",
        tone: "note",
        title: "L is autonomy, not maturity",
        t: "Keep this table as the freeze wrote it. Do not read L3 here as enterprise multi-product maturity. The same letter was reused in Part E for a different scale. The operative issue replaces L with A for this table.",
      },
      {
        k: "table",
        cols: ["Level", "Name", "Description", "Requirements"],
        rows: [
          ["L0", "Advisory", "Agent provides recommendations only. No execution authority.", "None — default state"],
          ["L1", "Proposal", "Agent can submit formal proposals for governance evaluation.", "Proven recommendation quality"],
          ["L2", "Governed Execution", "Agent can execute within pre-approved scope with governance checks.", "Evidence of safe L1 operation"],
          ["L3", "Autonomous Within Scope", "Agent can execute without per-action approval within defined scope.", "Evidence of safe L2 operation + human approval"],
          ["L4", "Autonomous with Verification", "Agent can execute and self-verify within scope, with periodic external verification.", "Evidence of safe L3 operation + human approval"],
          ["L5", "Full Governed Autonomy", "Agent can operate autonomously within constitutional limits.", "Evidence of safe L4 operation + human approval + constitutional review"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Default and increase",
        t: "No agent starts above L1. Autonomy increases require evidence and human approval. Autonomy based on AI self-assessment is prohibited (Article 12).",
      },
    ],
    [
      {
        k: "p",
        t: "Agent autonomy is the A scale. It is a per-actor grant, earned under Article 12. It is not enterprise maturity (M) and not a document-issue number.",
      },
      {
        k: "callout",
        tone: "law",
        title: "A is not M",
        t: "A0–A5 are agent autonomy grants. M0–M5 are enterprise maturity of the platform. Mixing them is the numbering error the received freeze produced by using L for both.",
      },
      {
        k: "table",
        cols: ["Level", "Name", "Description", "Requirements", "v5.0 wrote"],
        rows: [
          ["A0", "Advisory", "Agent provides recommendations only. No execution authority.", "None — default state for intelligence-only roles.", "L0"],
          ["A1", "Proposal", "Agent can submit formal proposals for governance evaluation.", "Proven recommendation quality.", "L1"],
          ["A2", "Governed in-scope action", "Agent may perform its catalogued duty within pre-approved scope under governance checks. Duty is a separate field: propose, verify, or (not granted in this increment) execute. A2 is not product-implementation execution.", "Evidence of safe A1 operation. Duty recorded on AgentIdentity.", "L2"],
          ["A3", "Autonomous Within Scope", "Agent can execute without per-action approval within defined scope.", "Evidence of safe A2 operation + human approval.", "L3"],
          ["A4", "Autonomous with Verification", "Agent can execute and self-verify within scope, with periodic external verification.", "Evidence of safe A3 operation + human approval.", "L4"],
          ["A5", "Full Governed Autonomy", "Agent can operate autonomously within constitutional limits.", "Evidence of safe A4 operation + human approval + constitutional review.", "L5"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Grant ceiling",
        t: "No agent starts above A1 except the catalogued verifiers at A2 with duty=verify (AG-VER, AG-SECV). A2 does not grant product implementation execution. Named catalogue is A0 / A1 / A2. A3–A5 are defined, not granted at Day-30 certification.",
      },
    ],
  ),

  s(
    "a5",
    "A.5",
    "Risk",
    "Risk classifications",
    "CRITICAL, HIGH, MEDIUM, LOW. Approval is a function of class, not of model confidence.",
    [
      {
        k: "p",
        t: "Every consequential action is classified before governance evaluation. Classification is a Trust Kernel function. AI confidence is not a risk class.",
      },
      {
        k: "table",
        cols: ["Classification", "Description", "Approval required"],
        rows: [
          [
            "CRITICAL",
            "Actions affecting constitutional integrity, production data, security boundaries, or system-wide state.",
            "Human + Constitutional Review",
          ],
          [
            "HIGH",
            "Actions affecting product deployments, schema changes, credential operations, or cross-tenant access.",
            "Human",
          ],
          [
            "MEDIUM",
            "Actions affecting code changes, test execution, or non-production environments.",
            "Governance Engine",
          ],
          [
            "LOW",
            "Actions affecting documentation, analysis, or read-only operations.",
            "Capability Token only",
          ],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Default-deny",
        t: "Unclassified consequential actions are treated as HIGH until classified. Default-allow is prohibited (Article 4).",
      },
    ],
  ),
];
