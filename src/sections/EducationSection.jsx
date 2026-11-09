import ExpandableItem from '@/components/ui/ExpandableItem'
import { education } from '@/data'

export default function EducationSection() {
  return (
    <section className="sec reveal" id="education" aria-labelledby="edu-h">
      <h2 id="edu-h">Education</h2>
      <ul className="xp-list">
        {education.map((item) => <ExpandableItem key={item.org} item={item} />)}
      </ul>
    </section>
  )
}
