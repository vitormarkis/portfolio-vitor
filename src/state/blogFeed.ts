import { create } from "zustand"

interface IUseBlogFeed {
  seeingTags: string[]
  addTag: (newTag: string) => void
  removeTag: (tagName: string) => void
  clearTags: () => void
  searchInput: string
  setSearchInput: (input: string) => void
  isSortingAscending: boolean
  setIsSortingAscending: (state: boolean) => void
  toggleSortingAscending: () => void
}

export const useBlogFeed = create<IUseBlogFeed>((set, get) => ({
  seeingTags: [],
  addTag: newTag => set({ seeingTags: [...get().seeingTags, newTag] }),
  removeTag: tagName => set({ seeingTags: get().seeingTags.filter(t => t !== tagName) }),
  clearTags: () => set({ seeingTags: [] }),
  searchInput: "",
  setSearchInput: searchInput => set({ searchInput }),
  isSortingAscending: true,
  setIsSortingAscending: state => set({ isSortingAscending: state }),
  toggleSortingAscending: () => set({ isSortingAscending: !get().isSortingAscending }),
}))
