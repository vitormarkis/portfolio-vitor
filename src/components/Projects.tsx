import { projectLinks } from "@/data/project"
import React, { HTMLAttributes } from "react"
import { CenteredContainer } from "./CenteredContainer"
import Image from "next/image"
import Link from "next/link"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Projects({ className, ...rest }: Props) {
  return (
    <div className={`${className}`} {...rest}>
      <CenteredContainer className="py-6 px-12">
        <h2 className="font-semibold mb-2 text-4xl relative z-10 text-center">
          Projetos
        </h2>
        <p className="text-neutral-400 max-w-[17rem] mx-auto text-center text-xs">
          Veja os projetos onde coloquei meus conhecimentos em prática.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {projectLinks
            .filter(p => p.importance === "important")
            .map(project => (
              <Link
                href={project.path}
                key={project.id}
                className="p-4 rounded-lg shadow-md hover:scale-[1.03] transition-all duration-200"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    fill
                    src={`/${project.image_url}`}
                    alt={`Projeto ${project.name}`}
                  />
                </div>
              </Link>
            ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {projectLinks
            .filter(p => p.importance === "casual")
            .map(project => (
              <article key={project.id} className="p-4 rounded-lg shadow-md">
                <div className="relative w-full aspect-video">
                  <Image
                    fill
                    src={`/${project.image_url}`}
                    alt={`Projeto ${project.name}`}
                  />
                </div>
              </article>
            ))}
        </div>
      </CenteredContainer>
    </div>
  )
}
