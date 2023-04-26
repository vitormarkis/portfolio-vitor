"use client"

import { feed } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import { HTMLAttributes } from "react"
import { FeedPost } from "./FeedPost"
import Button from "./Button"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function BlogShowcase({ className, ...rest }: Props) {
  return (
    <section className={`flex flex-col px-6 ${className}`} {...rest}>
      <div className="mb-5">
      <h2 className="text-slate-800 font-semibold mb-2 text-4xl relative z-10 text-center">
        O que eu estive fazendo...
      </h2>
      <p className="text-neutral-400 max-w-[17rem] mx-auto text-center text-xs">Acompanhe os meus desafios, o que eu venho estudando, o meu progresso e muito mais.</p>

      </div>
      <div className="relative max-w-xl w-full mx-auto">
        {feed.slice(0, 2).map(post => (
          <FeedPost key={post.id} post={post} />
        ))}
        <div className="absolute inset-0 top-[17rem] bg-gradient-to-b from-transparent to-zinc-800">
          <Button text="Ver tudo" className="absolute outline-accent bottom-4 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  )
}
