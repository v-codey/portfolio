import Banner from '@/sections/Banner'
import BlogSection from '@/sections/BlogSection'
import CertificationsSection from '@/sections/CertificationsSection'
import ContactSection from '@/sections/contact/ContactSection'
import EducationSection from '@/sections/EducationSection'
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
      <CertificationsSection />
      <WorkSection />
      <StackSection />
      <BlogSection />
      <ContactSection />
      <QuoteCarousel />
    </>
  )
}
