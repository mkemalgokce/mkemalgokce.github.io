import Link from "next/link";
import { FaApple } from "react-icons/fa";

export const TAKIDEFTERI_EMAIL = "mkemaldev@gmail.com";
export const TAKIDEFTERI_APP_STORE_URL =
  "https://apps.apple.com/tr/app/id6797252753";

export function TakiDefteriLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, small logo asset
    <img
      src="/takidefteri-icon.png"
      alt="Takı Defteri uygulama simgesi"
      width={64}
      height={64}
      className={`rounded-[22%] shadow-sm ring-1 ring-black/5 ${className}`}
    />
  );
}

export function TakiDefteriNav({ active }: { active?: "destek" | "gizlilik" | "kosullar" }) {
  const base = "text-sm font-medium transition-colors";
  const tone = (key: string) =>
    active === key ? "text-stone-900" : "text-stone-500 hover:text-stone-900";
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-stone-200/70 bg-[#fdfaf3]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/takidefteri" className="flex items-center gap-2.5">
          <TakiDefteriLogo />
          <span className="text-lg font-semibold tracking-tight text-stone-900">Takı Defteri</span>
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          <Link href="/takidefteri/destek" className={`${base} ${tone("destek")} hidden sm:block`}>
            Destek
          </Link>
          <Link
            href="/takidefteri/gizlilik"
            className={`${base} ${tone("gizlilik")} hidden sm:block`}
          >
            Gizlilik
          </Link>
          <Link
            href="/takidefteri/kosullar"
            className={`${base} ${tone("kosullar")} hidden sm:block`}
          >
            Koşullar
          </Link>
          <a
            href={TAKIDEFTERI_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
          >
            <FaApple className="h-4 w-4" aria-hidden />
            İndir
          </a>
        </div>
      </div>
    </nav>
  );
}

export function TakiDefteriFooter() {
  return (
    <footer className="border-t border-stone-200 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <TakiDefteriLogo />
            <div>
              <p className="font-semibold leading-tight text-stone-900">Takı Defteri</p>
              <p className="text-sm text-stone-400">Düğün takıları tek defterde</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            <Link
              href="/takidefteri/destek"
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              Destek
            </Link>
            <Link
              href="/takidefteri/gizlilik"
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/takidefteri/kosullar"
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              Kullanım Koşulları
            </Link>
            <a
              href={`mailto:${TAKIDEFTERI_EMAIL}`}
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              İletişim
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-100 pt-8 text-center text-sm text-stone-400">
          <p>&copy; 2026 Takı Defteri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold text-stone-900">{title}</h2>
      {children}
    </section>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
