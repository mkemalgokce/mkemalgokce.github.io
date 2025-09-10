'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { SiSwift, SiXcode, SiAppstore } from "react-icons/si"
import { FaApple } from "react-icons/fa"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  },
}

export default function IOSHero() {
  const techStack = [
    { icon: SiSwift, label: 'Swift' },
    { icon: SiXcode, label: 'Xcode' },
    { icon: FaApple, label: 'iOS' },
    { icon: SiAppstore, label: 'App Store' },
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-6">
                Mustafa Kemal GÖKÇE — iOS Developer
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                I design and build elegant iOS apps with Swift, clean architecture, and exceptional user experiences.
              </p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="inline-grid grid-cols-4 gap-6"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.label}
                  variants={item}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-ios-blue" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-white dark:bg-gray-800">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 