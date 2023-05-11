import React from "react"
import clsx from "clsx"
import chroma from "chroma-js"

interface ITableNode extends React.ComponentProps<"div"> {
  children: React.ReactNode | string
  left?: boolean | undefined
  head?: boolean | undefined
  last?: boolean | undefined
  grow?: number | undefined
  backgroundColor?: string | undefined
  invertBorderColor?: boolean | undefined
  type?: "number" | "string" | undefined
}

export function TableNode({ type, backgroundColor, grow, last, head, left, children, className, ...rest }: ITableNode) {
  return (
    <div
      className={clsx(
        `px-4 border-b border-neutral-500 py-0.5 last-of-type:border-b-0 grid place-items-center h-[29px]`,
        className,
        left ? "text-left" : "text-center",
        head && "bg-black text-white",
        !last && "border-r",
        !last && head && "border-r-white",
        type === "number" && "verdana"
      )}
      style={{
        backgroundColor,
        borderRightColor: backgroundColor ? (chroma(backgroundColor).darken(2) as unknown as string) : undefined,
      }}
      {...rest}
    >
      {left && typeof children === "string" ? <p className="w-full">{children}</p> : children}
    </div>
  )
}
