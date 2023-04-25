import { IFeedPost } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  post: IFeedPost
}

export function FeedPost({ post, className, ...rest }: Props) {
  return (
    <article
      className={`p-3 border-b border-neutral-300 last-of-type:mb-0 last-of-type:border-none mb-6 flex flex-col ${className}`}
      {...rest}
    >
      <div className="flex text-xs items-center mb-1 text-zinc-400">
        <p className="py-0.5 leading-none px-2 rounded-full bg-indigo-100 text-indigo-500 inline-block">
          vitormarkis
        </p>
        <span className="mx-2"> - </span>
        <span className="italic">{post.created_at.slice(2, 10)}</span>
      </div>
      {formatStringToDOM(post.text).map(text => (
        <p className="mb-2 text-sm text-zinc-500 text-justify">{text}</p>
      ))}
    </article>
  )
}