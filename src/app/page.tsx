import { getAllPosts } from "@/lib/markdown"
import ClientHome from "@/components/ClientHome"
import { Metadata } from "next"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Mustafa Kemal GÖKÇE — iOS Developer" },
  description:
    "Mustafa Kemal GÖKÇE (Mustafa Kemal GOKCE) — iOS Developer focused on Swift, clean architecture, and delightful mobile experiences.",
}

export default function HomePage() {
  const posts = getAllPosts()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mustafa Kemal GÖKÇE",
    alternateName: ["Mustafa Kemal GOKCE", "MKG"],
    jobTitle: "iOS Developer",
    url: site.url,
    sameAs: [site.socials.github, site.socials.linkedin],
    image: `${site.url}/avatar.jpg`,
    worksFor: { "@type": "Organization", name: "Pinsoft" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientHome posts={posts} />
    </>
  )
}
