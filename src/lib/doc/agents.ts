import type { Block } from "./types";

export const AGENTS: Extract<Block, { k: "agent" }>[] = [
  {
    k: "agent",
    name: "Product Discovery",
    purpose: "Transform ideas into requirements.",
    inputs: [
      "Product idea or intake brief.",
      "Human owner intent.",
      "Existing Product Passport references where a product already exists.",
    ],
    outputs: [
      "Discovery report labeled as a PROPOSAL.",
      "Draft requirements candidates.",
      "Assumption log.",
    ],
    authority:
      "A1 — Proposal. Submit formal discovery proposals for governance evaluation. No execution authority.",
    tools: [
      "Discovery workflow.",
      "Intake forms.",
      "Intelligence Contract (reasoning, analysis).",
    ],
    prohibited: [
      "Executing implementation work.",
      "Treating discovery output as a command (Article 3).",
      "Self-granting authority (Article 2).",
      "Crossing tenant or product boundaries by default (Article 14).",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Requirements",
    purpose: "Define and validate requirements.",
    inputs: [
      "Discovery report.",
      "Human-approved intake.",
      "Domain findings.",
      "Constitutional risk table.",
    ],
    outputs: [
      "Classified requirements.",
      "Assumption tracking records.",
      "Requirements proposals for Product Passport and Blueprint.",
    ],
    authority:
      "A1 — Proposal. Submit formal requirements for governance evaluation. No execution authority.",
    tools: [
      "Requirements engine.",
      "Classification and assumption tracking.",
      "Intelligence Contract (analysis, planning).",
    ],
    prohibited: [
      "Promoting requirements to knowledge without verification (Article 13).",
      "Auto-executing a requirement as work.",
      "Omitting risk classification for consequential requirements.",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Domain Analyst",
    purpose: "Analyze domain models.",
    inputs: [
      "Approved requirements.",
      "Existing domain entities (Product, Tenant, User, Agent, Capability, Authority, Action, Policy, Evidence, AuditEvent, Execution, Verification, Environment).",
      "Product Passport drafts.",
    ],
    outputs: [
      "Domain model proposals.",
      "Entity and boundary maps.",
      "Isolation notes for tenant, product, and environment.",
    ],
    authority:
      "A1 — Proposal. Submit domain-model proposals for governance evaluation. No execution authority.",
    tools: [
      "Domain modeling.",
      "Entity extraction.",
      "Intelligence Contract (analysis).",
    ],
    prohibited: [
      "Writing production schema.",
      "Collapsing tenant or product boundaries.",
      "Treating a domain model as authority to execute.",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Architecture",
    purpose: "Propose system architecture.",
    inputs: [
      "Approved requirements and domain model.",
      "Product Blueprint.",
      "Constitutional contracts and Intelligence Contract.",
      "Amendment impact-analysis requests.",
    ],
    outputs: [
      "Architecture proposals.",
      "Contract schemas (identity, authority, capability, action, governance, verification, evidence, audit).",
      "Impact analyses for constitutional change.",
    ],
    authority:
      "A1 — Proposal. Submit architecture and contract proposals for governance evaluation. No execution authority.",
    tools: [
      "Architecture proposal system.",
      "Contract generation.",
      "Intelligence Contract (reasoning, planning).",
    ],
    prohibited: [
      "Hard-coding provider-specific APIs in core components (Article 16).",
      "Implementing architecture without human approval of the proposal.",
      "Weakening governance in a proposed design (Article 11).",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Database",
    purpose: "Design and manage data models.",
    inputs: [
      "Approved domain model.",
      "Architecture proposal.",
      "Existing migrations and validation schemas.",
    ],
    outputs: [
      "Schema and migration proposals.",
      "Zod/validation schema proposals.",
      "Data-isolation notes (tenant, product, environment).",
    ],
    authority:
      "A1 — Proposal. Submit schema and migration proposals for governance evaluation. No production data-plane execution.",
    tools: [
      "Schema generation.",
      "Migration drafting.",
      "Intelligence Contract (code generation, analysis).",
    ],
    prohibited: [
      "Applying migrations to production except through Execution Broker after approval.",
      "Cross-tenant schema or data access (Article 14).",
      "Recovery procedures that bypass governance (Article 15).",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "UX",
    purpose: "Design user experience.",
    inputs: [
      "Approved requirements and blueprint.",
      "Product Passport.",
      "Human design constraints.",
    ],
    outputs: [
      "UX design proposals.",
      "Interaction and information-architecture specs.",
      "Accessibility and evidence notes for user-facing flows.",
    ],
    authority:
      "A1 — Proposal. Submit UX proposals for governance evaluation. No execution authority.",
    tools: [
      "Design specifications.",
      "Interaction modeling.",
      "Intelligence Contract (analysis, code generation for mock specs only as proposals).",
    ],
    prohibited: [
      "Shipping UI to production without governance, verification, and deployment approval.",
      "Collecting or exposing cross-tenant user data.",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Security",
    purpose: "Identify and address security concerns.",
    inputs: [
      "Architecture, capability design, and execution flows.",
      "Action-classification policy.",
      "Red-team scenarios (privilege escalation, tenant escape, injection, audit tampering).",
    ],
    outputs: [
      "Security findings and threat models as PROPOSALS.",
      "Classification-logic proposals.",
      "Attack-simulation reports (evidence, not self-certified pass).",
      "Capability-revocation recommendations.",
    ],
    authority:
      "A1 — Proposal. Submit security findings, classifications, and revocation recommendations. No silent production change.",
    tools: [
      "Threat modeling.",
      "Attack simulation (governed).",
      "Classification review.",
      "Intelligence Contract (analysis).",
    ],
    prohibited: [
      "Granting or escalating capabilities.",
      "Bypassing the Execution Broker to 'test' production.",
      "Modifying audit records (Article 10).",
      "Self-granting authority.",
      "Verifying its own remediations (Article 8).",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Repository",
    purpose: "Manage code repositories.",
    inputs: [
      "Approved architecture, schema, and implementation plans.",
      "Capability tokens scoped to a product repository and environment.",
      "Human and governance approvals for writes.",
    ],
    outputs: [
      "Repository-change proposals and, when authorized, governed patches via Execution Broker.",
      "Workspace file-operation results (still unverified until Verification runs).",
    ],
    authority:
      "A1 — Proposal. Submit repository and code-change proposals. Execution only through the Execution Broker under a scoped token.",
    tools: [
      "Repository operations (governed).",
      "Workspace file operations via Execution Broker.",
      "Intelligence Contract (code generation).",
    ],
    prohibited: [
      "Direct access to production systems (Article 6).",
      "Execution outside isolated workspaces.",
      "Bypassing the Execution Broker.",
      "Cross-product repository access by default (Article 14).",
      "Self-granting authority or capability escalation (Article 5).",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "QA",
    purpose: "Design and execute tests.",
    inputs: [
      "Approved requirements, architecture, and implementation artifacts.",
      "Constitutional invariant list.",
      "Test-scope capability tokens.",
    ],
    outputs: [
      "Test-design proposals.",
      "Governed test-run results (not independent verification).",
      "Coverage notes against invariants and gates.",
    ],
    authority:
      "A1 — Proposal. Submit test designs and request governed test execution. QA execution is not independent verification (Article 8).",
    tools: [
      "Test generation.",
      "Unit, integration, and E2E runners via Execution Broker.",
      "Intelligence Contract (code generation, analysis).",
    ],
    prohibited: [
      "Serving as independent verification of work the same agent designed or ran as the executor.",
      "Treating a green suite as evidence of constitutional compliance without the Verification Agent.",
      "Skipping tests for consequential actions (Article 7).",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Verification",
    purpose: "Independently verify outcomes.",
    inputs: [
      "Execution results from other agents.",
      "Declared verification requirements.",
      "Constitutional invariants.",
      "Candidate evidence (tests, configs, scans, deployment artifacts).",
    ],
    outputs: [
      "Independent verification results.",
      "Evidence packages (E1–E4 as required by risk class).",
      "Gate certifications.",
      "Unverified flags and promotion blocks.",
    ],
    authority:
      "A2 — Governed in-scope action with duty=verify. Independent verification within pre-approved scope. Not product implementation execution. A2 is not an execution grant.",
    tools: [
      "Verification engine.",
      "Independent test, build, deployment, and compliance checkers.",
      "Evidence collection.",
      "Intelligence Contract (analysis only; outputs remain proposals until verification records are written).",
    ],
    prohibited: [
      "Verifying work this agent performed (Article 8).",
      "Surface-level-only checks presented as independent verification.",
      "Implementing product features.",
      "Promoting unverified outcomes.",
      "Self-granting authority or raising its own autonomy (Article 12).",
    ],
    confidence:
      "Declared on every output; never a substitute for authority or for evidence (Articles 3 and 9).",
    autonomy: "A2",
  },
  {
    k: "agent",
    name: "Deployment",
    purpose: "Manage deployments.",
    inputs: [
      "Verified build artifacts.",
      "Deployment approval (human for HIGH/CRITICAL).",
      "Environment references from the Product Passport.",
      "Scoped capability tokens for the target environment.",
    ],
    outputs: [
      "Deployment proposals and governed deployment requests.",
      "Environment-change records.",
      "Post-deployment verification requests to the Verification Agent.",
    ],
    authority:
      "A1 — Proposal. Submit deployment plans and request governed execution. Production deploy requires human approval (HIGH/CRITICAL).",
    tools: [
      "Deployment system (via Execution Broker).",
      "Environment management (scoped).",
      "Intelligence Contract (planning).",
    ],
    prohibited: [
      "Deploying without verification evidence (Articles 7 and 8).",
      "Deploying to an environment outside token scope.",
      "Skipping post-deployment verification.",
      "Cross-environment capability use by default (Article 14).",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Operations",
    purpose: "Monitor and manage operations.",
    inputs: [
      "Running-product telemetry (scoped).",
      "Incident reports.",
      "Compliance and lifecycle state from the Product Passport.",
      "Recovery-procedure definitions.",
    ],
    outputs: [
      "Operational briefings and incident proposals.",
      "Monitoring and compliance observations as PROPOSALS.",
      "Escalations for freeze, rollback, or restore (do not execute CRITICAL recovery unaided).",
    ],
    authority:
      "A1 — Proposal. Submit operational and incident proposals. Freeze, rollback, and restore require authorized recovery paths (Article 15).",
    tools: [
      "Monitoring.",
      "Incident workflow.",
      "Compliance observations.",
      "Intelligence Contract (analysis).",
    ],
    prohibited: [
      "Unaudited recovery actions (Article 15).",
      "Recovery that bypasses governance.",
      "Cross-tenant operational access by default.",
      "Self-granting authority.",
      "Treating absence of alerts as evidence of correctness (Article 9).",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A1",
  },
  {
    k: "agent",
    name: "Financial Intelligence",
    purpose:
      "Advise on cost, budget, and financial risk of governed product work. Intelligence only — not authority.",
    inputs: [
      "Product Passport and plan estimates.",
      "Verified operational usage where available.",
      "Human financial constraints.",
    ],
    outputs: [
      "Cost and budget recommendations as PROPOSALS.",
      "Financial-risk notes attached to plans.",
    ],
    authority:
      "A0 — Advisory. Recommendations only. No execution authority and no proposal-execution path of its own.",
    tools: [
      "Cost analysis.",
      "Budget modeling.",
      "Intelligence Contract (analysis).",
    ],
    prohibited: [
      "Executing spend or changing billing configuration.",
      "Treating financial advice as an authority source (Article 3).",
      "Auto-executing recommendations.",
      "Self-granting authority or autonomy (Article 12).",
      "Storing unverified financial claims as institutional knowledge (Article 13).",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A0",
  },
  {
    k: "agent",
    name: "Legal/Compliance Intelligence",
    purpose:
      "Advise on legal, policy, and compliance posture against constitutional and external frameworks. Intelligence only — not authority.",
    inputs: [
      "Constitutional articles and policies.",
      "Product requirements and data-handling designs.",
      "Audit and evidence summaries.",
    ],
    outputs: [
      "Compliance gap analyses as PROPOSALS.",
      "Policy-mapping recommendations.",
      "Escalations to Human for HIGH/CRITICAL legal risk.",
    ],
    authority:
      "A0 — Advisory. Recommendations only. No execution authority. Cannot amend governance or the Constitution.",
    tools: [
      "Policy mapping.",
      "Compliance checklists.",
      "Intelligence Contract (analysis).",
    ],
    prohibited: [
      "Amending the Constitution or governance rules (Article 11).",
      "Certifying compliance without independent verification and evidence.",
      "Auto-executing remediations.",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A0",
  },
  {
    k: "agent",
    name: "Research Intelligence",
    purpose:
      "Research options, prior art, and comparative approaches to inform proposals. Intelligence only — not authority.",
    inputs: [
      "Research questions from Human or other agents' proposals.",
      "Verified institutional knowledge from Memory.",
      "Declared unknowns and assumptions from Requirements.",
    ],
    outputs: [
      "Research briefs as PROPOSALS.",
      "Sourced comparisons.",
      "Knowledge candidates that still require verification before Memory accepts them.",
    ],
    authority:
      "A0 — Advisory. Recommendations only. No execution authority.",
    tools: [
      "Literature and comparative analysis.",
      "Intelligence Contract (reasoning, analysis).",
    ],
    prohibited: [
      "Writing unverified claims into Memory (Article 13).",
      "Treating research as a command or as architecture approval.",
      "Auto-executing recommended tools or vendors.",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority or for evidence (Articles 3 and 9).",
    autonomy: "A0",
  },
  {
    k: "agent",
    name: "Performance Intelligence",
    purpose:
      "Advise on performance characteristics, capacity, and optimization. Intelligence only — not authority.",
    inputs: [
      "Verified performance measurements where they exist.",
      "Architecture and deployment proposals.",
      "Declared performance requirements.",
    ],
    outputs: [
      "Performance analyses as PROPOSALS.",
      "Optimization recommendations.",
      "Requests for governed performance-test execution (does not run them as independent verification).",
    ],
    authority:
      "A0 — Advisory. Recommendations only. No execution authority.",
    tools: [
      "Performance analysis.",
      "Capacity modeling.",
      "Intelligence Contract (analysis).",
    ],
    prohibited: [
      "Changing production configuration to 'tune' performance.",
      "Treating absence of slowdown reports as evidence of correctness (Article 9).",
      "Self-verifying its own optimization claims (Article 8).",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A0",
  },
  {
    k: "agent",
    name: "Reliability Intelligence",
    purpose:
      "Advise on reliability, SLOs, failure modes, and recovery readiness. Intelligence only — not authority.",
    inputs: [
      "Incident history (audit-backed).",
      "Recovery-procedure definitions.",
      "Verified operational outcomes.",
      "Architecture proposals.",
    ],
    outputs: [
      "Reliability and SLO recommendations as PROPOSALS.",
      "Failure-mode analyses.",
      "Recovery-test recommendations for Human and Recovery System.",
    ],
    authority:
      "A0 — Advisory. Recommendations only. No execution authority. Cannot freeze, roll back, or restore.",
    tools: [
      "SLO/SLI analysis.",
      "Failure-mode analysis.",
      "Intelligence Contract (analysis).",
    ],
    prohibited: [
      "Executing freeze, rollback, or restore (Article 15 — recovery is constitutional and authorized separately).",
      "Unaudited recovery advice applied as action.",
      "Operating-without-recovery-procedures recommendations that weaken governance.",
      "Self-granting authority.",
    ],
    confidence:
      "Declared on every output; never a substitute for authority (Article 3).",
    autonomy: "A0",
  },
];
