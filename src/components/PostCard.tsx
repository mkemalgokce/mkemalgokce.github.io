"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { Post } from "@/lib/markdown";
import { formatDate } from "@/lib/date";

export default function PostCard({ post }: { post: Post }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-3xl glass transition-shadow duration-300 hover:shadow-lift"
      >
        {post.coverImage && (
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <time dateTime={post.date} className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
            {formatDate(post.date)}
          </time>
          <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent-strong">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-fg-muted">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-strong">
            Read article
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
