import dynamic from "next/dynamic"
import React from "react"
import { EachLineCampaign } from "@/components/_StructureAnalysis/HowItWorks/snippets/EachLineCampaign"
import { CampaignData } from "@/components/_StructureAnalysis/HowItWorks/snippets/CampaignData"

interface ISnippets extends React.ComponentProps<"ul"> {}

const SectionNumber = dynamic(() => import("../About/SectionNumber").then(mod => mod.SectionNumber), { ssr: false })

export function Snippets({ className, ...rest }: ISnippets) {
  const _cn = ` ${className ?? ""}`

  return (
    <ul className={"grow text-neutral-600 [&_strong]:text-neutral-800 flex flex-col" + _cn} {...rest}>
      <EachLineCampaign />
      <CampaignData />
    </ul>
  )
}

interface ISnippetContainer extends React.ComponentProps<"div"> {
  children: React.ReactNode
  fontColor?: string | undefined
  width?: string | undefined
}

export function SnippetContainer({ children, fontColor, width, className, ...rest }: ISnippetContainer) {
  const _cn = ` ${className ?? ""}`

  return (
    <div
      className={
        "p-3 md:p-6 flex flex-col my-3 font-roboto grow text-black whitespace-nowrap rounded-xl border border-dashed border-neutral-500" +
        _cn
      }
      {...rest}
    >
      <div className="flex flex-col">{children}</div>
    </div>
  )
}

interface IProjectFeature extends React.ComponentProps<"li"> {
  children: React.ReactNode
  noGrow?: boolean | undefined
}

export function ProjectFeature({ children, className, noGrow, ...rest }: IProjectFeature) {
  const _cn = ` ${className ?? ""}`
  const $grow = ` ${noGrow ? "" : "grow"}`

  return (
    <li className={"pt-4 flex flex-col md:border-none" + _cn + $grow} {...rest}>
      {children}
    </li>
  )
}
