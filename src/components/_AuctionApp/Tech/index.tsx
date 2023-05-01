"use client"
import { CenteredContainer } from "@/components/CenteredContainer"
import { IconTechnology } from "@/components/IconTechnology"
import React, { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Tech({ className, ...rest }: Props) {
  return (
    <div className={`bg-slate-950 text-white ${className ?? ""}`} {...rest}>
      <CenteredContainer className="px-6 py-8 flex flex-col gap-8">
        <div>
          <h3 className="font-black text-2xl tracking-tight font-josefin relative h1-third">Implementações</h3>
          <ol className="text-sm list-inside list-decimal text-slate-300">
            <li>Criação de conta</li>
            <li>Autenticação via JWT</li>
            <li>Autenticação Social &#40;Google e Github&#41;</li>
            <li>Criar posts</li>
            <li>Ver lances em seu post</li>
            <li>Salvar posts</li>
            <li>Ver posts salvos</li>
            <li>Fazer lances</li>
            <li>Ver posts os quais você fez lance</li>
            <li>Notificações persistidas em banco de dados</li>
            <li>Fazer perguntas no post</li>
            <li>Ver suas aquisições</li>
            <li>Carrossel de imagens na página do produto</li>
          </ol>
        </div>
        <div>
          <h3 className="font-black text-2xl tracking-tight font-josefin relative h1-seccon">Tecnologias Usadas</h3>
          <div className="text-sm text-slate-300">
            <p className="mb-4">
              <IconTechnology
                icon="NEXT"
                width={14}
                height={14}
                color={twc.white}
                className="mr-1 translate-y-[-1.5px]"
              />
              <strong>Next</strong>, por ser um superset do React, com diversas funcionalidades nativas e essenciais
              para produção.
              <br />
              Usei as API Routes do Next para criação do meu backend e provisão dos dados necessários.
            </p>
            <p className="mb-4">
              <IconTechnology
                icon="PRISMA"
                width={14}
                height={14}
                color={twc.white}
                className="mr-1 translate-y-[-1.5px]"
              />
              <strong>Prisma</strong>, foi usado para fazer a conexão, as escritas e consultas ao banco de dados.
              <br />
            </p>
          </div>
        </div>
      </CenteredContainer>
    </div>
  )
}
