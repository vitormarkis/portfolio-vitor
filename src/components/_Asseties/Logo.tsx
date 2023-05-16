"use client"

import { josefins_sans } from "@/fonts"
import { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="leading-none">
        <div className="flex flex-col lg:flex-row items-center lg:gap-6 gap-0">
          <svg
            className="md:h-[103px] md:w-[103px] h-[82px] w-[82px]"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill={twc.cyan["500"]}
            viewBox="0 0 256 256"
          >
            <path d="M114,102.18a19.87,19.87,0,0,0,28.08,0L170.19,74a19.86,19.86,0,0,0,0-28.07L142,17.8a19.89,19.89,0,0,0-28.08,0L85.81,46a19.86,19.86,0,0,0,0,28.07Zm14-64.47L150.28,60,128,82.28,105.72,60ZM238.19,114,210,85.81a19.88,19.88,0,0,0-28.08,0L153.81,114a19.87,19.87,0,0,0,0,28.08L182,170.19h0a19.89,19.89,0,0,0,28.08,0L238.19,142a19.87,19.87,0,0,0,0-28.08ZM196,150.28,173.72,128,196,105.72,218.28,128ZM108,128a19.73,19.73,0,0,0-5.81-14L74,85.81a19.88,19.88,0,0,0-28.08,0L17.81,114a19.87,19.87,0,0,0,0,28.08L46,170.19h0a19.89,19.89,0,0,0,28.08,0L102.19,142A19.73,19.73,0,0,0,108,128ZM60,150.28,37.72,128,60,105.72,82.28,128Zm82,3.53a19.89,19.89,0,0,0-28.08,0L85.81,182a19.86,19.86,0,0,0,0,28.07L114,238.2h0a19.89,19.89,0,0,0,28.08,0L170.19,210a19.86,19.86,0,0,0,0-28.07Zm-14,64.48L105.72,196,128,173.72,150.28,196Z"></path>
          </svg>
          <h1
            className={`font-bold ${josefins_sans.className} mdx:text-[4.75rem] text-[3.8rem] translate-y-[3.7px] whitespace-nowrap`}
          >
            Asseties.
          </h1>
        </div>
      </div>
    </div>
  )
}

const rem = (number: number) => `${number}rem`
