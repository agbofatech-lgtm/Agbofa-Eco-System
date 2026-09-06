/**
 * Structural capability validation + parent containment.
 * Atomic string equality only. No prefix, glob, or set semantics.
 * One capability → one grantId. CAPABILITY VALIDITY ≠ EXECUTION ADMISSION.
 */
import type { AuthorityGrant } from "../authority/grant.ts";
import { RISK_RANK, type Constraints, type GrantId } from "../authority/types.ts";
import type { Capability } from "./capability.ts";

export type GrantLookup = (id: GrantId) => AuthorityGrant | undefined;

export type CapabilityVerdict =
  | {
      readonly ok: true;
      readonly authorized: false;
      readonly admitted: false;
      readonly meaning: "STRUCTURAL_VALID_NOT_ADMITTED";
    }
  | {
      readonly ok: false;
      readonly authorized: false;
      readonly admitted: false;
      readonly code: string;
    };

export function constraintsWeaken(parent: Constraints, child: Constraints): boolean {
  if (RISK_RANK[child.maxRisk] > RISK_RANK[parent.maxRisk]) return true;
  if (parent.requireHuman === true && child.requireHuman !== true) return true;
  if (parent.maxDurationMs !== undefined) {
    if (child.maxDurationMs === undefined || child.maxDurationMs > parent.maxDurationMs) return true;
  }
  return false;
}

export function validateCapability(cap: Capability, lookup: GrantLookup): CapabilityVerdict {
  const parent = lookup(cap.grantId);
  if (!parent) {
    return { ok: false, authorized: false, admitted: false, code: "missing-parent" };
  }
  if (cap.subjectId !== parent.subject) {
    return { ok: false, authorized: false, admitted: false, code: "subject-mismatch" };
  }
  if (cap.scope !== parent.scope) {
    return { ok: false, authorized: false, admitted: false, code: "scope-exceeds" };
  }
  if (cap.action !== parent.action) {
    return { ok: false, authorized: false, admitted: false, code: "action-exceeds" };
  }
  if (cap.resource !== parent.resource) {
    return { ok: false, authorized: false, admitted: false, code: "resource-exceeds" };
  }
  if (Date.parse(cap.expiresAt) > Date.parse(parent.expiresAt)) {
    return { ok: false, authorized: false, admitted: false, code: "expiry-exceeds" };
  }
  if (constraintsWeaken(parent.constraints, cap.constraints)) {
    return { ok: false, authorized: false, admitted: false, code: "constraint-weakened" };
  }
  return {
    ok: true,
    authorized: false,
    admitted: false,
    meaning: "STRUCTURAL_VALID_NOT_ADMITTED",
  };
}
