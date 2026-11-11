import { ArrowUpRightIcon, GitHubIcon } from '@/components/icons'
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
              <div className="card-links">
                <a className="round" href={item.repo} target="_blank" rel="noreferrer" aria-label={`View ${item.title} on GitHub`} title="View on GitHub">
                  <GitHubIcon />
                </a>
                {item.live && (
                  <a className="round" href={item.live} target="_blank" rel="noreferrer" aria-label={`Open the live ${item.title} site`} title="Open live site">
                    <ArrowUpRightIcon />
                  </a>
                )}
              </div>
            </div>
            <ul className="tags">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
