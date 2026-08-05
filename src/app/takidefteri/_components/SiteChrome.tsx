"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

export const TD_EMAIL = "mkemaldev@gmail.com";

/** App Store listing — the single source every CTA on the site reads from. */
export const TD_APP_STORE_URL = "https://apps.apple.com/tr/app/id6797252753";

export type TdNavKey = "home" | "destek" | "gizlilik" | "kosullar";

export function TdLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, small logo asset
    <img
      src="/takidefteri/icon.png"
      alt="Takı Defteri uygulama simgesi"
      width={512}
      height={512}
      className={`td-sticker rounded-[24%] ${className}`}
    />
  );
}

/** Primary CTA — the one download button, used everywhere. */
export function TdStoreButton({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const pad = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  }[size];

  const shell = `td-sticker td-press inline-flex items-center justify-center gap-2.5 rounded-full bg-[rgb(var(--td-gold))] font-bold text-[rgb(var(--td-on-accent))] ${pad} ${className}`;

  return (
    <a href={TD_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={shell}>
      <FaApple className="h-[1.15em] w-[1.15em]" aria-hidden />
      App Store&rsquo;dan İndir
    </a>
  );
}

function TdThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div aria-hidden className="h-10 w-10" />;
  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
      className="td-sticker grid h-10 w-10 place-items-center rounded-full bg-[rgb(var(--td-surface))] text-[rgb(var(--td-ink))]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {isDark ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

const NAV_LINKS: { key: TdNavKey; href: string; label: string }[] = [
  { key: "destek", href: "/takidefteri/destek", label: "Destek" },
  { key: "gizlilik", href: "/takidefteri/gizlilik", label: "Gizlilik" },
  { key: "kosullar", href: "/takidefteri/kosullar", label: "Koşullar" },
];

export function TdNav({ active }: { active?: TdNavKey }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b-2 border-[rgb(var(--td-outline))] bg-[rgb(var(--td-bg))]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <Link
          href="/takidefteri"
          className="flex shrink-0 items-center gap-2.5 rounded-xl"
          aria-current={active === "home" ? "page" : undefined}
        >
          <TdLogo />
          <span className="td-display text-lg font-extrabold tracking-tight text-[rgb(var(--td-ink))]">
            Takı Defteri
          </span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="hidden items-center gap-1 sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                aria-current={active === link.key ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-bold transition-colors ${
                  active === link.key
                    ? "bg-[rgb(var(--td-gold-soft))] text-[rgb(var(--td-gold-deep))]"
                    : "text-[rgb(var(--td-ink-2))] hover:bg-[rgb(var(--td-surface-2))] hover:text-[rgb(var(--td-ink))]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <TdThemeToggle />
          <TdStoreButton size="sm" className="hidden min-[420px]:inline-flex" />
        </div>
      </div>
    </nav>
  );
}

export function TdFooter() {
  return (
    <footer className="border-t-2 border-[rgb(var(--td-outline))] bg-[rgb(var(--td-surface-2))] px-5 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row md:items-start">
          <div className="flex items-center gap-3">
            <TdLogo className="h-12 w-12" />
            <div>
              <p className="td-display text-lg font-extrabold leading-tight text-[rgb(var(--td-ink))]">
                Takı Defteri
              </p>
              <p className="text-sm text-[rgb(var(--td-ink-2))]">
                Halaya sen çık, hesabı defter tutsun.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-semibold text-[rgb(var(--td-ink-2))] transition-colors hover:text-[rgb(var(--td-ink))]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${TD_EMAIL}`}
              className="text-sm font-semibold text-[rgb(var(--td-ink-2))] transition-colors hover:text-[rgb(var(--td-ink))]"
            >
              İletişim
            </a>
            <Link
              href="/projects"
              className="text-sm font-semibold text-[rgb(var(--td-ink-2))] transition-colors hover:text-[rgb(var(--td-ink))]"
            >
              Diğer projeler
            </Link>
          </nav>
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t-2 border-dashed border-[rgb(var(--td-line-strong))] pt-7 text-sm text-[rgb(var(--td-ink-3))] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Takı Defteri · Mustafa Kemal GÖKÇE</p>
          <p>iPhone için · iOS 17 ve üzeri</p>
        </div>
      </div>
    </footer>
  );
}
