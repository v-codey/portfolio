import { useState } from 'react'
import { ChevronDownIcon } from '@/components/icons'

/**
 * One row of the experience / education lists.
 * Rows with `points` can be collapsed (open by default); rows without are static.
 */
export default function ExpandableItem({ item }) {
  const [open, setOpen] = useState(true)
  const expandable = item.points.length > 0
  const panelId = item.org.replace(/\W/g, '')

  return (
    <li className="xp">
      <div className="xp-head">
        <span className="mark" aria-hidden="true">{item.mark}</span>
        <div className="xp-text">
          <h3>{item.org}</h3>
          <p className="sub">{item.title}</p>
          {!open && <p className="clamp">{item.summary}</p>}
        </div>
        <span className="period">{item.period}</span>
        {expandable ? (
          <button
            className="round"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={`${open ? 'Collapse' : 'Expand'} ${item.org}`}
            onClick={() => setOpen(!open)}
          >
            <span className={open ? 'flip' : ''}><ChevronDownIcon /></span>
          </button>
        ) : (
          <span className="round ghost" />
        )}
      </div>
      {expandable && (
        <div id={panelId} className={`panel ${open ? 'open' : ''}`}>
          <ul>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      )}
    </li>
  )
}
