import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { href: '#about', label: '~/about' },
  { href: '#skills', label: '~/skills' },
  { href: '#projects', label: '~/projects' },
  { href: '#education', label: '~/education' },
  { href: '#contact', label: '~/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line dark:border-dark-line bg-paper/90 dark:bg-dark-bg/90 backdrop-blur-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink dark:text-dark-text"
        >
          <span className="text-accent">&gt;</span> hamza_atef
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] text-ink-soft/80 dark:text-dark-text/70 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center text-ink dark:text-dark-text"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-line dark:border-dark-line px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-ink-soft dark:text-dark-text/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
