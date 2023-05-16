"use client"

import { josefins_sans } from "@/fonts"
import { Grain } from "@styled-icons/material-sharp/Grain"
import { HTMLAttributes } from "react"
import { Twitter } from "@styled-icons/simple-icons/Twitter"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="leading-none">
        <div className="flex flex-col xl:flex-row items-center md:gap-6 gap-2">
          {/* <Twitter className="text-blue-500 md:h-[103px] md:w-[103px] h-[82px] w-[82px]" /> */}
          <img
            src="/ike-linktree-logo.png"
            alt="Logo do projeto Ike Linktree"
            className="rounded-full object-cover shrink-0 md:h-[103px] md:w-[103px] h-[6.25rem] w-[6.25rem]"
          />
          <h1
            className={`font-bold ${josefins_sans.className} mdx:text-[4.75rem] xs:text-[3.8rem] text-[2.75rem] translate-y-[3.7px] whitespace-nowrap`}
          >
            Ike Linktree
          </h1>
        </div>
      </div>
    </div>
  )
}

const rem = (number: number) => `${number}rem`
