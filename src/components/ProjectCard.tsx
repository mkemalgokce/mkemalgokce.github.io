"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar, FiTerminal, FiTool, FiPackage } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { SiSwift } from "react-icons/si";
import type { IconType } from "react-icons";
import type { Project, ProjectAccent, ProjectCategory } from "@/lib/projects";

const accentMap: Record<ProjectAccent, { chip: string; glow: string }> = {
  blue: { chip: "bg-blue-500/12 text-blue-600 dark:text-blue-400", glow: "bg-blue-500/20" },
  violet: { chip: "bg-violet-500/12 text-violet-600 dark:text-violet-400", glow: "bg-violet-500/20" },
  emerald: { chip: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400", glow: "bg-emerald-500/20" },
  amber: { chip: "bg-amber-500/12 text-amber-600 dark:text-amber-400", glow: "bg-amber-500/20" },
  rose: { chip: "bg-rose-500/12 text-rose-600 dark:text-rose-400", glow: "bg-rose-500/20" },
  sky: { chip: "bg-sky-500/12 text-sky-600 dark:text-sky-400", glow: "bg-sky-500/20" },
};

const categoryIcon: Record<ProjectCategory, IconType> = {
  "iOS App": FaApple,
  "Developer Tool": FiTool,
  "CLI Tool": FiTerminal,
  "Open-Source Library": FiPackage,
  "SwiftUI Library": SiSwift,
};

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const accent = accentMap[project.accent];
  const Icon = categoryIcon[project.category];
  const internal = project.href.startsWith("/");

  const body = (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative h-full overflow-hidden rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-lift sm:p-7 ${className}`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`}
      />
      <div className="relative flex items-center justify-between">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${accent.chip}`}>
          <Icon aria-hidden />
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-fg-muted">{project.year}</span>
          <FiArrowUpRight className="h-5 w-5 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
        </div>
      </div>

      <div className="relative mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
          {project.category}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <h3 className="text-xl font-bold tracking-tight">{project.name}</h3>
          {typeof project.stars === "number" && project.stars > 0 && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-fg-muted">
              <FiStar className="h-3.5 w-3.5" aria-hidden /> {project.stars}
            </span>
          )}
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{project.description}</p>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-bg-subtle/70 px-2.5 py-0.5 text-xs font-medium text-fg-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (internal) {
    return (
      <Link href={project.href} aria-label={`${project.name} — ${project.tagline}`} className="block h-full">
        {body}
      </Link>
    );
  }
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} — ${project.tagline} (opens GitHub)`}
      className="block h-full"
    >
      {body}
    </a>
  );
}
