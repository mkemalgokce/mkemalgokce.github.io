'use client'

import { SiSwift, SiXcode, SiFirebase, SiGithub, SiGit } from 'react-icons/si'
import { FaApple, FaCode, FaRocket, FaAppStoreIos } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { TbDeviceImac } from 'react-icons/tb'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import HomeFooter from '@/components/HomeFooter'

const skills = [
  { name: 'Swift', icon: SiSwift, level: 90 },
  { name: 'SwiftUI', icon: FaApple, level: 85 },
  { name: 'UIKit', icon: FaApple, level: 88 },
  { name: 'Xcode', icon: SiXcode, level: 85 },
  { name: 'Firebase', icon: SiFirebase, level: 80 },
]

const highlights = [
  {
    title: "iOS Development",
    icon: FaApple,
    description: "Building native iOS applications with Swift, SwiftUI, and UIKit"
  },
  {
    title: "Clean Architecture",
    icon: FaCode,
    description: "Implementing MVVM pattern and following clean code principles"
  },
  {
    title: "App Store Success",
    icon: FaRocket,
    description: "Experience in app submission and App Store optimization"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-shrink-0"
              >
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/avatar.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 text-center md:text-left"
              >
                <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  iOS Developer
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  I&apos;m passionate about creating elegant and user-friendly mobile applications.
                  With a strong foundation in Swift and SwiftUI, I focus on delivering high-quality apps
                  that provide great user experiences.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <motion.a
                    href="https://github.com/mustafakemalgordesli"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <SiGithub className="w-5 h-5 text-gray-700 dark:text-white" />
                  </motion.a>
                  <motion.a
                    href="mailto:mustafagordesli@icloud.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <HiMail className="w-5 h-5 text-gray-700 dark:text-white" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-ios-blue" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-ios-blue"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills & Tools */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Skills & Tools
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <SiSwift className="w-8 h-8 text-ios-blue mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Swift & SwiftUI</h3>
                  <p className="text-gray-600 dark:text-gray-300">Modern iOS development with Swift and SwiftUI</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <SiXcode className="w-8 h-8 text-ios-blue mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Xcode</h3>
                  <p className="text-gray-600 dark:text-gray-300">Advanced Xcode knowledge and debugging</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <SiFirebase className="w-8 h-8 text-ios-blue mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Firebase</h3>
                  <p className="text-gray-600 dark:text-gray-300">Backend integration and real-time features</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <SiGit className="w-8 h-8 text-ios-blue mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Version Control</h3>
                  <p className="text-gray-600 dark:text-gray-300">Git workflow and collaboration</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <TbDeviceImac className="w-8 h-8 text-ios-blue mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">UI/UX Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">iOS design patterns and user experience</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <FaAppStoreIos className="w-8 h-8 text-ios-blue mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">App Store</h3>
                  <p className="text-gray-600 dark:text-gray-300">App submission and optimization</p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Experience
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">iOS Developer</h3>
                    <span className="text-gray-500 dark:text-gray-400">2023 - Present</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Developing and maintaining iOS applications using Swift and SwiftUI. 
                    Working on features like real-time updates, push notifications, and complex UI animations.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Implemented clean architecture principles</li>
                    <li>Integrated Firebase services</li>
                    <li>Published multiple apps to the App Store</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Full Stack Developer</h3>
                    <span className="text-gray-500 dark:text-gray-400">2022 - 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Worked on web applications using modern technologies. Gained experience in both frontend and backend development.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Built responsive web applications</li>
                    <li>Developed RESTful APIs</li>
                    <li>Worked with various databases</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Freelance Developer</h3>
                    <span className="text-gray-500 dark:text-gray-400">2021 - 2022</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Worked on various freelance projects, focusing on mobile and web development. 
                    Gained experience in project management and client communication.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Developed custom solutions for clients</li>
                    <li>Managed project timelines and deliverables</li>
                    <li>Provided technical consultation</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Highlights Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                What I Do
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                      <highlight.icon className="w-6 h-6 text-ios-blue" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  )
} 