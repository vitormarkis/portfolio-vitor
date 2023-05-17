"use client"

import { josefins_sans } from "@/fonts"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="leading-none">
        <div className="flex flex-col items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="text-slate-800 md:h-[103px] md:w-[103px] h-[82px] w-[82px] shrink-0"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
          </svg>
          <h1
            className={`font-bold ${josefins_sans.className} mdx:text-[4.75rem] xs:text-[3.8rem] text-[2.75rem] translate-y-[3.7px] whitespace-nowrap text-center`}
          >
            Custom <br className="hidden mdx:block lg:hidden" /> Social <br /> Media
          </h1>
        </div>
      </div>
    </div>
  )
}

const rem = (number: number) => `${number}rem`
