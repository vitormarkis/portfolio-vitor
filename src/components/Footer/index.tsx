"use client"
import { useProjects } from "@/data/project"
import Link from "next/link"
import React from "react"
import { ContactButtonHollow } from "../Contact/ContactButtonHollow"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import twc from "tailwindcss/colors"
import { Gmail, Whatsapp } from "@styled-icons/simple-icons"
import { useElementInView } from "@/hooks/useElementInView"

interface IFooter extends React.ComponentProps<"footer"> {}

export function Footer({ className, ...rest }: IFooter) {
  const _cn = ` ${className ?? ""}`
  const { projects } = useProjects({ sort: "importance", omit: ["casual"] })
  const footerRef = React.useRef<HTMLDivElement>(null)
  useElementInView({ ref: footerRef })

  return (
    <footer ref={footerRef} className={"bg-black text-white border-t border-white" + _cn} {...rest}>
      <div className="w-full max-w-7xl px-6 mdx:px-12 mx-auto flex flex-col md:flex-row py-12 gap-12">
        <div className="flex-1">
          <h2 className="text-center font-thin tracking-wide text-lg">Navegue</h2>
          <ul className="text-sm flex flex-col">
            <li className="cursor-pointer rounded-lg hover:bg-neutral-900">
              <Link className="px-4 py-2 block" href="/">
                Início
              </Link>
            </li>
            <li className="cursor-pointer rounded-lg hover:bg-neutral-900">
              <Link className="px-4 py-2 block" href="/blog">
                Blog
              </Link>
            </li>
            <li className="cursor-pointer rounded-lg hover:bg-neutral-900">
              <Link className="px-4 py-2 block" href="/projects">
                Projetos
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-center font-thin tracking-wide text-lg">Projetos</h2>
          <ul className="text-sm flex flex-col">
            {projects.map(p => (
              <li key={p.id} className="cursor-pointer rounded-lg hover:bg-neutral-900">
                <Link className="px-4 py-2 block" href={`/project/${p.path}`}>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="mb-4 text-center font-thin tracking-wide text-lg">Contato</h2>
          <ul className="text-sm flex flex-col gap-4">
            <li>
              <Link
                className="w-full h-full"
                href="https://wa.me/5551982582396"
                target="_blank"
                passHref
                legacyBehavior
              >
                <ContactButtonHollow
                  noBorder
                  className="p-3 outline-raw focus:outline-white transition-colors duration-300"
                  color={twc.white}
                >
                  <div className="inset-[-1px] bg-gradient-to-tr from-violet-800 via-black to-fuchsia-500 absolute rounded-[9px]" />
                  <div className="inset-0 bg-black absolute rounded-[10px]" />
                  <Whatsapp
                    height={20}
                    width={20}
                    className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-green-500 transition-all duration-300"
                  />
                  <ButtonText>51 98258-2396</ButtonText>
                </ContactButtonHollow>
              </Link>
            </li>
            <li>
              <Link
                className="w-full h-full"
                href="https://www.linkedin.com/in/vitor-markis-524945265/"
                target="_blank"
                passHref
                legacyBehavior
              >
                <ContactButtonHollow
                  noBorder
                  className="p-3 outline-raw focus:outline-white transition-colors duration-300"
                  color={twc.white}
                >
                  <div className="inset-[-1px] bg-gradient-to-tr from-violet-800 via-black to-fuchsia-500 absolute rounded-[9px]" />
                  <div className="inset-0 bg-black absolute rounded-[10px]" />
                  <LinkedinSquare height={24} width={24} className="absolute top-1/2 -translate-y-1/2 left-3" />
                  <ButtonText>Linked In</ButtonText>
                </ContactButtonHollow>
              </Link>
            </li>
            <li>
              <Link
                className="w-full h-full"
                href="mailto:vitormarkis2369@gmail.com"
                target="_blank"
                passHref
                legacyBehavior
              >
                <ContactButtonHollow
                  noBorder
                  className="p-3 outline-raw focus:outline-white transition-colors duration-300"
                  color={twc.white}
                >
                  <div className="inset-[-1px] bg-gradient-to-tr from-violet-800 via-black to-fuchsia-500 absolute rounded-[9px]" />
                  <div className="inset-0 bg-black absolute rounded-[10px]" />
                  <Gmail
                    height={18}
                    width={18}
                    className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-red-500 transition-all duration-300"
                  />
                  <ButtonText>vitormarkis2369@gmail.com</ButtonText>
                </ContactButtonHollow>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

interface IButtonText extends React.ComponentProps<"span"> {
  children: React.ReactNode
}

export const ButtonText: React.FC<IButtonText> = ({ children, className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <span className={"relative z-10 ml-8" + _cn} {...rest}>
      {children}
    </span>
  )
}
