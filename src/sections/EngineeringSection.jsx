import { BranchIcon } from '@/components/icons'
import { engineering } from '@/data'

export default function EngineeringSection() {
  return (
    <section className="sec reveal" id="engineering" aria-labelledby="eng-h">
      <h2 id="eng-h">Selected engineering work</h2>
      <ul className="eng">
        {engineering.map((item) => (
          <li key={item.title}>
            <div className="eng-top">
              <BranchIcon />
              <h3>{item.title}</h3>
              <span className="tag">{item.tag}</span>
            </div>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
