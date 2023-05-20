import { BlogPageSection } from "@/components/BlogPageSection"
import { CenteredContainer } from "@/components/CenteredContainer"
import { useFeed } from "@/data/feed"
import React from "react"

export default function Blog() {
  return (
    <div>
      <CenteredContainer className="px-6 mdx:px-12 flex flex-col">
        <BlogPageSection />
      </CenteredContainer>
    </div>
  )
}
