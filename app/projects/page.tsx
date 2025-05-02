import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity design for a local business",
      image: "/placeholder.svg?height=300&width=400",
      category: "Graphic Design",
      slug: "brand-identity-design",
    },
    {
      title: "Corporate Video",
      description: "Promotional video for a tech startup",
      image: "/placeholder.svg?height=300&width=400",
      category: "Video Editing",
      slug: "corporate-video",
    },
    {
      title: "App Localization",
      description: "EN to ID translation for a mobile application",
      image: "/placeholder.svg?height=300&width=400",
      category: "Translation",
      slug: "app-localization",
    },
    {
      title: "Social Media Campaign",
      description: "Series of graphics for a marketing campaign",
      image: "/placeholder.svg?height=300&width=400",
      category: "Graphic Design",
      slug: "social-media-campaign",
    },
    {
      title: "Event Highlight Video",
      description: "Recap video for a corporate event",
      image: "/placeholder.svg?height=300&width=400",
      category: "Video Editing",
      slug: "event-highlight-video",
    },
    {
      title: "Website Localization",
      description: "Translation of website content from English to Indonesian",
      image: "/placeholder.svg?height=300&width=400",
      category: "Translation",
      slug: "website-localization",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <Badge className="px-3 py-1 text-sm" variant="secondary">
          Projects
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Work</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          A showcase of my design, video editing, and translation projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            category={project.category}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  )
}
