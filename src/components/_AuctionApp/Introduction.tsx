"use client"

import { motion } from "framer-motion"
import { HTMLAttributes } from "react"
import { CenteredContainer } from "../CenteredContainer"
import { animateUnderline } from "./animations"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Introduction({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <CenteredContainer className="px-6">
        <div className="flex flex-col">
          <h2 className="font-black text-4xl text-slate-700 tracking-tight font-josefin relative">
            Apresentação.
            <motion.i {...animateUnderline(1)} className="block h-[3px] left-9 bottom-1 w-20 bg-slate-700 absolute" />
          </h2>
          <div className="text-neutral-500 [&_strong]:text-neutral-800">
            <p className="mb-4">
              Esse projeto é de uma ideia que eu tive antes de começar a programar, e ele era uma das minhas metas como
              programador.
            </p>
            <p className="mb-4">
              A proposta é ser um site similar ao OLX e Facebook, onde você pode fazer posts de coisas que você queira
              vender.
            </p>
            <p className="mb-4">
              <strong>Cada post possui um prazo para ser encerrado</strong>, determinado pelo autor.
            </p>
            <p className="mb-4">
              Enquanto ativo, seu post será mostrado em um feed similar ao do Facebook, e as pessoas poderão entrar, ver
              detalhes, fazer perguntas, e fazer <strong>lances</strong>.
            </p>
            <p className="mb-4">
              Um lance é um valor que a pessoa está disposto a pagar por seu produto, pode ser maior ou menor ao valor
              original.
            </p>
            <p className="mb-4">As pessoas vão ir deixando lances em seu post.</p>
            <p className="mb-4">
              Agora que seu post possui vários lances, você pode escolher quem você deseja premiar como vencedor daquele
              leilão.
            </p>
            <p className="mb-4">
              Caso ninguém seja escolhido por você, ao final do prazo do post, o lance com maior valor é escolhido como
              vencedor do leilão.
            </p>
          </div>
        </div>
      </CenteredContainer>
    </div>
  )
}
