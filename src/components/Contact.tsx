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
      <CenteredContainer className="p-6">
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
            <ContactButton>
              <Whatsapp
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
              <span>51 98258-2396</span>
            </ContactButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vitor-markis-524945265/"
            passHref
            legacyBehavior
          >
            <ContactButton>
              <LinkedinSquare
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
              <span>Linked In</span>
            </ContactButton>
          </Link>
          <Link href="mailto:vitormarkis2369@gmail.com" passHref legacyBehavior>
            <ContactButton>
              <Gmail
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
              <span>vitormarkis2369@gmail.com</span>
            </ContactButton>
          </Link>
        </div>
      </CenteredContainer>
    </div>
  )
}

interface IContactButton extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function ContactButton({
  className,
  children,
  ...rest
}: IContactButton) {
  return (
    <a
      className={`h-12 relative flex rounded-lg border border-neutral-500 shadow-md outline-accent items-center justify-center text-zinc-600 ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </a>
  )
}
