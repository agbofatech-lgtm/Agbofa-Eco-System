import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarRange,
  ChevronLeft,
  ChevronRight,
  Download,
  Menu,
  Printer,
  Scale,
  Search,
  X,
} from "lucide-react";
import { blocksFor, PARTS, SECTIONS, searchSections, sectionHasDiff } from "@/lib/doc";
import { downloadConstitutionPdf, pdfPublicPath } from "@/lib/pdf/constitution";
import { cn } from "@/lib/utils";
import { useReader } from "@/store/reader";
import { Blocks } from "./Blocks";

export function Reader() {
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
  const scroller = useRef<HTMLElement>(null);
  const [pdfBusy, setPdfBusy] = useState(false);

  const section = SECTIONS.find((item) => item.id === sectionId) ?? SECTIONS[0];
  const index = SECTIONS.findIndex((item) => item.id === section.id);
  const hits = useMemo(
    () => (query.trim() ? searchSections(query, version) : []),
    [query, version],
  );
  const blocks = blocksFor(section, version);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [sectionId, version]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (event.key === "j" || event.key === "ArrowRight") next();
      if (event.key === "k" || event.key === "ArrowLeft") prev();
      if (event.key === "1") setVersion("v1");
      if (event.key === "2") setVersion("v2");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, setVersion]);

  return (
    <div className="flex min-h-dvh bg-bg text-fg">
      <aside
        className={cn(
          "no-print fixed inset-y-0 left-0 z-30 w-[min(20rem,88vw)] border-r border-rule bg-surface transition-transform duration-200 ease-out md:static md:w-72 md:translate-x-0",
          tocOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-rule px-5 py-4">
            <div className="flex items-center gap-2">
              <Scale className="size-4 text-mark" strokeWidth={1.6} />
              <div>
                <p className="font-display text-sm text-fg">AGBOFA</p>
                <p className="text-[11px] tracking-[0.14em] text-subtle uppercase">
                  {version === "v2" ? "Issue v5.3" : "Issue v5.0"}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-md p-2 text-muted md:hidden"
              onClick={() => setTocOpen(false)}
              aria-label="Close contents"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="border-b border-rule px-4 py-3">
            <label className="flex items-center gap-2 rounded-lg border border-rule bg-paper px-3 py-2">
              <Search className="size-3.5 text-subtle" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the law"
                className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-subtle"
              />
            </label>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            {query.trim() ? (
              <div className="flex flex-col gap-1">
                <p className="px-2 pb-2 text-[11px] tracking-[0.14em] text-subtle uppercase">
                  {hits.length} matches
                </p>
                {hits.map((hit) => (
                  <NavButton
                    key={hit.id}
                    active={hit.id === section.id}
                    label={hit.nav}
                    num={hit.num}
                    onClick={() => setSection(hit.id)}
                    marked={sectionHasDiff(hit)}
                  />
                ))}
              </div>
            ) : (
              PARTS.map((part) => (
                <div key={part.id} className="mb-5">
                  <p className="px-2 pb-2 text-[11px] tracking-[0.16em] text-subtle uppercase">
                    {part.letter === "0" ? "Front" : `Part ${part.letter}`}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {SECTIONS.filter((item) => item.partId === part.id).map((item) => (
                      <NavButton
                        key={item.id}
                        active={item.id === section.id}
                        label={item.nav}
                        num={item.num}
                        onClick={() => setSection(item.id)}
                        marked={sectionHasDiff(item)}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </nav>
        </div>
      </aside>

      {tocOpen ? (
        <button
          type="button"
          className="no-print fixed inset-0 z-20 bg-bg/60 md:hidden"
          aria-label="Dismiss contents"
          onClick={() => setTocOpen(false)}
        />
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="no-print sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-rule bg-bg/95 px-4 py-3 backdrop-blur-sm">
          <button
            type="button"
            className="rounded-md p-2 text-muted md:hidden"
            onClick={() => setTocOpen(true)}
            aria-label="Open contents"
          >
            <Menu className="size-5" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs tracking-[0.14em] text-subtle uppercase">
              {section.part} · {section.num}
            </p>
            <p className="truncate font-display text-lg leading-tight text-fg">{section.title}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-rule bg-surface p-1">
            <VersionChip
              active={version === "v1"}
              onClick={() => setVersion("v1")}
              label="v5.0"
              hint="Received freeze"
            />
            <VersionChip
              active={version === "v2"}
              onClick={() => setVersion("v2")}
              label="v5.3"
              hint="P0 correction — authoritative engineering issue"
            />
          </div>
          <button
            type="button"
            onClick={() => setSection("ph1")}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-rule px-3 py-2 text-xs text-muted"
          >
            Art. 1
          </button>
          <button
            type="button"
            onClick={() => setSection("fcal")}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-rule px-3 py-2 text-xs text-muted"
          >
            <CalendarRange className="size-3.5" />
            30-day
          </button>
          <a
            href={pdfPublicPath(version)}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-rule bg-fg px-3 py-2 text-xs text-bg"
          >
            <Download className="size-3.5" />
            PDF {version === "v2" ? "v5.3" : "v5.0"}
          </a>
          <button
            type="button"
            onClick={() => {
              setPdfBusy(true);
              try {
                downloadConstitutionPdf(version);
              } finally {
                window.setTimeout(() => setPdfBusy(false), 800);
              }
            }}
            disabled={pdfBusy}
            className="hidden min-h-11 items-center gap-2 rounded-full border border-rule px-3 py-2 text-xs text-muted sm:inline-flex"
            title="Rebuild the PDF in the browser if the file link is blocked"
          >
            {pdfBusy ? "Building…" : "Rebuild"}
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden rounded-full border border-rule px-3 py-2 text-xs text-muted sm:inline-flex sm:items-center sm:gap-2"
          >
            <Printer className="size-3.5" />
            Print
          </button>
        </header>

        <main ref={scroller} className="flex-1 overflow-y-auto">
          <article
            className={cn(
              "mx-auto w-full px-5 py-10 pb-28",
              [
                "f2",
                "fcal",
                "c6",
                "d6",
                "d7",
                "d9",
                "p0",
                "a6",
                "vocab",
                "prin",
                "a1enf",
                "a1adv",
                "a1trace",
                "a2enf",
                "a2adv",
                "a2inv",
                "a2trace",
                "a3adv",
                "a3inv",
                "a3trace",
                "a3bnd",
                "a4adv",
                "a4inv",
                "a4trace",
                "a5adv",
                "a5inv",
                "a5trace",
                "a5tok",
                "a6adv",
                "a6inv",
                "a6trace",
                "a6bnd",
                "ph3",
                "ph4",
                "ph5",
                "ph6",
                "ph7",
                "ph8",
              ].includes(section.id)
                ? "max-w-6xl"
                : "max-w-3xl",
            )}
          >
            {section.id === "cover" ? (
              <CoverMark version={version} />
            ) : (
              <>
                <p className="text-xs tracking-[0.18em] text-subtle uppercase">{section.dek}</p>
                <h1 className="mt-3 font-display text-4xl leading-tight text-fg sm:text-5xl">
                  {section.title}
                </h1>
                {sectionHasDiff(section) ? (
                  <p className="mt-4 text-xs tracking-[0.12em] text-law uppercase">
                    {version === "v2"
                      ? "v5.3 rewrite of this section"
                      : "v5.0 text — v5.3 rewrites this"}
                  </p>
                ) : (
                  <p className="mt-4 text-xs tracking-[0.12em] text-subtle uppercase">
                    Identical in v5.0 and v5.3
                  </p>
                )}
              </>
            )}
            <div className="mt-8">
              {section.id === "cover" ? (
              <div className="no-print mb-8 rounded-xl border border-rule bg-surface p-4">
                <p className="text-[11px] tracking-[0.14em] text-subtle uppercase">Download</p>
                <p className="mt-1 font-display text-lg text-fg">
                  Open the PDF in a new tab, then save it.
                </p>
                <p className="mt-1 text-sm text-muted">
                  The live preview iframe blocks hidden blob downloads. These are real files.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="/AGBOFA-Constitution-v5.3.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full bg-fg px-4 py-2 text-sm text-bg"
                  >
                    Open v5.3 PDF
                  </a>
                  <a
                    href="/AGBOFA-Constitution-v5.0.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-rule px-4 py-2 text-sm text-fg"
                  >
                    Open v5.0 freeze
                  </a>
                </div>
              </div>
            ) : null}
            <Blocks blocks={blocks} />
            </div>
          </article>
        </main>

        <footer className="no-print flex items-center justify-between gap-3 border-t border-rule bg-surface px-4 py-3">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            <span className="hidden sm:inline">{SECTIONS[index - 1]?.nav ?? "Start"}</span>
          </button>
          <p className="font-mono text-[11px] tracking-wider text-subtle tabular-nums">
            {index + 1} / {SECTIONS.length}
          </p>
          <button
            type="button"
            onClick={next}
            disabled={index === SECTIONS.length - 1}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted disabled:opacity-40"
          >
            <span className="hidden sm:inline">{SECTIONS[index + 1]?.nav ?? "End"}</span>
            <ChevronRight className="size-4" />
          </button>
        </footer>
      </div>
    </div>
  );
}

function NavButton({
  active,
  label,
  num,
  onClick,
  marked,
}: {
  active: boolean;
  label: string;
  num: string;
  onClick: () => void;
  marked: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm",
        active ? "bg-elevated text-fg" : "text-muted hover:bg-paper hover:text-fg",
      )}
    >
      <span className="w-10 shrink-0 font-mono text-[10px] tracking-wider text-subtle">{num}</span>
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {marked ? <span className="size-1.5 rounded-full bg-law" aria-hidden /> : null}
    </button>
  );
}

function VersionChip({
  active,
  onClick,
  label,
  hint,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs",
        active ? "bg-fg text-bg" : "text-muted",
      )}
      title={hint}
    >
      {label}
    </button>
  );
}

function CoverMark({ version }: { version: "v1" | "v2" }) {
  return (
    <div className="mb-10 rounded-xl border border-rule bg-surface px-6 py-8">
      <p className="text-[11px] tracking-[0.22em] text-subtle uppercase">
        Master architecture and constitution
      </p>
      <p className="mt-4 font-display text-5xl text-fg">AGBOFA</p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        The governed digital product operating system. Intelligence is not authority.
      </p>
      <div className="mt-6 flex flex-wrap gap-6 text-xs tracking-[0.12em] text-subtle uppercase">
        <span>{version === "v1" ? "Received freeze v5.0" : "Operative issue v5.3 — P0 correction, 30-day increment"}</span>
        <span>Day 0</span>
        <span>Human owner + architect</span>
      </div>
    </div>
  );
}
