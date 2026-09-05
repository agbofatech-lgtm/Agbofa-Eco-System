import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Printer, c as ChevronRight, i as Scale, l as ChevronLeft, o as Menu, r as Search, s as Download, t as X, u as CalendarRange } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2D3DaFw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PARTS = [
	{
		id: "front",
		letter: "0",
		title: "How to read this document",
		dek: "Document issue, maturity, autonomy, evidence, delivery — five scales."
	},
	{
		id: "A",
		letter: "A",
		title: "Constitution",
		dek: "What must never be violated."
	},
	{
		id: "B",
		letter: "B",
		title: "Reference architecture",
		dek: "What AGBOFA is."
	},
	{
		id: "C",
		letter: "C",
		title: "Operating model",
		dek: "How AGBOFA works."
	},
	{
		id: "D",
		letter: "D",
		title: "Technical specification",
		dek: "How it is implemented."
	},
	{
		id: "E",
		letter: "E",
		title: "Enterprise target architecture",
		dek: "What AGBOFA becomes at maturity."
	},
	{
		id: "F",
		letter: "F",
		title: "Implementation roadmap",
		dek: "How we get there — 30-day enterprise strike; M5 remains the horizon."
	},
	{
		id: "G",
		letter: "G",
		title: "Governance and change control",
		dek: "How the architecture itself evolves."
	}
];
var FRONT = [
	{
		id: "cover",
		part: "Front",
		partId: "front",
		num: "00",
		nav: "Cover",
		title: "AGBOFA Master Architecture & Constitution",
		dek: "The governed digital product operating system.",
		v1: [
			{
				k: "kpis",
				items: [
					{
						l: "Document issue",
						v: "v5.0",
						h: "Received freeze — as submitted"
					},
					{
						l: "Status",
						v: "Frozen",
						h: "Day 0 — pre-implementation"
					},
					{
						l: "Classification",
						v: "Constitution",
						h: "Supreme specification"
					}
				]
			},
			{
				k: "quote",
				t: "AGBOFA is not a Claude wrapper. Claude is replaceable intelligence. AGBOFA owns authority, governance, execution, verification, evidence, audit, memory, and recovery."
			},
			{
				k: "callout",
				tone: "note",
				title: "You are reading the received freeze",
				t: "This edition is document issue v5.0, typeset without rewriting. The operative engineering issue is v5.3 — P0 correction of v5.2. Switch issues in the header."
			},
			{
				k: "table",
				cols: ["Part", "Owns"],
				rows: [
					["A Constitution", "What must never be violated"],
					["B Reference architecture", "What AGBOFA is"],
					["C Operating model", "How AGBOFA works"],
					["D Technical specification", "How it is implemented"],
					["E Enterprise target", "What AGBOFA becomes at maturity"],
					["F Implementation roadmap", "How we get there"],
					["G Change control", "How the architecture itself evolves"]
				]
			}
		],
		v2: [
			{
				k: "kpis",
				items: [
					{
						l: "Document issue",
						v: "v5.3",
						h: "Operative — P0 correction, 30-day increment"
					},
					{
						l: "Received freeze",
						v: "v5.0",
						h: "Preserved, not repealed"
					},
					{
						l: "First increment",
						v: "Day 30",
						h: "Constitutional spine — not M5"
					}
				]
			},
			{
				k: "callout",
				tone: "law",
				title: "Fundamental distinction",
				t: "The master architecture describes AGBOFA from foundation through M5. The 30-day plan is the first implementation increment, not the limits of AGBOFA. v5.3 is the P0 correction of v5.2. It is not v6. It is not a new product. The Constitution Reader is not the AGBOFA platform."
			},
			{
				k: "quote",
				t: "AGBOFA is not a Claude wrapper. Claude is replaceable intelligence. AGBOFA owns authority, governance, execution, verification, evidence, audit, memory, and recovery."
			},
			{
				k: "p",
				t: "v5.3 does not replace the owner's vision and does not repeal v5.0. It applies the accepted P0 corrections to v5.2: naming, identity, Trust Kernel, Isolation Guard, Recovery, A2 duty, Security Verifier, closed contracts, sandbox mechanism, deterministic classifier, binding catalogue, 30-day alignment. Articles 1–16 are preserved. M5 is preserved."
			}
		]
	},
	{
		id: "versioning",
		part: "Front",
		partId: "front",
		num: "01",
		nav: "Versioning",
		title: "Versioning law",
		dek: "Five numbering systems. They are not interchangeable.",
		v1: [
			{
				k: "p",
				t: "This freeze is document issue v5.0. Historical issues v1.0 through v4.0 are superseded lineage. Semver in this freeze: major for constitutional change, minor for new capability, patch for fixes."
			},
			{
				k: "callout",
				tone: "warn",
				title: "Ambiguity left in v5.0",
				t: "v5.0 uses “L0–L5” for agent autonomy (Part A.4) and again for enterprise maturity (Part E.1). Those are different scales. v5.1 splits them: autonomy A0–A5, maturity M0–M5. Until you switch to v5.1, read every “L” against its section heading."
			},
			{
				k: "table",
				cols: [
					"Written in v5.0",
					"Where",
					"Means"
				],
				rows: [
					[
						"v5.0",
						"Cover, history",
						"This constitutional freeze"
					],
					[
						"L0–L5 (Part A)",
						"Autonomy levels",
						"What an agent may do"
					],
					[
						"L0–L5 (Part E)",
						"Enterprise maturity",
						"How much of the target architecture is operational"
					],
					[
						"E0–E4",
						"Evidence",
						"Strength of proof"
					],
					[
						"Phase / Block / Gate / Day",
						"Part F",
						"First increment schedule"
					]
				]
			}
		],
		v2: [
			{
				k: "callout",
				tone: "law",
				title: "Binding issue",
				t: "An implementer, bid, or agent is bound by document issue v5.3 unless the Human Owner explicitly re-freezes v5.0. v5.3 is a MINOR bump: no article is repealed. A MAJOR (v6.0) is required to change, add, or weaken an article."
			},
			{
				k: "h",
				t: "Five independent numbering systems",
				l: 2
			},
			{
				k: "table",
				cols: [
					"System",
					"Prefix",
					"Range",
					"Means",
					"Must not be read as"
				],
				rows: [
					[
						"Document issue",
						"v",
						"vMAJOR.MINOR.PATCH",
						"Which freeze of this Constitution is in force",
						"Product version, maturity, or Day count"
					],
					[
						"Enterprise maturity",
						"M",
						"M0–M5",
						"How much of the target architecture is certified operational",
						"Agent autonomy or document issue"
					],
					[
						"Agent autonomy",
						"A",
						"A0–A5",
						"What a given agent is allowed to do",
						"Platform maturity"
					],
					[
						"Evidence",
						"E",
						"E0–E4",
						"Strength of proof required for a risk class",
						"Autonomy or maturity"
					],
					[
						"Delivery",
						"Wave / Track / Gate / Day",
						"1–4 / K·I·P·X·G / 1–10 / 1–30",
						"First increment schedule",
						"Document issue v1–v30"
					]
				]
			},
			{
				k: "h",
				t: "Issues in this reader",
				l: 2
			},
			{
				k: "table",
				cols: [
					"Issue",
					"Status",
					"What it is"
				],
				rows: [
					[
						"v5.0",
						"Received freeze",
						"Owner + architect constitutional formalization, preserved as submitted"
					],
					[
						"v5.1",
						"Historical",
						"Numbering split (A vs M)."
					],
					[
						"v5.2",
						"Historical operative",
						"30-day strike. Accepted audit basis."
					],
					[
						"v5.3",
						"Operative",
						"P0 correction. Closed contracts. Binding catalogue. Constitutional spine increment."
					]
				]
			},
			{
				k: "h",
				t: "Mapping from v5.0 notation",
				l: 2
			},
			{
				k: "table",
				cols: [
					"v5.0 wrote",
					"v5.1 writes",
					"System"
				],
				rows: [
					[
						"Autonomy L0–L5",
						"A0–A5",
						"Agent autonomy"
					],
					[
						"Maturity L0–L5",
						"M0–M5",
						"Enterprise maturity"
					],
					[
						"“Version 1 / Version 2” as reader labels",
						"v5.0 received / v5.3 operative",
						"Document issue — never reuse v1/v2 for the reader"
					]
				]
			},
			{
				k: "h",
				t: "When the number increments",
				l: 2
			},
			{
				k: "table",
				cols: [
					"Bump",
					"Required when",
					"Example"
				],
				rows: [
					[
						"Major (v6.0)",
						"An article is added, repealed, or substantively changed",
						"New Article 17, or weakening Article 3"
					],
					[
						"Minor (v5.3)",
						"P0 correction without changing articles",
						"This issue"
					],
					[
						"Patch (v5.3.1)",
						"Errata that do not change meaning",
						"Typo in a schema name"
					]
				]
			},
			{
				k: "ul",
				items: [
					"v5.3 is not “the AGBOFA platform.” It is the specification.",
					"M2 is not A2. Duty is not autonomy.",
					"Gate 10 certifies the first increment, not M5.",
					"Day 30 is not document version 30.",
					"The Constitution Reader is not the operating system."
				]
			}
		]
	},
	{
		id: "how-to-read",
		part: "Front",
		partId: "front",
		num: "02",
		nav: "How to read",
		title: "How to read this document",
		dek: "Architecture is permanent. The roadmap is an increment.",
		v1: [{
			k: "p",
			t: "The received freeze already divides the work into Parts A–G and places the 60-day program after the architecture. Read the Constitution first. Treat Part F as the initial build sequence. Treat Part E as the destination."
		}, {
			k: "callout",
			tone: "warn",
			title: "Known risk in the received freeze",
			t: "Part F.1 currently says that by Day 60 every enterprise function must have an implemented counterpart, with a target of 100% architectural implementation. That sentence can make an implementer treat multi-region, marketplace, federation, and hundreds of agents as Day-60 work — or, conversely, as “not in the architecture.” v5.1 corrects the sentence without shrinking the vision."
		}],
		v2: [
			{
				k: "callout",
				tone: "law",
				title: "Read in this order",
				t: "Parts A–E are the system. Part F is the first increment against that system — a 30-day parallel strike that certifies M4. Part G is how the system itself may change. Do not implement Part F as if it were the architecture."
			},
			{
				k: "h",
				t: "What is permanent",
				l: 2
			},
			{
				k: "ul",
				items: [
					"The 16 articles and 15 principles",
					"Intelligence ≠ authority",
					"Provider independence (Claude Business is the initial adapter, not the identity of AGBOFA)",
					"The operating stack from Human through Learning",
					"Enterprise maturity M0–M5 as the target architecture"
				]
			},
			{
				k: "h",
				t: "What is the first increment",
				l: 2
			},
			{
				k: "ul",
				items: [
					"Five parallel tracks (Kernel, Intelligence, Factory, Execution, Guard)",
					"Claude Business as the first Intelligence Provider behind the contract, plus a second adapter by Day 14",
					"A limited supported technology profile (web app, API service, database templates)",
					"Twelve initial specialist roles at A0/A1 (Verification Agent at A2)",
					"Gates 1–10 on a 3-day cadence proving M0 through M4",
					"Two live products, isolated, operated under passports"
				]
			},
			{
				k: "h",
				t: "What is in architecture but not in Day 30 operations",
				l: 2
			},
			{
				k: "ul",
				items: [
					"Multi-region infrastructure",
					"Live multi-provider routing",
					"Enterprise SDK, federation, marketplace",
					"Hundreds of agents",
					"Full SOC2/GDPR operational certification"
				]
			},
			{
				k: "p",
				t: "Those items remain in Part E. Phase 1 must leave the seams (contracts, adapters, registries, isolation, audit) so they can be switched on without rewriting the Constitution."
			}
		]
	},
	{
		id: "changelog",
		part: "Front",
		partId: "front",
		num: "03",
		nav: "v5.3 issue log",
		title: "What v5.3 changes — and what it does not",
		dek: "Minor issue. Articles unchanged. Clock compressed. Bar raised to M4.",
		v1: [{
			k: "p",
			t: "You are on v5.0. No editorial change is applied in this edition. Switch to v5.3 for the issue log."
		}],
		v2: [
			{
				k: "callout",
				tone: "fix",
				title: "v5.0 is not thrown away",
				t: "The received freeze is the conceptual foundation. v5.1 split the numbering and specified layers, agents, and factory states. v5.2 keeps that work and rewrites Part F as a 30-day parallel strike that certifies M4. Neither issue is a smaller MVP document."
			},
			{
				k: "table",
				cols: [
					"Change",
					"Issue",
					"Why"
				],
				rows: [
					[
						"Versioning law",
						"v5.1",
						"Stops document issue, maturity, autonomy, evidence, and Day count from being read as one scale"
					],
					[
						"Rename maturity L→M and autonomy L→A",
						"v5.1",
						"v5.0 used L0–L5 for both; they are different systems"
					],
					[
						"Architecture versus increment as law",
						"v5.1",
						"Stops implementers from reading the delivery list as the edge of AGBOFA"
					],
					[
						"Specify every operating layer, agent, factory state, security constitution",
						"v5.1",
						"Roles and layers become contracts, not posters"
					],
					[
						"30-day parallel strike, five tracks",
						"v5.2",
						"Owner asked to reach enterprise in 30 days. Serial 60-day blocks cannot do that."
					],
					[
						"Certify M4 on Day 30; horizon remains M5",
						"v5.2",
						"Enterprise Platform (ops, isolation, recovery) is the honest Day-30 bar. Autonomous ecosystem is not."
					],
					[
						"Gates on a 3-day cadence. Failed gate stops the wave.",
						"v5.2",
						"Calendar day is not evidence"
					]
				]
			},
			{
				k: "p",
				t: "Unchanged on purpose: articles 1–16, principles P1–P15, risk classes, evidence levels E0–E4, ten gates, red-team catalog, schemas, repository layout, and the owner's vision of a governed digital product operating system. Autonomy ranks and maturity ranks keep their meanings. The clock and the certified bound change. The constitution does not."
			}
		]
	}
];
var ARTICLES = [
	{
		k: "article",
		n: 1,
		title: "Human Sovereignty",
		text: "Humans remain ultimately accountable for AGBOFA's existence, operation, and major consequential actions.",
		scope: "All AGBOFA operations, decisions, and actions.",
		prohibitions: ["AGBOFA shall not take actions that remove or diminish human accountability.", "No agent may claim to act without human oversight for constitutionally significant actions."],
		requirements: [
			"Human approval is required for all actions classified as HIGH or CRITICAL risk.",
			"A designated human owner must possess emergency freeze authority at all times.",
			"Human decisions that override agent recommendations must be recorded with rationale."
		],
		enforcement: "The Trust Kernel shall reject any action classified as HIGH or CRITICAL risk that lacks valid human approval.",
		consequence: "System freeze and constitutional review."
	},
	{
		k: "article",
		n: 2,
		title: "AGBOFA Sovereignty",
		text: "AGBOFA controls the ecosystem's authority and governance mechanisms.",
		scope: "All authority grants, governance rules, policy definitions, and capability assignments.",
		prohibitions: ["No external system may directly grant authority within AGBOFA.", "No agent may self-grant authority."],
		requirements: [
			"All authority flows through the AGBOFA Governance Engine.",
			"All governance rules are versioned and stored in the Constitution repository.",
			"All authority grants are recorded as audit events."
		],
		enforcement: "The Authority System shall reject any authority grant that does not originate from an authorized governance source.",
		consequence: "Invalid authority revocation and security investigation."
	},
	{
		k: "article",
		n: 3,
		title: "Intelligence Is Not Authority",
		text: "No AI provider, model, agent, recommendation, inference, or generated output automatically receives authority.",
		scope: "All AI-generated outputs, recommendations, plans, and proposals.",
		prohibitions: [
			"AI outputs shall not be treated as commands.",
			"AI recommendations shall not be auto-executed without governance evaluation.",
			"AI confidence shall not substitute for authority."
		],
		requirements: [
			"All AI outputs enter the system as PROPOSALS.",
			"Proposals must pass through governance evaluation before execution.",
			"The distinction between intelligence and authority must be explicit in every agent interaction."
		],
		enforcement: "The Execution Broker shall reject any action whose authority chain does not trace to a valid, non-AI authority source.",
		consequence: "Action rejection and agent capability suspension."
	},
	{
		k: "article",
		n: 4,
		title: "Authority Is Explicit",
		text: "Every consequential action requires an identifiable authority source.",
		scope: "All consequential actions within AGBOFA.",
		prohibitions: [
			"Implicit authority is prohibited.",
			"\"The agent knew what to do\" is not an authority source.",
			"Default allow is prohibited."
		],
		requirements: [
			"Every action carries an authority chain.",
			"Authority chains must be traceable to a human or constitutional source.",
			"Authority grants must have defined scope, duration, and revocation conditions."
		],
		enforcement: "Actions lacking valid authority chains are rejected at the Trust Kernel.",
		consequence: "Action rejection and audit flag."
	},
	{
		k: "article",
		n: 5,
		title: "Capability Is Scoped",
		text: "An actor can only perform actions for which it possesses the required capability.",
		scope: "All actor actions within AGBOFA.",
		prohibitions: [
			"Broad capabilities (e.g., \"agent has access to everything\") are prohibited.",
			"Capability escalation without governance approval is prohibited.",
			"Capability reuse across product boundaries is prohibited by default."
		],
		requirements: [
			"All capabilities are defined with explicit scope, environment, and expiry.",
			"Capability tokens are required for all execution actions.",
			"Capability tokens are short-lived and renewable only through governance."
		],
		enforcement: "The Capability System shall reject any execution attempt with missing, expired, or out-of-scope capability tokens.",
		consequence: "Capability revocation and security audit."
	},
	{
		k: "article",
		n: 6,
		title: "Execution Is Isolated",
		text: "Intelligence does not receive unrestricted execution access.",
		scope: "All execution activities.",
		prohibitions: [
			"Direct agent access to production systems is prohibited.",
			"Execution outside isolated workspaces is prohibited.",
			"Bypassing the Execution Broker is prohibited."
		],
		requirements: [
			"All execution occurs through the Execution Broker.",
			"All execution occurs in isolated workspaces.",
			"All execution carries resource limits, timeouts, and failure handling."
		],
		enforcement: "The Execution Broker shall reject any direct execution attempt that bypasses its governance chain.",
		consequence: "Execution rejection and agent quarantine."
	},
	{
		k: "article",
		n: 7,
		title: "Execution Is Not Success",
		text: "An executed action does not constitute proof of correctness.",
		scope: "All execution outcomes.",
		prohibitions: [
			"Treating \"the command ran\" as \"the command was correct.\"",
			"Accepting agent claims of success without independent verification.",
			"Skipping verification for consequential actions."
		],
		requirements: [
			"All consequential actions require independent verification.",
			"Verification must be performed by a component separate from the executing agent.",
			"Verification results must be recorded as evidence."
		],
		enforcement: "The Verification Engine shall flag any consequential action lacking verification evidence.",
		consequence: "Action marked unverified and blocked from promotion."
	},
	{
		k: "article",
		n: 8,
		title: "Verification Is Independent",
		text: "Important outcomes must be independently verified.",
		scope: "All important outcomes, including builds, tests, deployments, and data operations.",
		prohibitions: [
			"Agents verifying their own work.",
			"Verification by the same component that performed the action.",
			"Verification that only checks surface-level success."
		],
		requirements: [
			"Verification is performed by dedicated verification agents or systems.",
			"Verification checks both functional correctness and constitutional compliance.",
			"Verification produces evidence that is stored and auditable."
		],
		enforcement: "Outcomes lacking independent verification are blocked from advancing to the next lifecycle stage.",
		consequence: "Outcome rejection and re-execution requirement."
	},
	{
		k: "article",
		n: 9,
		title: "Evidence Precedes Trust",
		text: "Claims about system state require evidence.",
		scope: "All claims about system state, product quality, or operational success.",
		prohibitions: [
			"Accepting agent assertions without evidence.",
			"Treating absence of errors as evidence of correctness.",
			"Storing claims without supporting evidence."
		],
		requirements: [
			"Every consequential claim carries evidence.",
			"Evidence must be machine-verifiable where possible.",
			"Evidence must be stored in the Evidence Store with proper provenance."
		],
		enforcement: "Claims lacking evidence are marked unverified and cannot be used for decision-making.",
		consequence: "Claim rejection and investigation."
	},
	{
		k: "article",
		n: 10,
		title: "Audit Is Persistent",
		text: "Consequential actions create durable audit records.",
		scope: "All consequential actions.",
		prohibitions: [
			"Audit record modification or deletion.",
			"Audit bypass for any reason.",
			"Tampering with audit timestamps, hashes, or chains."
		],
		requirements: [
			"All consequential actions generate audit events.",
			"Audit events are append-only.",
			"Audit events are hash-chained for tamper evidence.",
			"Audit records include: who, which agent, which authority, which capability, which product, which environment, what action, when, why, what happened, what was verified, what evidence exists."
		],
		enforcement: "The Audit System shall detect any tampering attempt and trigger a security alert.",
		consequence: "System freeze and security investigation."
	},
	{
		k: "article",
		n: 11,
		title: "Governance Cannot Be Weakened by the Governed",
		text: "An agent cannot modify the rules that govern its own authority.",
		scope: "All governance rules, policies, and authority definitions.",
		prohibitions: [
			"Agent modification of its own authority scope.",
			"Agent modification of governance rules that apply to itself.",
			"Agent creation of new capabilities that bypass governance."
		],
		requirements: [
			"Governance changes require human approval.",
			"Governance changes are versioned and audited.",
			"Governance changes are subject to constitutional review."
		],
		enforcement: "The Governance Engine shall reject any governance change originating from a governed agent.",
		consequence: "Change rejection and agent suspension."
	},
	{
		k: "article",
		n: 12,
		title: "Autonomy Is Earned",
		text: "Autonomy increases only according to defined evidence and policy.",
		scope: "All agent autonomy levels.",
		prohibitions: [
			"Automatic autonomy grants.",
			"Autonomy increases without evidence of reliability.",
			"Autonomy based on AI self-assessment."
		],
		requirements: [
			"Autonomy levels are defined in the Constitution.",
			"Autonomy increases require evidence of successful governed operation.",
			"Autonomy increases require human approval."
		],
		enforcement: "The Trust Kernel shall enforce autonomy levels and reject actions exceeding authorized autonomy.",
		consequence: "Action rejection and autonomy level reduction."
	},
	{
		k: "article",
		n: 13,
		title: "Learning Requires Verified Outcomes",
		text: "AGBOFA cannot convert an AI assumption into institutional knowledge merely because the AI generated it.",
		scope: "All institutional knowledge and learning.",
		prohibitions: [
			"Direct promotion of AI outputs to knowledge without verification.",
			"Treating AI confidence as knowledge validity.",
			"Storing unverified claims in institutional memory."
		],
		requirements: [
			"Knowledge candidates must pass through verification.",
			"Verified outcomes must be linked to their evidence.",
			"Knowledge must be versioned and auditable."
		],
		enforcement: "The Memory System shall reject knowledge candidates lacking verification evidence.",
		consequence: "Knowledge candidate rejection."
	},
	{
		k: "article",
		n: 14,
		title: "Tenant Isolation",
		text: "One product, tenant, organization, or environment cannot improperly access another.",
		scope: "All cross-tenant, cross-product, and cross-environment interactions.",
		prohibitions: [
			"Cross-tenant data access by default.",
			"Cross-product agent access by default.",
			"Cross-environment capability use by default."
		],
		requirements: [
			"All tenant data is isolated by default.",
			"Cross-boundary access requires explicit, governed authorization.",
			"Tenant isolation is tested continuously."
		],
		enforcement: "The Isolation Guard shall detect and block any cross-tenant access attempt lacking explicit authorization.",
		consequence: "Access denial, isolation breach alert, and security investigation."
	},
	{
		k: "article",
		n: 15,
		title: "Recovery Is Constitutional",
		text: "The system must be capable of freezing, recovering, rolling back, and restoring critical state.",
		scope: "All critical state, including products, databases, configurations, and governance rules.",
		prohibitions: [
			"Operating without defined recovery procedures.",
			"Recovery procedures that bypass governance.",
			"Recovery actions that are not audited."
		],
		requirements: [
			"Recovery procedures are defined for all critical state.",
			"Recovery actions are authorized and audited.",
			"Recovery testing occurs regularly.",
			"Emergency freeze capability exists and is testable."
		],
		enforcement: "The Recovery System shall reject recovery actions lacking proper authorization and audit trail.",
		consequence: "Recovery action rejection and constitutional review."
	},
	{
		k: "article",
		n: 16,
		title: "Provider Independence",
		text: "AGBOFA's architecture never equates its intelligence with any specific AI provider.",
		scope: "All intelligence integration points.",
		prohibitions: [
			"Hard-coding provider-specific APIs in core AGBOFA components.",
			"Requiring provider-specific features for constitutional operation.",
			"Treating any provider as irreplaceable."
		],
		requirements: [
			"All intelligence access flows through the Intelligence Contract.",
			"Provider adapters are pluggable and versioned.",
			"Provider switching is possible without core changes."
		],
		enforcement: "The Intelligence Contract shall reject any direct provider access that bypasses the abstraction layer.",
		consequence: "Architecture violation flag and refactoring requirement."
	}
];
function s$6(id, num, nav, title, dek, v1, v2) {
	return {
		id,
		part: "Constitution",
		partId: "A",
		num,
		nav,
		title,
		dek,
		v1,
		...v2 ? { v2 } : {}
	};
}
var PART_A = [
	s$6("a1", "A.1", "Preamble", "Preamble", "AGBOFA is a governed digital product operating system. This Constitution is supreme.", [
		{
			k: "p",
			t: "AGBOFA (Autonomous Governed Blockchain-Oriented Factory Architecture) is established as a governed digital product operating system. This Constitution is the supreme authority governing all actors, systems, agents, models, and processes within the AGBOFA ecosystem."
		},
		{
			k: "p",
			t: "The purpose of this Constitution is to ensure that artificial intelligence may autonomously design, build, and operate digital products safely, verifiably, and constitutionally, while human sovereignty remains absolute and every consequential action carries evidence, accountability, and the possibility of audit."
		},
		{
			k: "callout",
			tone: "law",
			title: "Supremacy",
			t: "No agent, model, subsystem, or process may violate this Constitution. No authority may be exercised except through the mechanisms defined herein."
		}
	]),
	s$6("a2", "A.2", "Principles", "Permanent architectural principles", "P1–P15 do not change with maturity, timeline, or provider.", [{
		k: "p",
		t: "These principles are permanent. They do not change with maturity level, implementation timeline, or provider selection."
	}, {
		k: "table",
		cols: [
			"ID",
			"Principle",
			"Statement"
		],
		rows: [
			[
				"P1",
				"Human Sovereignty",
				"Humans are ultimately accountable for AGBOFA's existence and major consequential actions."
			],
			[
				"P2",
				"Constitutional Supremacy",
				"The Constitution governs all actors, including AGBOFA itself. No agent, model, or process may violate it."
			],
			[
				"P3",
				"Intelligence Is Not Authority",
				"No AI provider, model, agent, or generated output automatically possesses authority. Authority must be explicitly granted through constitutional mechanisms."
			],
			[
				"P4",
				"Authority Is Explicit and Traceable",
				"Every consequential action requires an identifiable authority source that can be traced through the governance chain."
			],
			[
				"P5",
				"Capability Is Scoped and Constrained",
				"An actor can only perform actions for which it has been granted both authority and technical capability, within defined boundaries."
			],
			[
				"P6",
				"Execution Is Isolated",
				"Intelligence never receives unrestricted execution access. All execution occurs through governed, isolated channels."
			],
			[
				"P7",
				"Verification Is Independent",
				"Important outcomes must be independently verified before they are accepted as true or successful."
			],
			[
				"P8",
				"Evidence Precedes Trust",
				"Claims about system state, product quality, or operational success require evidence. Trust is earned, not assumed."
			],
			[
				"P9",
				"Audit Is Persistent and Tamper-Evident",
				"Consequential actions create durable audit records that cannot be silently modified or deleted."
			],
			[
				"P10",
				"Governance Cannot Be Weakened by the Governed",
				"No agent, model, or subsystem may modify the rules that govern its own authority."
			],
			[
				"P11",
				"Autonomy Is Earned",
				"Autonomy increases only according to demonstrated evidence of reliability, safety, and constitutional compliance."
			],
			[
				"P12",
				"Learning Requires Verified Outcomes",
				"AGBOFA cannot convert an AI assumption or recommendation into institutional knowledge merely because an AI generated it."
			],
			[
				"P13",
				"Tenant Isolation Is Absolute",
				"Products, tenants, organizations, and environments are isolated by default. Cross-boundary access requires explicit, governed authorization."
			],
			[
				"P14",
				"Recovery Is Constitutional",
				"The system must be capable of freezing, recovering, rolling back, and restoring critical state. Recovery procedures are themselves governed."
			],
			[
				"P15",
				"Provider Independence",
				"AGBOFA's architecture never equates its intelligence with any specific AI provider. Providers are replaceable through defined contracts."
			]
		]
	}]),
	s$6("a3", "A.3", "Articles", "Constitutional articles", "Articles 1–16. The operative law of every actor, agent, and subsystem.", [{
		k: "p",
		t: "The sixteen articles are the operative law of AGBOFA. They bind every actor. They do not change with maturity, timeline, or provider."
	}, ...ARTICLES]),
	s$6("a4", "A.4", "Autonomy", "Autonomy levels", "Autonomy is earned. No agent starts above proposal. L in the freeze is autonomy, not maturity.", [
		{
			k: "p",
			t: "The received freeze (v5.0) published a single L0–L5 ladder here. That ladder is agent autonomy, not enterprise maturity. v5.1 splits the numbering: autonomy uses A0–A5; enterprise maturity uses M0–M5 (Part E). Evidence stays E0–E4."
		},
		{
			k: "callout",
			tone: "note",
			title: "L is autonomy, not maturity",
			t: "Keep this table as the freeze wrote it. Do not read L3 here as enterprise multi-product maturity. The same letter was reused in Part E for a different scale. The operative issue replaces L with A for this table."
		},
		{
			k: "table",
			cols: [
				"Level",
				"Name",
				"Description",
				"Requirements"
			],
			rows: [
				[
					"L0",
					"Advisory",
					"Agent provides recommendations only. No execution authority.",
					"None — default state"
				],
				[
					"L1",
					"Proposal",
					"Agent can submit formal proposals for governance evaluation.",
					"Proven recommendation quality"
				],
				[
					"L2",
					"Governed Execution",
					"Agent can execute within pre-approved scope with governance checks.",
					"Evidence of safe L1 operation"
				],
				[
					"L3",
					"Autonomous Within Scope",
					"Agent can execute without per-action approval within defined scope.",
					"Evidence of safe L2 operation + human approval"
				],
				[
					"L4",
					"Autonomous with Verification",
					"Agent can execute and self-verify within scope, with periodic external verification.",
					"Evidence of safe L3 operation + human approval"
				],
				[
					"L5",
					"Full Governed Autonomy",
					"Agent can operate autonomously within constitutional limits.",
					"Evidence of safe L4 operation + human approval + constitutional review"
				]
			]
		},
		{
			k: "callout",
			tone: "law",
			title: "Default and increase",
			t: "No agent starts above L1. Autonomy increases require evidence and human approval. Autonomy based on AI self-assessment is prohibited (Article 12)."
		}
	], [
		{
			k: "p",
			t: "Agent autonomy is the A scale. It is a per-actor grant, earned under Article 12. It is not enterprise maturity (M) and not a document-issue number."
		},
		{
			k: "callout",
			tone: "law",
			title: "A is not M",
			t: "A0–A5 are agent autonomy grants. M0–M5 are enterprise maturity of the platform. Mixing them is the numbering error the received freeze produced by using L for both."
		},
		{
			k: "table",
			cols: [
				"Level",
				"Name",
				"Description",
				"Requirements",
				"v5.0 wrote"
			],
			rows: [
				[
					"A0",
					"Advisory",
					"Agent provides recommendations only. No execution authority.",
					"None — default state for intelligence-only roles.",
					"L0"
				],
				[
					"A1",
					"Proposal",
					"Agent can submit formal proposals for governance evaluation.",
					"Proven recommendation quality.",
					"L1"
				],
				[
					"A2",
					"Governed in-scope action",
					"Agent may perform its catalogued duty within pre-approved scope under governance checks. Duty is a separate field: propose, verify, or (not granted in this increment) execute. A2 is not product-implementation execution.",
					"Evidence of safe A1 operation. Duty recorded on AgentIdentity.",
					"L2"
				],
				[
					"A3",
					"Autonomous Within Scope",
					"Agent can execute without per-action approval within defined scope.",
					"Evidence of safe A2 operation + human approval.",
					"L3"
				],
				[
					"A4",
					"Autonomous with Verification",
					"Agent can execute and self-verify within scope, with periodic external verification.",
					"Evidence of safe A3 operation + human approval.",
					"L4"
				],
				[
					"A5",
					"Full Governed Autonomy",
					"Agent can operate autonomously within constitutional limits.",
					"Evidence of safe A4 operation + human approval + constitutional review.",
					"L5"
				]
			]
		},
		{
			k: "callout",
			tone: "law",
			title: "Grant ceiling",
			t: "No agent starts above A1 except the catalogued verifiers at A2 with duty=verify (AG-VER, AG-SECV). A2 does not grant product implementation execution. Named catalogue is A0 / A1 / A2. A3–A5 are defined, not granted at Day-30 certification."
		}
	]),
	s$6("a5", "A.5", "Risk", "Risk classifications", "CRITICAL, HIGH, MEDIUM, LOW. Approval is a function of class, not of model confidence.", [
		{
			k: "p",
			t: "Every consequential action is classified before governance evaluation. Classification is a Trust Kernel function. AI confidence is not a risk class."
		},
		{
			k: "table",
			cols: [
				"Classification",
				"Description",
				"Approval required"
			],
			rows: [
				[
					"CRITICAL",
					"Actions affecting constitutional integrity, production data, security boundaries, or system-wide state.",
					"Human + Constitutional Review"
				],
				[
					"HIGH",
					"Actions affecting product deployments, schema changes, credential operations, or cross-tenant access.",
					"Human"
				],
				[
					"MEDIUM",
					"Actions affecting code changes, test execution, or non-production environments.",
					"Governance Engine"
				],
				[
					"LOW",
					"Actions affecting documentation, analysis, or read-only operations.",
					"Capability Token only"
				]
			]
		},
		{
			k: "callout",
			tone: "law",
			title: "Default-deny",
			t: "Unclassified consequential actions are treated as HIGH until classified. Default-allow is prohibited (Article 4)."
		}
	])
];
function s$5(id, num, nav, title, dek, v1, v2) {
	return {
		id,
		part: "Reference architecture",
		partId: "B",
		num,
		nav,
		title,
		dek,
		v1,
		...v2 ? { v2 } : {}
	};
}
var STACK_STEPS = [
	"Human — Sovereign Authority",
	"Constitution — Supreme Governing Law",
	"Governance — Policy & Rule Engine",
	"Authority — Explicit Grant System",
	"Capabilities — Scoped Token System",
	"Intelligence — AI Provider Abstraction",
	"Planning — Governed Action Plans",
	"Execution — Isolated Broker / Workspace",
	"Verification — Independent Validation",
	"Evidence — Immutable Proof Store",
	"Audit — Append-Only Trail",
	"Memory — Verified Knowledge",
	"Learning — Institutional Growth"
];
var SUBSYSTEMS = [
	[
		"Trust Kernel",
		"Enforce constitutional rules",
		"Auth, Authorization, Policy Engine, Risk Classification"
	],
	[
		"Authority System",
		"Manage explicit authority grants",
		"Authority Chains, Delegation, Revocation"
	],
	[
		"Capability System",
		"Issue scoped capability tokens",
		"Token Issuance, Scope Validation, Expiry Management"
	],
	[
		"Execution Broker",
		"Control all execution",
		"Action Classification, Governance Check, Workspace Allocation"
	],
	[
		"Verification Engine",
		"Independently verify outcomes",
		"Test Runners, Build Verification, Deployment Verification"
	],
	[
		"Evidence Store",
		"Store immutable evidence",
		"Hash-chained Storage, Evidence Validation"
	],
	[
		"Audit System",
		"Maintain append-only audit trail",
		"Event Logging, Hash Chaining, Tamper Detection"
	],
	[
		"Intelligence Contract",
		"Abstract AI providers",
		"Provider Adapters, Agent Runtime, Context Management"
	],
	[
		"Product Factory",
		"Transform ideas into products",
		"Discovery, Requirements, Blueprint, Architecture, Planning"
	],
	[
		"Memory System",
		"Store verified knowledge",
		"Knowledge Candidates, Validation, Institutional Memory"
	],
	[
		"Recovery System",
		"Enable constitutional recovery",
		"Freeze, Rollback, Restore, Emergency Procedures"
	],
	[
		"Operations System",
		"Manage running products",
		"Monitoring, Incident, Compliance, Lifecycle"
	]
];
var AGENT_ROWS_V1 = [
	[
		"Product Discovery Agent",
		"Transform ideas into requirements",
		"L1"
	],
	[
		"Requirements Agent",
		"Define and validate requirements",
		"L1"
	],
	[
		"Domain Analyst Agent",
		"Analyze domain models",
		"L1"
	],
	[
		"Architecture Agent",
		"Propose system architecture",
		"L1"
	],
	[
		"Database Agent",
		"Design and manage data models",
		"L1"
	],
	[
		"UX Agent",
		"Design user experience",
		"L1"
	],
	[
		"Security Agent",
		"Identify and address security concerns",
		"L1"
	],
	[
		"Repository Agent",
		"Manage code repositories",
		"L1"
	],
	[
		"QA Agent",
		"Design and execute tests",
		"L1"
	],
	[
		"Verification Agent",
		"Independently verify outcomes",
		"L2"
	],
	[
		"Deployment Agent",
		"Manage deployments",
		"L1"
	],
	[
		"Operations Agent",
		"Monitor and manage operations",
		"L1"
	]
];
var AGENT_ROWS_V2 = [
	[
		"Product Discovery Agent",
		"Transform ideas into requirements",
		"A1"
	],
	[
		"Requirements Agent",
		"Define and validate requirements",
		"A1"
	],
	[
		"Domain Analyst Agent",
		"Analyze domain models",
		"A1"
	],
	[
		"Architecture Agent",
		"Propose system architecture",
		"A1"
	],
	[
		"Database Agent",
		"Design and manage data models",
		"A1"
	],
	[
		"UX Agent",
		"Design user experience",
		"A1"
	],
	[
		"Security Agent",
		"Identify and address security concerns",
		"A1"
	],
	[
		"Repository Agent",
		"Manage code repositories",
		"A1"
	],
	[
		"QA Agent",
		"Design and execute tests",
		"A1"
	],
	[
		"Verification Agent",
		"Independently verify outcomes",
		"A2"
	],
	[
		"Deployment Agent",
		"Manage deployments",
		"A1"
	],
	[
		"Operations Agent",
		"Monitor and manage operations",
		"A1"
	]
];
var FACTORY_STEPS = [
	"Idea",
	"Discovery",
	"Requirements",
	"Domain model",
	"Product Passport",
	"Blueprint",
	"Architecture",
	"Human approval",
	"Implementation plan",
	"Execution",
	"Build",
	"Test",
	"Security",
	"Verification",
	"Evidence",
	"Deployment approval",
	"Deployment",
	"Post-deployment verification",
	"Operations",
	"Learning",
	"Improvement",
	"Retirement"
];
var PART_B = [
	s$5("b1", "B.1", "Stack", "System overview", "Human → Constitution → Governance → Authority → Capabilities → Intelligence → Planning → Execution → Verification → Evidence → Audit → Memory → Learning.", [
		{
			k: "p",
			t: "Authority flows downward. Evidence and audit flow back up. No layer may skip the layers above it. Intelligence sits below capability; it never sits above authority."
		},
		{
			k: "flow",
			steps: STACK_STEPS
		},
		{
			k: "callout",
			tone: "law",
			title: "Read direction",
			t: "A proposal originates in Intelligence or Planning and must climb back through Governance and Authority before Execution will admit it. Learning cannot grant autonomy or rewrite the Constitution."
		}
	]),
	s$5("b2", "B.2", "Subsystems", "Core subsystems", "The kernels and engines that enforce the Constitution in software.", [{
		k: "p",
		t: "Subsystems are the implementable counterparts of the stack. Each maps to one or more articles. Absence of a subsystem is a constitutional defect, not a backlog item."
	}, {
		k: "table",
		cols: [
			"Subsystem",
			"Purpose",
			"Key components"
		],
		rows: SUBSYSTEMS
	}]),
	s$5("b3", "B.3", "Intelligence", "Intelligence architecture", "Providers are adapters. Outputs are proposals. Autonomy is A, not L.", [
		{
			k: "p",
			t: "All model access flows through the Intelligence Contract. Provider adapters are pluggable. Agent outputs enter the system as proposals, never as commands (Article 3, Article 16)."
		},
		{
			k: "flow",
			steps: [
				"Intelligence provider",
				"Provider adapter",
				"Intelligence Contract",
				"Agent runtime",
				"Agent role",
				"Agent context",
				"Agent task",
				"Recommendation / plan / output (PROPOSAL)"
			]
		},
		{
			k: "h",
			t: "Initial agent roles",
			l: 2
		},
		{
			k: "p",
			t: "The received freeze numbered these roles L1 / L2. That L is the autonomy ladder from A.4, not enterprise maturity from E.1. v5.1 reprints the same roster on the A scale."
		},
		{
			k: "table",
			cols: [
				"Agent",
				"Purpose",
				"Autonomy"
			],
			rows: AGENT_ROWS_V1
		}
	], [
		{
			k: "p",
			t: "All model access flows through the Intelligence Contract. Provider adapters are pluggable. Agent outputs enter the system as proposals, never as commands (Article 3, Article 16)."
		},
		{
			k: "flow",
			steps: [
				"Intelligence provider",
				"Provider adapter",
				"Intelligence Contract",
				"Agent runtime",
				"Agent role",
				"Agent context",
				"Agent task",
				"Recommendation / plan / output (PROPOSAL)"
			]
		},
		{
			k: "h",
			t: "Initial agent roles",
			l: 2
		},
		{
			k: "callout",
			tone: "note",
			title: "A, not L",
			t: "The received freeze wrote L1 / L2 on this roster. Those cells were autonomy, not maturity. The operative issue uses A1 / A2. Advisory intelligence roles (A0) are catalogued in Part C."
		},
		{
			k: "table",
			cols: [
				"Agent",
				"Purpose",
				"Autonomy"
			],
			rows: AGENT_ROWS_V2
		}
	]),
	s$5("b4", "B.4", "Factory", "Product factory lifecycle", "Idea to retirement under governance. v5.1 adds Discovery, Requirements, and Architecture state machines.", [{
		k: "p",
		t: "The factory is a governed pipeline, not a prompt. Human approval sits after architecture and before implementation. Verification and evidence sit after execution and before deployment."
	}, {
		k: "flow",
		steps: FACTORY_STEPS
	}], [
		{
			k: "p",
			t: "The factory is a governed pipeline, not a prompt. Human approval sits after architecture and before implementation. Verification and evidence sit after execution and before deployment."
		},
		{
			k: "flow",
			steps: FACTORY_STEPS
		},
		{
			k: "p",
			t: "Three factory stages are explicit state machines. Transitions are proposals until governance (and, for architecture, human approval) attaches. There is no implicit 'the agent knew the next state.'"
		},
		{
			k: "machine",
			title: "Discovery",
			states: [
				{
					id: "idle",
					name: "Idle",
					exits: ["intake"]
				},
				{
					id: "intake",
					name: "Intake",
					exits: ["analyze"]
				},
				{
					id: "analyze",
					name: "Analyze",
					exits: ["propose", "reject"]
				},
				{
					id: "propose",
					name: "Propose",
					exits: ["govern"]
				},
				{
					id: "govern",
					name: "Governance evaluation",
					exits: ["approved", "returned"]
				},
				{
					id: "returned",
					name: "Returned",
					exits: ["analyze"]
				},
				{
					id: "approved",
					name: "Approved",
					exits: ["complete"]
				},
				{
					id: "reject",
					name: "Rejected",
					exits: []
				},
				{
					id: "complete",
					name: "Complete",
					exits: []
				}
			]
		},
		{
			k: "machine",
			title: "Requirements",
			states: [
				{
					id: "idle",
					name: "Idle",
					exits: ["classify"]
				},
				{
					id: "classify",
					name: "Classify",
					exits: ["assumptions"]
				},
				{
					id: "assumptions",
					name: "Track assumptions",
					exits: ["propose"]
				},
				{
					id: "propose",
					name: "Propose",
					exits: ["govern"]
				},
				{
					id: "govern",
					name: "Governance evaluation",
					exits: ["approved", "returned"]
				},
				{
					id: "returned",
					name: "Returned",
					exits: ["classify"]
				},
				{
					id: "approved",
					name: "Approved",
					exits: ["complete"]
				},
				{
					id: "complete",
					name: "Complete",
					exits: []
				}
			]
		},
		{
			k: "machine",
			title: "Architecture",
			states: [
				{
					id: "idle",
					name: "Idle",
					exits: ["draft"]
				},
				{
					id: "draft",
					name: "Draft",
					exits: ["contracts"]
				},
				{
					id: "contracts",
					name: "Contract schemas",
					exits: ["propose"]
				},
				{
					id: "propose",
					name: "Propose",
					exits: ["human"]
				},
				{
					id: "human",
					name: "Human approval",
					exits: ["approved", "returned"]
				},
				{
					id: "returned",
					name: "Returned",
					exits: ["draft"]
				},
				{
					id: "approved",
					name: "Approved",
					exits: ["complete"]
				},
				{
					id: "complete",
					name: "Complete",
					exits: []
				}
			]
		}
	]),
	s$5("b5", "B.5", "Execution", "Execution path", "Proposal to audit. Nothing runs that has not passed classification, governance, authority, capability, and approval.", [{
		k: "p",
		t: "Execution is admitted only through the Execution Broker, only inside an isolated workspace, and only against a valid authority chain and in-scope capability token (Articles 4, 5, 6). A result is a claim, not success (Article 7)."
	}, {
		k: "flow",
		steps: [
			"Agent proposal",
			"Action classification",
			"Risk assessment",
			"Governance evaluation",
			"Authority check",
			"Capability check",
			"Approval check",
			"Capability token",
			"Execution Broker",
			"Isolated workspace",
			"Worker",
			"Result",
			"Verification",
			"Evidence",
			"Audit"
		]
	}]),
	s$5("b6", "B.6", "Verification", "Verification and evidence", "Independent checks. Evidence levels E0–E4. E0 is unacceptable for every consequential claim.", [
		{
			k: "h",
			t: "Verification types",
			l: 2
		},
		{
			k: "table",
			cols: [
				"Type",
				"Purpose",
				"Performed by"
			],
			rows: [
				[
					"Functional",
					"Verify functional requirements",
					"Verification Agent"
				],
				[
					"Unit",
					"Verify individual components",
					"Automated Test Runner"
				],
				[
					"Integration",
					"Verify component interactions",
					"Automated Test Runner"
				],
				[
					"E2E",
					"Verify user workflows",
					"Playwright Runner"
				],
				[
					"Security",
					"Verify security controls",
					"Security Agent"
				],
				[
					"Performance",
					"Verify performance requirements",
					"Performance Runner"
				],
				[
					"Deployment",
					"Verify deployment success",
					"Deployment Verifier"
				],
				[
					"Data Integrity",
					"Verify data operations",
					"Data Verifier"
				],
				[
					"Recovery",
					"Verify recovery procedures",
					"Recovery Tester"
				],
				[
					"Configuration",
					"Verify configuration correctness",
					"Configuration Verifier"
				],
				[
					"Compliance",
					"Verify constitutional compliance",
					"Compliance Checker"
				]
			]
		},
		{
			k: "h",
			t: "Evidence levels",
			l: 2
		},
		{
			k: "p",
			t: "Evidence numbering is E0–E4 in both the received freeze and the operative issue. It is not renamed. It is not autonomy and not maturity."
		},
		{
			k: "table",
			cols: [
				"Level",
				"Description",
				"Required for"
			],
			rows: [
				[
					"E0",
					"No evidence — agent assertion only",
					"Nothing (unacceptable)"
				],
				[
					"E1",
					"Automated test output",
					"LOW risk actions"
				],
				[
					"E2",
					"Test output + configuration snapshot",
					"MEDIUM risk actions"
				],
				[
					"E3",
					"Test output + configuration + security scan",
					"HIGH risk actions"
				],
				[
					"E4",
					"Full evidence package + independent verification",
					"CRITICAL risk actions"
				]
			]
		},
		{
			k: "callout",
			tone: "law",
			title: "E0 is never enough",
			t: "Claims lacking evidence are marked unverified and cannot be used for decision-making (Article 9). Absence of errors is not evidence of correctness."
		}
	]),
	s$5("b7", "B.7", "Memory", "Memory and learning", "AI saying something does not become AGBOFA knowledge.", [{
		k: "flow",
		steps: [
			"Raw observation",
			"Evidence",
			"Verified outcome",
			"Knowledge candidate",
			"Validation",
			"Institutional knowledge",
			"Future decision support"
		]
	}, {
		k: "callout",
		tone: "law",
		title: "Verified outcomes only",
		t: "AI saying something does not become AGBOFA knowledge. Only verified outcomes with evidence become knowledge (Article 13). Learning never grants authority and never weakens governance."
	}])
];
var AGENTS = [
	{
		k: "agent",
		name: "Product Discovery",
		purpose: "Transform ideas into requirements.",
		inputs: [
			"Product idea or intake brief.",
			"Human owner intent.",
			"Existing Product Passport references where a product already exists."
		],
		outputs: [
			"Discovery report labeled as a PROPOSAL.",
			"Draft requirements candidates.",
			"Assumption log."
		],
		authority: "A1 — Proposal. Submit formal discovery proposals for governance evaluation. No execution authority.",
		tools: [
			"Discovery workflow.",
			"Intake forms.",
			"Intelligence Contract (reasoning, analysis)."
		],
		prohibited: [
			"Executing implementation work.",
			"Treating discovery output as a command (Article 3).",
			"Self-granting authority (Article 2).",
			"Crossing tenant or product boundaries by default (Article 14)."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Requirements",
		purpose: "Define and validate requirements.",
		inputs: [
			"Discovery report.",
			"Human-approved intake.",
			"Domain findings.",
			"Constitutional risk table."
		],
		outputs: [
			"Classified requirements.",
			"Assumption tracking records.",
			"Requirements proposals for Product Passport and Blueprint."
		],
		authority: "A1 — Proposal. Submit formal requirements for governance evaluation. No execution authority.",
		tools: [
			"Requirements engine.",
			"Classification and assumption tracking.",
			"Intelligence Contract (analysis, planning)."
		],
		prohibited: [
			"Promoting requirements to knowledge without verification (Article 13).",
			"Auto-executing a requirement as work.",
			"Omitting risk classification for consequential requirements.",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Domain Analyst",
		purpose: "Analyze domain models.",
		inputs: [
			"Approved requirements.",
			"Existing domain entities (Product, Tenant, User, Agent, Capability, Authority, Action, Policy, Evidence, AuditEvent, Execution, Verification, Environment).",
			"Product Passport drafts."
		],
		outputs: [
			"Domain model proposals.",
			"Entity and boundary maps.",
			"Isolation notes for tenant, product, and environment."
		],
		authority: "A1 — Proposal. Submit domain-model proposals for governance evaluation. No execution authority.",
		tools: [
			"Domain modeling.",
			"Entity extraction.",
			"Intelligence Contract (analysis)."
		],
		prohibited: [
			"Writing production schema.",
			"Collapsing tenant or product boundaries.",
			"Treating a domain model as authority to execute.",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Architecture",
		purpose: "Propose system architecture.",
		inputs: [
			"Approved requirements and domain model.",
			"Product Blueprint.",
			"Constitutional contracts and Intelligence Contract.",
			"Amendment impact-analysis requests."
		],
		outputs: [
			"Architecture proposals.",
			"Contract schemas (identity, authority, capability, action, governance, verification, evidence, audit).",
			"Impact analyses for constitutional change."
		],
		authority: "A1 — Proposal. Submit architecture and contract proposals for governance evaluation. No execution authority.",
		tools: [
			"Architecture proposal system.",
			"Contract generation.",
			"Intelligence Contract (reasoning, planning)."
		],
		prohibited: [
			"Hard-coding provider-specific APIs in core components (Article 16).",
			"Implementing architecture without human approval of the proposal.",
			"Weakening governance in a proposed design (Article 11).",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Database",
		purpose: "Design and manage data models.",
		inputs: [
			"Approved domain model.",
			"Architecture proposal.",
			"Existing migrations and validation schemas."
		],
		outputs: [
			"Schema and migration proposals.",
			"Zod/validation schema proposals.",
			"Data-isolation notes (tenant, product, environment)."
		],
		authority: "A1 — Proposal. Submit schema and migration proposals for governance evaluation. No production data-plane execution.",
		tools: [
			"Schema generation.",
			"Migration drafting.",
			"Intelligence Contract (code generation, analysis)."
		],
		prohibited: [
			"Applying migrations to production except through Execution Broker after approval.",
			"Cross-tenant schema or data access (Article 14).",
			"Recovery procedures that bypass governance (Article 15).",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "UX",
		purpose: "Design user experience.",
		inputs: [
			"Approved requirements and blueprint.",
			"Product Passport.",
			"Human design constraints."
		],
		outputs: [
			"UX design proposals.",
			"Interaction and information-architecture specs.",
			"Accessibility and evidence notes for user-facing flows."
		],
		authority: "A1 — Proposal. Submit UX proposals for governance evaluation. No execution authority.",
		tools: [
			"Design specifications.",
			"Interaction modeling.",
			"Intelligence Contract (analysis, code generation for mock specs only as proposals)."
		],
		prohibited: [
			"Shipping UI to production without governance, verification, and deployment approval.",
			"Collecting or exposing cross-tenant user data.",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Security",
		purpose: "Identify and address security concerns.",
		inputs: [
			"Architecture, capability design, and execution flows.",
			"Action-classification policy.",
			"Red-team scenarios (privilege escalation, tenant escape, injection, audit tampering)."
		],
		outputs: [
			"Security findings and threat models as PROPOSALS.",
			"Classification-logic proposals.",
			"Attack-simulation reports (evidence, not self-certified pass).",
			"Capability-revocation recommendations."
		],
		authority: "A1 — Proposal. Submit security findings, classifications, and revocation recommendations. No silent production change.",
		tools: [
			"Threat modeling.",
			"Attack simulation (governed).",
			"Classification review.",
			"Intelligence Contract (analysis)."
		],
		prohibited: [
			"Granting or escalating capabilities.",
			"Bypassing the Execution Broker to 'test' production.",
			"Modifying audit records (Article 10).",
			"Self-granting authority.",
			"Verifying its own remediations (Article 8)."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Repository",
		purpose: "Manage code repositories.",
		inputs: [
			"Approved architecture, schema, and implementation plans.",
			"Capability tokens scoped to a product repository and environment.",
			"Human and governance approvals for writes."
		],
		outputs: ["Repository-change proposals and, when authorized, governed patches via Execution Broker.", "Workspace file-operation results (still unverified until Verification runs)."],
		authority: "A1 — Proposal. Submit repository and code-change proposals. Execution only through the Execution Broker under a scoped token.",
		tools: [
			"Repository operations (governed).",
			"Workspace file operations via Execution Broker.",
			"Intelligence Contract (code generation)."
		],
		prohibited: [
			"Direct access to production systems (Article 6).",
			"Execution outside isolated workspaces.",
			"Bypassing the Execution Broker.",
			"Cross-product repository access by default (Article 14).",
			"Self-granting authority or capability escalation (Article 5)."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "QA",
		purpose: "Design and execute tests.",
		inputs: [
			"Approved requirements, architecture, and implementation artifacts.",
			"Constitutional invariant list.",
			"Test-scope capability tokens."
		],
		outputs: [
			"Test-design proposals.",
			"Governed test-run results (not independent verification).",
			"Coverage notes against invariants and gates."
		],
		authority: "A1 — Proposal. Submit test designs and request governed test execution. QA execution is not independent verification (Article 8).",
		tools: [
			"Test generation.",
			"Unit, integration, and E2E runners via Execution Broker.",
			"Intelligence Contract (code generation, analysis)."
		],
		prohibited: [
			"Serving as independent verification of work the same agent designed or ran as the executor.",
			"Treating a green suite as evidence of constitutional compliance without the Verification Agent.",
			"Skipping tests for consequential actions (Article 7).",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Verification",
		purpose: "Independently verify outcomes.",
		inputs: [
			"Execution results from other agents.",
			"Declared verification requirements.",
			"Constitutional invariants.",
			"Candidate evidence (tests, configs, scans, deployment artifacts)."
		],
		outputs: [
			"Independent verification results.",
			"Evidence packages (E1–E4 as required by risk class).",
			"Gate certifications.",
			"Unverified flags and promotion blocks."
		],
		authority: "A2 — Governed in-scope action with duty=verify. Independent verification within pre-approved scope. Not product implementation execution. A2 is not an execution grant.",
		tools: [
			"Verification engine.",
			"Independent test, build, deployment, and compliance checkers.",
			"Evidence collection.",
			"Intelligence Contract (analysis only; outputs remain proposals until verification records are written)."
		],
		prohibited: [
			"Verifying work this agent performed (Article 8).",
			"Surface-level-only checks presented as independent verification.",
			"Implementing product features.",
			"Promoting unverified outcomes.",
			"Self-granting authority or raising its own autonomy (Article 12)."
		],
		confidence: "Declared on every output; never a substitute for authority or for evidence (Articles 3 and 9).",
		autonomy: "A2"
	},
	{
		k: "agent",
		name: "Deployment",
		purpose: "Manage deployments.",
		inputs: [
			"Verified build artifacts.",
			"Deployment approval (human for HIGH/CRITICAL).",
			"Environment references from the Product Passport.",
			"Scoped capability tokens for the target environment."
		],
		outputs: [
			"Deployment proposals and governed deployment requests.",
			"Environment-change records.",
			"Post-deployment verification requests to the Verification Agent."
		],
		authority: "A1 — Proposal. Submit deployment plans and request governed execution. Production deploy requires human approval (HIGH/CRITICAL).",
		tools: [
			"Deployment system (via Execution Broker).",
			"Environment management (scoped).",
			"Intelligence Contract (planning)."
		],
		prohibited: [
			"Deploying without verification evidence (Articles 7 and 8).",
			"Deploying to an environment outside token scope.",
			"Skipping post-deployment verification.",
			"Cross-environment capability use by default (Article 14).",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Operations",
		purpose: "Monitor and manage operations.",
		inputs: [
			"Running-product telemetry (scoped).",
			"Incident reports.",
			"Compliance and lifecycle state from the Product Passport.",
			"Recovery-procedure definitions."
		],
		outputs: [
			"Operational briefings and incident proposals.",
			"Monitoring and compliance observations as PROPOSALS.",
			"Escalations for freeze, rollback, or restore (do not execute CRITICAL recovery unaided)."
		],
		authority: "A1 — Proposal. Submit operational and incident proposals. Freeze, rollback, and restore require authorized recovery paths (Article 15).",
		tools: [
			"Monitoring.",
			"Incident workflow.",
			"Compliance observations.",
			"Intelligence Contract (analysis)."
		],
		prohibited: [
			"Unaudited recovery actions (Article 15).",
			"Recovery that bypasses governance.",
			"Cross-tenant operational access by default.",
			"Self-granting authority.",
			"Treating absence of alerts as evidence of correctness (Article 9)."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A1"
	},
	{
		k: "agent",
		name: "Financial Intelligence",
		purpose: "Advise on cost, budget, and financial risk of governed product work. Intelligence only — not authority.",
		inputs: [
			"Product Passport and plan estimates.",
			"Verified operational usage where available.",
			"Human financial constraints."
		],
		outputs: ["Cost and budget recommendations as PROPOSALS.", "Financial-risk notes attached to plans."],
		authority: "A0 — Advisory. Recommendations only. No execution authority and no proposal-execution path of its own.",
		tools: [
			"Cost analysis.",
			"Budget modeling.",
			"Intelligence Contract (analysis)."
		],
		prohibited: [
			"Executing spend or changing billing configuration.",
			"Treating financial advice as an authority source (Article 3).",
			"Auto-executing recommendations.",
			"Self-granting authority or autonomy (Article 12).",
			"Storing unverified financial claims as institutional knowledge (Article 13)."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A0"
	},
	{
		k: "agent",
		name: "Legal/Compliance Intelligence",
		purpose: "Advise on legal, policy, and compliance posture against constitutional and external frameworks. Intelligence only — not authority.",
		inputs: [
			"Constitutional articles and policies.",
			"Product requirements and data-handling designs.",
			"Audit and evidence summaries."
		],
		outputs: [
			"Compliance gap analyses as PROPOSALS.",
			"Policy-mapping recommendations.",
			"Escalations to Human for HIGH/CRITICAL legal risk."
		],
		authority: "A0 — Advisory. Recommendations only. No execution authority. Cannot amend governance or the Constitution.",
		tools: [
			"Policy mapping.",
			"Compliance checklists.",
			"Intelligence Contract (analysis)."
		],
		prohibited: [
			"Amending the Constitution or governance rules (Article 11).",
			"Certifying compliance without independent verification and evidence.",
			"Auto-executing remediations.",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A0"
	},
	{
		k: "agent",
		name: "Research Intelligence",
		purpose: "Research options, prior art, and comparative approaches to inform proposals. Intelligence only — not authority.",
		inputs: [
			"Research questions from Human or other agents' proposals.",
			"Verified institutional knowledge from Memory.",
			"Declared unknowns and assumptions from Requirements."
		],
		outputs: [
			"Research briefs as PROPOSALS.",
			"Sourced comparisons.",
			"Knowledge candidates that still require verification before Memory accepts them."
		],
		authority: "A0 — Advisory. Recommendations only. No execution authority.",
		tools: ["Literature and comparative analysis.", "Intelligence Contract (reasoning, analysis)."],
		prohibited: [
			"Writing unverified claims into Memory (Article 13).",
			"Treating research as a command or as architecture approval.",
			"Auto-executing recommended tools or vendors.",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority or for evidence (Articles 3 and 9).",
		autonomy: "A0"
	},
	{
		k: "agent",
		name: "Performance Intelligence",
		purpose: "Advise on performance characteristics, capacity, and optimization. Intelligence only — not authority.",
		inputs: [
			"Verified performance measurements where they exist.",
			"Architecture and deployment proposals.",
			"Declared performance requirements."
		],
		outputs: [
			"Performance analyses as PROPOSALS.",
			"Optimization recommendations.",
			"Requests for governed performance-test execution (does not run them as independent verification)."
		],
		authority: "A0 — Advisory. Recommendations only. No execution authority.",
		tools: [
			"Performance analysis.",
			"Capacity modeling.",
			"Intelligence Contract (analysis)."
		],
		prohibited: [
			"Changing production configuration to 'tune' performance.",
			"Treating absence of slowdown reports as evidence of correctness (Article 9).",
			"Self-verifying its own optimization claims (Article 8).",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A0"
	},
	{
		k: "agent",
		name: "Reliability Intelligence",
		purpose: "Advise on reliability, SLOs, failure modes, and recovery readiness. Intelligence only — not authority.",
		inputs: [
			"Incident history (audit-backed).",
			"Recovery-procedure definitions.",
			"Verified operational outcomes.",
			"Architecture proposals."
		],
		outputs: [
			"Reliability and SLO recommendations as PROPOSALS.",
			"Failure-mode analyses.",
			"Recovery-test recommendations for Human and Recovery System."
		],
		authority: "A0 — Advisory. Recommendations only. No execution authority. Cannot freeze, roll back, or restore.",
		tools: [
			"SLO/SLI analysis.",
			"Failure-mode analysis.",
			"Intelligence Contract (analysis)."
		],
		prohibited: [
			"Executing freeze, rollback, or restore (Article 15 — recovery is constitutional and authorized separately).",
			"Unaudited recovery advice applied as action.",
			"Operating-without-recovery-procedures recommendations that weaken governance.",
			"Self-granting authority."
		],
		confidence: "Declared on every output; never a substitute for authority (Article 3).",
		autonomy: "A0"
	}
];
var LAYERS = [
	{
		k: "layer",
		name: "Human",
		purpose: "Sovereign authority. Humans remain ultimately accountable for AGBOFA's existence, operation, and major consequential actions.",
		responsibilities: [
			"Approve or reject all HIGH and CRITICAL risk actions.",
			"Hold emergency freeze authority at all times.",
			"Record overrides of agent recommendations with rationale.",
			"Approve constitutional amendments, autonomy increases, and gate certifications.",
			"Authorize recovery restore and system-wide freeze."
		],
		inputs: [
			"Agent proposals and recommendations.",
			"Risk classifications from the Trust Kernel.",
			"Evidence packages and gate certifications.",
			"Incident reports, freeze alerts, and isolation-breach alerts."
		],
		outputs: [
			"Human approvals and rejections.",
			"Emergency freeze orders.",
			"Override records with rationale.",
			"Constitutional amendment approvals.",
			"Autonomy grant and revocation decisions."
		],
		permissions: [
			"Emergency freeze.",
			"HIGH and CRITICAL approval.",
			"Constitutional amendment.",
			"Autonomy grants above A0.",
			"Recovery restore from backup."
		],
		prohibited: [
			"Delegating or diminishing human accountability (Article 1).",
			"Silent or unrecorded overrides of agent recommendations.",
			"Vacating freeze authority.",
			"Granting autonomy without evidence (Article 12)."
		],
		dependencies: [
			"Constitution",
			"Governance",
			"Authority",
			"Audit"
		],
		data: [
			"Human owner identity.",
			"Approval and rejection records.",
			"Override rationales.",
			"Freeze orders.",
			"Amendment approvals."
		],
		failures: [
			"No designated human owner.",
			"Freeze authority vacancy.",
			"HIGH or CRITICAL action proceeding without human approval.",
			"Unrecorded human override."
		],
		security: [
			"Human identity is verified independently of any agent.",
			"CRITICAL actions may require dual-control where policy so requires.",
			"Freeze capability is testable and always reachable."
		],
		audit: [
			"Every human decision is recorded: who, when, why, what was approved or rejected.",
			"Overrides are linked to the agent recommendation they supersede.",
			"Freeze and restore actions are hash-chained audit events."
		]
	},
	{
		k: "layer",
		name: "Constitution",
		purpose: "Supreme governing law of AGBOFA. No agent, model, subsystem, or process may violate it.",
		responsibilities: [
			"Define permanent architectural principles and the sixteen articles.",
			"Define autonomy levels A0, A1, and A2 and the evidence required to earn them.",
			"Define risk classifications CRITICAL, HIGH, MEDIUM, and LOW.",
			"Version constitutional text and bind it as machine-readable contracts.",
			"Reject any change that weakens governance (Article 11)."
		],
		inputs: [
			"Human-approved amendment proposals.",
			"Constitutional review findings.",
			"Impact analyses from Architecture."
		],
		outputs: [
			"Versioned constitutional contracts.",
			"Invariant definitions consumed by the Trust Kernel.",
			"Autonomy and risk classification tables.",
			"Amendment history."
		],
		permissions: [
			"Declare law.",
			"Bind invariants that all lower layers must enforce.",
			"Require human approval for any amendment."
		],
		prohibited: [
			"Amendment without human approval.",
			"Amendment that weakens governance.",
			"Silent modification of articles, principles, or autonomy rules.",
			"Agent-originated constitutional change (Article 11)."
		],
		dependencies: ["Human"],
		data: [
			"Articles and principles.",
			"Autonomy level definitions (A0, A1, A2).",
			"Risk classification table.",
			"Amendment log and constitutional version."
		],
		failures: [
			"Constitution not loadable or not versioned.",
			"Invariant not encoded as a machine-readable contract.",
			"Drift between published text and enforced contracts."
		],
		security: [
			"Constitution repository is access-controlled and append-versioned.",
			"Only human-approved writes are accepted.",
			"Integrity of the constitutional freeze record is hash-verified."
		],
		audit: ["Every constitutional version is frozen with a hash and human sign-off.", "Amendment process steps are individually audited (proposal through evidence)."]
	},
	{
		k: "layer",
		name: "Governance",
		purpose: "Policy and rule engine. Evaluates proposals against the Constitution before any authority is granted.",
		responsibilities: [
			"Evaluate every proposal for constitutional compliance and risk class.",
			"Route HIGH and CRITICAL actions to human approval.",
			"Version and store governance rules in the Constitution repository.",
			"Reject governance changes originating from governed agents (Article 11).",
			"Record every authority grant as an audit event (Article 2)."
		],
		inputs: [
			"Proposals from Intelligence and Planning.",
			"Constitutional contracts and risk table.",
			"Human approvals and rejections.",
			"Evidence of prior governed operation for autonomy decisions."
		],
		outputs: [
			"Governance decisions (allow, deny, escalate).",
			"Risk classifications.",
			"Versioned policy records.",
			"Authority-grant requests to the Authority layer."
		],
		permissions: [
			"Classify risk.",
			"Evaluate policy.",
			"Request authority grants that originate from an authorized governance source.",
			"Escalate to Human."
		],
		prohibited: [
			"Granting authority that did not originate from an authorized governance source (Article 2).",
			"Accepting a governed agent's self-modification of rules (Article 11).",
			"Auto-executing AI recommendations (Article 3).",
			"Default-allow (Article 4)."
		],
		dependencies: ["Human", "Constitution"],
		data: [
			"Policy definitions.",
			"Risk classification records.",
			"Governance decision log.",
			"Rule versions."
		],
		failures: [
			"Policy engine unavailable.",
			"Proposal advancing without a governance decision.",
			"Rule change without human approval."
		],
		security: [
			"Governed agents cannot write governance rules that apply to themselves.",
			"Policy evaluation is deterministic and replayable from audit.",
			"Unauthorized governance sources are rejected by the Authority System."
		],
		audit: ["Every proposal evaluation is an audit event: policy version, risk class, decision, authority requested.", "Governance rule versions are hash-chained."]
	},
	{
		k: "layer",
		name: "Authority",
		purpose: "Explicit grant system. Every consequential action requires an identifiable, traceable authority source.",
		responsibilities: [
			"Issue, delegate, and revoke authority grants.",
			"Maintain authority chains traceable to a human or constitutional source.",
			"Bind each grant to scope, duration, and revocation conditions (Article 4).",
			"Reject implicit authority, default-allow, and self-grants (Articles 2 and 4).",
			"Refuse any grant that does not originate from an authorized governance source."
		],
		inputs: [
			"Governance decisions.",
			"Human approvals.",
			"Revocation requests from Security, Trust Kernel, or Human.",
			"Expiry and scope of existing grants."
		],
		outputs: [
			"Authority chains attached to actions.",
			"Grant, delegation, and revocation records.",
			"Rejection of invalid grants."
		],
		permissions: [
			"Issue scoped authority.",
			"Delegate within an existing grant's bounds.",
			"Revoke any grant."
		],
		prohibited: [
			"Implicit authority.",
			"\"The agent knew what to do\" as an authority source.",
			"Default allow.",
			"Agent self-grant.",
			"External system directly granting authority inside AGBOFA."
		],
		dependencies: [
			"Human",
			"Constitution",
			"Governance"
		],
		data: [
			"Authority grants.",
			"Delegation graph.",
			"Revocation list.",
			"Authority chain snapshots."
		],
		failures: [
			"Action presented without an authority chain.",
			"Chain that does not trace to a human or constitutional source.",
			"Grant past its duration or outside its scope."
		],
		security: [
			"Authority System rejects grants from unauthorized sources.",
			"Chains are tamper-evident and stored with the audit event.",
			"Revocation is immediate and globally visible to Capability and Execution."
		],
		audit: ["Every grant, delegation, and revocation is an audit event.", "Every consequential action records its full authority chain."]
	},
	{
		k: "layer",
		name: "Capabilities",
		purpose: "Scoped token system. An actor can only perform actions for which it possesses the required capability.",
		responsibilities: [
			"Issue short-lived capability tokens with explicit scope, environment, and expiry (Article 5).",
			"Validate tokens on every execution attempt.",
			"Reject missing, expired, or out-of-scope tokens.",
			"Refuse capability reuse across product boundaries by default (Article 14).",
			"Revoke tokens on abuse, isolation breach, or autonomy reduction."
		],
		inputs: [
			"Valid authority chains.",
			"Requested capability name, product, environment, and resource.",
			"Constraints (max duration, max operations, allowed commands)."
		],
		outputs: [
			"Capability tokens.",
			"Validation results.",
			"Revocation records.",
			"Scope-violation rejections."
		],
		permissions: [
			"Issue tokens only against a valid authority chain.",
			"Validate and expire tokens.",
			"Revoke tokens."
		],
		prohibited: [
			"Broad capabilities such as \"agent has access to everything\".",
			"Capability escalation without governance approval.",
			"Capability reuse across product boundaries by default.",
			"Renewal except through governance."
		],
		dependencies: [
			"Authority",
			"Governance",
			"Constitution"
		],
		data: [
			"Token records (tokenId, capability, scope, grantedTo, grantedBy, issuedAt, expiresAt, constraints).",
			"Revocation list.",
			"Scope catalogue."
		],
		failures: [
			"Execution attempted with missing, expired, or out-of-scope token.",
			"Token forged or replayed.",
			"Cross-product token accepted."
		],
		security: [
			"Tokens are unforgeable, short-lived, and bound to agent, product, and environment.",
			"Isolation Guard consults token scope before any cross-boundary access.",
			"Forged or escalated tokens are blocked and audited (Gate 3)."
		],
		audit: ["Issuance, validation, rejection, and revocation are audit events.", "Each execution records the tokenId and scope used."]
	},
	{
		k: "layer",
		name: "Intelligence",
		purpose: "AI provider abstraction. Intelligence proposes; it never is authority (Article 3, Article 16).",
		responsibilities: [
			"Expose all model access through the Intelligence Contract.",
			"Keep provider adapters pluggable and versioned.",
			"Admit every AI output as a PROPOSAL, never as a command.",
			"Make the distinction between intelligence and authority explicit in every agent interaction.",
			"Refuse direct provider access that bypasses the abstraction layer."
		],
		inputs: [
			"Agent context and tasks from the Agent Runtime.",
			"Provider-agnostic contract calls.",
			"Constitutional constraints (no training on data, isolation, audit logging)."
		],
		outputs: [
			"Recommendations, plans, and generated artifacts labeled as PROPOSALS.",
			"Declared confidence that never substitutes for authority.",
			"Provider-adapter health and contract-version records."
		],
		permissions: [
			"Call providers only through the Intelligence Contract.",
			"Produce proposals.",
			"Declare confidence."
		],
		prohibited: [
			"Treating AI outputs as commands.",
			"Auto-executing recommendations without governance evaluation.",
			"Substituting AI confidence for authority.",
			"Hard-coding provider-specific APIs in core AGBOFA components.",
			"Treating any provider as irreplaceable."
		],
		dependencies: [
			"Constitution",
			"Governance",
			"Authority",
			"Capabilities"
		],
		data: [
			"Intelligence Contract records.",
			"Provider adapter versions.",
			"Agent registry and roles.",
			"Proposal objects."
		],
		failures: [
			"Direct provider call bypassing the contract.",
			"Proposal emitted without an authority-chain placeholder (must be filled by Governance).",
			"Core component depending on a provider-specific feature."
		],
		security: [
			"Data isolation and no-training-on-data flags are contract-enforced.",
			"Provider switching does not require core changes.",
			"Prompt-injection handling is a verification concern, not an authority grant."
		],
		audit: ["Every contract call records provider, contract version, agent, task, and that the output is a proposal.", "Direct provider-access attempts are architecture-violation flags (Article 16)."]
	},
	{
		k: "layer",
		name: "Planning",
		purpose: "Governed action plans. Turns approved intent into sequenced, classifiable actions — still proposals until governance and authority attach.",
		responsibilities: [
			"Produce implementation plans from approved blueprints and architecture.",
			"Classify each planned action and attach intended risk class.",
			"Sequence work so verification and evidence gates are explicit steps, not afterthoughts.",
			"Hand plans to Governance before any execution is requested.",
			"Never treat a plan as an authority source (Article 4)."
		],
		inputs: [
			"Approved product specifications, blueprints, and architecture proposals.",
			"Requirements, domain models, and Product Passport references.",
			"Policy and risk tables."
		],
		outputs: [
			"Governed action plans.",
			"Per-step action classifications.",
			"Declared verification and evidence requirements per step."
		],
		permissions: [
			"Draft plans.",
			"Propose action sequences.",
			"Attach intended risk and verification requirements."
		],
		prohibited: [
			"Executing a plan.",
			"Using the plan itself as an authority source.",
			"Omitting verification steps for consequential actions (Article 7).",
			"Planning cross-tenant or cross-environment work without explicit authorization (Article 14)."
		],
		dependencies: [
			"Intelligence",
			"Governance",
			"Constitution",
			"Capabilities"
		],
		data: [
			"Action plans.",
			"Step classifications.",
			"Verification requirements per step.",
			"Plan versions."
		],
		failures: [
			"Plan advancing to execution without governance evaluation.",
			"Consequential step without a verification requirement.",
			"Plan that assumes implicit authority."
		],
		security: ["Plans are scoped to a product and environment.", "Plan objects cannot carry capability tokens; tokens are issued later against authority."],
		audit: ["Plan creation, version, and governance evaluation are audit events.", "Each planned consequential step records its intended authority and verification path."]
	},
	{
		k: "layer",
		name: "Execution",
		purpose: "Isolated broker and workspace. Intelligence never receives unrestricted execution access (Article 6).",
		responsibilities: [
			"Admit execution only through the Execution Broker.",
			"Allocate isolated workspaces with resource limits, timeouts, and failure handling.",
			"Require a valid authority chain and an in-scope capability token before running anything.",
			"Reject any direct execution attempt that bypasses the governance chain.",
			"Return results as claims that still require independent verification (Article 7)."
		],
		inputs: [
			"Governance-approved actions.",
			"Authority chains.",
			"Capability tokens.",
			"Human approvals where risk class requires them."
		],
		outputs: [
			"Workspace-scoped results.",
			"Execution status (success, failure, rejected, error).",
			"Resource-usage and timeout records."
		],
		permissions: [
			"Run approved actions inside isolated workspaces.",
			"Enforce limits and timeouts.",
			"Quarantine an agent that attempts bypass."
		],
		prohibited: [
			"Direct agent access to production systems.",
			"Execution outside isolated workspaces.",
			"Bypassing the Execution Broker.",
			"Treating execution as proof of correctness (Article 7)."
		],
		dependencies: [
			"Authority",
			"Capabilities",
			"Governance",
			"Planning"
		],
		data: [
			"Workspace records.",
			"Worker assignments.",
			"Execution results.",
			"Limit and timeout configurations."
		],
		failures: [
			"Bypass attempt.",
			"Workspace escape.",
			"Runaway agent (rate limit must fire).",
			"Result promoted without verification."
		],
		security: [
			"Workspaces are tenant-, product-, and environment-scoped.",
			"Production credentials are never issued to agents as broad capabilities.",
			"Quarantine isolates a violating agent from further execution."
		],
		audit: ["Every execution records actor, authority, capability, product, environment, action, result.", "Bypass and quarantine events are security alerts."]
	},
	{
		k: "layer",
		name: "Verification",
		purpose: "Independent validation. Important outcomes must be verified by a component that did not perform the action (Articles 7 and 8).",
		responsibilities: [
			"Verify functional correctness and constitutional compliance.",
			"Run dedicated verification for builds, tests, deployments, and data operations.",
			"Produce evidence that is stored and auditable.",
			"Block outcomes that lack independent verification from advancing.",
			"Flag consequential actions that have no verification evidence."
		],
		inputs: [
			"Execution results.",
			"Declared verification requirements from Planning.",
			"Constitutional invariants.",
			"Test, build, security, and deployment artifacts."
		],
		outputs: [
			"Verification results (pass, fail, unverified).",
			"Evidence packages at the required evidence level (E1–E4).",
			"Promotion or block decisions for the next lifecycle stage."
		],
		permissions: [
			"Read execution artifacts within the same product and environment scope.",
			"Invoke independent test, build, and compliance checkers.",
			"Mark outcomes unverified and block promotion."
		],
		prohibited: [
			"Agents verifying their own work.",
			"Verification by the same component that performed the action.",
			"Verification that only checks surface-level success.",
			"Skipping verification for consequential actions."
		],
		dependencies: [
			"Execution",
			"Constitution",
			"Evidence"
		],
		data: [
			"Verification results.",
			"Evidence-level assignments (E0 is unacceptable).",
			"Block and re-execution records."
		],
		failures: [
			"Self-verification accepted.",
			"Surface-level-only check treated as independent verification.",
			"Consequential action lacking verification evidence."
		],
		security: [
			"Verifier identity is distinct from executor identity.",
			"Verification agents operate at autonomy A2 only within pre-approved verification scope.",
			"Isolation Guard still applies to verifier access."
		],
		audit: ["Every verification records method, result, verifier identity, and evidenceId.", "Unverified consequential actions are flagged and cannot be used for decision-making."]
	},
	{
		k: "layer",
		name: "Evidence",
		purpose: "Immutable proof store. Claims about system state require evidence; trust is earned, not assumed (Article 9).",
		responsibilities: [
			"Store evidence with provenance for every consequential claim.",
			"Prefer machine-verifiable evidence.",
			"Hash evidence objects and bind them to the originating action and verification.",
			"Refuse claims that lack evidence; mark them unverified.",
			"Never treat absence of errors as evidence of correctness."
		],
		inputs: [
			"Verification results.",
			"Test outputs, configuration snapshots, security scans, independent-verification packages.",
			"Provenance (actor, action, product, environment, timestamp)."
		],
		outputs: [
			"Evidence records with hashes and provenance.",
			"Unverified-claim markers.",
			"Evidence packages referenced by audit events."
		],
		permissions: [
			"Append evidence.",
			"Validate evidence hashes.",
			"Serve evidence to Audit, Memory, and Human review."
		],
		prohibited: [
			"Accepting agent assertions without evidence.",
			"Treating absence of errors as evidence of correctness.",
			"Storing claims without supporting evidence.",
			"Silent modification of stored evidence."
		],
		dependencies: ["Verification", "Audit"],
		data: [
			"Evidence objects.",
			"Hashes and provenance.",
			"Evidence-level tags (E1–E4).",
			"Links to verification and audit events."
		],
		failures: [
			"Claim used for decision-making without evidence.",
			"Evidence hash mismatch.",
			"E0 (agent assertion only) accepted for any consequential claim."
		],
		security: [
			"Evidence store is append-oriented and integrity-checked.",
			"Write access is limited to Verification and designated collectors.",
			"Tamper attempts escalate as security alerts."
		],
		audit: ["Every evidence write records who, what action, what was verified, and the hash.", "EvidenceIds appear on the corresponding audit events."]
	},
	{
		k: "layer",
		name: "Audit",
		purpose: "Append-only, tamper-evident trail. Consequential actions create durable audit records (Article 10).",
		responsibilities: [
			"Generate an audit event for every consequential action.",
			"Keep the log append-only and hash-chained.",
			"Record who, which agent, which authority, which capability, which product, which environment, what action, when, why, what happened, what was verified, and what evidence exists.",
			"Detect tampering with timestamps, hashes, or chains and trigger a security alert.",
			"Refuse any audit bypass."
		],
		inputs: ["Events from every layer: Human, Governance, Authority, Capabilities, Execution, Verification, Evidence, Recovery.", "Previous hash for chain continuity."],
		outputs: [
			"Append-only audit events.",
			"Tamper-detection alerts.",
			"Queryable trail for Human, Compliance, and Recovery."
		],
		permissions: [
			"Append events.",
			"Hash-chain events.",
			"Detect and alert on tamper."
		],
		prohibited: [
			"Audit record modification or deletion.",
			"Audit bypass for any reason.",
			"Tampering with audit timestamps, hashes, or chains."
		],
		dependencies: ["Constitution", "Evidence"],
		data: [
			"AuditEvent records (eventId, timestamp, actor, action, authority, capability, target, result, verification, hash, previousHash).",
			"Hash chain.",
			"Tamper alerts."
		],
		failures: [
			"Missing audit event for a consequential action.",
			"Broken hash chain.",
			"Detected modification or deletion."
		],
		security: [
			"Write path is append-only at the storage layer.",
			"Tamper detection triggers system freeze and security investigation (Article 10).",
			"Read access is governed; write access is not available to governed agents."
		],
		audit: ["The audit layer audits itself: chain verification jobs and freeze events are themselves audit events."]
	},
	{
		k: "layer",
		name: "Memory",
		purpose: "Verified knowledge only. AI saying something does not become AGBOFA knowledge (Article 13).",
		responsibilities: [
			"Accept knowledge candidates only after verification evidence exists.",
			"Link every stored knowledge item to its evidence and originating verified outcome.",
			"Version knowledge and keep it auditable.",
			"Reject unverified claims and AI-confidence-as-validity.",
			"Serve verified knowledge to future decision support — never as authority."
		],
		inputs: [
			"Verified outcomes from Verification.",
			"Evidence records from Evidence.",
			"Knowledge-candidate proposals from Intelligence and Learning."
		],
		outputs: [
			"Versioned institutional knowledge items.",
			"Rejections of unverified candidates.",
			"Knowledge references for Planning and Human review."
		],
		permissions: [
			"Store verified knowledge.",
			"Reject unverified candidates.",
			"Version and retrieve knowledge."
		],
		prohibited: [
			"Direct promotion of AI outputs to knowledge without verification.",
			"Treating AI confidence as knowledge validity.",
			"Storing unverified claims in institutional memory."
		],
		dependencies: [
			"Verification",
			"Evidence",
			"Audit",
			"Constitution"
		],
		data: [
			"Knowledge candidates.",
			"Validated knowledge items with evidence links.",
			"Knowledge versions."
		],
		failures: [
			"Unverified candidate stored.",
			"Knowledge item without an evidence link.",
			"Confidence score used as a validity bit."
		],
		security: ["Write path requires a verification evidenceId.", "Knowledge is tenant- and product-scoped unless explicitly authorized otherwise."],
		audit: ["Every accept and reject of a knowledge candidate is an audit event.", "Knowledge versions record evidenceId and verifier."]
	},
	{
		k: "layer",
		name: "Learning",
		purpose: "Institutional growth from verified outcomes only. Learning never grants authority or weakens governance.",
		responsibilities: [
			"Propose improvements from verified outcomes stored in Memory.",
			"Feed future Planning and Human briefing — as proposals, not commands.",
			"Never convert an AI assumption into institutional knowledge merely because it was generated (Article 13).",
			"Never increase autonomy from self-assessment (Article 12).",
			"Subject learning-driven change to the same governance, verification, and audit path as any other change."
		],
		inputs: [
			"Institutional knowledge from Memory.",
			"Verified outcomes and evidence.",
			"Operational metrics that have passed verification."
		],
		outputs: [
			"Improvement proposals.",
			"Knowledge-candidate submissions back to Memory (still requiring verification).",
			"Briefings for Human and Planning."
		],
		permissions: [
			"Propose improvements.",
			"Submit knowledge candidates.",
			"Summarize verified history."
		],
		prohibited: [
			"Auto-executing learned changes.",
			"Autonomy increase from learning alone.",
			"Writing governance rules or constitutional text.",
			"Bypassing verification because a pattern 'has been seen before'."
		],
		dependencies: [
			"Memory",
			"Evidence",
			"Verification",
			"Governance",
			"Intelligence"
		],
		data: [
			"Improvement proposals.",
			"Learning-cycle records linked to verified outcomes.",
			"Rejected unverified generalizations."
		],
		failures: [
			"Learned change applied without governance.",
			"Unverified generalization stored as knowledge.",
			"Self-assessed autonomy increase."
		],
		security: ["Learning has no execution capability of its own.", "Outputs re-enter the system as PROPOSALS (Article 3)."],
		audit: ["Every learning proposal records the verified outcomes it cites.", "Rejected unverified generalizations are audited so they are not retried as facts."]
	}
];
function s$4(id, num, nav, title, dek, v1, v2) {
	return {
		id,
		part: "Operating model",
		partId: "C",
		num,
		nav,
		title,
		dek,
		v1,
		...v2 ? { v2 } : {}
	};
}
var PART_C = [
	s$4("c1", "C.1", "Daily", "Daily operating rhythm", "Eight hours. Brief, implement, assemble, test, attack, freeze.", [{
		k: "p",
		t: "The daily rhythm is how humans and agents share a clock without sharing authority. Architecture decides what should exist before agents generate. Evidence is frozen before the day closes."
	}, {
		k: "table",
		cols: [
			"Time",
			"Activity",
			"Hours",
			"Purpose"
		],
		rows: [
			[
				"08:00–09:00",
				"Architecture & Command Briefing",
				"1.0",
				"Decide what should exist"
			],
			[
				"09:00–11:30",
				"AI Agent Implementation",
				"2.5",
				"Agents generate and modify systems"
			],
			[
				"11:30–13:00",
				"Assembly & Integration",
				"1.5",
				"Connect components"
			],
			[
				"14:00–15:30",
				"Testing & Validation",
				"1.5",
				"Prove functionality"
			],
			[
				"15:30–16:15",
				"Security & Governance Verification",
				"0.75",
				"Attack and verify controls"
			],
			[
				"16:15–17:00",
				"Evidence & Daily Freeze",
				"0.75",
				"Preserve decisions and evidence"
			],
			[
				"TOTAL",
				"",
				"8.0",
				""
			]
		]
	}]),
	s$4("c2", "C.2", "Weekly", "Weekly rhythm and six-day cycle", "Heavy assembly, then integration, then attack. Every block: plan, assemble, test, attack, verify, freeze.", [
		{
			k: "h",
			t: "Weekly rhythm",
			l: 2
		},
		{
			k: "table",
			cols: ["Days", "Mode"],
			rows: [
				["Monday–Thursday", "Heavy assembly"],
				["Friday", "Integration + testing"],
				["Saturday", "Security + verification + documentation"],
				["Sunday", "Light review / planning / recovery (2–4 hours)"]
			]
		},
		{
			k: "h",
			t: "Six-day work cycle",
			l: 2
		},
		{
			k: "p",
			t: "Each implementation block follows the same six beats. Skipping ATTACK or FREEZE is a process violation, not a schedule compression."
		},
		{
			k: "flow",
			steps: [
				"Plan",
				"Assemble",
				"Test",
				"Attack",
				"Verify",
				"Freeze"
			]
		}
	], [
		{
			k: "p",
			t: "The strike week is seven calendar days because the clock is 30, not 60. Throughput comes from five parallel tracks, not from abolishing freeze. Sunday still freezes evidence."
		},
		{
			k: "table",
			cols: ["Days", "Mode"],
			rows: [
				["Day 1–4 of each wave", "Heavy assembly on all five tracks"],
				["Day 5 of each wave", "Integration + testing + a gate if the cadence lands"],
				["Day 6 of each wave", "Attack + verification. Gate if the cadence lands."],
				["Day 7 of each wave", "Freeze, dossier, plan the next wave. Recovery window."]
			]
		},
		{
			k: "flow",
			steps: [
				"Plan",
				"Assemble",
				"Test",
				"Attack",
				"Verify",
				"Freeze"
			]
		},
		{
			k: "callout",
			tone: "warn",
			title: "Do not steal freeze to make the date",
			t: "Skipping ATTACK or FREEZE is a process violation. The 30-day clock then stops. The constitution does not get rewritten to match a slipped day."
		}
	]),
	s$4("c3", "C.3", "Gates", "Ten gates", "Gate 1 constitutional runtime through Gate 10 red-team certification. Gates are evidence, not dates.", [{
		k: "p",
		t: "A gate is a certification event with an evidence package. Passing a calendar day does not pass a gate. Gate numbers are delivery checkpoints; they are not autonomy grants, not maturity levels, and not document-issue numbers."
	}, {
		k: "table",
		cols: [
			"Gate",
			"Description",
			"Blocks covered"
		],
		rows: [
			[
				"Gate 1",
				"Constitutional Runtime works",
				"Block 1"
			],
			[
				"Gate 2",
				"Trust Kernel works",
				"Block 2"
			],
			[
				"Gate 3",
				"Authority / Capability security works",
				"Block 3"
			],
			[
				"Gate 4",
				"AI Agent runtime works",
				"Block 4"
			],
			[
				"Gate 5",
				"Product specification factory works",
				"Block 5"
			],
			[
				"Gate 6",
				"Controlled execution works",
				"Block 6"
			],
			[
				"Gate 7",
				"Independent verification works",
				"Block 7"
			],
			[
				"Gate 8",
				"Deployment lifecycle works",
				"Block 8"
			],
			[
				"Gate 9",
				"Multiple products remain isolated",
				"Block 9"
			],
			[
				"Gate 10",
				"Red-team certification passes",
				"Block 10"
			]
		]
	}], [{
		k: "p",
		t: "v5.3 binds gates to the 30-day waves. Blocks are historical freeze language. The architecture remains M0–M5. The increment is 30 days."
	}, {
		k: "table",
		cols: [
			"Gate",
			"Day",
			"Wave",
			"Description"
		],
		rows: [
			[
				"Gate 1",
				"3",
				"W1",
				"Constitutional runtime rejects unauthorized action. Identity records exist."
			],
			[
				"Gate 2",
				"6",
				"W1",
				"Trust Kernel deterministic class. Agent cannot act except through governance."
			],
			[
				"Gate 3",
				"9",
				"W2",
				"Authority System + Capability System: forged, expired, wrong-tenant tokens denied."
			],
			[
				"Gate 4",
				"12",
				"W2",
				"Agents submit AgentProposal only. Intelligence Contract, no direct execute."
			],
			[
				"Gate 5",
				"14",
				"W2",
				"Factory produces a governed ProductPassport."
			],
			[
				"Gate 6",
				"16",
				"W3",
				"Broker admit/deny. Isolation Guard bind. Container worker."
			],
			[
				"Gate 7",
				"19",
				"W3",
				"Independent verification. EvidenceEnvelope. AuditEvent.why required."
			],
			[
				"Gate 8",
				"21",
				"W3",
				"Product 1 deployed under passport after verify."
			],
			[
				"Gate 9",
				"25",
				"W4",
				"Product A cannot access Product B. Isolation Guard proven."
			],
			[
				"Gate 10",
				"30",
				"W4",
				"Constitutional adversarial tests pass. Recovery works. Increment certified — not M5."
			]
		]
	}]),
	s$4("c4", "C.4", "Layers", "Layer contracts", "Purpose, permissions, and failure modes for every layer in the stack.", [{
		k: "p",
		t: "The received freeze defined the stack in Part B and the rhythm in Part C. It did not publish a per-layer contract catalogue."
	}, {
		k: "callout",
		tone: "note",
		title: "Catalogue lives in the operative issue",
		t: "The layer-by-layer contract — purpose, responsibilities, inputs, outputs, permissions, prohibitions, dependencies, data, failures, security, audit — is issued in v5.1. Switch to the v5.1 operative issue to read it."
	}], [
		{
			k: "p",
			t: "The thirteen-layer stack is the operative operating-model map of AGBOFA. No layer may assume the authority of a layer above it. Intelligence never is authority."
		},
		{
			k: "callout",
			tone: "law",
			title: "Layer law",
			t: "Each layer's prohibitions are constitutional, not style. Autonomy grants named in a layer (A0, A1, A2) are agent autonomy, not enterprise maturity."
		},
		...LAYERS
	]),
	s$4("c5", "C.5", "Agents", "Agent catalogue", "Named agents, tools, prohibitions, and autonomy grants A0 / A1 / A2.", [{
		k: "p",
		t: "The received freeze listed initial agent roles in B.3 with L1 / L2 autonomy cells. It did not publish per-agent contracts (inputs, outputs, tools, prohibitions, confidence, autonomy)."
	}, {
		k: "callout",
		tone: "note",
		title: "Catalogue lives in the operative issue",
		t: "The agent-by-agent contract is issued in v5.1, using A0–A2 grants. Switch to the v5.1 operative issue to read it. L1 in the freeze is A1; L2 is A2."
	}], [
		{
			k: "p",
			t: "Every named agent is a role under the Intelligence Contract. Outputs are proposals unless a scoped A2 grant (Verification only, in this catalogue) authorizes governed execution of independent verification."
		},
		{
			k: "callout",
			tone: "law",
			title: "Autonomy in this catalogue",
			t: "A0 advisory intelligence. A1 proposal. A2 governed execution of independent verification within pre-approved scope. No agent in this catalogue is A3 or above. Confidence never substitutes for authority (Article 3)."
		},
		...AGENTS
	])
];
function s$3(id, num, nav, title, dek, v1, v2) {
	return {
		id,
		part: "Technical specification",
		partId: "D",
		num,
		nav,
		title,
		dek,
		v1,
		...v2 ? { v2 } : {}
	};
}
var REPO_TREE = `agbofa/
├── constitution/               # THE CONSTITUTION (supreme)
│   ├── articles/               # Each article as machine-readable contract
│   ├── principles/             # Permanent architectural principles
│   ├── amendments/             # Constitutional amendment process
│   └── version-control/        # Constitutional versioning
│
├── core/                       # AGBOFA CORE PLATFORM
│   ├── trust-kernel/           # Auth, governance, policy engine
│   ├── authority/              # Authority model, delegation, revocation
│   ├── capability/             # Capability tokens, scopes, expiry
│   ├── execution/              # Broker, workspace, workers, sandbox
│   ├── verification/           # Independent verification engine
│   ├── evidence/               # Evidence collection, hashing, storage
│   ├── audit/                  # Append-only audit log
│   └── recovery/               # Freeze, rollback, restore
│
├── intelligence/               # AI ABSTRACTION LAYER
│   ├── contract/               # Intelligence Contract (provider-agnostic)
│   ├── adapters/               # Provider adapters
│   ├── runtime/                # Agent runtime, context, task management
│   └── memory/                 # Institutional memory and learning
│
├── factory/                    # PRODUCT FACTORY
│   ├── discovery/              # Product discovery workflow
│   ├── requirements/           # Requirements engine
│   ├── blueprint/              # Product blueprint generation
│   ├── architecture/           # Architecture proposal system
│   └── planning/               # Implementation planning
│
├── products/                   # PRODUCTS BUILT BY AGBOFA
│   ├── product-a/
│   │   ├── passport.json       # Product Passport (identity contract)
│   │   ├── requirements/
│   │   ├── blueprint/
│   │   ├── source/
│   │   ├── evidence/
│   │   └── audit/
│   └── product-b/
│
├── operations/                 # ENTERPRISE OPERATIONS
│   ├── monitoring/
│   ├── incident/
│   ├── deployment/
│   └── compliance/
│
├── templates/                  # TECHNOLOGY TEMPLATES
│   ├── web-app/
│   ├── api-service/
│   └── database/
│
├── evidence/                   # AGBOFA'S OWN EVIDENCE
│   ├── daily-freezes/
│   ├── gate-certifications/
│   ├── red-team/
│   └── completion-matrix.json
│
└── command-center/             # AGBOFA COMMAND CENTER
    ├── api/
    ├── dashboard/
    └── cli/`;
var PASSPORT_V1 = `interface ProductPassport {
  productId: string;
  productName: string;
  tenantId: string;
  ownerId: string;
  version: string;
  lifecycleState: string;
  requirements: RequirementReference[];
  architecture: ArchitectureReference;
  technologyProfile: TechnologyProfile;
  database: DatabaseReference;
  repositories: RepositoryReference[];
  environments: EnvironmentReference[];
  deployments: DeploymentReference[];
  agents: AgentReference[];
  capabilities: CapabilityReference[];
  policies: PolicyReference[];
  auditHistory: AuditReference[];
  evidence: EvidenceReference[];
  incidents: IncidentReference[];
  recoveryState: RecoveryReference;
}`;
var PASSPORT_V2 = `interface ProductPassport {
  productId: string;
  productName: string;
  tenantId: string;
  ownerId: string;
  version: string;
  constitutionVersion: string;
  lifecycleState:
    | "idea"
    | "discovery"
    | "requirements"
    | "domain_model"
    | "passport"
    | "blueprint"
    | "architecture"
    | "human_approval"
    | "implementation"
    | "execution"
    | "build"
    | "test"
    | "security"
    | "verification"
    | "evidence"
    | "deployment_approval"
    | "deployment"
    | "post_deployment_verification"
    | "operations"
    | "learning"
    | "improvement"
    | "retirement";
  requirements: RequirementReference[];
  architecture: ArchitectureReference;
  technologyProfile: TechnologyProfile;
  database: DatabaseReference;
  repositories: RepositoryReference[];
  environments: EnvironmentReference[];
  deployments: DeploymentReference[];
  agents: AgentReference[];
  capabilities: CapabilityReference[];
  policies: PolicyReference[];
  auditHistory: AuditReference[];
  evidence: EvidenceReference[];
  incidents: IncidentReference[];
  recoveryState: RecoveryReference;
}`;
var CAPABILITY_TOKEN = `interface CapabilityToken {
  tokenId: string;
  capability: string;          // e.g., "repo.read"
  scope: {
    productId: string;
    environment: string;
    resource?: string;
  };
  grantedTo: {
    agentId: string;
    role: string;
  };
  grantedBy: {
    authorityChain: string[];
    humanApproval?: string;
  };
  issuedAt: string;
  expiresAt: string;
  constraints: {
    maxDuration?: number;
    maxOperations?: number;
    allowedCommands?: string[];
  };
}`;
var AUDIT_EVENT = `interface AuditEvent {
  eventId: string;
  timestamp: string;
  actor: {
    type: "human" | "agent" | "system";
    id: string;
    role?: string;
  };
  action: {
    type: string;
    classification: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    description: string;
  };
  authority: {
    chain: string[];
    token?: string;
    humanApproval?: string;
  };
  capability: {
    name: string;
    scope: string;
    tokenId?: string;
  };
  target: {
    productId?: string;
    environment?: string;
    resource?: string;
  };
  result: {
    status: "success" | "failure" | "rejected" | "error";
    details?: string;
  };
  verification: {
    performed: boolean;
    method?: string;
    result?: string;
    evidenceId?: string;
  };
  hash: string;
  previousHash: string;
}`;
var INTELLIGENCE_CONTRACT = `interface IntelligenceContract {
  contractId: string;
  version: string;
  provider: string;
  capabilities: {
    reasoning: boolean;
    codeGeneration: boolean;
    analysis: boolean;
    planning: boolean;
    toolUse: boolean;
  };
  constraints: {
    maxContextLength: number;
    maxOutputLength: number;
    timeoutMs: number;
    retryPolicy: RetryPolicy;
  };
  security: {
    dataIsolation: boolean;
    noTrainingOnData: boolean;
    auditLogging: boolean;
  };
}`;
var PART_D = [
	s$3("d1", "D.1", "Repository", "Repository structure", "Constitution at the root. Core, intelligence, factory, products, operations, evidence, command center.", [{
		k: "p",
		t: "The repository is itself a constitutional artifact. The Constitution directory is supreme. Products never import core internals that would let an agent self-grant authority."
	}, {
		k: "code",
		t: REPO_TREE
	}]),
	s$3("d2", "D.2", "Stack", "Technology stack", "TypeScript, Node 20, Postgres 16, SQLite, Drizzle, BullMQ, XState 5, Zod, Vitest, Playwright, Fastify, JWT and capability tokens, Docker Compose (phase 1), React and Vite.", [{
		k: "p",
		t: "The stack is chosen for type safety, explicit state, and auditable storage. Provider-specific AI SDKs do not appear in core. Phase 1 deployment is a single-node Docker Compose so the execution path remains inspectable."
	}, {
		k: "table",
		cols: [
			"Component",
			"Technology",
			"Rationale"
		],
		rows: [
			[
				"Language",
				"TypeScript (strict mode)",
				"Type safety, ecosystem maturity"
			],
			[
				"Runtime",
				"Node.js 20+",
				"Production-ready, widespread support"
			],
			[
				"Database (Primary)",
				"PostgreSQL 16",
				"Enterprise-grade, ACID compliance"
			],
			[
				"Database (Isolated)",
				"SQLite",
				"Lightweight test and workspace environments"
			],
			[
				"ORM",
				"Drizzle ORM",
				"SQL-first, TypeScript-native, lightweight"
			],
			[
				"Queue",
				"BullMQ (Redis-based)",
				"Production-ready job queue"
			],
			[
				"State management",
				"XState 5",
				"Explicit state machines, TypeScript-native"
			],
			[
				"Validation",
				"Zod",
				"Runtime validation, TypeScript inference"
			],
			[
				"Testing (Unit / Integration)",
				"Vitest",
				"Fast, modern, TypeScript-native"
			],
			[
				"Testing (E2E)",
				"Playwright",
				"Browser automation, cross-browser"
			],
			[
				"API framework",
				"Fastify",
				"High-performance, TypeScript-native"
			],
			[
				"Authentication",
				"Custom JWT + capability tokens",
				"Constitutional authority model"
			],
			[
				"Audit storage",
				"PostgreSQL + append-only tables",
				"Durable, queryable, hash-chained"
			],
			[
				"Containerization",
				"Docker + Docker Compose",
				"Consistent environments"
			],
			[
				"Deployment (Phase 1)",
				"Single-node Docker Compose",
				"Controlled, auditable"
			],
			[
				"CLI",
				"Commander.js",
				"Mature CLI framework"
			],
			[
				"Dashboard",
				"React + Vite",
				"Command center UI"
			],
			[
				"Documentation",
				"Markdown + OpenAPI 3.1",
				"Machine-readable API docs"
			]
		]
	}]),
	s$3("d3", "D.3", "Passport", "Product Passport", "Identity contract for every product. v5.1 binds constitutionVersion and a closed lifecycleState union.", [{
		k: "p",
		t: "Every product carries a Product Passport. The passport is the identity contract: tenant, owner, environments, agents, capabilities, evidence, recovery. The received freeze typed lifecycleState as an open string."
	}, {
		k: "code",
		t: PASSPORT_V1
	}], [
		{
			k: "p",
			t: "Every product carries a Product Passport. The operative issue adds constitutionVersion so a product is bound to a constitutional freeze, and closes lifecycleState to the factory union. An unknown state is a defect, not a feature."
		},
		{
			k: "callout",
			tone: "fix",
			title: "Closed lifecycle",
			t: "lifecycleState is a union of factory stages, not a free string. constitutionVersion records which constitutional issue the product is governed by. Neither field is an autonomy grant or a maturity certification."
		},
		{
			k: "code",
			t: PASSPORT_V2
		}
	]),
	s$3("d4", "D.4", "Tokens", "Capability token and audit event", "Scoped, short-lived capability. Append-only, hash-chained audit.", [
		{
			k: "h",
			t: "Capability token",
			l: 2
		},
		{
			k: "p",
			t: "An actor can only perform actions for which it possesses the required capability (Article 5). Tokens are short-lived, scoped to product and environment, and renewable only through governance."
		},
		{
			k: "code",
			t: CAPABILITY_TOKEN
		},
		{
			k: "h",
			t: "Audit event",
			l: 2
		},
		{
			k: "p",
			t: "Consequential actions create durable audit records (Article 10). Events are append-only and hash-chained. Modification, deletion, or bypass is a security incident."
		},
		{
			k: "code",
			t: AUDIT_EVENT
		}
	]),
	s$3("d5", "D.5", "Contract", "Intelligence Contract", "Provider-agnostic contract. Adapters for Claude, GPT, and Local are replaceable.", [{
		k: "p",
		t: "All intelligence access flows through the Intelligence Contract (Article 16). The contract names capabilities and constraints, not a vendor. Direct provider access from core is an architecture violation."
	}, {
		k: "code",
		t: INTELLIGENCE_CONTRACT
	}], [
		{
			k: "p",
			t: "All intelligence access flows through the Intelligence Contract (Article 16). The contract names capabilities and constraints, not a vendor. Direct provider access from core is an architecture violation."
		},
		{
			k: "code",
			t: INTELLIGENCE_CONTRACT
		},
		{
			k: "h",
			t: "Adapter path",
			l: 2
		},
		{
			k: "p",
			t: "Claude, GPT, and Local are adapters behind the contract. Naming them does not make them constitutional. Any adapter is replaceable without a core change. Switching adapters does not grant autonomy and does not raise maturity."
		},
		{
			k: "flow",
			steps: [
				"Agent task (proposal context)",
				"Intelligence Contract",
				"Adapter: Claude",
				"Adapter: GPT",
				"Adapter: Local",
				"Provider runtime",
				"Contracted output (PROPOSAL)",
				"Governance evaluation"
			]
		},
		{
			k: "callout",
			tone: "law",
			title: "No provider is irreplaceable",
			t: "Hard-coding provider-specific APIs in core AGBOFA components is prohibited. Provider switching is possible without core changes. The Execution Broker still rejects any action whose authority chain traces only to a model."
		}
	])
];
function s$2(id, num, nav, title, dek, v1, v2) {
	return {
		id,
		part: "Enterprise target architecture",
		partId: "E",
		num,
		nav,
		title,
		dek,
		v1,
		...v2 ? { v2 } : {}
	};
}
var PART_E = [
	s$2("e1", "E.1", "Maturity", "Enterprise maturity", "Platform capability scale. The freeze wrote L0–L5. The operative issue writes M0–M5. M is not A.", [
		{
			k: "p",
			t: "The received freeze published enterprise maturity as L0–L5. The same L prefix was used in A.4 for agent autonomy. That collision is a numbering defect. Read this table as platform maturity, not as an agent grant."
		},
		{
			k: "callout",
			tone: "note",
			title: "Numbering collision",
			t: "v5.1 splits the ladder. Autonomy is A0–A5. Maturity is M0–M5. Evidence stays E0–E4. An L number from the freeze is not usable until you know which table it came from."
		},
		{
			k: "table",
			cols: [
				"Level",
				"Name",
				"Description",
				"Key capabilities"
			],
			rows: [
				[
					"L0",
					"Constitutional Foundation",
					"Constitution defined, basic governance exists",
					"Trust Kernel, Authority, Capability"
				],
				[
					"L1",
					"Core Platform",
					"Platform can govern and execute",
					"Execution Broker, Verification, Evidence"
				],
				[
					"L2",
					"Product Factory",
					"Platform can build products",
					"Discovery, Requirements, Blueprint, Planning"
				],
				[
					"L3",
					"Multi-Product Ecosystem",
					"Multiple products managed simultaneously",
					"Tenant Isolation, Portfolio Management"
				],
				[
					"L4",
					"Enterprise Platform",
					"Enterprise-grade operations",
					"Monitoring, Incident, Compliance, Recovery"
				],
				[
					"L5",
					"Autonomous Governed Ecosystem",
					"Full governed autonomy",
					"Self-improvement, Advanced Learning"
				]
			]
		}
	], [
		{
			k: "p",
			t: "Enterprise maturity is the M scale. It describes what the platform can do, not what an individual agent may do. Day-30 certification is M4, not a claim of M5."
		},
		{
			k: "callout",
			tone: "law",
			title: "M is not A",
			t: "M0–M5 are platform maturity. A0–A5 are agent autonomy grants. Reaching M2 does not raise any agent to A2. Granting A2 to the Verification Agent does not certify M2. Mixing them is the error the received freeze's single L ladder produced."
		},
		{
			k: "table",
			cols: [
				"Level",
				"Name",
				"Description",
				"Key capabilities",
				"v5.0 wrote"
			],
			rows: [
				[
					"M0",
					"Constitutional Foundation",
					"Constitution defined, basic governance exists",
					"Trust Kernel, Authority, Capability",
					"L0"
				],
				[
					"M1",
					"Core Platform",
					"Platform can govern and execute",
					"Execution Broker, Verification, Evidence",
					"L1"
				],
				[
					"M2",
					"Product Factory",
					"Platform can build products",
					"Discovery, Requirements, Blueprint, Planning",
					"L2"
				],
				[
					"M3",
					"Multi-Product Ecosystem",
					"Multiple products managed simultaneously",
					"Tenant Isolation, Portfolio Management",
					"L3"
				],
				[
					"M4",
					"Enterprise Platform",
					"Enterprise-grade operations",
					"Monitoring, Incident, Compliance, Recovery",
					"L4"
				],
				[
					"M5",
					"Autonomous Governed Ecosystem",
					"Full governed autonomy",
					"Self-improvement, Advanced Learning",
					"L5"
				]
			]
		}
	]),
	s$2("e2", "E.2", "Capabilities", "Enterprise capabilities", "Target-state capabilities. Architecture-ready is not Day-30 operational.", [{
		k: "p",
		t: "Phase 1 implements the architecture that supports these capabilities. Full operational deployment of every enterprise feature may require additional infrastructure beyond Day 60, but the architectural support is present."
	}, {
		k: "table",
		cols: [
			"Capability",
			"Description",
			"Implementation status"
		],
		rows: [
			[
				"Multi-Region Infrastructure",
				"Deploy across geographic regions",
				"Phase 1: Architecture-ready, single-node implementation"
			],
			[
				"Multi-Provider AI Routing",
				"Route intelligence to different providers",
				"Phase 1: Contract + Adapter pattern"
			],
			[
				"Enterprise SDK",
				"External integration SDK",
				"Phase 1: API-first architecture"
			],
			[
				"Federation",
				"Multi-instance coordination",
				"Phase 1: Architecture-ready"
			],
			[
				"Marketplace",
				"Product / agent marketplace",
				"Phase 1: Architecture-ready"
			],
			[
				"Hundreds of Agents",
				"Massive agent scaling",
				"Phase 1: Agent registry scalable"
			],
			[
				"Advanced Analytics",
				"Enterprise analytics",
				"Phase 1: Evidence-based foundation"
			],
			[
				"Compliance Frameworks",
				"SOC2, GDPR, etc.",
				"Phase 1: Audit-ready architecture"
			]
		]
	}], [
		{
			k: "p",
			t: "The received freeze collapsed 'architecture-ready' and 'operational' into one status column. The operative issue splits the claim. A seam in the architecture is not a Day-30 operational capability."
		},
		{
			k: "table",
			cols: [
				"Capability",
				"Description",
				"In architecture?",
				"Day-30 operational?"
			],
			rows: [
				[
					"Multi-Region Infrastructure",
					"Deploy across geographic regions",
					"Yes — region as an environment dimension",
					"No — single controlled environment"
				],
				[
					"Multi-Provider AI Routing",
					"Route intelligence to different providers",
					"Yes — Intelligence Contract + adapters",
					"Partial — two adapters live, not a routing fabric"
				],
				[
					"Enterprise SDK",
					"External integration SDK",
					"Yes — API-first",
					"No — command-center API only"
				],
				[
					"Federation",
					"Multi-instance coordination",
					"Yes — instance as a boundary",
					"No"
				],
				[
					"Marketplace",
					"Product / agent marketplace",
					"Yes — agent registry as a precursor",
					"No"
				],
				[
					"Hundreds of Agents",
					"Massive agent scaling",
					"Yes — registry is not a fixed roster",
					"No — named catalogue is A0 / A1 / A2 roles"
				],
				[
					"Advanced Analytics",
					"Enterprise analytics",
					"Yes — evidence store as foundation",
					"No — evidence collection, not an analytics product"
				],
				[
					"Compliance Frameworks",
					"SOC2, GDPR, etc.",
					"Yes — audit-ready append-only trail",
					"Partial — trail exists; external attestation does not"
				]
			]
		},
		{
			k: "callout",
			tone: "fix",
			title: "Seam versus operation",
			t: "M5 capabilities exist as architectural seams at Day 30. They are not certified operational. M4 is. Claiming M5 is the 100% overclaim the operative issue refuses."
		}
	]),
	s$2("e3", "E.3", "Security", "Security constitution", "Named threats, articles, and controlling subsystems.", [{
		k: "p",
		t: "The received freeze distributed security across articles, red-team scenarios, and gate criteria. It did not publish a named threat table as part of the enterprise target."
	}, {
		k: "callout",
		tone: "note",
		title: "Threat table lives in the operative issue",
		t: "v5.1 names the threats, the articles they violate, and the subsystems that must block them. Switch to the v5.1 operative issue to read the table. Red-team IDs RT-001–RT-010 remain the test bindings in Part F."
	}], [{
		k: "p",
		t: "Security is constitutional, not a phase-4 add-on. Each named threat maps to articles and to a controlling subsystem. A test that does not bind a named threat is not a red-team test."
	}, {
		k: "table",
		cols: [
			"Threat",
			"Articles",
			"Control",
			"Red-team"
		],
		rows: [
			[
				"Unauthorized agent action",
				"2, 3, 4",
				"Trust Kernel rejects actions without a non-AI authority chain",
				"RT-001"
			],
			[
				"Capability escalation",
				"5",
				"Capability System rejects out-of-scope or self-expanded tokens",
				"RT-002"
			],
			[
				"Tenant escape",
				"14",
				"Isolation Guard blocks cross-product and cross-tenant access by default",
				"RT-003"
			],
			[
				"Prompt injection",
				"3, 6",
				"Outputs remain proposals; execution stays inside the brokered workspace",
				"RT-004"
			],
			[
				"Malicious repository",
				"6",
				"Execution Broker refuses work outside the isolated workspace",
				"RT-005"
			],
			[
				"Secret leakage",
				"5, 6",
				"Credentials are never issued as broad capabilities",
				"RT-006"
			],
			[
				"Audit tampering",
				"10",
				"Append-only hash chain; tamper detection freezes the system",
				"RT-007"
			],
			[
				"Runaway agent",
				"6, 12",
				"Rate limits, timeouts, quarantine; autonomy cannot self-increase",
				"RT-008"
			],
			[
				"Failed deployment without recovery",
				"15",
				"Governed rollback and restore; unaudited recovery is rejected",
				"RT-009"
			],
			[
				"Database corruption",
				"15",
				"Authorized restore from backup; recovery is itself audited",
				"RT-010"
			],
			[
				"Self-granted authority",
				"2, 4, 11",
				"Authority System rejects self-grants and governed-agent rule changes",
				"—"
			],
			[
				"Unverified success",
				"7, 8, 9",
				"Verification Engine blocks promotion; E0 is unacceptable",
				"—"
			],
			[
				"Provider lock-in",
				"16",
				"Intelligence Contract rejects direct provider access from core",
				"—"
			]
		]
	}])
];
var TRACKS = [
	{
		id: "k",
		name: "Kernel",
		crew: "Trust, authority, capability, identity"
	},
	{
		id: "i",
		name: "Intelligence",
		crew: "Contract, adapters, A0–A2 runtime"
	},
	{
		id: "p",
		name: "Factory",
		crew: "Discovery through plan, two products"
	},
	{
		id: "x",
		name: "Execution",
		crew: "Broker, workspace, workers, deploy"
	},
	{
		id: "g",
		name: "Guard",
		crew: "Verify, evidence, audit, isolation, ops"
	}
];
var WAVES = [
	{
		id: "W1",
		name: "Kernel live",
		days: "1–7",
		certify: "M0 certified internally; M1 skeleton",
		cells: {
			k: [
				"Encode 16 articles as invariants",
				"Domain + identity",
				"Authority chains",
				"Capability tokens",
				"Gate 1 + Gate 2"
			],
			i: [
				"Intelligence Contract interface",
				"Claude adapter stub",
				"Local adapter seam",
				"Context packet v1"
			],
			p: [
				"Passport schema + lifecycle union",
				"Discovery intake",
				"Requirements skeleton",
				"Blueprint skeleton"
			],
			x: [
				"Workspace contract",
				"Worker contract",
				"Broker health",
				"Tenant id on every workspace"
			],
			g: [
				"Audit schema + hash chain",
				"Evidence envelope",
				"Policy on every request",
				"Isolation Guard interface"
			]
		}
	},
	{
		id: "W2",
		name: "Factory live",
		days: "8–14",
		certify: "M2 path proven — idea to governed spec",
		cells: {
			k: [
				"Risk class on every proposal",
				"Human Owner approval path",
				"Gate 3"
			],
			i: [
				"A0 advisory runtime",
				"A1 proposal catalogue",
				"Architect Agent",
				"Second provider returns a real completion"
			],
			p: [
				"Discovery live",
				"Requirements + Passport write",
				"Blueprint + architecture + plan",
				"Product 1 approved spec"
			],
			x: ["Proposal bus", "Plan is not a deploy"],
			g: [
				"Rate limit skeleton",
				"Evidence of each proposal",
				"Gate 4 + Gate 5"
			]
		}
	},
	{
		id: "W3",
		name: "Execute and prove",
		days: "15–21",
		certify: "M1 complete — execute, verify, deploy Product 1",
		cells: {
			k: ["Tokens on every execution"],
			i: ["Verification Agent A2", "No agent executes directly"],
			p: ["Product 1 implementation under passport", "Product 2 factory start"],
			x: [
				"Isolated workspace + worker",
				"Build + deploy + environments",
				"Post-deploy verify"
			],
			g: [
				"Independent verification",
				"Evidence hashing",
				"Append-only audit",
				"Gate 6 + 7 + 8"
			]
		}
	},
	{
		id: "W4",
		name: "Enterprise harden",
		days: "22–30",
		certify: "M3 isolation + M4 enterprise ops. Horizon M5 listed, not claimed.",
		cells: {
			k: ["Constitutional review of red-team findings"],
			i: ["Named catalogue only — no A3–A5 grants", "Learning candidates, never auto-promoted"],
			p: ["Product 2 through factory", "Portfolio registry of two live products"],
			x: ["Rollback and restore against real deploys"],
			g: [
				"Command center",
				"Monitoring + incident + compliance",
				"RT-001–RT-010",
				"Gate 9 + Gate 10"
			]
		}
	}
];
var DAYS = [
	{
		d: 1,
		wave: "W1",
		focus: "One repo. One constitution. Zero ambiguity.",
		k: "Encode 16 articles as machine-checkable invariants. Repo, CI, constitution package.",
		i: "Intelligence Contract interface only — no provider identity in the kernel.",
		p: "Product Passport schema + closed lifecycleState union.",
		x: "Workspace directory contract. No execution yet.",
		g: "AuditEvent schema and hash-chain spec frozen."
	},
	{
		d: 2,
		wave: "W1",
		focus: "Schemas before code volume.",
		k: "Domain model, risk classes, identity records.",
		i: "Adapter interface + Claude adapter stub.",
		p: "Discovery intake schema.",
		x: "Worker process contract.",
		g: "Evidence envelope schema."
	},
	{
		d: 3,
		wave: "W1",
		gate: "Gate 1",
		focus: "Constitutional runtime rejects the unauthorized.",
		k: "Unauthorized actions rejected. Domain model validated.",
		i: "Registry lists named A0/A1/A2 roles — none execute.",
		p: "Passport compiler compiles a fixture.",
		x: "Empty broker health.",
		g: "Audit writes the Gate 1 evidence package."
	},
	{
		d: 4,
		wave: "W1",
		focus: "Authority is explicit.",
		k: "Authority chains, delegation, revocation.",
		i: "Context packet v1.",
		p: "Requirements engine skeleton.",
		x: "Capability check hooked in the broker.",
		g: "Policy evaluation on every request."
	},
	{
		d: 5,
		wave: "W1",
		focus: "Capability is scoped. Isolation has a seam.",
		k: "Capability tokens: scope, expiry, audience.",
		i: "Local adapter — second provider seam exists.",
		p: "Blueprint skeleton.",
		x: "Tenant id on every workspace.",
		g: "Isolation Guard interface."
	},
	{
		d: 6,
		wave: "W1",
		gate: "Gate 2",
		focus: "Trust Kernel is the only path to action.",
		k: "Agent cannot act except through governance. Authorized path succeeds.",
		i: "No agent holds a raw tool.",
		p: "Passport still read-only for agents.",
		x: "Broker refuses unsigned work.",
		g: "Gate 2 evidence package."
	},
	{
		d: 7,
		wave: "W1",
		focus: "Wave freeze. M0 internal certification.",
		k: "Attack: privilege, expired token, forged authority.",
		i: "Contract tests against the stub adapter.",
		p: "Schema freeze.",
		x: "Workspace isolation dry-run.",
		g: "Daily freeze + M0 dossier."
	},
	{
		d: 8,
		wave: "W2",
		focus: "Agents may advise. They may not act.",
		k: "Risk class stamped on every proposal.",
		i: "Runtime executes A0 advisory agents.",
		p: "Discovery live.",
		x: "Proposal bus — not an executor.",
		g: "Rate-limit skeleton."
	},
	{
		d: 9,
		wave: "W2",
		gate: "Gate 3",
		focus: "Identity and capability security hold under attack.",
		k: "Privilege escalation blocked.",
		i: "Forged context rejected.",
		p: "Unauthorized product access blocked.",
		x: "Tenant escape blocked.",
		g: "Expired and forged capability blocked. Gate 3 package."
	},
	{
		d: 10,
		wave: "W2",
		focus: "Factory writes a passport, not a codebase.",
		k: "Human Owner approval path on the passport.",
		i: "A1 proposal catalogue: Requirements, Architect, Planner.",
		p: "Requirements engine + passport write.",
		x: "No implementation from a draft passport.",
		g: "Evidence of each proposal."
	},
	{
		d: 11,
		wave: "W2",
		focus: "Idea to plan under governance.",
		k: "Architecture proposal cannot self-approve.",
		i: "Architect Agent A1.",
		p: "Blueprint + architecture + implementation plan.",
		x: "A plan is not a deploy.",
		g: "Plan artifacts hashed into evidence."
	},
	{
		d: 12,
		wave: "W2",
		gate: "Gate 4",
		focus: "Agent runtime proposes through governance.",
		k: "Governance chain is the only submission path.",
		i: "Agents receive context, generate proposals, submit. No direct execution.",
		p: "Factory states enforced.",
		x: "Broker still closed to unsigned plans.",
		g: "Gate 4 package."
	},
	{
		d: 13,
		wave: "W2",
		focus: "Product 1 exists as a governed specification.",
		k: "Human Owner approves Product 1 spec.",
		i: "Specialists run only inside Product 1 scope.",
		p: "Supported template (web + API + database) through the factory to APPROVED.",
		x: "Workspace reserved, still empty of product code.",
		g: "Passport + approval in the audit trail."
	},
	{
		d: 14,
		wave: "W2",
		gate: "Gate 5",
		focus: "Product Factory works. Second provider is real.",
		k: "M2 path proven internally.",
		i: "Second adapter returns a real completion. Routing is still explicit, not a fabric.",
		p: "A product idea produces a governed specification.",
		x: "Ready to accept Gate 5 output.",
		g: "Gate 5 package. Wave freeze."
	},
	{
		d: 15,
		wave: "W3",
		focus: "Execution is isolated.",
		k: "Capability token required for every run.",
		i: "No agent holds shell, network, or credentials.",
		p: "Product 1 implementation starts under the passport.",
		x: "Execution Broker + isolated workspace + worker.",
		g: "Every run emits an audit event."
	},
	{
		d: 16,
		wave: "W3",
		gate: "Gate 6",
		focus: "Proposal → governance → isolated execute.",
		k: "Unauthorized execute rejected.",
		i: "Agents still only propose.",
		p: "Product 1 code lands only from approved plans.",
		x: "Controlled execution works.",
		g: "Gate 6 package."
	},
	{
		d: 17,
		wave: "W3",
		focus: "Execution is not success.",
		k: "Consequential actions require independent verification.",
		i: "Verification Agent at A2 — independent of the executor.",
		p: "Product 1 test plan bound to the passport.",
		x: "Build verification hooked.",
		g: "Test runners + verification engine."
	},
	{
		d: 18,
		wave: "W3",
		focus: "Evidence precedes trust.",
		k: "E0 is a defect, never a status.",
		i: "Model output is not evidence.",
		p: "Passport records evidence ids.",
		x: "Run artifacts hashed.",
		g: "Evidence store hashing. Append-only audit. Tamper detect."
	},
	{
		d: 19,
		wave: "W3",
		gate: "Gate 7",
		focus: "Verify, evidence, audit hold.",
		k: "Unverified consequential action is a constitutional violation.",
		i: "A2 verification cannot be the same agent that proposed.",
		p: "Product 1 cannot advance without evidence.",
		x: "Failed verify does not deploy.",
		g: "Gate 7 package."
	},
	{
		d: 20,
		wave: "W3",
		focus: "Product 1 deploys under governance.",
		k: "Production is a named environment, not a default.",
		i: "No agent deploys.",
		p: "Product 2 factory start (second tenant).",
		x: "Deployment system, environments, post-deploy verify. Product 1 staging.",
		g: "Post-deploy evidence."
	},
	{
		d: 21,
		wave: "W3",
		gate: "Gate 8",
		focus: "Lifecycle works: build, test, verify, deploy, operate.",
		k: "M1 complete. Factory still M2.",
		i: "Catalogue unchanged.",
		p: "Product 1 operated under the passport. Product 2 in factory.",
		x: "Deployment lifecycle works.",
		g: "Gate 8 package. Wave freeze."
	},
	{
		d: 22,
		wave: "W4",
		focus: "Two products. Two tenants. One kernel.",
		k: "Portfolio is not a shared memory.",
		i: "Product 2 agents cannot see Product 1 context.",
		p: "Product 2 through the factory.",
		x: "Separate workspaces, separate deploys.",
		g: "Command center shows both. Isolation Guard on."
	},
	{
		d: 23,
		wave: "W4",
		focus: "Enterprise operations are a product of the kernel, not a slide.",
		k: "Tenant admin and owner controls.",
		i: "No new autonomy grants.",
		p: "Both passports live in the registry.",
		x: "Environment inventory.",
		g: "Monitoring, incident, compliance views."
	},
	{
		d: 24,
		wave: "W4",
		focus: "Recovery is constitutional.",
		k: "Freeze / rollback / restore are owner actions.",
		i: "Memory candidates only — never auto-promoted (Article 13).",
		p: "Product passports survive restore.",
		x: "Rollback drill against Product 1.",
		g: "Restore drill against fixtures. Incident runbook."
	},
	{
		d: 25,
		wave: "W4",
		gate: "Gate 9",
		focus: "M3 — Product A cannot access Product B. Both operational.",
		k: "Tenant isolation is an invariant, not a feature flag.",
		i: "Product A agent denied Product B tools, memory, and workspace.",
		p: "Two live products.",
		x: "Two isolated runtimes.",
		g: "Gate 9 isolation proof."
	},
	{
		d: 26,
		wave: "W4",
		focus: "Red team wave A.",
		k: "RT-001 unauthorized action. RT-002 capability escalation.",
		i: "RT-004 prompt injection.",
		p: "RT-005 malicious repository scoped to Product 1.",
		x: "RT-003 tenant escape.",
		g: "Expected result: reject / block / neutralize. Evidence captured."
	},
	{
		d: 27,
		wave: "W4",
		focus: "Red team wave B.",
		k: "RT-007 audit tampering.",
		i: "RT-006 secret leakage. RT-008 runaway agent.",
		p: "Passports remain intact under attack.",
		x: "RT-009 failed deployment recovery.",
		g: "RT-010 database corruption restore. Rate limits hold."
	},
	{
		d: 28,
		wave: "W4",
		focus: "Recovery certification. Learning stays a candidate.",
		k: "Constitutional review of every red-team finding.",
		i: "Verified knowledge candidates only. No self-improvement loop live.",
		p: "Both products still isolated after restore.",
		x: "Rollback and restore succeed on the drill set.",
		g: "Recovery dossier. Zero critical recovery failures."
	},
	{
		d: 29,
		wave: "W4",
		focus: "M4 ops proof. Close gaps. No new scope.",
		k: "Zero unresolved constitutional violations.",
		i: "M5 seams listed: federation, marketplace, routing fabric, A3+ grants — designed, not live.",
		p: "Completion matrix rows closed or explicitly deferred with owner sign.",
		x: "Monitoring green on both products.",
		g: "Evidence package for Gate 10. Compliance trail complete."
	},
	{
		d: 30,
		wave: "W4",
		gate: "Gate 10",
		focus: "Certify M4 Enterprise Platform. Horizon remains M5.",
		k: "Articles 1–16 hold under the red-team record.",
		i: "Named agents remain A0 / A1 / A2. Provider independence proven with two adapters.",
		p: "Two products built by the factory, operated under passports.",
		x: "Isolated execution, deploy, rollback, restore — evidenced.",
		g: "Gate 10 package. M4 certified. M5 not claimed."
	}
];
var GATES = [
	[
		"1",
		"Day 3",
		"Constitutional runtime works. Unauthorized actions rejected. Domain model validated.",
		"M0"
	],
	[
		"2",
		"Day 6",
		"Trust Kernel works. Agent cannot act except through governance. Authorized path succeeds.",
		"M0"
	],
	[
		"3",
		"Day 9",
		"Identity and capability security hold: privilege, tenant, expiry, forged token, unauthorized product.",
		"M0–M1"
	],
	[
		"4",
		"Day 12",
		"Agent runtime proposes through governance. No direct execution.",
		"M1"
	],
	[
		"5",
		"Day 14",
		"Product Factory produces a governed specification. Second provider adapter returns a real completion.",
		"M2"
	],
	[
		"6",
		"Day 16",
		"Controlled execution: proposal → governance → isolated workspace.",
		"M1"
	],
	[
		"7",
		"Day 19",
		"Execution is not success. Independent verification, evidence, append-only audit.",
		"M1"
	],
	[
		"8",
		"Day 21",
		"Lifecycle works: built, tested, verified, deployed, operated under governance.",
		"M1–M2"
	],
	[
		"9",
		"Day 25",
		"Product A cannot access Product B. Both operational. Isolation proof is M3.",
		"M3"
	],
	[
		"10",
		"Day 30",
		"Red team and constitutional adversarial tests pass. Recovery works. Certified bound is the enforcement spine. M5 is the horizon, not the claim.",
		"Spine"
	]
];
function s$1(id, num, nav, title, dek, v1, v2, v2Only = false) {
	return {
		id,
		part: "Implementation roadmap",
		partId: "F",
		num,
		nav,
		title,
		dek,
		v1,
		...v2 ? { v2 } : {},
		...v2Only ? { v2Only } : {}
	};
}
var PART_F = [
	s$1("f1", "F.1", "Objective", "Program objective", "The freeze claimed 100% at Day 60. The operative issue is a 30-day enterprise strike.", [
		{
			k: "p",
			t: "At the end of Day 60, the received freeze required:"
		},
		{
			k: "quote",
			t: "Every capability, subsystem, constitutional control, enterprise function, integration boundary, security mechanism, verification mechanism, operational capability, and governance mechanism defined as part of the Master Architecture must have an implemented, integrated, tested, and evidenced counterpart in AGBOFA."
		},
		{
			k: "kpis",
			items: [
				{
					l: "Architectural implementation",
					v: "100%",
					h: "Freeze claim"
				},
				{
					l: "Critical-path verification",
					v: "100%",
					h: "Freeze claim"
				},
				{
					l: "Unresolved constitutional violations",
					v: "0",
					h: "Invariant"
				}
			]
		},
		{
			k: "callout",
			tone: "warn",
			title: "Why the operative issue rewrites this objective",
			t: "The 100% Day-60 claim collapsed three scales onto one L ladder and asserted that Day 60 delivers the full autonomous governed ecosystem including federation, marketplace, multi-region, and full self-improvement. That is not a certifiable increment. v5.2 keeps the vision, compresses the clock to 30 days, and binds certification to M4 Enterprise Platform."
		}
	], [
		{
			k: "p",
			t: "The architecture still runs from foundation through M5. The first increment is a 30-day parallel strike that must prove the constitutional enforcement spine. Day 30 does not certify M5. Day 30 does not mean every M4 enterprise fabric is complete. Files existing, TypeScript compiling, and this reader are not certification."
		},
		{
			k: "callout",
			tone: "law",
			title: "Thirty-day increment bar",
			t: "On Day 30 AGBOFA must demonstrate the constitutional spine as real behavior: identity separation, Trust Kernel, Authority System, Capability System, AgentProposal, Broker admit/deny, Isolation Guard, container Worker, independent verification, Evidence Envelope, append-only audit with why, Human freeze and recovery. Intelligence remains replaceable. No agent is authority. This reader is not that platform."
		},
		{
			k: "kpis",
			items: [
				{
					l: "Clock",
					v: "30 days",
					h: "Four waves, five tracks"
				},
				{
					l: "Certify",
					v: "Spine",
					h: "Identity through recovery — evidenced"
				},
				{
					l: "Horizon",
					v: "M5",
					h: "Not a Day-30 claim"
				},
				{
					l: "Products",
					v: "2 live",
					h: "Isolation proven Gate 9"
				},
				{
					l: "Status",
					v: "SPECIFIED",
					h: "Platform ENFORCEMENT PENDING"
				},
				{
					l: "Violations",
					v: "0",
					h: "Constitutional invariant"
				}
			]
		},
		{
			k: "table",
			cols: [
				"Scale",
				"Day-30 claim",
				"Not a Day-30 claim"
			],
			rows: [
				[
					"Maturity (M)",
					"Spine operational toward M2–M3 isolation proof. M4 ops views thin if evidenced. M5 not claimed.",
					"M5 autonomous ecosystem, federation, marketplace, multi-region, A3–A5"
				],
				[
					"Autonomy (A)",
					"Named agents at A0 / A1 / A2 as catalogued",
					"A3–A5 grants"
				],
				[
					"Evidence (E)",
					"E1–E4 as required by risk class; E0 forbidden",
					"E0 accepted as success"
				],
				[
					"Gates",
					"Gates 1–10 on a 3-day cadence",
					"Calendar day substituting for a gate"
				],
				[
					"Document issue",
					"Work is bound to v5.3",
					"Issue number as a delivery metric"
				]
			]
		},
		{
			k: "callout",
			tone: "warn",
			title: "The clock is valid only in parallel",
			t: "Five tracks run every day: Kernel, Intelligence, Factory, Execution, Guard. Serialize those tracks and the program reverts to 60 days. A single engineer cannot honestly run this calendar. The strike assumes a Human Owner, a system architect, and a crew on each track."
		},
		{
			k: "h",
			t: "What “enterprise” means on Day 30",
			l: 2
		},
		{
			k: "ul",
			items: [
				"M4 from Part E: monitoring, incident, compliance, recovery — live, not slides.",
				"M3: two products, two tenants, Isolation Guard proven by red team.",
				"M2: Product Factory ships Product 1 and Product 2 as governed passports.",
				"M1: execute, verify, evidence, audit — the platform can govern action.",
				"M0: constitution is executable. Unauthorized action is rejected."
			]
		},
		{
			k: "h",
			t: "What remains M5 — in architecture, not in the Day-30 claim",
			l: 2
		},
		{
			k: "ul",
			items: [
				"Self-improvement loops (learning stays candidate-only under Article 13)",
				"Federation and multi-instance coordination",
				"Marketplace",
				"Multi-region active-active",
				"Hundreds of agents / A3–A5 autonomy",
				"External SOC2 / GDPR attestation (the trail is ready; the auditor is not the kernel)"
			]
		}
	]),
	s$1("f2", "F.2", "Waves", "Waves and tracks", "Four waves. Five tracks. Thirty days. Serial blocks are the 60-day freeze.", [
		{
			k: "h",
			t: "Implementation phases",
			l: 2
		},
		{
			k: "table",
			cols: [
				"Phase",
				"Days",
				"Focus",
				"Key deliverables"
			],
			rows: [
				[
					"Phase 1",
					"1–15",
					"Constitutional + Platform Foundation",
					"Constitution, Domain Model, Trust Kernel, Authority, Capability"
				],
				[
					"Phase 2",
					"16–30",
					"Intelligence + Product Factory",
					"Intelligence Contract, Agent Runtime, Product Factory"
				],
				[
					"Phase 3",
					"31–45",
					"Execution + Enterprise Operations",
					"Execution Broker, Verification, Evidence, Audit, Operations"
				],
				[
					"Phase 4",
					"46–60",
					"Enterprise Completion + Certification",
					"Integration, Red Team, Certification"
				]
			]
		},
		{
			k: "h",
			t: "Implementation blocks",
			l: 2
		},
		{
			k: "table",
			cols: [
				"Block",
				"Days",
				"Main objective",
				"Gate"
			],
			rows: [
				[
					"1",
					"1–6",
					"Constitutional Runtime Foundation",
					"Gate 1"
				],
				[
					"2",
					"7–12",
					"Trust Kernel",
					"Gate 2"
				],
				[
					"3",
					"13–18",
					"Identity, Authority & Capability",
					"Gate 3"
				],
				[
					"4",
					"19–24",
					"Intelligence & Agent Runtime",
					"Gate 4"
				],
				[
					"5",
					"25–30",
					"Product Factory",
					"Gate 5"
				],
				[
					"6",
					"31–36",
					"Execution & Workspace",
					"Gate 6"
				],
				[
					"7",
					"37–42",
					"Verification, Evidence & Audit",
					"Gate 7"
				],
				[
					"8",
					"43–48",
					"Product Lifecycle & Deployment",
					"Gate 8"
				],
				[
					"9",
					"49–54",
					"Multi-product / Ecosystem Operation",
					"Gate 9"
				],
				[
					"10",
					"55–60",
					"Red Team, Recovery & Final Certification",
					"Gate 10"
				]
			]
		}
	], [
		{
			k: "p",
			t: "The freeze ran ten serial blocks. The strike runs four waves across five tracks at once. Gates stay at ten. The cadence is every three days, not every six."
		},
		{
			k: "table",
			cols: [
				"Track",
				"Owns",
				"Does not own"
			],
			rows: [
				[
					"Kernel",
					"Articles as code, identity, authority, capability",
					"Product features, provider identity"
				],
				[
					"Intelligence",
					"Contract, adapters, A0–A2 runtime",
					"Authority, execution, verification of its own output"
				],
				[
					"Factory",
					"Discovery → plan, passports, two products",
					"Deploy, production credentials"
				],
				[
					"Execution",
					"Broker, workspace, worker, deploy, rollback",
					"Declaring success"
				],
				[
					"Guard",
					"Verify, evidence, audit, isolation, ops, recovery, red team",
					"Shipping product scope"
				]
			]
		},
		{
			k: "board",
			tracks: TRACKS.map((track) => ({
				id: track.id,
				name: track.name,
				crew: track.crew
			})),
			waves: WAVES.map((wave) => ({
				id: wave.id,
				name: wave.name,
				days: wave.days,
				certify: wave.certify,
				cells: Object.fromEntries(Object.entries(wave.cells).map(([key, items]) => [key, [...items]]))
			}))
		},
		{
			k: "callout",
			tone: "note",
			title: "Sunday is a freeze, not a holiday from evidence",
			t: "Days 7, 14, 21 close a wave: attack, verify, freeze, dossier. Day 28 is recovery certification. Day 30 is Gate 10. Skipping ATTACK or FREEZE to “make the date” is a process violation. The date then moves. The constitution does not."
		}
	]),
	s$1("fcal", "F.C", "Calendar", "Thirty-day calendar", "Every day has a Kernel, Intelligence, Factory, Execution, and Guard outcome.", [{
		k: "callout",
		tone: "note",
		title: "Not in the received freeze",
		t: "v5.0 schedules sixty days as ten serial blocks. The day-by-day strike calendar exists only in the operative issue. Switch to v5.3 to read it."
	}], [{
		k: "p",
		t: "This is the build sequence. Each row is a calendar day. A gate day is not optional. If a gate fails, the next wave does not start — the failed gate is replayed. Calendar day is not evidence."
	}, {
		k: "days",
		rows: DAYS
	}]),
	s$1("f3", "F.3", "Gates", "Gate criteria", "A gate is evidence. The clock is not the gate.", [{
		k: "table",
		cols: [
			"Block",
			"Gate",
			"Criteria"
		],
		rows: [
			[
				"1",
				"Gate 1",
				"Constitutional runtime works. Unauthorized actions rejected. Domain model validated."
			],
			[
				"2",
				"Gate 2",
				"Trust Kernel works. Agent cannot directly perform unauthorized actions. Authorized actions succeed through the governance chain."
			],
			[
				"3",
				"Gate 3",
				"Identity and capability security work. Privilege escalation, tenant escape, capability escalation, expired capability, forged capability, and unauthorized product access are blocked."
			],
			[
				"4",
				"Gate 4",
				"AI agent runtime works. Agents receive context, generate proposals, and submit outputs through governance."
			],
			[
				"5",
				"Gate 5",
				"Product Factory works. A product idea produces a governed product specification."
			],
			[
				"6",
				"Gate 6",
				"Controlled execution works. Agent proposals pass through governance and execute in isolated workspaces."
			],
			[
				"7",
				"Gate 7",
				"Verification, Evidence, and Audit work. Execution does not equal success. Independent verification is required."
			],
			[
				"8",
				"Gate 8",
				"Deployment lifecycle works. Products can be built, tested, verified, deployed, and operated under governance."
			],
			[
				"9",
				"Gate 9",
				"Multiple products remain isolated. Product A agent cannot access Product B. Both products operational."
			],
			[
				"10",
				"Gate 10",
				"Red-team certification passes. Recovery works. 100% architectural implementation verified."
			]
		]
	}], [
		{
			k: "table",
			cols: [
				"Gate",
				"Day",
				"Criteria",
				"Maturity"
			],
			rows: GATES.map((row) => [...row])
		},
		{
			k: "callout",
			tone: "law",
			title: "Failed gate rule",
			t: "A failed gate stops the wave. The team replays the gate. They do not skip to keep Day 30. Day 30 without Gate 10 is not a certification. It is a missed date."
		},
		{
			k: "callout",
			tone: "note",
			title: "Gate 9 and Gate 10",
			t: "Gate 9 is the isolation proof (two products). Gate 10 certifies the constitutional spine under adversarial tests — not M5, not documentation, not this reader."
		}
	]),
	s$1("f4", "F.4", "Matrix", "Completion matrix", "CON, GOV, AUT, CAP, EXE, VER, EVI, AUD, INT, FAC, MEM, OPS, REC, ISO, DEP. Status starts PENDING.", [{
		k: "p",
		t: "The completion matrix is the requirements ledger for certification. A row is complete only when implementation, test, security, and evidence exist. PENDING is the honest freeze state."
	}, {
		k: "table",
		cols: [
			"ID",
			"Requirement",
			"Component",
			"Status"
		],
		rows: [
			[
				"CON-001",
				"Human sovereignty",
				"Authority Kernel",
				"PENDING"
			],
			[
				"CON-002",
				"AGBOFA sovereignty",
				"Governance Engine",
				"PENDING"
			],
			[
				"CON-003",
				"Intelligence ≠ Authority",
				"Trust Kernel",
				"PENDING"
			],
			[
				"CON-004",
				"Authority is explicit",
				"Authority System",
				"PENDING"
			],
			[
				"CON-005",
				"Capability is scoped",
				"Capability System",
				"PENDING"
			],
			[
				"CON-006",
				"Execution is isolated",
				"Execution Broker",
				"PENDING"
			],
			[
				"CON-007",
				"Execution ≠ Success",
				"Verification Engine",
				"PENDING"
			],
			[
				"CON-008",
				"Verification independent",
				"Verification Engine",
				"PENDING"
			],
			[
				"CON-009",
				"Evidence precedes trust",
				"Evidence Store",
				"PENDING"
			],
			[
				"CON-010",
				"Audit persistent",
				"Audit System",
				"PENDING"
			],
			[
				"CON-011",
				"Governance unweakenable",
				"Governance Engine",
				"PENDING"
			],
			[
				"CON-012",
				"Autonomy earned",
				"Trust Kernel",
				"PENDING"
			],
			[
				"CON-013",
				"Learning verified",
				"Memory System",
				"PENDING"
			],
			[
				"CON-014",
				"Tenant isolation",
				"Isolation Guard",
				"PENDING"
			],
			[
				"CON-015",
				"Recovery constitutional",
				"Recovery System",
				"PENDING"
			],
			[
				"CON-016",
				"Provider independence",
				"Intelligence Contract",
				"PENDING"
			],
			[
				"GOV-001",
				"Governance enforcement",
				"Policy Engine",
				"PENDING"
			],
			[
				"GOV-002",
				"Policy evaluation",
				"Policy Engine",
				"PENDING"
			],
			[
				"GOV-003",
				"Risk classification",
				"Trust Kernel",
				"PENDING"
			],
			[
				"AUT-001",
				"Authority chains",
				"Authority System",
				"PENDING"
			],
			[
				"AUT-002",
				"Authority delegation",
				"Authority System",
				"PENDING"
			],
			[
				"AUT-003",
				"Authority revocation",
				"Authority System",
				"PENDING"
			],
			[
				"CAP-001",
				"Capability tokens",
				"Capability System",
				"PENDING"
			],
			[
				"CAP-002",
				"Scope validation",
				"Capability System",
				"PENDING"
			],
			[
				"CAP-003",
				"Token expiry",
				"Capability System",
				"PENDING"
			],
			[
				"EXE-001",
				"Controlled execution",
				"Execution Broker",
				"PENDING"
			],
			[
				"EXE-002",
				"Isolated workspace",
				"Workspace Manager",
				"PENDING"
			],
			[
				"EXE-003",
				"Worker model",
				"Worker System",
				"PENDING"
			],
			[
				"VER-001",
				"Independent verification",
				"Verification Engine",
				"PENDING"
			],
			[
				"VER-002",
				"Test runners",
				"Test System",
				"PENDING"
			],
			[
				"VER-003",
				"Build verification",
				"Build System",
				"PENDING"
			],
			[
				"EVI-001",
				"Evidence collection",
				"Evidence Store",
				"PENDING"
			],
			[
				"EVI-002",
				"Evidence hashing",
				"Evidence Store",
				"PENDING"
			],
			[
				"EVI-003",
				"Evidence validation",
				"Evidence Store",
				"PENDING"
			],
			[
				"AUD-001",
				"Append-only audit",
				"Audit System",
				"PENDING"
			],
			[
				"AUD-002",
				"Hash chaining",
				"Audit System",
				"PENDING"
			],
			[
				"AUD-003",
				"Tamper detection",
				"Audit System",
				"PENDING"
			],
			[
				"INT-001",
				"Intelligence abstraction",
				"Intelligence Contract",
				"PENDING"
			],
			[
				"INT-002",
				"Provider adapter",
				"Adapter System",
				"PENDING"
			],
			[
				"INT-003",
				"Agent registry",
				"Agent Runtime",
				"PENDING"
			],
			[
				"INT-004",
				"Context management",
				"Context System",
				"PENDING"
			],
			[
				"FAC-001",
				"Product discovery",
				"Discovery System",
				"PENDING"
			],
			[
				"FAC-002",
				"Requirements engine",
				"Requirements System",
				"PENDING"
			],
			[
				"FAC-003",
				"Product blueprint",
				"Blueprint System",
				"PENDING"
			],
			[
				"FAC-004",
				"Architecture proposal",
				"Architecture System",
				"PENDING"
			],
			[
				"FAC-005",
				"Implementation planning",
				"Planning System",
				"PENDING"
			],
			[
				"MEM-001",
				"Knowledge candidates",
				"Memory System",
				"PENDING"
			],
			[
				"MEM-002",
				"Knowledge validation",
				"Memory System",
				"PENDING"
			],
			[
				"MEM-003",
				"Institutional memory",
				"Memory System",
				"PENDING"
			],
			[
				"OPS-001",
				"Monitoring",
				"Operations System",
				"PENDING"
			],
			[
				"OPS-002",
				"Incident management",
				"Operations System",
				"PENDING"
			],
			[
				"OPS-003",
				"Compliance",
				"Operations System",
				"PENDING"
			],
			[
				"REC-001",
				"System freeze",
				"Recovery System",
				"PENDING"
			],
			[
				"REC-002",
				"Rollback",
				"Recovery System",
				"PENDING"
			],
			[
				"REC-003",
				"Restore",
				"Recovery System",
				"PENDING"
			],
			[
				"ISO-001",
				"Tenant isolation",
				"Isolation Guard",
				"PENDING"
			],
			[
				"ISO-002",
				"Cross-product blocking",
				"Isolation Guard",
				"PENDING"
			],
			[
				"DEP-001",
				"Deployment system",
				"Deployment System",
				"PENDING"
			],
			[
				"DEP-002",
				"Environment management",
				"Environment System",
				"PENDING"
			],
			[
				"DEP-003",
				"Post-deployment verification",
				"Verification Engine",
				"PENDING"
			]
		]
	}], [{
		k: "p",
		t: "A row is complete only when implementation, test, security, and evidence exist. Target day is when the row must be evidencable, not when someone typed a file. PENDING is the honest Day-0 state."
	}, {
		k: "table",
		cols: [
			"ID",
			"Requirement",
			"Component",
			"Target",
			"Status"
		],
		rows: [
			[
				"CON-001",
				"Human sovereignty",
				"Authority System",
				"D1",
				"PENDING"
			],
			[
				"CON-002",
				"AGBOFA sovereignty",
				"Governance Engine",
				"D1",
				"PENDING"
			],
			[
				"CON-003",
				"Intelligence ≠ Authority",
				"Trust Kernel",
				"D6",
				"PENDING"
			],
			[
				"CON-004",
				"Authority is explicit",
				"Authority System",
				"D4",
				"PENDING"
			],
			[
				"CON-005",
				"Capability is scoped",
				"Capability System",
				"D5",
				"PENDING"
			],
			[
				"CON-006",
				"Execution is isolated",
				"Execution Broker",
				"D16",
				"PENDING"
			],
			[
				"CON-007",
				"Execution ≠ Success",
				"Verification Engine",
				"D19",
				"PENDING"
			],
			[
				"CON-008",
				"Verification independent",
				"Verification Engine",
				"D17",
				"PENDING"
			],
			[
				"CON-009",
				"Evidence precedes trust",
				"Evidence Store",
				"D18",
				"PENDING"
			],
			[
				"CON-010",
				"Audit persistent",
				"Audit System",
				"D18",
				"PENDING"
			],
			[
				"CON-011",
				"Governance unweakenable",
				"Governance Engine",
				"D6",
				"PENDING"
			],
			[
				"CON-012",
				"Autonomy earned",
				"Trust Kernel",
				"D30",
				"PENDING"
			],
			[
				"CON-013",
				"Learning verified",
				"Memory System",
				"D28",
				"PENDING"
			],
			[
				"CON-014",
				"Tenant isolation",
				"Isolation Guard",
				"D25",
				"PENDING"
			],
			[
				"CON-015",
				"Recovery constitutional",
				"Recovery System",
				"D28",
				"PENDING"
			],
			[
				"CON-016",
				"Provider independence",
				"Intelligence Contract",
				"D14",
				"PENDING"
			],
			[
				"GOV-001",
				"Governance enforcement",
				"Policy Engine",
				"D4",
				"PENDING"
			],
			[
				"GOV-002",
				"Policy evaluation",
				"Policy Engine",
				"D4",
				"PENDING"
			],
			[
				"GOV-003",
				"Risk classification",
				"Trust Kernel",
				"D2",
				"PENDING"
			],
			[
				"AUT-001",
				"Authority chains",
				"Authority System",
				"D4",
				"PENDING"
			],
			[
				"AUT-002",
				"Authority delegation",
				"Authority System",
				"D4",
				"PENDING"
			],
			[
				"AUT-003",
				"Authority revocation",
				"Authority System",
				"D4",
				"PENDING"
			],
			[
				"CAP-001",
				"Capability tokens",
				"Capability System",
				"D5",
				"PENDING"
			],
			[
				"CAP-002",
				"Scope validation",
				"Capability System",
				"D9",
				"PENDING"
			],
			[
				"CAP-003",
				"Token expiry",
				"Capability System",
				"D9",
				"PENDING"
			],
			[
				"EXE-001",
				"Controlled execution",
				"Execution Broker",
				"D16",
				"PENDING"
			],
			[
				"EXE-002",
				"Isolated workspace",
				"Workspace Manager",
				"D15",
				"PENDING"
			],
			[
				"EXE-003",
				"Worker model",
				"Worker System",
				"D15",
				"PENDING"
			],
			[
				"VER-001",
				"Independent verification",
				"Verification Engine",
				"D17",
				"PENDING"
			],
			[
				"VER-002",
				"Test runners",
				"Test System",
				"D17",
				"PENDING"
			],
			[
				"VER-003",
				"Build verification",
				"Build System",
				"D17",
				"PENDING"
			],
			[
				"EVI-001",
				"Evidence collection",
				"Evidence Store",
				"D18",
				"PENDING"
			],
			[
				"EVI-002",
				"Evidence hashing",
				"Evidence Store",
				"D18",
				"PENDING"
			],
			[
				"EVI-003",
				"Evidence validation",
				"Evidence Store",
				"D19",
				"PENDING"
			],
			[
				"AUD-001",
				"Append-only audit",
				"Audit System",
				"D18",
				"PENDING"
			],
			[
				"AUD-002",
				"Hash chaining",
				"Audit System",
				"D18",
				"PENDING"
			],
			[
				"AUD-003",
				"Tamper detection",
				"Audit System",
				"D27",
				"PENDING"
			],
			[
				"INT-001",
				"Intelligence abstraction",
				"Intelligence Contract",
				"D1",
				"PENDING"
			],
			[
				"INT-002",
				"Provider adapter",
				"Adapter System",
				"D14",
				"PENDING"
			],
			[
				"INT-003",
				"Agent registry",
				"Agent Runtime",
				"D8",
				"PENDING"
			],
			[
				"INT-004",
				"Context management",
				"Context System",
				"D8",
				"PENDING"
			],
			[
				"FAC-001",
				"Product discovery",
				"Discovery System",
				"D8",
				"PENDING"
			],
			[
				"FAC-002",
				"Requirements engine",
				"Requirements System",
				"D10",
				"PENDING"
			],
			[
				"FAC-003",
				"Product blueprint",
				"Blueprint System",
				"D11",
				"PENDING"
			],
			[
				"FAC-004",
				"Architecture proposal",
				"Architecture System",
				"D11",
				"PENDING"
			],
			[
				"FAC-005",
				"Implementation planning",
				"Planning System",
				"D11",
				"PENDING"
			],
			[
				"MEM-001",
				"Knowledge candidates",
				"Memory System",
				"D24",
				"PENDING"
			],
			[
				"MEM-002",
				"Knowledge validation",
				"Memory System",
				"D28",
				"PENDING"
			],
			[
				"MEM-003",
				"Institutional memory",
				"Memory System",
				"D28",
				"PENDING"
			],
			[
				"OPS-001",
				"Monitoring",
				"Operations System",
				"D23",
				"PENDING"
			],
			[
				"OPS-002",
				"Incident management",
				"Operations System",
				"D23",
				"PENDING"
			],
			[
				"OPS-003",
				"Compliance",
				"Operations System",
				"D23",
				"PENDING"
			],
			[
				"REC-001",
				"System freeze",
				"Recovery System",
				"D24",
				"PENDING"
			],
			[
				"REC-002",
				"Rollback",
				"Recovery System",
				"D24",
				"PENDING"
			],
			[
				"REC-003",
				"Restore",
				"Recovery System",
				"D28",
				"PENDING"
			],
			[
				"ISO-001",
				"Tenant isolation",
				"Isolation Guard",
				"D25",
				"PENDING"
			],
			[
				"ISO-002",
				"Cross-product blocking",
				"Isolation Guard",
				"D25",
				"PENDING"
			],
			[
				"DEP-001",
				"Deployment system",
				"Deployment System",
				"D20",
				"PENDING"
			],
			[
				"DEP-002",
				"Environment management",
				"Environment System",
				"D20",
				"PENDING"
			],
			[
				"DEP-003",
				"Post-deployment verification",
				"Verification Engine",
				"D20",
				"PENDING"
			]
		]
	}]),
	s$1("f5", "F.5", "Red team", "Red team and engineering metrics", "RT-001–RT-010 in Wave 4. Zero-defect bar is unchanged.", [
		{
			k: "h",
			t: "Red-team attack scenarios",
			l: 2
		},
		{
			k: "table",
			cols: [
				"ID",
				"Attack",
				"Description",
				"Expected result",
				"Test day"
			],
			rows: [
				[
					"RT-001",
					"Unauthorized agent action",
					"Agent attempts to bypass governance",
					"Action rejected",
					"55"
				],
				[
					"RT-002",
					"Capability escalation",
					"Attempt to expand capability scope",
					"Escalation blocked",
					"55"
				],
				[
					"RT-003",
					"Tenant escape",
					"Product A attempts to access Product B",
					"Access blocked",
					"56"
				],
				[
					"RT-004",
					"Prompt injection",
					"Malicious instructions inside a repository",
					"Injection neutralized",
					"56"
				],
				[
					"RT-005",
					"Malicious repository",
					"Repository attempts to execute outside its environment",
					"Execution blocked",
					"56"
				],
				[
					"RT-006",
					"Secret leakage",
					"Agent attempts to obtain credentials",
					"Access blocked",
					"57"
				],
				[
					"RT-007",
					"Audit tampering",
					"Agent attempts to modify historical actions",
					"Tampering detected",
					"57"
				],
				[
					"RT-008",
					"Runaway agent",
					"Agent creates unlimited actions",
					"Rate limiting enforced",
					"57"
				],
				[
					"RT-009",
					"Failed deployment",
					"Deployment fails; recovery required",
					"Recovery succeeds",
					"58"
				],
				[
					"RT-010",
					"Database corruption",
					"Database corrupted; restore required",
					"Restore succeeds",
					"58"
				]
			]
		},
		{
			k: "h",
			t: "Engineering metrics",
			l: 2
		},
		{
			k: "kpis",
			items: [
				{
					l: "TypeScript errors",
					v: "0"
				},
				{
					l: "Build failures at gate",
					v: "0"
				},
				{
					l: "Failed tests at gate",
					v: "0"
				},
				{
					l: "Critical security vulnerabilities",
					v: "0"
				},
				{
					l: "Unauthorized actions succeeding",
					v: "0"
				},
				{
					l: "Audit events missing",
					v: "0"
				},
				{
					l: "Unverified consequential actions",
					v: "0"
				},
				{
					l: "Tenant isolation violations",
					v: "0"
				},
				{
					l: "Critical recovery failures",
					v: "0"
				},
				{
					l: "Constitutional invariant violations",
					v: "0"
				}
			]
		},
		{
			k: "table",
			cols: ["Metric", "Target"],
			rows: [
				["TypeScript errors", "0"],
				["Build failures", "0 at gate"],
				["Failed tests", "0 at gate"],
				["Critical security vulnerabilities", "0"],
				["Unauthorized actions succeeding", "0"],
				["Audit events missing", "0"],
				["Unverified consequential actions", "0"],
				["Tenant isolation violations", "0"],
				["Recovery failures", "0 critical"],
				["Constitutional invariant violations", "0"],
				["Architecture coverage", "100%"],
				["Critical-path verification", "100%"]
			]
		}
	], [
		{
			k: "h",
			t: "Red-team attack scenarios",
			l: 2
		},
		{
			k: "table",
			cols: [
				"ID",
				"Attack",
				"Description",
				"Expected result",
				"Test day"
			],
			rows: [
				[
					"RT-001",
					"Unauthorized agent action",
					"Agent attempts to bypass governance",
					"Action rejected",
					"26"
				],
				[
					"RT-002",
					"Capability escalation",
					"Attempt to expand capability scope",
					"Escalation blocked",
					"26"
				],
				[
					"RT-003",
					"Tenant escape",
					"Product A attempts to access Product B",
					"Access blocked",
					"26"
				],
				[
					"RT-004",
					"Prompt injection",
					"Malicious instructions inside a repository",
					"Injection neutralized",
					"26"
				],
				[
					"RT-005",
					"Malicious repository",
					"Repository attempts to execute outside its environment",
					"Execution blocked",
					"26"
				],
				[
					"RT-006",
					"Secret leakage",
					"Agent attempts to obtain credentials",
					"Access blocked",
					"27"
				],
				[
					"RT-007",
					"Audit tampering",
					"Agent attempts to modify historical actions",
					"Tampering detected",
					"27"
				],
				[
					"RT-008",
					"Runaway agent",
					"Agent creates unlimited actions",
					"Rate limiting enforced",
					"27"
				],
				[
					"RT-009",
					"Failed deployment",
					"Deployment fails; recovery required",
					"Recovery succeeds",
					"27"
				],
				[
					"RT-010",
					"Database corruption",
					"Database corrupted; restore required",
					"Restore succeeds",
					"27"
				]
			]
		},
		{
			k: "h",
			t: "Engineering metrics",
			l: 2
		},
		{
			k: "kpis",
			items: [
				{
					l: "TypeScript errors",
					v: "0"
				},
				{
					l: "Build failures at gate",
					v: "0"
				},
				{
					l: "Failed tests at gate",
					v: "0"
				},
				{
					l: "Critical security vulnerabilities",
					v: "0"
				},
				{
					l: "Unauthorized actions succeeding",
					v: "0"
				},
				{
					l: "Audit events missing",
					v: "0"
				},
				{
					l: "Unverified consequential actions",
					v: "0"
				},
				{
					l: "Tenant isolation violations",
					v: "0"
				},
				{
					l: "Critical recovery failures",
					v: "0"
				},
				{
					l: "Constitutional invariant violations",
					v: "0"
				}
			]
		},
		{
			k: "table",
			cols: ["Metric", "Target"],
			rows: [
				["TypeScript errors", "0"],
				["Build failures", "0 at gate"],
				["Failed tests", "0 at gate"],
				["Critical security vulnerabilities", "0"],
				["Unauthorized actions succeeding", "0"],
				["Audit events missing", "0"],
				["Unverified consequential actions", "0"],
				["Tenant isolation violations", "0"],
				["Recovery failures", "0 critical"],
				["Constitutional invariant violations", "0"],
				["Architecture coverage (certified bound)", "100% of the constitutional spine"],
				["Critical-path verification", "100% of the certified bound"],
				["Live products", "2, isolated"],
				["Intelligence adapters", "2, behind the contract"]
			]
		},
		{
			k: "h",
			t: "Constitutional adversarial tests",
			l: 2
		},
		{
			k: "p",
			t: "These are enforcement tests, not ordinary unit tests. Passing documentation is not passing. Status today: SPECIFIED — ENFORCEMENT PENDING."
		},
		{
			k: "table",
			cols: [
				"Attempted bypass",
				"Enforcement",
				"Decision",
				"Evidence",
				"Audit",
				"Recovery"
			],
			rows: [
				[
					"Agent executes without authority",
					"Trust Kernel + Broker",
					"DENY",
					"Envelope rejected",
					"why=missing authority",
					"None"
				],
				[
					"Expired capability",
					"Capability System",
					"DENY",
					"Token expired",
					"why=expired",
					"None"
				],
				[
					"Revoked capability",
					"Capability System",
					"DENY",
					"Token revoked",
					"why=revoked",
					"None"
				],
				[
					"Wrong tenant",
					"Isolation Guard",
					"DENY",
					"Bind deny",
					"why=tenant mismatch",
					"Alert"
				],
				[
					"Wrong product",
					"Isolation Guard",
					"DENY",
					"Bind deny",
					"why=product mismatch",
					"Alert"
				],
				[
					"Worker forbidden filesystem",
					"Sandbox + Guard",
					"DENY",
					"Container log",
					"why=fs deny",
					"Destroy worker"
				],
				[
					"Worker forbidden network",
					"Sandbox + Guard",
					"DENY",
					"Container log",
					"why=net deny",
					"Destroy worker"
				],
				[
					"Verifier verifies own work",
					"Verification Engine duty check",
					"DENY",
					"No envelope",
					"why=self-verify",
					"None"
				],
				[
					"Missing HIGH approval",
					"Trust Kernel",
					"DENY",
					"None",
					"why=missing human",
					"None"
				],
				[
					"Policy violation",
					"Governance Engine",
					"DENY",
					"None",
					"why=policy",
					"None"
				],
				[
					"Audit deletion",
					"Audit System write-control",
					"DENY",
					"None",
					"why=tamper (new event)",
					"Freeze if persistent"
				],
				[
					"Recovery without Human",
					"Recovery System",
					"DENY",
					"None",
					"why=unauthorized recovery",
					"None"
				],
				[
					"Vendor SDK in core",
					"Intelligence Contract + build",
					"FAIL BUILD",
					"Contract test",
					"why=article 16",
					"None"
				],
				[
					"AI class lowers policy floor",
					"Trust Kernel deterministic table",
					"DENY",
					"Class unchanged",
					"why=ai-cannot-override",
					"None"
				],
				[
					"Failed deploy",
					"Recovery System",
					"rollback",
					"RT-009 envelope",
					"why=deploy fail",
					"Rollback"
				]
			]
		},
		{
			k: "callout",
			tone: "fix",
			title: "Coverage is the certified bound",
			t: "The freeze targeted 100% of every enterprise function. v5.3 certifies the spine under these tests. M5 remains the horizon. Prose-only rows above are ENFORCEMENT PENDING until the platform exists."
		}
	])
];
function s(id, num, nav, title, dek, v1, v2) {
	return {
		id,
		part: "Governance and change control",
		partId: "G",
		num,
		nav,
		title,
		dek,
		v1,
		...v2 ? { v2 } : {}
	};
}
var PART_G = [
	s("g1", "G.1", "Change", "Architecture change process", "Proposal through audit. No silent architecture.", [{
		k: "p",
		t: "Architecture changes follow the same constitutional path as any other consequential action. A proposal is not a change. Implementation without verification is not a change that counts."
	}, {
		k: "flow",
		steps: [
			"Change proposal",
			"Constitutional review",
			"Impact analysis",
			"Human approval",
			"Version update",
			"Implementation",
			"Verification",
			"Evidence",
			"Audit"
		]
	}]),
	s("g2", "G.2", "Amendment", "Constitutional amendment", "Ten steps. Human approval is mandatory. No amendment may weaken governance.", [
		{
			k: "table",
			cols: [
				"Step",
				"Description",
				"Required approval"
			],
			rows: [
				[
					"1",
					"Amendment proposal submitted",
					"Any authorized actor"
				],
				[
					"2",
					"Constitutional review",
					"Governance Engine"
				],
				[
					"3",
					"Impact analysis",
					"Architecture Agent"
				],
				[
					"4",
					"Human review",
					"Human Owner"
				],
				[
					"5",
					"Approval",
					"Human Owner"
				],
				[
					"6",
					"Version increment",
					"Governance Engine"
				],
				[
					"7",
					"Implementation",
					"AI Agents"
				],
				[
					"8",
					"Verification",
					"Verification Agent"
				],
				[
					"9",
					"Evidence",
					"Evidence Store"
				],
				[
					"10",
					"Audit",
					"Audit System"
				]
			]
		},
		{
			k: "callout",
			tone: "law",
			title: "Unweakenable governance",
			t: "No agent may amend the Constitution without human approval. No amendment may weaken governance (Article 11). Version increment is a governance action, not an agent convenience."
		},
		{
			k: "h",
			t: "Versioning policy as the freeze wrote it",
			l: 2
		},
		{
			k: "table",
			cols: [
				"Version type",
				"When",
				"Example"
			],
			rows: [
				[
					"Major",
					"Constitutional changes",
					"v5.0 → v6.0"
				],
				[
					"Minor",
					"New capabilities",
					"v5.0 → v5.1"
				],
				[
					"Patch",
					"Bug fixes",
					"v5.1 → v5.1.1"
				]
			]
		}
	], [
		{
			k: "table",
			cols: [
				"Step",
				"Description",
				"Required approval"
			],
			rows: [
				[
					"1",
					"Amendment proposal submitted",
					"Any authorized actor"
				],
				[
					"2",
					"Constitutional review",
					"Governance Engine"
				],
				[
					"3",
					"Impact analysis",
					"Architecture Agent"
				],
				[
					"4",
					"Human review",
					"Human Owner"
				],
				[
					"5",
					"Approval",
					"Human Owner"
				],
				[
					"6",
					"Version increment",
					"Governance Engine"
				],
				[
					"7",
					"Implementation",
					"AI Agents"
				],
				[
					"8",
					"Verification",
					"Verification Agent"
				],
				[
					"9",
					"Evidence",
					"Evidence Store"
				],
				[
					"10",
					"Audit",
					"Audit System"
				]
			]
		},
		{
			k: "callout",
			tone: "law",
			title: "Unweakenable governance",
			t: "No agent may amend the Constitution without human approval. No amendment may weaken governance (Article 11)."
		},
		{
			k: "h",
			t: "Versioning law",
			l: 2
		},
		{
			k: "p",
			t: "A document-issue bump is not a delivery number. v5.0 → v5.3 records that this issue is the operative text. It does not mean Wave 5, Gate 5, autonomy A5, or maturity M5."
		},
		{
			k: "table",
			cols: [
				"Number",
				"What it is",
				"What it is not"
			],
			rows: [
				[
					"v5.3",
					"Document issue (operative)",
					"A delivery wave, an autonomy grant, or a maturity certification"
				],
				[
					"Day 1–30 / Waves 1–4 / Gates 1–10",
					"Delivery clock and evidence checkpoints",
					"Document issue, A-scale, or M-scale"
				],
				[
					"A0–A5",
					"Agent autonomy grants",
					"Platform maturity or document issue"
				],
				[
					"M0–M5",
					"Enterprise maturity of the platform",
					"Agent autonomy or document issue"
				],
				[
					"E0–E4",
					"Evidence levels",
					"Autonomy, maturity, or issue"
				]
			]
		},
		{
			k: "callout",
			tone: "fix",
			title: "Do not spend the issue number as progress",
			t: "Bumping this document from v5.0 (received freeze) to v5.3 (operative issue) does not complete a gate, raise an agent, or certify maturity. Delivery numbers and gate numbers remain as written in Part F."
		}
	]),
	s("g3", "G.3", "Emergency", "Emergency procedures", "Freeze, rollback, restore, revocation, quarantine, constitutional review.", [{
		k: "p",
		t: "Recovery is constitutional (Article 15). Emergency actions are authorized and audited. An unaudited freeze is still a freeze; it is also an incident."
	}, {
		k: "table",
		cols: [
			"Procedure",
			"Trigger",
			"Authority",
			"Action"
		],
		rows: [
			[
				"System Freeze",
				"Constitutional violation detected",
				"Human Owner or Automatic",
				"Halt all execution"
			],
			[
				"Rollback",
				"Failed deployment",
				"Governance Engine",
				"Restore previous state"
			],
			[
				"Restore",
				"Data corruption",
				"Human Owner",
				"Restore from backup"
			],
			[
				"Revocation",
				"Capability abuse",
				"Security Agent (recommendation) + governance",
				"Revoke capabilities"
			],
			[
				"Quarantine",
				"Runaway agent",
				"Trust Kernel",
				"Isolate agent"
			],
			[
				"Constitutional Review",
				"Major violation",
				"Human Owner",
				"Full system review"
			]
		]
	}]),
	s("g4", "G.4", "History", "Document history and certification", "v1.0 through v5.0 received freeze. v5.3 is operative. Certification binds to v5.3. Horizon is M5. Day-30 bar is the constitutional spine.", [{
		k: "table",
		cols: [
			"Version",
			"Date",
			"Changes",
			"Author"
		],
		rows: [
			[
				"v1.0",
				"Initial",
				"Initial concept",
				"Human Owner"
			],
			[
				"v2.0",
				"Refinement",
				"Added governance model",
				"Human Owner"
			],
			[
				"v3.0",
				"Expansion",
				"Added product factory",
				"Human Owner"
			],
			[
				"v4.0",
				"Architecture",
				"Added enterprise scope",
				"Human Owner"
			],
			[
				"v5.0",
				"Constitutional",
				"Full constitutional formalization — received freeze",
				"Human Owner + Senior System Architect"
			]
		]
	}, {
		k: "callout",
		tone: "note",
		title: "Received freeze",
		t: "v5.0 is the received freeze. Certification text in that freeze claimed 100% architectural implementation by Day 60. The operative issue amends the certification bound; it does not unwrite the freeze."
	}], [{
		k: "table",
		cols: [
			"Version",
			"Date",
			"Changes",
			"Author"
		],
		rows: [
			[
				"v1.0",
				"Initial",
				"Initial concept",
				"Human Owner"
			],
			[
				"v2.0",
				"Refinement",
				"Added governance model",
				"Human Owner"
			],
			[
				"v3.0",
				"Expansion",
				"Added product factory",
				"Human Owner"
			],
			[
				"v4.0",
				"Architecture",
				"Added enterprise scope",
				"Human Owner"
			],
			[
				"v5.0",
				"Constitutional",
				"Full constitutional formalization — received freeze",
				"Human Owner + Senior System Architect"
			],
			[
				"v5.1",
				"Numbering issue",
				"Versioning law: split L into A (autonomy) and M (maturity); evidence remains E; Day-60 bound M0–M2 with M3 isolation proof.",
				"Human Owner + Senior System Architect"
			],
			[
				"v5.2",
				"Prior operative",
				"30-day parallel strike. Audit basis. M4 language later corrected as overclaim risk.",
				"Human Owner + Senior System Architect"
			],
			[
				"v5.3",
				"Operative issue",
				"P0 corrections: canonical names, identity model, Trust Kernel / Isolation Guard / Recovery seats, A2 duty split, AG-SECV, closed contracts, container sandbox, deterministic classifier, binding catalogue of 18, lifecycle enum, C.3 wave alignment. Articles 1–16 unchanged in law. M5 retained.",
				"Human Owner + Senior System Architect"
			]
		]
	}, {
		k: "callout",
		tone: "law",
		title: "Certification bound",
		t: "Certification is bound to v5.3. The enterprise horizon is M5. Day-30 certification is the evidenced constitutional spine, not M5 and not this reader. Work against v5.0 100% language is not a v5.3 certification."
	}])
];
var CATALOGUE = [
	[
		"AG-DISC",
		"Product Discovery",
		"Factory",
		"A1",
		"propose",
		"Discovery proposals",
		"None",
		"None — cannot verify own discovery",
		"Cannot execute",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-REQ",
		"Requirements",
		"Factory",
		"A1",
		"propose",
		"Requirements proposals",
		"None",
		"None",
		"Cannot execute",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-DOM",
		"Domain Analyst",
		"Factory",
		"A1",
		"propose",
		"Domain-model proposals",
		"None",
		"None",
		"Cannot write production schema",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-ARCH",
		"Architecture",
		"Factory",
		"A1",
		"propose",
		"Architecture proposals",
		"None",
		"None",
		"Cannot implement without human approval",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-DB",
		"Database",
		"Factory",
		"A1",
		"propose",
		"Schema/migration proposals",
		"None",
		"None",
		"Production apply only via Broker after approval",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-UX",
		"UX",
		"Factory",
		"A1",
		"propose",
		"UX proposals",
		"None",
		"None",
		"Cannot ship UI",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-SEC",
		"Security",
		"Security engineering",
		"A1",
		"propose",
		"Findings, threat models, revocation recommendations",
		"None",
		"FORBIDDEN on own remediations (Article 8)",
		"Cannot change production silently",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-SECV",
		"Security Verifier",
		"Security verification",
		"A2",
		"verify",
		"Independent security verification of others' work",
		"None",
		"Yes — never of AG-SEC work it originated; never of own prior proposal (it does not propose)",
		"No implementation execution",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-REPO",
		"Repository",
		"Factory",
		"A1",
		"propose",
		"Repo-change proposals; Brokered patches when tokenled",
		"None",
		"None",
		"No direct production, no broker bypass",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-QA",
		"QA",
		"Quality",
		"A1",
		"propose",
		"Test designs; governed test runs are not independent verification",
		"None",
		"FORBIDDEN as independent verifier of tests it designed or ran",
		"No promotion of unverified work",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-VER",
		"Verification",
		"Verification",
		"A2",
		"verify",
		"Independent verification; Evidence Envelopes; gate records",
		"None",
		"Yes — never of work this identity performed",
		"No product implementation execution. A2 here is governed verification duty, not execution duty.",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-DEP",
		"Deployment",
		"Release",
		"A1",
		"propose",
		"Deployment proposals",
		"None",
		"None",
		"No agent deploys; Human/Broker path only",
		"product+environment",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-OPS",
		"Operations",
		"Operations",
		"A1",
		"propose",
		"Incident and ops proposals",
		"None",
		"None",
		"Does not own Recovery",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-FIN",
		"Financial Intelligence",
		"Intelligence",
		"A0",
		"advise",
		"Cost recommendations as proposals",
		"None",
		"None",
		"None",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-LEG",
		"Legal/Compliance Intelligence",
		"Intelligence",
		"A0",
		"advise",
		"Compliance gap proposals",
		"None",
		"None",
		"None",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-RSH",
		"Research Intelligence",
		"Intelligence",
		"A0",
		"advise",
		"Research notes as proposals",
		"None",
		"None",
		"None",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-PERF",
		"Performance Intelligence",
		"Intelligence",
		"A0",
		"advise",
		"Performance notes as proposals",
		"None",
		"None",
		"None",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	],
	[
		"AG-REL",
		"Reliability Intelligence",
		"Intelligence",
		"A0",
		"advise",
		"Reliability notes as proposals",
		"None",
		"None",
		"None",
		"product",
		"SPECIFIED — NOT IMPLEMENTED"
	]
];
var NAMING = [
	[
		"Trust Kernel",
		"none (canonical)",
		"Governance layer — constitutional enforcement core",
		"Deterministic risk classification, default-deny, autonomy-ceiling checks, HIGH/CRITICAL human-gate. Not a second governance system.",
		"Governance layer",
		"Called before Governance Engine evaluation. Does not issue tokens, grants, or execute."
	],
	[
		"Governance Engine",
		"Policy Engine (alias)",
		"Governance layer — runtime",
		"Evaluate versioned policy against a classified proposal. Produce allow/deny. Cannot classify risk (Trust Kernel does).",
		"Governance layer",
		"Consumes Trust Kernel class. Feeds Authority System."
	],
	[
		"Authority System",
		"Authority Kernel (alias, retired in v5.3 prose)",
		"Authority layer — runtime",
		"Issue, delegate, revoke authority grants. Reject self-grants.",
		"Authority layer",
		"Does not classify risk. Does not mint capability tokens."
	],
	[
		"Capability System",
		"Capability Manager (alias, retired in v5.3 prose)",
		"Capabilities layer — runtime",
		"Mint, validate, expire, revoke capability tokens. Tokens are not transferable authority.",
		"Capabilities layer",
		"Requires a live Authority grant. Consumed by Execution Broker."
	],
	[
		"Execution Broker",
		"none",
		"Execution layer — admit/deny",
		"Only admission point for execution. Binds proposal + token + Isolation Guard.",
		"Execution layer",
		"Never executes on the host. Spawns a Worker in a sandbox."
	],
	[
		"Isolation Guard",
		"none",
		"Execution layer — boundary enforcer",
		"Bind worker to tenant, product, environment. Deny cross-boundary FS/network/secret access.",
		"Execution layer",
		"Consulted by Broker before spawn; enforced inside the sandbox."
	],
	[
		"Worker",
		"Execution identity",
		"Execution layer — ephemeral identity",
		"Runs the admitted action inside the sandbox. Cannot propose, approve, or verify.",
		"Execution layer",
		"Spawned per proposal. Destroyed after extract. Distinct from Agent Identity."
	],
	[
		"Verification Engine",
		"none",
		"Verification layer — runtime",
		"Independent verification of results. Writes Evidence Envelopes. Never implements product work.",
		"Verification layer",
		"Verifier identity ≠ worker identity ≠ proposing agent identity for the same work."
	],
	[
		"Evidence Store",
		"none",
		"Evidence layer — runtime",
		"Store Evidence Envelopes. E0 is a defect, not a level that can be stored as success.",
		"Evidence layer",
		"Append-oriented. Promotion of claims requires a stored envelope."
	],
	[
		"Audit System",
		"none",
		"Audit layer — runtime",
		"Append-only AuditEvent write path. Hash chain plus write-control.",
		"Audit layer",
		"Agents and workers cannot update or delete. System + Trust Kernel + Recovery (authorized) may append."
	],
	[
		"Recovery System",
		"none",
		"Constitutional subsystem (not an ops feature)",
		"Freeze, rollback, restore. Authority is Human. Evidence and audit are mandatory.",
		"Human + Constitution, implemented as Recovery System",
		"Unaudited recovery is rejected. Not owned by Operations System."
	],
	[
		"Intelligence Contract",
		"Provider adapter (behind the contract)",
		"Intelligence layer",
		"Only path to models. Outputs are proposals. Adapters are replaceable.",
		"Intelligence layer",
		"Core must not import vendor SDKs."
	],
	[
		"Product Factory",
		"none",
		"Factory subsystem across Planning + Execution + Verification",
		"Idea through retirement under the authoritative lifecycle.",
		"Planning layer owns plans; Execution owns runs",
		"A plan is not a deploy."
	],
	[
		"Operations System",
		"none",
		"TARGET_ARCHITECTURE for full ITSM; thin operator views in Day 30",
		"Monitoring, incident, compliance views.",
		"Operations",
		"Does not own Recovery. Does not grant authority."
	]
];
var IDENTITY_RIGHTS = [
	[
		"Human",
		"No (except freeze/approve records)",
		"Yes",
		"Yes",
		"No (not as Worker)",
		"May confirm CRITICAL",
		"Yes",
		"Yes",
		"Yes",
		"Yes",
		"Yes"
	],
	[
		"Agent (advise A0)",
		"Yes — recommendation",
		"No",
		"No",
		"No",
		"No",
		"No",
		"No",
		"No",
		"No",
		"No"
	],
	[
		"Agent (propose A1)",
		"Yes — AgentProposal",
		"No",
		"No",
		"No",
		"No",
		"No",
		"Append only via system",
		"Recommend only",
		"No",
		"No"
	],
	[
		"Agent (verify A2, duty=verify)",
		"No for implementation",
		"No",
		"No",
		"No implementation",
		"Yes — others' work only",
		"Yes (envelope)",
		"Append via system",
		"No",
		"No",
		"No"
	],
	[
		"Worker",
		"No",
		"No",
		"No",
		"Yes — in sandbox only",
		"No",
		"No",
		"No",
		"No",
		"No",
		"No"
	],
	[
		"Tenant",
		"Scope, not an actor",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—"
	],
	[
		"Product",
		"Scope, not an actor",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—"
	],
	[
		"Environment",
		"Bound, not an actor",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—",
		"—"
	],
	[
		"System (Trust Kernel, Audit, Recovery runtime)",
		"No proposals",
		"No",
		"Enforces",
		"No product exec",
		"No",
		"May emit system evidence",
		"Yes — append",
		"No",
		"Executes freeze when Human ordered",
		"Executes restore when Human ordered"
	]
];
var LIFECYCLE_ORDER = [
	{
		state: "idea",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "discovery",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "requirements",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "domain_model",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "passport",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "blueprint",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "architecture",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "human_approval",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "implementation_plan",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "execution",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "build",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "test",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "security",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "verification",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "evidence",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "deployment_approval",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "deployment",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "post_deployment_verification",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "operations",
		activity: "ACTIVE_INCREMENT"
	},
	{
		state: "learning",
		activity: "TARGET_FUTURE"
	},
	{
		state: "improvement",
		activity: "TARGET_FUTURE"
	},
	{
		state: "retirement",
		activity: "TARGET_FUTURE"
	}
];
function d(id, num, nav, title, dek, v2) {
	return {
		id,
		part: "Technical specification",
		partId: "D",
		num,
		nav,
		title,
		dek,
		v1: [{
			k: "callout",
			tone: "note",
			title: "v5.3 contract — not in the received freeze",
			t: "This closed contract is issued in v5.3. Switch to the operative issue. v5.0 is preserved. These types are SPECIFIED. They are not the running AGBOFA platform."
		}],
		v2
	};
}
var V53_D = [
	d("d6", "D.6", "Naming", "Canonical naming map", "One subsystem, one canonical name. Aliases are historical, not extra implementations.", [{
		k: "callout",
		tone: "law",
		title: "P0-01",
		t: "Multiple names must not imply multiple implementations. Status of every runtime listed here: SPECIFIED — ENFORCEMENT PENDING. This reader is not the platform."
	}, {
		k: "table",
		cols: [
			"Canonical name",
			"Aliases",
			"Level",
			"Responsibility",
			"Owner",
			"Relationship"
		],
		rows: NAMING
	}]),
	d("d7", "D.7", "Identity", "Identity model", "Human, Agent, Worker, Tenant, Product, Environment. Substitution is forbidden.", [
		{
			k: "callout",
			tone: "law",
			title: "P0-02",
			t: "A Worker is not an Agent. An Agent is not a Human. A Tenant is a scope, not an actor. Identity substitution is a constitutional violation."
		},
		{
			k: "p",
			t: "Human authorizes and approves. Agent proposes, plans, or verifies according to duty. Worker executes inside a sandbox under a token. Tenant owns isolated organizational scope. Product belongs to one tenant and has one lifecycle. Environment bounds execution and deployment."
		},
		{
			k: "table",
			cols: [
				"Identity",
				"Propose",
				"Approve",
				"Authorize",
				"Execute",
				"Verify",
				"Write evidence",
				"Write audit",
				"Revoke",
				"Freeze",
				"Recover"
			],
			rows: IDENTITY_RIGHTS
		},
		{
			k: "ul",
			items: [
				"A Worker identity is minted per admitted proposal and dies at sandbox destroy. It cannot inherit Agent duty.",
				"An Agent with duty=propose cannot hold duty=verify on the same proposalId or artifact lineage.",
				"Verification Agent and Security Verifier are duty=verify. They never receive implementation-execution tokens.",
				"Privilege escalation by renaming identities is denied at Trust Kernel."
			]
		}
	]),
	d("d8", "D.8", "Placement", "Trust Kernel, Isolation Guard, Recovery", "Named enforcers now have seats. Not second systems. Not ops features.", [
		{
			k: "h",
			t: "Trust Kernel — P0-03",
			l: 2
		},
		{
			k: "p",
			t: "The Trust Kernel is the constitutional enforcement core of the Governance layer. It is not a second Governance Engine. It classifies risk with deterministic policy, applies the autonomy ceiling, default-denies unclassified consequential actions, and requires Human approval on HIGH and CRITICAL. It does not author policy text, issue grants, mint tokens, or execute product work. Every AgentProposal must pass Trust Kernel before Governance Engine evaluation. Articles 1, 3, 4, 12."
		},
		{
			k: "h",
			t: "Isolation Guard — P0-04",
			l: 2
		},
		{
			k: "p",
			t: "The Isolation Guard sits on the Execution layer beside the Execution Broker. The Broker admits; the Guard binds. Inputs: WorkerIdentity, TenantId, ProductId, EnvironmentId, CapabilityToken.scope. Outputs: bind-allow or bind-deny. The Worker cannot start without a bind-allow. The sandbox implements the Guard (filesystem, network, process, secrets). Isolation is not a policy slogan. Article 14."
		},
		{
			k: "h",
			t: "Recovery System — P0-05",
			l: 2
		},
		{
			k: "p",
			t: "Recovery is constitutional. Authority is Human. The Recovery System implements freeze, rollback, and restore. Every recovery action produces an Evidence Envelope and an AuditEvent. Unaudited recovery is rejected. Operations System does not own Recovery. Articles 1 and 15."
		},
		{
			k: "flow",
			steps: [
				"Human Identity",
				"Agent Identity (proposal)",
				"Trust Kernel (deterministic class)",
				"Governance Engine",
				"Authority System",
				"Capability System (token)",
				"Execution Broker (admit/deny)",
				"Isolation Guard (bind)",
				"Isolated Worker",
				"Result (claim)",
				"Independent Verification",
				"Evidence Store",
				"Audit System",
				"Freeze / Recovery System"
			]
		}
	]),
	d("d9", "D.9", "Contracts", "Closed type contracts", "No undefined *Reference types. Module: src/lib/agbofa/contracts.ts. SPECIFIED, not implemented as kernel.", [
		{
			k: "callout",
			tone: "note",
			title: "Engineering contract vs platform",
			t: "These types are the v5.3 closed contracts (P0-08–P0-12). They typecheck in this repository as specification. They do not mean a Trust Kernel is running. Status: SPECIFIED — ENFORCEMENT PENDING."
		},
		{
			k: "h",
			t: "AgentProposal — P0-10",
			l: 2
		},
		{
			k: "p",
			t: "An agent does not execute because it produced a proposal. The proposal is the only input to classification, risk, governance, authority, capability, approval, and the Broker decision."
		},
		{
			k: "h",
			t: "CapabilityToken — P0-08",
			l: 2
		},
		{
			k: "p",
			t: "Subject, tenant, product, environment, capability, action, resource, authority grant, proposal, risk class, issuer, times, nonce, status, optional approval and revocation. Tokens are not transferable authority. Worker tokens are not Agent tokens."
		},
		{
			k: "h",
			t: "ProductPassport — P0-09",
			l: 2
		},
		{
			k: "p",
			t: "Every former *Reference is a closed type: Requirement, ArchitectureRecord, TechnologyProfile, DatabaseRecord, RepositoryRecord, EnvironmentIdentity, DeploymentRecord, AgentBinding, CapabilityToken, Policy, AuditEventId, EvidenceId, Incident, RecoveryRecord. constitutionVersion and lifecycleState are required. incrementActivity marks TARGET_FUTURE stages without deleting them."
		},
		{
			k: "h",
			t: "EvidenceEnvelope — P0-11",
			l: 2
		},
		{
			k: "p",
			t: "Execution result is a claim. Verified evidence is an envelope at E1–E4 with a verification AgentId. E0 cannot be stored as success. Hash + previousHash plus Evidence Store write-control."
		},
		{
			k: "h",
			t: "AuditEvent — P0-12",
			l: 2
		},
		{
			k: "p",
			t: "why is required. tenantId and productId are required on tenant/product-scoped actions. Append-only. Writers: Audit System, Trust Kernel, Recovery System (Human-authorized). Agents, workers, and proposers cannot modify, delete, rewrite, suppress, or retroactively alter events. Hash chaining is necessary and not sufficient without write-control."
		}
	]),
	d("d10", "D.10", "Sandbox", "Sandbox and isolation mechanism", "Day-30 mechanism: Linux containers. Enforceable and testable. Not a metaphor.", [{
		k: "callout",
		tone: "law",
		title: "P0-13",
		t: "Day-30 isolation is a Linux container per Worker. TARGET_ARCHITECTURE may later use stronger isolation. The increment mechanism is containers. Status: SPECIFIED — ENFORCEMENT PENDING."
	}, {
		k: "table",
		cols: ["Boundary", "Day-30 rule"],
		rows: [
			["Process", "One container per Worker. no-new-privileges. Dropped capabilities. Non-root user."],
			["Filesystem", "Read-only root. Writable workspace mount only. No docker.sock. No host mounts."],
			["Network", "Default none. Allowlist only if the token.scope.network is allowlist and Isolation Guard binds it."],
			["Secrets", "Never in image or env dump. tmpfs injection of the exact secret named on the token, wiped on destroy."],
			["Resources", "CPU, memory, PIDs, wall-clock timeout from the token."],
			["Lifecycle", "create → Isolation Guard bind → run → extract artifacts → destroy. No reuse of a Worker identity."],
			["Host", "Broker and Guard run on the host. Worker has no host API. Extract is pull-only of declared artifact paths."]
		]
	}]),
	d("d11", "D.11", "Classifier", "Non-AI governance classifier", "AI may propose a class. Deterministic policy is the authority.", [{
		k: "callout",
		tone: "law",
		title: "P0-14",
		t: "Trust Kernel classification is a deterministic table: action type × resource class × environment → risk floor. An Intelligence Contract recommendation may suggest a class. It cannot lower the floor. It cannot skip Human on HIGH/CRITICAL. AI recommendation is not governance authority."
	}, {
		k: "p",
		t: "Unclassified consequential actions are HIGH (Article 4 default-deny). LOW is token-only only when the deterministic table says LOW. An agent cannot classify its own action."
	}]),
	d("d12", "D.12", "Lifecycle", "Authoritative factory lifecycle", "One state enum. TARGET_FUTURE stages are inactive, not deleted. P0-17.", [
		{
			k: "p",
			t: "implementation_plan is the approved plan artifact. execution is brokered Worker action. build is compile/package. They are sequential, not aliases. Passport.lifecycleState uses this enum only."
		},
		{
			k: "table",
			cols: ["State", "Increment"],
			rows: LIFECYCLE_ORDER.map((row) => [row.state, row.activity])
		},
		{
			k: "machine",
			title: "Authoritative factory (happy path)",
			states: LIFECYCLE_ORDER.map((row, index) => ({
				id: row.state,
				name: `${row.state}${row.activity === "TARGET_FUTURE" ? " (future)" : ""}`,
				exits: LIFECYCLE_ORDER[index + 1] ? [
					LIFECYCLE_ORDER[index + 1].state,
					"rejected",
					"returned"
				] : ["rejected"]
			}))
		}
	])
];
var V53_C = [{
	id: "c6",
	part: "Operating model",
	partId: "C",
	num: "C.6",
	nav: "Catalogue",
	title: "Binding agent catalogue",
	dek: "One roster. Eighteen specified identities. None implemented on the platform.",
	v1: [{
		k: "callout",
		tone: "note",
		title: "Not in the freeze roster",
		t: "v5.0 published twelve L1/L2 names. v5.3 binds eighteen identities including five A0 intelligence roles and Security Verifier. Switch to the operative issue."
	}],
	v2: [
		{
			k: "callout",
			tone: "law",
			title: "P0-15 / P0-06 / P0-07",
			t: "This table is the binding catalogue. A2 is an autonomy grant for in-scope governed action of the agent's duty. Duty is a separate field. duty=verify never includes product implementation execution. AG-SEC proposes. AG-SECV verifies. Self-verification is denied."
		},
		{
			k: "table",
			cols: [
				"ID",
				"Name",
				"Role",
				"A",
				"Duty",
				"Capabilities",
				"Execution",
				"Verification",
				"Independence / restrictions",
				"Scope",
				"Status"
			],
			rows: CATALOGUE
		},
		{
			k: "p",
			t: "B.3's twelve names are a subset. The five A0 intelligence agents and AG-SECV are specified here. There is no second catalogue."
		}
	]
}];
var V53_FRONT = [{
	id: "p0",
	part: "Front",
	partId: "front",
	num: "04",
	nav: "P0 closure",
	title: "P0 closure matrix",
	dek: "Accepted audit defects. v5.3 corrections. Not a redesign.",
	v1: [{
		k: "p",
		t: "P0 closure is issued in v5.3. You are on the received freeze. Switch issues."
	}],
	v2: [{
		k: "table",
		cols: [
			"P0",
			"Finding",
			"Correction",
			"Section",
			"Status",
			"Verify"
		],
		rows: [
			[
				"P0-01",
				"Multiple names, implied multiple systems",
				"Canonical naming map",
				"D.6",
				"SPECIFIED",
				"No alias used as a second module"
			],
			[
				"P0-02",
				"No identity model",
				"Human/Agent/Worker/Tenant/Product/Environment + rights matrix",
				"D.7",
				"SPECIFIED",
				"Worker ≠ Agent tests"
			],
			[
				"P0-03",
				"Trust Kernel unnamed on the map",
				"Governance-layer enforcement core, not a second engine",
				"D.8",
				"SPECIFIED",
				"Every proposal hits Trust Kernel"
			],
			[
				"P0-04",
				"Isolation Guard had no seat",
				"Execution layer bind beside Broker",
				"D.8 / D.10",
				"SPECIFIED",
				"RT-003 + FS/net deny"
			],
			[
				"P0-05",
				"Recovery treated as ops",
				"Constitutional Recovery System",
				"D.8",
				"SPECIFIED",
				"RT-009/010"
			],
			[
				"P0-06",
				"A2 = execution vs verifier A2",
				"Duty separate from A-level; verifier duty cannot execute product work",
				"A.4 / C.6",
				"SPECIFIED",
				"Verifier token cannot be implementation"
			],
			[
				"P0-07",
				"Security Agent verifies security",
				"AG-SEC propose; AG-SECV verify",
				"C.6",
				"SPECIFIED",
				"Self-verify deny"
			],
			[
				"P0-08",
				"CapabilityToken sketch",
				"Closed CapabilityToken",
				"D.9 / contracts.ts",
				"SPECIFIED",
				"Typecheck + expire/revoke tests"
			],
			[
				"P0-09",
				"Passport *Reference placeholders",
				"Closed ProductPassport graph",
				"D.9 / D.12",
				"SPECIFIED",
				"Unknown state is a defect"
			],
			[
				"P0-10",
				"No proposal contract",
				"AgentProposal",
				"D.9",
				"SPECIFIED",
				"No execute-from-text"
			],
			[
				"P0-11",
				"No evidence envelope",
				"EvidenceEnvelope E1–E4",
				"D.9",
				"SPECIFIED",
				"E0 cannot store as success"
			],
			[
				"P0-12",
				"Audit missing why; optional tenant; no write-control",
				"Closed AuditEvent + writers",
				"D.9",
				"SPECIFIED",
				"Delete attempt denied"
			],
			[
				"P0-13",
				"Sandbox was a slogan",
				"Linux container rules",
				"D.10",
				"SPECIFIED",
				"Forbidden FS/net deny"
			],
			[
				"P0-14",
				"Classifier could be AI authority",
				"Deterministic floor; AI cannot lower",
				"D.11",
				"SPECIFIED",
				"AI override deny"
			],
			[
				"P0-15",
				"12 vs 17 agents",
				"Binding catalogue of 18",
				"C.6",
				"SPECIFIED",
				"Single roster"
			],
			[
				"P0-16",
				"C.3 Blocks vs F Waves",
				"C.3 v2 uses waves/days",
				"C.3 / F",
				"SPECIFIED",
				"No 60-day / 100% in operative"
			],
			[
				"P0-17",
				"Plan vs execution vs build collision",
				"One enum; future stages inactive",
				"D.12",
				"SPECIFIED",
				"Passport union = table"
			]
		]
	}, {
		k: "callout",
		tone: "warn",
		title: "Do not overclaim",
		t: "v5.3 is the authoritative engineering specification. SPECIFIED is not IMPLEMENTED. The Constitution Reader is not AGBOFA. Day-30 certification, if later earned, proves the first increment, not M5."
	}]
}];
var V53_TRACE = [{
	id: "a6",
	part: "Constitution",
	partId: "A",
	num: "A.6",
	nav: "Trace",
	title: "Constitutional traceability",
	dek: "Article → principle → mechanism → enforcement → test → evidence. P-set is not bijective.",
	v1: [{
		k: "p",
		t: "Traceability is issued in v5.3. Switch to the operative issue."
	}],
	v2: [{
		k: "callout",
		tone: "note",
		title: "Not bijective",
		t: "P1–P15 are not one-to-one with Articles 1–16. Article 7 (Execution is not success) has no dedicated principle. P2 (Constitutional supremacy) has no dedicated article; Article 2 is AGBOFA sovereignty. Articles are not rewritten to force numbering."
	}, {
		k: "table",
		cols: [
			"Article",
			"Principle",
			"Mechanism",
			"Enforcement",
			"Test",
			"Evidence"
		],
		rows: [
			[
				"1 Human sovereignty",
				"P1",
				"Human Identity, Trust Kernel HIGH/CRITICAL gate",
				"Trust Kernel",
				"Missing human on HIGH → DENY",
				"Approval + AuditEvent"
			],
			[
				"2 AGBOFA sovereignty",
				"P2 related, not identical",
				"Authority System",
				"Reject self-grant",
				"Self-grant → DENY",
				"AuditEvent"
			],
			[
				"3 Intelligence ≠ authority",
				"P3",
				"Intelligence Contract + AgentProposal",
				"Broker admits proposals only",
				"Model output auto-run → DENY",
				"Proposal + deny audit"
			],
			[
				"4 Authority explicit",
				"P4",
				"Authority grant on token",
				"Trust Kernel default-deny",
				"Missing chain → DENY",
				"AuditEvent.why"
			],
			[
				"5 Capability scoped",
				"P5",
				"CapabilityToken",
				"Capability System",
				"Expired/wrong tenant → DENY",
				"Token status + audit"
			],
			[
				"6 Execution isolated",
				"P6",
				"Broker + Isolation Guard + container",
				"Guard bind",
				"Forbidden FS/net → DENY",
				"Sandbox log envelope"
			],
			[
				"7 Execution ≠ success",
				"none (gap recorded)",
				"Result is a claim; EvidenceEnvelope required",
				"Verification Engine",
				"Promote unverified → DENY",
				"Envelope"
			],
			[
				"8 Independent verification",
				"P7",
				"duty=verify identity ≠ worker",
				"Verification Engine + AG-SECV",
				"Self-verify → DENY",
				"Envelope.verificationAgentId"
			],
			[
				"9 Evidence precedes trust",
				"P8",
				"Evidence Store",
				"E0 rejected",
				"E0 as success → DENY",
				"Envelope.level"
			],
			[
				"10 Audit persistent",
				"P9",
				"Audit System write-control",
				"Append-only writers",
				"Delete/update → DENY",
				"AuditEvent"
			],
			[
				"11 Unweakenable governance",
				"P10",
				"Governance Engine + Human",
				"Agent policy write denied",
				"Agent amends policy → DENY",
				"AuditEvent"
			],
			[
				"12 Autonomy earned",
				"P11",
				"Trust Kernel ceiling",
				"Catalogue A0–A2 only in increment",
				"Self-raise A → DENY",
				"AgentIdentity.autonomy"
			],
			[
				"13 Learning verified",
				"P12",
				"Memory candidates",
				"No auto-promote",
				"Unverified to memory → DENY",
				"Envelope"
			],
			[
				"14 Tenant isolation",
				"P13",
				"Isolation Guard",
				"Bind deny",
				"Wrong tenant → DENY",
				"RT-003 envelope"
			],
			[
				"15 Recovery constitutional",
				"P14",
				"Recovery System",
				"Human-authorized, audited",
				"Recover without authority → DENY",
				"RecoveryRecord"
			],
			[
				"16 Provider independence",
				"P15",
				"Intelligence Contract",
				"Core vendor-import forbidden",
				"Vendor type in core → FAIL BUILD",
				"Contract test"
			]
		]
	}]
}];
var SECTIONS = [
	...FRONT,
	...V53_FRONT,
	...PART_A,
	...V53_TRACE,
	...PART_B,
	...PART_C,
	...V53_C,
	...PART_D,
	...V53_D,
	...PART_E,
	...PART_F,
	...PART_G
];
function blocksFor(section, version) {
	if (version === "v2" && section.v2) return section.v2;
	return section.v1;
}
function sectionHasDiff(section) {
	return Boolean(section.v2);
}
function searchSections(query, version) {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	return SECTIONS.filter((section) => {
		return [
			section.title,
			section.dek,
			section.nav,
			section.num,
			...blocksFor(section, version).flatMap(blockText)
		].join(" ").toLowerCase().includes(q);
	});
}
function blockText(block) {
	switch (block.k) {
		case "p":
		case "h":
		case "quote":
		case "code": return [block.t];
		case "callout": return [block.title, block.t];
		case "ul":
		case "ol": return block.items;
		case "table": return [...block.cols, ...block.rows.flat()];
		case "kpis": return block.items.flatMap((item) => [
			item.l,
			item.v,
			item.h ?? ""
		]);
		case "flow": return block.steps;
		case "article": return [
			block.title,
			block.text,
			block.scope,
			block.enforcement,
			block.consequence,
			...block.prohibitions,
			...block.requirements
		];
		case "layer": return [
			block.name,
			block.purpose,
			...block.responsibilities,
			...block.inputs,
			...block.outputs,
			...block.permissions,
			...block.prohibited
		];
		case "agent": return [
			block.name,
			block.purpose,
			block.authority,
			block.confidence,
			block.autonomy,
			...block.inputs,
			...block.outputs,
			...block.tools,
			...block.prohibited
		];
		case "machine": return [block.title, ...block.states.map((state) => state.name)];
		case "board": return [...block.tracks.flatMap((track) => [track.name, track.crew]), ...block.waves.flatMap((wave) => [
			wave.name,
			wave.certify,
			...Object.values(wave.cells).flat()
		])];
		case "days": return block.rows.flatMap((row) => [
			`Day ${row.d}`,
			row.focus,
			row.gate ?? "",
			row.k,
			row.i,
			row.p,
			row.x,
			row.g
		]);
		default: return [];
	}
}
function toWinAnsi(input) {
	return input.replace(/\u2018|\u2019|\u02bc/g, "'").replace(/\u201c|\u201d/g, "\"").replace(/\u2013|\u2014/g, "--").replace(/\u2022/g, "-").replace(/\u2260/g, "!=").replace(/\u2192/g, "->").replace(/\u2190/g, "<-").replace(/\u00d7/g, "x").replace(/\u00a0/g, " ").replace(/\u2026/g, "...").replace(/\u00b7/g, "-").replace(/[^\x09\x0a\x0d\x20-\x7e]/g, (ch) => {
		if (ch === "\n" || ch === "\r" || ch === "	") return ch;
		return "?";
	});
}
function pdfLiteral(text) {
	return `(${toWinAnsi(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")})`;
}
/** Helvetica AFM widths for ASCII 32–126, 1000-unit em. */
var HELV = [
	278,
	278,
	355,
	556,
	556,
	889,
	667,
	191,
	333,
	333,
	389,
	584,
	278,
	333,
	278,
	278,
	556,
	556,
	556,
	556,
	556,
	556,
	556,
	556,
	556,
	556,
	278,
	278,
	584,
	584,
	584,
	556,
	1015,
	667,
	667,
	722,
	722,
	667,
	611,
	778,
	722,
	278,
	500,
	667,
	556,
	833,
	722,
	778,
	667,
	778,
	722,
	667,
	611,
	722,
	667,
	944,
	667,
	667,
	611,
	278,
	278,
	278,
	469,
	556,
	222,
	556,
	556,
	500,
	556,
	556,
	278,
	556,
	556,
	222,
	222,
	500,
	222,
	833,
	556,
	556,
	556,
	556,
	333,
	500,
	278,
	556,
	500,
	722,
	500,
	500,
	500,
	334,
	260,
	334,
	584
];
function helveticaWidth(text, size, bold = false) {
	let w = 0;
	for (let i = 0; i < text.length; i++) {
		const code = text.charCodeAt(i);
		const units = code >= 32 && code <= 126 ? HELV[code - 32] : 600;
		w += units;
	}
	return w * size * (bold ? 1.06 : 1) / 1e3;
}
function wrapText(text, size, maxWidth, bold = false) {
	const normalized = text.replace(/\s+/g, " ").trim();
	if (!normalized) return [];
	const words = normalized.split(" ");
	const lines = [];
	let current = "";
	for (const word of words) {
		const trial = current ? `${current} ${word}` : word;
		if (helveticaWidth(trial, size, bold) <= maxWidth) {
			current = trial;
			continue;
		}
		if (current) lines.push(current);
		if (helveticaWidth(word, size, bold) <= maxWidth) {
			current = word;
			continue;
		}
		let chunk = "";
		for (const ch of word) {
			const next = chunk + ch;
			if (helveticaWidth(next, size, bold) <= maxWidth) chunk = next;
			else {
				if (chunk) lines.push(chunk);
				chunk = ch;
			}
		}
		current = chunk;
	}
	if (current) lines.push(current);
	return lines;
}
var PAGE_W = 595;
var PAGE_H = 842;
var MARGIN = 54;
var CONTENT_W = 487;
var PdfLayout = class {
	pages = [[]];
	y = 770;
	header = "";
	issue = "";
	onCover = true;
	constructor(header, issue) {
		this.header = header;
		this.issue = issue;
	}
	add(op) {
		this.pages[this.pages.length - 1].push(op);
	}
	startCover() {
		this.onCover = true;
		this.y = 722;
	}
	finishCover() {
		this.onCover = false;
		this.newPage();
	}
	runningHeader() {
		this.add("0.45 0.45 0.45 rg");
		this.add("BT /F1 8 Tf");
		this.add(`1 0 0 1 ${MARGIN} 806 Tm`);
		this.add(`${pdfLiteral(this.header)} Tj ET`);
		this.add("BT /F1 8 Tf");
		this.add(`1 0 0 1 451 806 Tm`);
		this.add(`${pdfLiteral(this.issue)} Tj ET`);
		this.add("0.75 0.75 0.75 RG 0.6 w");
		this.add(`${MARGIN} 798 m 541 798 l S`);
	}
	newPage() {
		this.pages.push([]);
		this.y = 778;
		if (!this.onCover) this.runningHeader();
	}
	ensure(h) {
		if (this.y - h < 82) {
			this.onCover = false;
			this.newPage();
		}
	}
	gap(n = 10) {
		this.y -= n;
	}
	rule() {
		this.ensure(12);
		this.add("0.8 0.8 0.8 RG 0.5 w");
		this.add(`${MARGIN} ${this.y} m 541 ${this.y} l S`);
		this.y -= 10;
	}
	textLine(text, size, font, x = MARGIN) {
		this.ensure(size + 4);
		this.add("0 0 0 rg");
		this.add("BT");
		this.add(`/${font} ${size} Tf`);
		this.add(`1 0 0 1 ${x} ${this.y - size} Tm`);
		this.add(`${pdfLiteral(text)} Tj`);
		this.add("ET");
		this.y -= size * 1.35;
	}
	para(text, size = 10, font = "F1", indent = 0) {
		const lines = wrapText(text, size, CONTENT_W - indent, font === "F2");
		for (const line of lines) this.textLine(line, size, font, MARGIN + indent);
		this.gap(4);
	}
	heading(text, size = 16) {
		this.ensure(size + 22);
		this.gap(8);
		this.textLine(text, size, "F2");
		this.rule();
	}
	quote(text) {
		this.ensure(28);
		this.add("0.55 0.55 0.55 RG 1.5 w");
		const start = this.y;
		this.para(text, 11, "F3", 12);
		this.add(`${MARGIN} ${this.y + 4} m ${MARGIN} ${start} l S`);
		this.gap(6);
	}
	callout(title, body) {
		const lines = wrapText(`${title}. ${body}`, 9, 471);
		const h = Math.max(24, lines.length * 12 + 16);
		this.ensure(h);
		this.add("0.93 0.93 0.93 rg");
		this.add(`${MARGIN} ${this.y - h} ${CONTENT_W} ${h} re f`);
		this.y -= 10;
		for (const line of lines) this.textLine(line, 9, "F1", 62);
		this.y -= 8;
	}
	bullets(items, ordered = false) {
		items.forEach((item, i) => {
			const mark = ordered ? `${i + 1}.` : "-";
			wrapText(item, 10, 469).forEach((line, li) => {
				this.textLine(li === 0 ? `${mark}  ${line}` : `    ${line}`, 10, "F1");
			});
		});
		this.gap(4);
	}
	code(text) {
		const raw = text.split("\n");
		for (const line of raw) {
			const source = line.replace(/\t/g, "  ") || " ";
			const chunks = [];
			for (let i = 0; i < source.length; i += 92) chunks.push(source.slice(i, i + 92));
			for (const chunk of chunks) this.textLine(chunk, 7.5, "F4");
		}
		this.gap(6);
	}
	table(cols, rows) {
		this.para(cols.join("  |  "), 8, "F2");
		for (const row of rows) if (cols.length > 3) this.bullets(row.map((cell, i) => `${cols[i] ?? "Field"}: ${cell}`));
		else this.para(row.join("  |  "), 9, "F1");
	}
	build(title) {
		return serializePdf(this.pages, title, this.issue);
	}
};
function serializePdf(pageOps, title, issue) {
	const parts = [];
	let nextId = 1;
	const reserve = () => nextId++;
	const catalogId = reserve();
	const infoId = reserve();
	const pagesId = reserve();
	const f1 = reserve();
	const f2 = reserve();
	const f3 = reserve();
	const f4 = reserve();
	const put = (id, body) => {
		parts.push({
			id,
			body
		});
	};
	put(f1, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
	put(f2, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
	put(f3, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>");
	put(f4, "<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>");
	const resources = `<< /Font << /F1 ${f1} 0 R /F2 ${f2} 0 R /F3 ${f3} 0 R /F4 ${f4} 0 R >> >>`;
	const pageIds = [];
	for (const ops of pageOps) {
		if (ops.length === 0) continue;
		const stream = ops.join("\n");
		const contentId = reserve();
		put(contentId, `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
		const pageId = reserve();
		put(pageId, `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources ${resources} /Contents ${contentId} 0 R >>`);
		pageIds.push(pageId);
	}
	put(pagesId, `<< /Type /Pages /Kids [ ${pageIds.map((id) => `${id} 0 R`).join(" ")} ] /Count ${pageIds.length} >>`);
	put(catalogId, `<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
	put(infoId, `<< /Title ${pdfLiteral(title)} /Author ${pdfLiteral("AGBOFA Human Owner")} /Subject ${pdfLiteral(issue)} /Creator ${pdfLiteral("AGBOFA Constitution Reader")} >>`);
	parts.sort((a, b) => a.id - b.id);
	let pdf = "%PDF-1.4\n%AGBOFA\n";
	const offsets = [0];
	for (const part of parts) {
		offsets[part.id] = pdf.length;
		pdf += `${part.id} 0 obj\n${part.body}\nendobj\n`;
	}
	const xrefPos = pdf.length;
	let xref = `xref\n0 ${parts.length + 1}\n0000000000 65535 f \n`;
	for (let i = 1; i <= parts.length; i++) xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
	pdf += xref;
	pdf += `trailer\n<< /Size ${parts.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;
	const bytes = new Uint8Array(pdf.length);
	for (let i = 0; i < pdf.length; i++) bytes[i] = pdf.charCodeAt(i) & 255;
	return bytes;
}
var ISSUE = {
	v1: {
		tag: "v5.0",
		file: "AGBOFA-Constitution-v5.0.pdf",
		status: "Received freeze -- typeset as submitted"
	},
	v2: {
		tag: "v5.3",
		file: "AGBOFA-Constitution-v5.3.pdf",
		status: "Operative issue -- P0 correction, 30-day increment, SPECIFIED not implemented"
	}
};
function renderBlock(doc, block) {
	switch (block.k) {
		case "p":
			doc.para(block.t);
			break;
		case "h":
			doc.heading(block.t, block.l === 3 ? 12 : 13);
			break;
		case "quote":
			doc.quote(block.t);
			break;
		case "callout":
			doc.callout(block.title, block.t);
			break;
		case "ul":
			doc.bullets(block.items);
			break;
		case "ol":
			doc.bullets(block.items, true);
			break;
		case "kpis":
			for (const item of block.items) doc.para(`${item.l}: ${item.v}${item.h ? ` -- ${item.h}` : ""}`, 10, "F2");
			break;
		case "table":
			doc.table(block.cols, block.rows);
			break;
		case "code":
			doc.code(block.t);
			break;
		case "flow":
			doc.bullets(block.steps, true);
			break;
		case "article":
			doc.heading(`Article ${block.n}  ${block.title}`, 13);
			doc.para(block.text);
			doc.para(`Scope. ${block.scope}`, 9);
			doc.para("Prohibitions", 10, "F2");
			doc.bullets(block.prohibitions);
			doc.para("Requirements", 10, "F2");
			doc.bullets(block.requirements);
			doc.para(`Enforcement. ${block.enforcement}`, 9);
			doc.para(`Violation consequence. ${block.consequence}`, 9);
			break;
		case "layer":
			doc.heading(block.name, 13);
			doc.para(block.purpose);
			doc.para("Responsibilities", 10, "F2");
			doc.bullets(block.responsibilities);
			doc.para("Inputs", 10, "F2");
			doc.bullets(block.inputs);
			doc.para("Outputs", 10, "F2");
			doc.bullets(block.outputs);
			doc.para("Permissions", 10, "F2");
			doc.bullets(block.permissions);
			doc.para("Prohibited", 10, "F2");
			doc.bullets(block.prohibited);
			doc.para("Dependencies", 10, "F2");
			doc.bullets(block.dependencies);
			doc.para("Data", 10, "F2");
			doc.bullets(block.data);
			doc.para("Failure modes", 10, "F2");
			doc.bullets(block.failures);
			doc.para("Security", 10, "F2");
			doc.bullets(block.security);
			doc.para("Audit", 10, "F2");
			doc.bullets(block.audit);
			break;
		case "agent":
			doc.heading(`${block.name}  (${block.autonomy})`, 13);
			doc.para(block.purpose);
			doc.para(`Authority. ${block.authority}`);
			doc.para(`Confidence. ${block.confidence}`);
			doc.para("Inputs", 10, "F2");
			doc.bullets(block.inputs);
			doc.para("Outputs", 10, "F2");
			doc.bullets(block.outputs);
			doc.para("Tools", 10, "F2");
			doc.bullets(block.tools);
			doc.para("Prohibited", 10, "F2");
			doc.bullets(block.prohibited);
			break;
		case "machine":
			doc.para(block.title, 10, "F2");
			doc.bullets(block.states.map((state) => `${state.name} -> ${state.exits.join(" / ")}`));
			break;
		case "board":
			for (const wave of block.waves) {
				doc.heading(`${wave.id}  ${wave.name}  (Days ${wave.days})`, 12);
				doc.para(wave.certify, 9, "F3");
				for (const track of block.tracks) {
					doc.para(track.name, 10, "F2");
					doc.bullets(wave.cells[track.id] ?? []);
				}
			}
			break;
		case "days": for (const row of block.rows) {
			const mark = row.gate ? `  [${row.gate}]` : "";
			doc.para(`Day ${row.d}${mark}  ${row.focus}`, 10, "F2");
			doc.bullets([
				`Kernel. ${row.k}`,
				`Intelligence. ${row.i}`,
				`Factory. ${row.p}`,
				`Execution. ${row.x}`,
				`Guard. ${row.g}`
			]);
		}
	}
}
function buildConstitutionPdf(version) {
	const meta = ISSUE[version];
	const title = "AGBOFA Master Architecture and Constitution";
	const doc = new PdfLayout("AGBOFA Constitution", meta.tag);
	doc.startCover();
	doc.para("MASTER ARCHITECTURE AND CONSTITUTION", 9, "F1");
	doc.gap(8);
	doc.heading("AGBOFA", 28);
	doc.para("The governed digital product operating system. Intelligence is not authority.", 12);
	doc.gap(8);
	doc.para(`Document issue  ${meta.tag}`, 11, "F2");
	doc.para(meta.status, 10);
	doc.para("Day 0 -- pre-implementation freeze", 10);
	doc.para("Human Owner + Senior System Architect", 10);
	doc.gap(16);
	doc.quote("AGBOFA is not a Claude wrapper. Claude is replaceable intelligence. AGBOFA owns authority, governance, execution, verification, evidence, audit, memory, and recovery.");
	doc.finishCover();
	for (const section of SECTIONS) {
		const blocks = blocksFor(section, version);
		doc.heading(`${section.num}  ${section.title}`, 16);
		if (section.dek) doc.para(section.dek, 9, "F3");
		for (const block of blocks) renderBlock(doc, block);
	}
	return {
		bytes: doc.build(title),
		filename: meta.file
	};
}
function downloadConstitutionPdf(version) {
	const { bytes, filename } = buildConstitutionPdf(version);
	const blob = new Blob([bytes], { type: "application/pdf" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.rel = "noopener";
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var useReader = create((set, get) => ({
	version: "v2",
	sectionId: "cover",
	query: "",
	tocOpen: false,
	setVersion: (version) => set({ version }),
	setSection: (sectionId) => set({
		sectionId,
		tocOpen: false
	}),
	setQuery: (query) => set({ query }),
	setTocOpen: (tocOpen) => set({ tocOpen }),
	next: () => {
		const index = SECTIONS.findIndex((section) => section.id === get().sectionId);
		const next = SECTIONS[Math.min(SECTIONS.length - 1, index + 1)];
		if (next) set({
			sectionId: next.id,
			tocOpen: false
		});
	},
	prev: () => {
		const index = SECTIONS.findIndex((section) => section.id === get().sectionId);
		const prev = SECTIONS[Math.max(0, index - 1)];
		if (prev) set({
			sectionId: prev.id,
			tocOpen: false
		});
	}
}));
var TONE = {
	law: "border-law/40 bg-law/8 text-fg",
	warn: "border-warn/40 bg-warn/8 text-fg",
	fix: "border-ok/40 bg-ok/8 text-fg",
	note: "border-rule-strong bg-elevated text-fg"
};
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-6",
		children: blocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, index))
	});
}
function BlockView({ block }) {
	switch (block.k) {
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-base leading-relaxed text-fg",
			children: block.t
		});
		case "h": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: cn("font-display text-fg tracking-tight", block.l === 3 ? "text-lg font-medium" : "text-xl font-medium"),
			children: block.t
		});
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
			className: "border-l-2 border-mark pl-5 font-display text-xl leading-snug text-fg italic",
			children: block.t
		});
		case "callout": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: cn("rounded-xl border px-5 py-4", TONE[block.tone]),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.14em] uppercase text-muted",
				children: block.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: block.t
			})]
		});
		case "ul": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-fg marker:text-muted",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
		});
		case "ol": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-fg marker:text-muted",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
		});
		case "kpis": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-rule bg-surface px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.12em] text-muted uppercase",
						children: item.l
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl text-fg",
						children: item.v
					}),
					item.h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-subtle",
						children: item.h
					}) : null
				]
			}, item.l))
		});
		case "table": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[520px] border-collapse text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-elevated text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: block.cols.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium whitespace-nowrap",
						children: col
					}, col)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-t border-rule align-top",
					children: row.map((cell, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 text-fg",
						children: cell
					}, cellIndex))
				}, rowIndex)) })]
			})
		});
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto rounded-xl border border-rule bg-elevated p-4 font-mono text-xs leading-relaxed text-fg",
			children: block.t
		});
		case "flow": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-col gap-2",
			children: block.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 font-mono text-[11px] tracking-wider text-subtle tabular-nums",
					children: String(index + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 rounded-lg border border-rule bg-surface px-3 py-2 text-sm text-fg",
					children: step
				})]
			}, step))
		});
		case "article": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-rule bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-[0.16em] text-muted uppercase",
					children: ["Article ", block.n]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-1 font-display text-2xl text-fg",
					children: block.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-fg",
					children: block.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs tracking-[0.12em] text-subtle uppercase",
					children: "Scope"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: block.scope
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
						title: "Prohibitions",
						items: block.prohibitions
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
						title: "Requirements",
						items: block.requirements
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs tracking-[0.12em] text-subtle uppercase",
					children: "Enforcement"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: block.enforcement
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs tracking-[0.12em] text-subtle uppercase",
					children: "Violation consequence"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-danger",
					children: block.consequence
				})
			]
		});
		case "layer": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-rule bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-2xl text-fg",
					children: block.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: block.purpose
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Responsibilities",
							items: block.responsibilities
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Inputs",
							items: block.inputs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Outputs",
							items: block.outputs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Permissions",
							items: block.permissions
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Prohibited",
							items: block.prohibited
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Dependencies",
							items: block.dependencies
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Data",
							items: block.data
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Failure modes",
							items: block.failures
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Security boundary",
							items: block.security
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Audit",
							items: block.audit
						})
					]
				})
			]
		});
		case "agent": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-rule bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-2xl text-fg",
						children: block.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-rule px-2 py-1 font-mono text-[11px] tracking-wider text-muted uppercase",
						children: block.autonomy
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: block.purpose
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "Authority. "
					}), block.authority]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "Confidence. "
					}), block.confidence]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Inputs",
							items: block.inputs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Outputs",
							items: block.outputs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Tools",
							items: block.tools
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Prohibited",
							items: block.prohibited
						})
					]
				})
			]
		});
		case "machine": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-rule bg-surface p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.14em] text-muted uppercase",
				children: block.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: block.states.map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-1 rounded-lg border border-rule px-3 py-2 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm text-fg",
						children: state.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-subtle",
						children: ["→ ", state.exits.join(" · ")]
					})]
				}, state.id))
			})]
		});
		case "board": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StrikeBoard, { block });
		case "days": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayList, { rows: block.rows });
		default: return null;
	}
}
function StrikeBoard({ block }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-8",
		children: block.waves.map((wave) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-rule bg-surface p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
					children: [
						wave.id,
						" · Days ",
						wave.days
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-1 font-display text-2xl text-fg",
					children: wave.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-xs leading-relaxed text-muted",
					children: wave.certify
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: block.tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-rule bg-paper px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.14em] text-mark uppercase",
							children: track.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-subtle",
							children: track.crew
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex list-disc flex-col gap-1.5 pl-4 text-xs leading-relaxed text-fg marker:text-muted",
							children: (wave.cells[track.id] ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
						})
					]
				}, track.id))
			})]
		}, wave.id))
	});
}
function DayList({ rows }) {
	const waves = [
		"W1",
		"W2",
		"W3",
		"W4"
	];
	const labels = {
		W1: "Wave 1 — Kernel live",
		W2: "Wave 2 — Factory live",
		W3: "Wave 3 — Execute and prove",
		W4: "Wave 4 — Enterprise harden"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-8",
		children: waves.map((wave) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-[11px] tracking-[0.16em] text-subtle uppercase",
			children: labels[wave]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-3",
			children: rows.filter((row) => row.wave === wave).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("rounded-xl border bg-surface px-4 py-4", row.gate ? "border-mark/40" : "border-rule"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-sm text-fg tabular-nums",
							children: ["D", String(row.d).padStart(2, "0")]
						}),
						row.gate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-fg px-2 py-0.5 text-[10px] tracking-[0.12em] text-bg uppercase",
							children: row.gate
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: row.focus
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid gap-2 text-xs leading-relaxed sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayTrack, {
							label: "Kernel",
							text: row.k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayTrack, {
							label: "Intelligence",
							text: row.i
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayTrack, {
							label: "Factory",
							text: row.p
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayTrack, {
							label: "Execution",
							text: row.x
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayTrack, {
							label: "Guard",
							text: row.g
						})
					]
				})]
			}, row.d))
		})] }, wave))
	});
}
function DayTrack({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "tracking-[0.12em] text-subtle uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-0.5 text-fg",
		children: text
	})] });
}
function List({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs tracking-[0.12em] text-subtle uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 flex list-disc flex-col gap-1 pl-4 text-sm leading-relaxed text-fg marker:text-muted",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	})] });
}
function Reader() {
	const version = useReader((s) => s.version);
	const sectionId = useReader((s) => s.sectionId);
	const query = useReader((s) => s.query);
	const tocOpen = useReader((s) => s.tocOpen);
	const setVersion = useReader((s) => s.setVersion);
	const setSection = useReader((s) => s.setSection);
	const setQuery = useReader((s) => s.setQuery);
	const setTocOpen = useReader((s) => s.setTocOpen);
	const next = useReader((s) => s.next);
	const prev = useReader((s) => s.prev);
	const scroller = (0, import_react.useRef)(null);
	const [pdfBusy, setPdfBusy] = (0, import_react.useState)(false);
	const section = SECTIONS.find((item) => item.id === sectionId) ?? SECTIONS[0];
	const index = SECTIONS.findIndex((item) => item.id === section.id);
	const hits = (0, import_react.useMemo)(() => query.trim() ? searchSections(query, version) : [], [query, version]);
	const blocks = blocksFor(section, version);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: 0 });
	}, [sectionId, version]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const target = event.target;
			if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
			if (event.key === "j" || event.key === "ArrowRight") next();
			if (event.key === "k" || event.key === "ArrowLeft") prev();
			if (event.key === "1") setVersion("v1");
			if (event.key === "2") setVersion("v2");
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		next,
		prev,
		setVersion
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("no-print fixed inset-y-0 left-0 z-30 w-[min(20rem,88vw)] border-r border-rule bg-surface transition-transform duration-200 ease-out md:static md:w-72 md:translate-x-0", tocOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 border-b border-rule px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
									className: "size-4 text-mark",
									strokeWidth: 1.6
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm text-fg",
									children: "AGBOFA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-[0.14em] text-subtle uppercase",
									children: version === "v2" ? "Issue v5.3" : "Issue v5.0"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-md p-2 text-muted md:hidden",
								onClick: () => setTocOpen(false),
								"aria-label": "Close contents",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-rule px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 rounded-lg border border-rule bg-paper px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "Search the law",
									className: "w-full bg-transparent text-sm text-fg outline-none placeholder:text-subtle"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex-1 overflow-y-auto px-3 py-4",
							children: query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "px-2 pb-2 text-[11px] tracking-[0.14em] text-subtle uppercase",
									children: [hits.length, " matches"]
								}), hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
									active: hit.id === section.id,
									label: hit.nav,
									num: hit.num,
									onClick: () => setSection(hit.id),
									marked: sectionHasDiff(hit)
								}, hit.id))]
							}) : PARTS.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-2 pb-2 text-[11px] tracking-[0.16em] text-subtle uppercase",
									children: part.letter === "0" ? "Front" : `Part ${part.letter}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-0.5",
									children: SECTIONS.filter((item) => item.partId === part.id).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
										active: item.id === section.id,
										label: item.nav,
										num: item.num,
										onClick: () => setSection(item.id),
										marked: sectionHasDiff(item)
									}, item.id))
								})]
							}, part.id))
						})
					]
				})
			}),
			tocOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "no-print fixed inset-0 z-20 bg-bg/60 md:hidden",
				"aria-label": "Dismiss contents",
				onClick: () => setTocOpen(false)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "no-print sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-rule bg-bg/95 px-4 py-3 backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-md p-2 text-muted md:hidden",
								onClick: () => setTocOpen(true),
								"aria-label": "Open contents",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-xs tracking-[0.14em] text-subtle uppercase",
									children: [
										section.part,
										" · ",
										section.num
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-display text-lg leading-tight text-fg",
									children: section.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 rounded-full border border-rule bg-surface p-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VersionChip, {
									active: version === "v1",
									onClick: () => setVersion("v1"),
									label: "v5.0",
									hint: "Received freeze"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VersionChip, {
									active: version === "v2",
									onClick: () => setVersion("v2"),
									label: "v5.3",
									hint: "P0 correction — authoritative engineering issue"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSection("fcal"),
								className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-rule px-3 py-2 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarRange, { className: "size-3.5" }), "30-day"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setPdfBusy(true);
									try {
										downloadConstitutionPdf(version);
									} finally {
										window.setTimeout(() => setPdfBusy(false), 400);
									}
								},
								disabled: pdfBusy,
								className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-rule bg-fg px-3 py-2 text-xs text-bg disabled:opacity-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), pdfBusy ? "Preparing" : `PDF ${version === "v2" ? "v5.3" : "v5.0"}`]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => window.print(),
								className: "hidden rounded-full border border-rule px-3 py-2 text-xs text-muted sm:inline-flex sm:items-center sm:gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Print"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						ref: scroller,
						className: "flex-1 overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("mx-auto w-full px-5 py-10 pb-28", [
								"f2",
								"fcal",
								"c6",
								"d6",
								"d7",
								"d9",
								"p0",
								"a6"
							].includes(section.id) ? "max-w-6xl" : "max-w-3xl"),
							children: [section.id === "cover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverMark, { version }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.18em] text-subtle uppercase",
									children: section.dek
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 font-display text-4xl leading-tight text-fg sm:text-5xl",
									children: section.title
								}),
								sectionHasDiff(section) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs tracking-[0.12em] text-law uppercase",
									children: version === "v2" ? "v5.3 rewrite of this section" : "v5.0 text — v5.3 rewrites this"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs tracking-[0.12em] text-subtle uppercase",
									children: "Identical in v5.0 and v5.3"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks })
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "no-print flex items-center justify-between gap-3 border-t border-rule bg-surface px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: prev,
								disabled: index === 0,
								className: "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted disabled:opacity-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: SECTIONS[index - 1]?.nav ?? "Start"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] tracking-wider text-subtle tabular-nums",
								children: [
									index + 1,
									" / ",
									SECTIONS.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: next,
								disabled: index === SECTIONS.length - 1,
								className: "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted disabled:opacity-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: SECTIONS[index + 1]?.nav ?? "End"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
							})
						]
					})
				]
			})
		]
	});
}
function NavButton({ active, label, num, onClick, marked }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm", active ? "bg-elevated text-fg" : "text-muted hover:bg-paper hover:text-fg"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-10 shrink-0 font-mono text-[10px] tracking-wider text-subtle",
				children: num
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate",
				children: label
			}),
			marked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-1.5 rounded-full bg-law",
				"aria-hidden": true
			}) : null
		]
	});
}
function VersionChip({ active, onClick, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full px-3 py-1.5 text-xs", active ? "bg-fg text-bg" : "text-muted"),
		title: hint,
		children: label
	});
}
function CoverMark({ version }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 rounded-xl border border-rule bg-surface px-6 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.22em] text-subtle uppercase",
				children: "Master architecture and constitution"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-5xl text-fg",
				children: "AGBOFA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm leading-relaxed text-muted",
				children: "The governed digital product operating system. Intelligence is not authority."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-6 text-xs tracking-[0.12em] text-subtle uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: version === "v1" ? "Received freeze v5.0" : "Operative issue v5.3 — P0 correction, 30-day increment" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Day 0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Human owner + architect" })
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reader, {});
}
//#endregion
export { Home as component };
