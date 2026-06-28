import { getAllPosts } from "@/lib/markdown";
import { Metadata } from "next";
import Aurora from "@/components/Aurora";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on iOS development, Swift, SwiftUI, testing, and mobile app craftsmanship by Mustafa Kemal GÖKÇE.",
  alternates: { canonical: "https://mkemalgokce.github.io/blog" },
  openGraph: {
    title: "Blog | Mustafa Kemal GÖKÇE",
    description:
      "Articles on iOS development, Swift, SwiftUI, and testing.",
    url: "https://mkemalgokce.github.io/blog",
    type: "website",
    images: [{ url: "/avatar.jpg", width: 460, height: 460, alt: "Mustafa Kemal GÖKÇE" }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <Aurora />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <BlogList posts={posts} />
        </main>
        <Footer />
      </div>
    </>
  );
}
