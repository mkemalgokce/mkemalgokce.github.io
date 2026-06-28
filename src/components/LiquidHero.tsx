"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { fadeUp, stagger } from "@/components/ui/motion";
import { site } from "@/lib/site";

export default function LiquidHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-3xl flex-col items-center"
      >
        {/* avatar medallion */}
        <motion.div variants={fadeUp} className="relative">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-full bg-accent/25 blur-2xl" />
          <div className={`rounded-full glass p-1.5 ${reduce ? "" : "animate-float-slow"}`}>
            <div className="relative h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
              <Image
                src="/avatar.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="112px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-sm font-medium text-fg-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for iOS work
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-balance text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-3 text-xl font-semibold tracking-tight text-accent-strong sm:text-2xl"
        >
          {site.role}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-fg-muted"
        >
          4+ years building Swift &amp; SwiftUI apps with clean architecture and fluid motion.
          I&rsquo;m open to new iOS roles and freelance — and ready to start.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full glass-tint px-6 py-3.5 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            View my work
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-base font-semibold text-fg transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            <FiMail className="h-4 w-4" aria-hidden />
            Get in touch
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-7 inline-flex items-center gap-1.5 text-sm text-fg-subtle"
        >
          <FiMapPin className="h-4 w-4" aria-hidden /> {site.location} · Swift · UIKit &amp; SwiftUI
        </motion.p>
      </motion.div>
    </section>
  );
}
