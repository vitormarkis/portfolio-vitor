import React, { CSSProperties } from "react"
import { ProjectFeature } from "@/components/_StructureAnalysis/HowItWorks/Snippets"
import st from "@/components/_StructureAnalysis/HowItWorks/styles.module.css"
import { Table } from "@/components/_StructureAnalysis/HowItWorks/Table"
import { TableCol } from "@/components/_StructureAnalysis/HowItWorks/Table/TableCol"
import { TableNode } from "@/components/_StructureAnalysis/HowItWorks/Table/TableNode"

interface ICampaignData extends React.ComponentProps<"div"> {}

export function CampaignData({ className, ...rest }: ICampaignData) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center" + _cn} {...rest}>
      <div className="md:max-w-xl">
        <p className="font-semibold text-left text-black self-start">O que é uma campanha?</p>
        <p className="mb-3 last-of-type:mb-0">
          Uma campanha são elementos específicos, combinados, e de forma pública que estão rodando, ou que rodam durante
          um determinado período de tempo.
        </p>
        <p className="mb-3 last-of-type:mb-0">Vamos pegar campanhas de anúncio para Instagram como exemplo.</p>
        <p className="mb-3 last-of-type:mb-0">
          Para fazer um anúncio no Instagram, você cria uma campanha dentro do Facebook Ads, nessa campanha você coloca
          o vídeo, a descrição, a capa, o público, o orçamento, quantos dias esse anúncio vai rodar, e etc.
        </p>
        <p>
          Essa campanha irá rodar no dia que você definiu, e encerrar no dia que você definiu, após isso, ela terá
          dados, métricas, como visualizações, cliques, impressões, e muitas outras. Passe essas métricas para a
          planilha.
        </p>
      </div>
      <div className={st.wrapper} style={{ "--wrapper-width": "767px" } as CSSProperties}>
        <div className={st.border + ` ${st["bd-blackwhite-to-b"]}`} />
        <div className={st.tableWrapper}>
          <Table>
            <TableCol>
              <TableNode head>ID</TableNode>
              <TableNode>01</TableNode>
              <TableNode>02</TableNode>
              <TableNode>03</TableNode>
            </TableCol>
            <TableCol grow={4}>
              <TableNode left head>
                Nome
              </TableNode>
              <TableNode left>C01 - Produto X [Aberto]</TableNode>
              <TableNode left>C02 - Produto Y [Aberto]</TableNode>
              <TableNode left>C03 - Produto Z [Segmentado]</TableNode>
            </TableCol>
            <TableCol>
              <TableNode head>Gasto</TableNode>
              <TableNode>R$ 30,00</TableNode>
              <TableNode>R$ 30,00</TableNode>
              <TableNode>R$ 30,00</TableNode>
            </TableCol>
            <TableCol>
              <TableNode head>Impressões</TableNode>
              <TableNode>3.232</TableNode>
              <TableNode>5.573</TableNode>
              <TableNode>4.923</TableNode>
            </TableCol>
            <TableCol>
              <TableNode head>Visualizações</TableNode>
              <TableNode>2.845</TableNode>
              <TableNode>5.242</TableNode>
              <TableNode>4.623</TableNode>
            </TableCol>
            <TableCol>
              <TableNode head last>
                Cliques
              </TableNode>
              <TableNode last>492</TableNode>
              <TableNode last>384</TableNode>
              <TableNode last>247</TableNode>
            </TableCol>
          </Table>
        </div>
      </div>
    </div>
  )
}
