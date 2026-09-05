import type { Block } from "./types";

export const LAYERS: Extract<Block, { k: "layer" }>[] = [
  {
    k: "layer",
    name: "Human",
    purpose:
      "Sovereign authority. Humans remain ultimately accountable for AGBOFA's existence, operation, and major consequential actions.",
    responsibilities: [
      "Approve or reject all HIGH and CRITICAL risk actions.",
      "Hold emergency freeze authority at all times.",
      "Record overrides of agent recommendations with rationale.",
      "Approve constitutional amendments, autonomy increases, and gate certifications.",
      "Authorize recovery restore and system-wide freeze.",
    ],
    inputs: [
      "Agent proposals and recommendations.",
      "Risk classifications from the Trust Kernel.",
      "Evidence packages and gate certifications.",
      "Incident reports, freeze alerts, and isolation-breach alerts.",
    ],
    outputs: [
      "Human approvals and rejections.",
      "Emergency freeze orders.",
      "Override records with rationale.",
      "Constitutional amendment approvals.",
      "Autonomy grant and revocation decisions.",
    ],
    permissions: [
      "Emergency freeze.",
      "HIGH and CRITICAL approval.",
      "Constitutional amendment.",
      "Autonomy grants above A0.",
      "Recovery restore from backup.",
    ],
    prohibited: [
      "Delegating or diminishing human accountability (Article 1).",
      "Silent or unrecorded overrides of agent recommendations.",
      "Vacating freeze authority.",
      "Granting autonomy without evidence (Article 12).",
    ],
    dependencies: ["Constitution", "Governance", "Authority", "Audit"],
    data: [
      "Human owner identity.",
      "Approval and rejection records.",
      "Override rationales.",
      "Freeze orders.",
      "Amendment approvals.",
    ],
    failures: [
      "No designated human owner.",
      "Freeze authority vacancy.",
      "HIGH or CRITICAL action proceeding without human approval.",
      "Unrecorded human override.",
    ],
    security: [
      "Human identity is verified independently of any agent.",
      "CRITICAL actions may require dual-control where policy so requires.",
      "Freeze capability is testable and always reachable.",
    ],
    audit: [
      "Every human decision is recorded: who, when, why, what was approved or rejected.",
      "Overrides are linked to the agent recommendation they supersede.",
      "Freeze and restore actions are hash-chained audit events.",
    ],
  },
  {
    k: "layer",
    name: "Constitution",
    purpose:
      "Supreme governing law of AGBOFA. No agent, model, subsystem, or process may violate it.",
    responsibilities: [
      "Define permanent architectural principles and the sixteen articles.",
      "Define autonomy levels A0, A1, and A2 and the evidence required to earn them.",
      "Define risk classifications CRITICAL, HIGH, MEDIUM, and LOW.",
      "Version constitutional text and bind it as machine-readable contracts.",
      "Reject any change that weakens governance (Article 11).",
    ],
    inputs: [
      "Human-approved amendment proposals.",
      "Constitutional review findings.",
      "Impact analyses from Architecture.",
    ],
    outputs: [
      "Versioned constitutional contracts.",
      "Invariant definitions consumed by the Trust Kernel.",
      "Autonomy and risk classification tables.",
      "Amendment history.",
    ],
    permissions: [
      "Declare law.",
      "Bind invariants that all lower layers must enforce.",
      "Require human approval for any amendment.",
    ],
    prohibited: [
      "Amendment without human approval.",
      "Amendment that weakens governance.",
      "Silent modification of articles, principles, or autonomy rules.",
      "Agent-originated constitutional change (Article 11).",
    ],
    dependencies: ["Human"],
    data: [
      "Articles and principles.",
      "Autonomy level definitions (A0, A1, A2).",
      "Risk classification table.",
      "Amendment log and constitutional version.",
    ],
    failures: [
      "Constitution not loadable or not versioned.",
      "Invariant not encoded as a machine-readable contract.",
      "Drift between published text and enforced contracts.",
    ],
    security: [
      "Constitution repository is access-controlled and append-versioned.",
      "Only human-approved writes are accepted.",
      "Integrity of the constitutional freeze record is hash-verified.",
    ],
    audit: [
      "Every constitutional version is frozen with a hash and human sign-off.",
      "Amendment process steps are individually audited (proposal through evidence).",
    ],
  },
  {
    k: "layer",
    name: "Governance",
    purpose:
      "Policy and rule engine. Evaluates proposals against the Constitution before any authority is granted.",
    responsibilities: [
      "Evaluate every proposal for constitutional compliance and risk class.",
      "Route HIGH and CRITICAL actions to human approval.",
      "Version and store governance rules in the Constitution repository.",
      "Reject governance changes originating from governed agents (Article 11).",
      "Record every authority grant as an audit event (Article 2).",
    ],
    inputs: [
      "Proposals from Intelligence and Planning.",
      "Constitutional contracts and risk table.",
      "Human approvals and rejections.",
      "Evidence of prior governed operation for autonomy decisions.",
    ],
    outputs: [
      "Governance decisions (allow, deny, escalate).",
      "Risk classifications.",
      "Versioned policy records.",
      "Authority-grant requests to the Authority layer.",
    ],
    permissions: [
      "Classify risk.",
      "Evaluate policy.",
      "Request authority grants that originate from an authorized governance source.",
      "Escalate to Human.",
    ],
    prohibited: [
      "Granting authority that did not originate from an authorized governance source (Article 2).",
      "Accepting a governed agent's self-modification of rules (Article 11).",
      "Auto-executing AI recommendations (Article 3).",
      "Default-allow (Article 4).",
    ],
    dependencies: ["Human", "Constitution"],
    data: [
      "Policy definitions.",
      "Risk classification records.",
      "Governance decision log.",
      "Rule versions.",
    ],
    failures: [
      "Policy engine unavailable.",
      "Proposal advancing without a governance decision.",
      "Rule change without human approval.",
    ],
    security: [
      "Governed agents cannot write governance rules that apply to themselves.",
      "Policy evaluation is deterministic and replayable from audit.",
      "Unauthorized governance sources are rejected by the Authority System.",
    ],
    audit: [
      "Every proposal evaluation is an audit event: policy version, risk class, decision, authority requested.",
      "Governance rule versions are hash-chained.",
    ],
  },
  {
    k: "layer",
    name: "Authority",
    purpose:
      "Explicit grant system. Every consequential action requires an identifiable, traceable authority source.",
    responsibilities: [
      "Issue, delegate, and revoke authority grants.",
      "Maintain authority chains traceable to a human or constitutional source.",
      "Bind each grant to scope, duration, and revocation conditions (Article 4).",
      "Reject implicit authority, default-allow, and self-grants (Articles 2 and 4).",
      "Refuse any grant that does not originate from an authorized governance source.",
    ],
    inputs: [
      "Governance decisions.",
      "Human approvals.",
      "Revocation requests from Security, Trust Kernel, or Human.",
      "Expiry and scope of existing grants.",
    ],
    outputs: [
      "Authority chains attached to actions.",
      "Grant, delegation, and revocation records.",
      "Rejection of invalid grants.",
    ],
    permissions: [
      "Issue scoped authority.",
      "Delegate within an existing grant's bounds.",
      "Revoke any grant.",
    ],
    prohibited: [
      "Implicit authority.",
      '"The agent knew what to do" as an authority source.',
      "Default allow.",
      "Agent self-grant.",
      "External system directly granting authority inside AGBOFA.",
    ],
    dependencies: ["Human", "Constitution", "Governance"],
    data: [
      "Authority grants.",
      "Delegation graph.",
      "Revocation list.",
      "Authority chain snapshots.",
    ],
    failures: [
      "Action presented without an authority chain.",
      "Chain that does not trace to a human or constitutional source.",
      "Grant past its duration or outside its scope.",
    ],
    security: [
      "Authority System rejects grants from unauthorized sources.",
      "Chains are tamper-evident and stored with the audit event.",
      "Revocation is immediate and globally visible to Capability and Execution.",
    ],
    audit: [
      "Every grant, delegation, and revocation is an audit event.",
      "Every consequential action records its full authority chain.",
    ],
  },
  {
    k: "layer",
    name: "Capabilities",
    purpose:
      "Scoped token system. An actor can only perform actions for which it possesses the required capability.",
    responsibilities: [
      "Issue short-lived capability tokens with explicit scope, environment, and expiry (Article 5).",
      "Validate tokens on every execution attempt.",
      "Reject missing, expired, or out-of-scope tokens.",
      "Refuse capability reuse across product boundaries by default (Article 14).",
      "Revoke tokens on abuse, isolation breach, or autonomy reduction.",
    ],
    inputs: [
      "Valid authority chains.",
      "Requested capability name, product, environment, and resource.",
      "Constraints (max duration, max operations, allowed commands).",
    ],
    outputs: [
      "Capability tokens.",
      "Validation results.",
      "Revocation records.",
      "Scope-violation rejections.",
    ],
    permissions: [
      "Issue tokens only against a valid authority chain.",
      "Validate and expire tokens.",
      "Revoke tokens.",
    ],
    prohibited: [
      'Broad capabilities such as "agent has access to everything".',
      "Capability escalation without governance approval.",
      "Capability reuse across product boundaries by default.",
      "Renewal except through governance.",
    ],
    dependencies: ["Authority", "Governance", "Constitution"],
    data: [
      "Token records (tokenId, capability, scope, grantedTo, grantedBy, issuedAt, expiresAt, constraints).",
      "Revocation list.",
      "Scope catalogue.",
    ],
    failures: [
      "Execution attempted with missing, expired, or out-of-scope token.",
      "Token forged or replayed.",
      "Cross-product token accepted.",
    ],
    security: [
      "Tokens are unforgeable, short-lived, and bound to agent, product, and environment.",
      "Isolation Guard consults token scope before any cross-boundary access.",
      "Forged or escalated tokens are blocked and audited (Gate 3).",
    ],
    audit: [
      "Issuance, validation, rejection, and revocation are audit events.",
      "Each execution records the tokenId and scope used.",
    ],
  },
  {
    k: "layer",
    name: "Intelligence",
    purpose:
      "AI provider abstraction. Intelligence proposes; it never is authority (Article 3, Article 16).",
    responsibilities: [
      "Expose all model access through the Intelligence Contract.",
      "Keep provider adapters pluggable and versioned.",
      "Admit every AI output as a PROPOSAL, never as a command.",
      "Make the distinction between intelligence and authority explicit in every agent interaction.",
      "Refuse direct provider access that bypasses the abstraction layer.",
    ],
    inputs: [
      "Agent context and tasks from the Agent Runtime.",
      "Provider-agnostic contract calls.",
      "Constitutional constraints (no training on data, isolation, audit logging).",
    ],
    outputs: [
      "Recommendations, plans, and generated artifacts labeled as PROPOSALS.",
      "Declared confidence that never substitutes for authority.",
      "Provider-adapter health and contract-version records.",
    ],
    permissions: [
      "Call providers only through the Intelligence Contract.",
      "Produce proposals.",
      "Declare confidence.",
    ],
    prohibited: [
      "Treating AI outputs as commands.",
      "Auto-executing recommendations without governance evaluation.",
      "Substituting AI confidence for authority.",
      "Hard-coding provider-specific APIs in core AGBOFA components.",
      "Treating any provider as irreplaceable.",
    ],
    dependencies: ["Constitution", "Governance", "Authority", "Capabilities"],
    data: [
      "Intelligence Contract records.",
      "Provider adapter versions.",
      "Agent registry and roles.",
      "Proposal objects.",
    ],
    failures: [
      "Direct provider call bypassing the contract.",
      "Proposal emitted without an authority-chain placeholder (must be filled by Governance).",
      "Core component depending on a provider-specific feature.",
    ],
    security: [
      "Data isolation and no-training-on-data flags are contract-enforced.",
      "Provider switching does not require core changes.",
      "Prompt-injection handling is a verification concern, not an authority grant.",
    ],
    audit: [
      "Every contract call records provider, contract version, agent, task, and that the output is a proposal.",
      "Direct provider-access attempts are architecture-violation flags (Article 16).",
    ],
  },
  {
    k: "layer",
    name: "Planning",
    purpose:
      "Governed action plans. Turns approved intent into sequenced, classifiable actions — still proposals until governance and authority attach.",
    responsibilities: [
      "Produce implementation plans from approved blueprints and architecture.",
      "Classify each planned action and attach intended risk class.",
      "Sequence work so verification and evidence gates are explicit steps, not afterthoughts.",
      "Hand plans to Governance before any execution is requested.",
      "Never treat a plan as an authority source (Article 4).",
    ],
    inputs: [
      "Approved product specifications, blueprints, and architecture proposals.",
      "Requirements, domain models, and Product Passport references.",
      "Policy and risk tables.",
    ],
    outputs: [
      "Governed action plans.",
      "Per-step action classifications.",
      "Declared verification and evidence requirements per step.",
    ],
    permissions: [
      "Draft plans.",
      "Propose action sequences.",
      "Attach intended risk and verification requirements.",
    ],
    prohibited: [
      "Executing a plan.",
      "Using the plan itself as an authority source.",
      "Omitting verification steps for consequential actions (Article 7).",
      "Planning cross-tenant or cross-environment work without explicit authorization (Article 14).",
    ],
    dependencies: ["Intelligence", "Governance", "Constitution", "Capabilities"],
    data: [
      "Action plans.",
      "Step classifications.",
      "Verification requirements per step.",
      "Plan versions.",
    ],
    failures: [
      "Plan advancing to execution without governance evaluation.",
      "Consequential step without a verification requirement.",
      "Plan that assumes implicit authority.",
    ],
    security: [
      "Plans are scoped to a product and environment.",
      "Plan objects cannot carry capability tokens; tokens are issued later against authority.",
    ],
    audit: [
      "Plan creation, version, and governance evaluation are audit events.",
      "Each planned consequential step records its intended authority and verification path.",
    ],
  },
  {
    k: "layer",
    name: "Execution",
    purpose:
      "Isolated broker and workspace. Intelligence never receives unrestricted execution access (Article 6).",
    responsibilities: [
      "Admit execution only through the Execution Broker.",
      "Allocate isolated workspaces with resource limits, timeouts, and failure handling.",
      "Require a valid authority chain and an in-scope capability token before running anything.",
      "Reject any direct execution attempt that bypasses the governance chain.",
      "Return results as claims that still require independent verification (Article 7).",
    ],
    inputs: [
      "Governance-approved actions.",
      "Authority chains.",
      "Capability tokens.",
      "Human approvals where risk class requires them.",
    ],
    outputs: [
      "Workspace-scoped results.",
      "Execution status (success, failure, rejected, error).",
      "Resource-usage and timeout records.",
    ],
    permissions: [
      "Run approved actions inside isolated workspaces.",
      "Enforce limits and timeouts.",
      "Quarantine an agent that attempts bypass.",
    ],
    prohibited: [
      "Direct agent access to production systems.",
      "Execution outside isolated workspaces.",
      "Bypassing the Execution Broker.",
      "Treating execution as proof of correctness (Article 7).",
    ],
    dependencies: ["Authority", "Capabilities", "Governance", "Planning"],
    data: [
      "Workspace records.",
      "Worker assignments.",
      "Execution results.",
      "Limit and timeout configurations.",
    ],
    failures: [
      "Bypass attempt.",
      "Workspace escape.",
      "Runaway agent (rate limit must fire).",
      "Result promoted without verification.",
    ],
    security: [
      "Workspaces are tenant-, product-, and environment-scoped.",
      "Production credentials are never issued to agents as broad capabilities.",
      "Quarantine isolates a violating agent from further execution.",
    ],
    audit: [
      "Every execution records actor, authority, capability, product, environment, action, result.",
      "Bypass and quarantine events are security alerts.",
    ],
  },
  {
    k: "layer",
    name: "Verification",
    purpose:
      "Independent validation. Important outcomes must be verified by a component that did not perform the action (Articles 7 and 8).",
    responsibilities: [
      "Verify functional correctness and constitutional compliance.",
      "Run dedicated verification for builds, tests, deployments, and data operations.",
      "Produce evidence that is stored and auditable.",
      "Block outcomes that lack independent verification from advancing.",
      "Flag consequential actions that have no verification evidence.",
    ],
    inputs: [
      "Execution results.",
      "Declared verification requirements from Planning.",
      "Constitutional invariants.",
      "Test, build, security, and deployment artifacts.",
    ],
    outputs: [
      "Verification results (pass, fail, unverified).",
      "Evidence packages at the required evidence level (E1–E4).",
      "Promotion or block decisions for the next lifecycle stage.",
    ],
    permissions: [
      "Read execution artifacts within the same product and environment scope.",
      "Invoke independent test, build, and compliance checkers.",
      "Mark outcomes unverified and block promotion.",
    ],
    prohibited: [
      "Agents verifying their own work.",
      "Verification by the same component that performed the action.",
      "Verification that only checks surface-level success.",
      "Skipping verification for consequential actions.",
    ],
    dependencies: ["Execution", "Constitution", "Evidence"],
    data: [
      "Verification results.",
      "Evidence-level assignments (E0 is unacceptable).",
      "Block and re-execution records.",
    ],
    failures: [
      "Self-verification accepted.",
      "Surface-level-only check treated as independent verification.",
      "Consequential action lacking verification evidence.",
    ],
    security: [
      "Verifier identity is distinct from executor identity.",
      "Verification agents operate at autonomy A2 only within pre-approved verification scope.",
      "Isolation Guard still applies to verifier access.",
    ],
    audit: [
      "Every verification records method, result, verifier identity, and evidenceId.",
      "Unverified consequential actions are flagged and cannot be used for decision-making.",
    ],
  },
  {
    k: "layer",
    name: "Evidence",
    purpose:
      "Immutable proof store. Claims about system state require evidence; trust is earned, not assumed (Article 9).",
    responsibilities: [
      "Store evidence with provenance for every consequential claim.",
      "Prefer machine-verifiable evidence.",
      "Hash evidence objects and bind them to the originating action and verification.",
      "Refuse claims that lack evidence; mark them unverified.",
      "Never treat absence of errors as evidence of correctness.",
    ],
    inputs: [
      "Verification results.",
      "Test outputs, configuration snapshots, security scans, independent-verification packages.",
      "Provenance (actor, action, product, environment, timestamp).",
    ],
    outputs: [
      "Evidence records with hashes and provenance.",
      "Unverified-claim markers.",
      "Evidence packages referenced by audit events.",
    ],
    permissions: [
      "Append evidence.",
      "Validate evidence hashes.",
      "Serve evidence to Audit, Memory, and Human review.",
    ],
    prohibited: [
      "Accepting agent assertions without evidence.",
      "Treating absence of errors as evidence of correctness.",
      "Storing claims without supporting evidence.",
      "Silent modification of stored evidence.",
    ],
    dependencies: ["Verification", "Audit"],
    data: [
      "Evidence objects.",
      "Hashes and provenance.",
      "Evidence-level tags (E1–E4).",
      "Links to verification and audit events.",
    ],
    failures: [
      "Claim used for decision-making without evidence.",
      "Evidence hash mismatch.",
      "E0 (agent assertion only) accepted for any consequential claim.",
    ],
    security: [
      "Evidence store is append-oriented and integrity-checked.",
      "Write access is limited to Verification and designated collectors.",
      "Tamper attempts escalate as security alerts.",
    ],
    audit: [
      "Every evidence write records who, what action, what was verified, and the hash.",
      "EvidenceIds appear on the corresponding audit events.",
    ],
  },
  {
    k: "layer",
    name: "Audit",
    purpose:
      "Append-only, tamper-evident trail. Consequential actions create durable audit records (Article 10).",
    responsibilities: [
      "Generate an audit event for every consequential action.",
      "Keep the log append-only and hash-chained.",
      "Record who, which agent, which authority, which capability, which product, which environment, what action, when, why, what happened, what was verified, and what evidence exists.",
      "Detect tampering with timestamps, hashes, or chains and trigger a security alert.",
      "Refuse any audit bypass.",
    ],
    inputs: [
      "Events from every layer: Human, Governance, Authority, Capabilities, Execution, Verification, Evidence, Recovery.",
      "Previous hash for chain continuity.",
    ],
    outputs: [
      "Append-only audit events.",
      "Tamper-detection alerts.",
      "Queryable trail for Human, Compliance, and Recovery.",
    ],
    permissions: [
      "Append events.",
      "Hash-chain events.",
      "Detect and alert on tamper.",
    ],
    prohibited: [
      "Audit record modification or deletion.",
      "Audit bypass for any reason.",
      "Tampering with audit timestamps, hashes, or chains.",
    ],
    dependencies: ["Constitution", "Evidence"],
    data: [
      "AuditEvent records (eventId, timestamp, actor, action, authority, capability, target, result, verification, hash, previousHash).",
      "Hash chain.",
      "Tamper alerts.",
    ],
    failures: [
      "Missing audit event for a consequential action.",
      "Broken hash chain.",
      "Detected modification or deletion.",
    ],
    security: [
      "Write path is append-only at the storage layer.",
      "Tamper detection triggers system freeze and security investigation (Article 10).",
      "Read access is governed; write access is not available to governed agents.",
    ],
    audit: [
      "The audit layer audits itself: chain verification jobs and freeze events are themselves audit events.",
    ],
  },
  {
    k: "layer",
    name: "Memory",
    purpose:
      "Verified knowledge only. AI saying something does not become AGBOFA knowledge (Article 13).",
    responsibilities: [
      "Accept knowledge candidates only after verification evidence exists.",
      "Link every stored knowledge item to its evidence and originating verified outcome.",
      "Version knowledge and keep it auditable.",
      "Reject unverified claims and AI-confidence-as-validity.",
      "Serve verified knowledge to future decision support — never as authority.",
    ],
    inputs: [
      "Verified outcomes from Verification.",
      "Evidence records from Evidence.",
      "Knowledge-candidate proposals from Intelligence and Learning.",
    ],
    outputs: [
      "Versioned institutional knowledge items.",
      "Rejections of unverified candidates.",
      "Knowledge references for Planning and Human review.",
    ],
    permissions: [
      "Store verified knowledge.",
      "Reject unverified candidates.",
      "Version and retrieve knowledge.",
    ],
    prohibited: [
      "Direct promotion of AI outputs to knowledge without verification.",
      "Treating AI confidence as knowledge validity.",
      "Storing unverified claims in institutional memory.",
    ],
    dependencies: ["Verification", "Evidence", "Audit", "Constitution"],
    data: [
      "Knowledge candidates.",
      "Validated knowledge items with evidence links.",
      "Knowledge versions.",
    ],
    failures: [
      "Unverified candidate stored.",
      "Knowledge item without an evidence link.",
      "Confidence score used as a validity bit.",
    ],
    security: [
      "Write path requires a verification evidenceId.",
      "Knowledge is tenant- and product-scoped unless explicitly authorized otherwise.",
    ],
    audit: [
      "Every accept and reject of a knowledge candidate is an audit event.",
      "Knowledge versions record evidenceId and verifier.",
    ],
  },
  {
    k: "layer",
    name: "Learning",
    purpose:
      "Institutional growth from verified outcomes only. Learning never grants authority or weakens governance.",
    responsibilities: [
      "Propose improvements from verified outcomes stored in Memory.",
      "Feed future Planning and Human briefing — as proposals, not commands.",
      "Never convert an AI assumption into institutional knowledge merely because it was generated (Article 13).",
      "Never increase autonomy from self-assessment (Article 12).",
      "Subject learning-driven change to the same governance, verification, and audit path as any other change.",
    ],
    inputs: [
      "Institutional knowledge from Memory.",
      "Verified outcomes and evidence.",
      "Operational metrics that have passed verification.",
    ],
    outputs: [
      "Improvement proposals.",
      "Knowledge-candidate submissions back to Memory (still requiring verification).",
      "Briefings for Human and Planning.",
    ],
    permissions: [
      "Propose improvements.",
      "Submit knowledge candidates.",
      "Summarize verified history.",
    ],
    prohibited: [
      "Auto-executing learned changes.",
      "Autonomy increase from learning alone.",
      "Writing governance rules or constitutional text.",
      "Bypassing verification because a pattern 'has been seen before'.",
    ],
    dependencies: ["Memory", "Evidence", "Verification", "Governance", "Intelligence"],
    data: [
      "Improvement proposals.",
      "Learning-cycle records linked to verified outcomes.",
      "Rejected unverified generalizations.",
    ],
    failures: [
      "Learned change applied without governance.",
      "Unverified generalization stored as knowledge.",
      "Self-assessed autonomy increase.",
    ],
    security: [
      "Learning has no execution capability of its own.",
      "Outputs re-enter the system as PROPOSALS (Article 3).",
    ],
    audit: [
      "Every learning proposal records the verified outcomes it cites.",
      "Rejected unverified generalizations are audited so they are not retried as facts.",
    ],
  },
];
