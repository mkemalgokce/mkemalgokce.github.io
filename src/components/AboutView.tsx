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
  SiFlutter,
  SiDart,
  SiReact,
  SiKotlin,
  SiAndroid,
  SiTypescript,
} from "react-icons/si";
import { HiMail } from "react-icons/hi";
import {
  FiMapPin,
  FiArrowRight,
  FiSmartphone,
  FiLayers,
  FiTool,
  FiServer,
  FiCheckCircle,
  FiAward,
  FiGlobe,
  FiDownload,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Reveal, StaggerGroup, FadeItem, fadeUp, stagger } from "@/components/ui/motion";
import { site } from "@/lib/site";

const BIO =
  "As a passionate iOS Developer with 4+ years of experience, I build scalable, user-friendly applications. I love learning, discussing ideas, and sharing knowledge. Collaboration and teamwork are at the core of how I work, and I’m open to partnerships that drive innovative, impactful solutions.";

const STATS: { value: string; label: string }[] = [
  { value: "4+", label: "Years shipping" },
  { value: "15+", label: "Projects built" },
  { value: "iOS", label: "Native focus" },
];

const SOCIALS: { label: string; href: string; Icon: IconType }[] = [
  { label: "GitHub", href: site.socials.github, Icon: SiGithub },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: SiLinkedin },
];

const SKILLS: { name: string; Icon: IconType; tint: string }[] = [
  { name: "Swift", Icon: SiSwift, tint: "text-orange-500" },
  { name: "Flutter", Icon: SiFlutter, tint: "text-cyan-500" },
  { name: "Dart", Icon: SiDart, tint: "text-sky-500" },
  { name: "React Native", Icon: SiReact, tint: "text-sky-400" },
  { name: "Kotlin", Icon: SiKotlin, tint: "text-violet-500" },
  { name: "TypeScript", Icon: SiTypescript, tint: "text-blue-500" },
  { name: "Python", Icon: SiPython, tint: "text-amber-500" },
  { name: "C++", Icon: SiCplusplus, tint: "text-blue-600 dark:text-blue-400" },
  { name: "Android", Icon: SiAndroid, tint: "text-green-500" },
  { name: "Xcode", Icon: SiXcode, tint: "text-blue-500" },
  { name: "Git", Icon: SiGit, tint: "text-orange-600 dark:text-orange-500" },
  { name: "Docker", Icon: SiDocker, tint: "text-sky-500" },
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
      "Contributed to NFC + face-verification and online-banking SDKs",
      "Worked on the mobile side of a WebRTC video-calling SDK",
      "Wrote unit & integration tests for SDK reliability across iOS versions and devices",
    ],
  },
  {
    role: "Freelance iOS Developer",
    company: "Remote",
    period: "2020 — 2021",
    points: [
      "Designed and shipped custom iOS apps for small businesses and startups",
      "Built a restaurant ordering app with real-time tracking and push notifications",
      "Developed a fitness tracking app with HealthKit and Core Data",
    ],
  },
  {
    role: "iOS Developer Intern",
    company: "Arvis Technology",
    period: "2020 — 2021",
    points: [
      "Built iOS apps under senior developer mentorship",
      "Hands-on with Swift, UIKit, and version control",
    ],
  },
];

type Education = { degree: string; school: string; period: string; detail?: string };

const EDUCATION: Education[] = [
  {
    degree: "M.Sc., Electronics & Communication Engineering",
    school: "Yıldız Technical University",
    period: "2024 — Present",
    detail: "Istanbul, TR",
  },
  {
    degree: "B.Sc., Computer Engineering",
    school: "Istanbul Medeniyet University",
    period: "2018 — 2022",
    detail: "GPA 3.1 / 4.0 · Istanbul, TR",
  },
];

const LANGUAGES: { name: string; level: string }[] = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Upper-Intermediate" },
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
    items: ["UIKit", "SwiftUI", "Swift Concurrency", "Combine", "Core Data", "Core Animation", "Auto Layout", "Programmatic UI"],
  },
  {
    title: "Cross-Platform",
    Icon: SiFlutter,
    chip: "bg-cyan-500/12 text-cyan-600 dark:text-cyan-400",
    glow: "bg-cyan-500/20",
    items: ["Flutter", "Dart", "React Native", "State Management", "Platform Channels", "Responsive UI", "App Store & Play Store"],
  },
  {
    title: "Android",
    Icon: SiAndroid,
    chip: "bg-green-500/12 text-green-600 dark:text-green-400",
    glow: "bg-green-500/20",
    items: ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design", "Coroutines", "Gradle"],
  },
  {
    title: "Architecture & Patterns",
    Icon: FiLayers,
    chip: "bg-violet-500/12 text-violet-600 dark:text-violet-400",
    glow: "bg-violet-500/20",
    items: ["MVVM", "VIPER", "Clean Architecture", "MVC", "Coordinator", "Dependency Injection", "Protocol-Oriented", "Repository", "SOLID"],
  },
  {
    title: "Practices",
    Icon: FiCheckCircle,
    chip: "bg-rose-500/12 text-rose-600 dark:text-rose-400",
    glow: "bg-rose-500/20",
    items: ["TDD", "Clean Code", "Unit & Snapshot Testing", "Agile / Scrum", "Code Review", "Mentoring", "CI/CD"],
  },
  {
    title: "Tooling & CI/CD",
    Icon: FiTool,
    chip: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
    glow: "bg-emerald-500/20",
    items: ["Xcode", "Tuist", "Fastlane", "SPM", "CocoaPods", "GitHub Actions", "Instruments", "Git"],
  },
  {
    title: "Backend Integration",
    Icon: FiServer,
    chip: "bg-amber-500/12 text-amber-600 dark:text-amber-400",
    glow: "bg-amber-500/20",
    items: ["RESTful APIs", "JSON/Codable", "URLSession", "Alamofire", "WebSocket", "Firebase", "JWT", "OAuth"],
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
      <Capabilities />
      <ExperienceTimeline />
      <EducationSection />
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
          <a
            href="/cv.pdf"
            download="Mustafa-Kemal-Gokce-CV.pdf"
            aria-label="Download CV (PDF)"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-base font-semibold text-fg transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            <FiDownload className="h-5 w-5" aria-hidden />
            Download CV
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

/* ── Capabilities ───────────────────────────────────────────── */

function Capabilities() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            What I bring to mobile
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
            iOS-first, comfortable across cross-platform and Android &mdash; a rounded toolkit
            spanning UI, architecture, testing, tooling, and everything that connects an app to the
            outside world.
          </p>
        </Reveal>

        {/* Stack chips */}
        <StaggerGroup className="mt-8 flex flex-wrap gap-2.5">
          {SKILLS.map(({ name, Icon, tint }) => (
            <FadeItem key={name}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle/70 px-3.5 py-2 text-sm font-semibold text-fg">
                <Icon className={`text-base ${tint}`} aria-hidden />
                {name}
              </span>
            </FadeItem>
          ))}
        </StaggerGroup>

        {/* Spec-sheet panel — stacked groups, one surface */}
        <Reveal delay={0.05} className="mt-10">
          <div className="divide-y divide-border overflow-hidden rounded-3xl glass px-6 sm:px-9">
            {EXPERTISE.map(({ title, Icon, chip, items }) => (
              <div
                key={title}
                className="flex flex-col gap-3.5 py-7 first:pt-8 last:pb-8 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex items-center gap-3 sm:w-52 sm:shrink-0">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl text-xl ${chip}`}>
                    <Icon aria-hidden />
                  </span>
                  <h3 className="text-base font-bold tracking-tight">{title}</h3>
                </div>
                <div className="flex flex-1 flex-wrap gap-2 sm:pt-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg-subtle/70 px-3 py-1 text-[13px] font-medium text-fg-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Experience timeline ────────────────────────────────────── */

function ExperienceTimeline() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
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
              <Reveal key={`${job.company}-${job.period}`} delay={index * 0.05} className="relative pl-8 sm:pl-10">
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

/* ── Education & languages ──────────────────────────────────── */

function EducationSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>Education</Eyebrow>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Studies &amp; languages
          </h2>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {EDUCATION.map((e) => (
            <FadeItem key={e.degree} className="h-full">
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-lift sm:p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/12 text-xl text-blue-600 dark:text-blue-400">
                    <FiAward aria-hidden />
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border bg-bg-subtle/70 px-3 py-1 text-xs font-medium text-fg-muted">
                    {e.period}
                  </span>
                </div>
                <h3 className="relative mt-4 text-lg font-bold leading-snug tracking-tight">
                  {e.degree}
                </h3>
                <p className="relative mt-1 text-[15px] font-semibold text-accent-strong">
                  {e.school}
                </p>
                {e.detail && (
                  <p className="relative mt-auto pt-2 text-sm text-fg-muted">{e.detail}</p>
                )}
              </motion.article>
            </FadeItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.05} className="mt-5">
          <div className="rounded-3xl glass p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <FiGlobe className="h-5 w-5 text-accent-strong" aria-hidden />
              <h3 className="text-base font-bold tracking-tight">Languages</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {LANGUAGES.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle/70 px-3.5 py-2 text-sm"
                >
                  <span className="font-semibold text-fg">{l.name}</span>
                  <span aria-hidden className="text-fg-subtle">
                    ·
                  </span>
                  <span className="text-fg-muted">{l.level}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
