import { Introduction } from "@/components/_AuctionApp/About/Introduction"
import { Hero } from "@/components/_AuctionApp/Hero"
import { HowItWorks } from "@/components/_AuctionApp/HowItWorks"
import { Tech } from "@/components/_AuctionApp/Tech"

export default function AuctionAppPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Introduction className="mt-24" />
      {/* <About className="mt-24" /> */}
      <HowItWorks className="mt-24" />
      <Tech className="mt-24" />
    </main>
  )
}
