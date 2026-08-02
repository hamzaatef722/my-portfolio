export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-dark-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-[12px] text-ink-soft/60 dark:text-dark-text/40">
          © {new Date().getFullYear()} Hamza Atef — built with React & Tailwind CSS
        </p>
        <p className="font-mono text-[12px] text-ink-soft/40 dark:text-dark-text/30">
          Suez, Egypt
        </p>
      </div>
    </footer>
  )
}
