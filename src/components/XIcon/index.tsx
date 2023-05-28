import React from "react"

interface IXIcon extends React.ComponentProps<"svg"> {
  height: number
  width: number
}

export const XIcon: React.FC<IXIcon> = ({ height, width, className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height={height}
      width={width}
      className={"" + _cn}
      {...rest}
    >
      <rect width="256" height="256" fill="none" />
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </svg>
  )
}
