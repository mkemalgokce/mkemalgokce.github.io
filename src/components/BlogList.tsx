"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import type { Post } from "@/lib/markdown";
import PostCard from "@/components/PostCard";
import { Reveal, StaggerGroup, FadeItem } from "@/components/ui/motion";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">{children}</p>
  );
}

export default function BlogList({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const trimmed = query.trim();
  const isSearching = trimmed.length > 0;

  const filtered = useMemo(() => {
    const q = trimmed.toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q)
    );
  }, [posts, trimmed]);

  const count = filtered.length;
  const countLabel = isSearching
    ? `${count} ${count === 1 ? "result" : "results"}`
    : `${count} ${count === 1 ? "post" : "posts"}`;

  return (
    <>
      <section className="px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Writing</Eyebrow>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-fg-muted">
            Notes on iOS, Swift, testing, and building for Apple platforms.
          </p>
        </Reveal>
      </section>

      <section className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="w-full sm:max-w-md">
                <label htmlFor="blog-search" className="sr-only">
                  Search posts
                </label>
                <div className="glass flex h-12 items-center gap-2 rounded-full pl-4 pr-1.5 transition-shadow focus-within:ring-2 focus-within:ring-ring">
                  <FiSearch
                    aria-hidden
                    className="h-5 w-5 shrink-0 text-fg-subtle"
                  />
                  <input
                    id="blog-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search posts&hellip;"
                    autoComplete="off"
                    className="h-full w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-fg-subtle"
                  />
                  {isSearching && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-fg-subtle transition-colors hover:bg-bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <FiX className="h-4 w-4" aria-hidden />
                    </button>
                  )}
                </div>
              </div>
              <p
                aria-live="polite"
                className="text-sm font-medium text-fg-muted sm:text-right"
              >
                {countLabel}
              </p>
            </div>
          </Reveal>

          {count > 0 ? (
            <>
              <h2 className="sr-only">All posts</h2>
              <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <FadeItem key={post.slug} className="h-full">
                    <PostCard post={post} />
                  </FadeItem>
                ))}
              </StaggerGroup>
            </>
          ) : (
            <Reveal className="mt-10">
              <div className="glass flex flex-col items-center justify-center rounded-3xl px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-bg-subtle/70 text-fg-subtle">
                  <FiSearch className="h-6 w-6" aria-hidden />
                </div>
                {isSearching ? (
                  <>
                    <h2 className="mt-5 text-lg font-bold tracking-tight">
                      No posts match &ldquo;{trimmed}&rdquo;
                    </h2>
                    <p className="mt-2 max-w-sm text-[15px] text-fg-muted">
                      Try a different keyword, or clear the search to see everything.
                    </p>
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="glass-tint mt-6 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Clear search
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="mt-5 text-lg font-bold tracking-tight">
                      Nothing here yet
                    </h2>
                    <p className="mt-2 max-w-sm text-[15px] text-fg-muted">
                      New writing is on the way &mdash; check back soon.
                    </p>
                  </>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
