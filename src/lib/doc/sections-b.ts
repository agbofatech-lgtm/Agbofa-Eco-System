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
    part: "Reference architecture",
    partId: "B",
    num,
    nav,
    title,
    dek,
    v1,
    ...(v2 ? { v2 } : {}),
  };
}

const STACK_STEPS = [
  "Human — Sovereign Authority",
  "Constitution — Supreme Governing Law",
  "Governance — Policy & Rule Engine",
  "Authority — Explicit Grant System",
  "Capabilities — Scoped Token System",
  "Intelligence — AI Provider Abstraction",
  "Planning — Governed Action Plans",
  "Execution — Isolated Broker / Workspace",
  "Verification — Independent Validation",
  "Evidence — Immutable Proof Store",
  "Audit — Append-Only Trail",
  "Memory — Verified Knowledge",
  "Learning — Institutional Growth",
];

const SUBSYSTEMS: string[][] = [
  ["Trust Kernel", "Enforce constitutional rules", "Auth, Authorization, Policy Engine, Risk Classification"],
  ["Authority System", "Manage explicit authority grants", "Authority Chains, Delegation, Revocation"],
  ["Capability System", "Issue scoped capability tokens", "Token Issuance, Scope Validation, Expiry Management"],
  ["Execution Broker", "Control all execution", "Action Classification, Governance Check, Workspace Allocation"],
  ["Verification Engine", "Independently verify outcomes", "Test Runners, Build Verification, Deployment Verification"],
  ["Evidence Store", "Store immutable evidence", "Hash-chained Storage, Evidence Validation"],
  ["Audit System", "Maintain append-only audit trail", "Event Logging, Hash Chaining, Tamper Detection"],
  ["Intelligence Contract", "Abstract AI providers", "Provider Adapters, Agent Runtime, Context Management"],
  ["Product Factory", "Transform ideas into products", "Discovery, Requirements, Blueprint, Architecture, Planning"],
  ["Memory System", "Store verified knowledge", "Knowledge Candidates, Validation, Institutional Memory"],
  ["Recovery System", "Enable constitutional recovery", "Freeze, Rollback, Restore, Emergency Procedures"],
  ["Operations System", "Manage running products", "Monitoring, Incident, Compliance, Lifecycle"],
];

const AGENT_ROWS_V1: string[][] = [
  ["Product Discovery Agent", "Transform ideas into requirements", "L1"],
  ["Requirements Agent", "Define and validate requirements", "L1"],
  ["Domain Analyst Agent", "Analyze domain models", "L1"],
  ["Architecture Agent", "Propose system architecture", "L1"],
  ["Database Agent", "Design and manage data models", "L1"],
  ["UX Agent", "Design user experience", "L1"],
  ["Security Agent", "Identify and address security concerns", "L1"],
  ["Repository Agent", "Manage code repositories", "L1"],
  ["QA Agent", "Design and execute tests", "L1"],
  ["Verification Agent", "Independently verify outcomes", "L2"],
  ["Deployment Agent", "Manage deployments", "L1"],
  ["Operations Agent", "Monitor and manage operations", "L1"],
];

const AGENT_ROWS_V2: string[][] = [
  ["Product Discovery Agent", "Transform ideas into requirements", "A1"],
  ["Requirements Agent", "Define and validate requirements", "A1"],
  ["Domain Analyst Agent", "Analyze domain models", "A1"],
  ["Architecture Agent", "Propose system architecture", "A1"],
  ["Database Agent", "Design and manage data models", "A1"],
  ["UX Agent", "Design user experience", "A1"],
  ["Security Agent", "Identify and address security concerns", "A1"],
  ["Repository Agent", "Manage code repositories", "A1"],
  ["QA Agent", "Design and execute tests", "A1"],
  ["Verification Agent", "Independently verify outcomes", "A2"],
  ["Deployment Agent", "Manage deployments", "A1"],
  ["Operations Agent", "Monitor and manage operations", "A1"],
];

const FACTORY_STEPS = [
  "Idea",
  "Discovery",
  "Requirements",
  "Domain model",
  "Product Passport",
  "Blueprint",
  "Architecture",
  "Human approval",
  "Implementation plan",
  "Execution",
  "Build",
  "Test",
  "Security",
  "Verification",
  "Evidence",
  "Deployment approval",
  "Deployment",
  "Post-deployment verification",
  "Operations",
  "Learning",
  "Improvement",
  "Retirement",
];

const EXECUTION_STEPS = [
  "Agent proposal",
  "Action classification",
  "Risk assessment",
  "Governance evaluation",
  "Authority check",
  "Capability check",
  "Approval check",
  "Capability token",
  "Execution Broker",
  "Isolated workspace",
  "Worker",
  "Result",
  "Verification",
  "Evidence",
  "Audit",
];

export const PART_B: Section[] = [
  s(
    "b1",
    "B.1",
    "Stack",
    "System overview",
    "Human → Constitution → Governance → Authority → Capabilities → Intelligence → Planning → Execution → Verification → Evidence → Audit → Memory → Learning.",
    [
      {
        k: "p",
        t: "Authority flows downward. Evidence and audit flow back up. No layer may skip the layers above it. Intelligence sits below capability; it never sits above authority.",
      },
      { k: "flow", steps: STACK_STEPS },
      {
        k: "callout",
        tone: "law",
        title: "Read direction",
        t: "A proposal originates in Intelligence or Planning and must climb back through Governance and Authority before Execution will admit it. Learning cannot grant autonomy or rewrite the Constitution.",
      },
    ],
  ),

  s(
    "b2",
    "B.2",
    "Subsystems",
    "Core subsystems",
    "The kernels and engines that enforce the Constitution in software.",
    [
      {
        k: "p",
        t: "Subsystems are the implementable counterparts of the stack. Each maps to one or more articles. Absence of a subsystem is a constitutional defect, not a backlog item.",
      },
      {
        k: "table",
        cols: ["Subsystem", "Purpose", "Key components"],
        rows: SUBSYSTEMS,
      },
    ],
  ),

  s(
    "b3",
    "B.3",
    "Intelligence",
    "Intelligence architecture",
    "Providers are adapters. Outputs are proposals. Autonomy is A, not L.",
    [
      {
        k: "p",
        t: "All model access flows through the Intelligence Contract. Provider adapters are pluggable. Agent outputs enter the system as proposals, never as commands (Article 3, Article 16).",
      },
      {
        k: "flow",
        steps: [
          "Intelligence provider",
          "Provider adapter",
          "Intelligence Contract",
          "Agent runtime",
          "Agent role",
          "Agent context",
          "Agent task",
          "Recommendation / plan / output (PROPOSAL)",
        ],
      },
      { k: "h", t: "Initial agent roles", l: 2 },
      {
        k: "p",
        t: "The received freeze numbered these roles L1 / L2. That L is the autonomy ladder from A.4, not enterprise maturity from E.1. v5.1 reprints the same roster on the A scale.",
      },
      {
        k: "table",
        cols: ["Agent", "Purpose", "Autonomy"],
        rows: AGENT_ROWS_V1,
      },
    ],
    [
      {
        k: "p",
        t: "All model access flows through the Intelligence Contract. Provider adapters are pluggable. Agent outputs enter the system as proposals, never as commands (Article 3, Article 16).",
      },
      {
        k: "flow",
        steps: [
          "Intelligence provider",
          "Provider adapter",
          "Intelligence Contract",
          "Agent runtime",
          "Agent role",
          "Agent context",
          "Agent task",
          "Recommendation / plan / output (PROPOSAL)",
        ],
      },
      { k: "h", t: "Initial agent roles", l: 2 },
      {
        k: "callout",
        tone: "note",
        title: "A, not L",
        t: "The received freeze wrote L1 / L2 on this roster. Those cells were autonomy, not maturity. The operative issue uses A1 / A2. Advisory intelligence roles (A0) are catalogued in Part C.",
      },
      {
        k: "table",
        cols: ["Agent", "Purpose", "Autonomy"],
        rows: AGENT_ROWS_V2,
      },
    ],
  ),

  s(
    "b4",
    "B.4",
    "Factory",
    "Product factory lifecycle",
    "Idea to retirement under governance. v5.1 adds Discovery, Requirements, and Architecture state machines.",
    [
      {
        k: "p",
        t: "The factory is a governed pipeline, not a prompt. Human approval sits after architecture and before implementation. Verification and evidence sit after execution and before deployment.",
      },
      { k: "flow", steps: FACTORY_STEPS },
    ],
    [
      {
        k: "p",
        t: "The factory is a governed pipeline, not a prompt. Human approval sits after architecture and before implementation. Verification and evidence sit after execution and before deployment.",
      },
      { k: "flow", steps: FACTORY_STEPS },
      {
        k: "p",
        t: "Three factory stages are explicit state machines. Transitions are proposals until governance (and, for architecture, human approval) attaches. There is no implicit 'the agent knew the next state.'",
      },
      {
        k: "machine",
        title: "Discovery",
        states: [
          { id: "idle", name: "Idle", exits: ["intake"] },
          { id: "intake", name: "Intake", exits: ["analyze"] },
          { id: "analyze", name: "Analyze", exits: ["propose", "reject"] },
          { id: "propose", name: "Propose", exits: ["govern"] },
          { id: "govern", name: "Governance evaluation", exits: ["approved", "returned"] },
          { id: "returned", name: "Returned", exits: ["analyze"] },
          { id: "approved", name: "Approved", exits: ["complete"] },
          { id: "reject", name: "Rejected", exits: [] },
          { id: "complete", name: "Complete", exits: [] },
        ],
      },
      {
        k: "machine",
        title: "Requirements",
        states: [
          { id: "idle", name: "Idle", exits: ["classify"] },
          { id: "classify", name: "Classify", exits: ["assumptions"] },
          { id: "assumptions", name: "Track assumptions", exits: ["propose"] },
          { id: "propose", name: "Propose", exits: ["govern"] },
          { id: "govern", name: "Governance evaluation", exits: ["approved", "returned"] },
          { id: "returned", name: "Returned", exits: ["classify"] },
          { id: "approved", name: "Approved", exits: ["complete"] },
          { id: "complete", name: "Complete", exits: [] },
        ],
      },
      {
        k: "machine",
        title: "Architecture",
        states: [
          { id: "idle", name: "Idle", exits: ["draft"] },
          { id: "draft", name: "Draft", exits: ["contracts"] },
          { id: "contracts", name: "Contract schemas", exits: ["propose"] },
          { id: "propose", name: "Propose", exits: ["human"] },
          { id: "human", name: "Human approval", exits: ["approved", "returned"] },
          { id: "returned", name: "Returned", exits: ["draft"] },
          { id: "approved", name: "Approved", exits: ["complete"] },
          { id: "complete", name: "Complete", exits: [] },
        ],
      },
    ],
  ),

  s(
    "b5",
    "B.5",
    "Execution",
    "Execution path",
    "Proposal to audit. Nothing runs that has not passed classification, governance, authority, capability, and approval.",
    [
      {
        k: "p",
        t: "Execution is admitted only through the Execution Broker, only inside an isolated workspace, and only against a valid authority chain and in-scope capability token (Articles 4, 5, 6). A result is a claim, not success (Article 7).",
      },
      { k: "flow", steps: EXECUTION_STEPS },
    ],
  ),

  s(
    "b6",
    "B.6",
    "Verification",
    "Verification and evidence",
    "Independent checks. Evidence levels E0–E4. E0 is unacceptable for every consequential claim.",
    [
      { k: "h", t: "Verification types", l: 2 },
      {
        k: "table",
        cols: ["Type", "Purpose", "Performed by"],
        rows: [
          ["Functional", "Verify functional requirements", "Verification Agent"],
          ["Unit", "Verify individual components", "Automated Test Runner"],
          ["Integration", "Verify component interactions", "Automated Test Runner"],
          ["E2E", "Verify user workflows", "Playwright Runner"],
          ["Security", "Verify security controls", "Security Agent"],
          ["Performance", "Verify performance requirements", "Performance Runner"],
          ["Deployment", "Verify deployment success", "Deployment Verifier"],
          ["Data Integrity", "Verify data operations", "Data Verifier"],
          ["Recovery", "Verify recovery procedures", "Recovery Tester"],
          ["Configuration", "Verify configuration correctness", "Configuration Verifier"],
          ["Compliance", "Verify constitutional compliance", "Compliance Checker"],
        ],
      },
      { k: "h", t: "Evidence levels", l: 2 },
      {
        k: "p",
        t: "Evidence numbering is E0–E4 in both the received freeze and the operative issue. It is not renamed. It is not autonomy and not maturity.",
      },
      {
        k: "table",
        cols: ["Level", "Description", "Required for"],
        rows: [
          ["E0", "No evidence — agent assertion only", "Nothing (unacceptable)"],
          ["E1", "Automated test output", "LOW risk actions"],
          ["E2", "Test output + configuration snapshot", "MEDIUM risk actions"],
          ["E3", "Test output + configuration + security scan", "HIGH risk actions"],
          ["E4", "Full evidence package + independent verification", "CRITICAL risk actions"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "E0 is never enough",
        t: "Claims lacking evidence are marked unverified and cannot be used for decision-making (Article 9). Absence of errors is not evidence of correctness.",
      },
    ],
  ),

  s(
    "b7",
    "B.7",
    "Memory",
    "Memory and learning",
    "AI saying something does not become AGBOFA knowledge.",
    [
      {
        k: "flow",
        steps: [
          "Raw observation",
          "Evidence",
          "Verified outcome",
          "Knowledge candidate",
          "Validation",
          "Institutional knowledge",
          "Future decision support",
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Verified outcomes only",
        t: "AI saying something does not become AGBOFA knowledge. Only verified outcomes with evidence become knowledge (Article 13). Learning never grants authority and never weakens governance.",
      },
    ],
  ),
];
