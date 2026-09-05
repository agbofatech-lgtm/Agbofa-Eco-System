/**
 * Phase 1 Subject domain model.
 * Lifecycle transitions are explicit. TERMINATED cannot resurrect.
 * Origin does not confer authority.
 */

import {
  asOrganizationId,
  asSubjectId,
  asTenantId,
  DomainError,
  isSubjectType,
  type OrganizationId,
  type SubjectId,
  type SubjectLifecycle,
  type SubjectOrigin,
  type SubjectStatus,
  type SubjectType,
  type TenantId,
} from "./types.ts";

const ALLOWED_TRANSITIONS: Record<SubjectStatus, readonly SubjectStatus[]> = {
  PENDING: ["ACTIVE"],
  ACTIVE: ["SUSPENDED", "QUARANTINED"],
  SUSPENDED: ["ACTIVE", "TERMINATED"],
  QUARANTINED: ["TERMINATED"],
  TERMINATED: [],
};

export interface Subject {
  readonly id: SubjectId;
  readonly type: SubjectType;
  readonly origin: SubjectOrigin;
  readonly tenantId: TenantId;
  readonly organizationId: OrganizationId;
  readonly status: SubjectStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly lifecycle: SubjectLifecycle;
}

export interface SubjectDraft {
  id: string;
  type: SubjectType;
  origin: SubjectOrigin;
  tenantId: string;
  organizationId: string;
  createdAt: string;
  status?: SubjectStatus;
  reason?: string;
}

export function createSubject(draft: SubjectDraft): Subject {
  if (!isSubjectType(draft.type)) {
    throw new DomainError("invalid-subject-type", `unknown subject type: ${String(draft.type)}`);
  }
  if (!draft.origin || !draft.origin.kind || !draft.origin.source.trim()) {
    throw new DomainError("invalid-origin", "origin kind and source are required and are not authority");
  }
  const createdAt = draft.createdAt;
  if (!createdAt || Number.isNaN(Date.parse(createdAt))) {
    throw new DomainError("invalid-created-at", "createdAt must be an ISO timestamp");
  }
  const status: SubjectStatus = draft.status ?? "PENDING";
  if (status !== "PENDING" && status !== "ACTIVE") {
    throw new DomainError("invalid-initial-status", "subjects start PENDING or ACTIVE");
  }
  return {
    id: asSubjectId(draft.id),
    type: draft.type,
    origin: { kind: draft.origin.kind, source: draft.origin.source.trim() },
    tenantId: asTenantId(draft.tenantId),
    organizationId: asOrganizationId(draft.organizationId),
    status,
    createdAt,
    updatedAt: createdAt,
    lifecycle: {
      enteredAt: createdAt,
      from: null,
      reason: draft.reason ?? "created",
    },
  };
}

export function canTransition(from: SubjectStatus, to: SubjectStatus): boolean {
  return ALLOWED_TRANSITIONS[from].includes(to);
}

export function transitionSubject(
  subject: Subject,
  to: SubjectStatus,
  at: string,
  reason: string,
): Subject {
  if (!canTransition(subject.status, to)) {
    throw new DomainError(
      "invalid-transition",
      `cannot transition ${subject.status} → ${to}`,
    );
  }
  if (!at || Number.isNaN(Date.parse(at))) {
    throw new DomainError("invalid-transition-time", "transition time must be an ISO timestamp");
  }
  if (Date.parse(at) < Date.parse(subject.updatedAt)) {
    throw new DomainError("invalid-transition-time", "transition cannot precede last update");
  }
  return {
    ...subject,
    status: to,
    updatedAt: at,
    lifecycle: {
      enteredAt: at,
      from: subject.status,
      reason: reason.trim() || to,
    },
  };
}
