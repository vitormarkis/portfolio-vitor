"use client"
import { StarFilledIcon } from "@/components/__icons/StarFilledIcon"
import { StarIcon } from "@/components/__icons/StarIcon"
import { IFeedPost } from "@/data/feed"
import { useStore } from "@/hooks/useStore"
import { useFavoritePosts } from "@/state/favoritePosts"
import React from "react"

interface IFavoritePostButton extends React.ComponentProps<"button"> {
  post: IFeedPost
}

export function FavoritePostButton({ post, className, ...rest }: IFavoritePostButton) {
  const _cn = ` ${className ?? ""}`

  const _favoritePosts = useStore(useFavoritePosts, state => state)
  if (!_favoritePosts) return <Placeholder />
  const { favoritePosts, addNewFavoritePost, removeFavoritePost } = _favoritePosts

  const isFavorite = favoritePosts?.includes(post.id) ?? false

  const handleToggleFavoritePost = (postId: number) => () => {
    if (!favoritePosts) return
    if (removeFavoritePost && addNewFavoritePost) {
      favoritePosts.includes(postId) ? removeFavoritePost(postId) : addNewFavoritePost(postId)
    }
  }

  return (
    <button
      onClick={handleToggleFavoritePost(post.id)}
      className={
        "h-7 w-7 rounded-lg hover:bg-zinc-100 grid place-items-center" +
        ` ${
          isFavorite ? "outline-raw focus:outline-red-500" : "outline-raw focus:outline-zinc-500"
        }` +
        _cn
      }
      {...rest}
    >
      {isFavorite ? (
        <StarFilledIcon size={18} className="fill-red-500" />
      ) : (
        <StarIcon size={18} className="text-zinc-500" />
      )}
    </button>
  )
}

export function Placeholder() {
  return (
    <button className="h-7 w-7 rounded-lg hover:bg-zinc-100 grid place-items-center outline-raw focus:outline-zinc-500">
      <StarIcon size={18} className="text-zinc-500" />
    </button>
  )
}
