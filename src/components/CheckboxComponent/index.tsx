"use client"

import React from "react"
import * as Checkbox from "@radix-ui/react-checkbox"
import clsx from "clsx"
import { useBlogFeed } from "@/state/blogFeed"

interface ICheckboxComponent extends React.ComponentProps<"div"> {
  label: string
  tag: string
  theme?: undefined | "dark" | "light"
}

export const CheckboxComponent: React.FC<ICheckboxComponent> = ({
  label,
  tag: tagName,
  className,
  theme = "light",
  ...rest
}) => {
  const _cn = ` ${className ?? ""}`
  const { addTag, removeTag, seeingTags } = useBlogFeed()

  const handleCheckedChange = (tag: string) => (isChecked: boolean) => {
    seeingTags.includes(tag) && !isChecked ? removeTag(tag) : addTag(tag)
  }

  console.log(seeingTags)

  return (
    <div className={"flex items-center" + _cn} {...rest}>
      <Checkbox.Root
        className={clsx(
          "outline-accent h-[25px] w-[25px] appearance-none grid place-items-center rounded-lg outline-none transition-all duration-150",
          {
            "hover:bg-neutral-200 bg-zinc-100 border-y border-t-gray-200 border-b-neutral-200": theme === "light",
            "hover:bg-neutral-800 bg-neutral-700 border-y border-t-gray-800 border-b-neutral-800": theme === "dark",
          }
        )}
        checked={seeingTags.includes(tagName)}
        onCheckedChange={handleCheckedChange(tagName)}
      >
        <Checkbox.Indicator
          className={clsx({
            "text-white": theme === "dark",
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
        className={clsx("pl-4 leading-none", {
          "text-white": theme === "dark",
          "text-neutral-600": theme === "light",
        })}
      >
        {label}
      </label>
    </div>
  )
}
