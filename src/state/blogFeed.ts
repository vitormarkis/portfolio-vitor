import { create } from "zustand"

interface IUseBlogFeed {
  seeingTags: string[]
  addTag: (newTag: string) => void
  removeTag: (tagName: string) => void
}

export const useBlogFeed = create<IUseBlogFeed>((set, get) => ({
  seeingTags: [],
  addTag: newTag => set({ seeingTags: [...get().seeingTags, newTag] }),
  removeTag: tagName => set({ seeingTags: get().seeingTags.filter(t => t !== tagName) }),
}))
