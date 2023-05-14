import React, { CSSProperties } from "react"
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
export const cor_predominante = ["Azul", "Vermelho", "Roxo"]

export function CampaignTags({ className, ...rest }: ICampaignTags) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center" + _cn} {...rest}>
      <div className="flex flex-col items-center">
        <div className="md:max-w-xl">
          {/* <SectionNumber number={1} className="mr-2" /> */}
          <span className="text-base">
            Lembrando que cada linha é uma campanha, você deve adicionar tags às campanhas.
          </span>
        </div>
        <div className={`mb-12 ` + st.wrapper} style={{ "--wrapper-width": "576px" } as CSSProperties}>
          <div className={st.border + ` ${st["bd-blackwhite-to-b"]}`} />
          <Table>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head>
                tipo mídia
              </TableNode>
              <TableNode>
                <TableSelect values={["imagem"]} backgroundColor={twc.blue["200"]} color={twc.blue["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["vídeo"]} backgroundColor={twc.green["200"]} color={twc.green["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["imagem"]} backgroundColor={twc.blue["200"]} color={twc.blue["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["vídeo"]} backgroundColor={twc.green["200"]} color={twc.green["600"]} />
              </TableNode>
            </TableCol>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head>
                formato mídia
              </TableNode>
              <TableNode>
                <TableSelect values={["feed"]} backgroundColor={twc.amber["200"]} color={twc.amber["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["reels"]} backgroundColor={twc.violet["200"]} color={twc.violet["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["feed"]} backgroundColor={twc.amber["200"]} color={twc.amber["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["stories"]} backgroundColor={twc.sky["200"]} color={twc.sky["600"]} />
              </TableNode>
            </TableCol>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head>
                modelo pessoa
              </TableNode>
              <TableNode>
                <TableSelect values={["homem"]} backgroundColor={twc.red["200"]} color={twc.red["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["mulher"]} backgroundColor={twc.slate["200"]} color={twc.slate["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["sem"]} backgroundColor={twc.blue["200"]} color={twc.blue["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["sem"]} backgroundColor={twc.blue["200"]} color={twc.blue["600"]} />
              </TableNode>
            </TableCol>
            <TableCol>
              <TableNode backgroundColor={twc.green["500"]} head last>
                gatilho mental
              </TableNode>
              <TableNode>
                <TableSelect values={["urgência"]} backgroundColor={twc.lime["200"]} color={twc.lime["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["escassez"]} backgroundColor={twc.fuchsia["200"]} color={twc.fuchsia["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["sem"]} backgroundColor={twc.emerald["200"]} color={twc.emerald["600"]} />
              </TableNode>
              <TableNode>
                <TableSelect values={["novidade"]} backgroundColor={twc.violet["200"]} color={twc.violet["600"]} />
              </TableNode>
            </TableCol>
          </Table>
        </div>
      </div>
      <div className="flex flex-col items-center md:max-w-xl">
        <p className="font-semibold text-left text-black self-start">O que são tags?</p>
        <p className="mb-3 last-of-type:mb-0">
          Tags são detalhes daquilo que você está analisando, no caso, detalhes da campanha, como tipo de mídia, tipo de
          descrição, framework de descrição, CTA, cores predominantes, segmentação, faixa etária, etc.
        </p>
        <p className="mb-3 last-of-type:mb-0">
          Pode ser entendido como uma tag, detalhes que possui mais de um concorrente, como por exemplo, cor
          predominante: <Strong>azul</Strong>, <Strong>vermelho</Strong>, <Strong>roxo</Strong>. Nesse caso, a tag{" "}
          <Strong>cor predominante</Strong> possui 3 concorrentes para o posto de melhor cor predominante.
        </p>
        <p className="mb-3 last-of-type:mb-0">O mesmo vale para outras tags como:</p>
        <div className={st.wrapper} style={{ "--wrapper-width": "576px" } as CSSProperties}>
          <div className={st.border + ` ${st["bd-blackwhite-to-tr"]}`} />
          <Table>
            <TableCol>
              <TableNode left>Cor Predominante</TableNode>
              <TableNode left>Descrição com Emojis</TableNode>
              <TableNode left>Gênero Protagonista da Mídia</TableNode>
              <TableNode left>Framework de Copywritting</TableNode>
              <TableNode left>Posicionamento</TableNode>
            </TableCol>
            <TableCol>
              <TableNode last>
                <TableSelect values={cor_predominante} backgroundColor={twc.blue["200"]} color={twc.blue["600"]} />
              </TableNode>
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
        <p className="text-center italic text-xs">clique no campo onde diz "Azul" para abrir mais opções</p>
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
