import React, { HTMLAttributes } from "react"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"
import { Gmail } from "@styled-icons/boxicons-logos/Gmail"
import Link from "next/link"
import { CenteredContainer } from "../CenteredContainer"
import { ContactButtonHollow } from "./ContactButtonHollow"

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
        <div className="text-sm mt-6 flex flex-col gap-3 sm:items-center">
          <Link
            href="https://wa.me/5551982582396"
            target="_blank"
            passHref
            legacyBehavior
          >
            <ContactButtonHollow
              border="border-t-green-300 border-b-green-700"
              borderY
              className="group hover:border-green-500 transition-colors duration-300"
            >
              {/* <div className="absolute inset-0 bg-green-500" />
              <div className="absolute right-0 bottom-4 h-52 w-52 rounded-full bg-green-400 blur-xl" />
              <div className="absolute left-0 top-4 h-44 w-44 rounded-full bg-black/10 blur-xl" /> */}
              <Whatsapp
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-green-500 transition-all duration-300"
              />
              <span className="relative z-10 group-hover:font-medium group-hover:text-green-500 transition-all duration-300">
                51 98258-2396
              </span>
            </ContactButtonHollow>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vitor-markis-524945265/"
            target="_blank"
            passHref
            legacyBehavior
          >
            <ContactButtonHollow
              border="border-t-blue-300 border-b-blue-700"
              borderY
              className="hover:border-blue-500 transition-colors group duration-300"
            >
              {/* <div className="absolute inset-0 bg-blue-500" />
              <div className="absolute right-0 bottom-4 h-48 w-64 rounded-full bg-cyan-500 blur-[50px]" />
              <div className="absolute -left-20 top-4 h-44 w-44 rounded-full bg-indigo-700/70 blur-[36px]" /> */}

              <LinkedinSquare
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-blue-500 transition-all duration-300"
              />
              <span className="relative z-10 group-hover:font-medium group-hover:text-blue-500 transition-all duration-300">
                Linked In
              </span>
            </ContactButtonHollow>
          </Link>
          <Link
            href="mailto:vitormarkis2369@gmail.com"
            target="_blank"
            passHref
            legacyBehavior
          >
            <ContactButtonHollow
              border="border-t-red-200 border-b-red-700"
              borderY
              className="hover:border-red-500 transition-colors group duration-300"
            >
              {/* <div className="absolute inset-0 bg-red-400" />
              <div className="absolute right-0 bottom-4 h-48 w-64 rounded-full bg-rose-500 blur-[50px]" />
              <div className="absolute -left-20 top-4 h-44 w-44 rounded-full bg-red-700/70 blur-[36px]" /> */}

              <Gmail
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-red-500 transition-all duration-300"
              />
              <span className="relative z-10 group-hover:font-medium group-hover:text-red-500 transition-all duration-300">
                vitormarkis2369@gmail.com
              </span>
            </ContactButtonHollow>
          </Link>
        </div>
      </CenteredContainer>
    </div>
  )
}
