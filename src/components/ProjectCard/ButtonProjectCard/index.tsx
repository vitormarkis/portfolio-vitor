"use client"

import { useElementRefs } from "@/state/useElementRefs"
import Link from "next/link"
import React, { HTMLAttributes } from "react"

interface IButtonProjectCard extends HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode | undefined
  url: string
  text?: string | undefined
  filled?: boolean
  target?: React.HTMLAttributeAnchorTarget | undefined
}

export const ButtonProjectCard = React.forwardRef<HTMLAnchorElement, IButtonProjectCard>(
  ({ children, className, url, text, filled, target, ...rest }, ref) => {
    const { rootRef: elementRef } = useElementRefs()

    const handleClick = () => {
      if (elementRef && elementRef.current && typeof window !== "undefined") {
        sessionStorage.setItem(
          "userVerticalPosition",
          JSON.stringify({ top: elementRef.current.scrollTop })
        )
      }
    }

    return (
      <Link
        href={url}
        ref={ref}
        target={target}
        scroll={false}
        onClick={handleClick}
        className={`grid place-items-center outline-accent rounded-full py-2 text-sm shadow-md ${
          className ?? ""
        } ${
          filled
            ? "bg-black text-white border-t-blue-500 border-y border-b-red-500"
            : "border border-slate-700 text-slate-700"
        }`}
        {...rest}
      >
        {children ?? text}
      </Link>
    )
  }
)
