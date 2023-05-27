import { CenteredContainer } from "@/components/CenteredContainer"
import { ButtonProjectCard } from "@/components/ProjectCard/ButtonProjectCard"

export default function PageNotFound(...args: any[]) {
  return (
    <div className="min-h-[calc(100dvh_-_397px)]">
      <CenteredContainer className="px-6 mdx:px-12 flex flex-col">
        <h1 className="text-center my-8 text-2xl font-light tracking-wider mb-12">Oops... Página não encontrada.</h1>
        <ButtonProjectCard text="Voltar para a home" url="/" filled className="mx-auto px-6" />
      </CenteredContainer>
    </div>
  )
}
