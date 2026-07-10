"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function SayarLinkFallbackPage() {
  const [linkedPath, setLinkedPath] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLinkedPath(params.get("path"));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-slate-900 antialiased selection:bg-blue-600/15">
      <div className="mx-auto flex max-w-md flex-col items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/25">
          S
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Open in Sayar
        </h1>
        <p className="text-slate-600">
          This link is meant to open in the Sayar app. If nothing happened, the
          app may not be installed on this device yet.
        </p>
        {linkedPath && (
          <p className="rounded-lg bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-500">
            {linkedPath}
          </p>
        )}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="https://apps.apple.com/us/app/sayar-budget-expenses/id6753993398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <FaApple aria-hidden />
            Get Sayar
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Back to site
            <FiArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
