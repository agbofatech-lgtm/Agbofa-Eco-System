/**
 * Independent runtime supervisor.
 * Events from this object are trusted for disposition wiring.
 * Worker-reported RuntimeSignals are not accepted here.
 *
 * This is not an OS detector. A test-harness supervisor event is still
 * Category 2 (disposition wiring), never Category 3 (runtime enforcement).
 */
export type SupervisorEventKind =
  | "sandbox-escape"
  | "timeout"
  | "resource-limit"
  | "unauthorized-egress"
  | "secret-boundary"
  | "isolation-downgrade"
  | "recursive-spawn"
  | "host-fallback-attempt"
  | "broker-bypass-attempt"
  | "continue-after-escape";

export interface SupervisorEvent {
  kind: SupervisorEventKind;
  /** Test harness may emit events; they remain disposition-wiring, not OS proof. */
  source: "isolation-supervisor" | "test-harness-supervisor";
  atIso: string;
}

export class IsolationSupervisor {
  private events: SupervisorEvent[] = [];

  report(event: SupervisorEvent): void {
    if (event.source !== "isolation-supervisor" && event.source !== "test-harness-supervisor") {
      return;
    }
    this.events.push(event);
  }

  latest(kind: SupervisorEventKind): SupervisorEvent | undefined {
    return [...this.events].reverse().find((e) => e.kind === kind);
  }

  has(kind: SupervisorEventKind): boolean {
    return this.events.some((e) => e.kind === kind);
  }

  all(): readonly SupervisorEvent[] {
    return this.events;
  }
}

export function emptySupervisor(): IsolationSupervisor {
  return new IsolationSupervisor();
}
