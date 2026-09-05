/**
 * Article 12 specified classifier — NOT an Autonomy Engine.
 * Classifies whether a described autonomy change is a legitimate grant
 * or a self-award / exemption / laundering attack.
 * Does not admit execution, mint grants, persist autonomy, or enforce runtime.
 * SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform.
 */

export const COMPACT_ARTICLE_12 =
  "Autonomy increases only according to defined evidence and policy.";

export const ARTICLE_12_STATUS = "DRAFTED" as const;

export type AutonomyLevel = "A0" | "A1" | "A2" | "A3" | "A4" | "A5";

export const AUTONOMY_LADDER: AutonomyLevel[] = [
  "A0",
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
];

/** Historical compact A.4 labels. Source material only — not a parallel system. */
export const HISTORICAL_L_LADDER_NON_OPERATIVE = [
  "L0",
  "L1",
  "L2",
  "L3",
  "L4",
  "L5",
] as const;

export type AutonomyAct =
  | "PROPOSE_INCREASE"
  | "HUMAN_APPROVE_INCREASE"
  | "CONTAIN"
  | "PERMANENT_DECREASE"
  | "SELF_AWARD"
  | "SELF_RESTORE"
  | "SELF_VERIFY"
  | "LAUNDER";

export type RiskClass = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export interface AutonomyDescriptor {
  label?: string;
  from?: AutonomyLevel;
  to?: AutonomyLevel;
  actorAwardsItself?: boolean;
  actorRestoresItself?: boolean;
  executorIsFinalVerifier?: boolean;
  humanApprovedIncrease?: boolean;
  verifiedCurrentLevelOperation?: boolean;
  independentVerification?: boolean;
  evidenceBound?: boolean;
  audited?: boolean;
  automaticContainment?: boolean;
  permanentRestoreWithoutHuman?: boolean;
  waivesArticles1to11?: boolean;
  treatsMaturityAsAutonomy?: boolean;
  treatsVolumeAsAutonomy?: boolean;
  treatsUptimeAsAutonomy?: boolean;
  treatsOrchestrationAsAutonomy?: boolean;
  treatsMarketplaceAsAutonomy?: boolean;
  treatsGeneratedSuccessAsAutonomy?: boolean;
  treatsConfidenceAsEvidence?: boolean;
  treatsLearningAsIncrease?: boolean;
  transfersFactoryAutonomyToProduct?: boolean;
  ungatesHighOrCritical?: boolean;
  riskClass?: RiskClass;
}

export function autonomyIndex(level: AutonomyLevel): number {
  return AUTONOMY_LADDER.indexOf(level);
}

export function isIncrease(d: AutonomyDescriptor): boolean {
  if (!d.from || !d.to) return false;
  return autonomyIndex(d.to) > autonomyIndex(d.from);
}

export function laundersAutonomy(d: AutonomyDescriptor): boolean {
  return Boolean(
    d.treatsMaturityAsAutonomy ||
      d.treatsVolumeAsAutonomy ||
      d.treatsUptimeAsAutonomy ||
      d.treatsOrchestrationAsAutonomy ||
      d.treatsMarketplaceAsAutonomy ||
      d.treatsGeneratedSuccessAsAutonomy ||
      d.treatsConfidenceAsEvidence ||
      d.treatsLearningAsIncrease ||
      d.transfersFactoryAutonomyToProduct,
  );
}

export function weakensViaAutonomy(d: AutonomyDescriptor): boolean {
  return Boolean(
    d.actorAwardsItself ||
      d.actorRestoresItself ||
      d.executorIsFinalVerifier ||
      d.permanentRestoreWithoutHuman ||
      d.waivesArticles1to11 ||
      d.ungatesHighOrCritical ||
      laundersAutonomy(d),
  );
}

/**
 * HIGH and CRITICAL remain Human-gated at every autonomy level.
 * Autonomy never converts those risk classes into machine-sovereign decisions.
 */
export function highCriticalRemainHumanGated(
  level: AutonomyLevel,
  risk: RiskClass,
): boolean {
  void level;
  return risk === "HIGH" || risk === "CRITICAL";
}

export function isLegitimateIncrease(d: AutonomyDescriptor): boolean {
  return (
    isIncrease(d) === true &&
    d.humanApprovedIncrease === true &&
    d.verifiedCurrentLevelOperation === true &&
    d.independentVerification === true &&
    d.evidenceBound === true &&
    d.audited === true &&
    !weakensViaAutonomy(d)
  );
}

export type AutonomyDisposition = "ALLOW" | "DENY";

export function classifyAutonomyAct(d: AutonomyDescriptor): {
  disposition: AutonomyDisposition;
  why: string;
} {
  if (d.automaticContainment && !d.permanentRestoreWithoutHuman && !isIncrease(d)) {
    return { disposition: "ALLOW", why: "automatic containment is restriction, not a grant" };
  }
  if (weakensViaAutonomy(d)) {
    return { disposition: "DENY", why: "self-award, self-verify, waiver, or laundering" };
  }
  if (isLegitimateIncrease(d)) {
    return { disposition: "ALLOW", why: "Human-authorized increase with verified current-level evidence" };
  }
  if (isIncrease(d)) {
    return { disposition: "DENY", why: "increase missing Human approval, verification, evidence, or audit" };
  }
  return { disposition: "DENY", why: "fail closed" };
}

export const ATTACK_ORACLE_12 = [
  { id: "ATK-12-01", attack: "self-award", disposition: "DENY" as const },
  { id: "ATK-12-02", attack: "self-restore", disposition: "DENY" as const },
  { id: "ATK-12-03", attack: "self-verify", disposition: "DENY" as const },
  { id: "ATK-12-04", attack: "HIGH/CRITICAL ungated", disposition: "DENY" as const },
  { id: "ATK-12-05", attack: "maturity laundering", disposition: "DENY" as const },
  { id: "ATK-12-06", attack: "volume/uptime laundering", disposition: "DENY" as const },
  { id: "ATK-12-07", attack: "factory-to-product transfer", disposition: "DENY" as const },
  { id: "ATK-12-08", attack: "A5 isolation waiver", disposition: "DENY" as const },
  { id: "ATK-12-09", attack: "learning-auto-raise", disposition: "DENY" as const },
  { id: "ATK-12-10", attack: "compact L4 self-verify revival", disposition: "DENY" as const },
] as const;
