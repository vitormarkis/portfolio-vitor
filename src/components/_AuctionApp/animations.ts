import { TAnimation } from "@/types/framer-motion"

export const popup = (delay: number): TAnimation => ({
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  final: {
    scale: 1,
    opacity: 1,
  },
})

export function animatePopup(delay: number) {
  const animationProps = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  }

  const transition = {
    scale: {
      type: "spring",
      stiffness: 50,
      mass: 0.6,
      damping: 8,
    },
    delay,
    ease: "easeInOut",
  }

  return { ...animationProps, transition }
}

export function animateEmerge(delay: number) {
  const animationProps = {
    initial: {
      y: -25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  }

  const transition = {
    y: {
      type: "spring",
      stiffness: 70,
      mass: 0.6,
      damping: 8,
    },
    delay,
    ease: "easeInOut",
  }

  return { ...animationProps, transition }
}
