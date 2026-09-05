import { pdfLiteral } from "./encode";
import { wrapText } from "./helvetica";

const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN = 54;
const CONTENT_W = PAGE_W - MARGIN * 2;

type Font = "F1" | "F2" | "F3" | "F4";

export class PdfLayout {
  private pages: string[][] = [[]];
  private y = PAGE_H - 72;
  private header = "";
  private issue = "";
  private onCover = true;

  constructor(header: string, issue: string) {
    this.header = header;
    this.issue = issue;
  }

  private add(op: string) {
    this.pages[this.pages.length - 1].push(op);
  }

  startCover() {
    this.onCover = true;
    this.y = PAGE_H - 120;
  }

  finishCover() {
    this.onCover = false;
    this.newPage();
  }

  private runningHeader() {
    this.add("0.45 0.45 0.45 rg");
    this.add("BT /F1 8 Tf");
    this.add(`1 0 0 1 ${MARGIN} ${PAGE_H - 36} Tm`);
    this.add(`${pdfLiteral(this.header)} Tj ET`);
    this.add("BT /F1 8 Tf");
    this.add(`1 0 0 1 ${PAGE_W - MARGIN - 90} ${PAGE_H - 36} Tm`);
    this.add(`${pdfLiteral(this.issue)} Tj ET`);
    this.add("0.75 0.75 0.75 RG 0.6 w");
    this.add(`${MARGIN} ${PAGE_H - 44} m ${PAGE_W - MARGIN} ${PAGE_H - 44} l S`);
  }

  newPage() {
    this.pages.push([]);
    this.y = PAGE_H - 64;
    if (!this.onCover) this.runningHeader();
  }

  ensure(h: number) {
    if (this.y - h < MARGIN + 28) {
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
    this.add(`${MARGIN} ${this.y} m ${PAGE_W - MARGIN} ${this.y} l S`);
    this.y -= 10;
  }

  textLine(text: string, size: number, font: Font, x = MARGIN) {
    this.ensure(size + 4);
    this.add("0 0 0 rg");
    this.add("BT");
    this.add(`/${font} ${size} Tf`);
    this.add(`1 0 0 1 ${x} ${this.y - size} Tm`);
    this.add(`${pdfLiteral(text)} Tj`);
    this.add("ET");
    this.y -= size * 1.35;
  }

  para(text: string, size = 10, font: Font = "F1", indent = 0) {
    const width = CONTENT_W - indent;
    const lines = wrapText(text, size, width, font === "F2");
    for (const line of lines) this.textLine(line, size, font, MARGIN + indent);
    this.gap(4);
  }

  heading(text: string, size = 16) {
    this.ensure(size + 22);
    this.gap(8);
    this.textLine(text, size, "F2");
    this.rule();
  }

  quote(text: string) {
    this.ensure(28);
    this.add("0.55 0.55 0.55 RG 1.5 w");
    const start = this.y;
    this.para(text, 11, "F3", 12);
    this.add(`${MARGIN} ${this.y + 4} m ${MARGIN} ${start} l S`);
    this.gap(6);
  }

  callout(title: string, body: string) {
    const lines = wrapText(`${title}. ${body}`, 9, CONTENT_W - 16);
    const h = Math.max(24, lines.length * 12 + 16);
    this.ensure(h);
    this.add("0.93 0.93 0.93 rg");
    this.add(`${MARGIN} ${this.y - h} ${CONTENT_W} ${h} re f`);
    this.y -= 10;
    for (const line of lines) this.textLine(line, 9, "F1", MARGIN + 8);
    this.y -= 8;
  }

  bullets(items: string[], ordered = false) {
    items.forEach((item, i) => {
      const mark = ordered ? `${i + 1}.` : "-";
      const lines = wrapText(item, 10, CONTENT_W - 18);
      lines.forEach((line, li) => {
        this.textLine(li === 0 ? `${mark}  ${line}` : `    ${line}`, 10, "F1");
      });
    });
    this.gap(4);
  }

  code(text: string) {
    const raw = text.split("\n");
    for (const line of raw) {
      const source = line.replace(/\t/g, "  ") || " ";
      const chunks: string[] = [];
      for (let i = 0; i < source.length; i += 92) chunks.push(source.slice(i, i + 92));
      for (const chunk of chunks) this.textLine(chunk, 7.5, "F4");
    }
    this.gap(6);
  }

  table(cols: string[], rows: string[][]) {
    this.para(cols.join("  |  "), 8, "F2");
    for (const row of rows) {
      if (cols.length > 3) {
        this.bullets(row.map((cell, i) => `${cols[i] ?? "Field"}: ${cell}`));
      } else {
        this.para(row.join("  |  "), 9, "F1");
      }
    }
  }

  build(title: string): Uint8Array {
    return serializePdf(this.pages, title, this.issue);
  }
}

function serializePdf(pageOps: string[][], title: string, issue: string): Uint8Array {
  const parts: { id: number; body: string }[] = [];
  let nextId = 1;
  const reserve = () => nextId++;
  const catalogId = reserve();
  const infoId = reserve();
  const pagesId = reserve();
  const f1 = reserve();
  const f2 = reserve();
  const f3 = reserve();
  const f4 = reserve();

  const put = (id: number, body: string) => {
    parts.push({ id, body });
  };

  put(f1, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  put(f2, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  put(f3, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>");
  put(f4, "<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>");
  const resources = `<< /Font << /F1 ${f1} 0 R /F2 ${f2} 0 R /F3 ${f3} 0 R /F4 ${f4} 0 R >> >>`;

  const pageIds: number[] = [];
  for (const ops of pageOps) {
    if (ops.length === 0) continue;
    const stream = ops.join("\n");
    const contentId = reserve();
    put(contentId, `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    const pageId = reserve();
    put(
      pageId,
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources ${resources} /Contents ${contentId} 0 R >>`,
    );
    pageIds.push(pageId);
  }

  put(
    pagesId,
    `<< /Type /Pages /Kids [ ${pageIds.map((id) => `${id} 0 R`).join(" ")} ] /Count ${pageIds.length} >>`,
  );
  put(catalogId, `<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  put(
    infoId,
    `<< /Title ${pdfLiteral(title)} /Author ${pdfLiteral("AGBOFA Human Owner")} /Subject ${pdfLiteral(issue)} /Creator ${pdfLiteral("AGBOFA Constitution Reader")} >>`,
  );

  parts.sort((a, b) => a.id - b.id);
  let pdf = "%PDF-1.4\n%AGBOFA\n";
  const offsets: number[] = [0];
  for (const part of parts) {
    offsets[part.id] = pdf.length;
    pdf += `${part.id} 0 obj\n${part.body}\nendobj\n`;
  }
  const xrefPos = pdf.length;
  let xref = `xref\n0 ${parts.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= parts.length; i++) {
    xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += xref;
  pdf += `trailer\n<< /Size ${parts.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;
  const bytes = new Uint8Array(pdf.length);
  for (let i = 0; i < pdf.length; i++) bytes[i] = pdf.charCodeAt(i) & 0xff;
  return bytes;
}
