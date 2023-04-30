"use client"

import { IProjectLink, useProjects } from "@/data/project"
import { DotsThreeOutline, User } from "phosphor-react"
import { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"
import { MobileSidebar } from "./MobileSidebar"
import { Logo } from "./Logo"
import Link from "next/link"
import React from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...rest }: Props) {
  const { projects } = useProjects({ sort: "importance" })
  return (
    <header
      className={`relative z-10 h-20 text-zinc-800 ${className ?? ""}`}
      {...rest}
    >
      <div className="w-full max-w-7xl px-6 mdx:px-12 mx-auto h-full flex justify-between items-center">
        <div className="basis-0 grow mdx:hidden">
          <MobileSidebar>
            <button className="outline-accent p-2 inline-block leading-none hover:bg-texas-100 rounded-lg cursor-pointer">
              <DotsThreeOutline
                weight="bold"
                color={twc.zinc["800"]}
                width={18}
                height={18}
              />
            </button>
          </MobileSidebar>
        </div>
        <div className="basis-0 grow mdx:basis-auto">
          <Logo />
        </div>
        <nav className="basis-0 grow hidden mdx:flex text-zinc-700 justify-center">
          <ul className="flex text-sm min-w-0 ">
          <HeaderNavLink project={{ name: "Blog", path: "/blog" } as IProjectLink} />
            {projects.slice(0, 3).map(project => (
              <HeaderNavLink key={project.id} project={project} />
            ))}
          <HeaderNavLink project={{ name: "Ver todos" } as IProjectLink} href="/projects" />
          </ul>
        </nav>
        <div className="basis-0 grow mdx:basis-auto flex justify-end">
          <Link
            href="#contact"
            scroll={false}
            className="outline-accent p-2 inline-block leading-none hover:bg-texas-100 rounded-lg cursor-pointer"
          >
            <User
              weight="bold"
              color={twc.zinc["800"]}
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

interface IHeaderNavLink extends HTMLAttributes<HTMLLIElement> {
  project: IProjectLink
  href?: string | undefined
}

export const HeaderNavLink = React.forwardRef<HTMLLIElement, IHeaderNavLink>(
  ({ project, href, className, ...rest }, ref) => {
    return (
      <li
        ref={ref}
        className={`transition-colors font-medium duration-75 hover:bg-texas-100 cursor-pointer ${
          className ?? ""
        }`}
        {...rest}
      >
        <Link href={href ?? `/project/${project.path}`} className="flex outline-accent rounded-lg px-6 py-3">
          <span className="truncate">{project.name}</span>
        </Link>
      </li>
    )
  }
)
