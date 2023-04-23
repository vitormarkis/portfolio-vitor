"use client"

import { ArticleMedium, Campfire } from "phosphor-react"

export default function Home() {
  return (
    <div className="root-height">
      <header className="relative shadow-lg z-10 h-14">
        <div className="w-full max-w-7xl px-6 mx-auto h-full flex justify-between items-center">
          <div className="flex items-center gap-1.5 ">
            <i>
              <Campfire color="black" width={24} height={24} />
            </i>
            <span className="text-xl font-black">Markis</span>
          </div>
          <div className="">Navbar</div>
        </div>
      </header>
      <main className="max-w-7xl w-full mx-auto flex px-6">
        <section className="h-[calc(100dvh_-_3.5rem)] flex items-center justify-center sm:justify-start">
          <h1 className="text-center sm:text-left max-w-[65rem] text-[3rem] sm:text-[5rem]">Seu próximo desenvolvedor Fullstack ;{")"}</h1>
        </section>
      </main>
    </div>
  )
}
