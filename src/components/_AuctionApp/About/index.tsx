"use client"

import { motion } from "framer-motion"
import { HTMLAttributes } from "react"
import { CenteredContainer } from "../../CenteredContainer"
import { animateUnderline } from "../animations"
import { Introduction } from "./Introduction"
import { HowItWorks } from "./HowItWorks"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function About({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <CenteredContainer className="px-6">
        <div className="flex flex-col">
          <Introduction />
          <HowItWorks />
        </div>
      </CenteredContainer>
    </div>
  )
}
