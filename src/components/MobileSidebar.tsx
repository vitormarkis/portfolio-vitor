"use client"

import { IProjectLink, useProjects } from "@/data/project"
import * as Dialog from "@radix-ui/react-dialog"
import { Montserrat } from "next/font/google"
import Link from "next/link"
import { Phone } from "phosphor-react"
import React, { HTMLAttributes } from "react"
import ReactDOM from "react-dom"
import { Logo } from "./Logo"
import { usePathname } from "next/navigation"
const montserrat = Montserrat({ subsets: ["latin"] })

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function MobileSidebar({ children, className, ...rest }: Props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [hasDocument, setHasDocument] = React.useState(false)
  const { projects } = useProjects({ sort: "importance", omit: ["casual"] })
  const pathname = usePathname()

  React.useEffect(() => {
    setHasDocument(true)
  }, [])

  React.useEffect(() => {
    setIsModalOpen(false)
  }, [pathname])

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      {hasDocument
        ? ReactDOM.createPortal(
            <Dialog.Content className={`absolute flex inset-0 z-50 ${className ?? ""}`} {...rest}>
              <Dialog.Close className="absolute inset-0 bg-black/10 outline-none" />
              <div className="backdrop-blur-lg bg-gradient-to-b from-white border-r border-neutral-300 shadow-lg z-50 to-transparent flex-col absolute inset-0 flex w-full max-w-[80vw]">
                <div className="p-6">
                  <Logo width="11rem" className="mx-auto " />
                </div>
                <nav className="p-6 text-zinc-700 text-sm">
                  <h3 className={`text-center text-3xl tracking-wider mb-6 text-black ${montserrat.className}`}>
                    Navegue
                  </h3>
                  <nav className="mb-6">
                    <ul className="flex flex-col">
                      <SidebarNavLink project={{ name: "Blog" } as IProjectLink} href="/blog" />
                    </ul>
                  </nav>
                  <nav className="mb-6">
                    <h4 className={"text-xl text-black font-semibold mb-1" + " " + montserrat.className}>Projetos</h4>
                    <ul className="flex-col flex">
                      {projects.map(project => (
                        <SidebarNavLink key={project.id} project={project} />
                      ))}
                      <SidebarNavLink project={{ name: "Ver todos" } as IProjectLink} href="/projects" />
                    </ul>
                  </nav>
                  <Link
                    href="#contact"
                    scroll={false}
                    className="outline-accent relative transition-colors font-medium duration-75 px-3 py-2 rounded-lg cursor-pointer flex items-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-texas-100 animate-pulse z-[-1]" />
                    <span>Entrar em contato</span>
                    <Phone size={18} weight="duotone" className="ml-auto animate-bounce -mb-1" />
                  </Link>
                </nav>
              </div>
            </Dialog.Content>,
            document.querySelector("#portal")!
          )
        : null}
    </Dialog.Root>
  )
}

interface ISidebarNavLink extends HTMLAttributes<HTMLLIElement> {
  project: IProjectLink
  href?: string | undefined
}

export const SidebarNavLink: React.FC<ISidebarNavLink> = ({ href, className, project, ...rest }) => (
  <li
    className={`transition-colors font-medium duration-75 hover:bg-texas-100 cursor-pointer ${className ?? ""}`}
    {...rest}
  >
    <Link href={href ?? `/project/${project.path}`} className="outline-accent flex px-3 py-2 rounded-lg">
      <span className="truncate">{project.name}</span>
    </Link>
  </li>
)
