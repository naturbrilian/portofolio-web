import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  slug: string
}

export default function ProjectCard({ title, description, image, category, slug }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {category}
        </Badge>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/projects/${slug}`} className="text-sm font-medium underline underline-offset-4">
          View Project
        </Link>
      </CardFooter>
    </Card>
  )
}
