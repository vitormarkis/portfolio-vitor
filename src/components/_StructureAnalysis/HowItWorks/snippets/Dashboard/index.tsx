import React, { CSSProperties } from "react"
import st from "@/components/_StructureAnalysis/HowItWorks/styles.module.css"
import local_st from "@/components/_StructureAnalysis/HowItWorks/snippets/Dashboard/styles.module.css"
import { Table } from "@/components/_StructureAnalysis/HowItWorks/Table"
import { TableCol } from "@/components/_StructureAnalysis/HowItWorks/Table/TableCol"
import { TableNode } from "@/components/_StructureAnalysis/HowItWorks/Table/TableNode"
import twc from "tailwindcss/colors"
import clsx from "clsx"

interface IDashboard extends React.ComponentProps<"div"> {}

export function Dashboard({ className, ...rest }: IDashboard) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex flex-col items-center" + _cn} {...rest}>
      <div className="md:max-w-xl">
        <p className="font-semibold text-left text-black self-start">E o que faço com isso?</p>
        <p className="mb-3 last-of-type:mb-0">
          Cada campanha possui diversas tags que devem ser atribuídas à elas, as quais seus dados são somados e lançados
          em um dashboard com todas as tags lado a lado para fácil comparação de qual é melhor.
        </p>
        <p className="mb-3 last-of-type:mb-0">
          Como você pode ver nesse exemplo simples, descrições com emojis e no formato AIDA performaram mais.
        </p>
        <p>O posicionamento que mais performou foi reel.</p>
      </div>
      <div className={st.wrapper} style={{ "--wrapper-width": "1014px" } as CSSProperties}>
        <div className={st.border + ` ${st["bd-blackwhite-to-b"]}`} />
        <Table>
          <TableCol className={local_st.tableCol}>
            <TableNode head>Nome da Tag</TableNode>
            <TableNode better randomNumberBoolean>
              Com emojis
            </TableNode>
            <TableNode>Sem emojis</TableNode>
            <TableNode better randomNumberBoolean>
              AIDA
            </TableNode>
            <TableNode>PAS</TableNode>
            <TableNode>4P's</TableNode>
            <TableNode better randomNumberBoolean>
              Reel
            </TableNode>
            <TableNode>Feed</TableNode>
            <TableNode>Stories</TableNode>
          </TableCol>
          <TableCol className={local_st.tableCol}>
            <TableNode head>Categoria da Tag</TableNode>
            <TableNode>Descrição com emojis</TableNode>
            <TableNode>Descrição com emojis</TableNode>
            <TableNode>Framework Copy</TableNode>
            <TableNode>Framework Copy</TableNode>
            <TableNode>Framework Copy</TableNode>
            <TableNode>Posicionamento</TableNode>
            <TableNode>Posicionamento</TableNode>
            <TableNode>Posicionamento</TableNode>
          </TableCol>
          <TableCol className={local_st.tableCol}>
            <TableNode head>Gasto</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
            <TableNode type="number">R$ 150,00</TableNode>
          </TableCol>
          <TableCol className={local_st.tableCol} grow={2}>
            <TableNode head>Custo por Lead</TableNode>
            <TableNode type="number" className="relative pr-8">
              <BetterOption value="R$ 01,34" />
            </TableNode>
            <TableNode type="number">R$ 01,65</TableNode>
            <TableNode type="number" className="relative pr-8">
              <BetterOption value="R$ 02,20" />
            </TableNode>
            <TableNode type="number">R$ 02,30</TableNode>
            <TableNode type="number">R$ 03,40</TableNode>
            <TableNode type="number" className="relative pr-8">
              <BetterOption value="R$ 01,92" />
            </TableNode>
            <TableNode type="number">R$ 02,20</TableNode>
            <TableNode type="number">R$ 01,97</TableNode>
          </TableCol>
          <TableCol className={local_st.tableCol}>
            <TableNode head>Taxa de Leads</TableNode>
            <TableNode type="number">2,00%</TableNode>
            <TableNode type="number">1,93%</TableNode>
            <TableNode type="number">3,22%</TableNode>
            <TableNode type="number">3,12%</TableNode>
            <TableNode type="number">2,96%</TableNode>
            <TableNode type="number">2,04%</TableNode>
            <TableNode type="number">2,87%</TableNode>
            <TableNode type="number">2,50%</TableNode>
          </TableCol>
          <TableCol className={local_st.tableCol}>
            <TableNode head>Taxa de Likes</TableNode>
            <TableNode type="number">2,50%</TableNode>
            <TableNode type="number">2,32%</TableNode>
            <TableNode type="number">5,35%</TableNode>
            <TableNode type="number">5,02%</TableNode>
            <TableNode type="number">4,75%</TableNode>
            <TableNode type="number">3,25%</TableNode>
            <TableNode type="number">3,06%</TableNode>
            <TableNode type="number">2,65%</TableNode>
          </TableCol>
          <TableCol className={local_st.tableCol}>
            <TableNode last head>
              % Compartilhamentos
            </TableNode>
            <TableNode last type="number" className="relative pr-8">
              <BetterOption value="1.05%" />
            </TableNode>
            <TableNode last type="number">
              0,23%
            </TableNode>
            <TableNode last type="number" className="relative pr-8">
              <BetterOption value="0.53%" />
            </TableNode>
            <TableNode last type="number">
              0,20%
            </TableNode>
            <TableNode last type="number">
              0,57%
            </TableNode>
            <TableNode last type="number" className="relative pr-8">
              <BetterOption value="1.52%" />
            </TableNode>
            <TableNode last type="number">
              0,60%
            </TableNode>
            <TableNode last type="number">
              0,65%
            </TableNode>
          </TableCol>
        </Table>
      </div>
    </div>
  )
}

interface IBetterOption extends React.ComponentProps<"p"> {
  value: string
}

export const BetterOption: React.FC<IBetterOption> = ({ value, className, ...rest }) => {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"flex items-center" + _cn} {...rest}>
      <span>{value}</span>
      <div
        className={clsx(
          "grid place-items-center w-[18px] h-[18px] rounded-full bg-green-500 absolute top-1/2 right-3 -translate-y-1/2",
          local_st.betterIcon
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill={twc.white} viewBox="0 0 256 256">
          <path d="M216.49,199.51a12,12,0,0,1-17,17L128,145,56.49,216.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0Zm-160-63L128,65l71.51,71.52a12,12,0,0,0,17-17l-80-80a12,12,0,0,0-17,0l-80,80a12,12,0,0,0,17,17Z"></path>
        </svg>
      </div>
    </div>
  )
}
