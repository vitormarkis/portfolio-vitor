import React, { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: React.FC<Props> = ({ className, text, ...rest }) => {
  return (
    <button
      className={`text-sm shadow-md h-8 border-b border-b-texas-600 border-t border-t-texas-300 px-3 rounded-lg bg-texas-500 text-white ${className}`}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
