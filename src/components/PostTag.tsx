import React from "react"
import { TImportance, tags } from "@/data/feed"
import { CSSProperties } from "react"
import moment from "moment"
import "moment/locale/pt-br"
import twc from "tailwindcss/colors"
moment.locale("pt-br")
import st from "@/components/PostTag.module.css"

interface IPostTag extends React.ComponentProps<"div"> {
  tag: TImportance
}

export function PostTag({ tag, className, ...rest }: IPostTag) {
  const _cn = ` ${className ?? ""}`
  const foundTag = tags.importances.find(imp => imp.importance === tag)
  if (!foundTag) return null
  const { color, title } = foundTag
  const style = {
    "--color": twc[color]["500"],
    "--bg-color": twc[color]["100"],
  } as CSSProperties

  return (
    <div className={`leading-none py-1 px-2 rounded-md ${st.colorful}` + _cn} {...rest} style={style}>
      {title}
    </div>
  )
}
