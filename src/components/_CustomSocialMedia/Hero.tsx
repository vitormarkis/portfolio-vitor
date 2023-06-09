"use client"

import { getProject } from "@/data/project"
import { motion } from "framer-motion"
import { HTMLAttributes } from "react"
import { CenteredContainer } from "../CenteredContainer"
import { animatePopup, animateEmerge } from "./animations"
import { Logo } from "./Logo"
import { ButtonProjectCard } from "../ProjectCard/ButtonProjectCard"
import st from "@/components/_StructureAnalysis/Hero.module.css"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Hero({ className, ...rest }: Props) {
  const { project } = getProject("custom-social-media")

  return (
    <div className={`md:pb-0 ${className ?? ""}`} {...rest}>
      <CenteredContainer className="md:py-24 py-8">
        <div
          className="relative flex flex-col gap-10 md:gap-12 md:flex-row h-[15rem] md:items-center px-6 
        mb-[min(69vw,_22rem)]
        md:mb-[min(10vw,_7.5rem)]
        "
        >
          <div className={st["blur-alpha"]} />
          <div className={st["blur-bravo"]} />
          <div className="relative z-20 flex-1 flex justify-center items-center flex-col">
            <Logo />
            <p className="text-neutral-500 text-center md:text-left">{project.short_description}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative mb-8 z-20">
              <motion.div {...animatePopup(0)} className="flex relative w-fit">
                <div className="absolute top-full h-4 w-20 bg-black left-1/2 -translate-x-1/2" />
                <div className="flex p-1 md:p-2 rounded-xl bg-black">
                  <img
                    src={`/${project.desktop_cover_picture}`}
                    alt="Imagem da home do projeto Twitter Clone na versão desktop"
                    className="w-[28rem] rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row justify-between w-fit max-w-sm mx-auto items-center">
          {project.url ? (
            <ButtonProjectCard text="Abrir projeto" url={project.url} filled target="_blank" className="px-4" />
          ) : null}
          {project.repo_url ? (
            <ButtonProjectCard text="Repositório" url={project.repo_url} target="_blank" className="px-4" />
          ) : null}
        </div>
      </CenteredContainer>
    </div>
  )
}
