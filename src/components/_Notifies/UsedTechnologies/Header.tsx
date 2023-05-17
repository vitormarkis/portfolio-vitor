import React from "react"

interface IHeader extends React.ComponentProps<"div"> {}

export function Header({ className, ...rest }: IHeader) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center mb-12" + _cn} {...rest}>
      <h2 className="font-black mb-0.5 text-4xl h1-seccon tracking-tight font-josefin relative text-center">
        Tecnologias Usadas
      </h2>
      <p className="text-neutral-200 text-center">As tecnologias que eu usei e a explicação de porque eu usei elas.</p>
    </div>
  )
}
