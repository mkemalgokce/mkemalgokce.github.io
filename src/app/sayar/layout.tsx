import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sayar - Simple Expense Tracker",
  description: "Track your expenses effortlessly. Categorize, analyze, and take control of your spending.",
};

export default function SayarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
