import { Link } from 'react-router-dom'
import { MenuIcon } from '@/components/icons'
import LogoMark from '@/components/ui/LogoMark'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { profile } from '@/data'

/** Top bar for tablet and below: logo, theme toggle and the hamburger that opens the drawer. */
export default function TopBar({ menuOpen, onOpenMenu, menuButtonRef, themeChoice, onChooseTheme }) {
  return (
    <header className="topbar">
      <Link className="logo" to={{ pathname: '/', hash: 'top' }} aria-label={`${profile.name}, home`}>
        <LogoMark />
      </Link>
      <div className="topbar-actions">
        <ThemeToggle choice={themeChoice} onChoose={onChooseTheme} />
        <button
          ref={menuButtonRef}
          className="round menu-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="drawer"
          onClick={onOpenMenu}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
