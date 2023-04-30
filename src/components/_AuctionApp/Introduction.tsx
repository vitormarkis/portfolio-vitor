"use client"

import { motion } from "framer-motion"
import { HTMLAttributes } from "react"
import { CenteredContainer } from "../CenteredContainer"
import { animateUnderline } from "./animations"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Introduction({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <CenteredContainer className="px-6">
        <h2 className="font-black text-4xl text-slate-700 tracking-tight font-josefin relative">
          Apresentação.
          <motion.i {...animateUnderline(1)} className="block h-[3px] left-9 bottom-1 w-20 bg-slate-700 absolute" />
        </h2>
      </CenteredContainer>
    </div>
  )
}
