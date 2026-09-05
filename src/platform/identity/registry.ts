/**
 * In-memory SubjectRegistry.
 * Does not authenticate, persist, issue credentials, or assign authority.
 */

import { transitionSubject, type Subject } from "./subject.ts";
import {
  DomainError,
  type OrganizationId,
  type SubjectId,
  type SubjectStatus,
  type TenantId,
} from "./types.ts";

export class SubjectRegistry {
  readonly persistence = "memory" as const;
  #byId = new Map<SubjectId, Subject>();

  register(subject: Subject): Subject {
    if (this.#byId.has(subject.id)) {
      throw new DomainError("duplicate-subject-id", `subject already registered: ${subject.id}`);
    }
    this.#byId.set(subject.id, subject);
    return subject;
  }

  getById(id: SubjectId): Subject | undefined {
    return this.#byId.get(id);
  }

  findByTenant(tenantId: TenantId): Subject[] {
    return [...this.#byId.values()].filter((s) => s.tenantId === tenantId);
  }

  findByOrganization(organizationId: OrganizationId): Subject[] {
    return [...this.#byId.values()].filter((s) => s.organizationId === organizationId);
  }

  transition(id: SubjectId, to: SubjectStatus, at: string, reason: string): Subject {
    const current = this.#byId.get(id);
    if (!current) throw new DomainError("subject-not-found", `unknown subject: ${id}`);
    const next = transitionSubject(current, to, at, reason);
    this.#byId.set(id, next);
    return next;
  }

  get size(): number {
    return this.#byId.size;
  }
}
