import { useEffect, useState } from 'react'

/** True once the page has scrolled more than `offset` pixels. */
export function useScrolledPast(offset) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return past
}
