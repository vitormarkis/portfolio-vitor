import { projectsData } from "./data"

const importances = ["important", "public", "casual"] as const

export type TImp = (typeof importances)[number]
export type TProjectPaths =
  | "auction-app"
  | "ike-linktree"
  | "twitter-clone"
  | "custom-social-media"
  | "analise-de-estruturas"
  | "notifies"
  | "asseties"

export type ProjectTechnologies =
  | "PRISMA"
  | "TAILWINDCSS"
  | "MYSQL"
  | "NEXT"
  | "REACT"
  | "EXPRESS"
  | "GOOGLE_SHEETS"
  | "STYLED_COMPONENTS"
  | "VERCEL"

export interface IProjectLink {
  id: number
  name: string
  path: TProjectPaths
  desktop_cover_picture: string
  mobile_cover_picture: string
  short_description?: string | undefined
  description: string
  importance: TImp
  technologies: ProjectTechnologies[]
  on: boolean
  url: string
  repo_url: string
}

function compareImportances(a: IProjectLink, b: IProjectLink) {
  return importances.indexOf(a.importance) > importances.indexOf(b.importance)
    ? 1
    : importances.indexOf(a.importance) < importances.indexOf(b.importance)
    ? -1
    : 0
}

type IUseProjects = (props?: IUseProjectsProps) => { projects: IProjectLink[] }

interface IUseProjectsProps {
  sort?: "importance" | undefined
  omit?: IProjectLink["importance"][]
  include?: IProjectLink["importance"][]
}

export const useProjects: IUseProjects = props => {
  let projects = projectsData
  if (!props) return { projects }
  const { sort, omit, include } = props

  if (sort) {
    if (sort === "importance") {
      projects = projects.sort(compareImportances)
    }
  }

  if (omit) {
    projects = projects.filter(p => !omit.includes(p.importance))
  }

  if (include) {
    projects = projects.filter(p => include.includes(p.importance))
  }

  return { projects }
}

export const getProject = (projectName: string) => {
  const project = projectsData.find(p => p.path === projectName)!

  return { project }
}
