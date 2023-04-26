import { IProjectLink, projectLinks } from "@/data/project"
import React, { HTMLAttributes } from "react"
import { CenteredContainer } from "./CenteredContainer"
import Image from "next/image"
import Link from "next/link"
import { IconTechnology } from "./IconTechnology"
import twc from "tailwindcss/colors"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Projects({ className, ...rest }: Props) {
  return (
    <div className={`${className}`} {...rest}>
      <CenteredContainer className="p-6">
        <h2 className="font-semibold mb-2 text-4xl relative z-10 text-center">
          Projetos
        </h2>
        <p className="text-neutral-400 mb-6 max-w-[17rem] mx-auto text-center text-xs">
          Veja os projetos onde coloquei meus conhecimentos em prática.
        </p>
        <div className="grid mdx:grid-cols-2 grid-cols-1 gap-12 mb-8">
          {projectLinks
            .filter(p => p.importance === "important")
            .map(project => (
              <ProjectHome key={project.id} project={project} size="normal" />
            ))}
        </div>
        <div className="sm:grid mdx:grid-cols-3 sm:grid-cols-2 hidden gap-8">
          {projectLinks
            .filter(p => p.importance === "casual")
            .map(project => (
              <ProjectHome key={project.id} project={project} size="small" />
            ))}
        </div>
      </CenteredContainer>
    </div>
  )
}

interface IProjectHome extends HTMLAttributes<HTMLDivElement> {
  project: IProjectLink
  size: "small" | "normal"
}

export function ProjectHome({
  className,
  project,
  size,
  ...rest
}: IProjectHome) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <Link href={project.path} passHref legacyBehavior>
        <a className="block outline-accent relative rounded-xl shadow-lg hover:scale-[1.03] overflow-hidden transition-transform duration-500">
          <div className="relative p-2">
            <div className="relative w-full aspect-video z-20 rounded-lg overflow-hidden">
              <Image
                fill
                src={`/${project.image_url}`}
                alt={`Projeto ${project.name}`}
              />
            </div>
            <div className="w-24 h-12 z-10 bg-cyan-500 blur-[40px] absolute top-0 left-0" />
            <div className="w-32 h-12 z-10 bg-indigo-500 blur-[30px] absolute top-0 right-9" />
            <div className="w-24 h-12 z-10 bg-red-500 blur-[50px] absolute bottom-0 right-0" />
          </div>
          <div className="block outline-accent relative rounded-xl shadow-lg hover:scale-[1.03] overflow-hidden transition-transform duration-500">
            <div className="p-3">
              <h3 className="font-bold text-slate-700 text-lg">
                {project.name}
              </h3>
              <p className="text-neutral-500 text-sm mb-3">
                {project.description}
              </p>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  {project.technologies.map(tech => (
                    <IconTechnology
                      key={tech}
                      icon={tech}
                      width={18}
                      height={18}
                      color={twc.neutral["500"]}
                    />
                  ))}
                </div>
                <button className="border border-slate-700 outline-accent text-slate-700 rounded-full px-8 py-1 text-sm shadow-md inline-block">
                  Ver mais
                </button>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
