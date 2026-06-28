import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FauxCam — A camera for the iOS Simulator",
  description:
    "The iOS Simulator has no camera. FauxCam feeds a still image, a video, your Mac's webcam, or a QR code straight into AVFoundation — a macOS menu-bar app and a faux CLI. Nothing left behind.",
  alternates: { canonical: "https://mkemalgokce.github.io/fauxcam" },
  openGraph: {
    title: "FauxCam — A camera for the iOS Simulator",
    description:
      "Feed a still image, video, webcam, or QR code into apps running in the iOS Simulator. Menu-bar app + CLI.",
    url: "https://mkemalgokce.github.io/fauxcam",
    type: "website",
    images: [{ url: "/fauxcam/poster.png", width: 1080, height: 1080, alt: "FauxCam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FauxCam — A camera for the iOS Simulator",
    images: ["/fauxcam/poster.png"],
  },
};

export default function FauxCamLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#0b0b0c]">{children}</div>;
}
