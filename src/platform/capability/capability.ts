/**
 * Phase 1 Capability domain model.
 * Exactly one grantId. constructCapability is not issuance or admission.
 */
import {
  action,
  grantId,
  resource,
  scope,
  type Action,
  type Constraints,
  type GrantId,
  type Resource,
  type Scope,
} from "../authority/types.ts";
import {
  CapabilityDomainError,
  CapabilityStatus,
  capabilityId,
  type CapabilityId,
  type CapabilityStatus as Status,
} from "./types.ts";

const ALLOWED: Record<Status, readonly Status[]> = {
  PENDING: ["ACTIVE"],
  ACTIVE: ["EXPIRED", "REVOKED"],
  EXPIRED: [],
  REVOKED: [],
};

export interface CapabilityInit {
  capabilityId: string;
  grantId: string;
  subjectId: string;
  scope: string;
  action: string;
  resource: string;
  constraints: Constraints;
  expiresAt: string;
}

export interface Capability {
  readonly capabilityId: CapabilityId;
  readonly grantId: GrantId;
  readonly subjectId: string;
  readonly scope: Scope;
  readonly action: Action;
  readonly resource: Resource;
  readonly constraints: Constraints;
  readonly expiresAt: string;
  readonly status: Status;
}

export function constructCapability(init: CapabilityInit): Capability {
  if (!init.subjectId?.trim()) {
    throw new CapabilityDomainError("missing-subject", "subjectId is required");
  }
  if (!init.expiresAt || Number.isNaN(Date.parse(init.expiresAt))) {
    throw new CapabilityDomainError("invalid-expires-at", "expiresAt must be an ISO timestamp");
  }
  return {
    capabilityId: capabilityId(init.capabilityId),
    grantId: grantId(init.grantId),
    subjectId: init.subjectId.trim(),
    scope: scope(init.scope),
    action: action(init.action),
    resource: resource(init.resource),
    constraints: { ...init.constraints },
    expiresAt: init.expiresAt,
    status: CapabilityStatus.PENDING,
  };
}

export function transitionCapability(capability: Capability, next: Status): Capability {
  if (!ALLOWED[capability.status].includes(next)) {
    throw new CapabilityDomainError(
      "invalid-capability-transition",
      `cannot transition capability ${capability.status} → ${next}`,
    );
  }
  return { ...capability, status: next };
}
