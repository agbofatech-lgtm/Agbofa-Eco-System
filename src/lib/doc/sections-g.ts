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
  return {
    id,
    part: "Governance and change control",
    partId: "G",
    num,
    nav,
    title,
    dek,
    v1,
    ...(v2 ? { v2 } : {}),
  };
}

export const PART_G: Section[] = [
  s(
    "g1",
    "G.1",
    "Change",
    "Architecture change process",
    "Proposal through audit. No silent architecture.",
    [
      {
        k: "p",
        t: "Architecture changes follow the same constitutional path as any other consequential action. A proposal is not a change. Implementation without verification is not a change that counts.",
      },
      {
        k: "flow",
        steps: [
          "Change proposal",
          "Constitutional review",
          "Impact analysis",
          "Human approval",
          "Version update",
          "Implementation",
          "Verification",
          "Evidence",
          "Audit",
        ],
      },
    ],
  ),

  s(
    "g2",
    "G.2",
    "Amendment",
    "Constitutional amendment",
    "Ten steps. Human approval is mandatory. No amendment may weaken governance.",
    [
      {
        k: "table",
        cols: ["Step", "Description", "Required approval"],
        rows: [
          ["1", "Amendment proposal submitted", "Any authorized actor"],
          ["2", "Constitutional review", "Governance Engine"],
          ["3", "Impact analysis", "Architecture Agent"],
          ["4", "Human review", "Human Owner"],
          ["5", "Approval", "Human Owner"],
          ["6", "Version increment", "Governance Engine"],
          ["7", "Implementation", "AI Agents"],
          ["8", "Verification", "Verification Agent"],
          ["9", "Evidence", "Evidence Store"],
          ["10", "Audit", "Audit System"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Unweakenable governance",
        t: "No agent may amend the Constitution without human approval. No amendment may weaken governance (Article 11). Version increment is a governance action, not an agent convenience.",
      },
      { k: "h", t: "Versioning policy as the freeze wrote it", l: 2 },
      {
        k: "table",
        cols: ["Version type", "When", "Example"],
        rows: [
          ["Major", "Constitutional changes", "v5.0 → v6.0"],
          ["Minor", "New capabilities", "v5.0 → v5.1"],
          ["Patch", "Bug fixes", "v5.1 → v5.1.1"],
        ],
      },
    ],
    [
      {
        k: "table",
        cols: ["Step", "Description", "Required approval"],
        rows: [
          ["1", "Amendment proposal submitted", "Any authorized actor"],
          ["2", "Constitutional review", "Governance Engine"],
          ["3", "Impact analysis", "Architecture Agent"],
          ["4", "Human review", "Human Owner"],
          ["5", "Approval", "Human Owner"],
          ["6", "Version increment", "Governance Engine"],
          ["7", "Implementation", "AI Agents"],
          ["8", "Verification", "Verification Agent"],
          ["9", "Evidence", "Evidence Store"],
          ["10", "Audit", "Audit System"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Unweakenable governance",
        t: "No agent may amend the Constitution without human approval. No amendment may weaken governance (Article 11).",
      },
      { k: "h", t: "Versioning law", l: 2 },
      {
        k: "p",
        t: "A document-issue bump is not a delivery number. v5.0 → v5.3 records that this issue is the operative text. It does not mean Wave 5, Gate 5, autonomy A5, or maturity M5.",
      },
      {
        k: "table",
        cols: ["Number", "What it is", "What it is not"],
        rows: [
          ["v5.3", "Document issue (operative)", "A delivery wave, an autonomy grant, or a maturity certification"],
          ["Day 1–30 / Waves 1–4 / Gates 1–10", "Delivery clock and evidence checkpoints", "Document issue, A-scale, or M-scale"],
          ["A0–A5", "Agent autonomy grants", "Platform maturity or document issue"],
          ["M0–M5", "Enterprise maturity of the platform", "Agent autonomy or document issue"],
          ["E0–E4", "Evidence levels", "Autonomy, maturity, or issue"],
        ],
      },
      {
        k: "callout",
        tone: "fix",
        title: "Do not spend the issue number as progress",
        t: "Bumping this document from v5.0 (received freeze) to v5.3 (operative issue) does not complete a gate, raise an agent, or certify maturity. Delivery numbers and gate numbers remain as written in Part F.",
      },
    ],
  ),

  s(
    "g3",
    "G.3",
    "Emergency",
    "Emergency procedures",
    "Freeze, rollback, restore, revocation, quarantine, constitutional review.",
    [
      {
        k: "p",
        t: "Recovery is constitutional (Article 15). Emergency actions are authorized and audited. An unaudited freeze is still a freeze; it is also an incident.",
      },
      {
        k: "table",
        cols: ["Procedure", "Trigger", "Authority", "Action"],
        rows: [
          ["System Freeze", "Constitutional violation detected", "Human Owner or Automatic", "Halt all execution"],
          ["Rollback", "Failed deployment", "Governance Engine", "Restore previous state"],
          ["Restore", "Data corruption", "Human Owner", "Restore from backup"],
          ["Revocation", "Capability abuse", "Security Agent (recommendation) + governance", "Revoke capabilities"],
          ["Quarantine", "Runaway agent", "Trust Kernel", "Isolate agent"],
          ["Constitutional Review", "Major violation", "Human Owner", "Full system review"],
        ],
      },
    ],
  ),

  s(
    "g4",
    "G.4",
    "History",
    "Document history and certification",
    "v1.0 through v5.0 received freeze. v5.3 is operative. Certification binds to v5.3. Horizon is M5. Day-30 bar is the constitutional spine.",
    [
      {
        k: "table",
        cols: ["Version", "Date", "Changes", "Author"],
        rows: [
          ["v1.0", "Initial", "Initial concept", "Human Owner"],
          ["v2.0", "Refinement", "Added governance model", "Human Owner"],
          ["v3.0", "Expansion", "Added product factory", "Human Owner"],
          ["v4.0", "Architecture", "Added enterprise scope", "Human Owner"],
          ["v5.0", "Constitutional", "Full constitutional formalization — received freeze", "Human Owner + Senior System Architect"],
        ],
      },
      {
        k: "callout",
        tone: "note",
        title: "Received freeze",
        t: "v5.0 is the received freeze. Certification text in that freeze claimed 100% architectural implementation by Day 60. The operative issue amends the certification bound; it does not unwrite the freeze.",
      },
    ],
    [
      {
        k: "table",
        cols: ["Version", "Date", "Changes", "Author"],
        rows: [
          ["v1.0", "Initial", "Initial concept", "Human Owner"],
          ["v2.0", "Refinement", "Added governance model", "Human Owner"],
          ["v3.0", "Expansion", "Added product factory", "Human Owner"],
          ["v4.0", "Architecture", "Added enterprise scope", "Human Owner"],
          ["v5.0", "Constitutional", "Full constitutional formalization — received freeze", "Human Owner + Senior System Architect"],
          [
            "v5.1",
            "Numbering issue",
            "Versioning law: split L into A (autonomy) and M (maturity); evidence remains E; Day-60 bound M0–M2 with M3 isolation proof.",
            "Human Owner + Senior System Architect",
          ],
          [
            "v5.2",
            "Prior operative",
            "30-day parallel strike. Audit basis. M4 language later corrected as overclaim risk.",
            "Human Owner + Senior System Architect",
          ],
          [
            "v5.3",
            "Operative issue",
            "P0 corrections: canonical names, identity model, Trust Kernel / Isolation Guard / Recovery seats, A2 duty split, AG-SECV, closed contracts, container sandbox, deterministic classifier, binding catalogue of 18, lifecycle enum, C.3 wave alignment. Articles 1–16 unchanged in law. M5 retained.",
            "Human Owner + Senior System Architect",
          ],
          [
            "v5.3",
            "Constitutional lock (not a version bump)",
            "Article 4 — Authority Is Explicit LOCKED / HUMAN ACCEPTED. Compact A.3 unchanged. Articles 1–3 unchanged. Law milestone only. Runtime remains SPECIFIED — ENFORCEMENT PENDING. Phase 5 closed.",
            "Human Owner",
          ],
          [
            "v5.3",
            "Constitutional lock (not a version bump)",
            "Article 6 — Execution Is Isolated LOCKED / HUMAN ACCEPTED. Compact A.3 unchanged. Articles 1–5 unchanged. Four corrections closed. Law milestone only. Runtime remains SPECIFIED — RUNTIME IMPLEMENTATION PENDING.",
            "Human Owner",
          ],
          [
            "v5.3",
            "Constitutional lock (not a version bump)",
            "Article 7 — Execution Is Not Success LOCKED / HUMAN ACCEPTED. Compact A.3 unchanged. Articles 1–6 unchanged. Law milestone only. Runtime remains SPECIFIED — RUNTIME IMPLEMENTATION PENDING.",
            "Human Owner",
          ],
          [
            "v5.3",
            "Constitutional lock (not a version bump)",
            "Article 8 — Verification Is Independent LOCKED / HUMAN ACCEPTED. Compact A.3 unchanged. Articles 1–7 unchanged. Law milestone only. Runtime remains SPECIFIED — RUNTIME IMPLEMENTATION PENDING.",
            "Human Owner",
          ],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Certification bound",
        t: "Certification is bound to v5.3. The enterprise horizon is M5. Day-30 certification is the evidenced constitutional spine, not M5 and not this reader. Work against v5.0 100% language is not a v5.3 certification.",
      },
    ],
  ),
];
