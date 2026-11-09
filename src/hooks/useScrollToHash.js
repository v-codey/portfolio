import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** After each navigation, scroll to the #section in the URL, or back to the top of the page. */
export function useScrollToHash() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    const el = hash ? document.getElementById(hash.slice(1)) : null
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'auto' })
  }, [key, hash, pathname])
}
