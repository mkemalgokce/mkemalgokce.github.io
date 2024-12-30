'use client'

import { motion } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'
import Header from "@/components/Header"
import IOSHero from "@/components/IOSHero"
import HomeFooter from "@/components/HomeFooter"
import { Post } from '@/lib/markdown'
import { formatDate } from '@/lib/date'

interface ClientHomeProps {
  posts: Post[]
}

export default function ClientHome({ posts }: ClientHomeProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      <main className="flex-1">
        <IOSHero />
        
        {/* Recent Blog Posts */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Recent Posts</h2>
              <Link 
                href="/blog"
                className="text-ios-blue hover:opacity-80"
              >
                View all
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {posts.map((post) => (
                <motion.article 
                  key={post.slug} 
                  className="group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex gap-4">
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
                        <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-ios-blue transition-colors">
                          {post.title}
                        </h3>
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
        </section>

        {/* Contact */}
        <section className="w-full py-16 bg-gradient-to-b from-transparent via-ios-gray-100/50 to-transparent dark:via-ios-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">
                  You can reach me through these platforms to discuss iOS development, 
                  collaboration opportunities, or just to say hello!
                </p>
              </div>
              
              <div className="flex gap-8 pt-4">
                <motion.a
                  href="https://github.com/mkemalgokce"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center transition-all group"
                >
                  <SiGithub className="w-10 h-10 text-gray-900 dark:text-white group-hover:text-ios-blue transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mkemalgokce"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center transition-all group"
                >
                  <SiLinkedin className="w-10 h-10 text-gray-900 dark:text-white group-hover:text-ios-blue transition-colors" />
                </motion.a>
                <motion.a
                  href="mailto:mkemalgokce10@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center transition-all group"
                >
                  <HiMail className="w-10 h-10 text-gray-900 dark:text-white group-hover:text-ios-blue transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
} 