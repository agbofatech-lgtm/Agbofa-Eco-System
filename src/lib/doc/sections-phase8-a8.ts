import type { Block, Section } from "./types";

function s(
  id: string,
  num: string,
  nav: string,
  title: string,
  dek: string,
  v2: Block[],
): Section {
  return {
    id,
    part: "Constitution",
    partId: "A",
    num,
    nav,
    title,
    dek,
    v1: [
      {
        k: "callout",
        tone: "note",
        title: "Phase 8 Article 8 deep draft is not in the received freeze",
        t: "Compact Article 8 in A.3 remains the short form. Articles 1–7 are LOCKED. Switch to the operative issue.",
      },
    ],
    v2,
  };
}

export const PHASE8_A8: Section[] = [
  s(
    "ph8",
    "XI.0",
    "Phase 8",
    "Phase 8 — Article 8 draft status",
    "Verification Is Independent. LOCKED — HUMAN ACCEPTED. Compact A.3 unchanged.",
    [
      {
        k: "callout",
        tone: "law",
        title: "LOCKED — HUMAN ACCEPTED",
        t: "Constitutional artifact: Article 8 — Verification Is Independent. Version: v5.3 (no v5.4). Status: LOCKED — HUMAN ACCEPTED. Compact A.3 unchanged. Articles 1–7 unchanged. ATK-8-01–25 and INV-8-01–12 accepted. EXECUTOR ≠ VERIFIER. Runtime: SPECIFIED — RUNTIME IMPLEMENTATION PENDING. Reader ≠ platform. Phase 9 — Article 9: OPEN for drafting only.",
      },
      {
        k: "table",
        cols: ["Phase", "Article", "Status"],
        rows: [
          ["Phase 1–7", "Articles 1–7", "LOCKED / HUMAN ACCEPTED — UNCHANGED"],
          ["Phase 8", "Article 8", "LOCKED / HUMAN ACCEPTED"],
          ["Phase 9", "Article 9", "OPEN — DRAFT / NOT LOCKED"],
        ],
      },
    ],
  ),

  s(
    "a8law",
    "XI",
    "Art. 8 Law",
    "Article 8 — Verification Is Independent (law)",
    "Executor ≠ Verifier. Self-verification cannot establish SUCCESS. LOCKED — HUMAN ACCEPTED.",
    [
      {
        k: "callout",
        tone: "note",
        title: "A.3 compact form — not replaced",
        t: "A.3 Article 8 remains Verification Is Independent. This draft supplies the independence Article 7 required. It does not draft Article 9 (evidence) or Article 10 (audit). Compact A.3 is not retitled.",
      },
      { k: "h", t: "8.1 Purpose", l: 2 },
      {
        k: "p",
        t: "A consequential action cannot establish its own correctness or success. Verification must be sufficiently independent from the execution being verified. The executing entity is not the final authority that its own consequential work is correct. EXECUTOR ≠ VERIFIER. This holds even if the executor is highly trusted, A2, AI, produced the tests, produced the evidence, claims success, or has a perfect history.",
      },
      { k: "h", t: "8.2 Constitutional rule", l: 2 },
      {
        k: "p",
        t: "Independent verification is functional independence sufficient to prevent self-verification and conflicted outcome determination. Physical machines or separate infrastructure are not automatically required. Required: distinct verification identity from execution identity; Verifier is not the executing Worker; Verifier does not verify its own consequential execution; verification bound to this execution, tenant, product, environment, scope, result, and evidence. UNVERIFIED cannot become VERIFIED-PASS. VERIFIED-FAIL cannot become SUCCESS. Compact: outcomes lacking independent verification are blocked from advancing.",
      },
      { k: "h", t: "8.3 Identity", l: 2 },
      {
        k: "p",
        t: "Worker ≠ Verification Agent. AG-VER verifies; it does not implement product. AG-SECV verifies others' security work; AG-SEC does not verify its own work; AG-SECV never verifies work it originated and has no implementation execution. A Verifier has a distinct identity; cannot manufacture authority by verifying; cannot enlarge original capability; cannot rewrite execution history; cannot convert execution into SUCCESS without satisfying Articles 7–8. A2 duty=verify is not an execution duty (existing catalogue).",
      },
      { k: "h", t: "8.4 Independence dimensions", l: 2 },
      {
        k: "ul",
        items: [
          "Execution identity ≠ verification identity.",
          "Execution authority ≠ verification authority (verification authority does not become Human Authority or a grant).",
          "Execution workspace ≠ verification workspace where the architecture can bind them separately; if not physically separate, identity and duty separation still bind.",
          "Execution evidence is input to verification; the verification result is a distinct record.",
          "Approval path for verification is not the executor's self-approval.",
        ],
      },
      { k: "h", t: "8.5 Anti-collusion", l: 2 },
      {
        k: "p",
        t: "Consensus is not automatically independence. Agent A SUCCESS + B agrees + C agrees does not establish independent verification if all three depend on the same unverified claim. Collusion paths: Agent–Verifier, Worker–Verifier, multiple agents, model–model, provider–verifier, execution process–verification process, generated evidence–verification process. Non-independent agreement is not constitutional verification.",
      },
      { k: "h", t: "8.6 What the Verifier may not blindly trust", l: 2 },
      {
        k: "ul",
        items: [
          "Worker, model, or agent claims; exit codes; generated summaries; self-generated test reports.",
          "Mutable evidence; stale results; results of another execution, tenant, product, or environment.",
        ],
      },
      { k: "h", t: "8.7 Verification ≠ authority; ≠ implementation", l: 2 },
      {
        k: "p",
        t: "A Verifier PASS does not grant authority, mint tokens, enlarge capability, authorize unrelated actions, elevate autonomy, or become Human Authority. Verification failure may produce a finding, rejection, quarantine, or a proposal for remediation. It does not authorize the Verifier to modify the verified subject unless separately authorized under Articles 4–5. AG-SECV/AG-VER shall not become unrestricted implementation agents because they can verify.",
      },
    ],
  ),

  s(
    "a8bnd",
    "XI.C",
    "Art. 8 Bounds",
    "Article 8 — outcomes, required verification, promotion",
    "Does not draft Article 9. SPECIFIED — RUNTIME IMPLEMENTATION PENDING.",
    [
      { k: "h", t: "8.8 Verification outcomes (no competing ExecutionState)", l: 2 },
      {
        k: "p",
        t: "These are verification-result classifications, not a second execution lifecycle. SUCCESS remains Article 7's post-verification determination (ExecutionState SUCCEEDED).",
      },
      {
        k: "table",
        cols: ["Verification result", "Meaning", "May become SUCCESS?"],
        rows: [
          ["UNVERIFIED", "Required verification missing or not yet performed", "No"],
          ["INCONCLUSIVE", "Verifier could not determine pass/fail", "No"],
          ["VERIFIED-FAIL", "Independent verification failed", "No"],
          ["VERIFIED-PASS", "Independent verification passed for this bound execution", "Only if Art. 7 outcome determination then records SUCCESS"],
          ["REJECTED", "Verification or policy rejects the result", "No"],
          ["QUARANTINED", "Verification-triggered containment", "No"],
        ],
      },
      { k: "h", t: "8.9 Required verification", l: 2 },
      {
        k: "p",
        t: "All consequential actions require the governed verification path before being treated as SUCCESS or promoted as successful. Compact 'important outcomes' includes builds, tests, deployments, and data operations classified as consequential. Trivial LOW read-only/non-consequential actions are not automatically given the same promotion-gate burden if the classifier does not treat them as consequential. Unclassified consequential remains HIGH (Art. 4) and therefore requires this path. Surface-level success checks alone are prohibited.",
      },
      { k: "h", t: "8.10 Functional and constitutional checks", l: 2 },
      {
        k: "p",
        t: "Compact: verification checks both functional correctness and constitutional compliance (authority chain still valid, capability not exceeded, isolation/DESTROY observed, no self-verify). Evidence of verification is stored and auditable (envelope detail is Article 9).",
      },
      { k: "h", t: "8.11 Replay and forgery", l: 2 },
      {
        k: "p",
        t: "A verification result is bound to one execution identity tuple. Replay across incompatible executions is REJECT. Forged or history-mutated verification is DENY + AUDIT.",
      },
    ],
  ),

  s(
    "a8adv",
    "XI.A",
    "Art. 8 Attack",
    "Article 8 — adversarial matrix",
    "ATK-8-01–25. Executor ≠ Verifier. LOCKED — HUMAN ACCEPTED.",
    [
      {
        k: "table",
        cols: ["ID", "Attack", "Entry", "Enforcement", "Result", "Evidence/Audit", "Invariant"],
        rows: [
          ["ATK-8-01", "Worker verifies itself", "Same workerId", "8.2 8.3", "UNVERIFIED / REJECT", "Identity mismatch", "INV-8-01"],
          ["ATK-8-02", "Agent verifies own implementation", "Same agentId", "Compact", "REJECT", "Duty split", "INV-8-01"],
          ["ATK-8-03", "AG-SEC verifies AG-SEC work", "AG-SEC verify", "Catalogue; 8.3", "FORBIDDEN", "AG-SECV only for others", "INV-8-01"],
          ["ATK-8-04", "Verifier shares execution identity", "Same subject", "8.3", "REJECT", "Distinct ids required", "INV-8-02"],
          ["ATK-8-05", "Trust exit code alone", "status 0", "8.6 Art. 7", "Not VERIFIED-PASS", "Exit ≠ verify", "INV-8-03"],
          ["ATK-8-06", "Trust model claim", "LLM pass", "8.6 Art. 3", "Not VERIFIED-PASS", "Claim", "INV-8-08"],
          ["ATK-8-07", "Trust generated evidence", "Model envelope", "8.6", "REJECT as independent", "Governed path Art. 9", "INV-8-08"],
          ["ATK-8-08", "Stale evidence", "Old envelope", "8.6 8.11", "REJECT", "executionId bind", "INV-8-06"],
          ["ATK-8-09", "Other execution's verify", "Wrong executionId", "8.11", "REJECT", "Bind", "INV-8-06"],
          ["ATK-8-10", "Other tenant verify", "T2 on T1", "8.6", "REJECT", "tenantId", "INV-8-06"],
          ["ATK-8-11", "Other product verify", "P2 on P1", "8.6", "REJECT", "productId", "INV-8-06"],
          ["ATK-8-12", "Other environment verify", "workspace on prod", "8.6", "REJECT", "environmentId", "INV-8-06"],
          ["ATK-8-13", "Compromised Verifier", "Rogue AG-VER", "Art. 1–2; 8.7", "Finding invalid; contain; not a grant", "Audit", "INV-8-04"],
          ["ATK-8-14", "Verifier modifies subject while verifying", "Write during verify", "8.7", "DENY modification", "Need Art. 4–5", "INV-8-07"],
          ["ATK-8-15", "Verifier self-grants remediation", "PASS then patch", "8.7 Art. 4–5", "DENY extra", "Separate grant", "INV-8-04"],
          ["ATK-8-16", "False agent consensus", "A+B+C same claim", "8.5", "Not verification", "Non-independent", "INV-8-08"],
          ["ATK-8-17", "Provider declares own output verified", "Cloud verified=true", "Art. 2 8.6", "Not AGBOFA verify", "Provider ≠ Verifier", "INV-8-08"],
          ["ATK-8-18", "Model tests verify model code, no independent basis", "Self-suite", "8.1 8.6", "Not independent", "Need AG-VER path", "INV-8-01"],
          ["ATK-8-19", "VERIFIED-FAIL → SUCCESS", "State write", "Art. 7 8.8", "DENY", "State machine", "INV-8-05"],
          ["ATK-8-20", "UNVERIFIED → SUCCESS", "Skip verify", "Art. 7 compact", "Block promotion", "Flag", "INV-8-03"],
          ["ATK-8-21", "INCONCLUSIVE → PASS", "Treat unknown as pass", "8.8", "DENY", "Unknown ≠ pass", "INV-8-03"],
          ["ATK-8-22", "Bypass required evidence", "Verify with no envelope", "8.10 Art. 9 later", "Not VERIFIED-PASS", "E0 forbidden Art. 7", "INV-8-03"],
          ["ATK-8-23", "Change verification history", "Mutate result", "8.11 Art. 10 later", "DENY + AUDIT", "Append-only intent", "INV-8-09"],
          ["ATK-8-24", "Replay verification result", "Reuse pass token", "8.11", "REJECT", "Bound tuple", "INV-8-06"],
          ["ATK-8-25", "Forged verification result", "Fake AG-VER record", "8.11 Art. 1", "DENY + AUDIT", "Issuer identity", "INV-8-09"],
        ],
      },
    ],
  ),

  s(
    "a8inv",
    "XI.I",
    "Art. 8 Invariants",
    "Article 8 — invariants and failure matrix",
    "INV-8-01 master. LOCKED — HUMAN ACCEPTED. SPECIFIED — RUNTIME IMPLEMENTATION PENDING.",
    [
      {
        k: "table",
        cols: ["ID", "Invariant", "Test", "Expected"],
        rows: [
          ["INV-8-01", "Executor cannot be the final verifier of its own consequential execution.", "Same id execute+verify", "REJECT"],
          ["INV-8-02", "Verification identity must be distinct from execution identity.", "Shared subject", "REJECT"],
          ["INV-8-03", "UNVERIFIED or INCONCLUSIVE cannot become VERIFIED-PASS or SUCCESS.", "Missing/unknown → PASS", "DENY"],
          ["INV-8-04", "Verification cannot manufacture authority, tokens, or implementation rights.", "PASS used as grant", "DENY extra"],
          ["INV-8-05", "VERIFIED-FAIL cannot become SUCCESS.", "FAIL → SUCCEEDED", "DENY"],
          ["INV-8-06", "A verification result cannot be reused across incompatible execution/tenant/product/environment.", "Replay/mismatch", "REJECT"],
          ["INV-8-07", "A Verifier cannot modify the verified subject unless separately authorized under Arts. 4–5.", "Write during verify", "DENY"],
          ["INV-8-08", "Consensus among non-independent actors (agents, models, provider, generated evidence) does not establish constitutional verification.", "Vote on same claim", "Not verification"],
          ["INV-8-09", "Forged or mutated verification history is rejected and audited.", "Alter result", "DENY + AUDIT"],
          ["INV-8-10", "AG-SEC cannot verify AG-SEC work; AG-SECV/AG-VER have duty=verify and no product implementation execution.", "Catalogue duty breach", "DENY"],
          ["INV-8-11", "Surface-level success (exit 0) is not independent verification.", "status 0 only", "Not VERIFIED-PASS"],
          ["INV-8-12", "Consequential/important outcomes lacking independent verification are blocked from the next lifecycle stage.", "Promote unverified", "BLOCK"],
        ],
      },
      { k: "h", t: "Failure matrix", l: 2 },
      {
        k: "table",
        cols: ["Failure", "Required outcome"],
        rows: [
          ["Self-verification / shared identity", "REJECT as independent verification"],
          ["UNVERIFIED / INCONCLUSIVE / missing evidence", "Block promotion; not SUCCESS"],
          ["VERIFIED-FAIL", "Not SUCCESS; reject/re-execute per compact"],
          ["Stale / cross-bound / replayed / forged result", "REJECT; forge → DENY + AUDIT"],
          ["Verifier implements or self-grants remediation", "DENY unless separate Art. 4–5 chain"],
          ["Non-independent consensus / provider self-verify", "Not constitutional verification"],
        ],
      },
    ],
  ),

  s(
    "a8trace",
    "XI.T",
    "Art. 8 Trace",
    "Article 8 — traceability, compatibility, open issues",
    "LOCKED. Compact A.3 unchanged. Article 9 drafted separately — not this Article.",
    [
      {
        k: "p",
        t: "Article 8 → P5 (verification; not exclusive) also P3, P8, P9, P13; P-set not bijective → Verification Engine + AG-VER/AG-SECV (duty=verify) → identity-separation check → bind execution/tenant/product/environment → VERIFIED-PASS/FAIL/UNVERIFIED → Art. 7 SUCCESS gate → EvidenceEnvelope (Art. 9 later) → AuditEvent (Art. 10 later). Compact enforcement: block next lifecycle stage without independent verification.",
      },
      { k: "h", t: "Compatibility (1–7 locked, unmodified)", l: 2 },
      {
        k: "table",
        cols: ["Article", "Result", "Note"],
        rows: [
          ["1 Human Sovereignty", "PASS", "Verifier PASS ≠ Human Authority; informal human assumption still needs governed record (Art. 7)."],
          ["2 AGBOFA Sovereignty", "PASS", "Provider cannot declare AGBOFA verification."],
          ["3 Intelligence ≠ authority", "PASS", "Model tests/claims ≠ independent verification."],
          ["4 Authority Is Explicit", "PASS", "Verify ≠ grant; remediation needs its own chain."],
          ["5 Capability Is Scoped", "PASS", "Verify cannot enlarge tokens."],
          ["6 Execution Is Isolated", "PASS", "Worker ≠ Verifier; DESTROY does not verify."],
          ["7 Execution Is Not Success", "PASS", "Art. 8 is the independence path before SUCCESS; does not collapse states."],
        ],
      },
      { k: "h", t: "Implementation boundary", l: 2 },
      {
        k: "p",
        t: "SPECIFIED — RUNTIME IMPLEMENTATION PENDING. Not claimed: Verification Engine operational, AG-VER/AG-SECV running, separate verification workspaces, anti-collusion detectors, M4/M5, Day-30, certification. Functional independence is law; physical isolation of verifier is implementation unless later specified.",
      },
      { k: "h", t: "Open issues / handoffs", l: 2 },
      {
        k: "table",
        cols: ["Issue", "Belongs to"],
        rows: [
          ["EvidenceEnvelope schema completeness, E-levels for verify records", "Article 9 when authorized"],
          ["Append-only mutation control of verification history", "Article 10 when authorized"],
          ["Whether dual-control is required for CRITICAL verification", "Article 1 potential amendment — not resolved here"],
          ["Physical vs logical verification workspace", "Implementation; 8.4 already allows logical if identity/duty bind"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "LOCKED — HUMAN ACCEPTED",
        t: "Article 8 is constitutionally settled unless formally amended. Compact A.3 unchanged. Articles 1–7 unchanged. ATK-8-01–25 and INV-8-01–12 accepted. Runtime SPECIFIED — RUNTIME IMPLEMENTATION PENDING. Reader ≠ platform.",
      },
    ],
  ),
];
