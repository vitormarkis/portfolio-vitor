"use client"
import { useElementScrollPosition } from "@/components/GoToTopButton/useElementScrollPosition"
import { useFooterVisibility } from "@/state/toolbarVisibility"
import { useElementRefs } from "@/state/useElementRefs"
import React from "react"
import { createPortal } from "react-dom"
import twc from "tailwindcss/colors"

interface IGoToTopButton extends React.ComponentProps<"button"> {
  visiblePosition?: number | undefined
  verticalOffset?: number | undefined
}

export function GoToTopButton({ verticalOffset, visiblePosition, className, ...rest }: IGoToTopButton) {
  const _cn = ` ${className ?? ""}`
  const { rootRef } = useElementRefs()
  const [has, setHas] = React.useState(false)
  const { scrollPosition } = useElementScrollPosition({ ref: rootRef })
  const { isFooterVisible } = useFooterVisibility()
  const offsetGap = verticalOffset ? 1 * verticalOffset * 32 : 32
  const customBottomOffset = isFooterVisible ? offsetGap : null

  const isVisible = visiblePosition ? scrollPosition > visiblePosition : scrollPosition > 680

  const handleGoToTopClick = () => {
    if (rootRef && rootRef.current) {
      rootRef.current.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  React.useEffect(() => {
    setHas(true)
  }, [])

  return !has
    ? null
    : createPortal(
        <button
          onClick={handleGoToTopClick}
          className={
            "z-20 bg-white border border-slate-700 fixed right-8 md:right-12 p-3 shadow-lg shadow-black/20 rounded-full" +
            _cn +
            ` ${isVisible ? "flex" : "hidden"}`
          }
          style={customBottomOffset ? { bottom: customBottomOffset } : undefined}
          {...rest}
        >
          <svg
            height={24}
            width={24}
            color={twc["slate"]["700"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <polyline
              points="48 208 128 128 208 208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <polyline
              points="48 128 128 48 208 128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </svg>
        </button>,
        document.querySelector("#portal")!
      )
}
