import { NextFont } from "next/dist/compiled/@next/font"
import { Code } from "phosphor-react"
import { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"

interface Props extends HTMLAttributes<HTMLDivElement> {
  scale?: number
  font: NextFont
}

export function Logo({ className, scale = 1.2, style, font, ...rest }: Props) {
  const codesize = scale * 18
  const fontSize = scale * 16
  const gap = scale * 6

  return (
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
        className={`font-bold ml-1 ${font.className}`}
        style={{ fontSize }}
      >
        <span className="text-violet-700">Vitor.</span>
        <span className="text-texas-500">markis</span>
        <span style={{ color: "#DA67AC" }}>()</span>
      </span>
    </div>
  )
}
