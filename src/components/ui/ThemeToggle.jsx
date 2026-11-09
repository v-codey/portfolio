import { MonitorIcon, MoonIcon, SunIcon } from '@/components/icons'

// Order matters: each click moves to the next option.
const THEME_OPTIONS = [
  { value: 'system', label: 'System', icon: <MonitorIcon /> },
  { value: 'light', label: 'Light', icon: <SunIcon /> },
  { value: 'dark', label: 'Dark', icon: <MoonIcon /> },
]

/** One button that cycles System, Light, Dark, then back to System. */
export default function ThemeToggle({ choice, onChoose }) {
  const index = THEME_OPTIONS.findIndex((o) => o.value === choice)
  const current = THEME_OPTIONS[index]
  const next = THEME_OPTIONS[(index + 1) % THEME_OPTIONS.length]
  return (
    <button
      className="theme-btn"
      aria-label={`Theme: ${current.label}. Switch to ${next.label}`}
      title={`Theme: ${current.label}`}
      onClick={() => onChoose(next.value)}
    >
      {current.icon}
    </button>
  )
}
