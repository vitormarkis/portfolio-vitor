import { useFooterVisibility } from "@/state/toolbarVisibility"
import React from "react"

interface IUseElementInView {
  ref: React.RefObject<HTMLDivElement>
}

export function useElementInView({ ref }: IUseElementInView) {
  const { isFooterVisible: isToolbarVisible, setFooterVisibility } = useFooterVisibility()

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          console.log("Visible")
          setFooterVisibility(entry.isIntersecting)
        })
      },
      { threshold: 0 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { isToolbarVisible }
}
