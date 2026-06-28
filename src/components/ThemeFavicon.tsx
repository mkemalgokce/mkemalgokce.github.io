"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * Swaps the favicon to match the resolved theme. Browser `media` queries on
 * <link rel="icon"> are unreliable (Chrome doesn't re-evaluate, Safari is weak),
 * so we drive it from JS off next-themes' resolvedTheme instead.
 */
export default function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    let link = document.querySelector<HTMLLinkElement>("link#app-favicon");
    if (!link) {
      link = document.createElement("link");
      link.id = "app-favicon";
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }
    link.href = resolvedTheme === "dark" ? "/favicon-dark.png" : "/favicon-light.png";
  }, [resolvedTheme]);

  return null;
}
