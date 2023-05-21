import { BlogPageSection } from "@/components/BlogPageSection"
import { BlogToolbar } from "@/components/BlogPageSection/BlogToolbar"
import { CenteredContainer } from "@/components/CenteredContainer"
import React from "react"

export default function Blog() {
  return (
    <div>
      <CenteredContainer className="px-6 mdx:px-12 flex flex-col">
        <BlogPageSection />
        <BlogToolbar />
      </CenteredContainer>
    </div>
  )
}
