import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface IUseFavoritePosts {
  seeingFavoritePosts: boolean
  favoritePosts: number[]
  addNewFavoritePost: (postId: number) => void
  removeFavoriePost: (postId: number) => void
  removeAllFavoritePosts: () => void
}

export const useFavoritePosts = create<IUseFavoritePosts>(
  // @ts-expect-error
  persist(
    (set, get) => ({
      seeingFavoritePosts: false,
      favoritePosts: [],
      addNewFavoritePost: postId => set({ favoritePosts: [...get().favoritePosts, postId] }),
      removeFavoriePost: postId => set({ favoritePosts: get().favoritePosts.filter(p => p !== postId) }),
      removeAllFavoritePosts: () => set({ favoritePosts: [] }),
    }),
    { name: "favorite-posts" }
  )
)
