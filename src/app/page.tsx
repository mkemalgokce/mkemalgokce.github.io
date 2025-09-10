import { getAllPosts } from "@/lib/markdown"
import ClientHome from "@/components/ClientHome"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Mustafa Kemal GÖKÇE - iOS Developer',
  description: 'Mustafa Kemal GÖKÇE (Mustafa Kemal GOKCE) — iOS Developer focused on Swift, clean architecture, and delightful mobile experiences.',
}

export default function HomePage() {
  const posts = getAllPosts()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mustafa Kemal GÖKÇE',
    alternateName: ['Mustafa Kemal GOKCE', 'MKG'],
    jobTitle: 'iOS Developer',
    url: 'https://mkemalgokce.github.io',
    sameAs: [
      'https://github.com/mkemalgokce',
      'https://www.linkedin.com/in/mkemalgokce',
    ],
    image: 'https://mkemalgokce.github.io/avatar.jpg',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent'
    }
  }

  return (
    <>
      <Script id="ld-json-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClientHome posts={posts} />
    </>
  )
}
