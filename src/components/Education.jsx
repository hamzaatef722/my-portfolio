import { GraduationCap, CheckCircle2, Circle } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import { education } from '../data/education.js'

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl border-b border-line dark:border-dark-line px-6 py-20"
    >
      <SectionLabel path="~/education" title="Education" />

      <div className="rounded-lg border border-line dark:border-dark-line bg-white/60 dark:bg-dark-surface/60 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent-soft dark:bg-accent/10 text-accent">
            <GraduationCap size={18} />
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-ink dark:text-dark-text">
              {education.degree}
            </h3>
            <p className="mt-0.5 text-sm text-ink-soft dark:text-dark-text/70">
              {education.status} · {education.location}
            </p>
          </div>
        </div>

        <ul className="mt-6 space-y-4 border-t border-line/70 dark:border-dark-line/70 pt-6">
          {education.courses.map((course) => (
            <li key={course.name} className="flex items-start gap-3">
              {course.status === 'completed' ? (
                <CheckCircle2
                  size={17}
                  className="mt-0.5 flex-shrink-0 text-accent"
                />
              ) : (
                <Circle
                  size={17}
                  className="mt-0.5 flex-shrink-0 text-amber"
                />
              )}
              <div>
                <p className="text-sm font-medium text-ink dark:text-dark-text">
                  {course.name}
                  {course.status === 'in_progress' && (
                    <span className="ml-2 font-mono text-[10px] text-amber">
                      in_progress
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft/80 dark:text-dark-text/60">
                  {course.details}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
