export type IFeedPost = {
  id: number
  text: string
  created_at: string
}

export const feedData: IFeedPost[] = [
  {
    id: 487583475937453,
    text: `
      Dado o relato anterior, eu quero adicionar uma funcionalidade de preservar a posição vertical do usuário entre navegações ida e volta, como o feed to Twitter, você abre um post, mas quando volta, ele volta exatamente aonde você estava.

      Isso é super simples de fazer com javascript, mas eu to usando server components, então o approach precisa ser diferente.

      Eu imagino que uma vez que a página esteja baixada no client, um post é aberto, a página de feed não seja perdida, então quando voltar, ele deveria voltar no feed sem mudar absolutamente nada, nem mesmo o scroll vertical, mas pelo contrário, ele muda o scroll lá pra cima.

      No momento desse post eu ainda to procurando uma solução pra esse problema.
    `.trim(),
    created_at: "2023-05-18T20:04:13.938Z",
  },
  {
    id: 539475983475893,
    text: `
      Relato, não gosto de React Server Pages/Components, é tudo menos intuitivo, qualquer solução que você pense em fazer, você precisa esperar que seu framework ja tenha implementado isso de forma nativa para Server Components, caso contrário terá que usar client component.
      
      A relação entre o que pode ser compartilhado entre client e server é muito nebulosa, o que ta disponível pra ser usado muda, hooks e state management ficam super engessados. Praticamente você precisa re-aprender a usar React.
    `.trim(),
    created_at: "2023-05-18T20:00:13.938Z",
  },
  {
    id: 87539847598379,
    text: `
      A única solução que eu consegui pensar para esse problema, foi usar "width: min(var(--tamanho_do_elemento), calc(100vw - paddings))" e funciona perfeitamente, por algum motivo, "width: min(fit-content, calc(100vw - paddings))" não funciona, mas seria perfeito na ocasião, então o que me restou foi usar uma variável CSS a nível de tabela, para definir seu width de forma manual.
    `.trim(),
    created_at: "2023-05-14T18:19:36.835Z",
  },
  {
    id: 37458734857384,
    text: `
      Aplicado a solução responsiva hard coded, surge outro problema, 100vw - paddings em telas maiores, a tabela fica imensa, então eu teria que aplicar uma forma de limitar o tamanho da tabela até certo ponto, ponto esse que poderia ser seu tamanho mínimo, sem scroll horizontal, e sem crescer além do necessário.

      Colocando "max-width: fit-content;" ele funciona a primeira vista, mas ai acontece algo que eu não sabia e me deixou triste.

      O max-width apenas limita o tamanho do que nós vemos, porém o width continua do mesmo tamanho no contexto, o que ocasiona em toda a section estar sendo esticada porque "100vw - paddings" estava esticando toda a largura da section, mesmo com max-width.
    `.trim(),
    created_at: "2023-05-14T18:15:36.835Z",
  },
  {
    id: 3475837458738,
    text: `
      Criando a página do projeto "Análise de Estruturas", me deparei com um problema na hora de criar a tabelas, elas não são responsivas por padrão.

      Eu tentei várias formas de deixar elas responsivas de forma dinâmica, mas não consegui, a única coisa que funcionou foi fazer "100vw - paddings", o que é uma solução funcional mas não é dinâmica, caso eu mude os paddings da section, eu teria que mudar nessa outra parte do código também.
    `.trim(),
    created_at: "2023-05-14T18:10:36.835Z",
  },
  {
    id: 3463576457455,
    text: `
      Aprendi que existe como importar coisas de forma mais dinâmica usando next/dynamic.

      No meu caso eu tinha um componente que tava dando erro de conteúdo sendo renderizado de forma diferente no server e no client. Eu resolvi isso usando o next/dynamic dizendoq que o componente seria apenas carregado no client side.

      const Component = dynamic(() => import("./Component").then(mod => mod.Component), { ssr: false })
    `.trim(),
    created_at: "2023-05-02T16:47:54.106Z",
  },
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

export const useFeed: IUseFeed = props => {
  let feed = feedData
  if (!props) return { feed }
  const { sort } = props

  if (sort) {
    if (sort === "date") {
      feed = feed.sort((a, b) => (a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0))
    }

    if (sort === "importance") {
      feed = feed
    }
  }

  return { feed }
}
