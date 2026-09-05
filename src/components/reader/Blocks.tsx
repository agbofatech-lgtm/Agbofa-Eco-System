import type { Block } from "@/lib/doc";
import { cn } from "@/lib/utils";

const TONE: Record<Extract<Block, { k: "callout" }>["tone"], string> = {
  law: "border-law/40 bg-law/8 text-fg",
  warn: "border-warn/40 bg-warn/8 text-fg",
  fix: "border-ok/40 bg-ok/8 text-fg",
  note: "border-rule-strong bg-elevated text-fg",
};

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.k) {
    case "p":
      return <p className="text-base leading-relaxed text-fg">{block.t}</p>;
    case "h":
      return (
        <h3
          className={cn(
            "font-display text-fg tracking-tight",
            block.l === 3 ? "text-lg font-medium" : "text-xl font-medium",
          )}
        >
          {block.t}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-mark pl-5 font-display text-xl leading-snug text-fg italic">
          {block.t}
        </blockquote>
      );
    case "callout":
      return (
        <aside className={cn("rounded-xl border px-5 py-4", TONE[block.tone])}>
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
            {block.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed">{block.t}</p>
        </aside>
      );
    case "ul":
      return (
        <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-fg marker:text-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-fg marker:text-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "kpis":
      return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {block.items.map((item) => (
            <div key={item.l} className="rounded-xl border border-rule bg-surface px-4 py-4">
              <p className="text-xs tracking-[0.12em] text-muted uppercase">{item.l}</p>
              <p className="mt-2 font-display text-2xl text-fg">{item.v}</p>
              {item.h ? <p className="mt-1 text-xs text-subtle">{item.h}</p> : null}
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-rule">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-elevated text-muted">
              <tr>
                {block.cols.map((col) => (
                  <th key={col} className="px-4 py-3 font-medium whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-rule align-top">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-fg">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "code":
      return (
        <pre className="overflow-x-auto rounded-xl border border-rule bg-elevated p-4 font-mono text-xs leading-relaxed text-fg">
          {block.t}
        </pre>
      );
    case "flow":
      return (
        <ol className="flex flex-col gap-2">
          {block.steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 font-mono text-[11px] tracking-wider text-subtle tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 rounded-lg border border-rule bg-surface px-3 py-2 text-sm text-fg">
                {step}
              </span>
            </li>
          ))}
        </ol>
      );
    case "article":
      return (
        <article className="rounded-xl border border-rule bg-surface p-5">
          <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
            Article {block.n}
          </p>
          <h4 className="mt-1 font-display text-2xl text-fg">{block.title}</h4>
          <p className="mt-3 text-sm leading-relaxed text-fg">{block.text}</p>
          <p className="mt-4 text-xs tracking-[0.12em] text-subtle uppercase">Scope</p>
          <p className="mt-1 text-sm text-muted">{block.scope}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <List title="Prohibitions" items={block.prohibitions} />
            <List title="Requirements" items={block.requirements} />
          </div>
          <p className="mt-4 text-xs tracking-[0.12em] text-subtle uppercase">Enforcement</p>
          <p className="mt-1 text-sm text-muted">{block.enforcement}</p>
          <p className="mt-3 text-xs tracking-[0.12em] text-subtle uppercase">
            Violation consequence
          </p>
          <p className="mt-1 text-sm text-danger">{block.consequence}</p>
        </article>
      );
    case "layer":
      return (
        <article className="rounded-xl border border-rule bg-surface p-5">
          <h4 className="font-display text-2xl text-fg">{block.name}</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{block.purpose}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <List title="Responsibilities" items={block.responsibilities} />
            <List title="Inputs" items={block.inputs} />
            <List title="Outputs" items={block.outputs} />
            <List title="Permissions" items={block.permissions} />
            <List title="Prohibited" items={block.prohibited} />
            <List title="Dependencies" items={block.dependencies} />
            <List title="Data" items={block.data} />
            <List title="Failure modes" items={block.failures} />
            <List title="Security boundary" items={block.security} />
            <List title="Audit" items={block.audit} />
          </div>
        </article>
      );
    case "agent":
      return (
        <article className="rounded-xl border border-rule bg-surface p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-display text-2xl text-fg">{block.name}</h4>
            <span className="rounded-full border border-rule px-2 py-1 font-mono text-[11px] tracking-wider text-muted uppercase">
              {block.autonomy}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{block.purpose}</p>
          <p className="mt-3 text-sm text-fg">
            <span className="text-muted">Authority. </span>
            {block.authority}
          </p>
          <p className="mt-2 text-sm text-fg">
            <span className="text-muted">Confidence. </span>
            {block.confidence}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <List title="Inputs" items={block.inputs} />
            <List title="Outputs" items={block.outputs} />
            <List title="Tools" items={block.tools} />
            <List title="Prohibited" items={block.prohibited} />
          </div>
        </article>
      );
    case "machine":
      return (
        <div className="rounded-xl border border-rule bg-surface p-5">
          <p className="text-xs tracking-[0.14em] text-muted uppercase">{block.title}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {block.states.map((state) => (
              <li
                key={state.id}
                className="flex flex-col gap-1 rounded-lg border border-rule px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono text-sm text-fg">{state.name}</span>
                <span className="text-xs text-subtle">→ {state.exits.join(" · ")}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "board":
      return <StrikeBoard block={block} />;
    case "days":
      return <DayList rows={block.rows} />;
    default:
      return null;
  }
}

function StrikeBoard({
  block,
}: {
  block: Extract<Block, { k: "board" }>;
}) {
  return (
    <div className="flex flex-col gap-8">
      {block.waves.map((wave) => (
        <section key={wave.id} className="rounded-xl border border-rule bg-surface p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
                {wave.id} · Days {wave.days}
              </p>
              <h4 className="mt-1 font-display text-2xl text-fg">{wave.name}</h4>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-muted">{wave.certify}</p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {block.tracks.map((track) => (
              <div key={track.id} className="rounded-lg border border-rule bg-paper px-3 py-3">
                <p className="text-[11px] tracking-[0.14em] text-mark uppercase">{track.name}</p>
                <p className="mt-1 text-[11px] text-subtle">{track.crew}</p>
                <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-4 text-xs leading-relaxed text-fg marker:text-muted">
                  {(wave.cells[track.id] ?? []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function DayList({
  rows,
}: {
  rows: Extract<Block, { k: "days" }>["rows"];
}) {
  const waves = ["W1", "W2", "W3", "W4"] as const;
  const labels: Record<string, string> = {
    W1: "Wave 1 — Kernel live",
    W2: "Wave 2 — Factory live",
    W3: "Wave 3 — Execute and prove",
    W4: "Wave 4 — Enterprise harden",
  };
  return (
    <div className="flex flex-col gap-8">
      {waves.map((wave) => (
        <section key={wave}>
          <p className="mb-3 text-[11px] tracking-[0.16em] text-subtle uppercase">{labels[wave]}</p>
          <div className="flex flex-col gap-3">
            {rows
              .filter((row) => row.wave === wave)
              .map((row) => (
                <article
                  key={row.d}
                  className={cn(
                    "rounded-xl border bg-surface px-4 py-4",
                    row.gate ? "border-mark/40" : "border-rule",
                  )}
                >
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-sm text-fg tabular-nums">D{String(row.d).padStart(2, "0")}</span>
                    {row.gate ? (
                      <span className="rounded-full bg-fg px-2 py-0.5 text-[10px] tracking-[0.12em] text-bg uppercase">
                        {row.gate}
                      </span>
                    ) : null}
                    <span className="text-sm text-muted">{row.focus}</span>
                  </div>
                  <dl className="mt-3 grid gap-2 text-xs leading-relaxed sm:grid-cols-2">
                    <DayTrack label="Kernel" text={row.k} />
                    <DayTrack label="Intelligence" text={row.i} />
                    <DayTrack label="Factory" text={row.p} />
                    <DayTrack label="Execution" text={row.x} />
                    <DayTrack label="Guard" text={row.g} />
                  </dl>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function DayTrack({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <dt className="tracking-[0.12em] text-subtle uppercase">{label}</dt>
      <dd className="mt-0.5 text-fg">{text}</dd>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs tracking-[0.12em] text-subtle uppercase">{title}</p>
      <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 text-sm leading-relaxed text-fg marker:text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
