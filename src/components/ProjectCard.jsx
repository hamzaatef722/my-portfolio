import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article
      className="group flex h-full flex-col rounded-lg border border-line dark:border-dark-line
                 bg-white/60 dark:bg-dark-surface/60 p-5 transition-all duration-200
                 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_24px_-12px_rgba(41,84,245,0.35)]"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] text-ink-soft/50 dark:text-dark-text/40">
          {project.tag}
        </p>
        {project.featured && (
          <span className="rounded-full bg-amber/15 px-2 py-0.5 font-mono text-[10px] text-amber">
            featured
          </span>
        )}
      </div>

      <h3 className="mt-2 font-display text-lg font-semibold text-ink dark:text-dark-text">
        {project.name}
      </h3>

      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft dark:text-dark-text/75">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-line dark:border-dark-line px-2 py-0.5 font-mono text-[11px] text-ink-soft/80 dark:text-dark-text/60"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-line/70 dark:border-dark-line/70 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-[12px] text-ink-soft dark:text-dark-text/70 hover:text-accent transition-colors"
        >
          <Github size={14} /> code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-[12px] text-ink-soft dark:text-dark-text/70 hover:text-accent transition-colors"
        >
          <ExternalLink size={14} /> live
        </a>
      </div>
    </article>
  )
}
