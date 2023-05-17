import { TAnimation, TTransition } from "@/types/framer-motion"

export function bounceAnimation() {
  const animationProps: TAnimation = {
    initial: {
      y: 0,
    },
    animate: {
      y: -20,
    },
  }

  const transition: TTransition = {
    type: "spring",
    mass: 0.6,
    damping: 20,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  }

  return { ...animationProps, transition }
}
