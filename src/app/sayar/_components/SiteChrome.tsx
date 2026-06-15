import Link from "next/link";
import { FaApple } from "react-icons/fa";

export const SAYAR_EMAIL = "mkemaldev@gmail.com";

export function SayarLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, small logo asset
    <img
      src="/sayar-icon.png"
      alt="Sayar app icon"
      className={`rounded-[22%] shadow-sm ring-1 ring-black/5 ${className}`}
    />
  );
}

export function SayarNav({ active }: { active?: "privacy" | "terms" }) {
  const base = "text-sm font-medium transition-colors";
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/sayar" className="flex items-center gap-2.5">
          <SayarLogo />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Sayar</span>
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          <Link
            href="/sayar/privacy"
            className={`${base} ${active === "privacy" ? "text-slate-900" : "text-slate-500 hover:text-slate-900"} hidden sm:block`}
          >
            Privacy
          </Link>
          <Link
            href="/sayar/terms"
            className={`${base} ${active === "terms" ? "text-slate-900" : "text-slate-500 hover:text-slate-900"} hidden sm:block`}
          >
            Terms
          </Link>
          <a
            href="https://apps.apple.com/app/sayar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <FaApple className="h-4 w-4" aria-hidden />
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SayarFooter() {
  return (
    <footer className="border-t border-slate-200 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <SayarLogo />
            <div>
              <p className="font-semibold leading-tight text-slate-900">Sayar</p>
              <p className="text-sm text-slate-400">Track every expense with confidence</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            <Link
              href="/sayar/privacy"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sayar/terms"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Terms of Service
            </Link>
            <a
              href={`mailto:${SAYAR_EMAIL}`}
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2026 Sayar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
