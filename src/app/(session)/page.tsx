"use client"

import { JetBrains_Mono } from "next/font/google"
import { Hero } from "@/components/Hero"
import { BlogShowcase } from "@/components/BlogShowcase"
import { Header } from "@/components/Header"
import { AboutMe } from "@/components/AboutMe"

export default function Home() {
  return (
    <div className="root-height overflow-x-hidden scroll-thin overflow-y-scroll">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <AboutMe className="mt-24" />
        <BlogShowcase className="mt-24" />
      </main>
    </div>
  )
}
