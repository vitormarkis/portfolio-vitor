import React from "react"
import { Prisma } from "@styled-icons/simple-icons/Prisma"
import { Mysql } from "@styled-icons/simple-icons/Mysql"
import { Tailwindcss } from "@styled-icons/simple-icons/Tailwindcss"
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo"
import { Express } from "@styled-icons/simple-icons/Express"
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs"
import { ProjectTechnologies } from "@/data/project"
import { StyledIconProps } from "@styled-icons/styled-icon/index"
import { DiMysql } from "react-icons/di"
import { IconBaseProps } from "react-icons"

interface StyProps extends StyledIconProps {}
interface RIcoProps extends IconBaseProps {
  height: number
  width: number
}

interface IconProps extends StyProps {
  icon: ProjectTechnologies
}

export function IconTechnology({ className, icon, ...rest }: IconProps) {
  console.log(rest.height)
  
  const icons: Record<ProjectTechnologies, any> = {
    NEXT: (props: StyProps) => <Nextdotjs {...props} />,
    EXPRESS: (props: StyProps) => <Express {...props} />,
    PRISMA: (props: StyProps) => <Prisma {...props} />,
    TAILWINDCSS: (props: StyProps) => <Tailwindcss {...props} />,
    MYSQL: ({ height, width, ...props }: RIcoProps) => (
      <DiMysql
        {...props}
        height={height * 3}
        width={width * 3}
        title="MySQL"
      />
    ),
    REACT: (props: StyProps) => <ReactLogo {...props} />,
  }

  const Icon: React.FC<StyProps> = icons[icon]
  return <Icon className={`${className}`} {...rest} />
}
