import { getAllPosts } from "@/lib/markdown"
import ClientHome from "@/components/ClientHome"
import { Metadata } from "next"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Mustafa Kemal GÖKÇE — iOS Developer" },
  description:
    "Mustafa Kemal GÖKÇE (Mustafa Kemal GOKCE) — iOS Developer focused on Swift, clean architecture, and delightful mobile experiences.",
  alternates: { canonical: site.url },
}

export default function HomePage() {
  const posts = getAllPosts()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mustafa Kemal GÖKÇE",
    alternateName: ["Mustafa Kemal GOKCE", "MKG"],
    jobTitle: "iOS Developer",
    description: site.bio,
    url: site.url,
    sameAs: [
      site.socials.github,
      site.socials.linkedin,
      site.socials.appStore,
    ],
    image: `${site.url}/avatar.jpg`,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    knowsAbout: [...site.skills],
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
