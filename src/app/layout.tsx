import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mkemalgokce.github.io"),
  title: {
    default: "Mustafa Kemal GÖKÇE | iOS Developer",
    template: "%s | Mustafa Kemal GÖKÇE",
  },
  description: "Mustafa Kemal GÖKÇE (Mustafa Kemal GOKCE) — iOS Developer, Swift, clean architecture, and mobile app craftsmanship.",
  keywords: [
    "Mustafa Kemal GÖKÇE",
    "Mustafa Kemal GOKCE",
    "MKG",
    "iOS Developer",
    "Swift",
    "Mobile Apps",
  ],
  authors: [{ name: "Mustafa Kemal GÖKÇE" }],
  creator: "Mustafa Kemal GÖKÇE",
  publisher: "Mustafa Kemal GÖKÇE",
  openGraph: {
    title: "Mustafa Kemal GÖKÇE | iOS Developer",
    description: "iOS Developer focusing on Swift and high-quality mobile experiences.",
    url: "https://mkemalgokce.github.io",
    siteName: "Mustafa Kemal GÖKÇE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Mustafa Kemal GÖKÇE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Kemal GÖKÇE | iOS Developer",
    description: "Swift-centric iOS Developer. Blog and portfolio.",
    images: ["/avatar.jpg"],
  },
  alternates: {
    canonical: "https://mkemalgokce.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
