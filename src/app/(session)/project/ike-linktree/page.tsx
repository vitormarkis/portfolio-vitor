import { BuildingProjectPlaceholder } from "@/components/BuildingProjectPlaceholder"
import { CenteredContainer } from "@/components/CenteredContainer"
import { Hero } from "@/components/_IkeLinktree/Hero"

export default function IkeLinktreePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div>
        <CenteredContainer className="mdx:px-12">
          <BuildingProjectPlaceholder className="my-12" />
        </CenteredContainer>
      </div>
    </main>
  )
}
