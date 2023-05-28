"use client"
import { CenteredContainer } from "@/components/CenteredContainer"
import React from "react"
import { Header } from "./Header"
import { Grain } from "@styled-icons/material-sharp/Grain"
import { bounceAnimation } from "./animations"
import { motion } from "framer-motion"

interface IImplementation extends React.ComponentProps<"div"> {}

export function Implementation({ className, ...rest }: IImplementation) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"text-slate-700" + _cn} {...rest}>
      <CenteredContainer className="px-6 mdx:px-12">
        <Header />
        {/* <h3 className="font-black text-2xl tracking-tight font-josefin relative h1-third">Implementações</h3> */}
        <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-6">
          <div className="grid place-items-center flex-1 grow-[2]">
            <div
              className="grid place-items-center rounded-full h-56 w-56 relative"
              style={{ "--zindex": 15 } as React.CSSProperties}
            >
              <motion.div
                {...bounceAnimation()}
                className="grid place-items-center rounded-full w-full h-full z-[var(--zindex)]"
              >
                {/* <div className="z-[var(--zindex)] inset-[-2px] rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600 absolute" />
                <div className="z-[var(--zindex)] inset-0 rounded-full bg-gradient-to-b from-cyan-600 to-cyan-500 absolute" />
                <Grain className="z-[var(--zindex)] text-white h-40 w-40 relative" /> */}

                <div className="z-[var(--zindex)] inset-[-2px] rounded-full bg-gradient-to-b from-white to-neutral-100 absolute" />
                <div className="z-[var(--zindex)] inset-0 rounded-full bg-gradient-to-b from-neutral-100 to-white absolute" />
                <Grain className="z-[var(--zindex)] text-cyan-500 h-40 w-40 relative" />
              </motion.div>
              <div className="z-[calc(var(--zindex)_-_1)] right-8 left-8 -bottom-4 rounded-[100%] h-6 bg-neutral-300 absolute blur-md" />
            </div>
          </div>
          <ul className="flex-1 grow-[3] text-sm flex flex-wrap gap-x-4 gap-y-3 leading-none self-start">
            <Item text="Criação de conta" />
            <Item text="Autenticação via JWT" />
            <Item text="Autenticação Social &#40;Google e Github&#41;" />
            <Item text="Criar posts" />
            <Item text="Ver lances em seu post" />
            <Item text="Salvar posts" working />
            <Item text="Ver posts salvos" working />
            <Item text="Upload de arquivos" working />
            <Item text="Fazer lances" />
            <Item text="Ver posts os quais você fez lance" working />
            <Item text="Notificações persistidas em banco de dados" working />
            <Item text="Fazer perguntas no post" working />
            <Item text="Ver suas aquisições" working />
            <Item text="Carrossel de imagens na página do produto" />
          </ul>
        </div>
      </CenteredContainer>
    </div>
  )
}

interface IItem extends React.ComponentProps<"li"> {
  text: string
  working?: boolean | undefined
}

export const Item: React.FC<IItem> = ({ working, text, className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <li
      className={"relative px-3 py-2 rounded-lg border border-neutral-400 border-dashed grow text-center" + _cn}
      {...rest}
    >
      {working && (
        <div className="absolute px-1.5 rounded-full py-[3px] leading-none text-[8px] bg-orange-500 text-white -right-2 -top-2">
          Working
        </div>
      )}
      {text}
    </li>
  )
}
