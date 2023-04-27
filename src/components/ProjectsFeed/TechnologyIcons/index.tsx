"use client"
import { IconTechnology } from "@/components/IconTechnology"
import { IProjectLink } from "@/data/project"
import React, { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"

interface Props extends HTMLAttributes<HTMLDivElement> {
  project: IProjectLink
  iconsSize: number
  color: string
}

export function TechnologyIcons({ className, project, iconsSize, color,...rest }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`} {...rest}>
      {project.technologies.map(tech => (
        <IconTechnology
          key={tech}
          icon={tech}
          width={iconsSize}
          height={iconsSize}
          color={color}
        />
      ))}
    </div>
  )
}
