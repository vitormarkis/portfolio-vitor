import React, { CSSProperties, useEffect, useState } from "react"
import clsx from "clsx"
import chroma from "chroma-js"
import local_st from "@/components/_StructureAnalysis/HowItWorks/Table/styles.module.css"
import { randomIntFromInterval } from "@/helpers"

interface ITableNode extends React.ComponentProps<"div"> {
  better?: boolean | undefined
  children: React.ReactNode | string
  left?: boolean | undefined
  head?: boolean | undefined
  last?: boolean | undefined
  grow?: number | undefined
  backgroundColor?: string | undefined
  invertBorderColor?: boolean | undefined
  type?: "number" | "string" | undefined
  randomNumberBoolean?: boolean | undefined
}

export function TableNode({
  better,
  type,
  backgroundColor,
  grow,
  last,
  head,
  left,
  children,
  className,
  randomNumberBoolean,
  ...rest
}: ITableNode) {
  const [randomNumber, setRandomNumber] = useState<number | null>(null)

  useEffect(() => {
    if (randomNumberBoolean) {
      setRandomNumber(randomIntFromInterval(200, 400))
    }
  }, [])

  return (
    <div
      className={clsx(
        `px-4 border-b border-neutral-500 py-0.5 last-of-type:border-b-0 grid place-items-center h-[29px] relative`,
        className,
        left ? "text-left" : "text-center",
        head && "bg-black text-white",
        !last && "border-r",
        !last && head && "border-r-white",
        type === "number" && "verdana"
      )}
      style={
        {
          backgroundColor,
          borderRightColor: backgroundColor ? (chroma(backgroundColor).darken(2) as unknown as string) : undefined,
          "--flashingWidth": `${randomNumber}px`,
        } as CSSProperties
      }
      {...rest}
    >
      {better && <div className={clsx(local_st.flashing, local_st.alpha)} />}
      {better && <div className={clsx(local_st.flashing, local_st.bravo)} />}
      {better && <div className={clsx(local_st.flashing, local_st.charlie)} />}
      {left && typeof children === "string" ? (
        <p className={clsx("w-full", better && "z-10 text-white")}>{children}</p>
      ) : better ? (
        <div className="z-10 text-white">{children}</div>
      ) : (
        children
      )}
    </div>
  )
}
