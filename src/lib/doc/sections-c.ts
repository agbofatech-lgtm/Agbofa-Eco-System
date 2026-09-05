import { AGENTS } from "./agents";
import { LAYERS } from "./layers";
import type { Block, Section } from "./types";

function s(
  id: string,
  num: string,
  nav: string,
  title: string,
  dek: string,
  v1: Block[],
  v2?: Block[],
): Section {
  return {
    id,
    part: "Operating model",
    partId: "C",
    num,
    nav,
    title,
    dek,
    v1,
    ...(v2 ? { v2 } : {}),
  };
}

export const PART_C: Section[] = [
  s(
    "c1",
    "C.1",
    "Daily",
    "Daily operating rhythm",
    "Eight hours. Brief, implement, assemble, test, attack, freeze.",
    [
      {
        k: "p",
        t: "The daily rhythm is how humans and agents share a clock without sharing authority. Architecture decides what should exist before agents generate. Evidence is frozen before the day closes.",
      },
      {
        k: "table",
        cols: ["Time", "Activity", "Hours", "Purpose"],
        rows: [
          ["08:00–09:00", "Architecture & Command Briefing", "1.0", "Decide what should exist"],
          ["09:00–11:30", "AI Agent Implementation", "2.5", "Agents generate and modify systems"],
          ["11:30–13:00", "Assembly & Integration", "1.5", "Connect components"],
          ["14:00–15:30", "Testing & Validation", "1.5", "Prove functionality"],
          ["15:30–16:15", "Security & Governance Verification", "0.75", "Attack and verify controls"],
          ["16:15–17:00", "Evidence & Daily Freeze", "0.75", "Preserve decisions and evidence"],
          ["TOTAL", "", "8.0", ""],
        ],
      },
    ],
  ),

  s(
    "c2",
    "C.2",
    "Weekly",
    "Weekly rhythm and six-day cycle",
    "Heavy assembly, then integration, then attack. Every block: plan, assemble, test, attack, verify, freeze.",
    [
      { k: "h", t: "Weekly rhythm", l: 2 },
      {
        k: "table",
        cols: ["Days", "Mode"],
        rows: [
          ["Monday–Thursday", "Heavy assembly"],
          ["Friday", "Integration + testing"],
          ["Saturday", "Security + verification + documentation"],
          ["Sunday", "Light review / planning / recovery (2–4 hours)"],
        ],
      },
      { k: "h", t: "Six-day work cycle", l: 2 },
      {
        k: "p",
        t: "Each implementation block follows the same six beats. Skipping ATTACK or FREEZE is a process violation, not a schedule compression.",
      },
      { k: "flow", steps: ["Plan", "Assemble", "Test", "Attack", "Verify", "Freeze"] },
    ],
    [
      {
        k: "p",
        t: "The strike week is seven calendar days because the clock is 30, not 60. Throughput comes from five parallel tracks, not from abolishing freeze. Sunday still freezes evidence.",
      },
      {
        k: "table",
        cols: ["Days", "Mode"],
        rows: [
          ["Day 1–4 of each wave", "Heavy assembly on all five tracks"],
          ["Day 5 of each wave", "Integration + testing + a gate if the cadence lands"],
          ["Day 6 of each wave", "Attack + verification. Gate if the cadence lands."],
          ["Day 7 of each wave", "Freeze, dossier, plan the next wave. Recovery window."],
        ],
      },
      {
        k: "flow",
        steps: ["Plan", "Assemble", "Test", "Attack", "Verify", "Freeze"],
      },
      {
        k: "callout",
        tone: "warn",
        title: "Do not steal freeze to make the date",
        t: "Skipping ATTACK or FREEZE is a process violation. The 30-day clock then stops. The constitution does not get rewritten to match a slipped day.",
      },
    ],
  ),

  s(
    "c3",
    "C.3",
    "Gates",
    "Ten gates",
    "Gate 1 constitutional runtime through Gate 10 red-team certification. Gates are evidence, not dates.",
    [
      {
        k: "p",
        t: "A gate is a certification event with an evidence package. Passing a calendar day does not pass a gate. Gate numbers are delivery checkpoints; they are not autonomy grants, not maturity levels, and not document-issue numbers.",
      },
      {
        k: "table",
        cols: ["Gate", "Description", "Blocks covered"],
        rows: [
          ["Gate 1", "Constitutional Runtime works", "Block 1"],
          ["Gate 2", "Trust Kernel works", "Block 2"],
          ["Gate 3", "Authority / Capability security works", "Block 3"],
          ["Gate 4", "AI Agent runtime works", "Block 4"],
          ["Gate 5", "Product specification factory works", "Block 5"],
          ["Gate 6", "Controlled execution works", "Block 6"],
          ["Gate 7", "Independent verification works", "Block 7"],
          ["Gate 8", "Deployment lifecycle works", "Block 8"],
          ["Gate 9", "Multiple products remain isolated", "Block 9"],
          ["Gate 10", "Red-team certification passes", "Block 10"],
        ],
      },
    ],
    [
      {
        k: "p",
        t: "v5.3 binds gates to the 30-day waves. Blocks are historical freeze language. The architecture remains M0–M5. The increment is 30 days.",
      },
      {
        k: "table",
        cols: ["Gate", "Day", "Wave", "Description"],
        rows: [
          ["Gate 1", "3", "W1", "Constitutional runtime rejects unauthorized action. Identity records exist."],
          ["Gate 2", "6", "W1", "Trust Kernel deterministic class. Agent cannot act except through governance."],
          ["Gate 3", "9", "W2", "Authority System + Capability System: forged, expired, wrong-tenant tokens denied."],
          ["Gate 4", "12", "W2", "Agents submit AgentProposal only. Intelligence Contract, no direct execute."],
          ["Gate 5", "14", "W2", "Factory produces a governed ProductPassport."],
          ["Gate 6", "16", "W3", "Broker admit/deny. Isolation Guard bind. Container worker."],
          ["Gate 7", "19", "W3", "Independent verification. EvidenceEnvelope. AuditEvent.why required."],
          ["Gate 8", "21", "W3", "Product 1 deployed under passport after verify."],
          ["Gate 9", "25", "W4", "Product A cannot access Product B. Isolation Guard proven."],
          ["Gate 10", "30", "W4", "Constitutional adversarial tests pass. Recovery works. Increment certified — not M5."],
        ],
      },
    ],
  ),

  s(
    "c4",
    "C.4",
    "Layers",
    "Layer contracts",
    "Purpose, permissions, and failure modes for every layer in the stack.",
    [
      {
        k: "p",
        t: "The received freeze defined the stack in Part B and the rhythm in Part C. It did not publish a per-layer contract catalogue.",
      },
      {
        k: "callout",
        tone: "note",
        title: "Catalogue lives in the operative issue",
        t: "The layer-by-layer contract — purpose, responsibilities, inputs, outputs, permissions, prohibitions, dependencies, data, failures, security, audit — is issued in v5.1. Switch to the v5.1 operative issue to read it.",
      },
    ],
    [
      {
        k: "p",
        t: "The thirteen-layer stack is the operative operating-model map of AGBOFA. No layer may assume the authority of a layer above it. Intelligence never is authority.",
      },
      {
        k: "callout",
        tone: "law",
        title: "Layer law",
        t: "Each layer's prohibitions are constitutional, not style. Autonomy grants named in a layer (A0, A1, A2) are agent autonomy, not enterprise maturity.",
      },
      ...LAYERS,
    ],
  ),

  s(
    "c5",
    "C.5",
    "Agents",
    "Agent catalogue",
    "Named agents, tools, prohibitions, and autonomy grants A0 / A1 / A2.",
    [
      {
        k: "p",
        t: "The received freeze listed initial agent roles in B.3 with L1 / L2 autonomy cells. It did not publish per-agent contracts (inputs, outputs, tools, prohibitions, confidence, autonomy).",
      },
      {
        k: "callout",
        tone: "note",
        title: "Catalogue lives in the operative issue",
        t: "The agent-by-agent contract is issued in v5.1, using A0–A2 grants. Switch to the v5.1 operative issue to read it. L1 in the freeze is A1; L2 is A2.",
      },
    ],
    [
      {
        k: "p",
        t: "Every named agent is a role under the Intelligence Contract. Outputs are proposals unless a scoped A2 grant (Verification only, in this catalogue) authorizes governed execution of independent verification.",
      },
      {
        k: "callout",
        tone: "law",
        title: "Autonomy in this catalogue",
        t: "A0 advisory intelligence. A1 proposal. A2 governed execution of independent verification within pre-approved scope. No agent in this catalogue is A3 or above. Confidence never substitutes for authority (Article 3).",
      },
      ...AGENTS,
    ],
  ),
];
