import { TdFooter, TdNav, type TdNavKey } from "./SiteChrome";

export function LegalShell({
  active,
  kicker,
  title,
  updated,
  intro,
  children,
}: {
  active: TdNavKey;
  kicker: string;
  title: string;
  updated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="td-theme td-dotgrid min-h-screen bg-[rgb(var(--td-bg))] text-[rgb(var(--td-ink))] antialiased">
      <TdNav active={active} />

      <main id="main" className="px-5 pb-20 pt-[104px] sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="td-sticker inline-block -rotate-2 rounded-full bg-[rgb(var(--td-gold-soft))] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[rgb(var(--td-gold-deep))]">
            {kicker}
          </span>
          <h1 className="td-display mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm font-semibold text-[rgb(var(--td-ink-3))]">
            Son güncelleme: {updated}
          </p>

          {intro && (
            <div className="td-sticker mt-8 rounded-[22px] bg-[rgb(var(--td-surface))] p-6 text-[15px] leading-relaxed text-[rgb(var(--td-ink-2))]">
              {intro}
            </div>
          )}

          <div className="mt-10 space-y-9 text-[15px] leading-relaxed text-[rgb(var(--td-ink-2))] sm:text-base">
            {children}
          </div>
        </div>
      </main>

      <TdFooter />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="td-display mb-3 text-2xl font-extrabold text-[rgb(var(--td-ink))]">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-bold text-[rgb(var(--td-ink))]">{children}</strong>;
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--td-gold))] ring-2 ring-[rgb(var(--td-outline))]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** A short, factual callout — used for the "we never see this" style claims. */
export function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="td-sticker rounded-[18px] bg-[rgb(var(--td-green-soft))] px-4 py-3 text-[15px] text-[rgb(var(--td-ink))]">
      {children}
    </p>
  );
}
