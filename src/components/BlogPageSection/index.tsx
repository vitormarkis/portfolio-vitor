"use client"
import { useFeed } from "@/data/feed"
import moment from "moment"
import React from "react"
moment.locale("pt-br")

import { useElementRefs } from "@/state/useElementRefs"
import { useStore } from "@/hooks/useStore"
import { FilterBlogContent } from "@/components/BlogPageSection/FilterBlogContent"
import { BlogPost } from "@/components/BlogPageSection/BlogPost"
import { SeeingFavoritePosts } from "@/components/BlogPageSection/SeeingFavoritePosts"
import { SortBlogContent } from "@/components/BlogPageSection/SortBlogContent"
import { NoPostFoundPlaceholder } from "@/components/BlogPageSection/NoPostFoundPlaceholder"
import { useBlogFeed } from "@/state/blogFeed"
import { useFavoritePosts } from "@/state/favoritePosts"
import { UnfavoriteAllPosts } from "@/components/BlogPageSection/UnfavoriteAllPosts"
import { ConfirmDialog } from "@/components/ConfirmDialog"

interface IBlogPageSection extends React.ComponentProps<"div"> {}

export function BlogPageSection({ className, ...rest }: IBlogPageSection) {
  const _cn = ` ${className ?? ""}`
  const { rootRef } = useElementRefs()
  const { feed: feed__allPosts } = useFeed()

  const { removeAllFavoritePosts, toggleSeeingFavoritePosts } = useFavoritePosts()
  const favoritePosts = useStore(useFavoritePosts, state => state.favoritePosts)
  const seeingFavoritePosts = useStore(useFavoritePosts, state => state.seeingFavoritePosts)

  const { seeingTags, searchInput, isSortingAscending } = useBlogFeed()
  const sortNumber = isSortingAscending ? -1 : 1
  const isSearching = searchInput.length > 0

  const handleUnfavoriteAllPosts = () => {
    removeAllFavoritePosts()
    toggleSeeingFavoritePosts()
  }

  const feed__favoritePosts =
    seeingFavoritePosts && favoritePosts
      ? feed__allPosts.filter(post => favoritePosts.includes(post.id))
      : feed__allPosts

  React.useEffect(() => {
    console.log("feed__favoritePosts")
  }, [feed__favoritePosts])

  const feed__checkboxFilterData = React.useMemo(
    () => feed__favoritePosts.filter(post => post.importance.some(i => seeingTags.includes(i))),
    [seeingTags, seeingFavoritePosts]
  )

  React.useEffect(() => {
    console.log("feed__checkboxFilterData")
  }, [feed__checkboxFilterData])

  const feed__checkboxFilter = seeingTags.length ? feed__checkboxFilterData : feed__favoritePosts

  React.useEffect(() => {
    console.log("feed__checkboxFilter")
  }, [feed__checkboxFilter])

  const feed__search = isSearching
    ? feed__checkboxFilter.filter(
        post =>
          post.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          post.text.toLowerCase().includes(searchInput.toLowerCase())
      )
    : feed__checkboxFilter

  React.useEffect(() => {
    console.log("feed_search")
  }, [feed__search])

  const feed = feed__search.sort((a, b) =>
    a.created_at > b.created_at ? sortNumber : a.created_at < b.created_at ? sortNumber * -1 : 0
  )

  React.useEffect(() => {
    console.log("feed")
  }, [feed])

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
        {seeingFavoritePosts ? (
          <div className="flex items-center py-6 md:px-6 pb-0">
            <div className="flex-1" />
            <SeeingFavoritePosts className="flex-1 grow-[5]" />
            <div className="flex-1 flex justify-end">
              {favoritePosts?.length ? (
                <ConfirmDialog
                  title="Tem certeza que deseja desfazer todos favoritos?"
                  description="Uma vez que você desfazer seus favoritos, eles serão perdidos para sempre."
                  handleActionButton={handleUnfavoriteAllPosts}
                >
                  <UnfavoriteAllPosts title="Desfazer todos favoritos" />
                </ConfirmDialog>
              ) : null}
            </div>
          </div>
        ) : null}
        <BlogPostsContainer>
          {feed.length ? (
            feed.map(post => <BlogPost key={post.id} post={post} />)
          ) : (
            <NoPostFoundPlaceholder />
          )}
        </BlogPostsContainer>
      </div>
      <SidebarContainer className="hidden md:block" />
    </div>
  )
}

interface IBlogPostsContainer extends React.ComponentProps<"section"> {
  children: React.ReactNode
}

export function BlogPostsContainer({ children, className, ...rest }: IBlogPostsContainer) {
  const _cn = ` ${className ?? ""}`

  return (
    <section className={"" + _cn} {...rest}>
      {children}
    </section>
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
