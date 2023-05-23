import { create } from "zustand"

interface IUseFooterVisibility {
  isFooterVisible: boolean
  setFooterVisibility: (newState: boolean) => void
  toogleFooterVisibility: () => void
}

export const useFooterVisibility = create<IUseFooterVisibility>((set, get) => ({
  isFooterVisible: false,
  setFooterVisibility: newState => set({ isFooterVisible: newState }),
  toogleFooterVisibility: () => set({ isFooterVisible: !get().isFooterVisible }),
}))
