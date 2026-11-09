import ExpandableItem from '@/components/ui/ExpandableItem'
import { experience } from '@/data'

export default function ExperienceSection() {
  return (
    <section className="sec reveal" id="experience" aria-labelledby="exp-h">
      <h2 id="exp-h">Professional experience</h2>
      <ul className="xp-list">
        {experience.map((item) => <ExpandableItem key={item.org} item={item} />)}
      </ul>
    </section>
  )
}
