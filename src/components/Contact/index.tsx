"use client"
import React, { HTMLAttributes } from "react"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"
import { Gmail } from "@styled-icons/boxicons-logos/Gmail"
import Link from "next/link"
import { CenteredContainer } from "../CenteredContainer"
import { ContactButtonHollow } from "./ContactButtonHollow"
import { useElementRefs } from "@/state/useElementRefs"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Contact({ className, ...rest }: Props) {
  const { setContactRef } = useElementRefs()
  const contactRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (contactRef.current) {
      setContactRef(contactRef)
    }
  }, [])

  return (
    <div ref={contactRef} className={`${className ?? ""}`} {...rest}>
      <CenteredContainer id="contact" className="p-6">
        <div className="flex flex-col">
          <h2 className="text-slate-800 font-semibold mb-2 text-4xl relative z-10 text-center">Contato</h2>
          <p className="text-neutral-400 max-w-[17rem] mx-auto text-center text-xs">
            Caso você tenha se interessado e deseja trabalhar comigo, você pode entrar em contato
          </p>
        </div>
        <div className="text-sm mt-6 flex flex-col gap-3 sm:items-center">
          <Link href="https://wa.me/5551982582396" target="_blank" passHref legacyBehavior>
            <ContactButtonHollow
              border="border-t-green-300 border-b-green-700"
              className="hover:border-green-500 focus:outline-green-500 group transition-colors duration-300 sm:max-w-md"
            >
              <Whatsapp
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-green-500 transition-all duration-300"
              />
              <span className="ml-8 relative z-10 group-hover:font-medium group-hover:text-green-500 transition-all duration-300">
                51 98258-2396
              </span>
            </ContactButtonHollow>
          </Link>
          <Link href="https://www.linkedin.com/in/vitor-markis-524945265/" target="_blank" passHref legacyBehavior>
            <ContactButtonHollow
              border="border-t-blue-300 border-b-blue-700"
              className="hover:border-blue-500 focus:outline-blue-500 transition-colors group duration-300 sm:max-w-md"
            >
              <LinkedinSquare
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-blue-500 transition-all duration-300"
              />
              <span className="ml-8 relative z-10 group-hover:font-medium group-hover:text-blue-500 transition-all duration-300">
                Linked In
              </span>
            </ContactButtonHollow>
          </Link>
          <Link href="mailto:vitormarkis2369@gmail.com" target="_blank" passHref legacyBehavior>
            <ContactButtonHollow
              border="border-t-red-200 border-b-red-700"
              className="hover:border-red-500 focus:outline-red-500 transition-colors group duration-300 sm:max-w-md"
            >
              <Gmail
                height={24}
                width={24}
                className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:text-red-500 transition-all duration-300"
              />
              <span className="ml-8 relative z-10 group-hover:font-medium group-hover:text-red-500 transition-all duration-300">
                vitormarkis2369@gmail.com
              </span>
            </ContactButtonHollow>
          </Link>
        </div>
      </CenteredContainer>
    </div>
  )
}
