import { NextFont } from "next/dist/compiled/@next/font"
import { Code } from "phosphor-react"
import twc from "tailwindcss/colors"
import { JetBrains_Mono } from "next/font/google"
const jetbrains = JetBrains_Mono({ subsets: ["latin"] })

import React, { HTMLAttributes } from "react"
import Link from "next/link"

interface ILogo extends HTMLAttributes<HTMLDivElement> {
  scale?: number
}

export const Logo = React.forwardRef<HTMLAnchorElement, ILogo>(
  ({ className, scale = 1.2, style, ...rest }, ref) => {
    const codesize = scale * 18
    const fontSize = scale * 16
    const gap = scale * 6

    return (
      <Link
        href="/"
        ref={ref}
        className="p-5 rounded-2xl w-fit block mx-auto mdx:mx-0"
      >
        <div
          className={`flex items-center justify-center mdx:justify-start leading-none ${className}`}
          style={{
            gap,
            ...style,
          }}
          {...rest}
        >
          <i>
            <Code
              weight="bold"
              color={twc.violet["700"]}
              width={codesize}
              height={codesize}
            />
          </i>
          <span
            className={`font-bold ml-1 ${jetbrains.className} jetbrains`}
            style={{ fontSize }}
          >
            <span className="text-violet-700">Vitor.</span>
            <span className="text-texas-500">markis</span>
            <span style={{ color: "#DA67AC" }}>()</span>
          </span>
        </div>
      </Link>
    )
  }
)
