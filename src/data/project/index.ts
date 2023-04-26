interface IProjectLink {
  id: number
  name: string
  path: string
  image_url: string
  importance: "casual" | "important"
}

export const projectLinks: IProjectLink[] = [
  {
    id: Math.random(),
    name: "Auction App",
    path: "/auction-app",
    image_url: "auction-app.jpg",
    importance: "important",
  },
  {
    id: Math.random(),
    name: "Ike Linktree",
    path: "ike-linktree",
    image_url: "ike-consertos.jpg",
    importance: "casual",
  },
  {
    id: Math.random(),
    name: "Twitter Clone",
    path: "twitter-clone",
    image_url: "twitter-frontend.jpg",
    importance: "casual",
  },
  {
    id: Math.random(),
    name: "Custom Social Media",
    path: "custom-social-media",
    image_url: "custom-social-media.jpg",
    importance: "casual",
  },
  {
    id: Math.random(),
    name: "Análise de Estruturas",
    path: "analise-de-estruturas",
    image_url: "analise-de-estruturas.jpg",
    importance: "important",
  },
]
