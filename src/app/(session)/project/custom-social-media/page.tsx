import { BuildingProjectPlaceholder } from "@/components/BuildingProjectPlaceholder"
import { CenteredContainer } from "@/components/CenteredContainer"
import { Hero } from "@/components/_CustomSocialMedia/Hero"

export default function CustomSocialMediaPage() {
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
