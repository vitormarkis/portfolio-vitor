"use client"
import { useFeed } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import moment from "moment"
import Link from "next/link"
import React from "react"

import { useBlogFeed } from "@/state/blogFeed"
import { useRootContainer } from "@/state/rootContainer"

interface IBlogPageSection extends React.ComponentProps<"div"> {}

export function BlogPageSection({ className, ...rest }: IBlogPageSection) {
  const _cn = ` ${className ?? ""}`
  const { elementRef } = useRootContainer()
  const { feed: rawFeed } = useFeed()
  const { seeingTags } = useBlogFeed()
  const filteredFeed = rawFeed.filter(post => post.importance.some(i => seeingTags.includes(i)))
  const feed = seeingTags.length ? filteredFeed : rawFeed

  React.useEffect(() => {
    if (elementRef?.current) {
      elementRef.current.scrollTo({ top: 80 })
    }
  }, [feed])

  return (
    <div className={"self-center max-w-2xl" + _cn} {...rest}>
      <div className="flex flex-col">
        {feed.map(post => (
          <article
            key={post.id}
            className="pb-8 mt-8 overflow-hidden last-of-type:border-b-0 border-b md:border-b border-neutral-600 md:border-zinc-500"
          >
            <div className={`md:px-6 text-zinc-500 ${post.refs ? "pb-6" : ""}`}>
              <div className="flex flex-col md:flex-row">
                <h2 className="text-lg font-semibold text-zinc-800">{post.title}</h2>
                <div className="flex items-center self-end">
                  <span className="mx-2 hidden md:inline"> - </span>
                  <span className="block italic text-neutral-500 text-sm md:text-base whitespace-nowrap">
                    {moment(post.created_at).locale("pt-br").fromNow()}
                  </span>
                </div>
              </div>
              {formatStringToDOM(post.text).map((text, i) => (
                <p key={`${text}-${i}`} className="mb-3">
                  {text}
                </p>
              ))}
            </div>
            {post.refs ? (
              <div className="bg-zinc-100 flex flex-col gap-3 py-6 md:px-6">
                {post.refs.map(ref => (
                  <Link
                    key={ref.id}
                    target="_blank"
                    href={ref.url}
                    className="outline-accent px-4 py-2 md:rounded-lg bg-white text-sky-500"
                  >
                    {ref.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}
