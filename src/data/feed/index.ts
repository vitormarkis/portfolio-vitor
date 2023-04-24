export const feed = [
  {
    id: (() => Math.random())(),
    text: `
      O meu projeto Auction App infelizmente vai ficar pausado por um tempo até eu finalizar meu portfólio.

      Eu descobri também que a Vercel é serverless, o que impede o agendamento de ações dentro do servidor, ou seja, não consigo fazer com que anuncios sejam finalizados de forma automática nem consigo enviar notificações para os usuários.

      Até que eu encontre uma solução para isso, eu vou deixar o projeto adormecido.
    `.trim(),
    created_at: "2023-04-21T17:42:47.548Z",
  },
  {
    id: (() => Math.random())(),
    text: `
      Sobre desenvolver o portfólio, eu realtime estive indeciso entre React e Next.
      Next é superset de funcionalidades que são essesnciais para produção, principalmente servir as páginas já prontas de forma estáticas.

      Já o React puro, precisa montar a página, porém ele é muuito mais rápido pra desenvolver, coisa que o Next com certeza não é, o hot reload do Next não é amigável 
    `.trim(),
    created_at: "2023-04-24T17:42:47.548Z",
  },
  {
    id: (() => Math.random())(),
    text: `
      Assim que eu acabar meu portfólio, vou voltar a trabalhar no Auction App para resolver o problema de agendamento de ações, envio de notificações, e upload de arquivos para uma CDN, para assim finalizar a primeira versão daquele projeto.
    `.trim(),
    created_at: "2023-04-24T18:42:47.548Z",
  },
]
