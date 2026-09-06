/**
 * Phase 2.0 Broker foundation.
 * Evaluates whether a request is eligible to proceed to the admission boundary.
 * Does not issue grants or capabilities. Does not admit. Does not execute.
 * Does not replace kernel admit(). Isolation-unavailable remains kernel law.
 */

import { validateGrantStructure } from "../authority/validator.ts";
import { GrantStatus, type GrantId } from "../authority/types.ts";
import type { AuthorityGrant } from "../authority/grant.ts";
import { validateCapability } from "../capability/validator.ts";
import { CapabilityStatus } from "../capability/types.ts";
import type { Capability } from "../capability/capability.ts";
import type { Subject } from "../identity/subject.ts";
import { allowEligible, deny, type BrokerDecision, type BrokerRequest } from "./types.ts";

export interface BrokerLookups {
  readonly subject: (id: string) => Subject | undefined;
  readonly grant: (id: string) => AuthorityGrant | undefined;
  readonly capability: (id: string) => Capability | undefined;
}

function present(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function evaluateBroker(request: BrokerRequest | null | undefined, lookups: BrokerLookups): BrokerDecision {
  if (!request || typeof request !== "object") return deny("malformed-request");

  if (!present(request.subjectId)) return deny("missing-subject");
  if (!present(request.grantId)) return deny("missing-grant");
  if (!present(request.capabilityId)) return deny("missing-capability");
  if (!present(request.action) || !present(request.resource)) return deny("malformed-request");

  const subject = lookups.subject(request.subjectId.trim());
  if (!subject) return deny("unknown-subject");
  if (subject.status !== "ACTIVE") return deny("invalid-subject");

  const grant = lookups.grant(request.grantId.trim());
  if (!grant) return deny("unknown-grant");
  const grantVerdict = validateGrantStructure(grant);
  if (!grantVerdict.ok) return deny("invalid-grant");
  if (grant.status !== GrantStatus.ACTIVE) return deny("invalid-grant");

  const capability = lookups.capability(request.capabilityId.trim());
  if (!capability) return deny("unknown-capability");
  if (capability.status !== CapabilityStatus.ACTIVE) return deny("invalid-capability");

  const contained = validateCapability(capability, (id: GrantId) => lookups.grant(id));
  if (!contained.ok) return deny(contained.code === "missing-parent" ? "unknown-grant" : contained.code);

  if (capability.subjectId !== subject.id) return deny("subject-mismatch");
  if (capability.action !== request.action.trim()) return deny("action-mismatch");
  if (capability.resource !== request.resource.trim()) return deny("resource-mismatch");

  if (grantVerdict.authorized !== false || contained.admitted !== false) {
    return deny("unknown-decision");
  }

  return allowEligible();
}
