import { useEffect, useState } from 'react'
import { QUOTE_INTERVAL_MS } from '@/config/site'
import { quotes } from '@/data'

/** Closing quotes. Advances on a timer, pauses on hover or focus, and has dots for manual selection. */
export default function QuoteCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // Selecting a quote or pausing restarts the timer.
  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % quotes.length), QUOTE_INTERVAL_MS)
    return () => clearTimeout(timer)
  }, [index, paused])

  const quote = quotes[index]
  return (
    <section
      className="quote-sec reveal"
      aria-roledescription="carousel"
      aria-label="Quotes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <figure className="quote-fig" key={index}>
        <blockquote><p>&ldquo;{quote.text}&rdquo;</p></blockquote>
        <figcaption>
          <span aria-hidden="true">&mdash;</span> {quote.author}
        </figcaption>
      </figure>
      <div className="quote-dots" role="group" aria-label="Choose a quote">
        {quotes.map((item, i) => (
          <button
            key={item.text}
            className="quote-dot"
            aria-label={`Quote ${i + 1} of ${quotes.length}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
