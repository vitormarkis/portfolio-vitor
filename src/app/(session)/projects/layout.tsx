import ProjectsLayoutClient from "./layout_client"
import React from "react"

interface IProjectsLayout {
  children: React.ReactNode
}

export default function ProjectsLayout({ children }: IProjectsLayout) {
  return <ProjectsLayoutClient>{children}</ProjectsLayoutClient>
}
