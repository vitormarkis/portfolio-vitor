import { About } from "@/components/_AuctionApp/About"
import { Hero } from "@/components/_AuctionApp/Hero"
import { Tech } from "@/components/_AuctionApp/Tech"

export default function AuctionAppPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About className="mt-24" />
      <Tech className="mt-24" />
    </main>
  )
}
