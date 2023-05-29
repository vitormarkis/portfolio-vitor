import { IIconProps } from "@/myTypes"
import React from "react"

interface ISortAscendingIcon extends IIconProps {}

export const SortAscendingIcon: React.FC<ISortAscendingIcon> = ({ size, className, ...rest }) => {
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
      <line
        x1={48}
        y1={128}
        x2={116}
        y2={128}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <line
        x1={48}
        y1={64}
        x2={180}
        y2={64}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <line
        x1={48}
        y1={192}
        x2={100}
        y2={192}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <polyline
        points="144 168 184 208 224 168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <line
        x1={184}
        y1={208}
        x2={184}
        y2={112}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
