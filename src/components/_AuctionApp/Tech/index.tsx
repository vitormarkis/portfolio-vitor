"use client"
import { CenteredContainer } from "@/components/CenteredContainer"
import { IconTechnology } from "@/components/IconTechnology"
import { ProjectTechnologies } from "@/data/project"
import React, { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Tech({ className, ...rest }: Props) {
  return (
    <div className={`bg-slate-950 text-white ${className ?? ""}`} {...rest}>
      <CenteredContainer className="px-6 py-8 flex flex-col gap-8">
        <div>
          <h3 className="font-black text-2xl tracking-tight font-josefin relative h1-third">Implementações</h3>
          <ol className="text-sm list-inside list-decimal text-slate-300">
            <li>Criação de conta</li>
            <li>Autenticação via JWT</li>
            <li>Autenticação Social &#40;Google e Github&#41;</li>
            <li>Criar posts</li>
            <li>Ver lances em seu post</li>
            <li>Salvar posts</li>
            <li>Ver posts salvos</li>
            <li>Fazer lances</li>
            <li>Ver posts os quais você fez lance</li>
            <li>Notificações persistidas em banco de dados</li>
            <li>Fazer perguntas no post</li>
            <li>Ver suas aquisições</li>
            <li>Carrossel de imagens na página do produto</li>
          </ol>
        </div>
        <div>
          <h3 className="font-black text-2xl tracking-tight font-josefin relative h1-seccon">Tecnologias Usadas</h3>
          <div className="text-sm text-slate-300 flex flex-col gap-3">
            <TechnologyIcon
              icon="NEXT"
              technology="Next"
              text="por ser um superset do React, com diversas funcionalidades nativas e essenciais
              para produção. --br--br Usei as API Routes do Next para criação do meu backend e provisão dos dados necessários."
            />
            <TechnologyIcon
              icon="PRISMA"
              technology="Prisma"
              text="foi usado para fazer a conexão, as escritas e consultas ao banco de dados. --br--br É o primeiro ORM que aprendi a usar, através de muita pesquisa, e amei a integração dele com Typescript, torna o processo de consulta e escrita muito menos custoso e mais prático."
            />
            <TechnologyIcon
              icon="TAILWINDCSS"
              technology="Tailwind"
              text="usei para fazer a estilização dos componentes. Escolhi Tailwind porque além de prático, ele provê estilos, cores e presets mais opinados e modernos, o shadow é um ótimo exemplo. --br--br Ele também torna a responsividade algo muito mais fácil e prático, porém ainda existem coisas que precisam ser feitas com CSS puro, porque a mesma configuração pelo Tailwind seria muito verbosa."
            />
            <TechnologyIcon
              icon="MYSQL"
              technology="MYSQL"
              text="usei como banco de dados da aplicação, foi o primeiro banco de dados relacional que aprendi, então era o que eu tinha mais familiaridade. --br--br Ouço falar que bancos de dados como Postgre e MYSQL são os melhores para grandes aplicações, apesar de seus tradeoffs. --br--br O que me faz querer usar MYSQL em todos projetos é porque bons serviços de hospedagem de banco de dados como PlanetScale usam MYSQL."
            />
            <TechnologyIcon
              icon="VERCEL"
              technology="Vercel"
              text="usado para hospedar a aplicação, escolhi a Vercel porque é muito simples fazer deploy lá, eles possuem uma ótima integração nativa com o Next, então seria o habit natural para uma aplicação Next. --br--br A Vercel oferece uma variedade de funcionalidades que integram muito bem com Next. --br--br Uma delas é sem dúvidas servir as páginas de forma estáticas, tornando a navegação quase instantânea entre as páginas da aplicação.--br--br Um tradeoff é que o ambiente da Vercel é serverless, causando um problema chamado cold start, que, pelo fato do servidor rodar apenas quando há uma requisição, ele precisa iniciar o servidor, fazer a conexão com o banco de dados, fazer as consultas/escritas, enviar ao servidor e o servidor retorna a resposta ao client, e todo esse processo demora um bom tempo, fazendo com que a primeira vez que carregada a página demora bastante até carrega-la."
            />
          </div>
        </div>
      </CenteredContainer>
    </div>
  )
}

interface ITechnologyIcon extends HTMLAttributes<HTMLDivElement> {
  icon: ProjectTechnologies
  text: string
  technology: string
}

export function TechnologyIcon({ icon, text, technology, className, ...rest }: ITechnologyIcon) {
  const formattedText = text.split(/(--br|--mg)/).map((part, index) => {
    if (part === "--br") return <br key={index} />
    if (part === "--mg") return <span className="inline-block mx-2" />
    return <React.Fragment key={index}>{part.trim()}</React.Fragment>
  })

  return (
    <div
      className={`p-3 border border-dashed border-slate-700 shadow-lg shadow-black/30 bg-slate-950 rounded ${
        className ?? ""
      }`}
      {...rest}
    >
      <p className="mb-4 last:mb-0">
        <IconTechnology icon={icon} width={14} height={14} color={twc.white} className="mr-1 translate-y-[-1.5px]" />
        <strong>{technology}</strong>
        {", "}
        {formattedText}
      </p>
    </div>
  )
}
