"use client"

import { Code, DotsThreeOutline } from "phosphor-react"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import twc from "tailwindcss/colors"
import { JetBrains_Mono, Montserrat } from "next/font/google"
import { projectLinks } from "@/data/project"
const jetbrains = JetBrains_Mono({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="root-height overflow-x-hidden">
      <header className="relative z-10 h-20 text-zinc-800">
        <div className="w-full max-w-7xl px-3 mx-auto h-full flex justify-between items-center">
          <div className="basis-0 grow mdx:hidden">
            <DotsThreeOutline
              weight="bold"
              color={twc.zinc["800"]}
              width={18}
              height={18}
            />
          </div>
          <div className="basis-0 grow mdx:basis-auto  flex items-center justify-center gap-1.5 leading-none">
            <i>
              <Code
                weight="bold"
                color={twc.violet["700"]}
                width={18}
                height={18}
              />
            </i>
            <span className={`font-bold text-base ml-1 ${jetbrains.className}`}>
              <span className="text-violet-700">Vitor.</span>
              <span className="text-texas-500">markis</span>
              <span style={{ color: "#DA67AC" }}>()</span>
            </span>
          </div>
          <nav className="basis-0 grow hidden mdx:flex text-zinc-700 justify-center">
            <ul className="flex text-sm min-w-0 ">
              {projectLinks.map(project => (
                <li
                  key={project.id}
                  className="transition-colors font-medium duration-75 px-6 py-3 rounded-lg hover:bg-texas-100 cursor-pointer"
                >
                  <span className="truncate">{project.name}</span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="basis-0 grow mdx:basis-auto flex justify-end">
            <button className="text-sm shadow-md h-8 border-b border-b-texas-600 border-t border-t-texas-300 px-3 rounded-lg bg-texas-500 text-white">
              Contato
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl w-full mx-auto flex px-6">
        <section className="mt-[5vw] flex flex-col items-center justify-center">
          <div
            className={`relative  flex items-center ${montserrat.className}`}
          >
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
            Me chamo Vítor Markis, 20 anos, desenvolvedor fullstack React, Node
            e Next, saiba mais sobre mim
          </p>
          <div className="[&_*]:transition-colors [&_*]:duration-300 flex sm:flex-row flex-col gap-4">
            <button className="h-9 px-16 rounded-lg relative border-slate-300 text-neutral-500 border shadow-md group">
              <Github
                className="absolute left-3 group:hover:text-white"
                width={24}
                height={24}
                color={twc.slate["500"]}
              />
              <span>Github</span>
            </button>
            <button className="h-9 px-16 rounded-lg relative border-slate-300 text-neutral-500 border shadow-md group">
              <LinkedinSquare
                className="absolute left-3 group:hover:text-white"
                width={24}
                height={24}
                color={twc.slate["500"]}
              />
              <span>Linked In</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
