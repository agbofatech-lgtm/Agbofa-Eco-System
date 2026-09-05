import type { KernelStore } from "./types.ts";

export function chainHash(previous: string, why: string, requestId: string): string {
  const t = `${previous}|${requestId}|${why}`;
  let h = 2166136261;
  for (let i = 0; i < t.length; i++) {
    h ^= t.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return `e${(h >>> 0).toString(16)}`;
}

export function appendAudit(
  store: KernelStore,
  requestId: string,
  why: string,
): string {
  const hash = chainHash(store.previousAuditHash, why, requestId);
  store.previousAuditHash = hash;
  return hash;
}
