"use client";

import { motion, useReducedMotion } from "framer-motion";

/** A scrap of confetti, same palette as the app's Celebration view. */
const CONFETTI = [
  { left: "6%", top: "12%", rot: -18, tone: "--td-pink" },
  { left: "18%", top: "62%", rot: 24, tone: "--td-mint" },
  { left: "31%", top: "8%", rot: 8, tone: "--td-gold" },
  { left: "44%", top: "76%", rot: -32, tone: "--td-tile-plum" },
  { left: "58%", top: "18%", rot: 14, tone: "--td-mint" },
  { left: "71%", top: "68%", rot: -10, tone: "--td-gold" },
  { left: "84%", top: "26%", rot: 30, tone: "--td-pink" },
  { left: "93%", top: "58%", rot: -22, tone: "--td-tile-blue" },
];

export function Confetti({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {CONFETTI.map((c, i) => (
        <motion.span
          key={i}
          className="absolute block h-3 w-[7px] rounded-[2px] border-2 border-[rgb(var(--td-outline))]"
          style={{
            left: c.left,
            top: c.top,
            backgroundColor: `rgb(var(${c.tone}))`,
            rotate: `${c.rot}deg`,
          }}
          animate={reduce ? undefined : { y: [0, -9, 0], rotate: [c.rot, c.rot + 12, c.rot] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/** A sticker that floats gently in place, like the app's wobbling coins. */
export function FloatSticker({
  src,
  className = "",
  delay = 0,
  rotate = 0,
}: {
  src: string;
  className?: string;
  delay?: number;
  rotate?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      width={220}
      height={220}
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ rotate: `${rotate}deg` }}
      animate={reduce ? undefined : { y: [0, -12, 0], rotate: [rotate, rotate + 6, rotate] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/** The app's speech bubble: sticker card with a rotated square tail. */
export function Bubble({
  children,
  className = "",
  tail = "left",
}: {
  children: React.ReactNode;
  className?: string;
  tail?: "left" | "right" | "none";
}) {
  return (
    <div
      className={`td-sticker relative rounded-[18px] bg-[rgb(var(--td-surface))] px-4 py-3 ${className}`}
    >
      {children}
      {tail !== "none" && (
        <span
          aria-hidden
          className={`absolute -bottom-[7px] h-3 w-3 rotate-45 border-b-2 border-r-2 border-[rgb(var(--td-outline))] bg-[rgb(var(--td-surface))] ${
            tail === "left" ? "left-7" : "right-7"
          }`}
        />
      )}
    </div>
  );
}
