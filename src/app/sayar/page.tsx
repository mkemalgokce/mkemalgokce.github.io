"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowDownLeft,
  FiArrowUpRight,
  FiArrowUp,
  FiCheck,
  FiCloud,
  FiDownloadCloud,
  FiBell,
  FiAward,
  FiLock,
  FiShoppingCart,
  FiDollarSign,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { FaApple } from "react-icons/fa";
import { SayarLogo, SayarNav, SayarFooter } from "./_components/SiteChrome";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function SayarPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600/15">
      <SayarNav />
      <main className="overflow-x-hidden">
        <Hero />
        <DemoStrip />
        <Features />
        <CTA />
      </main>
      <SayarFooter />
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-16 sm:pt-40">
      {/* soft brand glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[520px] max-w-4xl bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.14),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700"
          >
            <HiSparkles className="h-4 w-4" aria-hidden />
            Just type it — Sayar does the rest
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Track every expense
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              confidence
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500 lg:mx-0"
          >
            Type <span className="font-medium text-slate-700">&ldquo;-300 market&rdquo;</span> and
            it&rsquo;s logged — amount, category, the lot. Sayar turns plain words into clean income
            and expense records, instantly.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="https://apps.apple.com/app/sayar"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              <FaApple className="h-5 w-5" aria-hidden />
              Download on the App Store
            </a>
            <a
              href="#features"
              className="text-base font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              See what&rsquo;s inside →
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-sm text-slate-400"
          >
            Private by design · iCloud sync · No account needed
          </motion.p>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

/* ── Phone mockup with live "type-to-record" demo ───────────── */

const PHRASE = "-300 market";

function PhoneMockup() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? PHRASE : "");
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    let raf: ReturnType<typeof setTimeout>;
    let i = 0;
    let phase: "typing" | "hold" | "reset" = "typing";

    const tick = () => {
      if (phase === "typing") {
        i += 1;
        setTyped(PHRASE.slice(0, i));
        if (i >= PHRASE.length) {
          phase = "hold";
          setDone(true);
          raf = setTimeout(tick, 1900);
        } else {
          raf = setTimeout(tick, 110);
        }
      } else if (phase === "hold") {
        phase = "reset";
        setDone(false);
        setTyped("");
        i = 0;
        raf = setTimeout(tick, 900);
      } else {
        phase = "typing";
        raf = setTimeout(tick, 80);
      }
    };

    raf = setTimeout(tick, 1100);
    return () => clearTimeout(raf);
  }, [reduce]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative w-[300px] [perspective:1200px] sm:w-[330px]"
    >
      {/* device */}
      <div className="relative rounded-[2.75rem] border border-slate-200 bg-slate-900 p-[10px] shadow-2xl shadow-slate-900/25">
        <div className="overflow-hidden rounded-[2.25rem] bg-white">
          {/* notch */}
          <div className="relative flex h-8 items-center justify-center bg-white">
            <div className="h-[18px] w-[100px] rounded-full bg-slate-900" />
          </div>

          <div className="space-y-4 px-5 pb-7 pt-1">
            <h3 className="text-2xl font-bold tracking-tight">Home</h3>

            {/* balance */}
            <div className="rounded-2xl bg-[#EEF1F6] px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Balance
              </p>
              <p className="mt-0.5 text-3xl font-bold tracking-tight tabular-nums">₺ 5,835.00</p>
            </div>

            {/* income / expense */}
            <div className="grid grid-cols-2 gap-3">
              <StatPill
                tint="green"
                icon={<FiArrowDownLeft />}
                label="Income"
                value="+₺ 5,000.00"
              />
              <StatPill tint="red" icon={<FiArrowUpRight />} label="Expense" value="−₺ 165.00" />
            </div>

            {/* AI input */}
            <div>
              <div
                className={`flex items-center gap-2.5 rounded-2xl border bg-[#F4F6FA] py-2 pl-2 pr-2 transition-colors duration-300 ${
                  done ? "border-blue-300 ring-2 ring-blue-200" : "border-transparent"
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                  <HiSparkles className="h-4 w-4" aria-hidden />
                </span>
                <span className="flex-1 truncate text-[15px] font-medium text-slate-700">
                  {typed || <span className="text-slate-400">−120 market</span>}
                  {!done && (
                    <span className="ml-0.5 inline-block h-4 w-[2px] -translate-y-[1px] animate-pulse bg-blue-500 align-middle" />
                  )}
                </span>
                <motion.span
                  key={done ? "check" : "send"}
                  initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-white ${
                    done ? "bg-blue-600" : "bg-blue-200"
                  }`}
                >
                  {done ? <FiCheck className="h-4 w-4" /> : <FiArrowUp className="h-4 w-4" />}
                </motion.span>
              </div>
              <p className="mt-2 px-1 text-[13px] text-slate-400">
                Type an amount and a note to record it
              </p>
            </div>

            {/* recent */}
            <div>
              <div className="mb-2 flex items-center justify-between px-1">
                <h4 className="text-base font-bold">Recent</h4>
                <span className="text-sm font-semibold text-blue-600">See all</span>
              </div>
              <div className="overflow-hidden rounded-2xl bg-[#F4F6FA]">
                <Txn
                  icon={<FiDollarSign />}
                  tint="green"
                  title="Salary"
                  meta="Salary · Jan 10"
                  amount="+₺ 5,000.00"
                  positive
                />
                <Txn
                  icon={<FiShoppingCart />}
                  tint="red"
                  title="market"
                  meta="Market · Jan 9"
                  amount="−₺ 120.00"
                />
                <Txn
                  icon={<FiShoppingCart />}
                  tint="red"
                  title="coffee"
                  meta="Market · Jan 8"
                  amount="−₺ 45.00"
                  last
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatPill({
  tint,
  icon,
  label,
  value,
}: {
  tint: "green" | "red";
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const tints = {
    green: "bg-emerald-100 text-emerald-600",
    red: "bg-red-100 text-red-500",
  };
  return (
    <div className="flex items-center gap-2.5 rounded-2xl bg-[#F4F6FA] px-3 py-3">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${tints[tint]}`}>
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
        <span className="block truncate text-[13px] font-bold tabular-nums">{value}</span>
      </span>
    </div>
  );
}

function Txn({
  icon,
  tint,
  title,
  meta,
  amount,
  positive,
  last,
}: {
  icon: React.ReactNode;
  tint: "green" | "red";
  title: string;
  meta: string;
  amount: string;
  positive?: boolean;
  last?: boolean;
}) {
  const tints = {
    green: "bg-emerald-100 text-emerald-600",
    red: "bg-red-100 text-red-500",
  };
  return (
    <div
      className={`flex items-center gap-3 px-3.5 py-3 ${last ? "" : "border-b border-slate-200/70"}`}
    >
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${tints[tint]}`}>
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-semibold leading-tight">{title}</span>
        <span className="block truncate text-[12px] text-slate-400">{meta}</span>
      </span>
      <span
        className={`shrink-0 text-[14px] font-bold tabular-nums ${
          positive ? "text-emerald-600" : "text-red-500"
        }`}
      >
        {amount}
      </span>
    </div>
  );
}

/* ── Demo strip / value prop ────────────────────────────────── */

function DemoStrip() {
  const steps = [
    { k: "Type", d: "“-300 market”, “+5000 salary”, “45 coffee”. Whatever feels natural." },
    { k: "Detect", d: "Sayar reads the sign, the amount and the note — and picks the category." },
    { k: "Done", d: "One tap. It lands in your balance, income and expense totals instantly." },
  ];
  return (
    <section className="border-y border-slate-100 bg-[#F5F5F7] px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Natural-language entry
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Bookkeeping that feels like texting
          </h2>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-slate-200/80 bg-white p-7 text-left shadow-sm"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.k}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate-500">{s.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Features (bento) ───────────────────────────────────────── */

const FEATURES = [
  {
    icon: HiSparkles,
    title: "Smart capture",
    body: "Plain-text entry parses amount, note and category automatically — no forms, no taps.",
    span: "sm:col-span-2",
    accent: "text-blue-600 bg-blue-50",
  },
  {
    icon: FiCloud,
    title: "iCloud sync",
    body: "Every record stays in sync across iPhone and iPad. Pick up exactly where you left off.",
    span: "",
    accent: "text-sky-600 bg-sky-50",
  },
  {
    icon: FiBell,
    title: "Smart notifications",
    body: "Budget alerts, monthly summaries and reminders that keep you ahead of your spending.",
    span: "",
    accent: "text-amber-600 bg-amber-50",
  },
  {
    icon: FiAward,
    title: "Achievements & insights",
    body: "Streaks, milestones and progress rewards turn good habits into something you can see.",
    span: "sm:col-span-2",
    accent: "text-violet-600 bg-violet-50",
  },
  {
    icon: FiDownloadCloud,
    title: "Export your data",
    body: "One tap to CSV or JSON. Your numbers are yours — take them anywhere.",
    span: "",
    accent: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: FiLock,
    title: "Private by design",
    body: "No account to create, no tracking. Your finances stay with you and your devices.",
    span: "sm:col-span-2",
    accent: "text-slate-700 bg-slate-100",
  },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need,
            <br className="hidden sm:block" /> nothing you don&rsquo;t
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            The power of a budgeting app, with the calm of a clean home screen.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/5 ${f.span}`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${f.accent}`}
                >
                  <Icon aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-500">{f.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ── CTA ────────────────────────────────────────────────────── */

function CTA() {
  return (
    <section className="px-6 pb-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-16 text-center shadow-2xl shadow-blue-600/20 sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl"
          />
          <span className="relative inline-flex">
            <SayarLogo className="h-16 w-16 ring-white/20" />
          </span>
          <h2 className="relative mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Start tracking in seconds
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Download Sayar and record your first expense before you finish reading this sentence.
          </p>
          <a
            href="https://apps.apple.com/app/sayar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
          >
            <FaApple className="h-5 w-5" aria-hidden />
            Download on the App Store
          </a>
        </div>
      </Reveal>
    </section>
  );
}

