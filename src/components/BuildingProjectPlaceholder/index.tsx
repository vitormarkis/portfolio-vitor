import { ButtonProjectCard } from "@/components/ProjectCard/ButtonProjectCard"
import { getProject, useProjects } from "@/data/project"
import { projectsData } from "@/data/project/data"
import Link from "next/link"
import React from "react"

interface IBuildingProjectPlaceholder extends React.ComponentProps<"div"> {}

export function BuildingProjectPlaceholder({ className, ...rest }: IBuildingProjectPlaceholder) {
  const _cn = ` ${className ?? ""}`
  const projects = projectsData.sort((a, b) => (a.on > b.on ? -1 : 1))
  const verifyRepository = (projectURL: string) => projectURL.includes("github.com")
  const { project } = getProject("auction-app")

  return (
    <div className={"" + _cn} {...rest}>
      <p className="text-center my-8 text-2xl font-light tracking-wider">
        A página desse projeto ainda será construída, veja outros projetos por enquanto:
      </p>
      <div className="flex flex-col mx-auto max-w-lg my-12">
        {projects.map(p =>
          p.on ? (
            <Link
              href={`/project/${p.path}`}
              className="text-neutral-700 rounded-lg py-2 px-4 flex justify-between items-center hover:bg-zinc-200 transition-all duration-150"
            >
              <span>{p.name}</span>
              <div className="h-4 w-4 bg-green-500 rounded-full" />
            </Link>
          ) : (
            <button
              disabled
              className="italic text-neutral-500 rounded-lg py-2 px-4 flex justify-between items-center hover:bg-zinc-200 transition-all duration-150"
            >
              <span>{p.name}</span>
              <div className="h-4 w-4 bg-red-500 rounded-full" />
            </button>
          )
        )}
      </div>
      {!verifyRepository(project.url) ? (
        <div>
          <p className="text-center mb-6 font-light">
            Mas o projeto está no ar para você ver! Clique em <strong>Abrir projeto</strong> para visualizar o projeto
          </p>
          <div className="flex justify-center mb-8">
            <ButtonProjectCard text="Abrir projeto" url={project.url} filled target="_blank" />
          </div>
        </div>
      ) : null}
    </div>
  )
}
