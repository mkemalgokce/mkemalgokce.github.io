import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function BlogPostLayout({
  children
}: LayoutProps) {
  return children
} 