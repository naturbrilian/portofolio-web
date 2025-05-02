import { Badge } from "@/components/ui/badge"
import BlogPostCard from "@/components/blog-post-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This would typically come from a database or CMS
const getBlogPosts = (page: number) => {
  const allPosts = [
    // Page 1 posts
    [
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
    ],
    // Page 2 posts
    [
      {
        title: "Typography Basics for Designers",
        excerpt: "Understanding font selection and text layout for effective design.",
        date: "November 20, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "typography-basics",
      },
      {
        title: "Video Transitions That Tell a Story",
        excerpt: "How to use transitions to enhance your narrative and viewer engagement.",
        date: "October 15, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "video-transitions",
      },
      {
        title: "Common Translation Mistakes to Avoid",
        excerpt: "Pitfalls to watch out for when translating between English and Indonesian.",
        date: "September 30, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "translation-mistakes",
      },
      {
        title: "Creating Effective Logo Designs",
        excerpt: "Principles and practices for designing memorable and impactful logos.",
        date: "August 22, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "logo-design",
      },
      {
        title: "Audio Editing Tips for Video Creators",
        excerpt: "How to improve the sound quality of your video productions.",
        date: "July 18, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "audio-editing",
      },
      {
        title: "Localizing Content for Indonesian Audiences",
        excerpt: "Cultural considerations when adapting content for the Indonesian market.",
        date: "June 10, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "indonesian-localization",
      },
    ],
    // Page 3 posts
    [
      {
        title: "Principles of UI Design for Graphic Designers",
        excerpt: "How graphic design principles apply to user interface design.",
        date: "May 25, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "ui-design-principles",
      },
      {
        title: "Creating Engaging YouTube Thumbnails",
        excerpt: "Design tips to increase click-through rates on your video content.",
        date: "April 12, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "youtube-thumbnails",
      },
      {
        title: "Machine Translation vs. Human Translation",
        excerpt: "Comparing the benefits and limitations of different translation approaches.",
        date: "March 8, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "machine-vs-human-translation",
      },
      {
        title: "Color Grading for Video Editors",
        excerpt: "How to use color to set the mood and enhance your video projects.",
        date: "February 15, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "color-grading",
      },
      {
        title: "Creating Effective Social Media Graphics",
        excerpt: "Design principles for creating shareable and engaging social media content.",
        date: "January 20, 2022",
        image: "/placeholder.svg?height=300&width=400",
        slug: "social-media-graphics",
      },
      {
        title: "The Importance of Cultural Context in Translation",
        excerpt: "Why understanding cultural nuances is crucial for effective translation.",
        date: "December 10, 2021",
        image: "/placeholder.svg?height=300&width=400",
        slug: "cultural-context",
      },
    ],
  ]

  return allPosts[page - 1] || []
}

export default function BlogPaginatedPage({ params }: { params: { page: string } }) {
  const pageNumber = Number.parseInt(params.page)
  const posts = getBlogPosts(pageNumber)

  if (!posts.length) {
    return <div className="container mx-auto px-4 py-12">Page not found</div>
  }

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
          {pageNumber > 1 ? (
            <Link href={pageNumber === 2 ? "/blog" : `/blog/page/${pageNumber - 1}`}>
              <Button variant="outline">Previous</Button>
            </Link>
          ) : (
            <Button variant="outline" disabled>
              Previous
            </Button>
          )}

          <Link href="/blog">
            <Button
              variant="outline"
              className={pageNumber === 1 ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
            >
              1
            </Button>
          </Link>

          <Link href="/blog/page/2">
            <Button
              variant="outline"
              className={pageNumber === 2 ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
            >
              2
            </Button>
          </Link>

          <Link href="/blog/page/3">
            <Button
              variant="outline"
              className={pageNumber === 3 ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
            >
              3
            </Button>
          </Link>

          {pageNumber < 3 ? (
            <Link href={`/blog/page/${pageNumber + 1}`}>
              <Button variant="outline">Next</Button>
            </Link>
          ) : (
            <Button variant="outline" disabled>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
