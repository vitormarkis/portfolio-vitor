import twc from "tailwindcss/colors"
import { Code, DotsThreeOutline, User } from "phosphor-react"
import { JetBrains_Mono } from "next/font/google"
import { projectLinks } from "@/data/project"
const jetbrains = JetBrains_Mono({ subsets: ["latin"] })
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...rest }: Props) {
  return (
    <header
      className={`relative z-10 h-20 text-zinc-800 ${className}`}
      {...rest}
    >
      <div className="w-full max-w-7xl px-5 mx-auto h-full flex justify-between items-center">
        <div className="basis-0 grow mdx:hidden">
          <i className="p-2 inline-block leading-none hover:bg-texas-100 rounded-lg cursor-pointer">
            <DotsThreeOutline
              weight="bold"
              color={twc.zinc["800"]}
              width={18}
              height={18}
            />
          </i>
        </div>
        <div className="basis-0 grow mdx:basis-auto  flex items-center justify-center mdx:justify-start gap-1.5 leading-none">
          <i>
            <Code
              weight="bold"
              color={twc.violet["700"]}
              width={18}
              height={18}
            />
          </i>
          <span className={`font-bold text-base ml-1 ${jetbrains.className}`}>
            <span className="text-violet-700">Vitor.</span>
            <span className="text-texas-500">markis</span>
            <span style={{ color: "#DA67AC" }}>()</span>
          </span>
        </div>
        <nav className="basis-0 grow hidden mdx:flex text-zinc-700 justify-center">
          <ul className="flex text-sm min-w-0 ">
            <li className="transition-colors font-medium duration-75 px-6 py-3 rounded-lg hover:bg-texas-100 cursor-pointer">
              <span className="font-bold something-new">Blog</span>
            </li>
            {projectLinks.map(project => (
              <li
                key={project.id}
                className="transition-colors font-medium duration-75 px-6 py-3 rounded-lg hover:bg-texas-100 cursor-pointer"
              >
                <span className="truncate">{project.name}</span>
              </li>
            ))}
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
