"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiDownload,
  FiTerminal,
  FiImage,
  FiCamera,
  FiMove,
  FiRotateCw,
  FiMaximize2,
  FiZap,
  FiArrowLeft,
  FiCopy,
  FiCheck,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import { MdQrCode2 } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { Reveal, StaggerGroup, FadeItem } from "@/components/ui/motion";

const REPO = "https://github.com/mkemalgokce/fauxcam";
const RELEASES = `${REPO}/releases`;
// Fallback DMG, pinned to a known-good v* (app) release. The repo ships two
// independent release tracks — v* (FauxCam.dmg) and cli-v* (faux binary) — so the
// plain /releases/latest redirect can resolve to a CLI release that has no DMG.
// useLatestAppDmg() resolves the real latest at runtime; this is the no-JS / API
// failure fallback and only needs bumping if v1.0.2 is ever deleted.
const APP_DMG_FALLBACK = `${REPO}/releases/download/v1.0.2/FauxCam.dmg`;

type GhAsset = { name: string; browser_download_url: string };
type GhRelease = { tag_name: string; draft: boolean; prerelease: boolean; assets: GhAsset[] };

// Resolves the FauxCam.dmg of the newest *app* release (tag `v…`, never `cli-v…`),
// falling back to the pinned DMG when the API is unreachable or rate-limited.
function useLatestAppDmg() {
  const [url, setUrl] = useState(APP_DMG_FALLBACK);
  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/repos/mkemalgokce/fauxcam/releases?per_page=30", {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => (r.ok ? (r.json() as Promise<GhRelease[]>) : Promise.reject(r.status)))
      .then((releases) => {
        const appRelease = releases.find(
          (rel) => !rel.draft && !rel.prerelease && /^v\d/.test(rel.tag_name),
        );
        const dmg = appRelease?.assets.find((a) => a.name.toLowerCase().endsWith(".dmg"));
        if (!cancelled && dmg) setUrl(dmg.browser_download_url);
      })
      .catch(() => {
        /* keep the pinned fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return url;
}

const AppDmgContext = createContext(APP_DMG_FALLBACK);
const useAppDmg = () => useContext(AppDmgContext);

/* ── shared bits ─────────────────────────────────────────────── */

function HudLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#FF5A1F] ${className}`}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 bg-[#FF5A1F]" />
      {children}
    </span>
  );
}

function Corners({ className = "" }: { className?: string }) {
  const c = "absolute h-5 w-5 border-[rgba(255,90,31,0.7)]";
  return (
    <span aria-hidden className={`pointer-events-none ${className}`}>
      <span className={`${c} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${c} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${c} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${c} bottom-0 right-0 border-b-2 border-r-2`} />
    </span>
  );
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e10]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="flex items-center gap-2 font-mono text-xs text-white/60">
          <FiTerminal className="h-3.5 w-3.5" aria-hidden />
          {label ?? "terminal"}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy command"}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? <FiCheck className="h-3.5 w-3.5 text-emerald-400" /> : <FiCopy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-white/85">
        <code>{code}</code>
      </pre>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}

/* ── page ────────────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FauxCam",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS 26",
  description:
    "A camera for the iOS Simulator. Feed a still image, a video, your Mac's webcam, or a QR code into apps running in the Simulator — a macOS menu-bar app plus a faux CLI.",
  url: "https://mkemalgokce.github.io/fauxcam",
  downloadUrl: "https://github.com/mkemalgokce/fauxcam/releases/download/v1.0.2/FauxCam.dmg",
  softwareVersion: "1.0.2",
  license: "https://github.com/mkemalgokce/fauxcam/blob/main/LICENSE",
  offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
  author: { "@type": "Person", name: "Mustafa Kemal GÖKÇE" },
};

export default function FauxCamPage() {
  const appDmg = useLatestAppDmg();
  return (
    <AppDmgContext.Provider value={appDmg}>
      <div className="min-h-screen bg-[#0b0b0c] text-white antialiased selection:bg-[rgba(255,90,31,0.3)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FauxNav />
        <main id="main" className="overflow-x-hidden">
          <Hero />
          <Problem />
          <Sources />
          <Viewfinder />
          <HowItWorks />
          <Install />
          <CTA />
        </main>
        <FauxFooter />
      </div>
    </AppDmgContext.Provider>
  );
}

/* ── nav ─────────────────────────────────────────────────────── */

function FauxNav() {
  const appDmg = useAppDmg();
  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(11,11,12,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/fauxcam/icon.png" alt="" width={30} height={30} className="h-[30px] w-[30px]" />
          <span className="text-lg font-bold tracking-tight">fauxcam</span>
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          <a href="#how" className="hidden text-sm font-medium text-white/60 transition-colors hover:text-white sm:block">
            How it works
          </a>
          <a href="#install" className="hidden text-sm font-medium text-white/60 transition-colors hover:text-white sm:block">
            Install
          </a>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FauxCam on GitHub"
            className="text-white/60 transition-colors hover:text-white"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href={appDmg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF5A1F] px-4 py-2 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
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
  const appDmg = useAppDmg();
  return (
    <section id="top" className="relative px-5 pb-16 pt-28 sm:px-6 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 mx-auto h-[420px] max-w-4xl bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,90,31,0.18),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <HudLabel>Real camera flows · No device</HudLabel>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl">
            A real camera for the{" "}
            <span className="text-[#FF5A1F]">iOS Simulator</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Feed a still image, a video file, your Mac&rsquo;s webcam, or a QR code straight into
            apps running in the Simulator — where Apple gives you nothing. A macOS menu-bar app and a{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">faux</code>{" "}
            CLI. Nothing left behind.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={appDmg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5A1F] px-7 py-3.5 text-base font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              <FiDownload className="h-5 w-5" aria-hidden />
              Download FauxCam.app
            </a>
            <a
              href="#install"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FiTerminal className="h-5 w-5" aria-hidden />
              Get the CLI
            </a>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-white/55">
            macOS 26 · Xcode 26 · MIT licensed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          <HeroMedia />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMedia() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  // When the user prefers reduced motion, don't autoplay — show the poster and let them start it.
  const [playing, setPlaying] = useState(!reduce);
  // Autoplay requires muted; users can unmute to hear the clip.
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (v.paused) v.play();
    setMuted(v.muted);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-2 shadow-[0_30px_90px_-25px_rgba(255,90,31,0.45)]">
      <video
        ref={videoRef}
        className="aspect-square w-full rounded-2xl object-cover"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/fauxcam/poster.png"
        aria-label="FauxCam demo — feeding a source into the iOS Simulator"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/fauxcam/promo.mp4" type="video/mp4" />
      </video>
      <Corners className="absolute inset-3" />
      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF5A1F]">
        <motion.span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF5A1F]"
          animate={reduce ? undefined : { opacity: [1, 0.25, 1] }}
          transition={reduce ? undefined : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        REC
      </span>
      <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
        WYSIWYG
      </span>
      <div className="absolute bottom-3 left-3 flex gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause demo video" : "Play demo video"}
          className="grid h-11 w-11 place-items-center rounded-full bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-black/75"
        >
          {playing ? <FiPause className="h-4 w-4" /> : <FiPlay className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute demo video" : "Mute demo video"}
          className="grid h-11 w-11 place-items-center rounded-full bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-black/75"
        >
          {muted ? <FiVolumeX className="h-4 w-4" /> : <FiVolume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

/* ── problem ─────────────────────────────────────────────────── */

function Problem() {
  return (
    <section className="border-y border-white/5 bg-[#0e0e10] px-5 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-4xl text-center">
        <HudLabel className="justify-center">The problem</HudLabel>
        <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          The iOS Simulator has <span className="text-[#FF5A1F]">no camera</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Any app that opens <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">AVCaptureSession</code>{" "}
          gets nothing. Scanning a QR code, capturing a photo, showing a live preview — none of it can
          be exercised without plugging in a physical device. FauxCam fills that gap.
        </p>
      </Reveal>
    </section>
  );
}

/* ── sources ─────────────────────────────────────────────────── */

const SOURCES = [
  { Icon: FiImage, title: "Media", body: "A still image or a video file, looped — drop in whatever your flow needs to see." },
  { Icon: FiCamera, title: "Camera", body: "Your Mac's webcam or Continuity Camera, mirrored live into the simulated app." },
  { Icon: MdQrCode2, title: "QR", body: "Encode any text or URL into a scannable QR code, rendered crisp for the scanner." },
];

function Sources() {
  return (
    <section className="px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <HudLabel>Pick a source</HudLabel>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three sources. One fake camera.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3">
          {SOURCES.map(({ Icon, title, body }) => (
            <FadeItem key={title} className="h-full">
              <div className="group relative h-full rounded-3xl border border-white/10 bg-[#141416] p-7 transition-colors hover:border-[rgba(255,90,31,0.4)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(255,90,31,0.12)] text-2xl text-[#FF5A1F] transition-transform duration-300 group-hover:scale-110">
                  <Icon aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/55">{body}</p>
              </div>
            </FadeItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ── viewfinder feature ──────────────────────────────────────── */

const GESTURES = [
  { Icon: FiMove, label: "Drag to pan" },
  { Icon: FiMaximize2, label: "Scroll or pinch to zoom" },
  { Icon: FiRotateCw, label: "Twist to rotate — snaps to right angles" },
];

function Viewfinder() {
  return (
    <section className="border-y border-white/5 bg-[#0e0e10] px-5 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <HudLabel>Viewfinder · WYSIWYG</HudLabel>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frame exactly what the simulator sees.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            The panel mirrors the exact frame each booted simulator receives. Compose it right on the
            viewfinder, switch the mirrored device from a glass picker, and flip portrait ⇄ landscape —
            the source re-renders to fit.
          </p>
          <ul className="mt-7 space-y-3">
            {GESTURES.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-[15px] text-white/75">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-[#FF5A1F]">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-2 shadow-[0_30px_90px_-25px_rgba(255,90,31,0.45)]">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/fauxcam/shot-qr.png"
                alt="FauxCam viewfinder mirroring a QR code into an iPad simulator scanning it"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <Corners className="absolute inset-3" />
            <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF5A1F]">
              ● Mirror · iPad
            </span>
            <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
              Locked
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── how it works ────────────────────────────────────────────── */

const STEPS = [
  {
    n: "01",
    title: "Inject",
    body: "libFaux.dylib loads into the simulated process at launch via DYLD_INSERT_LIBRARIES — booted simulators are injected automatically, including apps you run from Xcode.",
  },
  {
    n: "02",
    title: "Swizzle",
    body: "The dylib swizzles AVFoundation to vend a fake front/back capture device. Every swizzle falls through to the original on failure, so the host app never crashes.",
  },
  {
    n: "03",
    title: "Stream",
    body: "The host streams BGRA frames over an AF_UNIX socket. Stop, and the app is terminated and the dylib unloaded — nothing is installed in the app or device.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <HudLabel>Under the hood</HudLabel>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Inject, swizzle, stream.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3">
          {STEPS.map(({ n, title, body }) => (
            <FadeItem key={n} className="h-full">
              <div className="relative h-full rounded-3xl border border-white/10 bg-[#141416] p-7">
                <span className="font-mono text-sm font-bold text-[#FF5A1F]">{n}</span>
                <h3 className="mt-3 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/55">{body}</p>
              </div>
            </FadeItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1} className="mt-6">
          <p className="flex items-center gap-2 text-sm text-white/55">
            <FiZap className="h-4 w-4 text-[#FF5A1F]" aria-hidden />
            All &ldquo;Apple-fighting&rdquo; risk is isolated in the swizzles — the wire protocol has a single
            source of truth in a shared C header compiled by both host and guest.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── install ─────────────────────────────────────────────────── */

const CLI_INSTALL = `install -m 0755 faux /usr/local/bin/faux

# First run only: clear the quarantine attribute macOS adds to downloads.
xattr -d com.apple.quarantine /usr/local/bin/faux 2>/dev/null || true

faux list`;

const CLI_RUN = `faux run com.example.MyApp --source image:/path/to/photo.png
faux run com.example.MyApp --source video:/path/to/clip.mov
faux run com.example.MyApp --source webcam
faux run com.example.MyApp --source qr:https://example.com`;

function Install() {
  const [tab, setTab] = useState<"app" | "cli">("app");
  const appDmg = useAppDmg();
  return (
    <section id="install" className="scroll-mt-20 border-y border-white/5 bg-[#0e0e10] px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <HudLabel className="justify-center">Two independent downloads</HudLabel>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Install in a minute.
          </h2>
        </Reveal>

        <div aria-label="Install method" className="mx-auto mt-9 flex w-full max-w-xs gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          {(["app", "cli"] as const).map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tab === t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                tab === t ? "bg-[#FF5A1F] text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {t === "app" ? "Menu-bar app" : "faux CLI"}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "app" ? (
            <Reveal className="space-y-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-2 shadow-[0_30px_90px_-25px_rgba(255,90,31,0.45)]">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/fauxcam/shot-app.png"
                    alt="The FauxCam menu-bar app showing its viewfinder panel mirroring a simulator"
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                <Corners className="absolute inset-3" />
                <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF5A1F]">
                  ● Menu bar
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-white/60">
                Released from{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">v*</code>{" "}
                tags as a Developer-ID-signed, notarized{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">FauxCam.dmg</code>.
              </p>
              <ol className="space-y-3">
                {[
                  "Download FauxCam.dmg from the latest v* release.",
                  "Open the DMG and drag FauxCam.app to /Applications.",
                  "Launch it. FauxCam runs as a menu-bar background agent (LSUIElement) — no Dock icon, no main window. Click its menu-bar icon to open the viewfinder panel.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 rounded-2xl border border-white/10 bg-[#141416] p-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#FF5A1F] font-mono text-sm font-bold text-black">
                      {i + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-white/75">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-[13px] leading-relaxed text-white/45">
                Because the DMG is notarized and stapled, it opens with a normal double-click — no
                Gatekeeper workaround needed.
              </p>
              <a
                href={appDmg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5A1F] px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                <FiDownload className="h-4 w-4" aria-hidden />
                Download FauxCam.dmg
              </a>
            </Reveal>
          ) : (
            <Reveal className="space-y-4">
              <p className="text-[15px] leading-relaxed text-white/60">
                Released separately from{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">cli-v*</code>{" "}
                tags. Download the <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">faux</code> binary
                from the latest <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">cli-v*</code> release
                and install it on your <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">PATH</code>:
              </p>
              <CodeBlock code={CLI_INSTALL} label="install" />
              <p className="text-[13px] leading-relaxed text-white/45">
                If macOS still reports the binary as quarantined, re-run the{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">xattr -d com.apple.quarantine</code>{" "}
                line against <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">/usr/local/bin/faux</code>.
              </p>
              <p className="pt-2 text-[15px] leading-relaxed text-white/60">
                Serve frames and launch an app with the guest injected, in one command:
              </p>
              <CodeBlock code={CLI_RUN} label="faux run" />
              <p className="pt-2 text-[15px] leading-relaxed text-white/60">
                Also handy: <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">faux doctor</code> audits
                the guest dylib, and <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#FF8A5C]">faux apps</code> lists
                a simulator&rsquo;s installed bundle ids.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────── */

function CTA() {
  const appDmg = useAppDmg();
  return (
    <section className="px-5 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#FF5A1F] px-8 py-16 text-center text-black sm:px-16">
          <Corners className="absolute inset-5 [&>span]:border-black/40" />
          <span className="mx-auto grid h-[84px] w-[84px] place-items-center rounded-[1.35rem] bg-[#0b0b0c] shadow-[0_14px_40px_-12px_rgba(0,0,0,0.55)]">
            <Image src="/fauxcam/icon.png" alt="" width={52} height={52} className="h-[52px] w-[52px]" />
          </span>
          <p className="mt-6 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-black/60">
            <span aria-hidden className="inline-block h-1.5 w-1.5 bg-black/60" />
            Ready when you are
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
            Stop borrowing a real device.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-black/75">
            Point a camera at your simulator and test the flows you&rsquo;ve been skipping.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={appDmg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <FiDownload className="h-5 w-5" aria-hidden />
              Download FauxCam
            </a>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/25 px-7 py-3.5 text-base font-semibold text-black transition-colors hover:bg-black/10"
            >
              <SiGithub className="h-5 w-5" aria-hidden />
              View on GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── footer ──────────────────────────────────────────────────── */

function FauxFooter() {
  const links = [
    { label: "GitHub", href: REPO },
    { label: "Releases", href: RELEASES },
    { label: "Changelog", href: `${REPO}/blob/main/CHANGELOG.md` },
    { label: "License (MIT)", href: `${REPO}/blob/main/LICENSE` },
  ];
  return (
    <footer className="border-t border-white/5 px-5 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/fauxcam/icon.png" alt="" width={28} height={28} className="h-7 w-7" />
          <span className="text-base font-bold tracking-tight">fauxcam</span>
        </div>
        <nav aria-label="FauxCam links" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-white/55">MIT © Mustafa Kemal GÖKÇE</p>
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white">
          <FiArrowLeft className="h-4 w-4" aria-hidden />
          Back to all projects
        </Link>
      </div>
    </footer>
  );
}
