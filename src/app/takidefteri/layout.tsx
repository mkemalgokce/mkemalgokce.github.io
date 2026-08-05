import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./screens.css";

// The app's display type is SF Pro Rounded. Apple devices get it from
// `ui-rounded`; everyone else falls back to Nunito, which carries the same
// friendly, round-terminal feel. See `.td-display` in globals.css.
const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const TITLE = "Takı Defteri — Halaya sen çık, hesabı defter tutsun";
const DESC =
  "Düğün, kına, nişan ve sünnette kim ne taktı, sen kime ne takacaksın — hepsi tek defterde. Takılar 24 ayar gram altına çevrilir, karşılık takibi yapılır. iPhone için, verilerin cihazında kalır.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "takı defteri",
    "düğün takı takibi",
    "altın takip uygulaması",
    "kına gecesi takı",
    "nişan takı defteri",
    "çeyrek altın hesaplama",
    "düğün hediye kaydı",
  ],
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mkemalgokce.github.io/takidefteri",
    siteName: "Takı Defteri",
    title: TITLE,
    description: DESC,
    images: [{ url: "/takidefteri/icon.png", width: 512, height: 512, alt: "Takı Defteri" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESC,
    images: ["/takidefteri/icon.png"],
  },
};

// Apple feel: override the site's global mono/Inter stack with the system SF
// stack for the whole Takı Defteri section, with Nunito available for display.
const APPLE_SANS =
  '-apple-system, "SF Pro Text", "SF Pro Display", var(--font-nunito), system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default function TakiDefteriLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={nunito.variable} style={{ fontFamily: APPLE_SANS }}>
      {children}
    </div>
  );
}
