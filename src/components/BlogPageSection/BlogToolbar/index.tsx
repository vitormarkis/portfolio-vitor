"use client"
import { FilterToolbarPopup } from "@/components/BlogPageSection/FilterToolbarPopup"
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
        <FilterToolbarPopup>
          <button
            className={`z-20 bg-white border border-slate-700 fixed bottom-8 right-8 p-3 shadow-lg shadow-black/20 rounded-full block md:hidden ${
              isFooterVisible ? "hidden" : ""
            }`}
          >
            <FunnelIcon height={24} width={24} className="text-slate-700" />
          </button>
        </FilterToolbarPopup>,
        document.querySelector("#portal")!
      )
    : null
}

interface IFunnelIcon extends React.ComponentProps<"svg"> {
  height: number
  width: number
}

export const FunnelIcon: React.FC<IFunnelIcon> = ({ height, width, className, ...rest }) => {
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
