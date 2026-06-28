import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Aurora from "@/components/Aurora";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import ShareButtons from "@/components/ShareButtons";
import { formatDate } from "@/lib/date";
import { site } from "@/lib/site";
import "./syntax-light.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Aurora />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main id="main" className="flex-1">
            <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
              <h1 className="text-2xl font-bold">Post not found</h1>
              <Link href="/blog" className="mt-4 inline-block font-medium text-accent-strong hover:underline">
                ← Back to the blog
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const postUrl = `${site.url}/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: site.name,
      alternateName: "Mustafa Kemal GOKCE",
      url: site.url,
    },
    mainEntityOfPage: postUrl,
    image: post.coverImage ? [post.coverImage] : undefined,
  };

  return (
    <>
      <Aurora />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to blog
          </Link>

          <header className="mt-6 border-b border-border pb-8">
            <h1 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <time className="text-sm font-medium text-fg-subtle" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </header>

          <div className="mt-8">
            <ArticleContent html={post.content} />
          </div>
        </article>
      </main>
      <Footer />
      </div>
    </>
  );
}
