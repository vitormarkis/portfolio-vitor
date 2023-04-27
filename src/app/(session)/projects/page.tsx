import { CenteredContainer } from "@/components/CenteredContainer"
import { ProjectCard } from "@/components/ProjectCard"
import { projectLinks } from "@/data/project"

export default function Projects() {
  return (
    <main className="flex flex-col">
      <CenteredContainer className="px-6 mdx:px-12">
        <div className="flex flex-col gap-20">
          {projectLinks.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </CenteredContainer>
    </main>
  )
}
