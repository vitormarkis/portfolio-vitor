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
  path: string
  image_url: string
  short_description?: string | undefined
  description: string
  importance: "casual" | "important" | "public"
  technologies: ProjectTechnologies[]
  url: string
}

export const projectsData: IProjectLink[] = [
  {
    id: Math.random(),
    name: "Auction App",
    path: "/auction-app",
    image_url: "auction-app.jpg",
    short_description: "Compre e venda o que quiser, pelo preço que quiser!",
    description: `
      Site de venda de produtos, onde você anuncia um produto por R$200 durante 7 dias, esse anuncio fica publico para as pessoas no feed, elas podem dar lances de R$230, R$250, R$300, e ao final dos 7 dias, o lance com o maior valor leva o produto.
    `.trim(),
    importance: "important",
    technologies: ["VERCEL", "NEXT", "MYSQL", "TAILWINDCSS", "PRISMA"],
    url: "https://auction-alpha.vercel.app/",
  },
  {
    id: Math.random(),
    name: "Ike Linktree",
    path: "ike-linktree",
    image_url: "ike-consertos.jpg",
    short_description: "Índice de contato para um assistente técnico da minha região.",
    description: `Site onde se encontra todos os links e formas de contato de um assistente técnico de celulares da minha região, meu primeiro projeto em Next.`,
    importance: "public",
    technologies: ["VERCEL", "NEXT", "TAILWINDCSS"],
    url: "https://ike-consertos-linktree.vercel.app/",
  },
  {
    id: Math.random(),
    name: "Twitter Clone",
    path: "twitter-clone",
    image_url: "twitter-frontend.jpg",
    short_description: "Clone da interface do Twitter totalmente responsivo.",
    description: `Recriei a interface do Twitter de forma praticamente idêntica e totalmente responsiva usando a biblioteca Styled Components.`,
    importance: "public",
    technologies: ["VERCEL", "REACT", "STYLED_COMPONENTS"],
    url: "https://twitter-frontend-indol.vercel.app/",
  },
  {
    id: Math.random(),
    name: "Custom Social Media",
    path: "custom-social-media",
    image_url: "custom-social-media.jpg",
    short_description: "Rede social criada com NodeJS, Express e MySQL.",
    description: `Rede social onde você pode criar, favoritar, e comentar em posts. Projeto que usei para aprender autenticação, queries cruas em MySQL, API com express e etc.`,
    importance: "casual",
    technologies: ["VERCEL", "EXPRESS", "MYSQL", "REACT", "TAILWINDCSS"],
    url: "",
  },
  {
    id: Math.random(),
    name: "Análise de Estruturas",
    path: "analise-de-estruturas",
    image_url: "analise-de-estruturas.jpg",
    short_description: "A melhor forma de analisar campanhas de empresas.",
    description: `A melhor forma de analisar e metrificar qualquer coisa, o quê você quiser analisar é quebrado em vários pedaços, os quais são comparados entre eles e é retornado em um dashboard as melhores combinações.`,
    importance: "important",
    technologies: ["GOOGLE_SHEETS"],
    url: "",
  },
  {
    id: Math.random(),
    name: "Cron Jobs",
    path: "cron-jobs",
    image_url: "cron-jobs-cover.jpg",
    description: `
      Sistema de notificações em tempo real e persistida no banco de dados, autenticação JWT, e agendamento de tarefas (ações que acontecem no servidor de forma automática). 
    `,
    importance: "casual",
    technologies: ["EXPRESS", "MYSQL", "PRISMA", "REACT", "TAILWINDCSS"],
    url: "https://github.com/vitormarkis/cron-jobs",
  },
  {
    id: Math.random(),
    name: "Asseties",
    path: "asseties",
    image_url: "asseties-cover.jpg",
    description: `
      Programadores criam muitos projetos e dispersam suas implementações, esse projeto visa criar um índice entre todos os projetos para facilitar consulta de implementações.
    `,
    importance: "casual",
    technologies: ["REACT", "TAILWINDCSS", "VERCEL"],
    url: "https://github.com/vitormarkis/asseties",
  },
]

type IUseProjects = (props?: IUseProjectsProps) => { projects: IProjectLink[] }

interface IUseProjectsProps {
  sort?: "importance" | undefined
  omit?: IProjectLink["importance"][]
}

export const useProjects: IUseProjects = props => {
  let projects = projectsData
  if (!props) return { projects }
  const { sort, omit } = props

  if (sort) {
    if (sort === "importance") {
      projects = projects.sort((a, b) => (a.importance < b.importance ? 1 : a.importance > b.importance ? -1 : 0))
    }
  }

  if(omit) {
    projects = projects.filter(p => !omit.includes(p.importance))
  }

  return { projects }
}
