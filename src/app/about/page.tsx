'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { HiMail } from "react-icons/hi"
import { SiSwift, SiXcode, SiGit, SiDocker, SiCplusplus, SiPython } from "react-icons/si"
import { FaCode, FaRocket, FaMobileAlt, FaDatabase } from "react-icons/fa"
import Header from "@/components/Header"
import HomeFooter from "@/components/HomeFooter"

const skills = [
  { name: "Swift", icon: SiSwift, level: 90, color: "from-orange-500 to-red-500" },
  { name: "Xcode", icon: SiXcode, level: 85, color: "from-blue-500 to-indigo-500" },
  { name: "Git", icon: SiGit, level: 80, color: "from-purple-500 to-pink-500" },
  { name: "Docker", icon: SiDocker, level: 75, color: "from-cyan-500 to-blue-500" },
  { name: "C++", icon: SiCplusplus, level: 85, color: "from-green-500 to-emerald-500" },
  { name: "Python", icon: SiPython, level: 70, color: "from-yellow-500 to-orange-500" },
]

const iosSkills = [
  {
    title: "iOS Development",
    icon: FaMobileAlt,
    items: ["UIKit", "SwiftUI", "Core Data", "Core Animation", "Auto Layout", "Storyboard & XIB", "Programmatic UI"]
  },
  {
    title: "Architecture & Patterns",
    icon: FaCode,
    items: ["MVVM", "Clean Architecture", "Protocol-Oriented", "Dependency Injection", "Repository Pattern", "Singleton", "Observer"]
  },
  {
    title: "Development Tools",
    icon: FaRocket,
    items: ["Xcode", "Instruments", "CocoaPods", "SPM", "Fastlane", "Charles Proxy", "Git"]
  },
  {
    title: "Backend Integration",
    icon: FaDatabase,
    items: ["RESTful APIs", "JSON", "URLSession", "Alamofire", "WebSocket", "JWT", "OAuth"]
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
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800">
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
                  Mustafa Kemal Gökçe
                </h1>
                <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  iOS Developer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                As a passionate iOS Developer with 4-5 years of experience, I thrive on creating scalable and user-friendly applications. I&apos;m always eager to learn, enjoy discussing ideas, and value sharing knowledge with others. Collaboration and teamwork are at the core of my approach, and I&apos;m open to partnerships that drive innovation and impactful solutions.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <motion.a
                    href="https://github.com/mkemalgokce"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    <SiGithub className="w-5 h-5 text-gray-700 dark:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/mkemalgokce"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    <SiLinkedin className="w-5 h-5 text-gray-700 dark:text-white" />
                  </motion.a>
                  <motion.a
                    href="mailto:mkemalgokce10@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
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
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-ios-blue" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="h-1.5 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Work Experience
              </h2>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Pinsoft IT Solutions Consulting
                  </h3>
                  <p className="text-ios-blue mt-1">iOS Developer | 2024 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Develop and maintain iOS applications for various clients</li>
                    <li>• Work with Swift and other iOS frameworks to implement new features and fix bugs</li>
                    <li>• Collaborate with cross-functional teams to ensure high-quality code and user experiences</li>
                    <li>• Follow best practices such as Clean Code and Clean Architecture</li>
                    <li>• Participate in code reviews and mentoring junior developers</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Arvis Technology
                  </h3>
                  <p className="text-ios-blue mt-1">iOS Developer | 2021-2023</p>
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Developed iOS applications using Swift and iOS frameworks</li>
                    <li>• Contributed to the development of Face Recognition SDK</li>
                    <li>• Participated in the development of Online Banking SDK</li>
                    <li>• Worked on mobile solutions integrating various technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* iOS Development Skills */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                iOS Development Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {iosSkills.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center group-hover:bg-ios-blue transition-colors">
                        <category.icon className="w-6 h-6 text-ios-blue group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (index * 0.1) + (itemIndex * 0.05) }}
                          className="text-gray-600 dark:text-gray-300 text-sm"
                        >
                          • {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  )
} 