import { useState } from "react";
import SectionLabel from "./SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl border-b border-line dark:border-dark-line px-6 py-20"
    >
      <SectionLabel path="~/projects" title="Projects" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowAll((s) => !s)}
          className="font-mono text-sm text-ink-soft/80 dark:text-dark-text/70 hover:text-accent dark:hover:text-accent transition-colors"
        >
          {showAll ? "Show Less" : "Show All Projects"}
        </button>
      </div>
    </section>
  );
}
