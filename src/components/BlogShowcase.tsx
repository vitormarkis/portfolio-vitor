import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function BlogShowcase({ className, ...rest }: Props) {
  return (
    <section className={`flex flex-col ${className}`} {...rest}>
      <h2 className="text-slate-800 font-semibold md:text-4xl text-2xl relative z-10 text-center">
        O que eu estive fazendo...
      </h2>

    </section>
  )
}
