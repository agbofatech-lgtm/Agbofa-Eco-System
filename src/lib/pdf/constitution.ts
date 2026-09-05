import { blocksFor, SECTIONS, type Block, type Version } from "@/lib/doc";
import { PdfLayout } from "./writer";

const ISSUE: Record<Version, { tag: string; file: string; status: string }> = {
  v1: {
    tag: "v5.0",
    file: "AGBOFA-Constitution-v5.0.pdf",
    status: "Received freeze -- typeset as submitted",
  },
  v2: {
    tag: "v5.3",
    file: "AGBOFA-Constitution-v5.3.pdf",
    status: "Operative issue -- P0 correction, 30-day increment, SPECIFIED not implemented",
  },
};

function renderBlock(doc: PdfLayout, block: Block) {
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
      for (const item of block.items) {
        doc.para(`${item.l}: ${item.v}${item.h ? ` -- ${item.h}` : ""}`, 10, "F2");
      }
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
    case "days":
      for (const row of block.rows) {
        const mark = row.gate ? `  [${row.gate}]` : "";
        doc.para(`Day ${row.d}${mark}  ${row.focus}`, 10, "F2");
        doc.bullets([
          `Kernel. ${row.k}`,
          `Intelligence. ${row.i}`,
          `Factory. ${row.p}`,
          `Execution. ${row.x}`,
          `Guard. ${row.g}`,
        ]);
      }
      break;
    default:
      break;
  }
}

export function buildConstitutionPdf(version: Version): { bytes: Uint8Array; filename: string } {
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
  doc.quote(
    "AGBOFA is not a Claude wrapper. Claude is replaceable intelligence. AGBOFA owns authority, governance, execution, verification, evidence, audit, memory, and recovery.",
  );
  doc.finishCover();

  for (const section of SECTIONS) {
    const blocks = blocksFor(section, version);
    doc.heading(`${section.num}  ${section.title}`, 16);
    if (section.dek) doc.para(section.dek, 9, "F3");
    for (const block of blocks) renderBlock(doc, block);
  }

  return { bytes: doc.build(title), filename: meta.file };
}

export function pdfPublicPath(version: Version): string {
  return `/${ISSUE[version].file}`;
}

export function downloadConstitutionPdf(version: Version) {
  const { bytes, filename } = buildConstitutionPdf(version);
  const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
