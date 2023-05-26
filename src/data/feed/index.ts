import { DefaultColors } from "tailwindcss/types/generated/colors"

export type TImportance =
  | "important"
  | "casual"
  | "issue"
  | "implementation"
  | "willing_to_do"
  | "off_topic"
  | "discover"

type TTags = {
  importances: Array<{
    importance: TImportance
    title: string
    color: keyof DefaultColors
  }>
}

export const tags: TTags = {
  importances: [
    {
      importance: "important",
      title: "Importante",
      color: "red",
    },
    {
      importance: "casual",
      title: "Casual",
      color: "blue",
    },
    {
      importance: "implementation",
      title: "Implementação",
      color: "green",
    },
    {
      importance: "issue",
      title: "Problema",
      color: "fuchsia",
    },
    {
      importance: "willing_to_do",
      title: "Querendo fazer",
      color: "indigo",
    },
    {
      importance: "off_topic",
      title: "Off topic",
      color: "amber",
    },
    {
      importance: "discover",
      title: "Aprendizado",
      color: "sky",
    },
  ],
}

export type IFeedPost = {
  id: number
  title: string
  text: string
  created_at: string
  refs?: Array<{
    id: string
    title: string
    url: string
  }>
  importance: TImportance[]
}

export const feedData: IFeedPost[] = [
  {
    id: 2635243498584344,
    title: "Botão de Contact na Header em outras páginas",
    text: `
      Agora na Home, o botão de contact na header ta funcionando, mas ele não funciona em outras páginas.

      Eu vou fazer com que caso ele não esteja na home, ele mude de página e então de o foco. Por agora eu tenho ideia de como vou implementar, mas a sequencia de trocar de página e então scrollar que é algo que vou aprender, talvez com promises? Espero que seja.
    `.trim(),
    created_at: "2023-05-26T08:59:25.349Z",
    importance: ["willing_to_do", "issue"],
  },
  {
    id: 3456345739233906,
    title: "Rolar para seção de Contato",
    text: `
      Agora o botão de contato no header, finalmente desce até a seção de contato.
      
      Pra isso, eu criei um estado que armazena e define a referência da div Contato.

      No componente Contact, eu registro essa ref nos estados usando useEffect.

      E quando eu clico no botão de contact no header, eu uso o scrollIntoView pra descer até a seção de Contato. [#1]
    `.trim(),
    created_at: "2023-05-26T08:51:42.642Z",
    importance: ["implementation", "casual"],
    refs: [
      {
        id: "in3840t83j",
        title: "[commit #1] scroll to contact now",
        url: "https://github.com/vitormarkis/portfolio-vitor/commit/35ff48988e92862178ffaebde1794afc7eaee498",
      },
    ],
  },
  {
    id: 3847538947209374,
    title: "Toolbar agora some quando chegar no final da página",
    text: `
      Implementei a funcionalidade de sumir a toolbar quando chega no fim da página do blog.

      Pra isso eu primeiro criei um estado booleano que define se o footer ta visível. [#01]
      
      Pra isso eu usei Intersection Observer, onde eu registrei o footer da página nele, e quando ele está visível ele define o estado como true.

      Agora no elemento da toolbar, eu seto display none quando o estado ser true, que é quando o footer está visível. [#02]
    `.trim(),
    created_at: "2023-05-23T21:04:24.849Z",
    importance: ["implementation", "important"],
    refs: [
      {
        id: "n294hf982n",
        title: "[commit #01] create useToolbarVisibility hook",
        url: "https://github.com/vitormarkis/portfolio-vitor/commit/10caa3e5e4500fb7829e6c02f8a8c9ebffb1b018",
      },
      {
        id: "fn974b29f",
        title: "[commit #02] hide toolbar on blog post when reaches end of the page",
        url: "https://github.com/vitormarkis/portfolio-vitor/commit/127078c48e60147922f20f399ed7f516eb92a1dc",
      },
    ],
  },
  {
    id: 8957485854834985,
    title: "Toolbar sumir quando chegar fim da página",
    text: `
    Eu vou adicionar uma funcionalidade de sumir o elemento flutuante da toolbar quando chegar no final da página. 
    `.trim(),
    created_at: "2023-05-21T19:04:36.042Z",
    importance: ["willing_to_do", "important"],
  },
  {
    id: 657384290485748,
    title: "Adicionar toolbar",
    text: `
    Vou adicionar um toolbar na página do blog para filtrar ele e acessar melhor os posts.
    `.trim(),
    created_at: "2023-05-21T06:06:01.263Z",
    importance: ["willing_to_do", "casual"],
  },
  {
    id: 457384758374587,
    title: "Persistir histórico vertical do usuário entre navegações",
    text: `
      Eu adicionei essa funcionalidade de manter a posição vertical do usuário na página de projetos entre navegações, a implementação pode não ter sido a melhor, mas foi a que consegui com meu conhecimento atual.

      Eu usei javascript pra implementar. Criei um arquivo de layout, onde eu intercepto o children e entorno ele com um client component contendo a lógica. [#01]

      A lógica que usei foi, assim que o usuário clicar para abrir um dos projetos, ele salva no Session Storage, um objeto { top: XXX } sendo XXX a posição que o usuário estava verticalmente no momento do clique, como se fosse um snapshot.

      E com um useEffect dentro da página de projects, eu pego esse objeto do Session Storage e faço a div scrollável descer até ponto que está salvo no Session Storage.

      Surge um pequeno bug, outros tentativas de acessar a página de projetos, como na home ou na navbar por exemplo, são movidas para o ponto salvo na Session Storage. Para consertar, eu coloquei uma função handler no clique desses links settando a propriedade top do objeto salvo no Session Storage com 0, fazendo que a página quando carregada, vá para o topo. [#02]

      Eu salvei a ref da div scrollável, que fica no layout root, dentro de um store do Zustand, e acesso ele pelo layout da rota /projects.
    `.trim(),
    created_at: "2023-05-20T06:45:01.493Z",
    importance: ["implementation", "important"],
    refs: [
      {
        id: "s1g8d1fgd1",
        title: "[commit #01] add persist user vertical position on projects page",
        url: "https://github.com/vitormarkis/portfolio-vitor/commit/0a8ed96c333aef79edbf1f350786361371f03051",
      },
      {
        id: "h7349gb394",
        title: "[commit #02] scroll back to top when click see projects in other places",
        url: "https://github.com/vitormarkis/portfolio-vitor/commit/f7d014fb957f76838171a7e810fada426d3166b4",
      },
    ],
  },
  {
    id: 487583475937453,
    title: "Quero adicionar persistência da posição vertical do usuário",
    text: `
      Dado o relato anterior, eu quero adicionar uma funcionalidade de preservar a posição vertical do usuário entre navegações ida e volta, como o feed to Twitter, você abre um post, mas quando volta, ele volta exatamente aonde você estava.

      Isso é super simples de fazer com javascript, mas eu to usando server components, então o approach precisa ser diferente.

      Eu imagino que uma vez que a página esteja baixada no client, um post é aberto, a página de feed não seja perdida, então quando voltar, ele deveria voltar no feed sem mudar absolutamente nada, nem mesmo o scroll vertical, mas pelo contrário, ele muda o scroll lá pra cima.

      No momento desse post eu ainda to procurando uma solução pra esse problema.
    `.trim(),
    created_at: "2023-05-18T20:04:13.938Z",
    importance: ["willing_to_do"],
  },
  {
    id: 539475983475893,
    title: "Re-aprender React com Server Components",
    text: `
      Relato, não gosto de React Server Pages/Components, é tudo menos intuitivo, qualquer solução que você pense em fazer, você precisa esperar que seu framework ja tenha implementado isso de forma nativa para Server Components, caso contrário terá que usar client component.
      
      A relação entre o que pode ser compartilhado entre client e server é muito nebulosa, o que ta disponível pra ser usado muda, hooks e state management ficam super engessados. Praticamente você precisa re-aprender a usar React.
    `.trim(),
    created_at: "2023-05-18T20:00:13.938Z",
    importance: ["off_topic"],
  },
  {
    id: 87539847598379,
    title: "Solução momentânea para elemento gigante por causa dos 100vw",
    text: `
      A única solução que eu consegui pensar para esse problema, foi usar "width: min(var(--tamanho_do_elemento), calc(100vw - paddings))" e funciona perfeitamente, por algum motivo, "width: min(fit-content, calc(100vw - paddings))" não funciona, mas seria perfeito na ocasião, então o que me restou foi usar uma variável CSS a nível de tabela, para definir seu width de forma manual.
    `.trim(),
    created_at: "2023-05-14T18:19:36.835Z",
    importance: ["implementation", "important"],
  },
  {
    id: 37458734857384,
    title: "Bug ao usar max-width: fit-content",
    text: `
      Aplicado a solução responsiva hard coded, surge outro problema, 100vw - paddings em telas maiores, a tabela fica imensa, então eu teria que aplicar uma forma de limitar o tamanho da tabela até certo ponto, ponto esse que poderia ser seu tamanho mínimo, sem scroll horizontal, e sem crescer além do necessário.

      Colocando "max-width: fit-content;" ele funciona a primeira vista, mas ai acontece algo que eu não sabia e me deixou triste.

      O max-width apenas limita o tamanho do que nós vemos, porém o width continua do mesmo tamanho no contexto, o que ocasiona em toda a section estar sendo esticada porque "100vw - paddings" estava esticando toda a largura da section, mesmo com max-width.
    `.trim(),
    created_at: "2023-05-14T22:21:34.772Z",
    importance: ["issue", "casual"],
  },
  {
    id: 3475837458738,
    title: "Falhei em tentar tornar elemento responsivo",
    text: `
      Criando a página do projeto "Análise de Estruturas", me deparei com um problema na hora de criar a tabelas, elas não são responsivas por padrão.

      Eu tentei várias formas de deixar elas responsivas de forma dinâmica, mas não consegui, a única coisa que funcionou foi fazer "100vw - paddings", o que é uma solução funcional mas não é dinâmica, caso eu mude os paddings da section, eu teria que mudar nessa outra parte do código também.
    `.trim(),
    created_at: "2023-05-14T18:10:36.835Z",
    importance: ["issue", "casual"],
  },
  {
    id: 3463576457455,
    title: "Renderizações client e server de forma controlada",
    text: `
      Aprendi que existe como importar coisas de forma mais dinâmica usando next/dynamic.

      No meu caso eu tinha um componente que tava dando erro de conteúdo sendo renderizado de forma diferente no server e no client. Eu resolvi isso usando o next/dynamic dizendoq que o componente seria apenas carregado no client side.

      const Component = dynamic(() => import("./Component").then(mod => mod.Component), { ssr: false })
    `.trim(),
    created_at: "2023-05-02T16:47:54.106Z",
    importance: ["discover", "casual"],
  },
  {
    id: 8346354657345,
    title: "Fonte não carrega sem explicação",
    text: `
      Por algum motivo que ainda não sei, a fonte Montserrat, em dev mode não estava sendo carregada na página, inspencionando, a classe estava la, mas não aparecia na seção onde tinha as classes e suas propriedades.

      Talvez seja algum problema relacionando a má configuração.
    `.trim(),
    created_at: "2023-04-28T22:15:52.149Z",
    importance: ["issue", "casual"],
  },
  {
    id: 64573645736475,
    title: "Usar next fonts em client components",
    text: `
      Pra usar uma fonte do next em um client, é só envolver o elemento com um Server Side Component que contenha aquela font.

      edit: se usar tailwind da pra as variants pra colocar a fonte de forma dinamica a nivel de elemento
    `.trim(),
    created_at: "2023-04-28T22:15:42.149Z",
    importance: ["discover"],
  },
  {
    id: 64375637456378,
    title: "Atenção ao imprimir parágrafos vindos de um .split()",
    text: `
      Quando imprimir paragrafos de texto em tags HTML, na key deve se colocar também o índice, dado que surgirão paragrafos de string vazias ${"``"} mais de uma vez, não sendo útil para ser usado como key de um elemento.
    `.trim(),
    created_at: "2023-04-26T17:14:39.293Z",
    importance: ["discover"],
  },
  {
    id: 78645382947444,
    title: "Erro ao utilizar tag a dentro de outra",
    text: `
      Portfólio: Tava dando um erro de UI não correspondendo ao HTML enviado pelo servidor, porque eu tava utilizando uma tag Link dentro da outra.
    `.trim(),
    created_at: "2023-04-26T17:14:36.293Z",
    importance: ["issue", "important"],
  },
  {
    id: 47723845764738,
    title: "Dor de cabeça usando Next Image 😩",
    text: `
      Tentei colocar minha foto de perfil na sessão Sobre Mim com a tag <Image /> do Next, mas é uma dor de cabeça ajustar o tamanho da imagem, se tu quiser ela quadrada então, esquece.

      Optei pela e velha boa tag <img />
    `.trim(),
    created_at: "2023-04-24T23:03:33.299Z",
    importance: ["issue", "casual"],
  },
  {
    id: 95748357674895,
    title: "Pausa no meu projeto principal",
    text: `
      O meu projeto Auction App infelizmente vai ficar pausado por um tempo até eu finalizar meu portfólio.

      Eu descobri também que a Vercel é serverless, o que impede o agendamento de ações dentro do servidor, ou seja, não consigo fazer com que anuncios sejam finalizados de forma automática nem consigo enviar notificações para os usuários.

      Até que eu encontre uma solução para isso, eu vou deixar o projeto adormecido.
    `.trim(),
    created_at: "2023-04-21T17:42:47.548Z",
    importance: ["important", "off_topic"],
  },
  {
    id: 4735894739534,
    title: "Bug ao usar next font, font não aplica",
    text: `
      Por algum motivo que ainda não sei, a fonte Montserrat, em dev mode não estava sendo carregada na página, inspencionando, a classe estava la, mas não aparecia na seção onde tinha as classes e suas propriedades.

      Talvez seja algum problema relacionando a má configuração.
    `.trim(),
    created_at: "2023-04-28T17:42:47.548Z",
    importance: ["issue", "casual"],
  },
  {
    id: 85784395884395,
    title: "Criar portfólio com React ou Next?",
    text: `
      Sobre desenvolver o portfólio, eu realmente estive indeciso entre user React puro e Next.
      Next possui um superset de funcionalidades que são essenciais para produção, principalmente para servir as páginas já prontas de forma estática.

      Já o React puro, precisa montar a página em runtime, porém ele é muuito mais rápido para desenvolver, coisa que o Next com certeza não é, o hot reload do Next não é amigável.
    `.trim(),
    created_at: "2023-04-24T17:42:47.548Z",
    importance: ["off_topic", "casual"],
  },
  {
    id: 84756473857435,
    title: "Saudades de trabalhar no Auction App",
    text: `
      Assim que eu acabar meu portfólio, vou voltar a trabalhar no Auction App para resolver o problema de agendamento de ações, envio de notificações, e upload de arquivos para uma CDN, para assim finalizar a primeira versão daquele projeto.
    `.trim(),
    created_at: "2023-04-24T18:42:47.548Z",
    importance: ["off_topic", "important"],
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
