"use client"
import React from "react"
import ReactDOM from "react-dom"

interface IBlogToolbar extends React.ComponentProps<"div"> {}

export function BlogToolbar({ className, ...rest }: IBlogToolbar) {
  const _cn = ` ${className ?? ""}`
  const [hasDocument, setHasDocument] = React.useState(false)

  React.useEffect(() => {
    setHasDocument(true)
  }, [])

  return hasDocument
    ? ReactDOM.createPortal(
        <div
          className={`flex h-12 bg-red-500 fixed bottom-0 left-0 right-0 z-50 md:hidden`.trim() + _cn}
          {...rest}
        ></div>,
        document.querySelector("#portal")!
      )
    : null
}
