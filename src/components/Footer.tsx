'use client'

import { SiGithub, SiLinkedin, SiAppstore } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-ios-gray-200 dark:border-ios-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/mkemalgokce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue dark:hover:text-ios-blue transition-colors"
              >
                <SiGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/mkemalgokce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue dark:hover:text-ios-blue transition-colors"
              >
                <SiLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://apps.apple.com/developer/yourid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue dark:hover:text-ios-blue transition-colors"
              >
                <SiAppstore className="w-6 h-6" />
              </motion.a>
            </div>
            <p className="text-sm text-ios-gray-500 dark:text-ios-gray-400">
              © {new Date().getFullYear()} MKG. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 