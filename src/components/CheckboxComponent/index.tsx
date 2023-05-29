"use client"

import React from "react"
import * as Checkbox from "@radix-ui/react-checkbox"
import clsx from "clsx"
import { useBlogFeed } from "@/state/blogFeed"
import chroma from "chroma-js"
import twc from "tailwindcss/colors"

interface ICheckboxComponent extends React.ComponentProps<"div"> {
  label: string
  tag: string
  theme?: undefined | "dark" | "light"
}

export const CheckboxComponent: React.FC<ICheckboxComponent> = ({
  label,
  tag: tagName,
  className,
  onClick,
  theme = "light",
  ...rest
}) => {
  const _cn = ` ${className ?? ""}`
  const { addTag, removeTag, seeingTags } = useBlogFeed()
  const checkboxRef = React.useRef<HTMLButtonElement>(null)

  const handleCheckedChange = (tag: string) => (isChecked: boolean) => {
    seeingTags.includes(tag) && !isChecked ? removeTag(tag) : addTag(tag)
  }

  const handleClick = (tag: string) => {
    seeingTags.includes(tag) ? removeTag(tag) : addTag(tag)
  }

  return (
    <div
      className={"flex items-center py-1.5 hover:cursor-pointer" + _cn}
      onClick={(...args) => {
        handleClick(tagName)
        if (checkboxRef.current) checkboxRef.current.focus()
        if (onClick) onClick(...args)
      }}
      {...rest}
    >
      <Checkbox.Root
        ref={checkboxRef}
        className={clsx(
          "outline-accent h-[25px] w-[25px] appearance-none grid place-items-center rounded-lg outline-none transition-all duration-150",
          {
            "hover:bg-neutral-100 bg-zinc-100 border-y border-t-gray-200 border-b-neutral-200": theme === "light",
            "hover:bg-zinc-100 bg-zinc-50 border border-zinc-300": theme === "dark",
          }
        )}
        checked={seeingTags.includes(tagName)}
        onCheckedChange={handleCheckedChange(tagName)}
      >
        <Checkbox.Indicator
          className={clsx({
            "text-zinc-500": theme === "dark",
            "text-neutral-700": theme === "light",
          })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height={16} width={16}>
            <rect width="256" height="256" fill="none" />
            <line
              x1="200"
              y1="56"
              x2="56"
              y2="200"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <line
              x1="200"
              y1="200"
              x2="56"
              y2="56"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className={clsx("pl-4 leading-none hover:cursor-pointer", {
          "text-neutral-500": theme === "dark",
          "text-neutral-600": theme === "light",
        })}
      >
        {label}
      </label>
    </div>
  )
}
