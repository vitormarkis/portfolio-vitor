"use client"

import { Hero } from "@/components/Hero"
import { BlogShowcase } from "@/components/BlogShowcase"
import { AboutMe } from "@/components/AboutMe"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { GoToTopButton } from "@/components/GoToTopButton"

export default function Home() {
  return (
    <main className="Spacing_floor space-y-section flex flex-col">
      <Hero />
      <AboutMe />
      <Projects />
      <BlogShowcase />
      <Contact />
      <GoToTopButton className="md:bottom-12" />
    </main>
  )
}
