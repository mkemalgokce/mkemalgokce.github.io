"use client";

import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import Aurora from "@/components/Aurora";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiquidHero from "@/components/LiquidHero";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";
import { Reveal, StaggerGroup, FadeItem } from "@/components/ui/motion";
import { featuredProjects, workProjects } from "@/lib/projects";
import { site } from "@/lib/site";
import type { Post } from "@/lib/markdown";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">{children}</p>
  );
}

export default function ClientHome({ posts }: { posts: Post[] }) {
  const recent = posts.slice(0, 3);

  return (
    <>
      <Aurora />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <LiquidHero />
          <FeaturedProjects />
          {recent.length > 0 && <RecentPosts posts={recent} />}
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

function FeaturedProjects() {
  const items = [...workProjects.slice(0, 2), ...featuredProjects.slice(0, 4)];
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Things I&rsquo;ve shipped &amp; built
            </h2>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-fg-muted">
              Enterprise iOS at Pinsoft &amp; Arvis, plus personal apps and open-source tools.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
          >
            All projects
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <FadeItem key={project.id} className="h-full">
              <ProjectCard project={project} />
            </FadeItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Writing</Eyebrow>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              From the blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
          >
            All posts
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <FadeItem key={post.slug} className="h-full">
              <PostCard post={post} />
            </FadeItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ContactCTA() {
  const links = [
    { label: "GitHub", href: site.socials.github, Icon: SiGithub, external: true },
    { label: "LinkedIn", href: site.socials.linkedin, Icon: SiLinkedin, external: true },
    { label: "Email", href: `mailto:${site.email}`, Icon: HiMail, external: false },
  ];
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.25rem] glass-strong px-8 py-14 text-center sm:px-16">
          <div aria-hidden className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl" />
          <h2 className="relative text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let&rsquo;s build something great
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-fg-muted">
            Open to iOS roles, freelance work, and good collaborations. Reach out — I reply.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full glass-tint px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <HiMail className="h-4 w-4" aria-hidden />
              Get in touch
            </a>
            {links
              .filter((l) => l.external)
              .map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card-muted text-fg-muted transition-colors hover:text-fg"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
