/**
 * Phase 2.2 Boundary enforcer.
 * Verifies Subject → Grant → Capability → Broker request cannot be disconnected.
 * Fail closed. Does not admit, execute, or issue.
 * Reuses existing validators; does not reimplement containment or isolation.
 */
import type { AuthorityGrant } from "../authority/grant.ts";
import type { Capability } from "../capability/capability.ts";
import type { Subject } from "../identity/subject.ts";
import type { BrokerRequest } from "../broker/types.ts";
import { boundaryFail, boundaryPass, type BoundaryResult } from "./types.ts";

function token(value: string | null | undefined): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}

export function enforceBoundary(input: {
  readonly subject: Subject;
  readonly grant: AuthorityGrant;
  readonly capability: Capability;
  readonly request: BrokerRequest;
}): BoundaryResult {
  const { subject, grant, capability, request } = input;

  if (grant.subject !== subject.id) {
    return boundaryFail("subject-grant-mismatch");
  }
  if (capability.grantId !== grant.id) {
    return boundaryFail("grant-capability-mismatch");
  }
  if (capability.subjectId !== subject.id) {
    return boundaryFail("capability-subject-mismatch");
  }

  const requestSubject = token(request.subjectId);
  const requestGrant = token(request.grantId);
  const requestCapability = token(request.capabilityId);
  const requestAction = token(request.action);
  const requestResource = token(request.resource);

  if (
    requestSubject !== subject.id ||
    requestGrant !== grant.id ||
    requestCapability !== capability.capabilityId ||
    requestAction !== capability.action ||
    requestResource !== capability.resource
  ) {
    return boundaryFail("capability-request-mismatch");
  }

  const isolationTenant = token(request.isolation?.tenantId);
  if (isolationTenant && isolationTenant !== subject.tenantId) {
    return boundaryFail("subject-tenant-mismatch");
  }

  return boundaryPass();
}
