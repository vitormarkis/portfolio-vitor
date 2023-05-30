"use client"
import { useFeed } from "@/data/feed"
import moment from "moment"
import React from "react"
moment.locale("pt-br")

import { useElementRefs } from "@/state/useElementRefs"
import { XIcon } from "@/components/XIcon"
import clsx from "clsx"
import { IIconProps } from "@/myTypes"
import { useStore } from "@/hooks/useStore"
import { FilterBlogContent } from "@/components/BlogPageSection/FilterBlogContent"
import { BlogPost } from "@/components/BlogPageSection/BlogPost"
import { SeeingFavoritePosts } from "@/components/BlogPageSection/SeeingFavoritePosts"
import { SortBlogContent } from "@/components/BlogPageSection/SortBlogContent"
import { NoPostFoundPlaceholder } from "@/components/BlogPageSection/NoPostFoundPlaceholder"
import { useBlogFeed } from "@/state/blogFeed"
import { useFavoritePosts } from "@/state/favoritePosts"

interface IBlogPageSection extends React.ComponentProps<"div"> {}

export function BlogPageSection({ className, ...rest }: IBlogPageSection) {
  const _cn = ` ${className ?? ""}`
  const { rootRef } = useElementRefs()
  const { feed: allFeed } = useFeed()

  const favoritePosts = useStore(useFavoritePosts, state => state.favoritePosts)
  const seeingFavoritePosts = useStore(useFavoritePosts, state => state.seeingFavoritePosts)

  const { seeingTags, searchInput, isSortingAscending } = useBlogFeed()
  const isSearching = searchInput.length > 0
  const rawFeed =
    seeingFavoritePosts && favoritePosts
      ? allFeed.filter(post => favoritePosts.includes(post.id))
      : allFeed
  const filteredFeed = React.useMemo(
    () => rawFeed.filter(post => post.importance.some(i => seeingTags.includes(i))),
    [seeingTags]
  )
  const feedImportance = seeingTags.length ? filteredFeed : rawFeed
  const searchFeed = isSearching
    ? feedImportance.filter(
        post =>
          post.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          post.text.toLowerCase().includes(searchInput.toLowerCase())
      )
    : feedImportance

  const sortNumber = isSortingAscending ? -1 : 1
  const feed = searchFeed.sort((a, b) =>
    a.created_at > b.created_at ? sortNumber : a.created_at < b.created_at ? sortNumber * -1 : 0
  )

  React.useEffect(() => {
    if (rootRef?.current && rootRef.current.scrollTop > 80) {
      rootRef.current.scrollTo({ top: 80 })
    }
  }, [feed, sortNumber])

  return (
    <div className={"self-center flex w-full justify-center" + _cn} {...rest}>
      <SidebarContainer className="overflow-y-scroll scroll-thin p-6 hidden md:block min-w-[280px] sticky max-h-screen top-0">
        <h2 className="font-medium text-center mb-1">Filtro</h2>
        <FilterBlogContent />
        <h2 className="font-medium text-center mb-1">Ordenar por</h2>
        <SortBlogContent />
      </SidebarContainer>
      <div className="flex flex-col max-w-2xl md:border-l mdx:border-x border-neutral-300 grow shrink w-full">
        {seeingFavoritePosts ? <SeeingFavoritePosts /> : null}
        <div>
          {feed.length ? (
            feed.map(post => <BlogPost key={post.id} post={post} />)
          ) : (
            <NoPostFoundPlaceholder />
          )}
        </div>
      </div>
      <SidebarContainer className="hidden md:block" />
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
    <aside className={"basis-[16rem] shrink-[99999] border-neutral-300" + _cn} {...rest}>
      {children ?? null}
    </aside>
  )
}
