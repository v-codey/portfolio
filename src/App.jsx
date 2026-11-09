import { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { profile, experience, work, stack, engineering } from './data'
import { RESUME_URL, RESUME_FILENAME } from './config'

const NAV = [
  ['top', 'About', 'user'],
  ['experience', 'Experience', 'briefcase'],
  ['work', 'Proof of work', 'folder'],
  ['stack', 'Stack', 'layers'],
  ['engineering', 'Engineering', 'branch'],
  ['resume', 'Resume', 'file'],
  ['connect', 'Connect', 'send'],
]

const I = {
  github: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
  linkedin: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75Z',
}
const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
)
const Stroke = ({ children, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
)
const Mail = () => <Stroke><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Stroke>
const Phone = () => <Stroke><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Stroke>
const Arrow = () => <Stroke size={14}><path d="M7 17 17 7M8 7h9v9" /></Stroke>
const Chevron = () => <Stroke size={14}><path d="m6 9 6 6 6-6" /></Stroke>
const Up = () => <Stroke size={18}><path d="M12 19V5M5 12l7-7 7 7" /></Stroke>
const Branch = () => <Stroke size={14}><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 8v8M18 10c0 4-6 3-12 6" /></Stroke>
const Sun = () => <Stroke><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Stroke>

const Menu = () => <Stroke size={20}><path d="M4 7h16M4 12h16M4 17h16" /></Stroke>
const Close = () => <Stroke size={20}><path d="M6 6l12 12M18 6 6 18" /></Stroke>

const Moon = () => <Stroke><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" /></Stroke>
const NAV_ICONS = {
  user: <Stroke size={20}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></Stroke>,
  briefcase: <Stroke size={20}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></Stroke>,
  folder: <Stroke size={20}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></Stroke>,
  layers: <Stroke size={20}><path d="m12 3 9 5-9 5-9-5ZM3 13l9 5 9-5" /></Stroke>,
  branch: <Stroke size={20}><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 8v8M18 10c0 4-6 3-12 6" /></Stroke>,
  file: <Stroke size={20}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8ZM14 3v5h5M9 13h6M9 17h6" /></Stroke>,
  send: <Stroke size={20}><path d="m21 3-9.5 18-2.5-7.5L1.5 11ZM21 3 9 13.5" /></Stroke>,
}

function SideNav({ active, onNavigate }) {
  return (
    <div className="side-inner">
      <Link className="side-id" to={{ pathname: '/', hash: 'top' }} onClick={onNavigate}>
        <span className="side-avatar" aria-hidden="true">{profile.initials}</span>
        <span>
          <span className="side-name">{profile.name}</span>
          <span className="side-role">{profile.role}</span>
        </span>
      </Link>

      <nav aria-label="Sections">
        {NAV.map(([id, label, icon]) => (
          <Link
            key={id}
            to={id === 'resume' ? '/resume' : { pathname: '/', hash: id }}
            onClick={onNavigate}
            aria-current={active === id ? 'page' : undefined}
          >
            {NAV_ICONS[icon]}{label}
          </Link>
        ))}
      </nav>

      <div className="side-socials">
        <p>Socials</p>
        <div>
          <a className="round md" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon d={I.github} size={22} /></a>
          <a className="round md" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon d={I.linkedin} size={22} /></a>
          <a className="round md" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>

      <div className="side-cta">
        <Link className="resume-btn" to="/resume" onClick={onNavigate}>{NAV_ICONS.file}View resume</Link>
      </div>
    </div>
  )
}

const Monitor = () => <Stroke><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></Stroke>
const THEME_OPTIONS = [
  ['system', 'System', <Monitor key="s" />],
  ['light', 'Light', <Sun key="l" />],
  ['dark', 'Dark', <Moon key="d" />],
]

// One button that cycles System, Light, Dark, then back to System.
function ThemeToggle({ choice, onChoose }) {
  const i = THEME_OPTIONS.findIndex(([v]) => v === choice)
  const [, label, icon] = THEME_OPTIONS[i]
  const [nextValue, nextLabel] = THEME_OPTIONS[(i + 1) % THEME_OPTIONS.length]
  return (
    <button
      className="theme-btn"
      aria-label={`Theme: ${label}. Switch to ${nextLabel}`}
      title={`Theme: ${label}`}
      onClick={() => onChoose(nextValue)}
    >
      {icon}
    </button>
  )
}

function Banner() {
  return (
    <div className="banner">
      <img src="/banner.jpg" alt="" width="3840" height="2160" decoding="async" />
      <p className="quote">{profile.quote}</p>
    </div>
  )
}

function Accordion({ item }) {
  const [open, setOpen] = useState(false)
  const expandable = item.points.length > 0
  const id = item.org.replace(/\W/g, '')
  return (
    <li className="xp">
      <div className="xp-head">
        <span className="mark" aria-hidden="true">{item.mark}</span>
        <div className="xp-text">
          <h3>{item.org}</h3>
          <p className="sub">{item.title}</p>
          {!open && <p className="clamp">{item.summary}</p>}
        </div>
        <span className="period">{item.period}</span>
        {expandable ? (
          <button className="round" aria-expanded={open} aria-controls={id} aria-label={`${open ? 'Collapse' : 'Expand'} ${item.org}`} onClick={() => setOpen(!open)}>
            <span className={open ? 'flip' : ''}><Chevron /></span>
          </button>
        ) : <span className="round ghost" />}
      </div>
      {expandable && (
        <div id={id} className={`panel ${open ? 'open' : ''}`}>
          <ul>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      )}
    </li>
  )
}

function ResumePage() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Resume | Vinay Kumar'
    return () => { document.title = prev }
  }, [])
  return (
    <section className="resume-page" aria-labelledby="resume-h">
      <div className="resume-head">
        <div>
          <h1 id="resume-h" className="resume-title">Resume</h1>
          <p className="sub">{profile.name}, {profile.role}</p>
        </div>
        <div className="resume-actions">
          <a className="pill" href={RESUME_URL} target="_blank" rel="noreferrer">Open in new tab</a>
          <a className="pill solid" href={RESUME_URL} download={RESUME_FILENAME}>Download PDF</a>
        </div>
      </div>
      <iframe className="resume-frame" src={RESUME_URL} title="Vinay Kumar resume (PDF)" />
      <p className="sec-sub resume-note">Can't see the preview? <a href={RESUME_URL} target="_blank" rel="noreferrer">Open the PDF in a new tab</a>.</p>
    </section>
  )
}

export default function App() {
  const { pathname, hash, key } = useLocation()
  const onResume = pathname === '/resume'
  // Theme follows the system setting until the visitor picks one with the toggle.
  // choice is 'system' (default), 'light' or 'dark'.
  const [choice, setChoice] = useState(() => {
    try { const t = localStorage.getItem('theme'); return t === 'light' || t === 'dark' ? t : 'system' } catch { return 'system' }
  })
  const [systemLight, setSystemLight] = useState(() => window.matchMedia('(prefers-color-scheme: light)').matches)
  const light = choice === 'light' || (choice === 'system' && systemLight)
  const chooseTheme = (next) => {
    setChoice(next)
    try {
      if (next === 'system') localStorage.removeItem('theme')
      else localStorage.setItem('theme', next)
    } catch { /* storage unavailable */ }
  }
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const on = (e) => setSystemLight(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  const [showTop, setShowTop] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('top')
  const menuBtn = useRef(null)
  const closeBtn = useRef(null)
  const panel = useRef(null)

  // Close the drawer if the window grows back to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)')
    const on = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  // Drawer: lock scroll, move focus in, trap Tab, close on Escape, restore focus.
  useEffect(() => {
    if (!menuOpen) return
    const btn = menuBtn.current
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') return setMenuOpen(false)
      if (e.key !== 'Tab') return
      const f = panel.current.querySelectorAll('a[href], button')
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      btn?.focus()
    }
  }, [menuOpen])

  // After each navigation, jump to the #section or back to the top of the page.
  useEffect(() => {
    const el = hash ? document.getElementById(hash.slice(1)) : null
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'auto' })
  }, [key, hash, pathname])

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (onResume) return
    const update = () => {
      const line = window.innerHeight * 0.35
      let current = NAV[0][0]
      for (const [id] of NAV) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [onResume])

  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark'
  }, [light])
  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      {/* Desktop: fixed left sidebar */}
      <aside className="side" aria-label="Site navigation">
        <SideNav active={onResume ? 'resume' : active} />
      </aside>

      {/* Desktop: floating theme toggle, top right */}
      <div className="theme-float"><ThemeToggle choice={choice} onChoose={chooseTheme} /></div>

      {/* Tablet and below: top bar with theme toggle and hamburger */}
      <header className="topbar">
        <Link className="logo" to={{ pathname: '/', hash: 'top' }} aria-label="Vinay Kumar, home">{profile.initials}</Link>
        <div className="topbar-actions">
          <ThemeToggle choice={choice} onChoose={chooseTheme} />
          <button ref={menuBtn} className="round menu-btn" aria-label="Open menu" aria-expanded={menuOpen} aria-controls="drawer" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="drawer" id="drawer">
          <button className="scrim" aria-label="Close menu" tabIndex={-1} onClick={() => setMenuOpen(false)} />
          <div className="drawer-panel" ref={panel} role="dialog" aria-modal="true" aria-label="Menu">
            <button ref={closeBtn} className="round close-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}><Close /></button>
            <SideNav active={onResume ? 'resume' : active} onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      <div className="frame">
        <main id="main" className="col">
          <Routes>
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<>
          <Banner />

          <section id="top" className="id" aria-labelledby="name">
            <span className="avatar" aria-hidden="true">{profile.initials}</span>
            <div className="id-row">
              <div>
                <h1 id="name">{profile.name}</h1>
                <p className="sub">{profile.meta}</p>
              </div>
              <div className="socials">
                <a className="round" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon d={I.github} /></a>
                <a className="round" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon d={I.linkedin} /></a>
                <a className="round" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
                <a className="round" href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Call"><Phone /></a>
              </div>
            </div>
          </section>

          <section className="about">
            <p><strong>{profile.lead}</strong> {profile.about}</p>
          </section>

          <section className="sec" id="experience" aria-labelledby="exp-h">
            <h2 id="exp-h">Professional experience</h2>
            <ul className="xp-list">{experience.map((e) => <Accordion key={e.org} item={e} />)}</ul>
          </section>

          <section className="sec" id="work" aria-labelledby="work-h">
            <h2 id="work-h">Proof of work</h2>
            <div className="grid">
              {work.map((w) => (
                <article className="card" key={w.title}>
                  <h3>{w.title}</h3>
                  <div className="thumb" aria-hidden="true">
                    <p className="big">{w.stat}</p>
                    <p>{w.statLabel}</p>
                  </div>
                  <div className="card-foot">
                    <div>
                      <h4>{w.title}</h4>
                      <p className="desc">{w.text}</p>
                    </div>
                    {w.href && <a className="round" href={w.href} target="_blank" rel="noreferrer" aria-label={`Open ${w.title} on GitHub`}><Arrow /></a>}
                  </div>
                  <ul className="tags">{w.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className="sec" id="stack" aria-labelledby="stack-h">
            <h2 id="stack-h">Stack I use</h2>
            <p className="sec-sub">Technologies I work with to build products that solve real problems</p>
            <ul className="stack">
              {stack.map(([name, slug, color, url]) => (
                <li key={name}>
                  <img
                    className={`tech-icon ${color ? '' : 'mono'}`}
                    src={url || `https://cdn.simpleicons.org/${slug}/${color ? color.slice(1) : '000000'}`}
                    alt=""
                    width="22"
                    height="22"
                    loading="lazy"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </section>

          <section className="sec" id="engineering" aria-labelledby="eng-h">
            <h2 id="eng-h">Selected engineering work</h2>
            <ul className="eng">
              {engineering.map((e) => (
                <li key={e.title}>
                  <div className="eng-top"><Branch /><h3>{e.title}</h3><span className="tag">{e.tag}</span></div>
                  <p>{e.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="cta">
            <p className="it">If you've read this far, you might be interested in what I do.</p>
            <a className="pill big-pill" href={`mailto:${profile.email}`}><span className="dot" aria-hidden="true">{profile.initials}</span>Email me</a>
          </section>

          <section className="sec" id="connect" aria-labelledby="c-h">
            <h2 id="c-h">Let's connect</h2>
            <p className="sec-sub">Find me across code, work and product updates</p>
            <div className="pills">
              <a className="pill" href={profile.github} target="_blank" rel="noreferrer"><Icon d={I.github} />GitHub</a>
              <a className="pill" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon d={I.linkedin} />LinkedIn</a>
              <a className="pill" href={`mailto:${profile.email}`}><Mail />Mail</a>
              <a className="pill" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone />{profile.phone}</a>
            </div>
          </section>

            </>} />
          </Routes>
          <footer className="foot">© 2026 {profile.name}. Based in Bangalore, India.</footer>
        </main>
      </div>

      {showTop && (
        <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Up /></button>
      )}
    </>
  )
}
