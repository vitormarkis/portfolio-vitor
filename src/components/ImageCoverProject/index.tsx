import { IProjectLink } from "@/data/project"
import Image from "next/image"
import React, { HTMLAttributes } from "react"

interface IProjectCover extends HTMLAttributes<HTMLDivElement> {
  project: IProjectLink
}

export const ImageCoverProject: React.FC<IProjectCover> = ({ className, project, ...rest }) => (
  <div className="relative">
    <div
      className={`relative w-full shadow-md aspect-video z-20 rounded-lg overflow-hidden ${className ?? ""}`}
      {...rest}
    >
      <Image src={`/${project.desktop_cover_picture}`} alt={`Foto do projeto ${project.name}`} fill />
    </div>
    <div className="w-24 h-24 z-10 bg-cyan-500 blur-[40px] absolute top-0 left-0" />
    <div className="w-32 h-12 z-10 bg-indigo-500 blur-[30px] absolute top-0 right-0" />
    <div className="w-44 h-20 z-10 bg-indigo-500 blur-[50px] absolute bottom-0 left-0" />
    <div className="w-32 h-12 z-10 bg-red-500 blur-[60px] absolute bottom-0 right-0" />
    <div className="w-44 h-12 z-10 bg-indigo-500 blur-[50px] absolute top-1/2 -translate-1/2 left-0" />
    <div className="w-44 h-12 z-10 bg-fuchsia-500 blur-[40px] absolute top-0 left-1/2 -translate-x-1/2" />
  </div>
)
