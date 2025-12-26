import { getAllPosts } from "@/lib/markdown"
import { Metadata } from "next"
import Header from "@/components/Header"
import HomeFooter from "@/components/HomeFooter"
import BlogList from "@/components/BlogList"

export const metadata: Metadata = {
  title: 'Blog - iOS Development',
  description: 'Articles about iOS development, Swift programming, and mobile app development.',
}

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12">
              Blog Posts
            </h1>

            <BlogList posts={posts} />
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  )
} 