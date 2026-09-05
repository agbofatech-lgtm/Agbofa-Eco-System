export type ArticleStatus =
  | "LOCKED"
  | "READY"
  | "DRAFTED"
  | "COMPACT";

export interface Article {
  n: number;
  title: string;
  compact: string;
  status: ArticleStatus;
  purpose: string;
  rule: string;
  provisions: string[];
  future: string;
  invariants: string[];
}

export interface LedgerRow {
  n: string;
  title: string;
  status: string;
}
