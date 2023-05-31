import { StarHalfIcon } from "@/components/__icons/StartHalfIcon"
import React from "react"

interface IUnfavoriteAllPosts extends React.ComponentProps<"button"> {}

export const UnfavoriteAllPosts = React.forwardRef<HTMLButtonElement, IUnfavoriteAllPosts>(
  ({ className, ...rest }, ref) => {
    const _cn = ` ${className ?? ""}`

    return (
      <button
        ref={ref}
        className={
          "h-9 w-9 rounded-lg hover:bg-zinc-100 grid place-items-center outline-raw focus:outline-zinc-500 group hover:outline-red-500 active:translate-y-[1px] transition-transform duration-75" +
          _cn
        }
        {...rest}
      >
        <StarHalfIcon
          size={22}
          className="text-zinc-500 fill-zinc-500 group-hover:text-red-500 group-hover:fill-red-500"
        />
      </button>
    )
  }
)
