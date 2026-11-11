import { useCallback, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BackToTop from '@/components/ui/BackToTop'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { SPY_IDS } from '@/data'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useScrollToHash } from '@/hooks/useScrollToHash'
import { useTheme } from '@/hooks/useTheme'
import Backdrop from './Backdrop'
import Footer from './Footer'
import MobileDrawer from './MobileDrawer'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

/** Page chrome shared by every route: backdrop, sidebar, top bar, drawer, theme toggle, footer. */
export default function AppShell({ children }) {
  const { pathname } = useLocation()
  const onResume = pathname === '/resume'

  const { choice: themeChoice, setTheme } = useTheme()
  const spyActive = useScrollSpy(SPY_IDS, !onResume)
  const active = onResume ? 'resume' : spyActive

  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useRevealOnScroll(pathname)
  useScrollToHash()

  return (
    <>
      <Backdrop />
      

      <Sidebar active={active} />

      {/* Desktop: floating theme toggle, top right. Smaller screens use the top bar instead. */}
      <div className="theme-float">
        <ThemeToggle choice={themeChoice} onChoose={setTheme} />
      </div>

      <TopBar
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
        menuButtonRef={menuButtonRef}
        themeChoice={themeChoice}
        onChooseTheme={setTheme}
      />
      <MobileDrawer open={menuOpen} onClose={closeMenu} returnFocusRef={menuButtonRef} active={active} />

      <div className="frame">
        <main id="main" className="col">
          {children}
          <Footer />
        </main>
      </div>

      <BackToTop />
    </>
  )
}
