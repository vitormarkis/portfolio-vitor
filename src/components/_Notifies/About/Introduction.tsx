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
          <div className="text-white mb-6 [&_strong]:text-neutral-800 flex flex-col items-center">
            <p className="mb-6">
              Esse projeto foi criado com Google Planilhas antes de eu começar a aprender Javascript
              e a planilha foi uma ferramenta que usei para resolver um problema que eu e alguns
              colegas tinhamos.
            </p>
            <p className="mb-6">
              Se você possui ou é dono de algo que precisa constantemente de testes para encontrar
              qual a melhor opção/combinação, essa planilha é para você.
            </p>
            <p className="mb-6">
              Ela funciona da seguinte forma, o que você quer analisar é quebrado em diversos
              pedaços, esses pedaços viram entidades próprias, ou seja, cada um deles possui dados e
              métricas próprias, esses dados são somados e lançados em um dashboard, onde fica
              exposto as métricas de cada pedaço lado a lado para fácil comparação.
            </p>
            <p className="mb-6">
              Uma vez que você possui um dashboard com todas as métricas de todos os pedaços, agora
              você pode montar um todo, usando os melhores pedaços, aqueles que possuem melhores
              métricas.
            </p>
            <p className="mb-6">
              Essa versão é a final, mas eu criei uma primeira versão após explicar de forma
              abstrata, como eu entendo que seria a melhor forma de analisar campanhas dentro de
              redes de tráfego pago, como Facebook Ads. Como deveria ser feita a análise de uma
              campanha, como extrair o máximo de inteligência de cada campanha, e como empilhar a
              inteligência, resultando em um crescimento exponencial ao passar do tempo.
            </p>
          </div>
        </div>
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
