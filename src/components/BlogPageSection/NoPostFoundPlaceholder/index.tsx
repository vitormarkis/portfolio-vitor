import { PictureIcon } from "@/components/__icons/PictureIcon"
import React from "react"

interface INoPostFoundPlaceholder extends React.ComponentProps<"div"> {}

export function NoPostFoundPlaceholder({ className, ...rest }: INoPostFoundPlaceholder) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"p-6 flex flex-col items-center text-neutral-400" + _cn} {...rest}>
      <h2 className="font-medium text-lg text-center">Nenhum post encontrado :/</h2>
      <p className="text-center mb-2">Parece que nenhum post corresponde ao filtro escolhido.</p>
      <PictureIcon size={96} className="text-neutral-300 fill-neutral-300" />
    </div>
  )
}
