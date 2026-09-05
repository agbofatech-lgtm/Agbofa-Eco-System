import type { Block, Section, Version } from "./types";
import { PARTS } from "./parts";
import { FRONT } from "./sections-front";
import { PART_A } from "./sections-a";
import { PART_B } from "./sections-b";
import { PART_C } from "./sections-c";
import { PART_D } from "./sections-d";
import { PART_E } from "./sections-e";
import { PART_F } from "./sections-f";
import { PART_G } from "./sections-g";
import { V53_C, V53_D, V53_FRONT, V53_TRACE } from "./sections-v53";
import { PHASE1_FOUND } from "./sections-phase1-found";
import { PHASE1_A1 } from "./sections-phase1-a1";
import { PHASE2_A2 } from "./sections-phase2-a2";
import { PHASE3_A3 } from "./sections-phase3-a3";
import { PHASE4_A4 } from "./sections-phase4-a4";
import { PHASE5_A5 } from "./sections-phase5-a5";
import { PHASE6_A6 } from "./sections-phase6-a6";
import { PHASE7_A7 } from "./sections-phase7-a7";
import { PHASE8_A8 } from "./sections-phase8-a8";
import { PHASE9_A9 } from "./sections-phase9-a9";
import { PHASE10_A10 } from "./sections-phase10-a10";

export const SECTIONS: Section[] = [
  ...FRONT,
  ...V53_FRONT,
  ...PHASE1_FOUND,
  ...PHASE1_A1,
  ...PHASE2_A2,
  ...PHASE3_A3,
  ...PHASE4_A4,
  ...PHASE5_A5,
  ...PHASE6_A6,
  ...PHASE7_A7,
  ...PHASE8_A8,
  ...PHASE9_A9,
  ...PHASE10_A10,
  ...PART_A,
  ...V53_TRACE,
  ...PART_B,
  ...PART_C,
  ...V53_C,
  ...PART_D,
  ...V53_D,
  ...PART_E,
  ...PART_F,
  ...PART_G,
];

export function blocksFor(section: Section, version: Version): Block[] {
  if (version === "v2" && section.v2) return section.v2;
  return section.v1;
}

export function sectionHasDiff(section: Section): boolean {
  return Boolean(section.v2);
}

export function searchSections(query: string, version: Version): Section[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SECTIONS.filter((section) => {
    const hay = [
      section.title,
      section.dek,
      section.nav,
      section.num,
      ...blocksFor(section, version).flatMap(blockText),
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

function blockText(block: Block): string[] {
  switch (block.k) {
    case "p":
    case "h":
    case "quote":
    case "code":
      return [block.t];
    case "callout":
      return [block.title, block.t];
    case "ul":
    case "ol":
      return block.items;
    case "table":
      return [...block.cols, ...block.rows.flat()];
    case "kpis":
      return block.items.flatMap((item) => [item.l, item.v, item.h ?? ""]);
    case "flow":
      return block.steps;
    case "article":
      return [
        block.title,
        block.text,
        block.scope,
        block.enforcement,
        block.consequence,
        ...block.prohibitions,
        ...block.requirements,
      ];
    case "layer":
      return [
        block.name,
        block.purpose,
        ...block.responsibilities,
        ...block.inputs,
        ...block.outputs,
        ...block.permissions,
        ...block.prohibited,
      ];
    case "agent":
      return [
        block.name,
        block.purpose,
        block.authority,
        block.confidence,
        block.autonomy,
        ...block.inputs,
        ...block.outputs,
        ...block.tools,
        ...block.prohibited,
      ];
    case "machine":
      return [block.title, ...block.states.map((state) => state.name)];
    case "board":
      return [
        ...block.tracks.flatMap((track) => [track.name, track.crew]),
        ...block.waves.flatMap((wave) => [
          wave.name,
          wave.certify,
          ...Object.values(wave.cells).flat(),
        ]),
      ];
    case "days":
      return block.rows.flatMap((row) => [
        `Day ${row.d}`,
        row.focus,
        row.gate ?? "",
        row.k,
        row.i,
        row.p,
        row.x,
        row.g,
      ]);
    default:
      return [];
  }
}

export { PARTS };
export type { Block, Section, Version };
