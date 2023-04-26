import React from "react"
import { Prisma } from "@styled-icons/simple-icons/Prisma"
import { Mysql } from "@styled-icons/simple-icons/Mysql"
import { Tailwindcss } from "@styled-icons/simple-icons/Tailwindcss"
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo"
import { Express } from "@styled-icons/simple-icons/Express"
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs"
import { ProjectTechnologies } from "@/data/project"
import { StyledIconBase } from "@styled-icons/styled-icon/index"

type IStyledIconBase = typeof StyledIconBase

interface Props extends IStyledIconBase {
  className?: string
}

interface IconProps extends Props {
  icon: ProjectTechnologies
}

export function IconTechnology({ className, icon, ...rest }: IconProps) {
  const icons: Record<ProjectTechnologies, React.FC> = {
    NEXT: props => <Nextdotjs {...props} />,
    EXPRESS: props => <Express {...props} />,
    PRISMA: props => <Prisma {...props} />,
    TAILWINDCSS: props => <Tailwindcss {...props} />,
    MYSQL: props => <Mysql {...props} />,
    REACT: props => <ReactLogo {...props} />,
  }

  const Icon: React.FC<Props> = icons[icon]
  return <Icon className={`${className}`} {...rest} />
}
