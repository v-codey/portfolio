import { useEffect } from 'react'

/**
 * Fades `.reveal` elements in shortly after they scroll into view.
 * Pass a value that changes when the page content changes (e.g. the pathname)
 * so newly mounted sections are picked up.
 */
export function useRevealOnScroll(contentKey) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [contentKey])
}
