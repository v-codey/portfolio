import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const LIGHT_QUERY = '(prefers-color-scheme: light)'

function readStoredChoice() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

/**
 * Theme state. `choice` is 'system' (default), 'light' or 'dark'.
 * 'system' follows the device setting and is not stored.
 * The resolved theme is written to <html data-theme>.
 */
export function useTheme() {
  const [choice, setChoice] = useState(readStoredChoice)
  const [systemLight, setSystemLight] = useState(() => window.matchMedia(LIGHT_QUERY).matches)

  useEffect(() => {
    const mq = window.matchMedia(LIGHT_QUERY)
    const onChange = (e) => setSystemLight(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const light = choice === 'light' || (choice === 'system' && systemLight)

  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark'
  }, [light])

  const setTheme = useCallback((next) => {
    setChoice(next)
    try {
      if (next === 'system') localStorage.removeItem(STORAGE_KEY)
      else localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage unavailable */
    }
  }, [])

  return { choice, setTheme }
}
