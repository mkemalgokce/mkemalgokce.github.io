"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub, SiSwift } from "react-icons/si";
import ProjectCard from "@/components/ProjectCard";
import { Reveal, StaggerGroup, FadeItem, EASE } from "@/components/ui/motion";
import { featuredProjects, moreProjects, workProjects } from "@/lib/projects";
import type { ProjectCategory } from "@/lib/projects";
import { site } from "@/lib/site";

type Filter = ProjectCategory | "All";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">{children}</p>
  );
}

export default function ProjectsView() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Filter>("All");

  const filters = useMemo<Filter[]>(
    () => ["All", ...Array.from(new Set(featuredProjects.map((p) => p.category)))],
    [],
  );

  const filtered = useMemo(
    () =>
      active === "All"
        ? featuredProjects
        : featuredProjects.filter((p) => p.category === active),
    [active],
  );

  const dur = reduce ? 0 : 0.3;

  return (
    <>
      {/* Hero */}
      <section className="px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Projects</Eyebrow>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Things I build
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            Enterprise iOS work, plus personal apps, developer tools, and open-source libraries
            &mdash; crafted with Swift and care.
          </p>
        </Reveal>
      </section>

      {/* Work — closed-source / enterprise */}
      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Work</Eyebrow>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Professional projects
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted">
              Enterprise iOS apps and SDKs shipped at Pinsoft, Arvis, and for freelance clients.
              Closed-source &mdash; the code stays with the client, but here&rsquo;s what I built.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workProjects.map((p) => (
              <FadeItem key={p.id} className="h-full">
                <ProjectCard project={p} />
              </FadeItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Featured + filter */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Personal</Eyebrow>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Personal projects
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted">
              Apps and tools I build on my own &mdash; most are open-source. Filter by what you&rsquo;re after.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-8">
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-2.5"
            >
              {filters.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(cat)}
                    className={`inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                      isActive
                        ? "bg-accent text-accent-fg shadow-soft"
                        : "glass text-fg-muted hover:text-fg"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <p className="sr-only" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            {active === "All" ? "" : ` in ${active}`}.
          </p>

          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: dur, ease: EASE, delay: reduce ? 0 : i * 0.04 }}
                  className="h-full"
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* More on GitHub */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Open source</Eyebrow>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              More on GitHub
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted">
              Experiments, katas, and sample apps &mdash; small things I built to learn and to sharpen the craft.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((p) => (
              <FadeItem key={p.name} className="h-full">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — ${p.description} (opens GitHub)`}
                  className="group flex h-full flex-col rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold tracking-tight">{p.name}</h3>
                    <FiArrowUpRight
                      className="h-5 w-5 shrink-0 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-subtle/70 px-2.5 py-1 text-xs font-medium text-fg-muted">
                      {p.language === "Swift" && (
                        <SiSwift className="h-3.5 w-3.5 text-orange-500" aria-hidden />
                      )}
                      {p.language}
                    </span>
                    <span className="text-xs font-medium text-fg-subtle">{p.year}</span>
                  </div>
                </a>
              </FadeItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-10 flex justify-center">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full glass-tint px-6 py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5"
            >
              <SiGithub className="h-5 w-5" aria-hidden />
              View all on GitHub
              <FiArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
