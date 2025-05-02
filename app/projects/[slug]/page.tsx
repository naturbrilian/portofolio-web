import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const getProjectData = (slug: string) => {
  const projects = {
    "brand-identity-design": {
      title: "Brand Identity Design",
      description: "Complete brand identity design for a local business",
      fullDescription:
        "This project involved creating a comprehensive brand identity for a local coffee shop. The work included designing a logo, color palette, typography, and various brand applications such as business cards, packaging, and signage. The goal was to create a cohesive and memorable brand that would resonate with the target audience and stand out in a competitive market.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Graphic Design",
      client: "Local Coffee Shop",
      date: "January 2023",
      services: ["Logo Design", "Brand Guidelines", "Packaging Design", "Marketing Materials"],
    },
    "corporate-video": {
      title: "Corporate Video",
      description: "Promotional video for a tech startup",
      fullDescription:
        "Created a promotional video for a tech startup that showcases their innovative product and company culture. The video was designed to be used on their website, social media channels, and at industry events. The project involved scriptwriting, storyboarding, filming, and post-production editing to create a polished and professional final product.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Video Editing",
      client: "Tech Startup",
      date: "March 2023",
      services: ["Storyboarding", "Video Shooting", "Post-production Editing", "Sound Design"],
    },
    "app-localization": {
      title: "App Localization",
      description: "EN to ID translation for a mobile application",
      fullDescription:
        "Provided comprehensive English to Indonesian translation services for a mobile application. The project involved translating the user interface, help documentation, and marketing materials. Special attention was paid to cultural nuances and technical terminology to ensure the translation was accurate and natural-sounding for Indonesian users.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Translation",
      client: "Mobile App Developer",
      date: "April 2023",
      services: ["UI Translation", "Documentation Translation", "Cultural Adaptation", "QA Testing"],
    },
    "social-media-campaign": {
      title: "Social Media Campaign",
      description: "Series of graphics for a marketing campaign",
      fullDescription:
        "Designed a series of graphics for a social media marketing campaign for a fashion brand. The project included creating visually cohesive posts for Instagram, Facebook, and Twitter that aligned with the brand's aesthetic while promoting their new seasonal collection. The campaign resulted in increased engagement and sales for the client.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Graphic Design",
      client: "Fashion Brand",
      date: "May 2023",
      services: ["Social Media Graphics", "Campaign Strategy", "Content Calendar", "Performance Analysis"],
    },
    "event-highlight-video": {
      title: "Event Highlight Video",
      description: "Recap video for a corporate event",
      fullDescription:
        "Created a highlight video for a corporate annual meeting that captured the key moments and atmosphere of the event. The video was used for internal communications and social media to showcase the company culture and achievements. The editing process involved selecting the best footage, adding music, graphics, and ensuring a compelling narrative flow.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Video Editing",
      client: "Corporate Client",
      date: "June 2023",
      services: ["Event Coverage", "Video Editing", "Motion Graphics", "Color Grading"],
    },
    "website-localization": {
      title: "Website Localization",
      description: "Translation of website content from English to Indonesian",
      fullDescription:
        "Provided comprehensive translation services for a corporate website from English to Indonesian. The project involved translating all website content, including product descriptions, company information, blog posts, and legal documents. Special attention was paid to SEO considerations and maintaining the brand voice in the target language.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Translation",
      client: "E-commerce Company",
      date: "July 2023",
      services: ["Website Content Translation", "SEO Optimization", "Cultural Adaptation", "QA Testing"],
    },
  }

  return projects[slug as keyof typeof projects]
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  if (!project) {
    return <div className="container mx-auto px-4 py-12">Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Projects</span>
      </Link>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <Badge variant="secondary">{project.category}</Badge>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground">{project.fullDescription}</p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Client</h3>
              <p>{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
              <p>{project.date}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Services</h3>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, index) => (
                <Badge key={index} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-8">
        <h2 className="text-2xl font-bold">Project Gallery</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=300&width=400" alt="Project image 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=300&width=400" alt="Project image 2" fill className="object-cover" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=300&width=400" alt="Project image 3" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Interested in working together?</h2>
        <Link href="/contact">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </div>
  )
}
