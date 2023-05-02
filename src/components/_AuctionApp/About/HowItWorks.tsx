"use client"
import React, { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { animateUnderline } from "../animations"
import { PublishedEndsIn } from "../snippets/PublishedEndsIn"
import { Feed } from "../snippets/Feed"
import { PostDetails } from "../snippets/PostDetails"
import { MakeBid } from "../snippets/MakeBid"
import { BidsOnPost } from "../snippets/BidsOnPost"
import dynamic from "next/dynamic"

const SectionNumber = dynamic(() => import("./SectionNumber").then(mod => mod.SectionNumber), { ssr: false })

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function HowItWorks({ className, ...rest }: Props) {
  return (
    <section className={`${className ?? ""}`} {...rest}>
      <h2 className="font-black text-2xl text-slate-700 tracking-tight font-josefin relative">
        Como funciona?
        <motion.i
          {...animateUnderline(1.5, "7rem")}
          className="block h-[2px] left-1 bottom-1 w-28 bg-slate-700 absolute"
        />
      </h2>
      <ul className="text-neutral-600 [&_strong]:text-neutral-800 flex flex-col gap-[4.5rem]">
        <div className="flex flex-col gap-[4.5rem] xl:flex-row">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col gap-6">
              <ProjectFeature>
                <div>
                  <SectionNumber number={1} className="mr-2" />
                  <span className="text-base">
                    Cada post possui um prazo para ser encerrado, determinado pelo autor.
                  </span>
                </div>
                <p className="my-3 text-xs text-neutral-400 py-2 px-4 rounded-full w-fit border-dashed border border-neutral-600 whitespace-nowrap">
                  <PublishedEndsIn />
                </p>
              </ProjectFeature>
              <ProjectFeature className="hidden md:flex">
                <div>
                  <SectionNumber number={3} className="mr-2" />
                  <span className="text-base">
                    As pessoas poderão entrar na página do post, ver detalhes, ver descrição, ver preço, fazer
                    perguntas, e fazer <strong>lances</strong>.
                  </span>
                </div>
                <SnippetContainer>
                  <PostDetails />
                </SnippetContainer>
              </ProjectFeature>
            </div>
            <div className="flex gap-6">
              <ProjectFeature>
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
              <div className="flex flex-col">
                <ProjectFeature className="hidden xl:flex">
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
                <ProjectFeature className="hidden xl:flex">
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
          <div className="flex gap-6">
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
        <ProjectFeature className="mdx:hidden">
          <div>
            <SectionNumber number={6} className="mr-2" />
            <span className="text-base">
              Caso ninguém seja escolhido por você, ao final do prazo do post, o lance com maior valor é escolhido como
              vencedor do leilão.
            </span>
          </div>
        </ProjectFeature>
      </ul>
    </section>
  )
}

interface ISnippetContainer extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fontColor?: string | undefined
  width?: string | undefined
}

export function SnippetContainer({ children, fontColor, width, className, ...rest }: ISnippetContainer) {
  const clsnm = className ?? ""

  return (
    <div
      className={`flex flex-col justify-center p-3 my-3 font-roboto grow text-black whitespace-nowrap rounded-xl border border-dashed border-neutral-500 ${clsnm}`}
      {...rest}
    >
      <div className="flex flex-col">{children}</div>
    </div>
  )
}

// import React, { HTMLAttributes } from "react"

interface IProjectFeature extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
}

export function ProjectFeature({ children, className, ...rest }: IProjectFeature) {
  return (
    <li
      className={`pt-4 flex flex-col md:border-none first:border-none border-t border-neutral-500 grow ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </li>
  )
}
