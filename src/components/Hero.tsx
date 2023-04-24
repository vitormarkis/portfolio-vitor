import twc from "tailwindcss/colors"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({ subsets: ["latin"] })
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import Link from "next/link"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {

}

export function Hero({}: Props) {
  return (
    <section className="mt-[5vw] flex flex-col items-center justify-center">
      <div className={`relative  flex items-center ${montserrat.className}`}>
        <div className="gradient gr alpha" />
        <div className="gradient gr bravo" />
        <div className="gradient gr charlie" />
        <h1 className="text-slate-800 font-semibold sm:text-[4.3rem] relative z-10 text-center text-[2.75rem]">
          Seu próximo desenvolvedor{" "}
          <span className="whitespace-nowrap font-extrabold h1-accent">
            Fullstack ;{")"}
          </span>
        </h1>
      </div>
      <p className="mt-4 mb-8 text-center text-zinc-500 inter max-w-[32rem] text-sm sm:text-base">
        Me chamo Vítor Markis, 20 anos, desenvolvedor fullstack React, Node e
        Next, saiba mais sobre mim
      </p>
      <div className="[&_*]:transition-colors [&_*]:duration-300 flex sm:flex-row flex-col gap-4">
        <Link
          href="https://github.com/vitormarkis"
          target="_blank"
          className="h-9 px-16 rounded-lg flex items-center jusitfy-center relative border-slate-300 text-neutral-500 border shadow-md group"
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
          className="h-9 px-16 rounded-lg flex items-center jusitfy-center relative border-slate-300 text-neutral-500 border shadow-md group"
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
  )
}
