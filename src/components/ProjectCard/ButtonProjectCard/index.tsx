"use client"

import { useRootContainer } from "@/state/rootContainer"
import Link from "next/link"
import React, { HTMLAttributes } from "react"

interface IButtonProjectCard extends HTMLAttributes<HTMLButtonElement> {
  url: string
  text: string
  filled?: boolean
  target?: React.HTMLAttributeAnchorTarget | undefined
}

export const ButtonProjectCard = React.forwardRef<HTMLAnchorElement, IButtonProjectCard>(
  ({ className, url, text, filled, target, ...rest }, ref) => {
    const { elementRef } = useRootContainer()

    const handleClick = () => {
      if (elementRef && elementRef.current && typeof window !== "undefined") {
        sessionStorage.setItem("userVerticalPosition", JSON.stringify({ top: elementRef.current.scrollTop }))
      }
    }

    return (
      <Link href={url} ref={ref} target={target} scroll={false} onClick={handleClick} className="flex">
        <button
          className={`outline-accent rounded-full px-8 py-2 text-sm shadow-md inline-block ${className ?? ""} ${
            filled
              ? "bg-black text-white border-t-blue-500 border-y border-b-red-500"
              : "border border-slate-700 text-slate-700"
          }`}
          {...rest}
        >
          {text}
        </button>
      </Link>
    )
  }
)

type Apple = {
  banana: "user" | "admin"
}

type Second = Apple["banana"]
