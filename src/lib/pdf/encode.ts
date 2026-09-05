export function toWinAnsi(input: string): string {
  return input
    .replace(/\u2018|\u2019|\u02bc/g, "'")
    .replace(/\u201c|\u201d/g, '"')
    .replace(/\u2013|\u2014/g, "--")
    .replace(/\u2022/g, "-")
    .replace(/\u2260/g, "!=")
    .replace(/\u2192/g, "->")
    .replace(/\u2190/g, "<-")
    .replace(/\u00d7/g, "x")
    .replace(/\u00a0/g, " ")
    .replace(/\u2026/g, "...")
    .replace(/\u00b7/g, "-")
    .replace(/[^\x09\x0a\x0d\x20-\x7e]/g, (ch) => {
      if (ch === "\n" || ch === "\r" || ch === "\t") return ch;
      return "?";
    });
}

export function pdfLiteral(text: string): string {
  return `(${toWinAnsi(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")})`;
}
