import { Introduction } from "@/components/_AuctionApp/About/Introduction"
import { Hero } from "@/components/_AuctionApp/Hero"
import { HowItWorks } from "@/components/_AuctionApp/HowItWorks"
import { Implementation } from "@/components/_AuctionApp/Implementation"
import { UsedTechnologies } from "@/components/_AuctionApp/UsedTechnologies"

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
