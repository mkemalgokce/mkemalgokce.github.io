import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content/posts')

function extractFirstImage(content: string): string | null {
  const imageRegex = /!\[.*?\]\((.*?)\)/
  const match = content.match(imageRegex)
  return match ? match[1] : null
}

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage: string | null
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const post = getPostBySlug(slug)
      return post
    })
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return allPosts
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .processSync(content)
      .toString()

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content: processedContent,
      coverImage: data.coverImage || extractFirstImage(content)
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
} 