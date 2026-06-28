"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

/** Shared easing — the Apple "soft landing" curve used across the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/**
 * Reveal a block with a soft fade-up. Animates on mount (not on scroll) so
 * content can never get stuck invisible if an IntersectionObserver callback
 * fails to fire — it always reaches its visible state once hydrated.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const Tag = motion[as] as React.ElementType;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/** Stagger container — children should use the `fadeUp` variant. Animates on mount. */
export function StaggerGroup({
  children,
  className,
  ...rest
}: HTMLMotionProps<"div"> & { className?: string }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      animate="show"
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function FadeItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
