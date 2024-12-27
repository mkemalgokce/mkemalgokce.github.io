'use client'

import { Post } from "@/lib/markdown"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { HiSearch } from "react-icons/hi"

interface BlogListProps {
  posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {posts.length} published posts
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-11 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-ios-blue"
          />
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
        </div>
      </div>

      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <motion.article 
            key={post.slug}
            className="group"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-ios-blue transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 my-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                  <time className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.date}
                  </time>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
} 