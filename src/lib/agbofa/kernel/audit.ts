import type {
  ExecutionRequest,
  KernelAuditRecord,
  KernelDecision,
  KernelStore,
} from "./types.ts";

/**
 * Article 10 kernel audit — append-only hash-chained records.
 * SPECIFIED ≠ IMPLEMENTED. This is not a production Audit System.
 * Audit ≠ EvidenceEnvelope ≠ Grant ≠ SUCCESS.
 */

export type { KernelAuditRecord };

export function chainHash(previous: string, why: string, requestId: string): string {
  const t = `${previous}|${requestId}|${why}`;
  let h = 2166136261;
  for (let i = 0; i < t.length; i++) {
    h ^= t.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return `e${(h >>> 0).toString(16)}`;
}

export function verifyAuditChain(store: KernelStore): boolean {
  let prev = "genesis";
  for (const rec of store.auditLog) {
    if (rec.previousHash !== prev) return false;
    const expected = chainHash(prev, rec.why, rec.requestId);
    if (rec.hash !== expected) return false;
    prev = rec.hash;
  }
  if (store.auditLog.length === 0) return store.previousAuditHash === "genesis";
  return store.previousAuditHash === store.auditLog[store.auditLog.length - 1].hash;
}

export function appendAudit(
  store: KernelStore,
  requestId: string,
  why: string,
  extra?: Partial<Omit<KernelAuditRecord, "eventId" | "hash" | "previousHash" | "requestId" | "why">>,
): KernelAuditRecord {
  if (!verifyAuditChain(store)) {
    store.auditFrozen = true;
  }
  const previousHash = store.previousAuditHash;
  const hash = chainHash(previousHash, why, requestId);
  const rec: KernelAuditRecord = {
    eventId: `aud-${store.auditLog.length + 1}`,
    timestamp: extra?.timestamp ?? new Date().toISOString(),
    requestId,
    actorId: extra?.actorId ?? "",
    caller: extra?.caller ?? "",
    tenantId: extra?.tenantId ?? "",
    productId: extra?.productId ?? "",
    environmentId: extra?.environmentId ?? "",
    action: extra?.action ?? "",
    resource: extra?.resource ?? "",
    decision: extra?.decision ?? why,
    why,
    authorityGrantId: extra?.authorityGrantId,
    tokenId: extra?.tokenId,
    hash,
    previousHash,
  };
  store.auditLog.push(rec);
  store.previousAuditHash = hash;
  return rec;
}

export function appendDecisionAudit(
  store: KernelStore,
  req: ExecutionRequest,
  decision: Pick<KernelDecision, "why" | "disposition">,
): KernelAuditRecord {
  return appendAudit(store, req.requestId, decision.why, {
    timestamp: req.nowIso,
    actorId: req.actorId,
    caller: req.caller,
    tenantId: req.tenantId,
    productId: req.productId,
    environmentId: req.environmentId,
    action: req.action,
    resource: req.resource,
    decision: decision.disposition,
    authorityGrantId: req.grant?.grantId,
    tokenId: req.token?.tokenId,
  });
}

/** Compact prohibition: modification is denied. Does not mutate. Freezes execution. */
export function tryRewriteAudit(): "DENY" {
  return "DENY";
}

/** Compact prohibition: deletion is denied. Does not mutate. */
export function tryDeleteAudit(): "DENY" {
  return "DENY";
}

export function freezeForTamper(store: KernelStore, requestId: string, why: string): void {
  store.auditFrozen = true;
  appendAudit(store, requestId, why, { decision: "freeze" });
}
