"use client"
import { tags } from "@/data/feed"
import moment from "moment"
import React from "react"
moment.locale("pt-br")

import { useBlogFeed } from "@/state/blogFeed"
import { useElementRefs } from "@/state/useElementRefs"
import { CheckboxComponent } from "@/components/CheckboxComponent"
import { MagnifyingIcon } from "@/components/MagnifyingIcon"
import clsx from "clsx"
import { useFavoritePosts } from "@/state/favoritePosts"
import { useStore } from "@/hooks/useStore"
import { ClearSearchButton } from "@/components/ClearSearchButton"

export function FilterBlogContent() {
  const { searchInput, setSearchInput, seeingTags, clearTags, addTag } = useBlogFeed()
  const isSearching = searchInput.length > 0

  const favoritePosts = useStore(useFavoritePosts, state => state.favoritePosts)
  const { toggleSeeingFavoritePosts } = useFavoritePosts()
  const seeingFavoritePosts = useStore(useFavoritePosts, state => state.seeingFavoritePosts)

  // const { rootRef } = useElementRefs()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSelectAllFiltersButton = () => {
    const postTags = tags.importances.reduce(
      (acc: string[], item) => (acc.push(item.importance), acc),
      [] as string[]
    )

    clearTags()
    postTags.forEach(addTag)
  }

  const favoritePostsAmount = favoritePosts?.length ? `(${favoritePosts?.length})` : ""

  const handleClearFiltersButton = () => clearTags()

  const handleSeeFavorites = () => {
    toggleSeeingFavoritePosts()
  }

  // React.useEffect(() => {
  //   if (rootRef && rootRef.current && rootRef.current.scrollTop > 20) {
  //     rootRef.current.scrollTo({ top: 80 })
  //   }
  // }, [seeingFavoritePosts])

  return (
    <>
      <div className="flex flex-col gap-3 mb-6">
        {/* input pesquisar */}
        <div className="rounded-lg bg-zinc-50 border border-zinc-300 text-zinc-500 w-full relative">
          <input
            type="text"
            value={searchInput}
            onChange={handleOnChange}
            placeholder="Pesquisar..."
            className="rounded-lg bg-transparent h-full w-full py-[10px] px-[14px] outline-accent text-neutral-700"
          />
          {isSearching ? (
            <ClearSearchButton onClick={() => setSearchInput("")} className="text-neutral-500" />
          ) : (
            <MagnifyingIcon
              height={18}
              width={18}
              className="absolute text-neutral-500 top-1/2 -translate-y-1/2 right-[14px]"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <button
          onClick={handleSeeFavorites}
          className={clsx(
            "active:underline text-left outline-accent leading-none rounded-lg ml-[-10px] py-[10px] pl-[10px]",
            {
              "text-violet-600 font-medium": seeingFavoritePosts,
              "text-neutral-500": !seeingFavoritePosts,
            }
          )}
        >
          Ver favoritos {favoritePostsAmount}
        </button>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex justify-between">
          <button
            onClick={handleSelectAllFiltersButton}
            className="px-1.5 rounded text-sm font-medium text-slate-600 outline-accent active:underline"
          >
            Todos
          </button>
          <button
            onClick={handleClearFiltersButton}
            className="px-1.5 rounded text-sm font-medium text-slate-600 outline-accent active:underline"
          >
            Limpar {seeingTags.length ? `(${seeingTags.length})` : null}
          </button>
        </div>
        <div className="flex flex-col">
          {tags.importances.map(tag => (
            <CheckboxComponent
              key={tag.importance}
              label={tag.title}
              tag={tag.importance}
              theme="dark"
            />
          ))}
        </div>
      </div>
    </>
  )
}
