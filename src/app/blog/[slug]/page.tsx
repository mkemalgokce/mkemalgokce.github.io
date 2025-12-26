import { getPostBySlug, getAllPosts } from "@/lib/markdown"
import { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/Header"
import HomeFooter from "@/components/HomeFooter"
import './syntax-light.css'
import { formatDate } from "@/lib/date"
import ShareButtons from "@/components/ShareButtons"

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

  const url = `https://mkemalgokce.github.io/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
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

  const postUrl = `https://mkemalgokce.github.io/blog/${slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Mustafa Kemal GÖKÇE',
      alternateName: 'Mustafa Kemal GOKCE',
      url: 'https://mkemalgokce.github.io',
    },
    mainEntityOfPage: postUrl,
    image: post.coverImage ? [post.coverImage] : undefined,
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1117]">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Script id="ld-json-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-50" />
                  <time className="text-gray-600 dark:text-gray-400 text-sm">
                    {formatDate(post.date)}
                  </time>
                </div>
                <ShareButtons url={postUrl} title={post.title} />
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