"use client"

import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import dynamic from "next/dynamic"
import { Footer } from "@/components/portfolio/footer"

// Below-the-fold sections are split into separate chunks to keep first load light
const ProjectsSection = dynamic(() =>
  import("@/components/portfolio/projects-section").then((m) => m.ProjectsSection),
)
const WebShowcase = dynamic(() =>
  import("@/components/portfolio/web-showcase").then((m) => m.WebShowcase),
)
const ContactSection = dynamic(() =>
  import("@/components/portfolio/contact-section").then((m) => m.ContactSection),
)

export default function PortfolioPage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WebShowcase />
      <ContactSection />
      <Footer />
    </main>
  )
}
