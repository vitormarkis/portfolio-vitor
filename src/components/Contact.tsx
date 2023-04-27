import React, { HTMLAttributes } from "react"
import { CenteredContainer } from "./CenteredContainer"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"
import { Gmail } from "@styled-icons/boxicons-logos/Gmail"
import Link from "next/link"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Contact({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <CenteredContainer id="contact" className="p-6">
        <div className="flex flex-col">
          <h2 className="text-slate-800 font-semibold mb-2 text-4xl relative z-10 text-center">
            Contato
          </h2>
          <p className="text-neutral-400 max-w-[17rem] mx-auto text-center text-xs">
            Caso você tenha se interessado e deseja trabalhar comigo, você pode
            entrar em contato
          </p>
        </div>
        <div className="text-sm mt-6 flex flex-col gap-3">
          <Link href="https://wa.me/5551982582396" passHref legacyBehavior>
            <ContactButton border="border-t-green-300 border-b-green-700" borderY>
              <div className="absolute inset-0 bg-green-500" />
              <div className="absolute right-0 bottom-4 h-52 w-52 rounded-full bg-green-400 blur-xl" />
              <div className="absolute left-0 top-4 h-44 w-44 rounded-full bg-black/10 blur-xl" />
              <Whatsapp
                height={24}
                width={24}
                color="#fff"
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
              <span className="relative z-10 text-white">51 98258-2396</span>
            </ContactButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vitor-markis-524945265/"
            passHref
            legacyBehavior
          >
            <ContactButton border="border-t-blue-300 border-b-blue-700" borderY>
              <div className="absolute inset-0 bg-blue-500" />
              <div className="absolute right-0 bottom-4 h-48 w-64 rounded-full bg-cyan-500 blur-[50px]" />
              <div className="absolute -left-20 top-4 h-44 w-44 rounded-full bg-indigo-700/70 blur-[36px]" />

              <LinkedinSquare
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
              <span className="relative z-10">Linked In</span>
            </ContactButton>
          </Link>
          <Link href="mailto:vitormarkis2369@gmail.com" passHref legacyBehavior>
            <ContactButton border="border-t-red-200 border-b-red-700" borderY>
              <div className="absolute inset-0 bg-red-400" />
              <div className="absolute right-0 bottom-4 h-48 w-64 rounded-full bg-rose-500 blur-[50px]" />
              <div className="absolute -left-20 top-4 h-44 w-44 rounded-full bg-red-700/70 blur-[36px]" />

              <Gmail
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
              <span className="relative z-10">vitormarkis2369@gmail.com</span>
            </ContactButton>
          </Link>
        </div>
      </CenteredContainer>
    </div>
  )
}

interface IContactButton extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  border?: string
  borderY?: boolean
}

export function ContactButton({
  className,
  children,
  border,
  borderY = false,
  ...rest
}: IContactButton) {
  return (
    <a
      className={`h-12 relative text-white overflow-hidden flex rounded-lg shadow-sm outline-accent items-center justify-center ${
        className ?? ""
      } ${border ?? "border-neutral-500"} ${borderY ? "border-y" : "border"}`}
      {...rest}
    >
      {children}
    </a>
  )
}
