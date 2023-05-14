import { IFeedPost } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import { HTMLAttributes } from "react"
import moment from "moment"
import "moment/locale/pt-br"
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
      <div className="flex text-xs items-center mb-1 text-zinc-400">
        <p className="py-0.5 leading-none px-2 rounded-full bg-indigo-100 text-indigo-500 inline-block">vitormarkis</p>
        <span className="mx-2"> - </span>
        <span className="italic">{moment(post.created_at).locale("pt-br").fromNow()}</span>
      </div>
      {formatStringToDOM(post.text).map((text, i) => (
        <p key={`${text}-${i}`} className="mb-2 text-sm text-zinc-500">
          {text}
        </p>
      ))}
    </article>
  )
}
