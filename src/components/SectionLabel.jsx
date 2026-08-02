export default function SectionLabel({ path, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-accent">{path}</p>
      <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink dark:text-dark-text sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
