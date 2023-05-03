import { TargetAndTransition, Transition } from "framer-motion"

export type TAnimation = Record<string, TargetAndTransition>

export type TTransition = Transition & {}

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
