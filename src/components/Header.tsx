'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
          >
            Mustafa Kemal GÖKÇE
          </Link>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors relative ${
                    pathname === href
                      ? 'text-ios-blue'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-ios-blue bottom-[-4px]"
                      initial={false}
                    />
                  )}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
} 