export type IFeedPost = {
  id: number
  text: string
  created_at: string
}

export const feedData: IFeedPost[] = [
  {
    id: 8346354657345,
    text: `
      Por algum motivo que ainda não sei, a fonte Montserrat, em dev mode não estava sendo carregada na página, inspencionando, a classe estava la, mas não aparecia na seção onde tinha as classes e suas propriedades.

      Talvez seja algum problema relacionando a má configuração.
    `.trim(),
    created_at: "2023-04-28T22:15:52.149Z",
  },
  {
    id: 64573645736475,
    text: `
      Pra usar uma fonte do next em um client, é só envolver o elemento com um Server Side Component que contenha aquela font.
    `.trim(),
    created_at: "2023-04-28T22:15:42.149Z",
  },
  {
    id: 64375637456378,
    text: `
      Quando imprimir paragrafos de texto em tags HTML, na key deve se colocar também o índice, dado que surgirão paragrafos de string vazias ${"``"} mais de uma vez, não sendo útil para ser usado como key de um elemento.
    `.trim(),
    created_at: "2023-04-26T17:14:39.293Z",
  },
  {
    id: 78645382947444,
    text: `
      Portfólio: Tava dando um erro de UI não correspondendo ao HTML enviado pelo servidor, porque eu tava utilizando uma tag Link dentro da outra.
    `.trim(),
    created_at: "2023-04-26T17:14:36.293Z",
  },
  {
    id: 47723845764738,
    text: `
      Tentei colocar minha foto de perfil na sessão Sobre Mim com a tag <Image /> do Next, mas é uma dor de cabeça ajustar o tamanho da imagem, se tu quiser ela quadrada então, esquece.

      Optei pela e velha boa tag <img />
    `.trim(),
    created_at: "2023-04-24T23:03:33.299Z",
  },
  {
    id: 95748357674895,
    text: `
      O meu projeto Auction App infelizmente vai ficar pausado por um tempo até eu finalizar meu portfólio.

      Eu descobri também que a Vercel é serverless, o que impede o agendamento de ações dentro do servidor, ou seja, não consigo fazer com que anuncios sejam finalizados de forma automática nem consigo enviar notificações para os usuários.

      Até que eu encontre uma solução para isso, eu vou deixar o projeto adormecido.
    `.trim(),
    created_at: "2023-04-21T17:42:47.548Z",
  },
  {
    id: 4735894739534,
    text: `
      Por algum motivo que ainda não sei, a fonte Montserrat, em dev mode não estava sendo carregada na página, inspencionando, a classe estava la, mas não aparecia na seção onde tinha as classes e suas propriedades.

      Talvez seja algum problema relacionando a má configuração.
    `.trim(),
    created_at: "2024-04-28T22:15:52.149Z",
  },
  {
    id: 85784395884395,
    text: `
      Sobre desenvolver o portfólio, eu realmente estive indeciso entre user React puro e Next.
      Next possui um superset de funcionalidades que são essenciais para produção, principalmente para servir as páginas já prontas de forma estática.

      Já o React puro, precisa montar a página em runtime, porém ele é muuito mais rápido para desenvolver, coisa que o Next com certeza não é, o hot reload do Next não é amigável.
    `.trim(),
    created_at: "2023-04-24T17:42:47.548Z",
  },
  {
    id: 84756473857435,
    text: `
      Assim que eu acabar meu portfólio, vou voltar a trabalhar no Auction App para resolver o problema de agendamento de ações, envio de notificações, e upload de arquivos para uma CDN, para assim finalizar a primeira versão daquele projeto.
    `.trim(),
    created_at: "2023-04-24T18:42:47.548Z",
  },
]

type IUseFeed = (props?: IUseFeedProps) => { feed: IFeedPost[] }

interface IUseFeedProps {
  sort?: "date" | "importance"
}

export const useFeed: IUseFeed = (props) => {
  let feed = feedData
  if (!props) return { feed }
  const { sort } = props

  if (sort) {
    if (sort === "date") {
      feed = feed.sort((a, b) =>
        a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0
      )
    }

    if (sort === "importance") {
      feed = feed
    }
  }

  return { feed }
}
