"use client"
import { tags, useFeed } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import moment from "moment"
import Link from "next/link"
import React, { CSSProperties } from "react"
moment.locale("pt-br")
import twc from "tailwindcss/colors"
import st from "@/components/BlogPageSection/ImportanceChooser/styles.module.css"

import { useBlogFeed } from "@/state/blogFeed"
import { useRootContainer } from "@/state/rootContainer"
import { DefaultColors } from "tailwindcss/types/generated/colors"

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
            className="pb-8 mt-8 overflow-hidden last-of-type:border-b-0 border-b md:border-b border-neutral-300"
          >
            <div className={`md:px-6 text-zinc-500 ${post.refs ? "pb-6" : ""}`}>
              <div>
                <div className="flex gap-2 flex-wrap text-xs mb-2">
                  {post.importance.map(tag => {
                    const foundTag = tags.importances.find(imp => imp.importance === tag)
                    if (!foundTag) return null
                    const { color, title } = foundTag
                    return (
                      <p
                        className={`leading-none py-1 px-2 rounded-md ${st.colorful}`}
                        style={
                          {
                            "--color": twc[color]["500"],
                            "--bg-color": twc[color]["100"],
                          } as CSSProperties
                        }
                      >
                        {title}
                      </p>
                    )
                  })}
                </div>
              </div>
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
