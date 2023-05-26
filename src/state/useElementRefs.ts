import { create } from "zustand"

type TElementRef = React.RefObject<HTMLDivElement>

interface IUseElementRefs {
  rootRef: TElementRef | null
  setRootRef: (elementRef: TElementRef | null) => void
  contactRef: TElementRef | null
  setContactRef: (elementRef: TElementRef | null) => void
}

export const useElementRefs = create<IUseElementRefs>(set => ({
  rootRef: null,
  setRootRef: elementRef => set({ rootRef: elementRef }),
  contactRef: null,
  setContactRef: elementRef => set({ contactRef: elementRef }),
}))
