import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <Badge className="px-3 py-1 text-sm" variant="secondary">
          About Me
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Liba Natur Brilian</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">Graphics Designer & Video Editor</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src="/placeholder.svg?height=600&width=600" alt="Liba Natur Brilian" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <p className="text-muted-foreground">
              I'm a passionate graphics designer and video editor based in Indonesia. With years of experience in
              multimedia and translation, I bring creativity and precision to every project I work on.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <p className="text-muted-foreground">
              I believe in creating visually compelling content that communicates effectively. Whether it's designing
              graphics or editing videos, I focus on delivering high-quality work that meets my clients' needs and
              exceeds their expectations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Languages</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Indonesian</span>
                <span>Fluent</span>
              </li>
              <li className="flex justify-between">
                <span>English</span>
                <span>Intermediate</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">My Journey</h2>
        <div className="relative border-l border-muted-foreground/20 pl-6 ml-6 space-y-12">
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-muted-foreground/20 bg-background"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Graphics Design & Translator Checker</h3>
              <p className="text-sm text-muted-foreground">Yuramedia Link | July 2021 - Present</p>
              <p className="text-muted-foreground">
                Working as a graphics designer for the unit group translation JP-ID at Yuramedia. My responsibilities
                include creating visual assets and checking translations for accuracy and cultural relevance.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-muted-foreground/20 bg-background"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Video Editor</h3>
              <p className="text-sm text-muted-foreground">Kediri Televisi | July 2017 - Present</p>
              <p className="text-muted-foreground">
                Creating engaging video content for YouTube and managing social media accounts. I handle the entire
                video production process, from editing raw footage to adding effects and ensuring the final product
                meets quality standards.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-muted-foreground/20 bg-background"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">CBM Academy</h3>
              <p className="text-sm text-muted-foreground">Broadcasting | 2017 - 2018</p>
              <p className="text-muted-foreground">
                Earned a diploma in Broadcasting, where I learned advanced techniques in video production, editing, and
                media management.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-muted-foreground/20 bg-background"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">SMKTI PELITA NUSANTARA</h3>
              <p className="text-sm text-muted-foreground">Multimedia | 2014 - 2017</p>
              <p className="text-muted-foreground">
                Studied Multimedia, where I built a strong foundation in design principles, digital art, and video
                production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
