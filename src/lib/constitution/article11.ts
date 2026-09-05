/**
 * Article 11 specified classifier — NOT a Governance Engine.
 * Classifies the constitutional effect of a described change.
 * Does not admit execution, mint grants, persist policy, or enforce runtime.
 * SPECIFIED ≠ IMPLEMENTED. Reader ≠ platform.
 */

export const COMPACT_ARTICLE_11 =
  "An agent cannot modify the rules that govern its own authority.";

export const ARTICLE_11_STATUS = "DRAFTED" as const;

export type GovernanceAct =
  | "PROPOSAL"
  | "APPROVAL"
  | "VERSIONING"
  | "IMPLEMENTATION"
  | "VERIFICATION";

export type GovernanceLayer =
  | "MODIFICATION"
  | "ADMINISTRATION"
  | "CONFIGURATION"
  | "EXECUTION";

export interface ChangeDescriptor {
  label?: string;
  lowersConstitutionalFloor?: boolean;
  shrinksEnforcementCoverage?: boolean;
  addsSelfException?: boolean;
  forksPath?: boolean;
  makesEnforcementOptional?: boolean;
  reclassifiesClassA?: boolean;
  usesEmergencyOrRecoveryAsRewrite?: boolean;
  isHumanAuthorizedAmendment?: boolean;
  isScopedAdminUnderExistingLaw?: boolean;
  staysInsidePolicyFloors?: boolean;
  isAdmittedExecutionOfApprovedText?: boolean;
}

export const GOVERNANCE_ACTS: GovernanceAct[] = [
  "PROPOSAL",
  "APPROVAL",
  "VERSIONING",
  "IMPLEMENTATION",
  "VERIFICATION",
];

export function weakensGovernance(d: ChangeDescriptor): boolean {
  return Boolean(
    d.lowersConstitutionalFloor ||
      d.shrinksEnforcementCoverage ||
      d.addsSelfException ||
      d.forksPath ||
      d.makesEnforcementOptional ||
      d.reclassifiesClassA ||
      d.usesEmergencyOrRecoveryAsRewrite,
  );
}

/**
 * Effect over label. A patch, flag, adapter, catalogue, hygiene label,
 * provider permission, recovery, or architecture name does not decide the class.
 * Unlabeled changes fail closed to MODIFICATION.
 */
export function classifyGovernanceLayer(d: ChangeDescriptor): GovernanceLayer {
  if (weakensGovernance(d)) return "MODIFICATION";
  if (d.isHumanAuthorizedAmendment) return "MODIFICATION";
  if (d.isAdmittedExecutionOfApprovedText) return "EXECUTION";
  if (d.isScopedAdminUnderExistingLaw) return "ADMINISTRATION";
  if (d.staysInsidePolicyFloors) return "CONFIGURATION";
  return "MODIFICATION";
}

export function effectOverLabel(_label: string, layer: GovernanceLayer): GovernanceLayer {
  return layer;
}

export function isLegitimateEvolution(d: ChangeDescriptor): boolean {
  return (
    d.isHumanAuthorizedAmendment === true &&
    !weakensGovernance(d) &&
    !d.addsSelfException &&
    !d.usesEmergencyOrRecoveryAsRewrite
  );
}

export const ATTACK_ORACLE = [
  { id: "ATK-11-01", attack: "self-exemption", layer: "MODIFICATION" as const },
  { id: "ATK-11-02", attack: "configuration laundering", layer: "MODIFICATION" as const },
  { id: "ATK-11-03", attack: "interpretation capture", layer: "MODIFICATION" as const },
  { id: "ATK-11-04", attack: "emergency exemption", layer: "MODIFICATION" as const },
  { id: "ATK-11-05", attack: "recovery exemption", layer: "MODIFICATION" as const },
  { id: "ATK-11-06", attack: "autonomy exemption", layer: "MODIFICATION" as const },
  { id: "ATK-11-07", attack: "provider-path bypass", layer: "MODIFICATION" as const },
  { id: "ATK-11-08", attack: "shadow Broker", layer: "MODIFICATION" as const },
  { id: "ATK-11-09", attack: "parallel governance engine", layer: "MODIFICATION" as const },
  { id: "ATK-11-10", attack: "relabeling", layer: "MODIFICATION" as const },
  { id: "ATK-11-11", attack: "generated-product sovereignty", layer: "MODIFICATION" as const },
] as const;
