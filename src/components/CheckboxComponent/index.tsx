"use client"

import React from "react"
import * as Checkbox from "@radix-ui/react-checkbox"

interface ICheckboxComponent extends React.ComponentProps<"div"> {
  label: string
  tag: string
  importanceState: [importances: string[], setImportances: React.Dispatch<React.SetStateAction<string[]>>]
}

export const CheckboxComponent: React.FC<ICheckboxComponent> = ({
  label,
  tag: tagName,
  importanceState,
  className,
  ...rest
}) => {
  const _cn = ` ${className ?? ""}`
  const [importances, setImportances] = importanceState

  const handleCheckedChange = (tag: string) => (isChecked: boolean) => {
    importances.includes(tag) && !isChecked
      ? setImportances(prev => prev.filter(t => t !== tag))
      : setImportances(prev => [...prev, tag])
  }

  return (
    <div className={"flex items-center" + _cn} {...rest}>
      <Checkbox.Root
        className="hover:bg-violet-100 h-[25px] w-[25px] appearance-none grid place-items-center rounded-sm bg-white outline-none"
        onCheckedChange={handleCheckedChange(tagName)}
      >
        <Checkbox.Indicator className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height={18} width={18}>
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
      <label className="pl-[15px] text-[15px] leading-none text-white">{label}</label>
    </div>
  )
}
