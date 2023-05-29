import { IIconProps } from "@/myTypes"
import React from "react"

interface IPictureIcon extends IIconProps {}

export function PictureIcon({ size, className, ...rest }: IPictureIcon) {
  const _cn = ` ${className ?? ""}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height={size}
      width={size}
      className={"" + _cn}
      {...rest}
    >
      <rect width={256} height={256} fill="none" />
      <circle cx={160} cy={96} r={16} />
      <rect
        x={32}
        y={48}
        width={192}
        height={160}
        rx={8}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <path
        d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <path
        d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
