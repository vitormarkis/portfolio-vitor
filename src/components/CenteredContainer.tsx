import React, { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CenteredContainer({ children, className, ...rest }: Props) {
  return (
    <div className={twMerge("px-inner max-w-7xl mx-auto w-full", className)} {...rest}>
      {children}
    </div>
  )
}
