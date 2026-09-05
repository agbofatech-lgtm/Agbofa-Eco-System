import { CATALOGUE } from "./catalogue";
import { IDENTITY_RIGHTS, NAMING } from "./canon";
import { LIFECYCLE_ORDER } from "@/lib/agbofa/contracts";
import type { Block, Section } from "./types";

function d(
  id: string,
  num: string,
  nav: string,
  title: string,
  dek: string,
  v2: Block[],
): Section {
  return {
    id,
    part: "Technical specification",
    partId: "D",
    num,
    nav,
    title,
    dek,
    v1: [
      {
        k: "callout",
        tone: "note",
        title: "v5.3 contract — not in the received freeze",
        t: "This closed contract is issued in v5.3. Switch to the operative issue. v5.0 is preserved. These types are SPECIFIED. They are not the running AGBOFA platform.",
      },
    ],
    v2,
  };
}

export const V53_D: Section[] = [
  d(
    "d6",
    "D.6",
    "Naming",
    "Canonical naming map",
    "One subsystem, one canonical name. Aliases are historical, not extra implementations.",
    [
      {
        k: "callout",
        tone: "law",
        title: "P0-01",
        t: "Multiple names must not imply multiple implementations. Status of every runtime listed here: SPECIFIED — ENFORCEMENT PENDING. This reader is not the platform.",
      },
      {
        k: "table",
        cols: ["Canonical name", "Aliases", "Level", "Responsibility", "Owner", "Relationship"],
        rows: NAMING,
      },
    ],
  ),
  d(
    "d7",
    "D.7",
    "Identity",
    "Identity model",
    "Human, Agent, Worker, Tenant, Product, Environment. Substitution is forbidden.",
    [
      {
        k: "callout",
        tone: "law",
        title: "P0-02",
        t: "A Worker is not an Agent. An Agent is not a Human. A Tenant is a scope, not an actor. Identity substitution is a constitutional violation.",
      },
      {
        k: "p",
        t: "Human authorizes and approves. Agent proposes, plans, or verifies according to duty. Worker executes inside a sandbox under a token. Tenant owns isolated organizational scope. Product belongs to one tenant and has one lifecycle. Environment bounds execution and deployment.",
      },
      {
        k: "table",
        cols: [
          "Identity",
          "Propose",
          "Approve",
          "Authorize",
          "Execute",
          "Verify",
          "Write evidence",
          "Write audit",
          "Revoke",
          "Freeze",
          "Recover",
        ],
        rows: IDENTITY_RIGHTS,
      },
      {
        k: "ul",
        items: [
          "A Worker identity is minted per admitted proposal and dies at sandbox destroy. It cannot inherit Agent duty.",
          "An Agent with duty=propose cannot hold duty=verify on the same proposalId or artifact lineage.",
          "Verification Agent and Security Verifier are duty=verify. They never receive implementation-execution tokens.",
          "Privilege escalation by renaming identities is denied at Trust Kernel.",
        ],
      },
    ],
  ),
  d(
    "d8",
    "D.8",
    "Placement",
    "Trust Kernel, Isolation Guard, Recovery",
    "Named enforcers now have seats. Not second systems. Not ops features.",
    [
      { k: "h", t: "Trust Kernel — P0-03", l: 2 },
      {
        k: "p",
        t: "The Trust Kernel is the constitutional enforcement core of the Governance layer. It is not a second Governance Engine. It classifies risk with deterministic policy, applies the autonomy ceiling, default-denies unclassified consequential actions, and requires Human approval on HIGH and CRITICAL. It does not author policy text, issue grants, mint tokens, or execute product work. Every AgentProposal must pass Trust Kernel before Governance Engine evaluation. Articles 1, 3, 4, 12.",
      },
      { k: "h", t: "Isolation Guard — P0-04", l: 2 },
      {
        k: "p",
        t: "The Isolation Guard sits on the Execution layer beside the Execution Broker. The Broker admits; the Guard binds. Inputs: WorkerIdentity, TenantId, ProductId, EnvironmentId, CapabilityToken.scope. Outputs: bind-allow or bind-deny. The Worker cannot start without a bind-allow. The sandbox implements the Guard (filesystem, network, process, secrets). Isolation is not a policy slogan. Article 14.",
      },
      { k: "h", t: "Recovery System — P0-05", l: 2 },
      {
        k: "p",
        t: "Recovery is constitutional. Authority is Human. The Recovery System implements freeze, rollback, and restore. Every recovery action produces an Evidence Envelope and an AuditEvent. Unaudited recovery is rejected. Operations System does not own Recovery. Articles 1 and 15.",
      },
      {
        k: "flow",
        steps: [
          "Human Identity",
          "Agent Identity (proposal)",
          "Trust Kernel (deterministic class)",
          "Governance Engine",
          "Authority System",
          "Capability System (token)",
          "Execution Broker (admit/deny)",
          "Isolation Guard (bind)",
          "Isolated Worker",
          "Result (claim)",
          "Independent Verification",
          "Evidence Store",
          "Audit System",
          "Freeze / Recovery System",
        ],
      },
    ],
  ),
  d(
    "d9",
    "D.9",
    "Contracts",
    "Closed type contracts",
    "No undefined *Reference types. Module: src/lib/agbofa/contracts.ts. SPECIFIED, not implemented as kernel.",
    [
      {
        k: "callout",
        tone: "note",
        title: "Engineering contract vs platform",
        t: "These types are the v5.3 closed contracts (P0-08–P0-12). They typecheck in this repository as specification. They do not mean a Trust Kernel is running. Status: SPECIFIED — ENFORCEMENT PENDING.",
      },
      { k: "h", t: "AgentProposal — P0-10", l: 2 },
      {
        k: "p",
        t: "An agent does not execute because it produced a proposal. The proposal is the only input to classification, risk, governance, authority, capability, approval, and the Broker decision.",
      },
      { k: "h", t: "CapabilityToken — P0-08", l: 2 },
      {
        k: "p",
        t: "Subject, tenant, product, environment, capability, action, resource, authority grant, proposal, risk class, issuer, times, nonce, status, optional approval and revocation. Tokens are not transferable authority. Worker tokens are not Agent tokens.",
      },
      { k: "h", t: "ProductPassport — P0-09", l: 2 },
      {
        k: "p",
        t: "Every former *Reference is a closed type: Requirement, ArchitectureRecord, TechnologyProfile, DatabaseRecord, RepositoryRecord, EnvironmentIdentity, DeploymentRecord, AgentBinding, CapabilityToken, Policy, AuditEventId, EvidenceId, Incident, RecoveryRecord. constitutionVersion and lifecycleState are required. incrementActivity marks TARGET_FUTURE stages without deleting them.",
      },
      { k: "h", t: "EvidenceEnvelope — P0-11", l: 2 },
      {
        k: "p",
        t: "Execution result is a claim. Verified evidence is an envelope at E1–E4 with a verification AgentId. E0 cannot be stored as success. Hash + previousHash plus Evidence Store write-control.",
      },
      { k: "h", t: "AuditEvent — P0-12", l: 2 },
      {
        k: "p",
        t: "why is required. tenantId and productId are required on tenant/product-scoped actions. Append-only. Writers: Audit System, Trust Kernel, Recovery System (Human-authorized). Agents, workers, and proposers cannot modify, delete, rewrite, suppress, or retroactively alter events. Hash chaining is necessary and not sufficient without write-control.",
      },
    ],
  ),
  d(
    "d10",
    "D.10",
    "Sandbox",
    "Sandbox and isolation mechanism",
    "Day-30 mechanism: Linux containers. Enforceable and testable. Not a metaphor.",
    [
      {
        k: "callout",
        tone: "law",
        title: "P0-13",
        t: "Day-30 isolation is a Linux container per Worker. TARGET_ARCHITECTURE may later use stronger isolation. The increment mechanism is containers. Status: SPECIFIED — ENFORCEMENT PENDING.",
      },
      {
        k: "table",
        cols: ["Boundary", "Day-30 rule"],
        rows: [
          ["Process", "One container per Worker. no-new-privileges. Dropped capabilities. Non-root user."],
          ["Filesystem", "Read-only root. Writable workspace mount only. No docker.sock. No host mounts."],
          ["Network", "Default none. Allowlist only if the token.scope.network is allowlist and Isolation Guard binds it."],
          ["Secrets", "Never in image or env dump. tmpfs injection of the exact secret named on the token, wiped on destroy."],
          ["Resources", "CPU, memory, PIDs, wall-clock timeout from the token."],
          ["Lifecycle", "create → Isolation Guard bind → run → extract artifacts → destroy. No reuse of a Worker identity."],
          ["Host", "Broker and Guard run on the host. Worker has no host API. Extract is pull-only of declared artifact paths."],
        ],
      },
    ],
  ),
  d(
    "d11",
    "D.11",
    "Classifier",
    "Non-AI governance classifier",
    "AI may propose a class. Deterministic policy is the authority.",
    [
      {
        k: "callout",
        tone: "law",
        title: "P0-14",
        t: "Trust Kernel classification is a deterministic table: action type × resource class × environment → risk floor. An Intelligence Contract recommendation may suggest a class. It cannot lower the floor. It cannot skip Human on HIGH/CRITICAL. AI recommendation is not governance authority.",
      },
      {
        k: "p",
        t: "Unclassified consequential actions are HIGH (Article 4 default-deny). LOW is token-only only when the deterministic table says LOW. An agent cannot classify its own action.",
      },
    ],
  ),
  d(
    "d12",
    "D.12",
    "Lifecycle",
    "Authoritative factory lifecycle",
    "One state enum. TARGET_FUTURE stages are inactive, not deleted. P0-17.",
    [
      {
        k: "p",
        t: "implementation_plan is the approved plan artifact. execution is brokered Worker action. build is compile/package. They are sequential, not aliases. Passport.lifecycleState uses this enum only.",
      },
      {
        k: "table",
        cols: ["State", "Increment"],
        rows: LIFECYCLE_ORDER.map((row) => [row.state, row.activity]),
      },
      {
        k: "machine",
        title: "Authoritative factory (happy path)",
        states: LIFECYCLE_ORDER.map((row, index) => ({
          id: row.state,
          name: `${row.state}${row.activity === "TARGET_FUTURE" ? " (future)" : ""}`,
          exits: LIFECYCLE_ORDER[index + 1] ? [LIFECYCLE_ORDER[index + 1].state, "rejected", "returned"] : ["rejected"],
        })),
      },
    ],
  ),
];

export const V53_C: Section[] = [
  {
    id: "c6",
    part: "Operating model",
    partId: "C",
    num: "C.6",
    nav: "Catalogue",
    title: "Binding agent catalogue",
    dek: "One roster. Eighteen specified identities. None implemented on the platform.",
    v1: [
      {
        k: "callout",
        tone: "note",
        title: "Not in the freeze roster",
        t: "v5.0 published twelve L1/L2 names. v5.3 binds eighteen identities including five A0 intelligence roles and Security Verifier. Switch to the operative issue.",
      },
    ],
    v2: [
      {
        k: "callout",
        tone: "law",
        title: "P0-15 / P0-06 / P0-07",
        t: "This table is the binding catalogue. A2 is an autonomy grant for in-scope governed action of the agent's duty. Duty is a separate field. duty=verify never includes product implementation execution. AG-SEC proposes. AG-SECV verifies. Self-verification is denied.",
      },
      {
        k: "table",
        cols: [
          "ID",
          "Name",
          "Role",
          "A",
          "Duty",
          "Capabilities",
          "Execution",
          "Verification",
          "Independence / restrictions",
          "Scope",
          "Status",
        ],
        rows: CATALOGUE,
      },
      {
        k: "p",
        t: "B.3's twelve names are a subset. The five A0 intelligence agents and AG-SECV are specified here. There is no second catalogue.",
      },
    ],
  },
];

export const V53_FRONT: Section[] = [
  {
    id: "p0",
    part: "Front",
    partId: "front",
    num: "04",
    nav: "P0 closure",
    title: "P0 closure matrix",
    dek: "Accepted audit defects. v5.3 corrections. Not a redesign.",
    v1: [
      {
        k: "p",
        t: "P0 closure is issued in v5.3. You are on the received freeze. Switch issues.",
      },
    ],
    v2: [
      {
        k: "table",
        cols: ["P0", "Finding", "Correction", "Section", "Status", "Verify"],
        rows: [
          ["P0-01", "Multiple names, implied multiple systems", "Canonical naming map", "D.6", "SPECIFIED", "No alias used as a second module"],
          ["P0-02", "No identity model", "Human/Agent/Worker/Tenant/Product/Environment + rights matrix", "D.7", "SPECIFIED", "Worker ≠ Agent tests"],
          ["P0-03", "Trust Kernel unnamed on the map", "Governance-layer enforcement core, not a second engine", "D.8", "SPECIFIED", "Every proposal hits Trust Kernel"],
          ["P0-04", "Isolation Guard had no seat", "Execution layer bind beside Broker", "D.8 / D.10", "SPECIFIED", "RT-003 + FS/net deny"],
          ["P0-05", "Recovery treated as ops", "Constitutional Recovery System", "D.8", "SPECIFIED", "RT-009/010"],
          ["P0-06", "A2 = execution vs verifier A2", "Duty separate from A-level; verifier duty cannot execute product work", "A.4 / C.6", "SPECIFIED", "Verifier token cannot be implementation"],
          ["P0-07", "Security Agent verifies security", "AG-SEC propose; AG-SECV verify", "C.6", "SPECIFIED", "Self-verify deny"],
          ["P0-08", "CapabilityToken sketch", "Closed CapabilityToken", "D.9 / contracts.ts", "SPECIFIED", "Typecheck + expire/revoke tests"],
          ["P0-09", "Passport *Reference placeholders", "Closed ProductPassport graph", "D.9 / D.12", "SPECIFIED", "Unknown state is a defect"],
          ["P0-10", "No proposal contract", "AgentProposal", "D.9", "SPECIFIED", "No execute-from-text"],
          ["P0-11", "No evidence envelope", "EvidenceEnvelope E1–E4", "D.9", "SPECIFIED", "E0 cannot store as success"],
          ["P0-12", "Audit missing why; optional tenant; no write-control", "Closed AuditEvent + writers", "D.9", "SPECIFIED", "Delete attempt denied"],
          ["P0-13", "Sandbox was a slogan", "Linux container rules", "D.10", "SPECIFIED", "Forbidden FS/net deny"],
          ["P0-14", "Classifier could be AI authority", "Deterministic floor; AI cannot lower", "D.11", "SPECIFIED", "AI override deny"],
          ["P0-15", "12 vs 17 agents", "Binding catalogue of 18", "C.6", "SPECIFIED", "Single roster"],
          ["P0-16", "C.3 Blocks vs F Waves", "C.3 v2 uses waves/days", "C.3 / F", "SPECIFIED", "No 60-day / 100% in operative"],
          ["P0-17", "Plan vs execution vs build collision", "One enum; future stages inactive", "D.12", "SPECIFIED", "Passport union = table"],
        ],
      },
      {
        k: "callout",
        tone: "warn",
        title: "Do not overclaim",
        t: "v5.3 is the authoritative engineering specification. SPECIFIED is not IMPLEMENTED. The Constitution Reader is not AGBOFA. Day-30 certification, if later earned, proves the first increment, not M5.",
      },
    ],
  },
];

export const V53_TRACE: Section[] = [
  {
    id: "a6",
    part: "Constitution",
    partId: "A",
    num: "A.6",
    nav: "Trace",
    title: "Constitutional traceability",
    dek: "Article → principle → mechanism → enforcement → test → evidence. P-set is not bijective.",
    v1: [
      {
        k: "p",
        t: "Traceability is issued in v5.3. Switch to the operative issue.",
      },
    ],
    v2: [
      {
        k: "callout",
        tone: "note",
        title: "Not bijective",
        t: "P1–P15 are not one-to-one with Articles 1–16. Article 7 (Execution is not success) has no dedicated principle. P2 (Constitutional supremacy) has no dedicated article; Article 2 is AGBOFA sovereignty. Articles are not rewritten to force numbering.",
      },
      {
        k: "table",
        cols: ["Article", "Principle", "Mechanism", "Enforcement", "Test", "Evidence"],
        rows: [
          ["1 Human sovereignty", "P1", "Human Identity, Trust Kernel HIGH/CRITICAL gate", "Trust Kernel", "Missing human on HIGH → DENY", "Approval + AuditEvent"],
          ["2 AGBOFA sovereignty", "P2 related, not identical", "Authority System", "Reject self-grant", "Self-grant → DENY", "AuditEvent"],
          ["3 Intelligence ≠ authority", "P3", "Intelligence Contract + AgentProposal", "Broker admits proposals only", "Model output auto-run → DENY", "Proposal + deny audit"],
          ["4 Authority explicit", "P4", "Authority grant on token", "Trust Kernel default-deny", "Missing chain → DENY", "AuditEvent.why"],
          ["5 Capability scoped", "P5", "CapabilityToken", "Capability System", "Expired/wrong tenant → DENY", "Token status + audit"],
          ["6 Execution isolated", "P6", "Broker + Isolation Guard + container", "Guard bind", "Forbidden FS/net → DENY", "Sandbox log envelope"],
          ["7 Execution ≠ success", "none (gap recorded)", "Result is a claim; EvidenceEnvelope required", "Verification Engine", "Promote unverified → DENY", "Envelope"],
          ["8 Independent verification", "P7", "duty=verify identity ≠ worker", "Verification Engine + AG-SECV", "Self-verify → DENY", "Envelope.verificationAgentId"],
          ["9 Evidence precedes trust", "P8", "Evidence Store", "E0 rejected", "E0 as success → DENY", "Envelope.level"],
          ["10 Audit persistent", "P9", "Audit System write-control", "Append-only writers", "Delete/update → DENY", "AuditEvent"],
          ["11 Unweakenable governance", "P10", "Governance Engine + Human", "Agent policy write denied", "Agent amends policy → DENY", "AuditEvent"],
          ["12 Autonomy earned", "P11", "Trust Kernel ceiling", "Catalogue A0–A2 only in increment", "Self-raise A → DENY", "AgentIdentity.autonomy"],
          ["13 Learning verified", "P12", "Memory candidates", "No auto-promote", "Unverified to memory → DENY", "Envelope"],
          ["14 Tenant isolation", "P13", "Isolation Guard", "Bind deny", "Wrong tenant → DENY", "RT-003 envelope"],
          ["15 Recovery constitutional", "P14", "Recovery System", "Human-authorized, audited", "Recover without authority → DENY", "RecoveryRecord"],
          ["16 Provider independence", "P15", "Intelligence Contract", "Core vendor-import forbidden", "Vendor type in core → FAIL BUILD", "Contract test"],
        ],
      },
    ],
  },
];
