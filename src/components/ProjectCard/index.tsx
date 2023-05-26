import { TechnologyIcons } from "@/components/ProjectsFeed/TechnologyIcons"
import { IProjectLink } from "@/data/project"
import React, { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"
import { Paragraph } from "../Paragraph"
import { ProjectPageImageContainer } from "../ProjectsPageImageContainer"
import { ButtonProjectCard } from "./ButtonProjectCard"

interface IProjectCard extends HTMLAttributes<HTMLDivElement> {
  project: IProjectLink
}

export const ProjectCard: React.FC<IProjectCard> = ({ className, project, ...rest }) => (
  <div
    className={`flex md:items-center flex-col-reverse md:flex-row-reverse md:odd:flex-row md:gap-12 ${className ?? ""}`}
    {...rest}
  >
    <div className="flex-1 p-3">
      <h3 className="font-bold text-slate-700 md:mb-2 text-2xl md:text-3xl text-center">{project.name}</h3>
      <div className="lg:mb-12 mb-8">
        <Paragraph text={project.description} className="text-center text-neutral-500" />
      </div>
      <div className="flex justify-between">
        <ButtonProjectCard text="Ver detalhes" url={`/project/${project.path}`} filled className="px-4 min-w-[92px]" />
        <ButtonProjectCard text="Abrir" url={project.url} target="_blank" className="px-4 min-w-[92px]" />
      </div>
      <TechnologyIcons
        color={twc.neutral["500"]}
        iconsSize={16}
        project={project}
        className="mt-4 justify-evenly py-1.5 rounded-full"
      />
    </div>
    <ProjectPageImageContainer className="flex-1" project={project} />
  </div>
)
