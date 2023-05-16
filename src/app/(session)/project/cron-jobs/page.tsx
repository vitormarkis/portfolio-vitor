import { BuildingProjectPlaceholder } from "@/components/BuildingProjectPlaceholder"
import { CenteredContainer } from "@/components/CenteredContainer"
import { Introduction } from "@/components/_CronJobs/About/Introduction"
import { Hero } from "@/components/_CronJobs/Hero"
import { HowItWorks } from "@/components/_CronJobs/HowItWorks"
import { Implementation } from "@/components/_CronJobs/Implementation"
import { UsedTechnologies } from "@/components/_CronJobs/UsedTechnologies"

export default function CronJobsPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div>
        <CenteredContainer className="px-6 mdx:px-12">
          <BuildingProjectPlaceholder className="my-12" />
        </CenteredContainer>
      </div>
      {/* <Introduction className="mt-24" />
      <HowItWorks className="mt-24" />
      <Implementation className="mt-32" />
      <UsedTechnologies className="mt-24" /> */}
    </main>
  )
}
