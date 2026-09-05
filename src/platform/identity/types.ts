/**
 * Phase 1 Identity domain types.
 * Constitutional subjects — not user accounts, not authentication.
 * Origin is provenance, never authority.
 * STRUCTURAL RECORD ≠ AUTHORIZED ACTOR.
 * Kernel admit() remains the only admission prototype.
 * No issuance. No execution. No v5.4. No Article 17.
 */

export type Brand<T, B extends string> = T & { readonly __brand: B };

export type SubjectId = Brand<string, "SubjectId">;
export type TenantId = Brand<string, "TenantId">;
export type OrganizationId = Brand<string, "OrganizationId">;

export const SUBJECT_TYPES = [
  "Human",
  "Agent",
  "System",
  "Service",
  "Worker",
  "GeneratedSubject",
  "Provider",
] as const;
export type SubjectType = (typeof SUBJECT_TYPES)[number];

export const SUBJECT_STATUSES = [
  "PENDING",
  "ACTIVE",
  "SUSPENDED",
  "TERMINATED",
  "QUARANTINED",
] as const;
export type SubjectStatus = (typeof SUBJECT_STATUSES)[number];

export interface SubjectOrigin {
  readonly kind: "human-registered" | "system-seed" | "generated" | "provider-declared";
  readonly source: string;
}

export interface SubjectLifecycle {
  readonly enteredAt: string;
  readonly from: SubjectStatus | null;
  readonly reason: string;
}

export class DomainError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.name = "DomainError";
    this.code = code;
  }
}

export function requireToken(raw: string, code: string): string {
  if (typeof raw !== "string" || raw.trim().length === 0 || raw !== raw.trim()) {
    throw new DomainError(code, `${code}: non-empty trimmed token required`);
  }
  return raw;
}

export function asSubjectId(raw: string): SubjectId {
  return requireToken(raw, "invalid-subject-id") as SubjectId;
}
export function asTenantId(raw: string): TenantId {
  return requireToken(raw, "invalid-tenant-id") as TenantId;
}
export function asOrganizationId(raw: string): OrganizationId {
  return requireToken(raw, "invalid-organization-id") as OrganizationId;
}

export function isSubjectType(value: string): value is SubjectType {
  return (SUBJECT_TYPES as readonly string[]).includes(value);
}

export function isSubjectStatus(value: string): value is SubjectStatus {
  return (SUBJECT_STATUSES as readonly string[]).includes(value);
}
