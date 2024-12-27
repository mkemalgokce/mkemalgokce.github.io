import { getPostBySlug, getAllPosts } from "@/lib/markdown"
import { Metadata } from "next"
import Header from "@/components/Header"
import HomeFooter from "@/components/HomeFooter"
import { PageProps } from "../../../../.next/types/app/layout"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-black">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
                Post Not Found
              </h1>
            </div>
          </div>
        </main>
        <HomeFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              <time className="text-gray-500 dark:text-gray-400">
                {post.date}
              </time>
            </header>
            <div 
              className="prose dark:prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <HomeFooter />
    </div>
  )
} 