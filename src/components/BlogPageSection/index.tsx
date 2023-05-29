"use client"
import { tags, useFeed } from "@/data/feed"
import { formatStringToDOM } from "@/helpers"
import moment from "moment"
import Link from "next/link"
import React, { CSSProperties, SVGProps } from "react"
moment.locale("pt-br")
import twc from "tailwindcss/colors"
import st from "@/components/BlogPageSection/FilterToolbarPopup/styles.module.css"
import local_st from "@/components/BlogPageSection/styles.module.css"

import { useBlogFeed } from "@/state/blogFeed"
import { useElementRefs } from "@/state/useElementRefs"
import { CheckboxComponent } from "@/components/CheckboxComponent"
import { MagnifyingIcon } from "@/components/MagnifyingIcon"
import { XIcon } from "@/components/XIcon"
import { SortAscendingIcon } from "@/components/SortAscendingIcon"
import { SortDescendingIcon } from "@/components/SortDescendingIcon"
import clsx from "clsx"
import { IIconProps } from "@/myTypes"
import { NoPostFoundPlaceholder } from "@/components/BlogPageSection/NoPostFoundPlaceholder"

interface IBlogPageSection extends React.ComponentProps<"div"> {}

export function BlogPageSection({ className, ...rest }: IBlogPageSection) {
  const _cn = ` ${className ?? ""}`
  const { rootRef } = useElementRefs()
  const { feed: rawFeed } = useFeed()
  const { seeingTags, searchInput, isSortingAscending } = useBlogFeed()
  const isSearching = searchInput.length > 0
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
        {feed.length ? (
          feed.map(post => (
            <article
              key={post.id}
              className={clsx(
                "pb-8 mt-8 overflow-hidden last-of-type:border-b-0 border-b md:border-b border-neutral-300",
                post.refs && "pb-0"
              )}
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
          ))
        ) : (
          <NoPostFoundPlaceholder />
        )}
      </div>
      <SidebarContainer className="hidden md:block"></SidebarContainer>
    </div>
  )
}

export function FilterBlogContent() {
  const { searchInput, setSearchInput, seeingTags, clearTags, addTag } = useBlogFeed()
  const isSearching = searchInput.length > 0

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSelectAllFiltersButton = () => {
    const postTags = tags.importances.reduce((acc: string[], item) => (acc.push(item.importance), acc), [] as string[])

    clearTags()
    postTags.forEach(addTag)
  }

  const handleClearFiltersButton = () => clearTags()

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
            <ClearSearchButton className="text-neutral-500" />
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
        <div className="flex justify-between">
          <button
            onClick={handleSelectAllFiltersButton}
            className="p-0 m-0 text-sm font-medium text-slate-600 active:underline"
          >
            Todos
          </button>
          <button
            onClick={handleClearFiltersButton}
            className="p-0 m-0 text-sm font-medium text-slate-600 active:underline"
          >
            Limpar {seeingTags.length ? `(${seeingTags.length})` : null}
          </button>
        </div>
        <div className="flex flex-col">
          {tags.importances.map(tag => (
            <CheckboxComponent key={tag.importance} label={tag.title} tag={tag.importance} theme="dark" />
          ))}
        </div>
      </div>
    </>
  )
}

export function SortBlogContent() {
  const { isSortingAscending, setIsSortingAscending } = useBlogFeed()
  return (
    <>
      <div className="flex flex-col mb-6">
        <OptionButton
          Icon={SortDescendingIcon}
          active={isSortingAscending}
          activeColor={twc.violet["600"]}
          text="Data crescente"
          activeFontWeight="500"
          iconSize={20}
          onClick={() => (isSortingAscending ? null : setIsSortingAscending(true))}
        />
        <OptionButton
          Icon={SortAscendingIcon}
          active={!isSortingAscending}
          activeColor={twc.violet["600"]}
          text="Data decrescente"
          activeFontWeight="500"
          iconSize={20}
          onClick={() => (isSortingAscending ? setIsSortingAscending(false) : null)}
        />
      </div>
    </>
  )
}

/**
 * Sidebar Option Button
 */

interface IOptionButton extends React.ComponentProps<"button"> {
  active?: boolean | undefined
  activeColor: string
  activeFontWeight?: number | string | undefined
  disabledColor?: string | undefined
  iconSize?: number | undefined
  Icon: React.FC<IIconProps>
  text: string
}

export const OptionButton: React.FC<IOptionButton> = ({
  text,
  active,
  iconSize,
  disabledColor,
  activeFontWeight,
  activeColor,
  Icon,
  className,
  onClick,
  ...rest
}) => {
  const _cn = ` ${className ?? ""}`
  const textColor = active ? activeColor : disabledColor ?? twc["zinc"]["500"]
  const textWeight = active ? activeFontWeight : "400"

  return (
    <button
      onClick={onClick}
      className={clsx("rounded-md outline-none py-1 flex items-center", local_st.variables, _cn)}
      style={{ "--color": textColor, "--weight": textWeight } as CSSProperties}
      {...rest}
    >
      <Icon size={iconSize ?? 20} />
      <span className="ml-2">{text}</span>
    </button>
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

/**
 * Clear Searching Button
 */
interface IClearSearchButton extends React.ComponentProps<"button"> {}

export const ClearSearchButton: React.FC<IClearSearchButton> = ({ className, ...rest }) => {
  const _cn = ` ${className ?? ""}`
  const { setSearchInput } = useBlogFeed()

  const handleOnClick = () => setSearchInput("")

  return (
    <button onClick={handleOnClick} className={"absolute top-1/2 -translate-y-1/2 right-[14px] group" + _cn} {...rest}>
      <div className="absolute inset-[-5px] rounded-lg bg-zinc-100 -z-10 group-hover:block hidden transition-all duration-150" />
      <XIcon size={18} className="text-neutral-500 " />
    </button>
  )
}
