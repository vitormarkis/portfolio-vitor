"use client"
import { ImportanceChooser } from "@/components/BlogPageSection/ImportanceChooser"
import { useElementInView } from "@/hooks/useElementInView"
import { useFooterVisibility } from "@/state/toolbarVisibility"
import React from "react"
import ReactDOM from "react-dom"

interface IBlogToolbar extends React.ComponentProps<"div"> {}

export function BlogToolbar({ className, ...rest }: IBlogToolbar) {
  const _cn = ` ${className ?? ""}`
  const [hasDocument, setHasDocument] = React.useState(false)
  const { isFooterVisible } = useFooterVisibility()

  React.useEffect(() => {
    setHasDocument(true)
  }, [])

  return hasDocument
    ? ReactDOM.createPortal(
        <div
          className={
            `justify-around items-center py-3 border border-stone-300 bg-white shadow-md fixed bottom-3 left-6 right-6 z-20 rounded-xl md:hidden ${
              isFooterVisible ? "hidden" : "flex"
            }` + _cn
          }
          {...rest}
        >
          <ImportanceChooser>
            <div className="p-2 rounded-lg hover:bg-zinc-200 cursor-pointer">
              <FunnelIcon />
            </div>
          </ImportanceChooser>
          <div className="p-2 rounded-lg hover:bg-zinc-200 cursor-pointer">
            <FunnelIcon />
          </div>
          <div className="p-2 rounded-lg hover:bg-zinc-200 cursor-pointer">
            <FunnelIcon />
          </div>
        </div>,
        document.querySelector("#portal")!
      )
    : null
}

export function FunnelIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height={24} width={24}>
      <rect width="256" height="256" fill="none" />
      <path
        d="M34.1,61.38A8,8,0,0,1,40,48H216a8,8,0,0,1,5.92,13.38l-67.74,72.31a8,8,0,0,0-2.16,5.47v55.49a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V139.16a8,8,0,0,0-2.16-5.47Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </svg>
  )
}
