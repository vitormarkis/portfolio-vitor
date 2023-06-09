"use client"

import { josefins_sans } from "@/fonts"
import { Grain } from "@styled-icons/material-sharp/Grain"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="leading-none">
        <div className="flex items-center md:gap-3 gap-0.5">
          <Grain className="text-cyan-500 md:h-[103px] md:w-[103px] h-[82px] w-[82px]" />
          <h1 className={`font-bold ${josefins_sans.className} md:text-[4.75rem] text-[3.8rem] translate-y-[3.7px]`}>
            Auction.
          </h1>
        </div>
      </div>
    </div>
  )
}

const rem = (number: number) => `${number}rem`
