import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line dark:border-dark-line
                 bg-white/60 dark:bg-dark-surface/60 transition-all duration-600
                 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_24px_-12px_rgba(41,84,245,0.35)]"
    >
      {project.image && (
        <div className="border-b border-line dark:border-dark-line">
          {/* Mini tab bar, same language as the Hero code window */}
          <div className="flex items-center gap-1.5 bg-paper-soft/80 dark:bg-dark-surface2/80 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#EF6A5F]" />
            <span className="h-2 w-2 rounded-full bg-[#F3BF4C]" />
            <span className="h-2 w-2 rounded-full bg-[#61C454]" />
            <span className="ml-2 font-mono text-[10px] text-ink-soft/60 dark:text-dark-text/50">
              {project.tag}
            </span>
          </div>
          <div className="aspect-[18/9] w-full overflow-hidden bg-paper-soft dark:bg-dark-surface2">
            <a href={project.demo} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top blur-sm transition-all duration-300  hover:blur-none "
              />
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          {!project.image && (
            <p className="font-mono text-[11px] text-ink-soft/50 dark:text-dark-text/40">
              {project.tag}
            </p>
          )}
          {project.featured && (
            <span className="ml-auto rounded-full bg-amber/15 px-2 py-0.5 font-mono text-[10px] text-amber">
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
      </div>
    </article>
  );
}
