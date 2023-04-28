import twc from "tailwindcss/colors"
import { Outfit } from "next/font/google"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import Link from "next/link"
import { HTMLAttributes } from "react"
import { CenteredContainer } from "./CenteredContainer"
const montserrat = Outfit({ subsets: ["latin"] })

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Hero({ className, ...rest }: Props) {
  return (
    <CenteredContainer>
      <section
        className={`mt-[5vw] flex px-6 mdx:px-12 flex-col items-center justify-center ${className}`}
        {...rest}
      >
        <div className={`relative  flex items-center ${montserrat.className}`}>
          <div className="gradient gr alpha hero-01" />
          <div className="gradient gr bravo hero-02" />
          <h1 className="leading-tight sm:text-[5.5rem] text-[12vw] mb-[8vw] sm:mb-0 text-slate-800 font-semibold relative z-10 text-center">
            Seu próximo desenvolvedor{" "}
            <span className="whitespace-nowrap font-black h1-accent">
              Fullstack ;{")"}
            </span>
          </h1>
        </div>
        <p className="relative z-10 mt-4 mb-8 text-center text-zinc-500 inter max-w-[32rem] text-sm sm:text-base">
          Me chamo Vítor Markis, 20 anos, desenvolvedor fullstack React, Node e
          Next, saiba mais sobre mim
        </p>
        <div className="[&_*]:transition-colors [&_*]:duration-300 flex sm:flex-row flex-col gap-4">
          <Link
            href="https://github.com/vitormarkis"
            target="_blank"
            className="h-9 px-16 outline-accent rounded-lg flex items-center jusitfy-center relative border-slate-300 text-neutral-500 border shadow-md group"
          >
            <Github
              className="absolute left-3 group:hover:text-white"
              width={24}
              height={24}
              color={twc.slate["500"]}
            />
            <span>Github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vitor-markis-524945265/"
            target="_blank"
            className="h-9 px-16 outline-accent rounded-lg flex items-center jusitfy-center relative border-slate-300 text-neutral-500 border shadow-md group"
          >
            <LinkedinSquare
              className="absolute left-3 group:hover:text-white"
              width={24}
              height={24}
              color={twc.slate["500"]}
            />
            <span>Linked In</span>
          </Link>
        </div>
      </section>
    </CenteredContainer>
  )
}
