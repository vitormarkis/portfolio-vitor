import moment from "moment"
import React, { CSSProperties } from "react"
moment.locale("pt-br")
import twc from "tailwindcss/colors"
import local_st from "@/components/BlogPageSection/styles.module.css"

import clsx from "clsx"
import { IIconProps } from "@/myTypes"

interface IOptionButton extends React.ComponentProps<"button"> {
  active?: boolean | undefined
  activeColor: string
  activeFontWeight?: number | string | undefined
  disabledColor?: string | undefined
  iconSize?: number | undefined
  Icon: React.FC<IIconProps>
  text: string
}

export const OptionButton: React.FC<IOptionButton> = ({
  text,
  active,
  iconSize,
  disabledColor,
  activeFontWeight,
  activeColor,
  Icon,
  className,
  onClick,
  ...rest
}) => {
  const _cn = ` ${className ?? ""}`
  const textColor = active ? activeColor : disabledColor ?? twc["zinc"]["500"]
  const textWeight = active ? activeFontWeight : "400"

  return (
    <button
      onClick={onClick}
      className={clsx("rounded-md outline-none py-1 flex items-center", local_st.variables, _cn)}
      style={{ "--color": textColor, "--weight": textWeight } as CSSProperties}
      {...rest}
    >
      <Icon size={iconSize ?? 20} />
      <span className="ml-2">{text}</span>
    </button>
  )
}
