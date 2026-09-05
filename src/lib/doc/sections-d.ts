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
    part: "Technical specification",
    partId: "D",
    num,
    nav,
    title,
    dek,
    v1,
    ...(v2 ? { v2 } : {}),
  };
}

const REPO_TREE = `agbofa/
├── constitution/               # THE CONSTITUTION (supreme)
│   ├── articles/               # Each article as machine-readable contract
│   ├── principles/             # Permanent architectural principles
│   ├── amendments/             # Constitutional amendment process
│   └── version-control/        # Constitutional versioning
│
├── core/                       # AGBOFA CORE PLATFORM
│   ├── trust-kernel/           # Auth, governance, policy engine
│   ├── authority/              # Authority model, delegation, revocation
│   ├── capability/             # Capability tokens, scopes, expiry
│   ├── execution/              # Broker, workspace, workers, sandbox
│   ├── verification/           # Independent verification engine
│   ├── evidence/               # Evidence collection, hashing, storage
│   ├── audit/                  # Append-only audit log
│   └── recovery/               # Freeze, rollback, restore
│
├── intelligence/               # AI ABSTRACTION LAYER
│   ├── contract/               # Intelligence Contract (provider-agnostic)
│   ├── adapters/               # Provider adapters
│   ├── runtime/                # Agent runtime, context, task management
│   └── memory/                 # Institutional memory and learning
│
├── factory/                    # PRODUCT FACTORY
│   ├── discovery/              # Product discovery workflow
│   ├── requirements/           # Requirements engine
│   ├── blueprint/              # Product blueprint generation
│   ├── architecture/           # Architecture proposal system
│   └── planning/               # Implementation planning
│
├── products/                   # PRODUCTS BUILT BY AGBOFA
│   ├── product-a/
│   │   ├── passport.json       # Product Passport (identity contract)
│   │   ├── requirements/
│   │   ├── blueprint/
│   │   ├── source/
│   │   ├── evidence/
│   │   └── audit/
│   └── product-b/
│
├── operations/                 # ENTERPRISE OPERATIONS
│   ├── monitoring/
│   ├── incident/
│   ├── deployment/
│   └── compliance/
│
├── templates/                  # TECHNOLOGY TEMPLATES
│   ├── web-app/
│   ├── api-service/
│   └── database/
│
├── evidence/                   # AGBOFA'S OWN EVIDENCE
│   ├── daily-freezes/
│   ├── gate-certifications/
│   ├── red-team/
│   └── completion-matrix.json
│
└── command-center/             # AGBOFA COMMAND CENTER
    ├── api/
    ├── dashboard/
    └── cli/`;

const PASSPORT_V1 = `interface ProductPassport {
  productId: string;
  productName: string;
  tenantId: string;
  ownerId: string;
  version: string;
  lifecycleState: string;
  requirements: RequirementReference[];
  architecture: ArchitectureReference;
  technologyProfile: TechnologyProfile;
  database: DatabaseReference;
  repositories: RepositoryReference[];
  environments: EnvironmentReference[];
  deployments: DeploymentReference[];
  agents: AgentReference[];
  capabilities: CapabilityReference[];
  policies: PolicyReference[];
  auditHistory: AuditReference[];
  evidence: EvidenceReference[];
  incidents: IncidentReference[];
  recoveryState: RecoveryReference;
}`;

const PASSPORT_V2 = `interface ProductPassport {
  productId: string;
  productName: string;
  tenantId: string;
  ownerId: string;
  version: string;
  constitutionVersion: string;
  lifecycleState:
    | "idea"
    | "discovery"
    | "requirements"
    | "domain_model"
    | "passport"
    | "blueprint"
    | "architecture"
    | "human_approval"
    | "implementation"
    | "execution"
    | "build"
    | "test"
    | "security"
    | "verification"
    | "evidence"
    | "deployment_approval"
    | "deployment"
    | "post_deployment_verification"
    | "operations"
    | "learning"
    | "improvement"
    | "retirement";
  requirements: RequirementReference[];
  architecture: ArchitectureReference;
  technologyProfile: TechnologyProfile;
  database: DatabaseReference;
  repositories: RepositoryReference[];
  environments: EnvironmentReference[];
  deployments: DeploymentReference[];
  agents: AgentReference[];
  capabilities: CapabilityReference[];
  policies: PolicyReference[];
  auditHistory: AuditReference[];
  evidence: EvidenceReference[];
  incidents: IncidentReference[];
  recoveryState: RecoveryReference;
}`;

const CAPABILITY_TOKEN = `interface CapabilityToken {
  tokenId: string;
  capability: string;          // e.g., "repo.read"
  scope: {
    productId: string;
    environment: string;
    resource?: string;
  };
  grantedTo: {
    agentId: string;
    role: string;
  };
  grantedBy: {
    authorityChain: string[];
    humanApproval?: string;
  };
  issuedAt: string;
  expiresAt: string;
  constraints: {
    maxDuration?: number;
    maxOperations?: number;
    allowedCommands?: string[];
  };
}`;

const AUDIT_EVENT = `interface AuditEvent {
  eventId: string;
  timestamp: string;
  actor: {
    type: "human" | "agent" | "system";
    id: string;
    role?: string;
  };
  action: {
    type: string;
    classification: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    description: string;
  };
  authority: {
    chain: string[];
    token?: string;
    humanApproval?: string;
  };
  capability: {
    name: string;
    scope: string;
    tokenId?: string;
  };
  target: {
    productId?: string;
    environment?: string;
    resource?: string;
  };
  result: {
    status: "success" | "failure" | "rejected" | "error";
    details?: string;
  };
  verification: {
    performed: boolean;
    method?: string;
    result?: string;
    evidenceId?: string;
  };
  hash: string;
  previousHash: string;
}`;

const INTELLIGENCE_CONTRACT = `interface IntelligenceContract {
  contractId: string;
  version: string;
  provider: string;
  capabilities: {
    reasoning: boolean;
    codeGeneration: boolean;
    analysis: boolean;
    planning: boolean;
    toolUse: boolean;
  };
  constraints: {
    maxContextLength: number;
    maxOutputLength: number;
    timeoutMs: number;
    retryPolicy: RetryPolicy;
  };
  security: {
    dataIsolation: boolean;
    noTrainingOnData: boolean;
    auditLogging: boolean;
  };
}`;

export const PART_D: Section[] = [
  s(
    "d1",
    "D.1",
    "Repository",
    "Repository structure",
    "Constitution at the root. Core, intelligence, factory, products, operations, evidence, command center.",
    [
      {
        k: "p",
        t: "The repository is itself a constitutional artifact. The Constitution directory is supreme. Products never import core internals that would let an agent self-grant authority.",
      },
      { k: "code", t: REPO_TREE },
    ],
  ),

  s(
    "d2",
    "D.2",
    "Stack",
    "Technology stack",
    "TypeScript, Node 20, Postgres 16, SQLite, Drizzle, BullMQ, XState 5, Zod, Vitest, Playwright, Fastify, JWT and capability tokens, Docker Compose (phase 1), React and Vite.",
    [
      {
        k: "p",
        t: "The stack is chosen for type safety, explicit state, and auditable storage. Provider-specific AI SDKs do not appear in core. Phase 1 deployment is a single-node Docker Compose so the execution path remains inspectable.",
      },
      {
        k: "table",
        cols: ["Component", "Technology", "Rationale"],
        rows: [
          ["Language", "TypeScript (strict mode)", "Type safety, ecosystem maturity"],
          ["Runtime", "Node.js 20+", "Production-ready, widespread support"],
          ["Database (Primary)", "PostgreSQL 16", "Enterprise-grade, ACID compliance"],
          ["Database (Isolated)", "SQLite", "Lightweight test and workspace environments"],
          ["ORM", "Drizzle ORM", "SQL-first, TypeScript-native, lightweight"],
          ["Queue", "BullMQ (Redis-based)", "Production-ready job queue"],
          ["State management", "XState 5", "Explicit state machines, TypeScript-native"],
          ["Validation", "Zod", "Runtime validation, TypeScript inference"],
          ["Testing (Unit / Integration)", "Vitest", "Fast, modern, TypeScript-native"],
          ["Testing (E2E)", "Playwright", "Browser automation, cross-browser"],
          ["API framework", "Fastify", "High-performance, TypeScript-native"],
          ["Authentication", "Custom JWT + capability tokens", "Constitutional authority model"],
          ["Audit storage", "PostgreSQL + append-only tables", "Durable, queryable, hash-chained"],
          ["Containerization", "Docker + Docker Compose", "Consistent environments"],
          ["Deployment (Phase 1)", "Single-node Docker Compose", "Controlled, auditable"],
          ["CLI", "Commander.js", "Mature CLI framework"],
          ["Dashboard", "React + Vite", "Command center UI"],
          ["Documentation", "Markdown + OpenAPI 3.1", "Machine-readable API docs"],
        ],
      },
    ],
  ),

  s(
    "d3",
    "D.3",
    "Passport",
    "Product Passport",
    "Identity contract for every product. v5.1 binds constitutionVersion and a closed lifecycleState union.",
    [
      {
        k: "p",
        t: "Every product carries a Product Passport. The passport is the identity contract: tenant, owner, environments, agents, capabilities, evidence, recovery. The received freeze typed lifecycleState as an open string.",
      },
      { k: "code", t: PASSPORT_V1 },
    ],
    [
      {
        k: "p",
        t: "Every product carries a Product Passport. The operative issue adds constitutionVersion so a product is bound to a constitutional freeze, and closes lifecycleState to the factory union. An unknown state is a defect, not a feature.",
      },
      {
        k: "callout",
        tone: "fix",
        title: "Closed lifecycle",
        t: "lifecycleState is a union of factory stages, not a free string. constitutionVersion records which constitutional issue the product is governed by. Neither field is an autonomy grant or a maturity certification.",
      },
      { k: "code", t: PASSPORT_V2 },
    ],
  ),

  s(
    "d4",
    "D.4",
    "Tokens",
    "Capability token and audit event",
    "Scoped, short-lived capability. Append-only, hash-chained audit.",
    [
      { k: "h", t: "Capability token", l: 2 },
      {
        k: "p",
        t: "An actor can only perform actions for which it possesses the required capability (Article 5). Tokens are short-lived, scoped to product and environment, and renewable only through governance.",
      },
      { k: "code", t: CAPABILITY_TOKEN },
      { k: "h", t: "Audit event", l: 2 },
      {
        k: "p",
        t: "Consequential actions create durable audit records (Article 10). Events are append-only and hash-chained. Modification, deletion, or bypass is a security incident.",
      },
      { k: "code", t: AUDIT_EVENT },
    ],
  ),

  s(
    "d5",
    "D.5",
    "Contract",
    "Intelligence Contract",
    "Provider-agnostic contract. Adapters for Claude, GPT, and Local are replaceable.",
    [
      {
        k: "p",
        t: "All intelligence access flows through the Intelligence Contract (Article 16). The contract names capabilities and constraints, not a vendor. Direct provider access from core is an architecture violation.",
      },
      { k: "code", t: INTELLIGENCE_CONTRACT },
    ],
    [
      {
        k: "p",
        t: "All intelligence access flows through the Intelligence Contract (Article 16). The contract names capabilities and constraints, not a vendor. Direct provider access from core is an architecture violation.",
      },
      { k: "code", t: INTELLIGENCE_CONTRACT },
      { k: "h", t: "Adapter path", l: 2 },
      {
        k: "p",
        t: "Claude, GPT, and Local are adapters behind the contract. Naming them does not make them constitutional. Any adapter is replaceable without a core change. Switching adapters does not grant autonomy and does not raise maturity.",
      },
      {
        k: "flow",
        steps: [
          "Agent task (proposal context)",
          "Intelligence Contract",
          "Adapter: Claude",
          "Adapter: GPT",
          "Adapter: Local",
          "Provider runtime",
          "Contracted output (PROPOSAL)",
          "Governance evaluation",
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "No provider is irreplaceable",
        t: "Hard-coding provider-specific APIs in core AGBOFA components is prohibited. Provider switching is possible without core changes. The Execution Broker still rejects any action whose authority chain traces only to a model.",
      },
    ],
  ),
];
