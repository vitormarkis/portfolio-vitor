import { create } from "zustand"

interface IUseToolbarVisibility {
  isToolbarVisible: boolean
  setToolbarVisibility: (newState: boolean) => void
  toogleToolbarVisibility: () => void
}

export const useToolbarVisibility = create<IUseToolbarVisibility>((set, get) => ({
  isToolbarVisible: false,
  setToolbarVisibility: newState => set({ isToolbarVisible: newState }),
  toogleToolbarVisibility: () => set({ isToolbarVisible: !get().isToolbarVisible }),
}))
