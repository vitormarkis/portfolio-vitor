import React, { CSSProperties } from "react"
import clsx from "clsx"
import chroma from "chroma-js"

interface ITableSelect extends React.ComponentProps<"select"> {
  left?: boolean | undefined
  head?: boolean | undefined
  last?: boolean | undefined
  grow?: number | undefined
  backgroundColor?: string | undefined
  color?: string | undefined
  invertBorderColor?: boolean | undefined
  values: string[]
}

export function TableSelect({
  values,
  color,
  backgroundColor,
  grow,
  last,
  head,
  left,
  className,
  ...rest
}: ITableSelect) {
  return (
    <select
      className={clsx(
        `w-full rounded-full text-sm leading-none px-2 outline-raw focus:outline-[var(--outline-color)]`,
        className,
        left ? "text-left" : "text-center",
        head && "bg-black text-white",
        !last && "border-r",
        !last && head && "border-r-white"
      )}
      style={
        {
          color,
          backgroundColor,
          "--outline-color": color,
        } as CSSProperties
      }
      {...rest}
    >
      {values.map(v => (
        <option key={v}>{v}</option>
      ))}
    </select>
  )
}
