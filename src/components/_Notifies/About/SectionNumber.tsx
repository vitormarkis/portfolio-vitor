import React, { HTMLAttributes } from "react"
interface ISectionNumber extends HTMLAttributes<HTMLDivElement> {
  number: number
}

export function SectionNumber({ number, className, ...rest }: ISectionNumber) {
  return (
    <div
      className={`border-t border-t-white/50 border-b border-b-black/5 bg-gradient-to-br from-[#a56dff] via-[#fc39ff] to-[#ffd86b] inline-grid place-items-center w-6 h-6 p-0.5 rounded-md text-white leading-none text-sm ${
        className ?? ""
      }`}
      {...rest}
    >
      <div className="inline-grid place-items-center w-full h-full rounded-[5px]">
        <span>{number}</span>
      </div>
    </div>
  )
}
