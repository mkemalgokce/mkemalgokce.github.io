"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { nav, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-5 sm:px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full glass-strong px-2.5 py-2 pl-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-fg text-bg text-[11px] font-bold tracking-tight transition-transform group-hover:scale-105">
            MKG
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight lg:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map(({ label, href }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-fg/[0.08] dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={open ? "mobile-menu" : undefined}
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-3xl rounded-3xl glass-strong p-2 md:hidden"
          >
            <ul className="space-y-1">
              {nav.map(({ label, href }) => {
                const active = isActive(pathname, href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                        active ? "bg-accent/[0.12] text-accent-strong" : "text-fg-muted hover:bg-fg/5 hover:text-fg"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
