import { useEffect, useState } from 'react'

/**
 * Returns the id of the last section whose top has passed 35% of the viewport,
 * or null while none has (for example at the very top of the page).
 * `ids` must be a stable array. Pass `enabled = false` on pages without these sections.
 */
export function useScrollSpy(ids, enabled = true) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!enabled) return
    const update = () => {
      const line = window.innerHeight * 0.35
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, enabled])

  return active
}
