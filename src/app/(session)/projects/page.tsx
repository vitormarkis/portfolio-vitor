import { CenteredContainer } from "@/components/CenteredContainer"
import { ProjectCard } from "@/components/ProjectCard"
import { useProjects } from "@/data/project"

export default function Projects() {
  const { projects } = useProjects({ sort: "importance" })

  return (
    <main className="flex flex-col">
      <CenteredContainer className="mdx:px-12">
        <div className="flex flex-col gap-20 md:py-24 py-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </CenteredContainer>
    </main>
  )
}
