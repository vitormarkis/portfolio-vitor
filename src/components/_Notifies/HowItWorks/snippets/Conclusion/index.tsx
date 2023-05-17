import React from "react"

interface IConclusion extends React.ComponentProps<"div"> {}

export function Conclusion({ className, ...rest }: IConclusion) {
  const _cn = ` ${className ?? ""}`

  return (
    <div className={"md:max-w-xl" + _cn} {...rest}>
      <p className="font-semibold text-left text-black self-start">Conclusão</p>
      <p className="mb-3 last-of-type:mb-0">
        Agora com uma campanha com dados reais, sendo alimentada dia a dia, durante anos, você terá uma planilha rica de
        inteligência e um guia para tomada de ações estratégicas e de marketing dentro da empresa.
      </p>
      <p className="mb-3 last-of-type:mb-0">
        Você terá explicito, o que funciona e o que não funciona dentro do seu negócio, e também a informação de cada
        campanha, com suas tags, para que você possa apurar de perto por que algumas campanhas performaram e outras não,
        e replicar as que mais performaram.
      </p>
    </div>
  )
}
