"use client"

import { IFeedPost, tags } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import moment from "moment"
import Link from "next/link"
import React, { CSSProperties } from "react"
moment.locale("pt-br")
import twc from "tailwindcss/colors"
import st from "@/components/BlogPageSection/FilterToolbarPopup/styles.module.css"
import clsx from "clsx"
import { FavoritePostButton } from "@/components/BlogPageSection/FavoritePostButton"

interface IBlogPost extends React.ComponentProps<"article"> {
  post: IFeedPost
}

export function BlogPost({ post, className, ...rest }: IBlogPost) {
  const _cn = ` ${className ?? ""}`

  return (
    <article
      className={clsx(
        "pb-8 mt-8 last-of-type:border-b-0 border-b md:border-b border-neutral-300",
        post.refs && "pb-0",
        _cn
      )}
      {...rest}
    >
      <div className={`md:px-6 text-zinc-500 ${post.refs ? "pb-6" : ""}`}>
        <div className="flex items-start">
          <div className="flex grow gap-2 flex-wrap text-xs mb-2">
            {post.importance.map(tag => {
              const foundTag = tags.importances.find(imp => imp.importance === tag)
              if (!foundTag) return null
              const { color, title } = foundTag
              return (
                <p
                  key={tag}
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
          <div className="shrink-0">
            <FavoritePostButton post={post} />
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
        <div className="bg-zinc-100 flex flex-col gap-3 md:py-6 md:px-6">
          {post.refs.map(ref => (
            <Link
              key={ref.id}
              target="_blank"
              href={ref.url}
              className="outline-accent px-4 py-2 rounded-lg bg-white text-sky-500"
            >
              {ref.title}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  )
}
