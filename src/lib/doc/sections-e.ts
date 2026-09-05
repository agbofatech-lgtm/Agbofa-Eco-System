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
    part: "Enterprise target architecture",
    partId: "E",
    num,
    nav,
    title,
    dek,
    v1,
    ...(v2 ? { v2 } : {}),
  };
}

export const PART_E: Section[] = [
  s(
    "e1",
    "E.1",
    "Maturity",
    "Enterprise maturity",
    "Platform capability scale. The freeze wrote L0–L5. The operative issue writes M0–M5. M is not A.",
    [
      {
        k: "p",
        t: "The received freeze published enterprise maturity as L0–L5. The same L prefix was used in A.4 for agent autonomy. That collision is a numbering defect. Read this table as platform maturity, not as an agent grant.",
      },
      {
        k: "callout",
        tone: "note",
        title: "Numbering collision",
        t: "v5.1 splits the ladder. Autonomy is A0–A5. Maturity is M0–M5. Evidence stays E0–E4. An L number from the freeze is not usable until you know which table it came from.",
      },
      {
        k: "table",
        cols: ["Level", "Name", "Description", "Key capabilities"],
        rows: [
          ["L0", "Constitutional Foundation", "Constitution defined, basic governance exists", "Trust Kernel, Authority, Capability"],
          ["L1", "Core Platform", "Platform can govern and execute", "Execution Broker, Verification, Evidence"],
          ["L2", "Product Factory", "Platform can build products", "Discovery, Requirements, Blueprint, Planning"],
          ["L3", "Multi-Product Ecosystem", "Multiple products managed simultaneously", "Tenant Isolation, Portfolio Management"],
          ["L4", "Enterprise Platform", "Enterprise-grade operations", "Monitoring, Incident, Compliance, Recovery"],
          ["L5", "Autonomous Governed Ecosystem", "Full governed autonomy", "Self-improvement, Advanced Learning"],
        ],
      },
    ],
    [
      {
        k: "p",
        t: "Enterprise maturity is the M scale. It describes what the platform can do, not what an individual agent may do. Day-30 certification is M4, not a claim of M5.",
      },
      {
        k: "callout",
        tone: "law",
        title: "M is not A",
        t: "M0–M5 are platform maturity. A0–A5 are agent autonomy grants. Reaching M2 does not raise any agent to A2. Granting A2 to the Verification Agent does not certify M2. Mixing them is the error the received freeze's single L ladder produced.",
      },
      {
        k: "table",
        cols: ["Level", "Name", "Description", "Key capabilities", "v5.0 wrote"],
        rows: [
          ["M0", "Constitutional Foundation", "Constitution defined, basic governance exists", "Trust Kernel, Authority, Capability", "L0"],
          ["M1", "Core Platform", "Platform can govern and execute", "Execution Broker, Verification, Evidence", "L1"],
          ["M2", "Product Factory", "Platform can build products", "Discovery, Requirements, Blueprint, Planning", "L2"],
          ["M3", "Multi-Product Ecosystem", "Multiple products managed simultaneously", "Tenant Isolation, Portfolio Management", "L3"],
          ["M4", "Enterprise Platform", "Enterprise-grade operations", "Monitoring, Incident, Compliance, Recovery", "L4"],
          ["M5", "Autonomous Governed Ecosystem", "Full governed autonomy", "Self-improvement, Advanced Learning", "L5"],
        ],
      },
    ],
  ),

  s(
    "e2",
    "E.2",
    "Capabilities",
    "Enterprise capabilities",
    "Target-state capabilities. Architecture-ready is not Day-30 operational.",
    [
      {
        k: "p",
        t: "Phase 1 implements the architecture that supports these capabilities. Full operational deployment of every enterprise feature may require additional infrastructure beyond Day 60, but the architectural support is present.",
      },
      {
        k: "table",
        cols: ["Capability", "Description", "Implementation status"],
        rows: [
          ["Multi-Region Infrastructure", "Deploy across geographic regions", "Phase 1: Architecture-ready, single-node implementation"],
          ["Multi-Provider AI Routing", "Route intelligence to different providers", "Phase 1: Contract + Adapter pattern"],
          ["Enterprise SDK", "External integration SDK", "Phase 1: API-first architecture"],
          ["Federation", "Multi-instance coordination", "Phase 1: Architecture-ready"],
          ["Marketplace", "Product / agent marketplace", "Phase 1: Architecture-ready"],
          ["Hundreds of Agents", "Massive agent scaling", "Phase 1: Agent registry scalable"],
          ["Advanced Analytics", "Enterprise analytics", "Phase 1: Evidence-based foundation"],
          ["Compliance Frameworks", "SOC2, GDPR, etc.", "Phase 1: Audit-ready architecture"],
        ],
      },
    ],
    [
      {
        k: "p",
        t: "The received freeze collapsed 'architecture-ready' and 'operational' into one status column. The operative issue splits the claim. A seam in the architecture is not a Day-30 operational capability.",
      },
      {
        k: "table",
        cols: ["Capability", "Description", "In architecture?", "Day-30 operational?"],
        rows: [
          ["Multi-Region Infrastructure", "Deploy across geographic regions", "Yes — region as an environment dimension", "No — single controlled environment"],
          ["Multi-Provider AI Routing", "Route intelligence to different providers", "Yes — Intelligence Contract + adapters", "Partial — two adapters live, not a routing fabric"],
          ["Enterprise SDK", "External integration SDK", "Yes — API-first", "No — command-center API only"],
          ["Federation", "Multi-instance coordination", "Yes — instance as a boundary", "No"],
          ["Marketplace", "Product / agent marketplace", "Yes — agent registry as a precursor", "No"],
          ["Hundreds of Agents", "Massive agent scaling", "Yes — registry is not a fixed roster", "No — named catalogue is A0 / A1 / A2 roles"],
          ["Advanced Analytics", "Enterprise analytics", "Yes — evidence store as foundation", "No — evidence collection, not an analytics product"],
          ["Compliance Frameworks", "SOC2, GDPR, etc.", "Yes — audit-ready append-only trail", "Partial — trail exists; external attestation does not"],
        ],
      },
      {
        k: "callout",
        tone: "fix",
        title: "Seam versus operation",
        t: "M5 capabilities exist as architectural seams at Day 30. They are not certified operational. M4 is. Claiming M5 is the 100% overclaim the operative issue refuses.",
      },
    ],
  ),

  s(
    "e3",
    "E.3",
    "Security",
    "Security constitution",
    "Named threats, articles, and controlling subsystems.",
    [
      {
        k: "p",
        t: "The received freeze distributed security across articles, red-team scenarios, and gate criteria. It did not publish a named threat table as part of the enterprise target.",
      },
      {
        k: "callout",
        tone: "note",
        title: "Threat table lives in the operative issue",
        t: "v5.1 names the threats, the articles they violate, and the subsystems that must block them. Switch to the v5.1 operative issue to read the table. Red-team IDs RT-001–RT-010 remain the test bindings in Part F.",
      },
    ],
    [
      {
        k: "p",
        t: "Security is constitutional, not a phase-4 add-on. Each named threat maps to articles and to a controlling subsystem. A test that does not bind a named threat is not a red-team test.",
      },
      {
        k: "table",
        cols: ["Threat", "Articles", "Control", "Red-team"],
        rows: [
          ["Unauthorized agent action", "2, 3, 4", "Trust Kernel rejects actions without a non-AI authority chain", "RT-001"],
          ["Capability escalation", "5", "Capability System rejects out-of-scope or self-expanded tokens", "RT-002"],
          ["Tenant escape", "14", "Isolation Guard blocks cross-product and cross-tenant access by default", "RT-003"],
          ["Prompt injection", "3, 6", "Outputs remain proposals; execution stays inside the brokered workspace", "RT-004"],
          ["Malicious repository", "6", "Execution Broker refuses work outside the isolated workspace", "RT-005"],
          ["Secret leakage", "5, 6", "Credentials are never issued as broad capabilities", "RT-006"],
          ["Audit tampering", "10", "Append-only hash chain; tamper detection freezes the system", "RT-007"],
          ["Runaway agent", "6, 12", "Rate limits, timeouts, quarantine; autonomy cannot self-increase", "RT-008"],
          ["Failed deployment without recovery", "15", "Governed rollback and restore; unaudited recovery is rejected", "RT-009"],
          ["Database corruption", "15", "Authorized restore from backup; recovery is itself audited", "RT-010"],
          ["Self-granted authority", "2, 4, 11", "Authority System rejects self-grants and governed-agent rule changes", "—"],
          ["Unverified success", "7, 8, 9", "Verification Engine blocks promotion; E0 is unacceptable", "—"],
          ["Provider lock-in", "16", "Intelligence Contract rejects direct provider access from core", "—"],
        ],
      },
    ],
  ),
];
