import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group flex h-9 w-9 items-center justify-center rounded-md border border-line dark:border-dark-line
                 text-ink/70 dark:text-dark-text/70 hover:text-accent dark:hover:text-accent
                 hover:border-accent/50 transition-colors duration-200"
    >
      {theme === 'dark' ? (
        <Sun size={16} strokeWidth={2} />
      ) : (
        <Moon size={16} strokeWidth={2} />
      )}
    </button>
  )
}
