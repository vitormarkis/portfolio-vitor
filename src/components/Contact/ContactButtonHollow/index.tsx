import React, { HTMLAttributes } from "react"

interface IContactButtonHollow extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  border?: string
  borderY?: boolean
}

export function ContactButtonHollow({
  className,
  children,
  ...rest
}: IContactButtonHollow) {
  return (
    <a
      className={`h-12 relative sm:max-w-md sm:w-full text-neutral-600 bg-white overflow-hidden flex rounded-lg shadow-sm outline-accent items-center border-neutral-500 border justify-center ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </a>
  )
}
