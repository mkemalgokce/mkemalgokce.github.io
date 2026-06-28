"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return <div aria-hidden className="h-11 w-11 rounded-full" />;
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-11 w-11 place-items-center rounded-full text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {isDark ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
