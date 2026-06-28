import type { Metadata } from "next";

const SAYAR_DESC =
  "Type “-300 market” and it’s logged. Sayar turns plain words into clean income and expense records — with iCloud sync, exports, and smart insights. Private by design.";

export const metadata: Metadata = {
  title: "Sayar — Track every expense with confidence",
  description: SAYAR_DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/sayar" },
  openGraph: {
    type: "website",
    url: "https://mkemalgokce.github.io/sayar",
    siteName: "Sayar",
    title: "Sayar — Track every expense with confidence",
    description: SAYAR_DESC,
    images: [{ url: "/sayar-icon.png", width: 256, height: 256, alt: "Sayar app icon" }],
  },
  twitter: {
    card: "summary",
    title: "Sayar — Track every expense with confidence",
    description: SAYAR_DESC,
    images: ["/sayar-icon.png"],
  },
};

// Apple feel: override the site's global JetBrains Mono with the system SF
// stack for the entire Sayar section (renders SF Pro on Apple devices).
const APPLE_SANS =
  '-apple-system, "SF Pro Display", "SF Pro Text", system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default function SayarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ fontFamily: APPLE_SANS }}>{children}</div>;
}
