import { ArrowUpIcon } from '@/components/icons'
import { useScrolledPast } from '@/hooks/useScrolledPast'

/** Floating button that appears after the first screen and scrolls back to the top. */
export default function BackToTop() {
  const visible = useScrolledPast(400)
  if (!visible) return null
  return (
    <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUpIcon />
    </button>
  )
}
