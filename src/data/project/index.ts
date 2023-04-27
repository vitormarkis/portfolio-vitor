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
  short_description: string
  description: string
  importance: "casual" | "important"
  technologies: ProjectTechnologies[]
  url: string
}

export const projectLinks: IProjectLink[] = [
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
    technologies: ["NEXT", "MYSQL", "TAILWINDCSS", "PRISMA"],
    url: "https://auction-alpha.vercel.app/",
  },
  {
    id: Math.random(),
    name: "Ike Linktree",
    path: "ike-linktree",
    image_url: "ike-consertos.jpg",
    short_description:
      "Índice de contato para um assistente técnico da minha região.",
    description: "",
    importance: "casual",
    technologies: ["NEXT", "TAILWINDCSS"],
    url: "",
  },
  {
    id: Math.random(),
    name: "Twitter Clone",
    path: "twitter-clone",
    image_url: "twitter-frontend.jpg",
    short_description: "Clone da interface do Twitter totalmente responsivo.",
    description: "",
    importance: "casual",
    technologies: ["REACT", "STYLED_COMPONENTS"],
    url: "",
  },
  {
    id: Math.random(),
    name: "Custom Social Media",
    path: "custom-social-media",
    image_url: "custom-social-media.jpg",
    short_description: "Rede social criada com NodeJS, Express e MySQL.",
    description: "",
    importance: "casual",
    technologies: ["EXPRESS", "MYSQL", "REACT", "TAILWINDCSS"],
    url: "",
  },
  {
    id: Math.random(),
    name: "Análise de Estruturas",
    path: "analise-de-estruturas",
    image_url: "analise-de-estruturas.jpg",
    short_description: "A melhor forma de analisar campanhas de empresas.",
    description: "",
    importance: "important",
    technologies: ["GOOGLE_SHEETS"],
    url: "",
  },
]
