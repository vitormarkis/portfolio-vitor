import React from "react"
import { motion } from "framer-motion"
import { animateUnderline } from "../animations"

interface IHeader extends React.ComponentProps<"div"> {}

export function Header({ className, ...rest }: IHeader) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"" + _cn} {...rest}>
      <h2 className="font-black text-2xl text-slate-700 tracking-tight font-josefin relative">
        Como funciona?
        <motion.i
          {...animateUnderline(1.5, "7rem")}
          className="block h-[2px] left-1 bottom-1 w-28 bg-slate-700 absolute"
        />
      </h2>
    </div>
  )
}
