"use client"

import { Hero } from "@/components/Hero"
import { BlogShowcase } from "@/components/BlogShowcase"
import { Header } from "@/components/Header"
import { AboutMe } from "@/components/AboutMe"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <div className="root-height overflow-x-hidden scroll-thin overflow-y-scroll">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <AboutMe className="mt-24" />
        <Projects className="mt-24" />
        <BlogShowcase className="mt-24" />
        <Contact className="my-24" />
      </main>
    </div>
  )
}
