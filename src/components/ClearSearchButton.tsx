import { XIcon } from "@/components/XIcon"

interface IClearSearchButton extends React.ComponentProps<"button"> {}

export const ClearSearchButton: React.FC<IClearSearchButton> = ({
  onClick,
  className,
  ...rest
}) => {
  const _cn = ` ${className ?? ""}`

  return (
    <button
      onClick={onClick}
      className={"absolute top-1/2 -translate-y-1/2 right-[14px] group" + _cn}
      {...rest}
    >
      <div className="absolute inset-[-5px] rounded-lg bg-zinc-100 -z-10 group-hover:block hidden transition-all duration-150" />
      <XIcon size={18} className="text-neutral-500 " />
    </button>
  )
}
