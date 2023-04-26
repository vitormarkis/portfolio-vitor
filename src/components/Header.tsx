import { projectLinks } from "@/data/project"
import { DotsThreeOutline, User } from "phosphor-react"
import { HTMLAttributes } from "react"
import twc from "tailwindcss/colors"
import { MobileSidebar } from "./MobileSidebar"
import { Logo } from "./Logo"


interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...rest }: Props) {
  return (
    <header
      className={`relative z-10 h-20 text-zinc-800 ${className}`}
      {...rest}
    >
      <div className="w-full max-w-7xl px-5 mx-auto h-full flex justify-between items-center">
        <div className="basis-0 grow mdx:hidden">
          <MobileSidebar>
            <i className="p-2 inline-block leading-none hover:bg-texas-100 rounded-lg cursor-pointer">
              <DotsThreeOutline
                weight="bold"
                color={twc.zinc["800"]}
                width={18}
                height={18}
              />
            </i>
          </MobileSidebar>
        </div>
        <div className="basis-0 grow mdx:basis-auto">
          <Logo />
        </div>
        <nav className="basis-0 grow hidden mdx:flex text-zinc-700 justify-center">
          <ul className="flex text-sm min-w-0 ">
            <li className="transition-colors font-medium duration-75 px-6 py-3 rounded-lg hover:bg-texas-100 cursor-pointer">
              <span className="font-bold something-new">Blog</span>
            </li>
            {projectLinks.slice(0, 3).map(project => (
              <li
                key={project.id}
                className="transition-colors font-medium duration-75 px-6 py-3 rounded-lg hover:bg-texas-100 cursor-pointer"
              >
                <span className="truncate">{project.name}</span>
              </li>
            ))}
            <li className="transition-colors font-medium duration-75 px-6 py-3 rounded-lg hover:bg-texas-100 cursor-pointer">
              <span className="truncate">Ver todos</span>
            </li>
          </ul>
        </nav>
        <div className="basis-0 grow mdx:basis-auto flex justify-end">
          <i className="p-2 inline-block leading-none hover:bg-texas-100 rounded-lg cursor-pointer">
            <User
              weight="bold"
              color={twc.zinc["800"]}
              width={18}
              height={18}
            />
          </i>
        </div>
      </div>
    </header>
  )
}
