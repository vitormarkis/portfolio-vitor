import dynamic from "next/dynamic"
import React from "react"

interface ISnippets extends React.ComponentProps<"ul"> {}

const SectionNumber = dynamic(() => import("../About/SectionNumber").then(mod => mod.SectionNumber), { ssr: false })

export function Snippets({ className, ...rest }: ISnippets) {
  const _cn = ` ${className ?? ""}`

  return (
    <ul className={"text-neutral-600 [&_strong]:text-neutral-800 flex flex-col gap-[4.5rem]" + _cn} {...rest}>
      <div className="flex flex-col gap-[4.5rem] xl:flex-row">
        <ProjectFeature noGrow>
          <div>
            {/* <SectionNumber number={1} className="mr-2" /> */}
            <span className="text-base">
              Dentro da planilha, na página{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1lweqynj7onpKU7s9df2c8AaFMxAzWz12yZyfqWoLC9Q/edit#gid=0"
                target="_blank"
                className="text-blue-600 underline visited:text-blue-900"
              >
                Dados
              </a>
              , cada linha é uma campanha.
            </span>
          </div>
          <p className="my-3 text-xs text-neutral-400 py-2 px-4 rounded-full w-fit border-dashed border border-neutral-600 whitespace-nowrap">
            <span></span>
          </p>
        </ProjectFeature>
      </div>
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
