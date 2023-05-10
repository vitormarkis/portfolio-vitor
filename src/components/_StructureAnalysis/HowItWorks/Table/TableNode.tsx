import React from "react"
import clsx from "clsx"

interface ITableNode extends React.ComponentProps<"div"> {
  children: React.ReactNode
  left?: boolean | undefined
  head?: boolean | undefined
  last?: boolean | undefined
  grow?: number | undefined
}

export function TableNode({ grow, last, head, left, children, className, ...rest }: ITableNode) {
  return (
    <div
      className={clsx(
        `px-4 border-b border-neutral-500 py-0.5 last-of-type:border-b-0`,
        className,
        left ? "text-left" : "text-center",
        head && "bg-black text-white",
        !last && head && "border-r border-r-white",
        !last && !head && "border-r"
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
