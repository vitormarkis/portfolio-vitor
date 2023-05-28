"use client"

import { Hero } from "@/components/Hero"
import { BlogShowcase } from "@/components/BlogShowcase"
import { AboutMe } from "@/components/AboutMe"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { GoToTopButton } from "@/components/GoToTopButton"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutMe className="mt-24" />
      <Projects className="mt-24" />
      <BlogShowcase className="mt-24" />
      <Contact className="my-24" />
      <GoToTopButton className="md:bottom-12" />
    </main>
  )
}
