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
import { useElementRefs } from "@/state/useElementRefs"
import { CheckboxComponent } from "@/components/CheckboxComponent"

interface IBlogPageSection extends React.ComponentProps<"div"> {}

export function BlogPageSection({ className, ...rest }: IBlogPageSection) {
  const _cn = ` ${className ?? ""}`
  const { rootRef } = useElementRefs()
  const { feed: rawFeed } = useFeed()
  const { seeingTags } = useBlogFeed()
  const filteredFeed = rawFeed.filter(post => post.importance.some(i => seeingTags.includes(i)))
  const feed = seeingTags.length ? filteredFeed : rawFeed

  React.useEffect(() => {
    if (rootRef?.current && rootRef.current.scrollTop > 80) {
      rootRef.current.scrollTo({ top: 80 })
    }
  }, [feed])

  return (
    <div className={"self-center flex w-full justify-center" + _cn} {...rest}>
      <SidebarContainer></SidebarContainer>
      <div className="flex flex-col max-w-2xl grow shrink">
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
        ))}
      </div>
      <SidebarContainer className="px-6">
        <h2 className="font-medium text-center mb-6">Filtro</h2>
        <div className="flex flex-col gap-3">
          {tags.importances.map(tag => (
            <CheckboxComponent key={tag.importance} label={tag.title} tag={tag.importance} theme="dark" />
          ))}
        </div>
      </SidebarContainer>
    </div>
  )
}

/**
 * Sidebar Container
 */
interface ISidebarContainer extends React.ComponentProps<"aside"> {
  children?: React.ReactNode | undefined
}

export function SidebarContainer({ children, className, ...rest }: ISidebarContainer) {
  const _cn = ` ${className ?? ""}`

  return (
    <aside className={"basis-[15rem] shrink-[99999] border-x border-neutral-500" + _cn} {...rest}>
      {children ?? null}
    </aside>
  )
}
