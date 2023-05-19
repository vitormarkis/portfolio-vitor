"use client"
import { useRootContainer } from "@/state/rootContainer"
import React from "react"

interface IProjectsLayout {
  children: React.ReactNode
}

export default function ProjectsLayout({ children }: IProjectsLayout) {
  const { elementRef } = useRootContainer()

  console.log("elementRef?")
  console.log(elementRef)

  return children
}
