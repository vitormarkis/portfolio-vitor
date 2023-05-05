import React from "react"
import { motion } from "framer-motion"
import { animateUnderline } from "../animations"

interface IHeader extends React.ComponentProps<"div"> {}

export function Header({ className, ...rest }: IHeader) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center mb-12" + _cn} {...rest}>
      <h2 className="font-black mb-0.5 text-4xl text-slate-700 tracking-tight font-josefin relative text-center">
        Como funciona?
        <motion.i
          {...animateUnderline(1.5, "7rem")}
          className="block h-[1px] left-1 bottom-1 w-28 bg-slate-700 absolute"
        />
      </h2>
      <p className="text-neutral-400 text-center">
        Criei snippets para explicar a lógica da minha aplicação passo a passo.
      </p>
    </div>
  )
}
