import React, { HTMLAttributes } from "react"
import clsx from "clsx"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string
  backgroundColor?: "orange" | "black" | "luminescent" | "neon"
  textColor?: "black" | "white"
  fontSize?: "small" | "base" | "large"
}

const Button: React.FC<Props> = ({
  className,
  text,
  backgroundColor = "black",
  textColor = "white",
  fontSize = "small",
  ...rest
}) => {
  return (
    <button
      className={clsx(`shadow-md border-y px-3 rounded-lg ${className}`, {
        "border-b-texas-600 border-t-texas-300 bg-texas-500":
          backgroundColor === "orange",
        "border-b-zinc-700 border-t-zinc-500 bg-black":
          backgroundColor === "black",
        "border-b-red-600 border-t-cyan-300 bg-black":
          backgroundColor === "luminescent",
        "border-b-green-500 border-t-lime-500 bg-black":
          backgroundColor === "neon",
        "text-black": textColor === "black",
        "text-white": textColor === "white",
        "text-sm h-9": fontSize === "small",
        "text-base h-10": fontSize === "base",
        "text-lg h-11": fontSize === "large",
      })}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
