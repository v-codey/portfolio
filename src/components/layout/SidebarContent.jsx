import { Link } from 'react-router-dom'
import { GitHubIcon, LinkedInIcon, MailIcon, NavIcon } from '@/components/icons'
import LogoMark from '@/components/ui/LogoMark'
import { NAV_ITEMS, profile } from '@/data'

/** Sidebar body: identity, section links and socials. Shared by the desktop sidebar and the mobile drawer. */
export default function SidebarContent({ active, onNavigate }) {
  return (
    <div className="side-inner">
      <Link className="side-id" to="/" onClick={onNavigate}>
        <LogoMark />
        <span>
          <span className="side-name">{profile.name}</span>
          <span className="side-role">{profile.role}</span>
        </span>
      </Link>

      <nav aria-label="Sections">
        {NAV_ITEMS.map(({ id, label, icon, to }) => (
          <Link
            key={id}
            to={to ?? { pathname: '/', hash: id }}
            onClick={onNavigate}
            aria-current={active === id ? 'page' : undefined}
          >
            <NavIcon name={icon} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="side-socials">
        <p>Socials</p>
        <div>
          <a className="round md" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={22} /></a>
          <a className="round md" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={22} /></a>
          <a className="round md" href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
        </div>
      </div>
    </div>
  )
}
