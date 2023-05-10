"use client"
import React from "react"
import { CenteredContainer } from "@/components/CenteredContainer"
import { Snippets } from "./Snippets"
import { Header } from "./Header"

interface IHowItWorks extends React.ComponentProps<"section"> {}

export function HowItWorks({ className, ...rest }: IHowItWorks) {
  const _cn = ` ${className ?? ""}`

  return (
    <section className={"text-neutral-600 py-12" + _cn} {...rest}>
      <CenteredContainer className="px-6 mdx:px-12 flex flex-col h-[50rem]">
        <Header />
        <Snippets />
      </CenteredContainer>
    </section>
  )
}
