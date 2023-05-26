import { IFeedPost } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import { HTMLAttributes } from "react"
import moment from "moment"
import "moment/locale/pt-br"
import Link from "next/link"
import { PostTag } from "@/components/PostTag"
moment.locale("pt-br")

interface Props extends HTMLAttributes<HTMLDivElement> {
  post: IFeedPost
}

export function FeedPost({ post, className, ...rest }: Props) {
  return (
    <article
      className={`p-3 border-b border-neutral-300 last-of-type:mb-0 last-of-type:border-none mb-6 flex flex-col ${className}`}
      {...rest}
    >
      <div className="flex gap-2 flex-wrap text-xs mb-2">
        {post.importance.map(tag => (
          <PostTag tag={tag} />
        ))}
      </div>
      <div className="flex items-center mb-1 text-zinc-400">
        <h2 className="font-medium text-zinc-600">{post.title}</h2>
        <span className="block mx-2">{" - "}</span>
        <span className="italic text-xs">{moment(post.created_at).locale("pt-br").fromNow()}</span>
      </div>
      {formatStringToDOM(post.text).map((text, i) => (
        <p key={`${text}-${i}`} className="mb-2 text-sm text-zinc-500">
          {text}
        </p>
      ))}
      {post.refs ? (
        <div className="flex flex-wrap gap-2 text-sm bg-neutral-200 py-2 px-2 rounded-xl">
          {post.refs.map(ref => (
            <Link
              target="_blank"
              key={ref.id}
              href={ref.url}
              className="outline-accent px-3 py-1.5 rounded-lg bg-white text-sky-500 underline visited:text-indigo-600"
            >
              {ref.title}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  )
}
