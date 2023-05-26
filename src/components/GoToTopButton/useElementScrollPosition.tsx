import React from "react"

interface IUseElementScrollPosition {
  ref: React.RefObject<HTMLDivElement> | null
}

export function useElementScrollPosition({ ref }: IUseElementScrollPosition) {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  React.useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement
      setScrollPosition(target.scrollTop)
    }

    if (ref && ref.current) {
      ref.current.addEventListener("scroll", handler)
    }
    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener("scroll", handler)
      }
    }
  }, [ref])

  return { scrollPosition }
}
