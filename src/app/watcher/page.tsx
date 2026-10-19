"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiDownload,
  FiTerminal,
  FiArrowLeft,
  FiCopy,
  FiCheck,
  FiPlay,
  FiPause,
  FiUnlock,
  FiEyeOff,
  FiShield,
  FiCheckCircle,
  FiGitPullRequest,
  FiLock,
  FiHeart,
  FiInfo,
} from "react-icons/fi";
import { SiGithub, SiSwift } from "react-icons/si";
import ThemeToggle from "@/components/ThemeToggle";
import { Reveal, StaggerGroup, FadeItem } from "@/components/ui/motion";

const REPO = "https://github.com/mkemalgokce/Watcher";
const RELEASES = `${REPO}/releases/latest`;
const SPONSOR = "https://github.com/sponsors/mkemalgokce";
const VERSION = "0.1.1";

// Brand colours from the app icon. Text shades are darkened on light backgrounds to keep AA contrast.
const ORANGE_TEXT = "text-[#A84E00] dark:text-[#FF8A1F]";
const TEAL_TEXT = "text-[#0E7490] dark:text-[#17A9C4]";
const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#FF8A1F] font-semibold text-[#1B1F2A] transition-transform hover:-translate-y-0.5";
const SECONDARY_BTN =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-card font-semibold text-fg transition-colors hover:bg-card-muted";

/* ── shared bits ─────────────────────────────────────────────── */

function Label({ children, className = "", tone = "orange" }: { children: React.ReactNode; className?: string; tone?: "orange" | "teal" }) {
  const color = tone === "orange" ? ORANGE_TEXT : TEAL_TEXT;
  const dot = tone === "orange" ? "bg-[#FF8A1F]" : "bg-[#17A9C4]";
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${color} ${className}`}>
      <span aria-hidden className={`inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="rounded bg-fg/[0.07] px-1.5 py-0.5 font-mono text-[0.85em] text-fg">{children}</code>;
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded-md border border-border-strong bg-card px-1.5 py-0.5 font-mono text-[0.8em] text-fg shadow-[0_1px_0_rgb(var(--border-strong))]">
      {children}
    </kbd>
  );
}

function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex items-center justify-between border-b border-border bg-card-muted px-4 py-2.5">
        <span className="flex items-center gap-2 font-mono text-xs text-fg-muted">
          <FiTerminal className="h-3.5 w-3.5" aria-hidden />
          {label}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : `Copy ${label}`}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
        >
          {copied ? <FiCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <FiCopy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-fg">
        <code>{code}</code>
      </pre>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}

type Shot = { src: string; width: number; height: number; alt: string };

// The screenshots are light-mode app UI; a padded card frame keeps them from glaring on the dark theme.
function Screenshot({ shot, priority = false }: { shot: Shot; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card-muted p-1.5 shadow-lift dark:border-white/10 dark:bg-white/[0.04] sm:p-2">
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority={priority}
        className="h-auto w-full rounded-xl"
      />
    </figure>
  );
}

/* ── content (every claim comes from the Watcher README) ─────── */

type Feature = {
  id: string;
  label: string;
  title: string;
  intro: string;
  bullets: React.ReactNode[];
  shots: Shot[];
  wide?: boolean;
};

const FEATURES: Feature[] = [
  {
    id: "capture",
    label: "Capture",
    title: "Capture and decrypt HTTPS traffic",
    intro: "Record traffic from the whole Mac or a single client, and read HTTPS as plain text.",
    bullets: [
      "HTTP/1.1 and HTTP/2 (ALPN), WebSocket frames, Server-Sent Events and streamed bodies.",
      "HTTPS decryption with a local root certificate and per-host certificates; SSL Proxying include and exclude lists.",
      "A SOCKS5 listener, and a one-click macOS system proxy that is restored on quit and after a crash.",
      "Requests grouped by the app that sent them and by domain.",
    ],
    shots: [
      {
        src: "/watcher/main-window.png",
        width: 2640,
        height: 1560,
        alt: "Watcher main window: captured HTTPS requests grouped by app and domain, with a JSON response in the inspector",
      },
    ],
    wide: true,
  },
  {
    id: "inspect",
    label: "Inspect",
    title: "Inspect requests and responses",
    intro: "Every part of an exchange has its own view, and large bodies stay fast.",
    bullets: [
      "Request and response side by side: headers, query, form and multipart parameters, cookies, raw and hex views.",
      "Previews for JSON, images, HTML (rendered offline, scripts off), PDF, audio, video, GraphQL and Protobuf/gRPC.",
      "JWT and Base64 decoding, timing details, and a diff of any two responses.",
      "Syntax highlighting that colours only the visible lines, so a 30 MB response stays responsive.",
      "One search field with tokens for method, status, content type and host.",
    ],
    shots: [{ src: "/watcher/compare.png", width: 1800, height: 1120, alt: "Comparing two JSON responses line by line in Watcher" }],
  },
  {
    id: "mock",
    label: "Mock & debug",
    title: "Mock, rewrite and debug",
    intro: "Change traffic in flight without touching the app or the server.",
    bullets: [
      <><strong className="font-semibold text-fg">Breakpoints:</strong> pause a request or response, edit it, then continue or abort.</>,
      <><strong className="font-semibold text-fg">Map Local and Map Remote:</strong> answer from a local file, or send production traffic to staging.</>,
      <><strong className="font-semibold text-fg">Scripting:</strong> change requests and responses with JavaScript.</>,
      "Block and Allow Lists, DNS Spoofing, Reverse Proxy, External Proxy (HTTP, SOCKS, PAC), Network Throttling and No Caching.",
      "Rules match by wildcard, regex, method, GraphQL operation or sending app, and can be grouped in folders.",
    ],
    shots: [
      { src: "/watcher/breakpoints.png", width: 1920, height: 1240, alt: "A paused login request waiting at a breakpoint in Watcher" },
      { src: "/watcher/map-remote.png", width: 1840, height: 1600, alt: "A Map Remote rule sending API traffic to a staging server" },
    ],
  },
  {
    id: "compose",
    label: "Compose",
    title: "Compose, export and import",
    intro: "Send requests by hand and move sessions in and out of other tools.",
    bullets: [
      "Build or repeat requests (JSON, form, multipart, GraphQL, files), import a cURL command, mock a response.",
      "Export HAR, CSV, session files and workspaces; copy as cURL, Swift, Python, JavaScript, Go, Ruby or PHP.",
      "Import Charles sessions and settings.",
    ],
    shots: [{ src: "/watcher/compose.png", width: 1840, height: 1440, alt: "Composing and sending a JSON POST request in Watcher" }],
  },
  {
    id: "devices",
    label: "Devices",
    title: "Debug iOS and Android apps",
    intro: "Trust the certificate on each target, with step-by-step setup for each.",
    bullets: [
      "This Mac.",
      "iOS Simulators.",
      "iPhone and iPad, with a configuration profile and a QR code.",
      <>Android, through <Code>adb</Code>.</>,
    ],
    shots: [
      { src: "/watcher/device-setup.png", width: 1560, height: 1160, alt: "Setting up an iPhone to send its traffic through Watcher, with a QR code" },
    ],
  },
];

const CLI = `swift run watcher-cli start --har session.har    # capture to a HAR file
swift run watcher-cli tool block-list on
swift run watcher-cli rules export rules.json    # also: rules import, rules import-charles
swift run watcher-cli install-simulator-cert --device booted
swift run watcher-cli android cert               # also: android list | proxy --port 9090 | unproxy
swift run watcher-cli mcp                        # MCP server on stdin/stdout`;

const CURL = `curl -x http://127.0.0.1:9090 --cacert ~/.watcher/watcher-ca.pem https://example.com/`;

const SCRIPT = `async function onRequest(context, url, request) {   // request: method, headers, queries, body
  request.headers["X-Watcher"] = "1";
  return request;
}
async function onResponse(context, url, request, response) {   // response: statusCode, headers, body, bodyFilePath
  response.statusCode = 200;
  return response;
}`;

const BUILD = `git clone https://github.com/mkemalgokce/watcher.git
cd watcher
tools/build-app.sh   # writes build/Watcher.app, signed ad hoc for this Mac`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Watcher",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS 14 or later",
  description:
    "A free, open-source HTTP and HTTPS debugging proxy for macOS. Capture, decrypt, inspect, mock and modify traffic from your Mac, iOS Simulators, iPhones, iPads and Android devices.",
  url: "https://mkemalgokce.github.io/watcher",
  downloadUrl: RELEASES,
  softwareVersion: VERSION,
  license: `${REPO}/blob/main/LICENSE`,
  offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
  author: { "@type": "Person", name: "Mustafa Kemal GÖKÇE" },
};

/* ── page ────────────────────────────────────────────────────── */

export default function WatcherPage() {
  return (
    <div className="min-h-screen bg-bg text-fg antialiased selection:bg-[#FF8A1F]/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WatcherNav />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        {FEATURES.map((f, i) => (
          <FeatureSection key={f.id} feature={f} index={i} />
        ))}
        <GettingStarted />
        <CommandLine />
        <Scripting />
        <OpenSource />
        <CTA />
      </main>
      <WatcherFooter />
    </div>
  );
}

/* ── nav ─────────────────────────────────────────────────────── */

function WatcherNav() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#cli", label: "CLI & MCP" },
    { href: "#open-source", label: "Open source" },
  ];
  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/watcher/icon.png" alt="" width={30} height={30} className="h-[30px] w-[30px]" />
          <span className="text-lg font-bold tracking-tight">Watcher</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg md:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watcher on GitHub"
            className="grid h-11 w-11 place-items-center rounded-full text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <ThemeToggle />
          <a href={RELEASES} target="_blank" rel="noopener noreferrer" className={`${PRIMARY_BTN} ml-1 px-4 py-2 text-sm`}>
            <FiDownload className="h-4 w-4" aria-hidden />
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ── hero ────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[460px] max-w-5xl bg-[radial-gradient(50%_60%_at_30%_0%,rgba(255,138,31,0.16),transparent_70%),radial-gradient(50%_60%_at_75%_10%,rgba(23,169,196,0.14),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Image src="/watcher/icon.png" alt="Watcher app icon" width={96} height={96} priority className="mx-auto h-20 w-20 sm:h-24 sm:w-24" />
          <Label className="mt-6 justify-center">Free and open source · MIT</Label>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            The HTTP and HTTPS debugging proxy for <span className={ORANGE_TEXT}>mac</span>
            <span className={TEAL_TEXT}>OS</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Capture, decrypt, inspect, mock and modify network traffic from your Mac, iOS Simulators, iPhones, iPads and
            Android devices. A native SwiftUI app with a command line tool for scripts and CI, and an MCP server so AI
            coding agents can read captured traffic, add rules and send requests.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={RELEASES} target="_blank" rel="noopener noreferrer" className={`${PRIMARY_BTN} px-7 py-3.5 text-base`}>
              <FiDownload className="h-5 w-5" aria-hidden />
              Download for macOS
            </a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className={`${SECONDARY_BTN} px-7 py-3.5 text-base`}>
              <SiGithub className="h-5 w-5" aria-hidden />
              View the source
            </a>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-fg-muted">
            v{VERSION} · macOS 14+ · Apple silicon · Signed and notarized
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <HeroVideo />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVideo() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Started from an effect, not the autoPlay attribute, so server and client markup match. With reduced motion
  // the poster shows until the user presses play.
  useEffect(() => {
    if (!reduce) videoRef.current?.play().catch(() => {});
  }, [reduce]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => setPlaying(false));
    else v.pause();
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card-muted p-1.5 shadow-lift dark:border-white/10 dark:bg-white/[0.04] sm:p-2">
      <video
        ref={videoRef}
        className="aspect-video w-full rounded-2xl bg-[#1B1F2A] object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/watcher/poster.png"
        aria-label="Watcher demo: capturing, inspecting and mocking HTTPS traffic"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/watcher/promo.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause demo video" : "Play demo video"}
        className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-[#1B1F2A]/70 text-white backdrop-blur-md transition-colors hover:bg-[#1B1F2A]/90 sm:bottom-5 sm:left-5"
      >
        {playing ? <FiPause className="h-4 w-4" /> : <FiPlay className="h-4 w-4" />}
      </button>
    </div>
  );
}

/* ── features ────────────────────────────────────────────────── */

function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
  const { id, label, title, intro, bullets, shots, wide } = feature;
  const tinted = index % 2 === 0;
  const tone = index % 2 === 0 ? "orange" : "teal";
  const check = tone === "orange" ? ORANGE_TEXT : TEAL_TEXT;
  const text = (
    <Reveal>
      <Label tone={tone}>{label}</Label>
      <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-fg-muted">{intro}</p>
      <ul className={`mt-7 grid gap-3 ${wide ? "md:grid-cols-2" : ""}`}>
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
            <FiCheckCircle className={`mt-1 h-4 w-4 shrink-0 ${check}`} aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
  const media = (
    <Reveal delay={0.1} className="space-y-5">
      {shots.map((s) => (
        <Screenshot key={s.src} shot={s} />
      ))}
    </Reveal>
  );
  return (
    <section
      id={index === 0 ? "features" : id}
      className={`scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 ${tinted ? "border-y border-border bg-bg-subtle" : ""}`}
    >
      <div id={index === 0 ? id : undefined} className="mx-auto max-w-6xl">
        {wide ? (
          <div className="space-y-12">
            <div className="max-w-4xl">{text}</div>
            {media}
          </div>
        ) : (
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className={`min-w-0 ${index % 2 === 1 ? "lg:order-2" : ""}`}>{text}</div>
            {media}
          </div>
        )}
      </div>
    </section>
  );
}

/* ── getting started ─────────────────────────────────────────── */

function GettingStarted() {
  const steps: React.ReactNode[] = [
    <>
      Download <Code>Watcher-&lt;version&gt;.dmg</Code> from the{" "}
      <a href={RELEASES} target="_blank" rel="noopener noreferrer" className={`font-medium underline-offset-2 hover:underline ${ORANGE_TEXT}`}>
        latest release
      </a>{" "}
      and drag Watcher to Applications. Releases are signed with a Developer ID and notarized by Apple.
    </>,
    <>Open Watcher. The welcome sheet walks through trusting the root certificate.</>,
    <>
      Press <strong className="font-semibold text-fg">Record</strong> (<Kbd>⌘E</Kbd>). Watcher listens on <Code>127.0.0.1:9090</Code>.
      Turn on the system proxy (<Kbd>⇧⌘Y</Kbd>) to capture the whole Mac.
    </>,
    <>
      To capture a phone or simulator, open <strong className="font-semibold text-fg">Set Up a Device</strong> (<Kbd>⇧⌘D</Kbd>).
    </>,
    <>
      Press <strong className="font-semibold text-fg">Pause</strong> to stop; your original network settings come back.
    </>,
  ];
  return (
    <section id="start" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Label className="justify-center">Getting started</Label>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">From download to first request.</h2>
        </Reveal>
        <StaggerGroup className="mt-10 space-y-3">
          {steps.map((step, i) => (
            <FadeItem key={i}>
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft sm:p-5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#FF8A1F] font-mono text-sm font-bold text-[#1B1F2A]">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-relaxed text-fg-muted">{step}</p>
              </div>
            </FadeItem>
          ))}
        </StaggerGroup>
        <p className="mt-6 text-center text-sm text-fg-muted">
          Press <Kbd>⌘/</Kbd> in the app for every keyboard shortcut.
        </p>
      </div>
    </section>
  );
}

/* ── CLI + MCP ───────────────────────────────────────────────── */

function CommandLine() {
  return (
    <section id="cli" className="scroll-mt-20 border-y border-border bg-bg-subtle px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Label tone="teal">Command line · MCP</Label>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">The same proxy, headless.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
            <Code>watcher-cli</Code> runs the same proxy without a window, for scripts and CI, and gives AI agents the
            captured traffic and the rules over MCP.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-9 space-y-4">
          <CodeBlock code={CLI} label="watcher-cli" />
          <CodeBlock code={CURL} label="send a request through the proxy" />
          <p className="text-[15px] leading-relaxed text-fg-muted">
            The app and the CLI share <Code>~/.watcher/settings.json</Code>; a running Watcher picks up edits within a second.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── scripting + limits ──────────────────────────────────────── */

function Scripting() {
  return (
    <section id="scripting" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <Reveal className="min-w-0">
          <Label>Scripting</Label>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Rewrite traffic with JavaScript.</h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            A script gets each request before it leaves and each response before it returns, and hands back the version
            to use.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-fg-muted shadow-soft">
            <p className="flex items-center gap-2 font-semibold text-fg">
              <FiInfo className={`h-4 w-4 ${TEAL_TEXT}`} aria-hidden />
              Limits
            </p>
            <p className="mt-2">
              Bodies a tool must read (scripting, breakpoints, GraphQL matching, throttling) are buffered up to 64 MB;
              streamed bodies keep their first 1 MB; a WebSocket keeps its newest 2000 messages; scripts time out after
              10 s. Binary Charles sessions (<Code>.chls</Code>, <Code>.chlz</Code>) need Charles installed.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <CodeBlock code={SCRIPT} label="script.js" />
        </Reveal>
      </div>
    </section>
  );
}

/* ── open source ─────────────────────────────────────────────── */

type Pillar = { Icon: React.ElementType; title: string; body: React.ReactNode; href?: string; cta?: string };

const PILLARS: Pillar[] = [
  { Icon: FiUnlock, title: "MIT licensed", body: "Use it, fork it and change it. The whole app and CLI are under the MIT License.", href: `${REPO}/blob/main/LICENSE`, cta: "Read the license" },
  { Icon: FiEyeOff, title: "No account, no telemetry", body: "Watcher has no sign-in, no usage tracking and no subscription." },
  { Icon: SiGithub, title: "Source on GitHub", body: "Every line of the proxy, the TLS layer, the rules, the UI and the CLI is public.", href: REPO, cta: "Browse the repository" },
  { Icon: FiShield, title: "Signed and notarized", body: "Release DMGs are signed with a Developer ID and notarized by Apple.", href: RELEASES, cta: "See releases" },
  { Icon: SiSwift, title: "Native Swift", body: "Built with Swift and SwiftUI on Swift Package Manager, with a SwiftNIO proxy engine shared by the app and the CLI." },
  {
    Icon: FiCheckCircle,
    title: "Tested in depth",
    body: "Swift Testing suites cover unit, integration, end-to-end, snapshot, smoke and UI interaction tests. CI enforces coverage thresholds and also runs the snapshot and end-to-end suites.",
  },
  { Icon: FiGitPullRequest, title: "Contributions welcome", body: "Issues and pull requests are welcome. Every change starts with a failing test.", href: `${REPO}/blob/main/CONTRIBUTING.md`, cta: "Read CONTRIBUTING.md" },
  { Icon: FiLock, title: "Security policy", body: "Watcher decrypts traffic, so security reports matter. Report problems privately through GitHub security advisories.", href: `${REPO}/blob/main/SECURITY.md`, cta: "Read SECURITY.md" },
  { Icon: FiHeart, title: "Sponsor", body: "Watcher is free. If it saves you time, consider sponsoring its development.", href: SPONSOR, cta: "Sponsor on GitHub" },
];

function OpenSource() {
  return (
    <section id="open-source" className="scroll-mt-20 border-y border-border bg-bg-subtle px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Label tone="teal">Open source</Label>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Free, open and built in public.</h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            A debugging proxy sees your most sensitive traffic. With Watcher you can read every line that handles it.
          </p>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ Icon, title, body, href, cta }, i) => (
            <FadeItem key={title} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-2xl text-xl ${
                    i % 2 === 0 ? `bg-[#FF8A1F]/12 ${ORANGE_TEXT}` : `bg-[#17A9C4]/12 ${TEAL_TEXT}`
                  }`}
                >
                  <Icon aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-fg-muted">{body}</p>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex text-sm font-semibold underline-offset-2 hover:underline ${i % 2 === 0 ? ORANGE_TEXT : TEAL_TEXT}`}
                  >
                    {cta} →
                  </a>
                )}
              </div>
            </FadeItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1} className="mt-12 max-w-3xl">
          <h3 className="text-xl font-bold tracking-tight">Build from source</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">Needs Xcode 26 or later.</p>
          <div className="mt-4">
            <CodeBlock code={BUILD} label="build" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────── */

function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#1B1F2A] px-6 py-16 text-center text-white sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_70%_at_20%_0%,rgba(255,138,31,0.28),transparent_70%),radial-gradient(45%_70%_at_80%_100%,rgba(23,169,196,0.25),transparent_70%)]"
          />
          <div className="relative">
            <Image src="/watcher/icon.png" alt="" width={84} height={84} className="mx-auto h-[84px] w-[84px]" />
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">See what your app really sends.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
              Free, open source and native to the Mac. No account needed.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={RELEASES} target="_blank" rel="noopener noreferrer" className={`${PRIMARY_BTN} px-7 py-3.5 text-base`}>
                <FiDownload className="h-5 w-5" aria-hidden />
                Download Watcher
              </a>
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <SiGithub className="h-5 w-5" aria-hidden />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── footer ──────────────────────────────────────────────────── */

function WatcherFooter() {
  const links = [
    { label: "GitHub", href: REPO },
    { label: "Releases", href: `${REPO}/releases` },
    { label: "Changelog", href: `${REPO}/blob/main/CHANGELOG.md` },
    { label: "Contributing", href: `${REPO}/blob/main/CONTRIBUTING.md` },
    { label: "Security", href: `${REPO}/blob/main/SECURITY.md` },
    { label: "Sponsor", href: SPONSOR },
    { label: "License (MIT)", href: `${REPO}/blob/main/LICENSE` },
  ];
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/watcher/icon.png" alt="" width={28} height={28} className="h-7 w-7" />
          <span className="text-base font-bold tracking-tight">Watcher</span>
        </div>
        <nav aria-label="Watcher links" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted transition-colors hover:text-fg">
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-6xl space-y-4 border-t border-border pt-6">
        <p className="text-xs leading-relaxed text-fg-muted">
          Charles Proxy and Proxyman are trademarks of their respective owners. Watcher is an independent project and is
          not affiliated with them.
        </p>
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-fg-muted">MIT © Mustafa Kemal GÖKÇE</p>
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
            <FiArrowLeft className="h-4 w-4" aria-hidden />
            Back to all projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
