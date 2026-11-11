import { Link } from 'react-router-dom'
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '@/components/icons'
import { profile } from '@/data'
import { useIsPhone } from '@/hooks/useIsPhone'

/** Avatar, name, quick links and the short "about" paragraph under the banner. */
export default function Intro() {
  const isPhone = useIsPhone()
  const phoneHref = `tel:${profile.phone.replace(/\s/g, '')}`
  const emailHref = `mailto:${profile.email}`

  // On a phone, calling is the main action and email becomes the small icon button.
  // Everywhere else it is the other way round.
  const emailButton = isPhone
    ? <a className="round" href={emailHref} aria-label="Email"><MailIcon /></a>
    : <a className="pill solid" href={emailHref}><MailIcon />Email me</a>
  const callButton = isPhone
    ? <a className="pill solid" href={phoneHref}><PhoneIcon />Call me</a>
    : <a className="round" href={phoneHref} aria-label="Call"><PhoneIcon /></a>

  return (
    <>
      <section className="id" aria-labelledby="name">
        <img className="avatar" src="/avatar.svg" alt="" aria-hidden="true" width="100" height="100" />
        <div className="id-row">
          <div>
            <h1 id="name">{profile.name}</h1>
            <p className="sub">{profile.meta}</p>
          </div>
          <div className="socials">
            <a className="round" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a className="round" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            {isPhone ? emailButton : callButton}
            <Link className="round" to="/resume" aria-label="View resume" title="View resume"><FileIcon /></Link>
            {isPhone ? callButton : emailButton}
          </div>
        </div>
      </section>

      <section className="about">
        <p><strong>{profile.lead}</strong> {profile.about}</p>
      </section>
    </>
  )
}
