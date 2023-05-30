import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface IUseFavoritePosts {
  seeingFavoritePosts: boolean
  toggleSeeingFavoritePosts: () => void
  favoritePosts: number[]
  addNewFavoritePost: (postId: number) => void
  removeFavoritePost: (postId: number) => void
  removeAllFavoritePosts: () => void
}

export const useFavoritePosts = create<IUseFavoritePosts>(
  // @ts-expect-error
  persist(
    (set, get) => ({
      seeingFavoritePosts: false,
      toggleSeeingFavoritePosts: () => set({ seeingFavoritePosts: !get().seeingFavoritePosts }),
      favoritePosts: [],
      addNewFavoritePost: postId => set({ favoritePosts: [...get().favoritePosts, postId] }),
      removeFavoritePost: postId =>
        set({ favoritePosts: get().favoritePosts.filter(post_id => post_id !== postId) }),
      removeAllFavoritePosts: () => set({ favoritePosts: [] }),
    }),
    { name: "favorite-posts", storage: createJSONStorage(() => localStorage) }
  )
)
