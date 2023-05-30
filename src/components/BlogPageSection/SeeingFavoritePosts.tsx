import React from "react"

interface ISeeingFavoritePosts extends React.ComponentProps<"div"> {}

export function SeeingFavoritePosts({ className, ...rest }: ISeeingFavoritePosts) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"p-6 pb-0 flex justify-center" + _cn} {...rest}>
      <h2 className="py-1.5 px-4 text-sm rounded-lg bg-violet-600 text-white shadow-lg text-center">
        Você está vendo seus posts favoritos.
      </h2>
    </div>
  )
}
