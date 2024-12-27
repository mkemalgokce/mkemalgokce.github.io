'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium ${
                isActive('/')
                  ? 'text-ios-blue'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium ${
                isActive('/blog')
                  ? 'text-ios-blue'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium ${
                isActive('/about')
                  ? 'text-ios-blue'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              About
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 