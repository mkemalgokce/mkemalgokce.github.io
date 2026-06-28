"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiSwift,
  SiXcode,
  SiGit,
  SiDocker,
  SiCplusplus,
  SiPython,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { HiMail } from "react-icons/hi";
import {
  FiMapPin,
  FiArrowRight,
  FiSmartphone,
  FiLayers,
  FiTool,
  FiServer,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Reveal, StaggerGroup, FadeItem, fadeUp, stagger } from "@/components/ui/motion";
import { site } from "@/lib/site";

const BIO =
  "As a passionate iOS Developer with 4+ years of experience, I build scalable, user-friendly applications. I love learning, discussing ideas, and sharing knowledge. Collaboration and teamwork are at the core of how I work, and I’m open to partnerships that drive innovative, impactful solutions.";

const STATS: { value: string; label: string }[] = [
  { value: "4+", label: "Years shipping" },
  { value: "iOS", label: "Native focus" },
];

const SOCIALS: { label: string; href: string; Icon: IconType }[] = [
  { label: "GitHub", href: site.socials.github, Icon: SiGithub },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: SiLinkedin },
];

const SKILLS: { name: string; Icon: IconType; tint: string }[] = [
  { name: "Swift", Icon: SiSwift, tint: "text-orange-500" },
  { name: "Xcode", Icon: SiXcode, tint: "text-blue-500" },
  { name: "Git", Icon: SiGit, tint: "text-orange-600 dark:text-orange-500" },
  { name: "Docker", Icon: SiDocker, tint: "text-sky-500" },
  { name: "C++", Icon: SiCplusplus, tint: "text-blue-600 dark:text-blue-400" },
  { name: "Python", Icon: SiPython, tint: "text-amber-500" },
];

type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
};

const EXPERIENCE: Experience[] = [
  {
    role: "iOS Developer",
    company: "Pinsoft IT Solutions Consulting",
    period: "2024 — Present",
    current: true,
    points: [
      "Develop and maintain iOS apps for various clients",
      "Implement features and fix bugs with Swift and modern iOS frameworks",
      "Collaborate cross-functionally for high-quality code and UX",
      "Follow Clean Code and Clean Architecture principles",
      "Participate in code reviews and mentor junior developers",
    ],
  },
  {
    role: "iOS Developer",
    company: "Arvis Technology",
    period: "2021 — 2023",
    points: [
      "Built iOS apps with Swift and Apple frameworks",
      "Contributed to a Face Recognition SDK",
      "Helped build an Online Banking SDK",
      "Integrated various technologies into mobile solutions",
    ],
  },
];

type Expertise = {
  title: string;
  Icon: IconType;
  chip: string;
  glow: string;
  items: string[];
};

const EXPERTISE: Expertise[] = [
  {
    title: "iOS Development",
    Icon: FiSmartphone,
    chip: "bg-blue-500/12 text-blue-600 dark:text-blue-400",
    glow: "bg-blue-500/20",
    items: ["UIKit", "SwiftUI", "Core Data", "Core Animation", "Auto Layout", "Storyboard & XIB", "Programmatic UI"],
  },
  {
    title: "Architecture & Patterns",
    Icon: FiLayers,
    chip: "bg-violet-500/12 text-violet-600 dark:text-violet-400",
    glow: "bg-violet-500/20",
    items: ["MVVM", "Clean Architecture", "Protocol-Oriented", "Dependency Injection", "Repository Pattern", "Observer", "Coordinator"],
  },
  {
    title: "Tooling",
    Icon: FiTool,
    chip: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
    glow: "bg-emerald-500/20",
    items: ["Xcode", "Instruments", "CocoaPods", "SPM", "Fastlane", "Charles Proxy", "Git"],
  },
  {
    title: "Backend Integration",
    Icon: FiServer,
    chip: "bg-amber-500/12 text-amber-600 dark:text-amber-400",
    glow: "bg-amber-500/20",
    items: ["RESTful APIs", "JSON/Codable", "URLSession", "Alamofire", "WebSocket", "JWT", "OAuth"],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">{children}</p>
  );
}

export default function AboutView() {
  return (
    <>
      <Hero />
      <Skills />
      <ExperienceTimeline />
      <ExpertiseGrid />
    </>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */

function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="px-4 pb-8 pt-12 text-center sm:px-6 sm:pt-16 lg:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-3xl flex-col items-center"
      >
        {/* Avatar medallion */}
        <motion.div variants={fadeUp} className="relative">
          <div aria-hidden className="absolute -inset-5 -z-10 rounded-full bg-accent/25 blur-2xl" />
          <div className={`rounded-full glass p-1.5 ${reduce ? "" : "animate-float-slow"}`}>
            <div className="relative h-32 w-32 overflow-hidden rounded-full sm:h-40 sm:w-40">
              <Image
                src="/avatar.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-7">
          <Eyebrow>About</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
        >
          {site.name}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm"
        >
          <span className="font-semibold text-accent-strong">{site.role}</span>
          <span aria-hidden className="text-fg-subtle">
            ·
          </span>
          <span className="inline-flex items-center gap-1.5 text-fg-muted">
            <FiMapPin className="h-4 w-4" aria-hidden />
            {site.location}
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-fg-muted"
        >
          {BIO}
        </motion.p>

        {/* Contact + social */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name}`}
            className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full glass-tint px-6 py-3.5 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            <HiMail className="h-5 w-5" aria-hidden />
            Get in touch
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile (opens in a new tab)`}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-base font-semibold text-fg transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <Icon className="h-5 w-5" aria-hidden />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Quick stats */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl glass px-5 py-4 text-center">
              <p className="text-2xl font-bold tracking-tight text-fg">{stat.value}</p>
              <p className="mt-0.5 text-xs font-medium text-fg-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Skills ─────────────────────────────────────────────────── */

function Skills() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Stack</Eyebrow>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Languages &amp; daily tools
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
            What I reach for most when shipping polished, dependable apps.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 flex flex-wrap gap-3">
          {SKILLS.map(({ name, Icon, tint }) => (
            <FadeItem key={name}>
              <span className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2.5 transition-transform duration-200 hover:-translate-y-1">
                <Icon className={`text-xl ${tint}`} aria-hidden />
                <span className="text-sm font-semibold text-fg">{name}</span>
              </span>
            </FadeItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ── Experience timeline ────────────────────────────────────── */

function ExperienceTimeline() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&rsquo;ve worked
          </h2>
        </Reveal>

        <div className="relative mt-12">
          <span aria-hidden className="absolute bottom-4 left-[7px] top-4 w-px bg-border" />
          <div className="space-y-8">
            {EXPERIENCE.map((job, index) => (
              <Reveal key={job.company} delay={index * 0.05} className="relative pl-8 sm:pl-10">
                <span
                  aria-hidden
                  className={`absolute left-0 top-7 h-3.5 w-3.5 -translate-x-[6px] rounded-full ring-4 ring-bg ${
                    job.current ? "bg-accent" : "bg-border-strong"
                  }`}
                />

                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-lift sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{job.role}</h3>
                      <p className="mt-1 text-[15px] font-semibold text-accent-strong">
                        {job.company}
                      </p>
                    </div>
                    {job.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-fg">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-fg/60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-fg" />
                        </span>
                        Current
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-border bg-bg-subtle/70 px-3 py-1 text-xs font-medium text-fg-muted">
                        {job.period}
                      </span>
                    )}
                  </div>

                  {job.current && (
                    <p className="mt-2 text-xs font-medium text-fg-muted">{job.period}</p>
                  )}

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[15px] leading-relaxed text-fg-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/60"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── iOS expertise grid ─────────────────────────────────────── */

function ExpertiseGrid() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Expertise</Eyebrow>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            What I bring to iOS
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
            A rounded toolkit spanning UI, architecture, tooling, and everything that connects an app
            to the outside world.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {EXPERTISE.map(({ title, Icon, chip, glow, items }) => (
            <FadeItem key={title} className="h-full">
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-lift sm:p-7"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${glow}`}
                />
                <div className="relative flex items-center gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${chip}`}>
                    <Icon aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg-subtle/70 px-2.5 py-1 text-xs font-medium text-fg-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
