"use client"

import { josefins_sans } from "@/fonts"
import { Grain } from "@styled-icons/material-sharp/Grain"
import Link from "next/link"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  scale?: number | undefined
}

export function Logo({ scale, className, ...rest }: Props) {
  const fontSize = rem(scale ? scale * 1.25 : 1.25)
  const transform = `translateY(${rem(scale ? scale * 0.0625 : 0.0625)})`
  const gap = rem(scale ? scale * 0.1875 : 0.1875)
  const iconSize = rem(scale ? scale * 1.75 : 1.75)

  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="leading-none">
        <Link href="/" className="flex items-center" style={{ gap }}>
          <Grain width={iconSize} height={iconSize} className="text-cyan-500" />
          <h1 className={`font-bold ${josefins_sans.className}`} style={{ transform, fontSize }}>
            Auction.
          </h1>
        </Link>
      </div>
    </div>
  )
}

const rem = (number: number) => `${number}rem`
