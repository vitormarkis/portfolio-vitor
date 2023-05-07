import React, { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"

interface IContactButtonHollow extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  border?: string | undefined
  borderY?: boolean | undefined
  noBorder?: boolean | undefined
  color?: string | undefined
}

export const ContactButtonHollow = React.forwardRef<HTMLAnchorElement, IContactButtonHollow>(function (
  { noBorder, className, color, children, ...rest },
  ref
) {
  return (
    <a
      className={`h-12 relative sm:max-w-md sm:w-full bg-white flex rounded-lg shadow-sm outline-raw items-center justify-center ${
        className ?? ""
      } ${noBorder ? "" : "border-neutral-500 border"}
      ${color ?? twc.neutral["600"]}
      `}
      ref={ref}
      {...rest}
    >
      {children}
    </a>
  )
})
