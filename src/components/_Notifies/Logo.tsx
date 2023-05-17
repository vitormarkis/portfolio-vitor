"use client"

import { josefins_sans } from "@/fonts"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="leading-none">
        <div className="flex flex-col lg:flex-row items-center md:gap-3 gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="text-black md:h-[103px] md:w-[103px] h-[82px] w-[82px]"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
            <path
              d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
          </svg>
          <h1
            className={`font-bold ${josefins_sans.className} md:text-[4.75rem] text-[3.8rem] translate-y-[3.7px] whitespace-nowrap`}
          >
            Notifies
          </h1>
        </div>
      </div>
    </div>
  )
}

const rem = (number: number) => `${number}rem`
