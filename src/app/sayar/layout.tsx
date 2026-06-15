import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sayar — Track every expense with confidence",
  description:
    "Type “-300 market” and it’s logged. Sayar turns plain words into clean income and expense records — with iCloud sync, exports, and smart insights. Private by design.",
};

export default function SayarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
