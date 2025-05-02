import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import SkillBar from "@/components/skill-bar"
import ProjectCard from "@/components/project-card"
import BlogPostCard from "@/components/blog-post-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Liba Natur Brilian</h1>
                <p className="text-xl text-muted-foreground">Graphics Designer & Video Editor</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
               An a Vector Maker, Designer, Translator & Motion Graphics. (EN/ID).
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="gap-1">
                    Contact Me <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline">View My Work</Button>
                </Link>
              </div>
              <div className="flex gap-4">
                <Link href="https://linkedin.com/in/naturbrilian" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com/naturbrilian" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://github.com/naturbrilian" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="mailto:liba.natur.brilian@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Avatar className="h-64 w-64 border-4 border-background shadow-xl">
                <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Liba Natur Brilian" />
                <AvatarFallback className="text-4xl">LNB</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                About Me
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who I Am</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               Hello i am Lieba Natur Brilian also people call me with Natur, im graphics designer, video editor and translator contributor for various services, apps and software.
               Im also like watching anime and multifandom. Also people know me as gingalibadeidara on another website like alphacoders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="skills">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                My Skills
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Do</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I specialize in graphics design, video editing, write a blog and translation services.
              </p>
            </div>
            <div className="w-full max-w-3xl space-y-4 mt-8">
              <SkillBar name="Adobe Photoshop" percentage={90} />
              <SkillBar name="Adobe Premiere" percentage={85} />
              <SkillBar name="Microsoft Word" percentage={95} />
              <SkillBar name="English-Indonesian Translation" percentage={90} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="experience">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Experience
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work History</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My professional journey in design, video editing, and translation.
              </p>
            </div>
            <div className="grid w-full max-w-4xl gap-6 mt-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-bold">Graphics Design & Translator Checker</h3>
                    <p className="text-sm text-muted-foreground">Yuramedia Link | July 2021 - Present</p>
                    <p className="text-muted-foreground">
                      Graphics Designer for unit group translation JP-ID Yuramedia, also as translator checker.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-bold">Video Editor</h3>
                    <p className="text-sm text-muted-foreground">Kediri Televisi | July 2017 - Present</p>
                    <p className="text-muted-foreground">
                      As a video editor for YouTube content, and also as a social media admin.
                    </p>
                  </div>
                </CardContent>
              </Card>
             <Card>
             <CardContent className="p-6">
               <div className="flex flex-col space-y-2">
                 <h3 className="text-xl font-bold">Video Editor and Graphics Designer</h3>
                 <p className="text-sm text-muted-foreground">The Java Post ID | Dec 2024 - Present</p>
                 <p className="text-muted-foreground">
                   As a Graphics Designer, Video Editor and Admin Website.
                  </p>
                </div>
              </CardContent>
            </Card> 
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="education">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Education
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Background</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My educational journey and qualifications.
              </p>
            </div>
            <div className="grid w-full max-w-4xl gap-6 mt-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-bold">CBM Academy</h3>
                    <p className="text-sm text-muted-foreground">Broadcasting | 2017 - 2018</p>
                    <p className="text-muted-foreground">Diploma</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-bold">SMKTI PELITA NUSANTARA</h3>
                    <p className="text-sm text-muted-foreground">Multimedia | 2014 - 2017</p>
                    <p className="text-muted-foreground">Student</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent projects and creative work.
              </p>
            </div>
            <div className="grid w-full max-w-5xl gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Brand Identity Design"
                description="Complete brand identity design for a local business"
                image="/placeholder.svg?height=300&width=400"
                category="Graphic Design"
                slug="brand-identity-design"
              />
              <ProjectCard
                title="Corporate Video"
                description="Promotional video for a tech startup"
                image="/placeholder.svg?height=300&width=400"
                category="Video Editing"
                slug="corporate-video"
              />
              <ProjectCard
                title="App Localization"
                description="EN to ID translation for a mobile application"
                image="/placeholder.svg?height=300&width=400"
                category="Translation"
                slug="app-localization"
              />
            </div>
            <div className="mt-8">
              <Link href="/projects">
                <Button>View All Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="blog">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Blog
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, tips, and stories from my professional journey.
              </p>
            </div>
            <div className="grid w-full max-w-5xl gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <BlogPostCard
                title="5 Essential Tips for Better Video Editing"
                excerpt="Learn the fundamental techniques that can elevate your video editing skills."
                date="May 15, 2023"
                image="/placeholder.svg?height=300&width=400"
                slug="video-editing-tips"
              />
              <BlogPostCard
                title="The Art of Visual Storytelling"
                excerpt="How to create compelling visual narratives that engage your audience."
                date="April 22, 2023"
                image="/placeholder.svg?height=300&width=400"
                slug="visual-storytelling"
              />
              <BlogPostCard
                title="Translation Challenges in Technical Content"
                excerpt="Navigating the complexities of translating technical documentation and software."
                date="March 10, 2023"
                image="/placeholder.svg?height=300&width=400"
                slug="translation-challenges"
              />
            </div>
            <div className="mt-8">
              <Link href="/blog">
                <Button>Read All Articles</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Get In Touch
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? I'd love to hear from you.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mt-4">
              <Link href="/contact">
                <Button className="w-full">Contact Me</Button>
              </Link>
              <p className="text-xs text-muted-foreground">
                Or email me directly at{" "}
                <Link href="mailto:liba.natur.brilian@gmail.com" className="underline underline-offset-2">
                  liba.natur.brilian@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
