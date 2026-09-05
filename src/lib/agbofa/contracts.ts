/**
 * AGBOFA v5.3 closed engineering contracts.
 * Status: SPECIFIED — ENFORCEMENT PENDING on the AGBOFA platform.
 * This module is the type contract, not the running kernel.
 * The Constitution Reader is not the AGBOFA operating platform.
 */

export type Status =
  | "active"
  | "expired"
  | "revoked"
  | "consumed"
  | "rejected"
  | "pending";

export type RiskClass = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

export type ActorType = "human" | "agent" | "worker" | "system";

export type Duty = "advise" | "propose" | "verify" | "execute" | "approve" | "recover";

export type EnforcementStatus =
  | "TARGET_ARCHITECTURE"
  | "SPECIFIED"
  | "IMPLEMENTED"
  | "PARTIALLY_IMPLEMENTED"
  | "ENFORCEMENT_PENDING"
  | "VERIFIED";

export type Autonomy = "A0" | "A1" | "A2" | "A3" | "A4" | "A5";

export type Maturity = "M0" | "M1" | "M2" | "M3" | "M4" | "M5";

export type EvidenceLevel = "E0" | "E1" | "E2" | "E3" | "E4";

/** E0 is never acceptable for a consequential claim. */
export type AcceptableEvidenceLevel = Exclude<EvidenceLevel, "E0">;

export type LifecycleState =
  | "idea"
  | "discovery"
  | "requirements"
  | "domain_model"
  | "passport"
  | "blueprint"
  | "architecture"
  | "human_approval"
  | "implementation_plan"
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

export type IncrementActivity = "ACTIVE_INCREMENT" | "TARGET_FUTURE";

export type HumanId = string;
export type AgentId = string;
export type WorkerId = string;
export type TenantId = string;
export type ProductId = string;
export type EnvironmentId = string;
export type ProposalId = string;
export type TokenId = string;
export type EvidenceId = string;
export type AuditEventId = string;
export type ApprovalId = string;
export type AuthorityGrantId = string;
export type PolicyId = string;
export type ArtifactId = string;
export type IncidentId = string;
export type RecoveryActionId = string;
export type CorrelationId = string;

export interface HumanIdentity {
  humanId: HumanId;
  displayName: string;
  roles: Array<"owner" | "operator" | "auditor" | "approver">;
  freezeAuthority: boolean;
  status: Status;
}

export interface AgentIdentity {
  agentId: AgentId;
  canonicalName: string;
  autonomy: Autonomy;
  duty: Duty;
  tenantScope: TenantId | "*";
  productScope: ProductId | "*";
  status: Status;
}

export interface WorkerIdentity {
  workerId: WorkerId;
  spawnedFor: ProposalId;
  boundTenant: TenantId;
  boundProduct: ProductId;
  boundEnvironment: EnvironmentId;
  boundToken: TokenId;
  parentAgent: AgentId;
  status: Status;
}

export interface TenantIdentity {
  tenantId: TenantId;
  ownerHumanId: HumanId;
  isolationClass: "default_deny";
  status: Status;
}

export interface ProductIdentity {
  productId: ProductId;
  tenantId: TenantId;
  ownerHumanId: HumanId;
  constitutionVersion: string;
  lifecycleState: LifecycleState;
  status: Status;
}

export interface EnvironmentIdentity {
  environmentId: EnvironmentId;
  productId: ProductId;
  tenantId: TenantId;
  class: "workspace" | "staging" | "production" | "recovery";
  status: Status;
}

export interface Approval {
  approvalId: ApprovalId;
  humanId: HumanId;
  proposalId: ProposalId;
  decision: "approve" | "reject";
  rationale: string;
  issuedAt: string;
  riskClass: RiskClass;
}

export interface AuthorityGrant {
  grantId: AuthorityGrantId;
  subject: HumanId | AgentId;
  chain: string[];
  scope: {
    tenantId: TenantId;
    productId?: ProductId;
    environmentId?: EnvironmentId;
  };
  issuedBy: HumanId | "constitution";
  issuedAt: string;
  expiresAt: string;
  status: Status;
}

export interface Policy {
  policyId: PolicyId;
  version: string;
  rule: string;
  riskFloor: RiskClass;
  requiresHuman: boolean;
  constitutionArticles: number[];
  status: Status;
}

export interface Requirement {
  requirementId: string;
  productId: ProductId;
  statement: string;
  riskClass: RiskClass;
  status: Status;
}

export interface ArchitectureRecord {
  architectureId: string;
  productId: ProductId;
  summary: string;
  contracts: string[];
  humanApprovalId?: ApprovalId;
  status: Status;
}

export interface TechnologyProfile {
  profileId: string;
  productId: ProductId;
  kind: "web-app" | "api-service" | "database";
  runtime: "node20";
  status: Status;
}

export interface DatabaseRecord {
  databaseId: string;
  productId: ProductId;
  tenantId: TenantId;
  engine: "postgres16" | "sqlite";
  isolation: "tenant_bound";
  status: Status;
}

export interface RepositoryRecord {
  repositoryId: string;
  productId: ProductId;
  tenantId: TenantId;
  url: string;
  defaultBranch: string;
  status: Status;
}

export interface DeploymentRecord {
  deploymentId: string;
  productId: ProductId;
  environmentId: EnvironmentId;
  artifactId: ArtifactId;
  verified: boolean;
  evidenceId?: EvidenceId;
  status: Status;
}

export interface AgentBinding {
  agentId: AgentId;
  productId: ProductId;
  duty: Duty;
  autonomy: Autonomy;
}

export interface Incident {
  incidentId: IncidentId;
  tenantId: TenantId;
  productId: ProductId;
  severity: RiskClass;
  summary: string;
  status: Status;
}

export interface RecoveryRecord {
  recoveryId: RecoveryActionId;
  kind: "freeze" | "rollback" | "restore";
  authorizedBy: HumanId;
  tenantId?: TenantId;
  productId?: ProductId;
  evidenceId: EvidenceId;
  auditEventId: AuditEventId;
  status: Status;
}

export interface Artifact {
  artifactId: ArtifactId;
  kind: "log" | "test" | "config" | "scan" | "image" | "diff" | "workspace_extract";
  hash: string;
  uri: string;
}

export interface RetryPolicy {
  maxAttempts: number;
  backoffMs: number;
  jitter: boolean;
}

export interface AgentProposal {
  proposalId: ProposalId;
  constitutionVersion: string;
  correlationId: CorrelationId;
  actor: {
    type: "agent";
    agentId: AgentId;
    duty: Duty;
  };
  tenantId: TenantId;
  productId: ProductId;
  environmentId?: EnvironmentId;
  action: {
    type: string;
    resource: string;
    description: string;
  };
  claimedAuthorityGrantId?: AuthorityGrantId;
  requestedCapability: string;
  declaredRisk: RiskClass;
  why: string;
  artifacts: ArtifactId[];
  createdAt: string;
  status: "submitted" | "classified" | "denied" | "approved" | "executed" | "verified" | "rejected";
}

export interface CapabilityToken {
  tokenId: TokenId;
  constitutionVersion: string;
  subject: {
    type: "agent" | "worker";
    id: AgentId | WorkerId;
  };
  tenantId: TenantId;
  productId: ProductId;
  environmentId: EnvironmentId;
  capability: string;
  action: string;
  resource: string;
  scope: {
    maxDurationSec: number;
    maxOperations: number;
    allowedCommands: string[];
    network: "none" | "allowlist";
    filesystem: "workspace_only";
  };
  authorityGrantId: AuthorityGrantId;
  approvalId?: ApprovalId;
  proposalId: ProposalId;
  riskClass: RiskClass;
  issuer: "capability-system";
  issuedAt: string;
  expiresAt: string;
  nonce: string;
  status: Status;
  revocationId?: string;
}

export interface ProductPassport {
  productId: ProductId;
  productName: string;
  tenantId: TenantId;
  ownerHumanId: HumanId;
  version: string;
  constitutionVersion: string;
  lifecycleState: LifecycleState;
  incrementActivity: IncrementActivity;
  requirements: Requirement[];
  architecture: ArchitectureRecord;
  technologyProfile: TechnologyProfile;
  database: DatabaseRecord;
  repositories: RepositoryRecord[];
  environments: EnvironmentIdentity[];
  deployments: DeploymentRecord[];
  agents: AgentBinding[];
  capabilities: CapabilityToken[];
  policies: Policy[];
  auditHistory: AuditEventId[];
  evidence: EvidenceId[];
  incidents: Incident[];
  recoveryState: RecoveryRecord;
}

export interface EvidenceEnvelope {
  evidenceId: EvidenceId;
  constitutionVersion: string;
  source: "execution" | "verification" | "human" | "recovery" | "system";
  actor: {
    type: ActorType;
    id: string;
  };
  tenantId: TenantId;
  productId: ProductId;
  proposalId?: ProposalId;
  action: string;
  claim: string;
  result: "pass" | "fail" | "unverified" | "rejected";
  timestamp: string;
  level: AcceptableEvidenceLevel;
  verificationStatus: "unverified" | "verified" | "rejected";
  verificationAgentId?: AgentId;
  artifacts: Artifact[];
  parentEvidenceId?: EvidenceId;
  hash: string;
  previousHash: string;
  lifecycleStatus: Status;
}

export interface AuditEvent {
  eventId: AuditEventId;
  timestamp: string;
  correlationId: CorrelationId;
  actor: {
    type: ActorType;
    id: string;
    duty?: Duty;
  };
  tenantId: TenantId;
  productId: ProductId;
  environmentId?: EnvironmentId;
  action: string;
  resource: string;
  decision: "allow" | "deny" | "freeze" | "rollback" | "restore" | "reject";
  why: string;
  authorityGrantId?: AuthorityGrantId;
  tokenId?: TokenId;
  approvalId?: ApprovalId;
  proposalId?: ProposalId;
  evidenceId?: EvidenceId;
  recoveryId?: RecoveryActionId;
  hash: string;
  previousHash: string;
}

export interface IntelligenceContract {
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
}

export const LIFECYCLE_ORDER: Array<{ state: LifecycleState; activity: IncrementActivity }> = [
  { state: "idea", activity: "ACTIVE_INCREMENT" },
  { state: "discovery", activity: "ACTIVE_INCREMENT" },
  { state: "requirements", activity: "ACTIVE_INCREMENT" },
  { state: "domain_model", activity: "ACTIVE_INCREMENT" },
  { state: "passport", activity: "ACTIVE_INCREMENT" },
  { state: "blueprint", activity: "ACTIVE_INCREMENT" },
  { state: "architecture", activity: "ACTIVE_INCREMENT" },
  { state: "human_approval", activity: "ACTIVE_INCREMENT" },
  { state: "implementation_plan", activity: "ACTIVE_INCREMENT" },
  { state: "execution", activity: "ACTIVE_INCREMENT" },
  { state: "build", activity: "ACTIVE_INCREMENT" },
  { state: "test", activity: "ACTIVE_INCREMENT" },
  { state: "security", activity: "ACTIVE_INCREMENT" },
  { state: "verification", activity: "ACTIVE_INCREMENT" },
  { state: "evidence", activity: "ACTIVE_INCREMENT" },
  { state: "deployment_approval", activity: "ACTIVE_INCREMENT" },
  { state: "deployment", activity: "ACTIVE_INCREMENT" },
  { state: "post_deployment_verification", activity: "ACTIVE_INCREMENT" },
  { state: "operations", activity: "ACTIVE_INCREMENT" },
  { state: "learning", activity: "TARGET_FUTURE" },
  { state: "improvement", activity: "TARGET_FUTURE" },
  { state: "retirement", activity: "TARGET_FUTURE" },
];
