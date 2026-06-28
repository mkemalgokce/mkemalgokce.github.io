import { Metadata } from "next";
import Aurora from "@/components/Aurora";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutView from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mustafa Kemal GÖKÇE — an iOS Developer in Istanbul with 4+ years building Swift apps, clean architecture, and polished mobile experiences.",
  alternates: { canonical: "https://mkemalgokce.github.io/about" },
  openGraph: {
    title: "About | Mustafa Kemal GÖKÇE",
    description:
      "iOS Developer in Istanbul with 4+ years building Swift apps and clean architecture.",
    url: "https://mkemalgokce.github.io/about",
    type: "website",
    images: [{ url: "/avatar.jpg", width: 460, height: 460, alt: "Mustafa Kemal GÖKÇE" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <AboutView />
        </main>
        <Footer />
      </div>
    </>
  );
}
