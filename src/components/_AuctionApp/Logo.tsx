"use client"

import { josefins_sans } from "@/fonts"
import { Grain } from "@styled-icons/material-sharp/Grain"
import Link from "next/link"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  scale?: number | undefined
}

export function Logo({ scale, className, ...rest }: Props) {
  const fontSize = "4.75rem"
  const transform = `3.7px`
  const gap = "0.75rem"
  const iconSize = "103px"

  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="leading-none">
        <div className="flex items-center" style={{ gap }}>
          <Grain width={iconSize} height={iconSize} className="text-cyan-500" />
          <h1 className={`font-bold ${josefins_sans.className}`} style={{ transform, fontSize }}>
            Auction.
          </h1>
        </div>
      </div>
    </div>
  )
}

const rem = (number: number) => `${number}rem`
