import type React from "react"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import { FaMedium } from 'react-icons/fa';

const ParticleBackground = dynamic(() => import("@/components/particle-background"), { ssr: false })
const HologramAvatar = dynamic(() => import("@/components/hologram-avatar"), { ssr: false })

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-white">
      <header className="p-4">{/* Add header content if needed */}</header>

      <main>
        <header className="absolute top-0 left-0 w-full p-4 z-20">
          <h1 className="text-2xl font-bold">Mehul Pratap Singh</h1>
          <p className="text-sm text-gray-300">AI Engineer | Python Developer | Generative AI</p>
        </header>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <ParticleBackground />

          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Engineering Intelligence at the Nexus of Language and Machines
                </h1>
                <p className="text-xl text-gray-300">Pushing the boundaries of AI to shape the future of technology</p>
                <Link href="/playground">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Explore My AI Playground →
                  </Button>
                </Link>
                <div className="flex space-x-4">
                  <SocialIcon href="https://github.com/mehulpratapsing" icon={<Github className="h-6 w-6" />} />
                  <SocialIcon href="https://www.linkedin.com/in/mehul-pratap-singh-3653481a1/" icon={<Linkedin className="h-6 w-6" />} />
                  <SocialIcon href="https://medium.com/@mehulpratapsingh" icon={<FaMedium className="h-6 w-6" />} />
                  <SocialIcon href="mailto:mehulpratapsingh@gmail.com" icon={<Mail className="h-6 w-6" />} />
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <HologramAvatar />
              </div>
            </div>
          </div>
        </section>

        {/* Add other sections here */}
        <a
          href="https://drive.google.com/file/d/1fEI1LiqRRkxY5gjTKdLZDM_KtTLGkrBM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20"
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Resume
          </Button>
        </a>

      </main>

      <footer className="p-4 text-center">{/* Add footer content */}</footer>
    </div>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
    >
      {icon}
    </Link>
  )
}

