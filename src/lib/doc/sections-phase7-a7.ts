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
        title: "Phase 7 Article 7 deep draft is not in the received freeze",
        t: "Compact Article 7 in A.3 remains the short form. Articles 1–6 are LOCKED. Switch to the operative issue.",
      },
    ],
    v2,
  };
}

export const PHASE7_A7: Section[] = [
  s(
    "ph7",
    "X.0",
    "Phase 7",
    "Phase 7 — Article 7 draft status",
    "Execution Is Not Success. LOCKED — HUMAN ACCEPTED. Compact A.3 unchanged.",
    [
      {
        k: "callout",
        tone: "law",
        title: "LOCKED — HUMAN ACCEPTED",
        t: "Constitutional artifact: Article 7 — Execution Is Not Success. Version: v5.3 (no v5.4). Status: LOCKED — HUMAN ACCEPTED. Compact A.3 unchanged. Articles 1–6 unchanged. ATK-7-01–25 and INV-7-01–15 accepted. SUCCEEDED reserved for post-verification SUCCESS. Runtime: SPECIFIED — RUNTIME IMPLEMENTATION PENDING. Reader ≠ platform. Phase 8 — Article 8: OPEN for drafting only.",
      },
      {
        k: "table",
        cols: ["Phase", "Article", "Status"],
        rows: [
          ["Phase 1–6", "Articles 1–6", "LOCKED / HUMAN ACCEPTED — UNCHANGED"],
          ["Phase 7", "Article 7", "LOCKED / HUMAN ACCEPTED"],
          ["Phase 8", "Article 8", "OPEN — DRAFT / NOT LOCKED"],
        ],
      },
    ],
  ),

  s(
    "a7law",
    "X",
    "Art. 7 Law",
    "Article 7 — Execution Is Not Success (law)",
    "Completed execution is a claim, not success. LOCKED — HUMAN ACCEPTED.",
    [
      {
        k: "callout",
        tone: "note",
        title: "A.3 compact form — not replaced",
        t: "A.3 Article 7 remains Execution Is Not Success. This draft operationalizes the gap between RUN and SUCCESS. It does not draft Article 8 (verification independence) or Article 9 (evidence). Compact A.3 is not retitled.",
      },
      { k: "h", t: "7.1 Purpose", l: 2 },
      {
        k: "p",
        t: "Article 7 separates execution from success. The fact that an authorized action was admitted, isolated, executed, completed, or produced an output does not establish that the action was correct, safe, compliant, complete, or successful. Authorized ≠ admitted ≠ executed ≠ completed ≠ correct ≠ safe ≠ successful.",
      },
      { k: "h", t: "7.2 Constitutional rule", l: 2 },
      {
        k: "p",
        t: "Consequential execution shall not be treated as successful merely because execution completed. Outcome acceptance requires verification through the governed verification path. A Worker returning exit code 0 is not proof of success. A build completing is not proof the product is correct. A deployment completing is not proof the deployment is safe. A model reporting success is not evidence of success. A human-readable 'completed successfully' message is not independently verified success. Execution cannot manufacture success.",
      },
      { k: "h", t: "7.3 Distinctions", l: 2 },
      {
        k: "table",
        cols: ["Term", "Meaning"],
        rows: [
          ["Authorized", "Valid Art. 4 chain exists. Not success."],
          ["Admitted", "Broker admitted. Not success."],
          ["Isolated / bound", "Guard bind-allow. Not success."],
          ["Executed / RUN", "Worker operated. Not success."],
          ["Completed / EXTRACT", "RUN finished and output claimed. Not success."],
          ["DESTROY", "Jail torn down (Art. 6). Not success and not verification."],
          ["Result produced", "An attributable claim artifact exists. Not success."],
          ["Verified", "Governed verification path recorded a result. Not automatically SUCCESS."],
          ["SUCCESS", "Outcome determination after required verification. Never from execution alone."],
          ["REJECTED", "Verification or policy rejects the result. Not silent success."],
        ],
      },
      { k: "h", t: "7.4 Result states (compatible with v5.3 kernel ExecutionState)", l: 2 },
      {
        k: "p",
        t: "Do not invent a competing lifecycle. Map Article 7 vocabulary onto existing ExecutionState. SUCCEEDED is reserved for post-verification SUCCESS. Exit 0 / EXTRACT must not write SUCCEEDED.",
      },
      {
        k: "table",
        cols: ["Article 7 state", "Existing ExecutionState / meaning", "May imply SUCCESS?"],
        rows: [
          ["EXECUTION_STARTED", "RUNNING", "No"],
          ["EXECUTION_COMPLETED", "EXTRACT complete; not SUCCEEDED", "No"],
          ["EXECUTION_FAILED", "FAILED", "No"],
          ["EXECUTION_INTERRUPTED", "HALTED / CANCELLED / TIMEOUT / CONTAINED", "No"],
          ["RESULT_PRODUCED", "Claim artifact exists", "No"],
          ["RESULT_VERIFIED", "Verification evidence attached (Art. 8 details later)", "No — verified is not automatically SUCCESS"],
          ["SUCCESS", "SUCCEEDED — only after required verification", "Yes — this is the only path"],
          ["REJECTED", "DENIED or FAILED after verification/policy", "No"],
          ["QUARANTINED", "QUARANTINED", "No"],
        ],
      },
      { k: "h", t: "7.5 Failure classes", l: 2 },
      {
        k: "ul",
        items: [
          "Execution failure — Worker could not complete the requested operation.",
          "Verification failure — execution completed but verification failed or is missing.",
          "Outcome failure — verified result does not satisfy the required objective.",
          "Safety/security failure — action or result violates security, governance, isolation, policy, or Constitution.",
          "Incomplete outcome — partial execution; required objective not fully achieved.",
        ],
      },
      {
        k: "p",
        t: "None of these may be silently converted into SUCCESS. Partial execution cannot be classified as complete success.",
      },
    ],
  ),

  s(
    "a7bnd",
    "X.C",
    "Art. 7 Bounds",
    "Article 7 — verification, evidence, audit, intelligence",
    "Principles only. Articles 8–10 not drafted. SPECIFIED — RUNTIME IMPLEMENTATION PENDING.",
    [
      { k: "h", t: "7.6 Verification boundary (does not draft Article 8)", l: 2 },
      {
        k: "p",
        t: "Consequential execution requires an independent determination of outcome. Compact: verification must be performed by a component separate from the executing agent. Worker cannot verify its own consequential execution (Art. 6 INV-6-34). Independence mechanics (who the Verification Agent is, dual-control of verification, anti-collusion) belong to Article 8 when authorized. Article 7 establishes the requirement: missing required verification prevents SUCCESS classification and blocks promotion.",
      },
      { k: "h", t: "7.7 Evidence boundary (does not draft Article 9)", l: 2 },
      {
        k: "p",
        t: "Compatible with EvidenceEnvelope. Execution output is not automatically evidence of success. Evidence of outcome must be attributable; tied to this execution, tenant, and product; sufficient for the required verification; produced through the governed evidence path. E0 is never acceptable for a consequential claim (existing contract). Detailed evidence levels and envelope rules belong to Article 9.",
      },
      { k: "h", t: "7.8 Audit boundary (does not draft Article 10)", l: 2 },
      {
        k: "p",
        t: "Audit must distinguish: what was requested; authorized; admitted; executed; what result occurred; what was verified; what outcome was determined. Audit records shall not rewrite an unsuccessful execution into SUCCESS. Persistence and write-control of audit belong to Article 10.",
      },
      { k: "h", t: "7.9 Intelligence boundary (Article 3 locked)", l: 2 },
      {
        k: "p",
        t: "Model confidence ≠ success. Model assertion ≠ success. Agent assertion ≠ success. Generated explanation ≠ verification. Generated test report ≠ independent verification. AI-generated 'passed' status ≠ constitutional SUCCESS. Intelligence may report or propose an outcome. It cannot unilaterally establish SUCCESS.",
      },
      { k: "h", t: "7.10 Promotion", l: 2 },
      {
        k: "p",
        t: "Compact consequence: action marked unverified and blocked from promotion. Promotion (to further execution, production, passport advance, or SUCCESS) requires the required verification evidence. Unverified consequential output remains a claim.",
      },
      { k: "h", t: "7.11 Compatibility with Article 6 DESTROY", l: 2 },
      {
        k: "p",
        t: "DESTROY of the Worker does not prove SUCCESS and does not erase the need to verify the extracted result. Extracted output is a claim. Verification operates on the claim and evidence, not on a living Worker identity.",
      },
    ],
  ),

  s(
    "a7adv",
    "X.A",
    "Art. 7 Attack",
    "Article 7 — adversarial matrix",
    "ATK-7-01–25. Execution ≠ success. LOCKED — HUMAN ACCEPTED.",
    [
      {
        k: "table",
        cols: ["ID", "Attack", "Entry", "Enforcement", "Result", "Evidence/Audit", "Invariant"],
        rows: [
          ["ATK-7-01", "Exit 0, incorrect output", "Worker status 0", "7.2", "Not SUCCESS", "Claim ≠ pass", "INV-7-01"],
          ["ATK-7-02", "Model claims success", "LLM text", "7.9 Art. 3", "Not SUCCESS", "Proposal only", "INV-7-03"],
          ["ATK-7-03", "Agent self-marks success", "Agent status", "7.6 7.9", "Not SUCCESS", "Self-claim", "INV-7-02"],
          ["ATK-7-04", "Partial as complete", "Half EXTRACT", "7.5", "INCOMPLETE / REJECT", "Partial flag", "INV-7-05"],
          ["ATK-7-05", "Stale test as current", "Old report", "7.6 7.7", "Not SUCCESS", "Must bind executionId", "INV-7-06"],
          ["ATK-7-06", "Tests pass, behavior absent", "Green suite", "7.5 outcome", "Not SUCCESS if objective unmet", "Objective evidence", "INV-7-01"],
          ["ATK-7-07", "Deploy complete, unhealthy", "CD 200", "7.2", "Not SUCCESS", "Post-deploy verify required", "INV-7-01"],
          ["ATK-7-08", "Corrupted output exists", "Artifact present", "7.7", "VERIFY FAIL / REJECT", "Integrity", "INV-7-04"],
          ["ATK-7-09", "Malicious Worker fabricates success", "Worker log", "Art. 6 7.2", "Not SUCCESS", "Untrusted worker", "INV-7-02"],
          ["ATK-7-10", "Verification missing", "No envelope", "Compact 7.6", "Unverified; block promotion", "Flag", "INV-7-07"],
          ["ATK-7-11", "Stale verification", "Old verify id", "7.6", "Not SUCCESS", "Must match this execution", "INV-7-06"],
          ["ATK-7-12", "Verification of other execution", "Wrong executionId", "7.7", "REJECT", "Bind executionId", "INV-7-06"],
          ["ATK-7-13", "Result of other product", "P2 artifact on P1", "7.7", "REJECT", "productId", "INV-7-06"],
          ["ATK-7-14", "Result of other tenant", "T2 on T1", "7.7 Art. 2", "REJECT", "tenantId", "INV-7-06"],
          ["ATK-7-15", "Technical success, policy violate", "Exec OK", "7.5 safety", "REJECT / QUARANTINE", "Policy evidence", "INV-7-08"],
          ["ATK-7-16", "Exec OK, unauthorized resource change", "Side effect", "Art. 4–6; 7.5", "REJECT / HALT", "Scope evidence", "INV-7-08"],
          ["ATK-7-17", "Exec OK, exceeds objective", "Over-act", "7.5", "REJECT", "Objective bound", "INV-7-01"],
          ["ATK-7-18", "Rollback complete, still unhealthy", "Rollback 0", "7.2", "Not SUCCESS", "Health verify", "INV-7-01"],
          ["ATK-7-19", "Timeout partial state", "TIMEOUT", "Art. 6; 7.5", "INTERRUPTED; not SUCCESS", "Partial", "INV-7-05"],
          ["ATK-7-20", "Interrupted marked successful", "HALTED → SUCCEEDED", "7.4", "DENY that write", "State machine", "INV-7-09"],
          ["ATK-7-21", "Empty output as valid", "Zero-byte claim", "7.7", "Not SUCCESS unless specified empty", "Envelope", "INV-7-04"],
          ["ATK-7-22", "Generated evidence as proof", "Model writes EvidenceEnvelope", "7.7 7.9", "Not SUCCESS", "Governed path", "INV-7-04"],
          ["ATK-7-23", "Agent consensus as verification", "N agents vote", "7.6 Art. 3", "Not verification", "Not Art. 8 path", "INV-7-03"],
          ["ATK-7-24", "Provider confirmation as AGBOFA verify", "Cloud OK", "Art. 2 7.6", "Not SUCCESS", "Provider ≠ verifier", "INV-7-10"],
          ["ATK-7-25", "Human assumption as verified", "Informal 'looks good'", "Art. 1 7.6", "Not SUCCESS unless governed Human verification record", "Approval bound to proposal/execution", "INV-7-07"],
        ],
      },
    ],
  ),

  s(
    "a7inv",
    "X.I",
    "Art. 7 Invariants",
    "Article 7 — invariants and failure matrix",
    "INV-7-01 master. LOCKED — HUMAN ACCEPTED. SPECIFIED — RUNTIME IMPLEMENTATION PENDING.",
    [
      {
        k: "table",
        cols: ["ID", "Invariant", "Test", "Expected"],
        rows: [
          ["INV-7-01", "Master: execution completion cannot by itself establish SUCCESS.", "EXTRACT then SUCCEEDED with no verify", "DENY that classification"],
          ["INV-7-02", "Worker-reported success cannot by itself establish SUCCESS.", "Worker status=success", "Claim only"],
          ["INV-7-03", "AI confidence, assertion, generated pass, or agent consensus cannot establish SUCCESS.", "Model 'passed'", "Not SUCCESS"],
          ["INV-7-04", "Unverified consequential output cannot be treated as verified SUCCESS.", "Output without envelope", "Unverified; block promotion"],
          ["INV-7-05", "Partial execution cannot be silently classified as complete SUCCESS.", "TIMEOUT/partial → SUCCEEDED", "DENY"],
          ["INV-7-06", "A result from another execution, tenant, product, or environment cannot satisfy this execution.", "Mismatched ids", "REJECT"],
          ["INV-7-07", "Missing required verification prevents SUCCESS and blocks promotion.", "No verify evidence", "Unverified"],
          ["INV-7-08", "Execution failure, safety/policy violation, or unauthorized side-effect cannot be represented as SUCCESS.", "FAILED → SUCCEEDED", "DENY"],
          ["INV-7-09", "INTERRUPTED/HALTED/CANCELLED/TIMEOUT/CONTAINED cannot be rewritten to SUCCEEDED.", "State write", "DENY"],
          ["INV-7-10", "Provider/cloud confirmation is not AGBOFA verification or SUCCESS.", "IAM 200", "Not SUCCESS"],
          ["INV-7-11", "DESTROY does not establish SUCCESS.", "Jail gone", "Not SUCCESS"],
          ["INV-7-12", "Broker admission does not establish SUCCESS.", "ADMITTED", "Not SUCCESS"],
          ["INV-7-13", "Isolation bind-allow does not establish SUCCESS.", "isolationBound", "Not SUCCESS"],
          ["INV-7-14", "Audit rewrite of unsuccessful execution into SUCCESS is prohibited.", "Mutate audit to pass", "DENY + AUDIT"],
          ["INV-7-15", "E0 evidence is never acceptable for a consequential SUCCESS claim.", "E0 envelope", "REJECT"],
        ],
      },
      { k: "h", t: "Failure matrix", l: 2 },
      {
        k: "table",
        cols: ["Failure", "Required outcome"],
        rows: [
          ["Execution failed / interrupted / timeout / partial", "Not SUCCESS; record class"],
          ["Missing verification on consequential action", "Unverified; block promotion"],
          ["Worker/agent/model self-success", "Ignore as SUCCESS; treat as claim"],
          ["Stale or cross-bound result/verification", "REJECT"],
          ["Policy/safety/unauthorized side-effect", "REJECT / QUARANTINE as applicable"],
          ["Empty/corrupted/generated-as-proof output", "Not SUCCESS"],
          ["Provider confirmation only", "Not SUCCESS"],
          ["Attempted audit rewrite to SUCCESS", "DENY + AUDIT"],
        ],
      },
    ],
  ),

  s(
    "a7trace",
    "X.T",
    "Art. 7 Trace",
    "Article 7 — traceability, compatibility, open issues",
    "LOCKED. Compact A.3 unchanged. Article 8 drafted separately — not this Article.",
    [
      {
        k: "p",
        t: "Article 7 → no dedicated P (P-set not bijective; P7 is tenant isolation). Applicable: P5 (verification), P8 (evidence), P9 (audit), also P1/P3/P13. → Execution Broker EXTRACT is a claim → Verification Engine (flag missing verify; Art. 8 independence later) → EvidenceEnvelope (Art. 9 later) → AuditEvent (Art. 10 later) → promotion blocked unless SUCCESS. Compact enforcement: Verification Engine flags consequential action lacking verification evidence.",
      },
      { k: "h", t: "Compatibility (1–6 locked, unmodified)", l: 2 },
      {
        k: "table",
        cols: ["Article", "Result", "Note"],
        rows: [
          ["1 Human Sovereignty", "PASS", "Informal human assumption ≠ verified SUCCESS unless governed record; Worker still ≠ Human."],
          ["2 AGBOFA Sovereignty", "PASS", "Provider confirmation ≠ AGBOFA verification."],
          ["3 Intelligence ≠ authority", "PASS", "Intelligence cannot establish SUCCESS."],
          ["4 Authority Is Explicit", "PASS", "Prior success still does not create next authority (Art. 4.10); this Article forbids treating exec as SUCCESS."],
          ["5 Capability Is Scoped", "PASS", "Token possession ≠ SUCCESS."],
          ["6 Execution Is Isolated", "PASS", "DESTROY/EXTRACT/exit 0 ≠ SUCCESS; Worker ≠ Verifier preserved."],
        ],
      },
      { k: "h", t: "Implementation boundary", l: 2 },
      {
        k: "p",
        t: "SPECIFIED — RUNTIME IMPLEMENTATION PENDING. Not claimed: Verification Engine operational, Evidence Store operational, promotion gates in production, test/deployment health checks, M4/M5, Day-30, certification. Compact requirement is law; runtime proof is later.",
      },
      { k: "h", t: "Open issues / handoffs", l: 2 },
      {
        k: "table",
        cols: ["Issue", "Belongs to"],
        rows: [
          ["Independence, anti-collusion, Verification Agent identity", "Article 8 when authorized"],
          ["EvidenceEnvelope completeness, levels E1–E4 application", "Article 9 when authorized"],
          ["Append-only audit write-control", "Article 10 when authorized"],
          ["Which actions are 'consequential' for required verification", "Risk classifier + policy; Art. 4 floor already HIGH for unclassified"],
          ["Numeric/health SLO definitions", "Implementation / policy"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "LOCKED — HUMAN ACCEPTED",
        t: "Article 7 is constitutionally settled unless formally amended. Compact A.3 unchanged. Articles 1–6 unchanged. ATK-7-01–25 and INV-7-01–15 accepted. Runtime SPECIFIED — RUNTIME IMPLEMENTATION PENDING. Reader ≠ platform.",
      },
    ],
  ),
];
