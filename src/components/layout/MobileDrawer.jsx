import { useEffect, useRef } from 'react'
import { CloseIcon } from '@/components/icons'
import SidebarContent from './SidebarContent'

/**
 * Slide-in navigation for tablet and below.
 * Locks page scroll, moves focus inside, traps Tab, closes on Escape or when the
 * window grows to desktop width, and returns focus to the button that opened it.
 */
export default function MobileDrawer({ open, onClose, returnFocusRef, active }) {
  const closeButton = useRef(null)
  const panel = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)')
    const onChange = () => mq.matches && onClose()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [onClose])

  useEffect(() => {
    if (!open) return
    const opener = returnFocusRef.current
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const focusable = panel.current.querySelectorAll('a[href], button')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      opener?.focus()
    }
  }, [open, onClose, returnFocusRef])

  if (!open) return null
  return (
    <div className="drawer" id="drawer">
      <button className="scrim" aria-label="Close menu" tabIndex={-1} onClick={onClose} />
      <div className="drawer-panel" ref={panel} role="dialog" aria-modal="true" aria-label="Menu">
        <button ref={closeButton} className="round close-btn" aria-label="Close menu" onClick={onClose}>
          <CloseIcon />
        </button>
        <SidebarContent active={active} onNavigate={onClose} />
      </div>
    </div>
  )
}
