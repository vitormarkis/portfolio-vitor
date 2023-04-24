import React, { HTMLAttributes } from "react"
import { CenteredContainer } from "./CenteredContainer"
import Image from "next/image"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function AboutMe({ className, ...rest }: Props) {
  return (
    <div className={`bg-zinc-900 text-white bg-pattern ${className}`} {...rest}>
      <CenteredContainer className="p-6 flex flex-col items-center gap-6">
        <h2 className="font-semibold mb-2 text-4xl relative z-10 text-center">
          Sobre mim
        </h2>
        <div className="w-40">
          <img
            src="https://avatars.githubusercontent.com/u/121525239?v=4"
            alt="Foto de perfil de Vitor Markis"
            className="border-t rounded-full object-cover border-t-white/10 border-b border-b-black/10 shadow-lg"
          />
        </div>
        <div className="p-3 rounded-lg backdrop-blur-[1px] border-t border-t-neutral-900 border-b border-b-black/20 shadow-lg">
          <p className="text-sm">
            Me chamo Vitor Markis, tenho 20 anos, amo tecnologia, já programei
            em Java, C# e Visual Basic quando mais novo, criando jogos e
            programas.
          </p>
        </div>
      </CenteredContainer>
    </div>
  )
}
