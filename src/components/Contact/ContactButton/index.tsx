import React, { HTMLAttributes } from "react"

interface IContactButton extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  border?: string
  borderY?: boolean
}

export function ContactButton({
  className,
  children,
  border,
  borderY = false,
  ...rest
}: IContactButton) {
  return (
    <a
      className={`h-12 relative sm:max-w-md sm:w-full text-white overflow-hidden flex rounded-lg shadow-sm outline-accent items-center justify-center ${
        className ?? ""
      } ${border ?? "border-neutral-500"} ${borderY ? "border-y" : "border"}`}
      {...rest}
    >
      {children}
    </a>
  )
}
