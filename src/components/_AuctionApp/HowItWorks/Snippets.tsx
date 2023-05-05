import dynamic from "next/dynamic"
import React from "react"
import { PostDetails } from "../snippets/PostDetails"
import { MakeBid } from "../snippets/MakeBid"
import { PublishedEndsIn } from "../snippets/PublishedEndsIn"
import { BidsOnPost } from "../snippets/BidsOnPost"
import { Feed } from "../snippets/Feed"

interface ISnippets extends React.ComponentProps<"ul"> {}

const SectionNumber = dynamic(() => import("../About/SectionNumber").then(mod => mod.SectionNumber), { ssr: false })

export function Snippets({ className, ...rest }: ISnippets) {
  const _cn = ` ${className ?? ""}`

  return (
    <ul className={"text-neutral-600 [&_strong]:text-neutral-800 flex flex-col gap-[4.5rem]" + _cn} {...rest}>
      <div className="flex flex-col gap-[4.5rem] xl:flex-row">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col gap-6">
            <ProjectFeature noGrow>
              <div>
                <SectionNumber number={1} className="mr-2" />
                <span className="text-base">Cada post possui um prazo para ser encerrado, determinado pelo autor.</span>
              </div>
              <p className="my-3 text-xs text-neutral-400 py-2 px-4 rounded-full w-fit border-dashed border border-neutral-600 whitespace-nowrap">
                <PublishedEndsIn />
              </p>
            </ProjectFeature>
            <ProjectFeature className="hidden md:flex">
              <div>
                <SectionNumber number={3} className="mr-2" />
                <span className="text-base">
                  As pessoas poderão entrar na página do post, ver detalhes, ver descrição, ver preço, fazer perguntas,
                  e fazer <strong>lances</strong>.
                </span>
              </div>
              <SnippetContainer>
                <PostDetails />
              </SnippetContainer>
            </ProjectFeature>
          </div>
          <div className="flex gap-6">
            <ProjectFeature className="flex-1">
              <div>
                <SectionNumber number={2} className="mr-2" />
                <span className="text-base">
                  Enquanto ativo, seu post será mostrado em um feed similar ao do Facebook.
                </span>
              </div>
              <SnippetContainer>
                <Feed />
              </SnippetContainer>
            </ProjectFeature>
            <div className="hidden xl:flex flex-col basis-[340px] shrink-0 grow">
              <ProjectFeature className="hidden xl:flex" noGrow>
                <div>
                  <SectionNumber number={4} className="mr-2" />
                  <span className="text-base">
                    Um lance é um valor que a pessoa está disposta a pagar por seu produto, pode ser maior ou menor ao
                    valor original.
                  </span>
                </div>
                <SnippetContainer>
                  <MakeBid />
                </SnippetContainer>
              </ProjectFeature>
              <ProjectFeature className="hidden xl:flex" noGrow>
                <div>
                  <SectionNumber number={5} className="mr-2" />
                  <span className="text-base">
                    Agora que seu post possui vários lances, você pode escolher quem você deseja premiar como vencedor
                    do leilão.
                  </span>
                </div>
                <SnippetContainer>
                  <BidsOnPost />
                </SnippetContainer>
              </ProjectFeature>
            </div>
          </div>
        </div>
        <ProjectFeature className="md:hidden">
          <SectionNumber number={3} className="mr-2" />
          <span className="text-base">
            As pessoas poderão entrar na página do post, ver detalhes, ver descrição, ver preço, fazer perguntas, e
            fazer <strong>lances</strong>.
          </span>

          <SnippetContainer>
            <PostDetails />
          </SnippetContainer>
        </ProjectFeature>
      </div>
      <div className="flex gap-6">
        <ProjectFeature className="xl:hidden">
          <SectionNumber number={4} className="mr-2" />
          <span className="text-base">
            Um lance é um valor que a pessoa está disposta a pagar por seu produto, pode ser maior ou menor ao valor
            original.
          </span>

          <SnippetContainer>
            <MakeBid />
          </SnippetContainer>
        </ProjectFeature>
        <div className="hidden md:flex gap-6">
          <ProjectFeature className="hidden md:flex md:grow-[3] md:basis-0 xl:hidden">
            <div>
              <SectionNumber number={5} className="mr-2" />
              <span className="text-base">
                Agora que seu post possui vários lances, você pode escolher quem você deseja premiar como vencedor do
                leilão.
              </span>
            </div>
            <SnippetContainer>
              <BidsOnPost />
            </SnippetContainer>
          </ProjectFeature>
          <ProjectFeature className="md:grow-[2] md:basis-0 mdx:flex hidden">
            <div>
              <SectionNumber number={6} className="mr-2" />
              <span className="text-base">
                Caso ninguém seja escolhido por você, ao final do prazo do post, o lance com maior valor é escolhido
                como vencedor do leilão.
              </span>
            </div>
          </ProjectFeature>
        </div>
      </div>
      <ProjectFeature className="md:hidden">
        <div>
          <SectionNumber number={5} className="mr-2" />
          <span className="text-base">
            Agora que seu post possui vários lances, você pode escolher quem você deseja premiar como vencedor do
            leilão.
          </span>
        </div>
        <SnippetContainer>
          <BidsOnPost />
        </SnippetContainer>
      </ProjectFeature>
      <ProjectFeature className="mdx:hidden ola">
        <div>
          <SectionNumber number={6} className="mr-2" />
          <span className="text-base">
            Caso ninguém seja escolhido por você, ao final do prazo do post, o lance com maior valor é escolhido como
            vencedor do leilão.
          </span>
        </div>
      </ProjectFeature>
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
