import type { LedgerRow } from "./model";

export const VERSION = "v5.3";
export const RUNTIME = "SPECIFIED — RUNTIME IMPLEMENTATION PENDING";

export const LEDGER: LedgerRow[] = [
  { n: "1", title: "Human Sovereignty", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "2", title: "AGBOFA Sovereignty", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "3", title: "Intelligence Is Not Authority", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "4", title: "Authority Is Explicit", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "5", title: "Capability Is Scoped", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "6", title: "Execution Is Isolated", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "7", title: "Execution Is Not Success", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "8", title: "Verification Is Independent", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "9", title: "Evidence Precedes Trust", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "10", title: "Audit Is Persistent", status: "LOCKED / HUMAN ACCEPTED" },
  { n: "11", title: "Governance Cannot Be Weakened by the Governed", status: "DRAFT — OWNER REVIEW REQUIRED" },
  { n: "12", title: "Autonomy Is Earned", status: "DRAFT — OWNER REVIEW REQUIRED" },
  { n: "13", title: "Learning Requires Verified Outcomes", status: "COMPACT / NOT AUTHORIZED" },
  { n: "14", title: "Tenant Isolation", status: "COMPACT / NOT AUTHORIZED" },
  { n: "15", title: "Recovery Is Constitutional", status: "COMPACT / NOT AUTHORIZED" },
  { n: "16", title: "Provider Independence", status: "COMPACT / NOT AUTHORIZED" },
];

export const PATH = [
  "Authority",
  "Capability",
  "Broker",
  "Guard",
  "Worker",
  "Verification",
  "Evidence",
  "Audit",
];
