import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line dark:border-dark-line"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-60 dark:opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div
          className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-line dark:border-dark-line
                     bg-white/70 dark:bg-dark-surface/80 shadow-[0_1px_0_0_rgba(20,23,28,0.04)] backdrop-blur-sm
                     animate-fadeUp"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-2 border-b border-line dark:border-dark-line bg-paper-soft/80 dark:bg-dark-surface2/80 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF6A5F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F3BF4C]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
            <span className="ml-3 font-mono text-xs text-ink-soft/70 dark:text-dark-text/60">
              Hamza.jsx
            </span>
          </div>

          {/* Code content */}
          <div className="px-5 py-7 sm:px-8 sm:py-9">
            <p className="font-mono text-[13px] text-ink-soft/60 dark:text-dark-text/50">
              01
              <span className="ml-4 text-accent">const</span> developer{' '}
              <span className="text-ink-soft/60 dark:text-dark-text/50">=</span> {'{'}
            </p>

            <p className="pl-8 font-mono text-[13px] text-ink-soft/60 dark:text-dark-text/50 sm:pl-10">
              <span className="text-amber">name</span>:{' '}
              <span className="text-ink dark:text-dark-text font-display text-xl font-semibold tracking-tight sm:text-2xl">
                &quot;Hamza Atef&quot;
              </span>
              ,
            </p>

            <p className="pl-8 font-mono text-[13px] text-ink-soft/60 dark:text-dark-text/50 sm:pl-10">
              <span className="text-amber">role</span>:{' '}
              <span className="text-ink dark:text-dark-text">
                &quot;Frontend Developer&quot;
              </span>
              ,
            </p>

            <p className="pl-8 font-mono text-[13px] text-ink-soft/60 dark:text-dark-text/50 sm:pl-10">
              <span className="text-amber">status</span>:{' '}
              <span className="text-ink dark:text-dark-text">
                &quot;CS Student, Suez — open to internships&quot;
              </span>
              <span className="inline-block w-[2px] h-4 bg-accent align-middle ml-1 animate-blink" />
            </p>

            <p className="font-mono text-[13px] text-ink-soft/60 dark:text-dark-text/50">
              05 {'}'}
            </p>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft dark:text-dark-text/80">
              I build responsive, user-friendly web apps with React, Tailwind
              CSS and REST APIs — with a habit of shipping projects, not just
              tutorials.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-accent px-5 py-2.5 font-mono text-[13px] text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                view_projects()
              </a>
              <a
                href="#contact"
                className="rounded-md border border-line dark:border-dark-line px-5 py-2.5 font-mono text-[13px] text-ink dark:text-dark-text transition-colors hover:border-accent hover:text-accent"
              >
                get_in_touch()
              </a>

              <div className="ml-1 flex items-center gap-1">
                <a
                  href="https://github.com/hamzaatef722"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-ink-soft/70 dark:text-dark-text/60 hover:text-accent transition-colors"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-ink-soft/70 dark:text-dark-text/60 hover:text-accent transition-colors"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="mailto:hamza.a.gad95@gmail.com"
                  aria-label="Email"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-ink-soft/70 dark:text-dark-text/60 hover:text-accent transition-colors"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-dark-line text-ink-soft/60 dark:text-dark-text/50 hover:text-accent hover:border-accent/50 transition-colors"
          >
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
