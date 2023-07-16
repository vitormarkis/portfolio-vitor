"use client"

import { HTMLAttributes } from "react"
import { CenteredContainer } from "../../CenteredContainer"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function About({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <CenteredContainer className="md:px-12">
        <div className="flex flex-col"></div>
      </CenteredContainer>
    </div>
  )
}
