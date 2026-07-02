"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DEEP_LINK_PREFIX = "/link/sayar";

export default function NotFound() {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith(`${DEEP_LINK_PREFIX}/`)) {
      setRedirecting(true);
      window.location.replace(
        `${DEEP_LINK_PREFIX}?path=${encodeURIComponent(path)}`
      );
    }
  }, []);

  if (redirecting) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg text-fg">
        <p className="text-fg-muted">Opening…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center text-fg">
      <p className="text-6xl font-bold tracking-tight">404</p>
      <p className="text-fg-muted">
        This page doesn&apos;t exist — it may have moved or never was.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
