import { Metadata } from "next";
import Aurora from "@/components/Aurora";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsView from "@/components/ProjectsView";
import { featuredProjects, workProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "iOS apps, developer tools and open-source libraries built by Mustafa Kemal GÖKÇE — Swift, SwiftUI, and the Apple platforms.",
  alternates: { canonical: "https://mkemalgokce.github.io/projects" },
  openGraph: {
    title: "Projects | Mustafa Kemal GÖKÇE",
    description:
      "iOS apps, developer tools and open-source libraries built with Swift and SwiftUI.",
    url: "https://mkemalgokce.github.io/projects",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mustafa Kemal GÖKÇE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mustafa Kemal GÖKÇE",
    images: ["/og.png"],
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${site.url}/projects`,
    about: [...workProjects, ...featuredProjects].map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      applicationCategory: p.category,
      description: p.tagline,
      url: p.href
        ? p.href.startsWith("/")
          ? `${site.url}${p.href}`
          : p.href
        : `${site.url}/projects`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Aurora />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <ProjectsView />
        </main>
        <Footer />
      </div>
    </>
  );
}
