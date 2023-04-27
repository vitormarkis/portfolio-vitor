import { formatStringToDOM } from "@/helpers"
import React, { HTMLAttributes } from "react"

interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
  text: string
}

export const Paragraph: React.FC<IParagraph> = ({ className, text, ...rest }) => {
  return (
    <>
      {formatStringToDOM(text).map((paragraph, i) => (
        <p
          key={`${paragraph}-${i}`}
          className={`text-sm mb-2 ${className}`}
          {...rest}
        >
          {paragraph}
        </p>
      ))}
    </>
  )
}
