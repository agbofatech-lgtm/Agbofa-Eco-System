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
        title: "Phase 2 Article 2 deep draft is not in the received freeze",
        t: "Compact Article 2 in A.3 remains the short form until this draft is accepted. Article 1 is LOCKED. Switch to the operative issue.",
      },
    ],
    v2,
  };
}

export const PHASE2_A2: Section[] = [
  s(
    "ph2",
    "V.0",
    "Phase 2",
    "Phase 2 — Article 2 draft status",
    "AGBOFA Sovereignty. Article 1 locked. Not v5.4. Not P2.",
    [
      {
        k: "callout",
        tone: "law",
        title: "Authoritative Article 2 subject",
        t: "v5.3 compact title is Article 2 — AGBOFA Sovereignty. P2 is Constitutional Supremacy. P2 ≠ Article 2. This draft does not invent a different subject. Article 1 remains LOCKED. Compact A.3 Article 2 is not silently replaced. Runtime: SPECIFIED — ENFORCEMENT PENDING. Reader ≠ platform.",
      },
      {
        k: "ul",
        items: [
          "Article 1: Humans are sovereign over AGBOFA.",
          "Article 2: AGBOFA is the exclusive jurisdiction and system of record for authority, governance policy, and capability inside the ecosystem. External systems, providers, and agents are not parallel grantors.",
          "AGBOFA Sovereignty is jurisdictional exclusivity of mechanisms. It is not Human Sovereignty and not Trust Kernel sovereignty.",
        ],
      },
    ],
  ),

  s(
    "a2law",
    "V",
    "Art. 2 Law",
    "Article 2 — AGBOFA Sovereignty (law)",
    "Exclusive internal jurisdiction over authority, governance, and capability. FOR REVIEW.",
    [
      {
        k: "callout",
        tone: "note",
        title: "A.3 compact form — interpretation, not replacement",
        t: "A.3 Article 2 remains: AGBOFA controls the ecosystem's authority and governance mechanisms; no external system may directly grant authority; no agent may self-grant; authority flows through the Governance Engine; rules are versioned; grants are audited; the Authority System rejects grants from unauthorized sources. Compact 'Governance Engine' is interpreted as the v5.3 governance path (Trust Kernel classifies, Governance Engine evaluates policy, Authority System issues). That path does not originate Human Authority (Article 1, 1.2.1). Do not silently replace A.3.",
      },
      { k: "h", t: "2.1 Purpose", l: 2 },
      {
        k: "p",
        t: "Article 2 exists so that the AGBOFA Ecosystem has one lawful venue for authority grants, governance policy, and capability assignment. Without it, a provider, CI system, marketplace app, foreign IdP, agent runtime, or administrator console could mint parallel 'authority' that Article 1 never issued and that Isolation Guard cannot see. Article 2 is the exclusivity rule for internal governance machinery. It does not make AGBOFA sovereign over humans.",
      },
      { k: "h", t: "2.2 Constitutional rule", l: 2 },
      {
        k: "p",
        t: "AGBOFA is the exclusive system of record and the exclusive issuance path for Authority Grants, governance policies, and CapabilityTokens inside the AGBOFA Ecosystem. No external system, provider, model, agent, worker, tenant, product, or foreign process shall directly grant, inject, or recognize as AGBOFA authority any permission that did not pass the v5.3 governance path: Trust Kernel classification, Governance Engine evaluation, Authority System issuance, Capability System minting where a token is required.",
      },
      {
        k: "p",
        t: "This exclusivity does not originate Human Authority. Human Authority remains Article 1. AGBOFA Sovereignty is jurisdictional: inside the ecosystem, lawful grants exist only as AGBOFA records. A grant that exists only in a provider console, a git forge, a cloud IAM policy, or an agent's memory is not an AGBOFA Authority Grant.",
      },
      { k: "h", t: "2.3 Scope", l: 2 },
      {
        k: "p",
        t: "Article 2 binds Humans in AGBOFA roles, Agents, Workers, Providers, models, Tenants, Products, Environments, Governance Engine, Trust Kernel, Authority System, Capability System, Execution Broker, Verification Engine, Evidence Store, Audit System, Recovery System, Product Factory, and future autonomous or federated systems when admitted. It covers every authority grant, policy definition, capability assignment, and any attempt to treat an extra-AGBOFA permission as AGBOFA authority.",
      },
      { k: "h", t: "2.4 Definitions (Article 2 only)", l: 2 },
      {
        k: "ul",
        items: [
          "AGBOFA Sovereignty: exclusive jurisdiction of AGBOFA records and issuance path over internal authority, policy, and capability. Not Human Sovereignty. Not machine sovereignty over humans.",
          "Authorized governance source: a source this Constitution recognizes — Human Authority where required (Article 1), and the Authority System acting on a valid chain. Not a provider, agent, worker, or external IAM.",
          "External system: any system that is not the AGBOFA governance path, including providers, forges, cloud IAM, CI, marketplaces, and foreign tenants.",
          "Shadow grant: a permission asserted inside AGBOFA that has no Authority Grant / CapabilityToken record.",
        ],
      },
      { k: "h", t: "2.5 Rights / authorities", l: 2 },
      {
        k: "p",
        t: "Humans (Article 1) establish or delegate Human Authority. The Authority System issues, delegates within grant bounds, and revokes Authority Grants. The Governance Engine evaluates versioned policy. The Trust Kernel enforces floors and default-deny; it does not issue grants. The Capability System mints tokens that cannot exceed their grant. No other actor issues AGBOFA authority.",
      },
      { k: "h", t: "2.6 Prohibitions", l: 2 },
      {
        k: "ul",
        items: [
          "No external system may directly grant authority within AGBOFA.",
          "No agent or worker may self-grant authority or capability.",
          "No provider, model, or Intelligence Contract output may be treated as an Authority Grant.",
          "No Trust Kernel, Execution Broker, Isolation Guard, Verification Engine, Evidence Store, or Audit System may issue Human Authority or enlarge a grant.",
          "No shadow grant, inherited cloud IAM role, CI secret, or marketplace entitlement shall be recognized as AGBOFA authority.",
          "No policy file, prompt, or agent memory may override versioned governance rules in the Constitution repository.",
          "No tenant, product, or environment permission shall be reused across those boundaries by default (Article 14 applied through this exclusivity).",
          "No extra-constitutional 'admin bypass' console may mint grants outside the Authority System.",
        ],
      },
      { k: "h", t: "2.7 Delegation", l: 2 },
      {
        k: "p",
        t: "Delegation of AGBOFA authority occurs only as an Authority Grant: explicit, bounded (tenant, product, environment, action class), attributable, revocable, auditable, time-limited where not a standing Human role. Delegation does not transfer Human Sovereignty (Article 1) and does not create a second issuance path. An external system cannot be a delegatee of grant-issuance itself.",
      },
      { k: "h", t: "2.8 Automation", l: 2 },
      {
        k: "p",
        t: "Article 2 does not require a human click on every grant evaluation. LOW/MEDIUM execution under Article 1.7 remains lawful when the token was minted on a valid AGBOFA grant. Automation that mints grants, writes policy, or treats provider IAM as authority is not lawful automation. Absence of a human click is not absence of Article 2.",
      },
    ],
  ),

  s(
    "a2enf",
    "V.E",
    "Art. 2 Enforce",
    "Article 2 — enforcement, failure, evidence, audit, recovery",
    "Canonical v5.3 mechanisms only. SPECIFIED — ENFORCEMENT PENDING.",
    [
      { k: "h", t: "2.9 Enforcement map", l: 2 },
      {
        k: "table",
        cols: ["Mechanism", "Article 2 responsibility", "Must not"],
        rows: [
          ["Trust Kernel", "Reject unclassified or extra-constitutional permission claims; default-deny shadow grants on consequential actions", "Originate or enlarge authority"],
          ["Governance Engine", "Evaluate only versioned Constitution-repository policy", "Accept provider or agent policy as superior"],
          ["Authority System", "Sole issuer/revoker of Authority Grants; reject external and self-grants", "Self-grant; accept foreign IAM as grant"],
          ["Capability System", "Mint tokens only against a live AGBOFA grant", "Mint from provider roles or CI secrets"],
          ["Execution Broker", "Admit only tokenled, granted work", "Treat host/root or cloud role as a token"],
          ["Isolation Guard", "Bind tenant/product/environment on admitted work", "Honor a foreign tenant claim"],
          ["Verification Engine", "Does not issue grants", "Verify a shadow grant into existence"],
          ["Evidence Store", "Store envelopes; evidence ≠ grant", "Promote evidence to authority"],
          ["Audit System", "Record every grant, reject, revoke", "Allow grant without AuditEvent"],
          ["Recovery System", "Human-ordered freeze/revoke of unlawful grants", "Emergency-mint grants"],
        ],
      },
      { k: "h", t: "2.10 Failure behavior", l: 2 },
      {
        k: "p",
        t: "If a required grant, policy version, token, scope, or authorized source is absent, invalid, expired, revoked, ambiguous, out of scope, or unverifiable: the action shall not proceed. Default-deny. No silent fallback, best-effort allow, assumed authorization, inherited cloud role, or provider discretion. Ambiguity is not permission.",
      },
      { k: "h", t: "2.11 Evidence", l: 2 },
      {
        k: "p",
        t: "Compliance evidence for a grant or admission: identity, Authority Grant id, CapabilityToken if execution, tenant, product, environment, action, resource, time, Trust Kernel class, policy version, and independent verification where the act is consequential. 'The agent says it complied' is E0 and is not Article 2 compliance. Existence of a cloud IAM binding is not AGBOFA evidence of authority.",
      },
      { k: "h", t: "2.12 Audit", l: 2 },
      {
        k: "p",
        t: "Every grant, denial, revocation, and attempted external injection shall produce an AuditEvent: actor, tenant, product, environment, action, resource, authority/capability context, risk, why, outcome, evidence reference. Append-only v5.3 Audit System. No second audit mechanism.",
      },
      { k: "h", t: "2.13 Recovery / emergency", l: 2 },
      {
        k: "p",
        t: "Unlawful or injected grants shall be revoked; implicated tokens expired; workers destroyed; evidence preserved; Human review. Emergency freeze may halt issuance. Emergency shall not mint standing grants, accept external grants, or amend Article 2. Owner vacancy (Article 1) freezes issuance; it does not open an external or machine grant path.",
      },
      { k: "h", t: "2.17 M5 / future-proofing", l: 2 },
      {
        k: "p",
        t: "Federation, marketplace, multi-region, Enterprise SDK, and A3–A5 may expand what AGBOFA can do. They shall not create a second issuance path. If a future capability requires extra-AGBOFA grantors, that is a constitutional amendment, not an operational shortcut. Increasing autonomy never authorizes shadow grants.",
      },
    ],
  ),

  s(
    "a2adv",
    "V.A",
    "Art. 2 Attack",
    "Article 2 — adversarial analysis",
    "Exclusivity of the issuance path. BLOCKED / PASS or OPEN.",
    [
      {
        k: "table",
        cols: ["ID", "Attack", "Bypass attempt", "Enforcement", "Result", "Evidence", "Audit"],
        rows: [
          ["ATK-2-01", "Authority ambiguity", "Read compact 'controls' as machine sovereignty or as implied permission", "2.2 + Art. 1; default-deny on ambiguity", "DENY / PASS", "No grant", "why=ambiguous-not-permission"],
          ["ATK-2-02", "Policy override", "Local policy / prompt outranks Constitution repository", "Governance Engine versioned policy only", "DENY / PASS", "Policy version", "why=policy-override"],
          ["ATK-2-03", "Agent interpretation", "Agent claims Art. 2 gives it grant power because AGBOFA 'controls'", "Agents cannot issue grants", "DENY / PASS", "No grant", "why=agent-issuance"],
          ["ATK-2-04", "Provider interpretation", "Provider ToS or adapter claims AGBOFA authority", "External system cannot grant", "DENY / PASS", "Not a grant", "why=provider-grant"],
          ["ATK-2-05", "Worker interpretation", "Worker claims execution necessity is authority", "Worker cannot propose/approve/grant", "DENY / PASS", "No grant", "why=worker-authority"],
          ["ATK-2-06", "Tenant escape", "Grant for T1 used in T2", "Isolation Guard + token.tenantId", "DENY / PASS", "Bind deny", "why=tenant-mismatch"],
          ["ATK-2-07", "Product escape", "Product A token on Product B", "token.productId + Guard", "DENY / PASS", "Bind deny", "why=product-mismatch"],
          ["ATK-2-08", "Environment escalation", "workspace token in production", "token.environmentId + Guard", "DENY / PASS", "Bind deny", "why=env-mismatch"],
          ["ATK-2-09", "Risk manipulation", "Reclass to skip grant path", "Trust Kernel floor; cannot lower own class", "DENY / PASS", "Class=floor", "why=risk-floor"],
          ["ATK-2-10", "Emergency abuse", "Emergency used to mint external or standing grants", "2.13; emergency cannot mint grants", "DENY / PASS", "No grant", "why=emergency-grant"],
          ["ATK-2-11", "Automation loophole", "No human click, therefore Art. 2 does not apply", "2.8; exclusivity is continuous", "DENY / PASS", "Shadow grant rejected", "why=automation-not-exemption"],
          ["ATK-2-12", "M5 loophole", "A5 claims exclusivity obsolete", "2.17; autonomy ≠ second path", "DENY / PASS", "Path unchanged", "why=m5-non-exemption"],
          ["ATK-2-13", "Cloud IAM injection", "AWS/GCP role treated as CapabilityToken", "Capability System mint-only-from-grant", "DENY / PASS", "Not a token", "why=foreign-iam"],
          ["ATK-2-14", "CI/forge injection", "GitHub Action secrets as AGBOFA grant", "Authority System rejects external source", "DENY / PASS", "Not a grant", "why=ci-grant"],
          ["ATK-2-15", "Admin console bypass", "Host root / app-builder auth mints grants outside Authority System", "No extra-constitutional console", "DENY / PASS", "Not a grant", "why=console-bypass"],
          ["ATK-2-16", "Evidence-as-grant", "Envelope used as issuance", "Evidence ≠ authority", "DENY / PASS", "No grant", "why=evidence-non-authority"],
          ["ATK-2-17", "Owner vacancy external path", "No Human Owner, therefore provider IAM is used", "Art. 1 freeze + Art. 2 default-deny", "DENY / PASS", "Issuance frozen", "why=vacancy-no-external"],
        ],
      },
    ],
  ),

  s(
    "a2inv",
    "V.I",
    "Art. 2 Invariants",
    "Article 2 — machine-testable invariants",
    "INV-2-* only. SPECIFIED — ENFORCEMENT PENDING.",
    [
      {
        k: "table",
        cols: ["ID", "Constitutional invariant", "Test", "Expected result", "Enforcement point", "Evidence"],
        rows: [
          ["INV-2-01", "No external system issues an AGBOFA Authority Grant.", "Foreign IAM/CI/provider create grant → DENY", "DENY", "Authority System", "No grant id"],
          ["INV-2-02", "No agent or worker self-grants.", "Self as grantor → DENY", "DENY", "Authority System", "No grant"],
          ["INV-2-03", "Tokens mint only against a live AGBOFA grant.", "Mint from cloud role → DENY", "DENY", "Capability System", "No token"],
          ["INV-2-04", "Shadow grants are not authority.", "Execute with only provider role → DENY", "DENY", "Broker", "Admit deny"],
          ["INV-2-05", "Versioned Constitution-repository policy is the only policy source.", "Prompt/policy file override → DENY", "DENY", "Governance Engine", "Policy version"],
          ["INV-2-06", "Trust Kernel / Broker cannot issue grants.", "Kernel or broker as grantor → DENY", "DENY", "Authority System", "No grant"],
          ["INV-2-07", "Grant scope cannot cross tenant/product/environment by default.", "Reuse token across boundary → DENY", "DENY", "Isolation Guard", "Bind deny"],
          ["INV-2-08", "Ambiguous authorization is deny, not allow.", "Missing/ambiguous source → DENY", "DENY", "Trust Kernel", "why=ambiguous"],
          ["INV-2-09", "Emergency cannot mint grants or accept external grants.", "Emergency grant mint → DENY", "DENY", "Recovery System", "No grant"],
          ["INV-2-10", "Owner vacancy freezes issuance; does not open an external path.", "Vacancy + provider IAM → DENY", "DENY / freeze", "Recovery + Authority", "Freeze record"],
          ["INV-2-11", "M5/A5 cannot create a second issuance path.", "A5 extra-constitutional grant → DENY", "DENY", "Authority System", "Path unchanged"],
          ["INV-2-12", "Evidence, success, and intelligence cannot become grants.", "Envelope or score as grantor → DENY", "DENY", "Authority System", "No grant"],
        ],
      },
    ],
  ),

  s(
    "a2trace",
    "V.T",
    "Art. 2 Trace",
    "Article 2 — traceability, Article 1 compatibility, change control",
    "P2 ≠ Article 2. Compact A.3 not replaced.",
    [
      {
        k: "table",
        cols: ["Article 2 rule", "Principle", "Authority boundary", "Mechanism", "Enforcement", "Test", "Evidence", "Audit"],
        rows: [
          ["Exclusive issuance path", "P2 related, not identical; P4", "AGBOFA records only", "Authority System", "Reject external/self", "INV-2-01 02", "Grant id", "grant/deny"],
          ["No external grantor", "P15, P4", "Provider ≠ grantor", "Authority + Capability", "Foreign IAM deny", "ATK-2-04 13 14", "Not a token", "why=foreign"],
          ["No agent/worker grantor", "P3, P6, P10", "Duty ≠ issuance", "Authority System", "Self-grant deny", "INV-2-02 ATK-2-03 05", "No grant", "why=self-grant"],
          ["Kernel/broker not grantors", "Art. 1 1.2.1", "Enforce ≠ originate", "Trust Kernel; Broker", "Grantor=kernel deny", "INV-2-06 ATK-2-01", "No grant", "why=kernel-broker"],
          ["Policy only from Constitution repository", "P2, P10", "Versioned policy", "Governance Engine", "Override deny", "INV-2-05 ATK-2-02", "Policy version", "why=policy-override"],
          ["Boundary reuse deny", "P13", "Tenant/product/env", "Isolation Guard + token", "Bind deny", "INV-2-07 ATK-2-06 07 08", "Bind record", "why=mismatch"],
          ["Ambiguity = deny", "P4", "No implied grant", "Trust Kernel", "Default-deny", "INV-2-08 ATK-2-01", "why=ambiguous", "deny"],
          ["Emergency ≠ issuance", "P14, Art. 1.11", "Contain only", "Recovery System", "Mint deny", "INV-2-09 ATK-2-10", "No grant", "why=emergency-grant"],
          ["Vacancy ≠ external path", "Art. 1.14.2", "Freeze issuance", "Recovery + Authority", "Provider IAM deny", "INV-2-10 ATK-2-17", "Freeze", "why=vacancy"],
          ["M5 no second path", "P11, Art. 1 INV-15", "Autonomy ≠ grantor", "Authority System", "A5 extra path deny", "INV-2-11 ATK-2-12", "Path unchanged", "why=m5"],
          ["Evidence ≠ grant", "P8", "Envelope is not issuance", "Authority System", "Envelope-as-grant deny", "INV-2-12 ATK-2-16", "No grant", "why=evidence"],
        ],
      },
      { k: "h", t: "Article 1 compatibility (LOCKED — not modified)", l: 2 },
      {
        k: "table",
        cols: ["Check", "Result", "Note"],
        rows: [
          ["Human Sovereignty preserved?", "PASS", "Art. 2 is exclusivity of mechanisms, not Human Authority for AGBOFA-the-machine."],
          ["No lower-layer authority manufacture?", "PASS", "External, agent, worker, kernel, broker, evidence cannot issue grants."],
          ["Automation without per-action click where pre-authorized?", "PASS", "2.8; Art. 1.7 LOW/MEDIUM tokens remain lawful if AGBOFA-minted."],
          ["Authentication distinct from authority?", "PASS", "Cloud IAM / session / CI secret ≠ grant."],
          ["Owner continuity preserved?", "PASS", "Vacancy freezes issuance; does not open provider IAM."],
          ["Emergency boundaries preserved?", "PASS", "Emergency cannot mint grants."],
          ["M5 sovereignty boundary preserved?", "PASS", "No second path; no machine Human Authority."],
        ],
      },
      {
        k: "callout",
        tone: "warn",
        title: "FLAG for Human review — not an Article 1 edit",
        t: "Compact A.3 Article 2 ('AGBOFA controls the ecosystem's authority') can be misread as AGBOFA-the-system being sovereign over humans. This draft interprets control as exclusive jurisdiction of the issuance path. Article 1 remains the Human Sovereignty rule. No silent amendment of Article 1. If the Human Owner rejects this interpretation, that is a drafting dispute — not a license to reopen Article 1 in this phase.",
      },
      {
        k: "callout",
        tone: "note",
        title: "FLAG — compact 'Governance Engine' wording",
        t: "A.3 says authority flows through the Governance Engine. v5.3 splits Trust Kernel / Governance Engine / Authority System. This draft interprets the compact phrase as the governance path, not a single module and not a second kernel. A.3 text is not silently replaced. Later annotation of A.3 is a Human acceptance item, not v5.4.",
      },
      { k: "h", t: "Open issues", l: 2 },
      {
        k: "table",
        cols: ["Issue", "Why it matters", "Belongs to"],
        rows: [
          ["CRITICAL dual-control still unresolved", "Article 1 wait; Art. 2 does not decide it", "Article 1 potential amendment / policy"],
          ["Federation grant bridging", "Future federation must not become a second issuance path without amendment", "Later article / future amendment — not Day 30"],
          ["App-builder auth ≠ Authority System", "Implementation hazard if reused as grantor", "Implementation — not Art. 2 law"],
          ["A.3 compact vs canonical three-part path", "Interpretation recorded; A.3 not replaced", "Human acceptance annotation"],
        ],
      },
      {
        k: "callout",
        tone: "law",
        title: "Draft status",
        t: "PHASE 2 — ARTICLE 2 READY TO LOCK pending Human Owner acceptance. Article 1 untouched. Articles 3–16 not drafted. No v5.4. M0–M5 intact. Day-30 unchanged. Runtime SPECIFIED — ENFORCEMENT PENDING. Reader ≠ platform.",
      },
    ],
  ),
];
