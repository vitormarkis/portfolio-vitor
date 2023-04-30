"use client"

import { getProject } from "@/data/project"
import { HTMLAttributes } from "react"
import { CenteredContainer } from "../CenteredContainer"
import { Logo } from "./Logo"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Hero({ className, ...rest }: Props) {
  const { project } = getProject("auction-app")

  console.log(project.mobile_cover_picture)

  return (
    <div className={`${className ?? ""}`} {...rest}>
      <CenteredContainer className="md:py-24 py-8">
        <div className="flex flex-col md:flex-row h-[15rem] md:items-center px-6 md:px-0">
          <div className="flex-1 grid place-items-center">
            <Logo scale={3} className="" />
          </div>
          <div className="flex-1">
            <div className="flex relative w-fit mr-10">
              <div className="absolute top-full h-4 w-20 bg-black left-1/2 -translate-x-1/2" />
              <div className="flex p-2 rounded-xl bg-black">
                <img
                  src={`/${project.desktop_cover_picture}`}
                  alt="Imagem da home do projeto Auction App na versão desktop"
                  className="w-[28rem] rounded-lg"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 p-[2px] pb-2.5 rounded-lg bg-black shadow-sm md:shadow-md shadow-black/50"
                style={{ transform: "translate(46%, 2rem)" }}
              >
                {/* <div className="bg-black w-8 h-1.5 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-full"></div> */}
                <div className="bg-black w-1 h-1 rounded-full top-1 left-1/2 -translate-x-1/2 absolute"></div>
                <div className="block bg-white overflow-hidden rounded-b-md rounded-t-lg">
                <img
                  src={`/${project.mobile_cover_picture}`}
                  alt="Imagem da home do projeto Auction App na versão mobile"
                  className="w-20 pt-2 mobile-mockup-responsive"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CenteredContainer>
    </div>
  )
}
