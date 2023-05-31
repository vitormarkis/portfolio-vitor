import React, { CSSProperties, HTMLAttributes, RefAttributes } from "react"
import clsx from "clsx"
import Link from "next/link"

interface Props
  extends RefAttributes<HTMLAnchorElement>,
    Pick<React.ComponentProps<"a">, "onClick"> {
  children?: React.ReactNode | undefined
  text?: string | undefined
  backgroundColor?: "orange" | "black" | "luminescent" | "neon"
  textColor?: "black" | "white"
  fontSize?: "small" | "base" | "large"
  className?: string | undefined
  href?: string | undefined
  target?: React.HTMLAttributeAnchorTarget | undefined
  position?: CSSProperties["position"] | undefined
}

const Button: React.FC<Props> = ({
  className,
  onClick,
  href,
  target,
  position,
  children,
  text,
  backgroundColor = "black",
  textColor = "white",
  fontSize = "small",
}) => {
  const props = {
    className: clsx(
      `grid place-items-center shadow-md border-y rounded-lg ${className}`,
      {
        "border-b-texas-600 border-t-texas-300 bg-texas-500": backgroundColor === "orange",
        "border-b-zinc-700 border-t-zinc-500 bg-black": backgroundColor === "black",
        "border-b-red-600 border-t-cyan-300 bg-black": backgroundColor === "luminescent",
        "border-b-green-500 border-t-lime-500 bg-black": backgroundColor === "neon",
        "text-black": textColor === "black",
        "text-white": textColor === "white",
        "text-sm h-9": fontSize === "small",
        "text-base h-10": fontSize === "base",
        "text-lg h-11": fontSize === "large",
      },
      position ?? "relative"
    ),
  }

  const content = children ?? text

  return href ? (
    <Link href={href} target={target} onClick={onClick} {...props}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick as any} {...props}>
      {content}
    </button>
  )
}

export default Button
