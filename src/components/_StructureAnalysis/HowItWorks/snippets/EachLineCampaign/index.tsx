import React from "react"
import st from "@/components/_StructureAnalysis/HowItWorks/styles.module.css"
import { ProjectFeature } from "@/components/_StructureAnalysis/HowItWorks/Snippets"
import { Table } from "@/components/_StructureAnalysis/HowItWorks/Table"
import { TableCol } from "@/components/_StructureAnalysis/HowItWorks/Table/TableCol"
import { TableNode } from "@/components/_StructureAnalysis/HowItWorks/Table/TableNode"

interface IEachLineCampaign extends React.ComponentProps<"div"> {}

export function EachLineCampaign({ className, ...rest }: IEachLineCampaign) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"" + _cn} {...rest}>
      <div className="flex flex-col xl:flex-row">
        <ProjectFeature>
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
            <div className={st.border} />
            <Table>
              <TableCol>
                <TableNode head>ID</TableNode>
                <TableNode>01</TableNode>
              </TableCol>
              <TableCol grow={9 ** 9}>
                <TableNode head>Nome</TableNode>
                <TableNode left>Campanha do Facebook Ads</TableNode>
              </TableCol>
              <TableCol>
                <TableNode head>Gasto</TableNode>
                <TableNode>R$30,00</TableNode>
              </TableCol>
              <TableCol>
                <TableNode head last>
                  Leads
                </TableNode>
                <TableNode last>40</TableNode>
              </TableCol>
            </Table>
          </div>
        </ProjectFeature>
      </div>
    </div>
  )
}
