import SectionLabel from "./SectionLabel.jsx";
import { skillGroups, softSkills } from "../data/skills.js";

// Proficiency is based on hands-on use across Hamza's projects
// (React Jobs, World Wise, React Quiz, Games App, Daniels Portfolio, Morgana Yacht).
const proficiency = {
  HTML5: 90,
  CSS3: 88,
  "JavaScript (ES6+)": 80,
  "Responsive Web Design": 88,
  Bootstrap: 75,
  "Tailwind CSS": 85,
  "React.js": 82,
  "React Router": 78,
  "Context API": 82,
  "React Hooks": 80,
  "REST APIs": 75,
  "Object-Oriented Programming (OOP)": 70,
  Git: 75,
  GitHub: 78,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl border-b border-line dark:border-dark-line px-6 py-20"
    >
      <SectionLabel path="~/skills" title="Skills" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-line dark:border-dark-line bg-white/60 dark:bg-dark-surface/60 p-5 transition-colors hover:border-accent/40"
          >
            <p className="font-mono text-[11px] text-accent">{group.label}</p>
            <ul className="mt-4 space-y-3.5">
              {group.items.map((item) => {
                const level = proficiency[item] ?? 70;
                return (
                  <li key={item}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[13px] text-ink dark:text-dark-text">
                        {item}
                      </span>
                      <span className="font-mono text-[11px] text-ink-soft/50 dark:text-dark-text/40">
                        {level}%
                      </span>
                    </div>
                    <div
                      className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-line/60 dark:bg-dark-line/60"
                      role="progressbar"
                      aria-label={`${item} proficiency`}
                      aria-valuenow={level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-mono text-[11px] text-ink-soft/50 dark:text-dark-text/40">
          soft_skills
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-accent-soft dark:bg-accent/10 px-3 py-1 text-[13px] text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
