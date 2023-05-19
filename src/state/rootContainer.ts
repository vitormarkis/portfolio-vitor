import { create } from "zustand"

type TElementRef = React.RefObject<HTMLDivElement>

interface IUseRootContainer {
  elementRef: TElementRef | null
  setElementRef: (elementRef: TElementRef | null) => void
}

export const useRootContainer = create<IUseRootContainer>(set => ({
  elementRef: null,
  setElementRef: elementRef => set({ elementRef }),
}))
