import React, { HTMLAttributes } from "react"
import { CenteredContainer } from "./CenteredContainer"
import { aboutMe } from "@/data/aboutMe"
import { formatStringToDOM } from "@/helpers"
import { twMerge } from "tailwind-merge"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function AboutMe({ className, ...rest }: Props) {
  return (
    <div {...rest} className={twMerge("", className)}>
      <CenteredContainer>
        <div className="Spacing_section relative">
          <div className="gradient gr alpha aboutme-01" />
          <div className="gradient gr charlie aboutme-02" />

          <h2 className="font-semibold text-4xl relative z-10 text-center mb-section">Sobre mim</h2>
          <div className="sm:flex-row flex flex-col items-center gap-gap">
            <div className="sm:flex-1 w-40 sm:order-1 order-none">
              <img
                src="https://avatars.githubusercontent.com/u/121525239?v=4"
                alt="Foto de perfil de Vitor Markis"
                className="sm:max-w-[21rem] sm:w-full sm:mx-auto border-t rounded-full sm:p-8 object-cover border-t-white/10 border-b border-b-black/10 shadow-lg"
              />
            </div>
            <div className="sm:flex-1 text-neutral-700 text-justify">
              {/* <div className="sm:flex-1 p-3 rounded-lg backdrop-blur-[1px] border-t border-t-neutral-900 border-b border-b-black/20 shadow-lg"> */}
              {formatStringToDOM(aboutMe.about_me_text).map((paragraph, i) => (
                <p key={`${paragraph}-${i}`} className="text-sm md:text-base mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </CenteredContainer>
    </div>
  )
}
