import React, { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { animateUnderline } from "../animations"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Introduction({ className, ...rest }: Props) {
  return (
    <section className={`${className ?? ""}`} {...rest}>
      <h2 className="font-black text-4xl text-slate-700 tracking-tight font-josefin relative">
            Apresentação.
            <motion.i
              {...animateUnderline(1, "5rem")}
              className="block h-[2px] left-9 bottom-1 w-20 bg-slate-700 absolute"
            />
          </h2>
          <div className="text-neutral-500 mb-6 [&_strong]:text-neutral-800">
            <p className="mb-4">
              Esse projeto é de uma ideia que eu tive antes de começar a programar, e ele era uma das minhas metas como
              programador.
            </p>
            <p className="mb-4">
              A proposta é ser um site similar ao OLX e Facebook, onde você pode fazer posts de coisas que você queira
              vender.
            </p>
          </div>
    </section>
  )
}