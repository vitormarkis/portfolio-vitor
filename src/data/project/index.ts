export type ProjectTechnologies =
  | "PRISMA"
  | "TAILWINDCSS"
  | "MYSQL"
  | "NEXT"
  | "REACT"
  | "EXPRESS"
  | "GOOGLE_SHEETS"
  | "STYLED_COMPONENTS"

export interface IProjectLink {
  id: number
  name: string
  path: string
  image_url: string
  description: string
  importance: "casual" | "important"
  technologies: ProjectTechnologies[]
}

export const projectLinks: IProjectLink[] = [
  {
    id: Math.random(),
    name: "Auction App",
    path: "/auction-app",
    image_url: "auction-app.jpg",
    description: "Compre e venda o que quiser, pelo preço que quiser!",
    importance: "important",
    technologies: ["NEXT", "MYSQL", "TAILWINDCSS", "PRISMA"],
  },
  {
    id: Math.random(),
    name: "Ike Linktree",
    path: "ike-linktree",
    image_url: "ike-consertos.jpg",
    description:
      "Índice de contato para um assistente técnico da minha região.",
    importance: "casual",
    technologies: ["NEXT", "TAILWINDCSS"],
  },
  {
    id: Math.random(),
    name: "Twitter Clone",
    path: "twitter-clone",
    image_url: "twitter-frontend.jpg",
    description: "Clone da interface do Twitter totalmente responsivo.",
    importance: "casual",
    technologies: ["REACT", "STYLED_COMPONENTS"],
  },
  {
    id: Math.random(),
    name: "Custom Social Media",
    path: "custom-social-media",
    image_url: "custom-social-media.jpg",
    description: "Rede social criada com NodeJS, Express e MySQL.",
    importance: "casual",
    technologies: ["EXPRESS", "MYSQL", "REACT", "TAILWINDCSS"],
  },
  {
    id: Math.random(),
    name: "Análise de Estruturas",
    path: "analise-de-estruturas",
    image_url: "analise-de-estruturas.jpg",
    description: "A melhor forma de analisar campanhas de empresas.",
    importance: "important",
    technologies: ["GOOGLE_SHEETS"],
  },
]
