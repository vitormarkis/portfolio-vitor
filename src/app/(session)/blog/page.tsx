import { BlogPageSection } from "@/components/BlogPageSection"
import { BlogToolbar } from "@/components/BlogPageSection/BlogToolbar"
import { CenteredContainer } from "@/components/CenteredContainer"
import { GoToTopButton } from "@/components/GoToTopButton"
import React from "react"

export default function Blog() {
  return (
    <div>
      <CenteredContainer className="px-6 mdx:px-12 flex flex-col">
        <BlogPageSection />
        <BlogToolbar />
        <GoToTopButton visiblePosition={350} verticalOffset={68} />
      </CenteredContainer>
    </div>
  )
}
