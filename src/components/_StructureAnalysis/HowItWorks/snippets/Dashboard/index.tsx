import React from "react"
import st from "@/components/_StructureAnalysis/HowItWorks/styles.module.css"
import { Table } from "@/components/_StructureAnalysis/HowItWorks/Table"
import { TableCol } from "@/components/_StructureAnalysis/HowItWorks/Table/TableCol"
import { TableNode } from "@/components/_StructureAnalysis/HowItWorks/Table/TableNode"

interface IDashboard extends React.ComponentProps<"div"> {}

export function Dashboard({ className, ...rest }: IDashboard) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center" + _cn} {...rest}>
      <div className="max-w-xl">
        <p className="font-semibold text-left text-black self-start">E o que faço com isso?</p>
        <p className="mb-3 last-of-type:mb-0">
          Cada campanha possui diversas tags que devem ser atribuídas à elas, as quais seus dados são somados e lançados
          em um dashboard com todas as tags lado a lado para fácil comparação de qual é melhor.
        </p>
        <p className="mb-3 last-of-type:mb-0">
          Como podem ver nesse exemplo simples, descrições com emojis e no formato AIDA performaram mais, então agora
          você sabe que em suas próximas campanhas você deve usar o formato de copy AIDA e usar emoji.
        </p>
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
