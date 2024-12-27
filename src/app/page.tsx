import { getAllPosts } from "@/lib/markdown"
import ClientHome from "@/components/ClientHome"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'MKG - iOS Developer',
  description: 'Personal blog and portfolio of an iOS Developer focusing on Swift and mobile app development.',
}

export default function HomePage() {
  const posts = getAllPosts()
  return <ClientHome posts={posts} />
}
