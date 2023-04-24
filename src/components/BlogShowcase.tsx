"use client"

import { feed } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function BlogShowcase({ className, ...rest }: Props) {
  return (
    <section className={`flex flex-col ${className}`} {...rest}>
      <h2 className="text-slate-800 mb-5 font-semibold md:text-4xl text-2xl relative z-10 text-center">
        O que eu estive fazendo...
      </h2>
      <div className="relative max-w-xl w-full mx-auto">
        {feed.slice(0, 2).map(post => {
          console.log(JSON.stringify(post.text))
          return (
            <article
              key={post.id}
              className="p-3 border-b border-neutral-300 mb-6 flex flex-col"
            >
              <div className="flex text-xs items-center mb-1 text-zinc-400">
                <p className="py-0.5 leading-none px-2 rounded-full bg-indigo-100 text-indigo-500 inline-block">
                  vitormarkis
                </p>
                <span className="mx-2"> - </span>
                <span className="italic">{post.created_at.slice(2, 10)}</span>
              </div>
              {formatStringToDOM(post.text).map(text => (
                <p className="mb-2 text-sm text-zinc-600 text-justify">{text}</p>
              ))}
            </article>
          )
        })}
        <div className="absolute inset-0 top-[22rem] bg-gradient-to-b from-transparent to-zinc-800">
          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm shadow-md h-8 border-b border-b-texas-600 border-t border-t-texas-300 px-3 rounded-lg bg-texas-500 text-white">
            Ver mais
          </button>
        </div>
      </div>
    </section>
  )
}
