import type { Metadata } from "next";

const TITLE = "Watcher: free HTTP and HTTPS debugging proxy for macOS";
const DESC =
  "Capture, decrypt, inspect, mock and modify network traffic from your Mac, iOS Simulators, iPhones, iPads and Android devices. A native, open-source (MIT) macOS proxy with a CLI and an MCP server. No account, telemetry or subscription.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/watcher" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://mkemalgokce.github.io/watcher",
    type: "website",
    images: [{ url: "/watcher/poster.png", width: 1920, height: 1080, alt: "Watcher, an HTTP and HTTPS debugging proxy for macOS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/watcher/poster.png"],
  },
};

export default function WatcherLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-bg">{children}</div>;
}
