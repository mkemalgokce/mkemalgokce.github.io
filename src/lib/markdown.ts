import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function removeH1Headings(content: string): string {
  // Remove all # headings that match the title
  const lines = content.split('\n')
  const filteredLines = lines.filter(line => !line.trim().startsWith('# '))
  return filteredLines.join('\n').trim()
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      date: formatDate(data.date) || '',
      excerpt: data.excerpt || '',
      content,
    }
  })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Remove h1 headings before rendering markdown
    const cleanContent = removeH1Headings(content)

    return {
      slug,
      title: data.title,
      date: formatDate(data.date),
      excerpt: data.excerpt,
      content: md.render(cleanContent),
    }
  } catch {
    return null
  }
} 