"use client"
import React from "react"
import { CenteredContainer } from "@/components/CenteredContainer"
import st from "./Introduction.module.css"

interface IIntroduction extends React.ComponentProps<"section"> {}

export function Introduction({ className, ...rest }: IIntroduction) {
  const _cn = ` ${className ?? ""}`

  return (
    <section className={"relative bg-slate-950 inset-shadow overflow-hidden" + _cn} {...rest}>
      <CenteredContainer className="mdx:px-12 py-12 md:py-16 flex flex-col items-center relative">
        <ContainerEffects />
        <div className="max-w-xl flex flex-col items-center relative z-10 px-6">
          <h2 className="font-black text-5xl text-white h1-seccon tracking-tight font-josefin relative mb-4">
            Apresentação.
          </h2>
          <div className="text-white mb-6 [&_strong]:text-neutral-800 flex flex-col items-center text-center">
            <p>
              Esse projeto é de uma ideia que eu tive antes de começar a programar, e ele era uma
              das minhas metas como programador.
            </p>
            <p>
              A proposta é ser um site similar ao OLX e Facebook, onde você pode fazer posts de
              coisas que você queira vender.
            </p>
          </div>
        </div>{" "}
      </CenteredContainer>
    </section>
  )
}

export function ContainerEffects() {
  return (
    <>
      <div className={st.fxBlurA} />
      <div className={st.fxBlurB} />
      <div className={st.fxBlurC} />
      <div className={st.fxBlurD} />
    </>
  )
}

export function LinesEffect() {
  return (
    <>
      <VerticalLine className="left-0" />
      <VerticalLine className="left-0 -translate-x-[4rem]" />
      <VerticalLine className="left-0 -translate-x-[10rem]" />
      <VerticalLine className="left-0 -translate-x-[16rem]" />
      <VerticalLine className="right-0" />
      <VerticalLine className="right-0 translate-x-[4rem]" />
      <VerticalLine className="right-0 translate-x-[10rem]" />
      <VerticalLine className="right-0 translate-x-[16rem]" />
    </>
  )
}

interface ILine extends React.ComponentProps<"div"> {}

export const Line: React.FC<ILine> = ({ className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <div
      className={"w-screen h-1 border-b border-dashed border-[#ffffff20] absolute" + _cn}
      {...rest}
    />
  )
}

interface IVerticalLine extends React.ComponentProps<"div"> {}

export const VerticalLine: React.FC<IVerticalLine> = ({ className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <div
      className={
        "h-[9999px] w-[1px] border-r border-dashed border-[#ffffff20] absolute -top-[999px]" + _cn
      }
      {...rest}
    />
  )
}
