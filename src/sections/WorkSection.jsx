import { ArrowUpRightIcon } from '@/components/icons'
import { work } from '@/data'

export default function WorkSection() {
  return (
    <section className="sec reveal" id="work" aria-labelledby="work-h">
      <h2 id="work-h">Proof of work</h2>
      <div className="grid">
        {work.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <div className="thumb" aria-hidden="true">
              <p className="big">{item.stat}</p>
              <p>{item.statLabel}</p>
            </div>
            <div className="card-foot">
              <div>
                <h4>{item.title}</h4>
                <p className="desc">{item.text}</p>
              </div>
              {item.href && (
                <a className="round" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} on GitHub`}>
                  <ArrowUpRightIcon />
                </a>
              )}
            </div>
            <ul className="tags">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
