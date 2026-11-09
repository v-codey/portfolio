import Banner from '@/sections/Banner'
import ContactSection from '@/sections/contact/ContactSection'
import EducationSection from '@/sections/EducationSection'
import EngineeringSection from '@/sections/EngineeringSection'
import ExperienceSection from '@/sections/ExperienceSection'
import Intro from '@/sections/Intro'
import QuoteCarousel from '@/sections/QuoteCarousel'
import StackSection from '@/sections/StackSection'
import WorkSection from '@/sections/WorkSection'

export default function HomePage() {
  return (
    <>
      <Banner />
      <Intro />
      <ExperienceSection />
      <EducationSection />
      <WorkSection />
      <StackSection />
      <EngineeringSection />
      <ContactSection />
      <QuoteCarousel />
    </>
  )
}
