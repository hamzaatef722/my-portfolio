import SectionLabel from "./SectionLabel.jsx";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl border-b border-line dark:border-dark-line px-6 py-20"
    >
      <SectionLabel path="~/about" title="About" />

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <p className="text-[15px] leading-8 text-ink-soft dark:text-dark-text/80">
          I&apos;m a Computer Science student and Frontend Developer who builds
          responsive, user-friendly web applications with React.js, Next.js and
          Tailwind CSS, on top of a solid base of HTML5, CSS3, JavaScript (ES6+)
          and Bootstrap. I work with Redux Toolkit, React Query, React Router,
          Context API and Hooks to manage state and server data, and I use
          Supabase for authentication and Postgres backends. My latest project
          is a full stack hotel booking app built with the Next.js App Router,
          Server Actions and Google sign-in.
          <br />
          <br />
          I&apos;m currently looking for a Frontend Developer internship or
          junior role where I can contribute what I&apos;ve built so far and
          keep growing inside a real development team.
        </p>

        <div className="space-y-4 rounded-lg border border-line dark:border-dark-line bg-white/60 dark:bg-dark-surface/60 p-5">
          <InfoRow label="location" value="Suez, Egypt" />
          <InfoRow label="focus" value="Frontend Development" />
          <InfoRow label="status" value="Third-year CS student" />
          <InfoRow label="looking_for" value="Internship / Junior role" />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-line/70 dark:border-dark-line/70 pb-3 last:border-0 last:pb-0">
      <span className="font-mono text-[11px] text-ink-soft/50 dark:text-dark-text/40">
        {label}
      </span>
      <span className="text-sm text-ink dark:text-dark-text">{value}</span>
    </div>
  );
}
