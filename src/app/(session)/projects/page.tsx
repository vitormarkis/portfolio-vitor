import { CenteredContainer } from "@/components/CenteredContainer"
import { IProjectLink, projectLinks } from "@/data/project"
import { formatStringToDOM } from "@/helpers"
import Image from "next/image"
import Link from "next/link"
import React, { HTMLAttributes } from "react"
import clsx from "clsx"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Projects({ className, ...rest }: Props) {
  return (
    <main className="flex flex-col">
      <CenteredContainer className="px-6 mdx:px-12">
        <div className="flex flex-col gap-18">
          {projectLinks.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </CenteredContainer>
    </main>
  )
}

interface IProjectCard extends HTMLAttributes<HTMLDivElement> {
  project: IProjectLink
}

export const ProjectCard: React.FC<IProjectCard> = ({
  className,
  project,
  ...rest
}) => (
  <div
    className={`flex mb-12 md:mb-0 md:items-center flex-col-reverse md:flex-row-reverse md:odd:flex-row mdx:gap-12 ${
      className ?? ""
    }`}
    {...rest}
  >
    <div className="flex-1 p-3">
      <h3 className="font-bold text-slate-700 md:mb-2 text-xl md:text-3xl text-center">
        {project.name}
      </h3>
      <Paragraph
        text={project.description}
        className="text-center text-neutral-500"
      />
      <div className="flex justify-between">
        <ButtonProjectCard text="Ver detalhes" url={project.path} filled />
        <ButtonProjectCard text="Abrir" url={project.url} />
      </div>
    </div>
    <div className="flex-1 rounded-xl md:p-3 p-1.5 overflow-hidden">
      <ImageCoverProject project={project} />
    </div>
  </div>
)

interface IProjectCover extends HTMLAttributes<HTMLDivElement> {
  project: IProjectLink
}

export const ImageCoverProject: React.FC<IProjectCover> = ({
  className,
  project,
  ...rest
}) => (
  <div className="relative">
    <div
      className={`relative w-full shadow-md aspect-video z-20 rounded-lg overflow-hidden ${
        className ?? ""
      }`}
      {...rest}
    >
      <Image
        src={`/${project.image_url}`}
        alt={`Foto do projeto ${project.name}`}
        fill
      />
    </div>
    <div className="w-24 h-24 z-10 bg-cyan-500 blur-[40px] absolute top-0 left-0" />
    <div className="w-32 h-12 z-10 bg-indigo-500 blur-[30px] absolute top-0 right-0" />
    <div className="w-44 h-20 z-10 bg-indigo-500 blur-[50px] absolute bottom-0 left-0" />
    <div className="w-32 h-12 z-10 bg-red-500 blur-[60px] absolute bottom-0 right-0" />
    <div className="w-44 h-12 z-10 bg-indigo-500 blur-[50px] absolute top-1/2 -translate-1/2 left-0" />
    <div className="w-44 h-12 z-10 bg-fuchsia-500 blur-[40px] absolute top-0 left-1/2 -translate-x-1/2" />
  </div>
)

interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
  text: string
}

export const Paragraph: React.FC<IParagraph> = ({
  className,
  text,
  ...rest
}) => {
  return (
    <>
      {formatStringToDOM(text).map((paragraph, i) => (
        <p
          key={`${paragraph}-${i}`}
          className={`text-sm mb-5 ${className}`}
          {...rest}
        >
          {paragraph}
        </p>
      ))}
    </>
  )
}

interface IButtonProjectCard extends HTMLAttributes<HTMLButtonElement> {
  url: string
  text: string
  filled?: boolean
}

export const ButtonProjectCard = React.forwardRef<
  HTMLAnchorElement,
  IButtonProjectCard
>(({ className, url, text, filled, ...rest }, ref) => {
  return (
    <Link href={url} ref={ref} target="_blank">
      <button
        className={`outline-accent rounded-full px-8 py-2 text-sm shadow-md inline-block ${
          className ?? ""
        } ${
          filled
            ? "bg-black text-white border-t-blue-500 border-y border-b-red-500"
            : "border border-slate-700 text-slate-700"
        }`}
        {...rest}
      >
        {text}
      </button>
    </Link>
  )
})
