'use client'

import { Post } from "@/lib/markdown"
import Header from "@/components/Header"
import HomeFooter from "@/components/HomeFooter"
import { useEffect } from 'react'

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  useEffect(() => {
    // Load Gists
    const loadGists = () => {
      const gistElements = document.querySelectorAll('.gist-embed')
      gistElements.forEach((element) => {
        const username = element.getAttribute('data-gist-username')
        const gistId = element.getAttribute('data-gist-id')
        
        if (username && gistId) {
          // Clear the element
          element.innerHTML = ''
          
          // Create and append script
          const script = document.createElement('script')
          script.src = `https://gist.github.com/${username}/${gistId}.js`
          element.appendChild(script)
        }
      })
    }

    // Add styles for Gists
    const style = document.createElement('style')
    style.textContent = `
      .gist-embed {
        margin: 2rem 0;
      }
      .gist .gist-file {
        border-radius: 0.75rem !important;
        border: 1px solid #d0d7de !important;
      }
      .dark .gist .highlight {
        background: #0d1117 !important;
      }
      .dark .gist .blob-code,
      .dark .gist .blob-code-inner {
        color: #c9d1d9 !important;
      }
      .dark .gist .blob-num {
        color: #6e7681 !important;
      }
      .dark .gist .gist-meta {
        background-color: #161b22 !important;
        color: #8b949e !important;
      }
      .dark .gist .gist-meta a {
        color: #58a6ff !important;
      }
    `
    document.head.appendChild(style)

    // Load Gists
    loadGists()

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1117]">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400" />
                <time className="text-gray-600 dark:text-gray-400">
                  {post.date}
                </time>
              </div>
            </header>

            <div className="prose prose-gray dark:prose-invert prose-pre:p-4 max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </article>
      </main>
      <HomeFooter />
    </div>
  )
} 