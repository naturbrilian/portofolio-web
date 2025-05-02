import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

export default function BlogPostCard({ title, excerpt, date, image, slug }: BlogPostCardProps) {
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
        <div className="text-sm text-muted-foreground mb-2">{date}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/blog/${slug}`} className="text-sm font-medium underline underline-offset-4">
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}
