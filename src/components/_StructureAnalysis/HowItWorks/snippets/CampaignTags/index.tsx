import React from "react"
import st from "@/components/_StructureAnalysis/HowItWorks/styles.module.css"
import { ProjectFeature } from "@/components/_StructureAnalysis/HowItWorks/Snippets"
import { Table } from "@/components/_StructureAnalysis/HowItWorks/Table"
import { TableCol } from "@/components/_StructureAnalysis/HowItWorks/Table/TableCol"
import { TableNode } from "@/components/_StructureAnalysis/HowItWorks/Table/TableNode"
import twc from "tailwindcss/colors"
import { TableSelect } from "@/components/_StructureAnalysis/HowItWorks/Table/TableSelect"

interface ICampaignTags extends React.ComponentProps<"div"> {}

export const descricao_com_emojis = ["Com emojis", "Sem emojis"]
export const genero_protagonista_da_midia = ["Homem", "Mulher"]
export const framework_de_copywritting = ["AIDA", "PAS", "4P's"]
export const posicionamento = ["Reel", "Feed", "Story"]

export function CampaignTags({ className, ...rest }: ICampaignTags) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center" + _cn} {...rest}>
      <div className="flex flex-col items-center">
        <div>
          {/* <SectionNumber number={1} className="mr-2" /> */}
          <span className="text-base">
            Dentro da planilha, na página{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1lweqynj7onpKU7s9df2c8AaFMxAzWz12yZyfqWoLC9Q/edit#gid=0"
              target="_blank"
              className="text-blue-600 underline visited:text-blue-900"
            >
              Dados
            </a>
            , cada linha é uma campanha.
          </span>
        </div>
        <div className={st.wrapper}>
          <div className={st.border + ` ${st["bd-blackwhite-to-b"]}`} />
          <Table>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head>
                tipo mídia
              </TableNode>
              <TableNode>imagem</TableNode>
              <TableNode>vídeo</TableNode>
              <TableNode>imagem</TableNode>
              <TableNode>vídeo</TableNode>
            </TableCol>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head>
                formato mídia
              </TableNode>
              <TableNode>feed</TableNode>
              <TableNode>reels</TableNode>
              <TableNode>feed</TableNode>
              <TableNode>stories</TableNode>
            </TableCol>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head>
                modelo pessoa
              </TableNode>
              <TableNode>homem</TableNode>
              <TableNode>mulher</TableNode>
              <TableNode>sem</TableNode>
              <TableNode>sem</TableNode>
            </TableCol>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head last>
                gatilho mental
              </TableNode>
              <TableNode last>urgência</TableNode>
              <TableNode last>escassez</TableNode>
              <TableNode last>sem</TableNode>
              <TableNode last>novidade</TableNode>
            </TableCol>
          </Table>
        </div>
      </div>
      <div>
        <p>
          <strong>O que são tags?</strong> Tags são detalhes daquilo que você ta analisando, no caso, detalhes da
          campanha, como tipo de mídia, tipo de descrição, framework de descrição, CTA, cores predominantes,
          segmentação, faixa etária, etc.
        </p>
        <p>
          Pode ser entendido como uma tag, detalhes que possui mais de um concorrente, como por exemplo, cor
          predominante: <Strong>azul</Strong>, <Strong>vermelho</Strong>, <Strong>roxo</Strong>. Nesse caso, a tag{" "}
          <Strong>cor predominante</Strong> possui 3 concorrentes para o poste de melhor cor predominante.
        </p>
        <p>O mesmo vale para outras tags como:</p>
        --descrição com emojis("com emojis", "sem emojis"), --gênero protagonista da mídia ("homem", "mulher"),
        --framework de copywritting("AIDA", "PAS", "4P's"), --posicionamento("reel", "feed", "story")
        <div className={st.wrapper}>
          <div className={st.border + ` ${st["bd-blackwhite-to-tr"]}`} />
          <Table>
            <TableCol>
              <TableNode left>Descrição com Emojis</TableNode>
              <TableNode left>Gênero Protagonista da Mídia</TableNode>
              <TableNode left>Framework de Copywritting</TableNode>
              <TableNode left>Posicionamento</TableNode>
            </TableCol>
            <TableCol>
              <TableNode last>
                <TableSelect values={descricao_com_emojis} backgroundColor={twc.red["200"]} color={twc.red["600"]} />
              </TableNode>
              <TableNode last>
                <TableSelect
                  values={genero_protagonista_da_midia}
                  backgroundColor={twc.amber["200"]}
                  color={twc.amber["600"]}
                />
              </TableNode>
              <TableNode last>
                <TableSelect
                  values={framework_de_copywritting}
                  backgroundColor={twc.green["200"]}
                  color={twc.green["600"]}
                />
              </TableNode>
              <TableNode last>
                <TableSelect values={posicionamento} backgroundColor={twc.violet["200"]} color={twc.violet["600"]} />
              </TableNode>
            </TableCol>
          </Table>
        </div>
      </div>
    </div>
  )
}

interface IStrong extends React.ComponentProps<"span"> {
  children: React.ReactNode
}

export function Strong({ children, className, ...rest }: IStrong) {
  const _cn = ` ${className ?? ""}`

  return (
    <span className={"inline-block py-0.5 px-1 rounded-lg bg-zinc-200 leading-none" + _cn} {...rest}>
      {children}
    </span>
  )
}
