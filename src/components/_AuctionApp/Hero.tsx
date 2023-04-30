import { HTMLAttributes } from "react"
import { CenteredContainer } from "../CenteredContainer"
import { Logo } from "./Logo"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Hero({ className, ...rest }: Props) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <CenteredContainer>
        <div className="flex flex-row h-[15rem] items-center">
          <div className="flex-1 grid place-items-center">
            <Logo scale={3} className="" />
          </div>
          <div className="flex-1"></div>
        </div>
      </CenteredContainer>
    </div>
  )
}
