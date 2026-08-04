import type { Metadata } from "next";

const TAKIDEFTERI_DESC =
  "Düğün, nişan ve kına takılarını kişi kişi kaydedin. Çeyrek, bilezik, ziynet ve nakit hediyeler güncel altın kuruyla değerlensin; kimin ne taktığı hep elinizin altında olsun.";

export const metadata: Metadata = {
  title: "Takı Defteri — Düğün takıları tek defterde",
  description: TAKIDEFTERI_DESC,
  keywords: [
    "takı defteri",
    "düğün takısı",
    "altın takip",
    "çeyrek altın",
    "nişan takısı",
    "ziynet",
    "hediye kaydı",
  ],
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mkemalgokce.github.io/takidefteri",
    siteName: "Takı Defteri",
    title: "Takı Defteri — Düğün takıları tek defterde",
    description: TAKIDEFTERI_DESC,
    images: [
      { url: "/takidefteri-icon.png", width: 256, height: 256, alt: "Takı Defteri uygulama simgesi" },
    ],
  },
  twitter: {
    card: "summary",
    title: "Takı Defteri — Düğün takıları tek defterde",
    description: TAKIDEFTERI_DESC,
    images: ["/takidefteri-icon.png"],
  },
};

// Apple feel: override the site's global JetBrains Mono with the system SF
// stack for the entire Takı Defteri section.
const APPLE_SANS =
  '-apple-system, "SF Pro Display", "SF Pro Text", system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default function TakiDefteriLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ fontFamily: APPLE_SANS }}>{children}</div>;
}
