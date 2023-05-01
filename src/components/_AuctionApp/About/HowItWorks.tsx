import React, { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { animateUnderline } from "../animations"
import { PublishedEndsIn } from "../snippets/PublishedEndsIn"
import { Feed } from "../snippets/Feed"
import { PostDetails } from "../snippets/PostDetails"
import { MakeBid } from "../snippets/MakeBid"
import { BidsOnPost } from "../snippets/BidsOnPost"

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
      <ul className="text-neutral-600 [&_strong]:text-neutral-800">
        <ProjectFeature>
          <SectionNumber number={1} className="mr-2" />
          <span className="text-base">Cada post possui um prazo para ser encerrado, determinado pelo autor.</span>
          <p className="my-3 text-xs text-neutral-400 py-2 px-4 rounded-full w-fit border-dashed border border-neutral-600">
            <PublishedEndsIn />
          </p>
        </ProjectFeature>
        <ProjectFeature>
          <SectionNumber number={2} className="mr-2" />
          <span className="text-base">Enquanto ativo, seu post será mostrado em um feed similar ao do Facebook.</span>
          <SnippetContainer>
            <Feed />
          </SnippetContainer>
        </ProjectFeature>
        <ProjectFeature>
          <SectionNumber number={3} className="mr-2" />
          <span className="text-base">
            As pessoas poderão entrar na página do post, ver detalhes, ver descrição, ver preço, fazer perguntas, e
            fazer <strong>lances</strong>.
          </span>
          <SnippetContainer>
            <PostDetails />
          </SnippetContainer>
        </ProjectFeature>
        <ProjectFeature>
          <SectionNumber number={4} className="mr-2" />
          <span className="text-base">
            Um lance é um valor que a pessoa está disposta a pagar por seu produto, pode ser maior ou menor ao valor
            original.
          </span>
          <SnippetContainer>
            <MakeBid />
          </SnippetContainer>
        </ProjectFeature>
        <ProjectFeature>
          <SectionNumber number={5} className="mr-2" />
          <span className="text-base">
            Agora que seu post possui vários lances, você pode escolher quem você deseja premiar como vencedor do
            leilão.
          </span>
          <SnippetContainer>
            <BidsOnPost />
          </SnippetContainer>
        </ProjectFeature>
        <ProjectFeature>
          <SectionNumber number={6} className="mr-2" />
          <span className="text-base">
            Caso ninguém seja escolhido por você, ao final do prazo do post, o lance com maior valor é escolhido como
            vencedor do leilão.
          </span>
        </ProjectFeature>
      </ul>
    </section>
  )
}

interface ISectionNumber extends HTMLAttributes<HTMLDivElement> {
  number: number
}

export const SectionNumber: React.FC<ISectionNumber> = ({ number, className, ...rest }) => (
  <div
    className={`border-t border-t-white/50 border-b border-b-black/5 bg-gradient-to-br from-[#a56dff] via-[#fc39ff] to-[#ffd86b] inline-grid place-items-center w-6 h-6 p-0.5 rounded-md text-white leading-none text-sm ${
      className ?? ""
    }`}
    {...rest}
  >
    <div className="inline-grid place-items-center w-full h-full rounded-[5px]">
      <p>{number}</p>
    </div>
  </div>
)

interface ISnippetContainer extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fontColor?: string | undefined
  width?: string | undefined
}

export function SnippetContainer({ children, fontColor, width, className, ...rest }: ISnippetContainer) {
  const clsnm = className ?? ""

  return (
    <div
      className={`p-3 my-3 font-roboto text-black whitespace-nowrap rounded-xl border border-dashed border-neutral-500 ${clsnm}`}
      {...rest}
    >
      {children}
    </div>
  )
}

// import React, { HTMLAttributes } from "react"

interface IProjectFeature extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
}

export function ProjectFeature({ children, className, ...rest }: IProjectFeature) {
  return (
    <li className={`mb-[4.5rem] pt-4 first:border-none border-t border-neutral-500 ${className ?? ""}`} {...rest}>
      {children}
    </li>
  )
}
