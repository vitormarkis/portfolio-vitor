import React, { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CenteredContainer({ children, className, ...rest }: Props) {
  return (
    <div className={`max-w-7xl mx-auto w-full ${className}`} {...rest}>
      {children}
    </div>
  )
}