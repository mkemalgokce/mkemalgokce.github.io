'use client'

import { Post } from "@/lib/markdown"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { HiSearch } from "react-icons/hi"
import { formatDate } from "@/lib/date"

interface BlogListProps {
  posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-5">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Search and Count */}
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-gray-900 dark:text-white">
              <span className="font-medium">{posts.length}</span> posts published
            </div>
            <div className="relative flex-1 md:max-w-md">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <HiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-4">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors flex gap-4">
                  {post.coverImage && (
                    <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-ios-blue transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-2 my-1">
                      <div className="w-1 h-1 rounded-full bg-gray-50" />
                      <time className="text-gray-500 dark:text-gray-400 text-xs">
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
} 