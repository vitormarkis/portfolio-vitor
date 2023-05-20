"use client"
import { useRootContainer } from "@/state/rootContainer"
import { usePathname } from "next/navigation"
import React from "react"

interface IProjectsLayoutClient {
  children: React.ReactNode
}

export default function ProjectsLayoutClient({ children }: IProjectsLayoutClient) {
  const { elementRef } = useRootContainer()
  const pathname = usePathname()

  React.useEffect(() => {
    if (elementRef && elementRef.current && pathname === "/projects") {
      const top = JSON.parse(sessionStorage.getItem("userVerticalPosition") ?? "false")
      elementRef.current.scrollTo({ ...top })
    }
  }, [elementRef, pathname])

  return <>{children}</>
}
