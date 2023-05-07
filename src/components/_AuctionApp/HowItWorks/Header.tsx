import React from "react"

interface IHeader extends React.ComponentProps<"div"> {}

export function Header({ className, ...rest }: IHeader) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center mb-12" + _cn} {...rest}>
      <h2 className="font-black mb-0.5 text-4xl tracking-tight font-josefin relative text-center h1-third">
        Como funciona?
      </h2>
      <p className="text-slate-700 text-center">
        Criei snippets para explicar a lógica da minha aplicação passo a passo.
      </p>
    </div>
  )
}
