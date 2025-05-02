import { Badge } from "@/components/ui/badge"
import BlogPostCard from "@/components/blog-post-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
  // Sample blog posts data
  const posts = [
    {
      title: "5 Essential Tips for Better Video Editing",
      excerpt: "Learn the fundamental techniques that can elevate your video editing skills.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=300&width=400",
      slug: "video-editing-tips",
    },
    {
      title: "The Art of Visual Storytelling",
      excerpt: "How to create compelling visual narratives that engage your audience.",
      date: "April 22, 2023",
      image: "/placeholder.svg?height=300&width=400",
      slug: "visual-storytelling",
    },
    {
      title: "Translation Challenges in Technical Content",
      excerpt: "Navigating the complexities of translating technical documentation and software.",
      date: "March 10, 2023",
      image: "/placeholder.svg?height=300&width=400",
      slug: "translation-challenges",
    },
    {
      title: "Color Theory for Graphic Designers",
      excerpt: "Understanding how colors work together to create effective designs.",
      date: "February 28, 2023",
      image: "/placeholder.svg?height=300&width=400",
      slug: "color-theory",
    },
    {
      title: "Optimizing Video Content for Social Media",
      excerpt: "Tips and tricks for creating videos that perform well on different platforms.",
      date: "January 15, 2023",
      image: "/placeholder.svg?height=300&width=400",
      slug: "video-for-social-media",
    },
    {
      title: "Cultural Considerations in Translation",
      excerpt: "Why cultural context matters when translating content between languages.",
      date: "December 5, 2022",
      image: "/placeholder.svg?height=300&width=400",
      slug: "cultural-translation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <Badge className="px-3 py-1 text-sm" variant="secondary">
          Blog
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Articles</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Insights, tips, and stories from my professional journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </Button>
          <Link href="/blog/page/2">
            <Button variant="outline">2</Button>
          </Link>
          <Link href="/blog/page/3">
            <Button variant="outline">3</Button>
          </Link>
          <Link href="/blog/page/2">
            <Button variant="outline">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
