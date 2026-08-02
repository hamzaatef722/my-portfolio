import SectionLabel from './SectionLabel.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl border-b border-line dark:border-dark-line px-6 py-20"
    >
      <SectionLabel path="~/projects" title="Projects" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
