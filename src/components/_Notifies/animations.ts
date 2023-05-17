import { TAnimation, TTransition } from "@/types/framer-motion"

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
  const animationProps: TAnimation = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  }

  const transition: TTransition = {
    y: {
      type: "spring",
      stiffness: 70,
      mass: 0.8,
      damping: 8,
    },
    delay,
    ease: "easeInOut",
  }

  return { ...animationProps, transition }
}

export function animateUnderline(delay: number, width: string) {
  const animationProps: TAnimation = {
    initial: {
      width: 0,
    },
    animate: {
      width,
    },
  }

  const transition: TTransition = {
    width: {
      type: "spring",
      stiffness: 70,
      mass: 0.4,
      damping: 8,
    },
    delay,
    ease: "easeInOut",
  }

  return { ...animationProps, transition }
}
