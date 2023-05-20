import { useFeed } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import moment from "moment"
import Link from "next/link"
import React from "react"

interface IBlogPageSection extends React.ComponentProps<"div"> {}

export function BlogPageSection({ className, ...rest }: IBlogPageSection) {
  const _cn = ` ${className ?? ""}`
  const { feed } = useFeed()

  return (
    <div className={"self-center max-w-2xl" + _cn} {...rest}>
      <div className="flex flex-col gap-8">
        {feed.map(post => (
          <article
            key={post.id}
            className="md:rounded-xl pb-8 md:pb-0 overflow-hidden border-b md:border border-neutral-600 md:border-black"
          >
            <div className={`md:px-6 text-zinc-600 ${post.refs ? "pb-6" : ""}`}>
              <div className="flex items-center">
                <h2 className="text-lg font-medium text-zinc-800">Título do post</h2>
                <span className="mx-2"> - </span>
                <span className="block italic text-neutral-500">
                  {moment(post.created_at).locale("pt-br").fromNow()}
                </span>
              </div>
              {formatStringToDOM(post.text).map((text, i) => (
                <p key={`${text}-${i}`} className="mb-3">
                  {text}
                </p>
              ))}
            </div>
            {post.refs ? (
              <div className="bg-zinc-200 flex flex-col gap-3 p-6">
                {post.refs.map(ref => (
                  <Link
                    key={ref.id}
                    href={ref.url}
                    className="outline-accent px-4 py-2 rounded-lg bg-white text-sky-600"
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
