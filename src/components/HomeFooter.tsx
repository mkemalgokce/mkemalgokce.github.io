'use client'

export default function HomeFooter() {
  return (
    <footer className="w-full py-8 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Mustafa Kemal Gökçe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 