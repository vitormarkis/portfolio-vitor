import { Introduction } from "@/components/_StructureAnalysis/About/Introduction"
import { Hero } from "@/components/_StructureAnalysis/Hero"
import { HowItWorks } from "@/components/_StructureAnalysis/HowItWorks"
import { Implementation } from "@/components/_StructureAnalysis/Implementation"
import { UsedTechnologies } from "@/components/_StructureAnalysis/UsedTechnologies"

export default function AuctionAppPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Introduction className="mt-24" />
      <HowItWorks className="mt-24" />
      <Implementation className="mt-32" />
      <UsedTechnologies className="mt-24" />
    </main>
  )
}
