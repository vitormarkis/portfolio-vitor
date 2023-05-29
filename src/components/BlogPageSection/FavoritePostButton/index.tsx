"use client"
import { StarFilledIcon } from "@/components/__icons/StarFilledIcon"
import { StarIcon } from "@/components/__icons/StarIcon"
import { IFeedPost } from "@/data/feed"
import { useFavoritePosts } from "@/state/favoritePosts"
import React from "react"

interface IFavoritePostButton extends React.ComponentProps<"button"> {
  post: IFeedPost
}

export function FavoritePostButton({ post, className, ...rest }: IFavoritePostButton) {
  const _cn = ` ${className ?? ""}`
  const { favoritePosts, addNewFavoritePost, removeFavoriePost } = useFavoritePosts()
  const [isFavorite, setIsFavorite] = React.useState(favoritePosts.includes(post.id))

  React.useEffect(() => {
    setIsFavorite(favoritePosts.includes(post.id))
  }, [])

  const handleToggleFavoritePost = (postId: number) => () => {
    favoritePosts.includes(postId) ? removeFavoriePost(postId) : addNewFavoritePost(postId)
  }

  return (
    <button
      onClick={handleToggleFavoritePost(post.id)}
      className={"h-7 w-7 rounded-lg hover:bg-zinc-100 grid place-items-center" + _cn}
      {...rest}
    >
      {favoritePosts.includes(post.id) ? (
        <StarFilledIcon size={18} className="fill-red-500" />
      ) : (
        <StarIcon size={18} className="text-zinc-500" />
      )}
    </button>
  )
}

export function Placeholder() {
  return (
    <button className={"h-7 w-7 rounded-lg hover:bg-zinc-100 grid place-items-center"}>
      <StarIcon size={18} className="text-zinc-500" />
    </button>
  )
}
