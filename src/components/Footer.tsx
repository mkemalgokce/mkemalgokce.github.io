"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { nav, site } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: SiGithub, external: true },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: SiLinkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: HiMail, external: false },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border/60 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-fg text-bg text-[12px] font-bold tracking-tight">
                MKG
              </span>
              <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">{site.bio}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Explore</span>
            {nav.map(({ label, href }) => (
              <Link key={href} href={href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Connect</span>
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full glass text-fg-muted transition-colors hover:text-accent-strong"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-center text-sm text-fg-subtle sm:flex-row sm:text-left">
          <p suppressHydrationWarning>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed &amp; built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
