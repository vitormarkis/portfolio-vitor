import { IIconProps } from "@/myTypes"
import React from "react"

interface IStarFilledIcon extends IIconProps {}

export function StarFilledIcon({ size, className, ...rest }: IStarFilledIcon) {
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
      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
    </svg>
  )
}
