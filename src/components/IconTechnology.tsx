import React from "react"
import { Prisma } from "@styled-icons/simple-icons/Prisma"
import { Mysql } from "@styled-icons/simple-icons/Mysql"
import { Tailwindcss } from "@styled-icons/simple-icons/Tailwindcss"
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo"
import { Express } from "@styled-icons/simple-icons/Express"
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs"
import { Googlesheets } from "@styled-icons/simple-icons/Googlesheets"
import { Vercel } from "@styled-icons/simple-icons/Vercel"
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents"
import { ProjectTechnologies } from "@/data/project"
import { StyledIconProps } from "@styled-icons/styled-icon/index"

interface StyProps extends StyledIconProps {}

interface IconProps extends StyProps {
  icon: ProjectTechnologies
}

export function IconTechnology({ className, icon, ...rest }: IconProps) {
  const icons: Record<ProjectTechnologies, any> = {
    NEXT: (props: StyProps) => <Nextdotjs {...props} />,
    EXPRESS: (props: StyProps) => <Express {...props} />,
    PRISMA: (props: StyProps) => <Prisma {...props} />,
    TAILWINDCSS: (props: StyProps) => <Tailwindcss {...props} />,
    MYSQL: (props: StyProps) => <Mysql {...props} />,
    REACT: (props: StyProps) => <ReactLogo {...props} />,
    GOOGLE_SHEETS: (props: StyProps) => <Googlesheets {...props} />,
    STYLED_COMPONENTS: (props: StyProps) => <Styledcomponents {...props} />,
    VERCEL: (props: StyProps) => <Vercel {...props} />,
  }

  const Icon: React.FC<StyProps> = icons[icon]
  return <Icon className={`${className ?? ""}`} {...rest} />
}
