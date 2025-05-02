import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = {
    "video-editing-tips": {
      title: "5 Essential Tips for Better Video Editing",
      excerpt: "Learn the fundamental techniques that can elevate your video editing skills.",
      date: "May 15, 2023",
      author: "Liba Natur Brilian",
      image: "/placeholder.svg?height=600&width=1200",
      category: "Video Editing",
      content: `
        <p>Video editing is both an art and a science. It requires technical knowledge, creative vision, and a good understanding of storytelling. Whether you're just starting out or looking to improve your skills, these five essential tips will help you create more professional and engaging videos.</p>
        
        <h2>1. Plan Your Edit Before You Start</h2>
        
        <p>Before you even open your editing software, take some time to plan your edit. Watch all your footage, make notes of the best shots, and create a rough outline or storyboard of how you want your final video to flow. This preparation will save you time and help you create a more cohesive final product.</p>
        
        <h2>2. Use Keyboard Shortcuts</h2>
        
        <p>Learning keyboard shortcuts for your editing software can significantly speed up your workflow. Instead of navigating through menus and submenus, you can perform common actions with a quick key press. Most editing software has customizable shortcuts, so you can set them up in a way that makes sense to you.</p>
        
<h2>3. Pay Attention to Audio Quality</h2>
        
<p>Good audio is just as important as good video. Poor audio quality can ruin an otherwise excellent video. Make sure to clean up your audio by removing background noise, adjusting levels, and adding music or sound effects where appropriate. Remember to balance your audio levels so that dialogue is clear and music doesn't overpower it.</p>
        
<h2>4. Use Cuts and Transitions Purposefully</h2>
        
<p>Every cut and transition in your video should serve a purpose. Avoid using flashy transitions just because they look cool. Instead, choose transitions that match the tone of your video and help tell your story. Simple cuts often work best for most situations, while more elaborate transitions can be used to indicate changes in time or location.</p>
        
<h2>5. Color Grade Your Footage</h2>
        
<p>Color grading can transform the look and feel of your video. It helps create mood, establish consistency between different shots, and make your footage look more professional. Start with basic color correction to fix any exposure or white balance issues, then move on to creative color grading to achieve your desired aesthetic.</p>
        
<p>By implementing these five tips, you'll be well on your way to creating more professional and engaging videos. Remember that video editing is a skill that improves with practice, so don't be discouraged if your early attempts aren't perfect. Keep learning, experimenting, and refining your technique.</p>
      `,
    },
    "visual-storytelling": {
      title: "The Art of Visual Storytelling",
      excerpt: "How to create compelling visual narratives that engage your audience.",
      date: "April 22, 2023",
      author: "Liba Natur Brilian",
      image: "/placeholder.svg?height=600&width=1200",
      category: "Design",
      content: `
        <p>Visual storytelling is the art of using images, videos, graphics, and other visual elements to convey a narrative. It's a powerful way to communicate ideas, evoke emotions, and engage audiences across various media platforms. In today's visually-driven world, mastering this skill is essential for designers, marketers, filmmakers, and content creators.</p>
        
        <h2>Understanding Visual Storytelling</h2>
        
        <p>At its core, visual storytelling combines the principles of traditional storytelling with visual elements. It follows a narrative structure with a beginning, middle, and end, but relies primarily on visual cues rather than text to convey the story. Effective visual storytelling creates an emotional connection with the audience and leaves a lasting impression.</p>
        
        <h2>Key Elements of Visual Storytelling</h2>
        
        <p><strong>Composition:</strong> How elements are arranged within the frame can guide the viewer's eye and emphasize important aspects of the story. Techniques like the rule of thirds, leading lines, and framing can create more compelling compositions.</p>
        
        <p><strong>Color:</strong> Colors evoke specific emotions and can set the tone for your story. Warm colors like red and orange often convey energy and passion, while cool colors like blue and green can suggest calmness or melancholy.</p>
        
        <p><strong>Lighting:</strong> Lighting not only affects visibility but also creates mood and atmosphere. Harsh lighting can create drama and tension, while soft lighting often conveys warmth and comfort.</p>
        
        <p><strong>Perspective:</strong> The angle from which a story is viewed can significantly impact how it's perceived. A bird's-eye view might provide context and scale, while a close-up can create intimacy or highlight details.</p>
        
        <h2>Crafting Your Visual Narrative</h2>
        
        <p><strong>Know your audience:</strong> Understanding who you're creating for will help you choose visual elements that resonate with them.</p>
        
        <p><strong>Establish a clear message:</strong> Before you start creating, define what you want to communicate and the emotions you want to evoke.</p>
        
        <p><strong>Create a storyboard:</strong> Plan your visual narrative by sketching out key scenes or moments. This helps ensure a coherent flow and identifies any gaps in your story.</p>
        
        <p><strong>Be authentic:</strong> Authentic stories that reflect real experiences or emotions are more likely to connect with audiences.</p>
        
        <p><strong>Show, don't tell:</strong> Let your visuals do the talking. Avoid relying too heavily on text or dialogue to convey your message.</p>
        
        <h2>Conclusion</h2>
        
        <p>Visual storytelling is a powerful tool for communication in our increasingly visual world. By understanding its key elements and principles, you can create compelling narratives that engage, inform, and inspire your audience. Remember that effective visual storytelling is not just about creating beautiful images—it's about using those images to tell a meaningful story that resonates with viewers.</p>
      `,
    },
    "translation-challenges": {
      title: "Translation Challenges in Technical Content",
      excerpt: "Navigating the complexities of translating technical documentation and software.",
      date: "March 10, 2023",
      author: "Liba Natur Brilian",
      image: "/placeholder.svg?height=600&width=1200",
      category: "Translation",
      content: `
        <p>Translating technical content presents unique challenges that go beyond typical language translation. Whether it's software documentation, user manuals, or technical specifications, these materials require not only linguistic expertise but also technical knowledge and cultural awareness. In this article, we'll explore the main challenges of technical translation and strategies to overcome them.</p>
        
        <h2>The Complexity of Technical Terminology</h2>
        
        <p>Technical fields have their own specialized vocabulary that often doesn't have direct equivalents in other languages. New technologies frequently emerge before standardized translations are established, leaving translators to decide whether to create new terms, borrow from the source language, or use descriptive phrases.</p>
        
        <p>For example, when translating software terms from English to Indonesian, terms like "cloud computing" might be kept in English, translated literally as "komputasi awan," or described functionally as "sistem komputasi berbasis internet."</p>
        
        <h2>Balancing Accuracy and Readability</h2>
        
        <p>Technical translations must be precise and accurate while remaining readable and understandable to the target audience. This balance can be difficult to achieve, especially when the source material is complex or poorly written.</p>
        
        <p>Translators must often decide whether to maintain the structure and style of the original text or adapt it to better suit the conventions and expectations of the target language. This decision should be guided by the purpose of the translation and the needs of the end users.</p>
        
        <h2>Cultural and Contextual Considerations</h2>
        
        <p>Technical content often contains cultural references, examples, or assumptions that may not translate well to other cultures. Units of measurement, date formats, and even color associations can vary significantly between cultures.</p>
        
        <p>For instance, in software localization, not only must the text be translated, but user interfaces may need to be redesigned to accommodate different text lengths, reading directions, or cultural preferences.</p>
        
        <h2>Keeping Up with Technological Changes</h2>
        
        <p>Technology evolves rapidly, and translators must continuously update their knowledge and terminology. What was standard terminology a few years ago might be outdated today, and new terms emerge regularly.</p>
        
        <p>Successful technical translators invest time in staying current with industry developments, reading technical publications in both the source and target languages, and participating in professional communities.</p>
        
        <h2>Strategies for Effective Technical Translation</h2>
        
        <p><strong>Collaborate with subject matter experts:</strong> When translating highly specialized content, working with experts in the field can ensure technical accuracy.</p>
        
        <p><strong>Develop and maintain glossaries:</strong> Creating consistent terminology databases for specific clients or technical fields helps maintain consistency across documents and projects.</p>
        
        <p><strong>Understand the end user:</strong> Knowing who will be using the translated content helps make appropriate decisions about terminology, style, and level of detail.</p>
        
        <p><strong>Use translation memory tools:</strong> These tools store previously translated segments and suggest them when similar text appears, improving consistency and efficiency.</p>
        
        <h2>Conclusion</h2>
        
        <p>Technical translation requires a unique combination of linguistic skill, technical knowledge, and cultural awareness. By understanding the specific challenges of this specialized field and implementing effective strategies to address them, translators can produce high-quality technical content that accurately conveys information across language barriers.</p>
      `,
    },
  }

  return posts[slug as keyof typeof posts]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/blog" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Blog</span>
      </Link>

      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl font-bold md:text-4xl mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>

        <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="my-8" />

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium mb-2">Share this post</h3>
            <div className="flex gap-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Facebook
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </Link>
            </div>
          </div>
          <Link href="/blog" className="text-sm font-medium underline underline-offset-4">
            View all posts
          </Link>
        </div>
      </article>
    </div>
  )
}
