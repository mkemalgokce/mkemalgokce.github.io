"use client";

import { SiLinkedin, SiX } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const base =
    "grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-fg-muted transition-colors hover:border-accent/40 hover:text-fg";

  return (
    <div className="flex items-center gap-2">
      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={shareOnLinkedIn}
        className={base}
        aria-label="Share on LinkedIn"
      >
        <SiLinkedin className="h-[18px] w-[18px]" aria-hidden />
      </motion.button>

      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={shareOnX}
        className={base}
        aria-label="Share on X"
      >
        <SiX className="h-[18px] w-[18px]" aria-hidden />
      </motion.button>

      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={copyToClipboard}
        className={base}
        aria-label="Copy link"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "check" : "link"}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {copied ? (
              <FiCheck className="h-[18px] w-[18px] text-emerald-500" aria-hidden />
            ) : (
              <HiLink className="h-[18px] w-[18px]" aria-hidden />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}
