import React from "react"
import st from "../styles.module.css"

interface ITable extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export function Table({ children, className, ...rest }: ITable) {
  const _cn = ` ${className ?? ""} `

  return (
    <div className={"scroll-thin" + _cn + st.contentWrapper} {...rest}>
      {children}
    </div>
  )
}
