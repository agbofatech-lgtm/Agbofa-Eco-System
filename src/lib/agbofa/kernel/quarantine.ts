import type { KernelStore } from "./types.ts";

const QUARANTINE_WHYS = new Set([
  "broker-bypass",
  "sandbox-escape",
  "secret-boundary",
  "data-exfiltration",
  "isolation-downgrade",
  "quarantine-bypass",
  "continue-after-escape",
  "credential-leakage",
]);

export function shouldQuarantine(why: string): boolean {
  return QUARANTINE_WHYS.has(why);
}

export function quarantineActor(store: KernelStore, actorId: string): void {
  store.quarantinedActors.add(actorId);
}

export function isQuarantined(store: KernelStore, actorId: string): boolean {
  return store.quarantinedActors.has(actorId);
}
