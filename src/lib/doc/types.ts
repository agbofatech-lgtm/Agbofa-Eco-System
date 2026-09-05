export type Version = "v1" | "v2";

export type CalloutTone = "law" | "warn" | "fix" | "note";

export type Block =
  | { k: "p"; t: string }
  | { k: "h"; t: string; l?: 2 | 3 }
  | { k: "callout"; tone: CalloutTone; title: string; t: string }
  | { k: "ul"; items: string[] }
  | { k: "ol"; items: string[] }
  | { k: "table"; cols: string[]; rows: string[][] }
  | { k: "code"; t: string }
  | { k: "quote"; t: string }
  | { k: "kpis"; items: { l: string; v: string; h?: string }[] }
  | { k: "flow"; steps: string[] }
  | {
      k: "article";
      n: number;
      title: string;
      text: string;
      scope: string;
      prohibitions: string[];
      requirements: string[];
      enforcement: string;
      consequence: string;
    }
  | {
      k: "layer";
      name: string;
      purpose: string;
      responsibilities: string[];
      inputs: string[];
      outputs: string[];
      permissions: string[];
      prohibited: string[];
      dependencies: string[];
      data: string[];
      failures: string[];
      security: string[];
      audit: string[];
    }
  | {
      k: "agent";
      name: string;
      purpose: string;
      inputs: string[];
      outputs: string[];
      authority: string;
      tools: string[];
      prohibited: string[];
      confidence: string;
      autonomy: string;
    }
  | {
      k: "machine";
      title: string;
      states: { id: string; name: string; exits: string[] }[];
    }
  | {
      k: "board";
      tracks: { id: string; name: string; crew: string }[];
      waves: {
        id: string;
        name: string;
        days: string;
        certify: string;
        cells: Record<string, string[]>;
      }[];
    }
  | {
      k: "days";
      rows: {
        d: number;
        wave: string;
        gate?: string;
        focus: string;
        k: string;
        i: string;
        p: string;
        x: string;
        g: string;
      }[];
    };

export type Section = {
  id: string;
  part: string;
  partId: string;
  num: string;
  nav: string;
  title: string;
  dek: string;
  v1: Block[];
  v2?: Block[];
  v2Only?: boolean;
};

export type Part = {
  id: string;
  letter: string;
  title: string;
  dek: string;
};
