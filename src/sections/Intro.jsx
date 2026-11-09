import { Link } from 'react-router-dom'
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '@/components/icons'
import { profile } from '@/data'

/** Avatar, name, quick links and the short "about" paragraph under the banner. */
export default function Intro() {
  return (
    <>
      <section id="top" className="id" aria-labelledby="name">
        <span className="avatar" aria-hidden="true">{profile.initials}</span>
        <div className="id-row">
          <div>
            <h1 id="name">{profile.name}</h1>
            <p className="sub">{profile.meta}</p>
          </div>
          <div className="socials">
            <a className="round" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a className="round" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a className="round" href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Call"><PhoneIcon /></a>
            <Link className="round" to="/resume" aria-label="View resume" title="View resume"><FileIcon /></Link>
            <a className="pill solid" href={`mailto:${profile.email}`}><MailIcon />Email me</a>
          </div>
        </div>
      </section>

      <section className="about">
        <p><strong>{profile.lead}</strong> {profile.about}</p>
      </section>
    </>
  )
}
