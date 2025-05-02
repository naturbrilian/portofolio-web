import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Graphic Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Corporate Video Thumbnail",
      category: "Video Editing",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "Graphic Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "App UI Translation",
      category: "Translation",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Event Highlight Video Still",
      category: "Video Editing",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Logo Design Collection",
      category: "Graphic Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Website Mockup",
      category: "Graphic Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Product Photography",
      category: "Photography",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Motion Graphics Sample",
      category: "Video Editing",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <Badge className="px-3 py-1 text-sm" variant="secondary">
          Gallery
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Work</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          A visual showcase of my design, video editing, and translation projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
