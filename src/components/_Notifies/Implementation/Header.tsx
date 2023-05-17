import React from "react"

interface IHeader extends React.ComponentProps<"div"> {}

export function Header({ className, ...rest }: IHeader) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center mb-12" + _cn} {...rest}>
      <h2 className="font-black mb-0.5 text-4xl h1-third tracking-tight font-josefin relative text-center">
        Implementações
      </h2>
      <p className="text-center">Coisas que adicionei e desafios que passei durante o projeto.</p>
    </div>
  )
}
