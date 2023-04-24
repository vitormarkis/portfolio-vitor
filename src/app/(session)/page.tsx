"use client"

import { JetBrains_Mono } from "next/font/google"
import { Hero } from "@/components/Hero"
import { BlogShowcase } from "@/components/BlogShowcase"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <div className="root-height overflow-x-hidden scroll-thin overflow-y-scroll">
      <Header />
      <main className="max-w-7xl w-full mx-auto flex px-6 flex-col">
        <Hero />
        <BlogShowcase className="mt-24" />
      </main>
    </div>
  )
}
