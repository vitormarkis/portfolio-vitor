import { Hero } from "@/components/_AuctionApp/Hero"
import { Introduction } from "@/components/_AuctionApp/Introduction"

export default function AuctionAppPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Introduction className="mt-24" />
    </main>
  )
}
