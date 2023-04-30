import { About } from "@/components/_AuctionApp/About"
import { Hero } from "@/components/_AuctionApp/Hero"

export default function AuctionAppPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About className="mt-24" />
    </main>
  )
}
