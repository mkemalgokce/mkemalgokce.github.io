import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open in Sayar",
  description: "This link opens in the Sayar app for iOS.",
  robots: { index: false, follow: false },
};

export default function SayarLinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
