import React from "react"
import clsx from "clsx"

interface ITableCol extends React.ComponentProps<"div"> {
  children: React.ReactNode
  grow?: number | undefined
}

export function TableCol({ grow, children, className, ...rest }: ITableCol) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={clsx("flex flex-col", _cn)} {...rest} style={{ flexGrow: grow ?? 1 }}>
      {children}
    </div>
  )
}
