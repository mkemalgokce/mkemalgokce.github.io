'use client'

export default function HomeFooter() {
  return (
    <footer className="mt-auto py-8 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MKG
          </div>
        </div>
      </div>
    </footer>
  )
} 