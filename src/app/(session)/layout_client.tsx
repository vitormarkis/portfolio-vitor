"use client"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useElementRefs } from "@/state/useElementRefs"
import React from "react"

interface ILayoutContainer extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export function LayoutContainer({ children, className, ...rest }: ILayoutContainer) {
  const _cn = ` ${className ?? ""}`
  const ref = React.useRef<HTMLDivElement>(null)
  const { setRootRef: setElementRef } = useElementRefs()

  React.useEffect(() => {
    if (ref.current) setElementRef(ref)
  }, [ref])

  return (
    <div className={"" + _cn} {...rest}>
      <div ref={ref} className="root-height overflow-x-hidden scroll-thin overflow-y-scroll">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
