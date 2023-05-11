import React from "react"
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
      <div className="max-w-xl">
        <p>
          <strong>O que são campanhas?</strong> Uma campanha são elementos específicos, combinados, e de forma pública
          que estão rodando, ou que rodam durante um determinado período de tempo.
        </p>
        <p>Vamos pegar campanhas de anúncio para Instagram como exemplo.</p>
        <p>
          Para fazer um anúncio no Instagram, você cria uma campanha dentro do Facebook Ads, nessa campanha você coloca
          o vídeo, a descrição, a capa, o público, o orçamento, quantos dias esse anúncio vai rodar, e etc.
        </p>
        <p>Após essa campanha encerrar, passe os dados dela para a planilha.</p>
      </div>
      <div className={st.wrapper}>
        <div className={st.border + ` ${st["bd-blackwhite-to-b"]}`} />
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
  )
}
