import type { Section } from "./types";

export const FRONT: Section[] = [
  {
    id: "cover",
    part: "Front",
    partId: "front",
    num: "00",
    nav: "Cover",
    title: "AGBOFA Master Architecture & Constitution",
    dek: "The governed digital product operating system.",
    v1: [
      {
        k: "kpis",
        items: [
          { l: "Document issue", v: "v5.0", h: "Received freeze — as submitted" },
          { l: "Status", v: "Frozen", h: "Day 0 — pre-implementation" },
          { l: "Classification", v: "Constitution", h: "Supreme specification" },
        ],
      },
      {
        k: "quote",
        t: "AGBOFA is not a Claude wrapper. Claude is replaceable intelligence. AGBOFA owns authority, governance, execution, verification, evidence, audit, memory, and recovery.",
      },
      {
        k: "callout",
        tone: "note",
        title: "You are reading the received freeze",
        t: "This edition is document issue v5.0, typeset without rewriting. The operative engineering issue is v5.3 — P0 correction of v5.2. Switch issues in the header.",
      },
      {
        k: "table",
        cols: ["Part", "Owns"],
        rows: [
          ["A Constitution", "What must never be violated"],
          ["B Reference architecture", "What AGBOFA is"],
          ["C Operating model", "How AGBOFA works"],
          ["D Technical specification", "How it is implemented"],
          ["E Enterprise target", "What AGBOFA becomes at maturity"],
          ["F Implementation roadmap", "How we get there"],
          ["G Change control", "How the architecture itself evolves"],
        ],
      },
    ],
    v2: [
      {
        k: "kpis",
        items: [
          { l: "Document issue", v: "v5.3", h: "Operative — P0 correction, 30-day increment" },
          { l: "Received freeze", v: "v5.0", h: "Preserved, not repealed" },
          { l: "First increment", v: "Day 30", h: "Constitutional spine — not M5" },
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Fundamental distinction",
        t: "The master architecture describes AGBOFA from foundation through M5. The 30-day plan is the first implementation increment, not the limits of AGBOFA. v5.3 is the P0 correction of v5.2. It is not v6. It is not a new product. The Constitution Reader is not the AGBOFA platform.",
      },
      {
        k: "quote",
        t: "AGBOFA is not a Claude wrapper. Claude is replaceable intelligence. AGBOFA owns authority, governance, execution, verification, evidence, audit, memory, and recovery.",
      },
      {
        k: "p",
        t: "v5.3 does not replace the owner's vision and does not repeal v5.0. It applies the accepted P0 corrections to v5.2: naming, identity, Trust Kernel, Isolation Guard, Recovery, A2 duty, Security Verifier, closed contracts, sandbox mechanism, deterministic classifier, binding catalogue, 30-day alignment. Articles 1–16 are preserved. M5 is preserved.",
      },
    ],
  },
  {
    id: "versioning",
    part: "Front",
    partId: "front",
    num: "01",
    nav: "Versioning",
    title: "Versioning law",
    dek: "Five numbering systems. They are not interchangeable.",
    v1: [
      {
        k: "p",
        t: "This freeze is document issue v5.0. Historical issues v1.0 through v4.0 are superseded lineage. Semver in this freeze: major for constitutional change, minor for new capability, patch for fixes.",
      },
      {
        k: "callout",
        tone: "warn",
        title: "Ambiguity left in v5.0",
        t: "v5.0 uses “L0–L5” for agent autonomy (Part A.4) and again for enterprise maturity (Part E.1). Those are different scales. v5.1 splits them: autonomy A0–A5, maturity M0–M5. Until you switch to v5.1, read every “L” against its section heading.",
      },
      {
        k: "table",
        cols: ["Written in v5.0", "Where", "Means"],
        rows: [
          ["v5.0", "Cover, history", "This constitutional freeze"],
          ["L0–L5 (Part A)", "Autonomy levels", "What an agent may do"],
          ["L0–L5 (Part E)", "Enterprise maturity", "How much of the target architecture is operational"],
          ["E0–E4", "Evidence", "Strength of proof"],
          ["Phase / Block / Gate / Day", "Part F", "First increment schedule"],
        ],
      },
    ],
    v2: [
      {
        k: "callout",
        tone: "law",
        title: "Binding issue",
        t: "An implementer, bid, or agent is bound by document issue v5.3 unless the Human Owner explicitly re-freezes v5.0. v5.3 is a MINOR bump: no article is repealed. A MAJOR (v6.0) is required to change, add, or weaken an article.",
      },
      {
        k: "h",
        t: "Five independent numbering systems",
        l: 2,
      },
      {
        k: "table",
        cols: ["System", "Prefix", "Range", "Means", "Must not be read as"],
        rows: [
          ["Document issue", "v", "vMAJOR.MINOR.PATCH", "Which freeze of this Constitution is in force", "Product version, maturity, or Day count"],
          ["Enterprise maturity", "M", "M0–M5", "How much of the target architecture is certified operational", "Agent autonomy or document issue"],
          ["Agent autonomy", "A", "A0–A5", "What a given agent is allowed to do", "Platform maturity"],
          ["Evidence", "E", "E0–E4", "Strength of proof required for a risk class", "Autonomy or maturity"],
          ["Delivery", "Wave / Track / Gate / Day", "1–4 / K·I·P·X·G / 1–10 / 1–30", "First increment schedule", "Document issue v1–v30"],
        ],
      },
      {
        k: "h",
        t: "Issues in this reader",
        l: 2,
      },
      {
        k: "table",
        cols: ["Issue", "Status", "What it is"],
        rows: [
          ["v5.0", "Received freeze", "Owner + architect constitutional formalization, preserved as submitted"],
          ["v5.1", "Historical", "Numbering split (A vs M)."],
          ["v5.2", "Historical operative", "30-day strike. Accepted audit basis."],
          ["v5.3", "Operative", "P0 correction. Closed contracts. Binding catalogue. Constitutional spine increment."],
        ],
      },
      {
        k: "h",
        t: "Mapping from v5.0 notation",
        l: 2,
      },
      {
        k: "table",
        cols: ["v5.0 wrote", "v5.1 writes", "System"],
        rows: [
          ["Autonomy L0–L5", "A0–A5", "Agent autonomy"],
          ["Maturity L0–L5", "M0–M5", "Enterprise maturity"],
          ["“Version 1 / Version 2” as reader labels", "v5.0 received / v5.3 operative", "Document issue — never reuse v1/v2 for the reader"],
        ],
      },
      {
        k: "h",
        t: "When the number increments",
        l: 2,
      },
      {
        k: "table",
        cols: ["Bump", "Required when", "Example"],
        rows: [
          ["Major (v6.0)", "An article is added, repealed, or substantively changed", "New Article 17, or weakening Article 3"],
          ["Minor (v5.3)", "P0 correction without changing articles", "This issue"],
          ["Patch (v5.3.1)", "Errata that do not change meaning", "Typo in a schema name"],
        ],
      },
      {
        k: "ul",
        items: [
          "v5.3 is not “the AGBOFA platform.” It is the specification.",
          "M2 is not A2. Duty is not autonomy.",
          "Gate 10 certifies the first increment, not M5.",
          "Day 30 is not document version 30.",
          "The Constitution Reader is not the operating system.",
        ],
      },
    ],
  },
  {
    id: "how-to-read",
    part: "Front",
    partId: "front",
    num: "02",
    nav: "How to read",
    title: "How to read this document",
    dek: "Architecture is permanent. The roadmap is an increment.",
    v1: [
      {
        k: "p",
        t: "The received freeze already divides the work into Parts A–G and places the 60-day program after the architecture. Read the Constitution first. Treat Part F as the initial build sequence. Treat Part E as the destination.",
      },
      {
        k: "callout",
        tone: "warn",
        title: "Known risk in the received freeze",
        t: "Part F.1 currently says that by Day 60 every enterprise function must have an implemented counterpart, with a target of 100% architectural implementation. That sentence can make an implementer treat multi-region, marketplace, federation, and hundreds of agents as Day-60 work — or, conversely, as “not in the architecture.” v5.1 corrects the sentence without shrinking the vision.",
      },
    ],
    v2: [
      {
        k: "callout",
        tone: "law",
        title: "Read in this order",
        t: "Parts A–E are the system. Part F is the first increment against that system — a 30-day parallel strike that certifies M4. Part G is how the system itself may change. Do not implement Part F as if it were the architecture.",
      },
      {
        k: "h",
        t: "What is permanent",
        l: 2,
      },
      {
        k: "ul",
        items: [
          "The 16 articles and 15 principles",
          "Intelligence ≠ authority",
          "Provider independence (Claude Business is the initial adapter, not the identity of AGBOFA)",
          "The operating stack from Human through Learning",
          "Enterprise maturity M0–M5 as the target architecture",
        ],
      },
      {
        k: "h",
        t: "What is the first increment",
        l: 2,
      },
      {
        k: "ul",
        items: [
          "Five parallel tracks (Kernel, Intelligence, Factory, Execution, Guard)",
          "Claude Business as the first Intelligence Provider behind the contract, plus a second adapter by Day 14",
          "A limited supported technology profile (web app, API service, database templates)",
          "Twelve initial specialist roles at A0/A1 (Verification Agent at A2)",
          "Gates 1–10 on a 3-day cadence proving M0 through M4",
          "Two live products, isolated, operated under passports",
        ],
      },
      {
        k: "h",
        t: "What is in architecture but not in Day 30 operations",
        l: 2,
      },
      {
        k: "ul",
        items: [
          "Multi-region infrastructure",
          "Live multi-provider routing",
          "Enterprise SDK, federation, marketplace",
          "Hundreds of agents",
          "Full SOC2/GDPR operational certification",
        ],
      },
      {
        k: "p",
        t: "Those items remain in Part E. Phase 1 must leave the seams (contracts, adapters, registries, isolation, audit) so they can be switched on without rewriting the Constitution.",
      },
    ],
  },
  {
    id: "changelog",
    part: "Front",
    partId: "front",
    num: "03",
    nav: "v5.3 issue log",
    title: "What v5.3 changes — and what it does not",
    dek: "Minor issue. Articles unchanged. Clock compressed. Bar raised to M4.",
    v1: [
      {
        k: "p",
        t: "You are on v5.0. No editorial change is applied in this edition. Switch to v5.3 for the issue log.",
      },
    ],
    v2: [
      {
        k: "callout",
        tone: "fix",
        title: "v5.0 is not thrown away",
        t: "The received freeze is the conceptual foundation. v5.1 split the numbering and specified layers, agents, and factory states. v5.2 keeps that work and rewrites Part F as a 30-day parallel strike that certifies M4. Neither issue is a smaller MVP document.",
      },
      {
        k: "table",
        cols: ["Change", "Issue", "Why"],
        rows: [
          [
            "Versioning law",
            "v5.1",
            "Stops document issue, maturity, autonomy, evidence, and Day count from being read as one scale",
          ],
          [
            "Rename maturity L→M and autonomy L→A",
            "v5.1",
            "v5.0 used L0–L5 for both; they are different systems",
          ],
          [
            "Architecture versus increment as law",
            "v5.1",
            "Stops implementers from reading the delivery list as the edge of AGBOFA",
          ],
          [
            "Specify every operating layer, agent, factory state, security constitution",
            "v5.1",
            "Roles and layers become contracts, not posters",
          ],
          [
            "30-day parallel strike, five tracks",
            "v5.2",
            "Owner asked to reach enterprise in 30 days. Serial 60-day blocks cannot do that.",
          ],
          [
            "Certify M4 on Day 30; horizon remains M5",
            "v5.2",
            "Enterprise Platform (ops, isolation, recovery) is the honest Day-30 bar. Autonomous ecosystem is not.",
          ],
          [
            "Gates on a 3-day cadence. Failed gate stops the wave.",
            "v5.2",
            "Calendar day is not evidence",
          ],
        ],
      },
      {
        k: "p",
        t: "Unchanged on purpose: articles 1–16, principles P1–P15, risk classes, evidence levels E0–E4, ten gates, red-team catalog, schemas, repository layout, and the owner's vision of a governed digital product operating system. Autonomy ranks and maturity ranks keep their meanings. The clock and the certified bound change. The constitution does not.",
      },
    ],
  },
];
