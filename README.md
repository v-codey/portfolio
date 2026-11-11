# Vinay Kumar — Portfolio

Personal portfolio built with React 19, React Router and Vite. No UI framework; styling is plain CSS with design tokens.

## Scripts

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Project structure

```
src/
├── main.jsx                  App entry: router + global styles
├── App.jsx                   Routes (/ and /resume) inside the shared shell
├── config/
│   └── site.js               Resume URL, quote rotation interval
├── data/                     All site content, one file per topic (edit text here)
│   ├── profile.js  experience.js  education.js  certifications.js  work.js
│   ├── stack.js  blog.js  quotes.js  navigation.js
│   └── index.js              Barrel: import { profile } from '@/data'
├── hooks/                    Reusable behaviour
│   ├── useTheme.js           System / light / dark theme
│   ├── useScrollSpy.js       Highlights the section in view
│   ├── useScrollToHash.js    Scrolls to #sections after navigation
│   ├── useRevealOnScroll.js  Fade-in on scroll
│   ├── useScrolledPast.js    "Past N px" flag for the back-to-top button
│   └── useIsPhone.js         Phone detection (swaps Email me / Call me)
├── components/
│   ├── icons/                Inline SVG icon set
│   ├── ui/                   Small reusable pieces (ThemeToggle, LogoMark, BackToTop, ExpandableItem)
│   └── layout/               AppShell, Sidebar, TopBar, MobileDrawer, Footer, Backdrop
├── sections/                 One component per home-page section
│   └── contact/              Contact section split into form and map
├── pages/                    Route components (HomePage, ResumePage)
└── styles/                   CSS split by area; index.css sets the import order
```

`@` is an alias for `src/` (see `vite.config.js` and `jsconfig.json`).

## Where to change things

| To change | Edit |
| --- | --- |
| Name, links, intro text | `src/data/profile.js` |
| Jobs, education, projects, stack, quotes | the matching file in `src/data/` |
| Sidebar links and their order | `src/data/navigation.js` |
| Resume PDF source (static, Google Drive or S3) | `src/config/site.js` |
| Colours, backdrop brightness, dot spacing | `src/styles/tokens.css` |
| Bangalore pin position on the map | `.map-pin` in `src/styles/contact.css` |

## Deploying

`vercel.json` rewrites every path to `index.html`, so `/resume` also works on direct visits.
Other hosts need the same single-page-app fallback.
