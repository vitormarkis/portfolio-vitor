import { IProjectLink, projectLinks } from "@/data/project"
import React, { HTMLAttributes } from "react"
import { CenteredContainer } from "./CenteredContainer"
import Image from "next/image"
import Link from "next/link"
import { IconTechnology } from "./IconTechnology"
import twc from "tailwindcss/colors"
import Button from "./Button"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Projects({ className, ...rest }: Props) {
  return (
    <div className={`${className}`} {...rest}>
      <CenteredContainer className="p-6 mdx:p-12">
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
        <div className="sm:grid mdx:grid-cols-3 sm:grid-cols-2 hidden align-super gap-8">
          {projectLinks
            .filter(p => p.importance === "casual")
            .map(project => (
              <ProjectHome key={project.id} project={project} size="small" />
            ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button
            text="Ver todos"
            className="outline-accent mx-auto"
            fontSize="base"
            backgroundColor="luminescent"
          />
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
        <a className="flex flex-col outline-accent relative rounded-xl shadow-lg hover:scale-[1.03] overflow-hidden transition-transform duration-500 h-full">
          <div className="relative p-2">
            <div className="relative w-full aspect-video z-20 rounded-lg overflow-hidden">
              <Image
                fill
                src={`/${project.image_url}`}
                alt={`Projeto ${project.name}`}
              />
            </div>
            <div className="w-24 h-24 z-10 bg-cyan-500 blur-[40px] absolute top-0 left-0" />
            <div className="w-32 h-12 z-10 bg-indigo-500 blur-[30px] absolute top-0 right-0" />
            <div className="w-24 h-12 z-10 bg-red-500 blur-[70px] absolute bottom-12 right-0" />
            <div className="w-44 h-12 z-10 bg-indigo-500 blur-[50px] absolute top-1/2 -translate-1/2 left-0" />
            <div className="w-44 h-12 z-10 bg-fuchsia-500 blur-[40px] absolute top-0 left-1/2 -translate-x-1/2" />
          </div>

          <div className="p-3 flex flex-col grow">
            <h3 className="font-bold text-slate-700 text-lg">{project.name}</h3>
            <p className="text-neutral-500 text-sm mb-3">
              {project.description}
            </p>
            <div className="flex justify-between mt-auto">
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
        </a>
      </Link>
    </div>
  )
}
