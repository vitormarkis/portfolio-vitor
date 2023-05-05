import { CenteredContainer } from "@/components/CenteredContainer"
import React from "react"
import { Header } from "./Header"

interface IImplementation extends React.ComponentProps<"div"> {}

export function Implementation({ className, ...rest }: IImplementation) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"text-slate-700" + _cn} {...rest}>
      <CenteredContainer className="px-6 mdx:px-12">
        <Header />
        {/* <h3 className="font-black text-2xl tracking-tight font-josefin relative h1-third">Implementações</h3> */}
        <ul className="text-sm flex flex-wrap gap-x-4 gap-y-2 leading-none">
          <Item text="Criação de conta" />
          <Item text="Autenticação via JWT" />
          <Item text="Autenticação Social &#40;Google e Github&#41;" />
          <Item text="Criar posts" />
          <Item text="Ver lances em seu post" />
          <Item text="Salvar posts" />
          <Item text="Ver posts salvos" />
          <Item text="Fazer lances" />
          <Item text="Ver posts os quais você fez lance" />
          <Item text="Notificações persistidas em banco de dados" />
          <Item text="Fazer perguntas no post" />
          <Item text="Ver suas aquisições" />
          <Item text="Carrossel de imagens na página do produto" />
        </ul>
      </CenteredContainer>
    </div>
  )
}

interface IItem extends React.ComponentProps<"li"> {
  text: string
}

export const Item: React.FC<IItem> = ({ text, className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <li className={"px-3 py-2 rounded-lg border border-neutral-400 border-dashed grow text-center" + _cn} {...rest}>
      {text}
    </li>
  )
}
