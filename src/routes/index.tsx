import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  BookOpen,
  GitBranch,
  Lock,
  Menu,
  Scale,
  Shield,
  X,
} from "lucide-react";
import { ARTICLES } from "@/lib/constitution/articles";
import {
  CLASSES,
  DOMAINS,
  GOVERNING,
  INTERPRETATION_TITLE,
  NON_ARTICLES,
  TESTS,
} from "@/lib/constitution/interpretation";
import { LEDGER, PATH, RUNTIME, VERSION } from "@/lib/constitution/ledger";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/")({ component: Home });

type Tab = "ledger" | "path" | "article" | "future";

function statusTone(s: string) {
  if (s.startsWith("LOCKED")) return "text-locked";
  if (s.includes("NOT AUTHORIZED") || s === "COMPACT") return "text-muted";
  if (s.includes("READY")) return "text-draft";
  return "text-muted";
}

function articleStatusLabel(status: string): string {
  if (status === "LOCKED") return "LOCKED / HUMAN ACCEPTED";
  if (status === "COMPACT") return "COMPACT / NOT AUTHORIZED";
  return "DRAFTED — NOT LOCKED";
}

function ledgerHeadline(rows: typeof LEDGER): string {
  const locked = rows.filter((r) => r.status.startsWith("LOCKED"));
  const draft = rows.filter((r) => r.status.includes("DRAFT"));
  const compact = rows.filter((r) => r.status.includes("COMPACT"));
  const span = (rs: typeof LEDGER) =>
    rs.length <= 1 ? (rs[0]?.n ?? "") : `${rs[0].n}–${rs[rs.length - 1].n}`;
  return [
    locked.length ? `Articles ${span(locked)} LOCKED` : "",
    draft.length ? `${span(draft)} DRAFT — OWNER REVIEW REQUIRED` : "",
    compact.length ? `${span(compact)} COMPACT / NOT AUTHORIZED` : "",
  ]
    .filter(Boolean)
    .join(". ")
    .concat(".");
}

function Home() {
  const [tab, setTab] = useState<Tab>("ledger");
  const [n, setN] = useState(9);
  const [open, setOpen] = useState(false);
  const article = useMemo(() => ARTICLES.find((a) => a.n === n) ?? ARTICLES[0], [n]);

  function goArticle(num: number) {
    setN(num);
    setTab("article");
    setOpen(false);
  }

  return (
    <div className="min-h-dvh bg-bg text-fg font-sans">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="size-5 text-brass" />
          </button>
          <Scale className="hidden size-6 text-brass md:block" />
          <div className="min-w-0">
            <p className="font-display text-lg leading-tight text-law md:text-xl">
              AGBOFA Constitution
            </p>
            <p className="truncate text-xs text-muted">
              {VERSION} · Governed digital product operating system
            </p>
          </div>
          <span className="ml-auto hidden rounded-full border border-border px-3 py-1 text-xs text-muted sm:inline">
            {RUNTIME}
          </span>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl">
        <aside className="sticky top-[57px] hidden h-[calc(100dvh-57px)] w-64 shrink-0 overflow-y-auto border-r border-border p-4 md:block">
          <Nav tab={tab} setTab={setTab} n={n} goArticle={goArticle} />
        </aside>

        {open ? (
          <div className="fixed inset-0 z-30 md:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-bg/80"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            />
            <div className="relative h-full w-[min(20rem,86vw)] overflow-y-auto border-r border-border bg-surface p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-lg text-law">Contents</span>
                <button
                  type="button"
                  className="inline-flex size-11 items-center justify-center"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>
              <Nav tab={tab} setTab={setTab} n={n} goArticle={goArticle} />
            </div>
          </div>
        ) : null}

        <main className="min-w-0 flex-1 px-4 py-8 md:px-10">
          {tab === "ledger" ? <Ledger onOpen={goArticle} /> : null}
          {tab === "path" ? <PathView /> : null}
          {tab === "future" ? <Future /> : null}
          {tab === "article" ? <ArticleView article={article} /> : null}
        </main>
      </div>
    </div>
  );
}

function Nav({
  tab,
  setTab,
  n,
  goArticle,
}: {
  tab: Tab;
  setTab: (t: Tab) => void;
  n: number;
  goArticle: (n: number) => void;
}) {
  return (
    <nav className="flex flex-col gap-5 text-sm">
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-muted">Reader</p>
        <button
          type="button"
          className={cn("flex w-full items-center gap-2 rounded-md px-2 py-2 text-left", tab === "ledger" && "bg-raised text-law")}
          onClick={() => setTab("ledger")}
        >
          <BookOpen className="size-4 text-brass" /> Ledger
        </button>
        <button
          type="button"
          className={cn("flex w-full items-center gap-2 rounded-md px-2 py-2 text-left", tab === "path" && "bg-raised text-law")}
          onClick={() => setTab("path")}
        >
          <GitBranch className="size-4 text-brass" /> Single path
        </button>
        <button
          type="button"
          className={cn("flex w-full items-center gap-2 rounded-md px-2 py-2 text-left", tab === "future" && "bg-raised text-law")}
          onClick={() => setTab("future")}
        >
          <Shield className="size-4 text-brass" /> Future-readiness
        </button>
      </div>
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-muted">Articles</p>
        <ul className="flex flex-col gap-0.5">
          {ARTICLES.map((a) => (
            <li key={a.n}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-start gap-2 rounded-md px-2 py-2 text-left",
                  tab === "article" && n === a.n && "bg-raised",
                )}
                onClick={() => goArticle(a.n)}
              >
                <span className="w-5 shrink-0 font-mono text-xs text-brass">{a.n}</span>
                <span className="min-w-0 flex-1 leading-snug">{a.title}</span>
                <Lock
                  className={cn("mt-0.5 size-3.5 shrink-0", a.status === "LOCKED" ? "text-locked" : "text-draft")}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Ledger({ onOpen }: { onOpen: (n: number) => void }) {
  return (
    <section>
      <p className="font-display text-4xl text-law md:text-5xl">Status ledger</p>
      <p className="mt-3 max-w-2xl text-muted leading-relaxed">
        Compact A.3 is the short form. Deep drafts operationalize it. Locked articles are immutable under this
        process. Reader is not the AGBOFA platform.
      </p>
      <div className="mt-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Art.</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {LEDGER.map((row) => (
              <tr key={row.n} className="border-t border-border">
                <td className="px-4 py-3 font-mono text-brass">{row.n}</td>
                <td className="px-4 py-3">
                  <button type="button" className="text-left hover:text-law" onClick={() => onOpen(Number(row.n))}>
                    {row.title}
                  </button>
                </td>
                <td className={cn("px-4 py-3 text-xs", statusTone(row.status))}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-muted">
        {RUNTIME}. No v5.4. {ledgerHeadline(LEDGER)}
      </p>
    </section>
  );
}

function PathView() {
  return (
    <section>
      <p className="font-display text-4xl text-law md:text-5xl">Single sovereignty path</p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-law/90">{GOVERNING}</p>
      <ol className="mt-10 grid gap-2 sm:grid-cols-2">
        {PATH.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-4"
          >
            <span className="font-mono text-sm text-brass">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-2xl text-fg">{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-2xl text-muted leading-relaxed">
        New intelligence may propose. New capabilities may execute. Neither may create sovereignty. Orchestration
        coordinates constitutional execution; it does not replace it. Durability attaches to work items and
        evidence, never to Worker identity.
      </p>
    </section>
  );
}

function Future() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-brass">{INTERPRETATION_TITLE}</p>
        <h1 className="mt-2 font-display text-4xl text-law md:text-5xl">Extend below the Constitution</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Classification A–E. A new article is justified only where existing law cannot govern a genuine new
          sovereignty path.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {CLASSES.map((c) => (
          <article key={c.id} className="rounded-lg border border-border bg-surface p-4">
            <p className="font-mono text-xs text-brass">Class {c.id}</p>
            <h2 className="mt-1 font-display text-2xl text-fg">{c.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.t}</p>
          </article>
        ))}
      </div>
      <div>
        <h2 className="font-display text-2xl text-law">Admission test</h2>
        <ol className="mt-3 space-y-2 text-sm text-fg">
          {TESTS.map((t, i) => (
            <li key={t} className="flex gap-3">
              <span className="font-mono text-brass">{i + 1}.</span>
              {t}
            </li>
          ))}
        </ol>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Domain</th>
              <th className="px-4 py-3">Class</th>
              <th className="px-4 py-3">Governed by</th>
              <th className="px-4 py-3">Extend as</th>
            </tr>
          </thead>
          <tbody>
            {DOMAINS.map((row) => (
              <tr key={row[0]} className="border-t border-border">
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="font-display text-2xl text-law">Not authorized</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
          {NON_ARTICLES.map((x) => (
            <li key={x} className="rounded-md border border-border px-3 py-2">
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArticleView({ article }: { article: (typeof ARTICLES)[number] }) {
  const locked = article.status === "LOCKED";
  return (
    <article>
      <p className="text-xs uppercase tracking-[0.2em] text-brass">Article {article.n}</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-law md:text-5xl">{article.title}</h1>
      <p className={cn("mt-3 text-sm font-medium", locked ? "text-locked" : "text-muted")}>
        {articleStatusLabel(article.status)}
      </p>
      <blockquote className="mt-8 border-l-2 border-brass pl-4 font-display text-xl italic leading-snug text-fg">
        {article.compact}
      </blockquote>
      <h2 className="mt-10 font-display text-2xl text-law">Purpose</h2>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted">{article.purpose}</p>
      <h2 className="mt-8 font-display text-2xl text-law">Operative rule</h2>
      <p className="mt-2 max-w-2xl leading-relaxed">{article.rule}</p>
      <h2 className="mt-8 font-display text-2xl text-law">Provisions</h2>
      <ul className="mt-3 max-w-2xl space-y-2 text-sm leading-relaxed">
        {article.provisions.map((p) => (
          <li key={p} className="border-b border-border/60 pb-2">
            {p}
          </li>
        ))}
      </ul>
      <h2 className="mt-8 font-display text-2xl text-law">Future-readiness</h2>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted">{article.future}</p>
      <h2 className="mt-8 font-display text-2xl text-law">Invariants</h2>
      <ul className="mt-3 max-w-2xl space-y-2 font-mono text-xs text-brass">
        {article.invariants.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p className="mt-10 text-xs text-muted">
        Compact A.3 not replaced. SPECIFIED ≠ IMPLEMENTED. No v5.4. Reader ≠ platform.
      </p>
    </article>
  );
}
