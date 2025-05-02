import Link from "next/link"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Liba Natur Brilian</h3>
            <p className="text-sm text-muted-foreground">Graphics Designer & Video Editor based in Indonesia.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <Link href="mailto:liba.natur.brilian@gmail.com" className="hover:text-foreground">
                  liba.natur.brilian@gmail.com
                </Link>
              </li>
              <li className="text-muted-foreground">
                <span>Indonesia</span>
              </li>
              <li className="text-muted-foreground">
                <span>+62 896 8686 5736</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Follow Me</h3>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com/in/naturbrilian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/naturbrilian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/naturbrilian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Liba Natur Brilian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
