import { Mail, Phone, Github, Linkedin } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

const contacts = [
  {
    icon: Mail,
    label: "email",
    value: "hamza.a.gad95@gmail.com",
    href: "mailto:hamza.a.gad95@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "01505391097",
    href: "tel:+201505391097",
  },
  {
    icon: Github,
    label: "github",
    value: "hamzaatef722",
    href: "https://github.com/hamzaatef722",
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "Hamza Atef",
    href: "https://linkedin.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel path="~/contact" title="Get in touch" />

      <p className="max-w-lg text-[15px] leading-relaxed text-ink-soft dark:text-dark-text/80">
        Open to Frontend Developer internships and junior roles. The fastest way
        to reach me is email — happy to share more projects or walk through any
        of the code above.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-3 rounded-lg border border-line dark:border-dark-line
                       bg-white/60 dark:bg-dark-surface/60 px-4 py-3.5 transition-colors duration-200 hover:-translate-y-1  hover:border-accent/50 hover:shadow-[0_8px_24px_-12px_rgba(41,84,245,0.35)]"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-accent-soft dark:bg-accent/10 text-accent">
              <Icon size={16} />
            </span>
            <span>
              <span className="block font-mono text-[10px] text-ink-soft/50 dark:text-dark-text/40">
                {label}
              </span>
              <span className="block text-sm text-ink dark:text-dark-text">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
