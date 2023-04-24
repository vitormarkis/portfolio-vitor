"use client"

// import { Campfire } from "phosphor-react"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import twc from "tailwindcss/colors"

export default function Home() {
  return (
    <div className="root-height overflow-x-hidden">
      <header className="relative z-10 h-14 bg-white">
        <div className="w-full max-w-7xl px-6 mx-auto h-full flex justify-between items-center">
          <div className="flex items-center gap-1.5 ">
            <i>{/* <Campfire color="black" width={24} height={24} /> */}</i>
            <span className="text-xl font-black">Markis</span>
          </div>
          <div className="">Navbar</div>
        </div>
      </header>
      <main className="max-w-7xl w-full mx-auto flex px-6">
        <section className="h-52 mt-32 flex flex-col items-center justify-center">
          <div className="relative grow flex items-center">
            <div className="gradient gr alpha" />
            <div className="gradient gr bravo" />
            <div className="gradient gr charlie" />
            <h1 className="text-slate-800 font-medium sm:text-[4.3rem] relative z-10 text-center text-[2.75rem]">
              Seu próximo desenvolvedor{" "}
              <span className="whitespace-nowrap font-semibold h1-accent">
                Fullstack ;{")"}
              </span>
            </h1>
          </div>
          <p className="mt-4 mb-8 text-center text-slate-700 inter max-w-[32rem] text-sm sm:text-base">
            Me chamo Vítor Markis, 20 anos, desenvolvedor fullstack React, Node
            e Next, saiba mais sobre mim
          </p>
          <div className="[&_*]:transition-colors [&_*]:duration-300 flex sm:flex-row flex-col gap-4">
            <button className="h-9 px-16 rounded-lg relative border-neutral-200 border shadow-md group">
              <Github
                className="absolute left-3 group:hover:text-white"
                width={24}
                height={24}
                color={twc.slate["700"]}
              />
              <span>Github</span>
            </button>
            <button className="h-9 px-16 rounded-lg relative border-neutral-200 border shadow-md group">
              <LinkedinSquare
                className="absolute left-3 group:hover:text-white"
                width={24}
                height={24}
                color={twc.slate["700"]}
              />
              <span>Linked In</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
