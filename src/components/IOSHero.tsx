"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SiSwift, SiXcode } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FiArrowRight, FiMapPin, FiSmartphone } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { fadeUp, stagger, EASE } from "@/components/ui/motion";
import { site } from "@/lib/site";

const floatingTech = [
  { Icon: SiSwift, label: "Swift", className: "-left-5 top-8", tint: "text-orange-500" },
  { Icon: FiSmartphone, label: "SwiftUI", className: "-right-6 top-20", tint: "text-sky-500" },
  { Icon: SiXcode, label: "Xcode", className: "-left-6 bottom-16", tint: "text-blue-500" },
  { Icon: FaApple, label: "Apple", className: "-right-5 bottom-6", tint: "text-fg" },
];

export default function IOSHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      {/* backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial-fade opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[460px] max-w-4xl bg-[radial-gradient(60%_60%_at_50%_0%,rgb(var(--accent)/0.16),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={stagger} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-sm font-medium text-fg-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for iOS work
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            I build{" "}
            <span className="text-gradient">elegant</span> iOS apps with Swift
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted lg:mx-0"
          >
            I&rsquo;m {site.name.split(" ").slice(0, 2).join(" ")}, an {site.role} who cares about clean
            architecture, fluid motion, and the small details that make an app feel right.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              href="/projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-fg shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong sm:w-auto"
            >
              View projects
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-base font-semibold text-fg transition-all duration-200 hover:-translate-y-0.5 hover:bg-card-hover sm:w-auto"
            >
              About me
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-fg-subtle lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="h-4 w-4" aria-hidden /> {site.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HiSparkles className="h-4 w-4" aria-hidden /> 4+ years building for Apple platforms
            </span>
          </motion.div>
        </motion.div>

        {/* Avatar with floating tech chips */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div className="relative aspect-square">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-sky-400/20 to-transparent blur-2xl"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lift">
              <Image
                src="/avatar.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 340px"
                className="object-cover"
              />
            </div>

            {floatingTech.map(({ Icon, label, className, tint }, i) => (
              <motion.div
                key={label}
                aria-hidden
                className={`absolute ${className} ${reduce ? "" : "animate-float-slow"} flex items-center gap-2 rounded-2xl border border-border bg-card/90 px-3 py-2 shadow-soft backdrop-blur`}
                style={{ animationDelay: `${i * 0.8}s` }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.12 }}
              >
                <Icon className={`h-5 w-5 ${tint}`} />
                <span className="text-sm font-semibold">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
