'use client'

import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

export default function IOSLayout({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <div className="min-h-screen flex flex-col bg-ios-gray-50 dark:bg-ios-gray-900">
      <Header />
      
      <main className="flex-1">
        <div className="relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-ios-gray-50 to-ios-gray-100 dark:from-ios-gray-900 dark:to-black -z-10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-2xl mx-auto">
              {title && (
                <motion.h1
                  className="text-3xl font-semibold mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {title}
                </motion.h1>
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 