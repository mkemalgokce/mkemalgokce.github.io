import { getPostBySlug, getAllPosts } from "@/lib/markdown"
import { Metadata } from "next"
import Header from "@/components/Header"
import HomeFooter from "@/components/HomeFooter"
import './syntax-light.css'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1117]">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Post Not Found
            </h1>
          </div>
        </main>
        <HomeFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1117]">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-50" />
                <time className="text-gray-600 dark:text-gray-400">
                  {post.date}
                </time>
              </div>
            </header>

            <div className="prose prose-gray dark:prose-invert prose-pre:p-4 max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </article>
      </main>
      <HomeFooter />
    </div>
  )
} 