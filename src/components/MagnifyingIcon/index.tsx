import React from "react"

interface IMagnifyingIcon extends React.ComponentProps<"svg"> {
  height: number
  width: number
}

export const MagnifyingIcon: React.FC<IMagnifyingIcon> = ({ height, width, className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 256 256"
      className={"" + _cn}
      {...rest}
    >
      <rect width="256" height="256" fill="none" />
      <circle
        cx="112"
        cy="112"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <line
        x1="168.57"
        y1="168.57"
        x2="224"
        y2="224"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </svg>
  )
}
