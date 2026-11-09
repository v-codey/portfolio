import { stackGroups } from '@/data'

const ICON_CDN = 'https://cdn.simpleicons.org'

function TechTile({ name, slug, color, url }) {
  // Brand-coloured icons come straight from the CDN; mono ones are black and inverted in dark theme (see stack.css).
  const src = url || `${ICON_CDN}/${slug}/${color ? color.slice(1) : '000000'}`
  return (
    <li>
      <img className={`tech-icon ${color ? '' : 'mono'}`} src={src} alt="" width="22" height="22" loading="lazy" />
      {name}
    </li>
  )
}

export default function StackSection() {
  return (
    <section className="sec reveal" id="stack" aria-labelledby="stack-h">
      <h2 id="stack-h">Stack I use</h2>
      <p className="sec-sub">Technologies I work with to build products that solve real problems</p>
      <div className="stack-groups">
        {stackGroups.map((group) => (
          <div className="stack-group" key={group.title} role="group" aria-label={group.title}>
            <h3>{group.title}</h3>
            <ul className="stack">
              {group.items.map(([name, slug, color, url]) => (
                <TechTile key={name} name={name} slug={slug} color={color} url={url} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
