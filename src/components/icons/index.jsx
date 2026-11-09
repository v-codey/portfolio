// Inline SVG icon set. Stroke icons inherit colour from the text (currentColor).

export function Stroke({ children, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

function Filled({ d, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

export const GitHubIcon = ({ size }) => (
  <Filled size={size} d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
)
export const LinkedInIcon = ({ size }) => (
  <Filled size={size} d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75Z" />
)

export const MailIcon = ({ size = 16 }) => <Stroke size={size}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Stroke>
export const PhoneIcon = ({ size = 16 }) => <Stroke size={size}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Stroke>
export const ArrowUpRightIcon = ({ size = 14 }) => <Stroke size={size}><path d="M7 17 17 7M8 7h9v9" /></Stroke>
export const ChevronDownIcon = ({ size = 14 }) => <Stroke size={size}><path d="m6 9 6 6 6-6" /></Stroke>
export const ArrowUpIcon = ({ size = 18 }) => <Stroke size={size}><path d="M12 19V5M5 12l7-7 7 7" /></Stroke>
export const MenuIcon = ({ size = 20 }) => <Stroke size={size}><path d="M4 7h16M4 12h16M4 17h16" /></Stroke>
export const CloseIcon = ({ size = 20 }) => <Stroke size={size}><path d="M6 6l12 12M18 6 6 18" /></Stroke>
export const SendIcon = ({ size = 15 }) => <Stroke size={size}><path d="M14.5 21.7a.5.5 0 0 0 .94-.02l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11ZM21.85 2.15 10.9 13.09" /></Stroke>

export const SunIcon = ({ size = 16 }) => <Stroke size={size}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Stroke>
export const MoonIcon = ({ size = 16 }) => <Stroke size={size}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" /></Stroke>
export const MonitorIcon = ({ size = 16 }) => <Stroke size={size}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></Stroke>

export const BranchIcon = ({ size = 14 }) => <Stroke size={size}><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="8" r="2" /><path d="M6 8v8M18 10c0 4-6 3-12 6" /></Stroke>
export const UserIcon = ({ size = 20 }) => <Stroke size={size}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></Stroke>
export const BriefcaseIcon = ({ size = 20 }) => <Stroke size={size}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></Stroke>
export const FolderIcon = ({ size = 20 }) => <Stroke size={size}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></Stroke>
export const LayersIcon = ({ size = 20 }) => <Stroke size={size}><path d="m12 3 9 5-9 5-9-5ZM3 13l9 5 9-5" /></Stroke>
export const CapIcon = ({ size = 20 }) => <Stroke size={size}><path d="m22 10-10-5-10 5 10 5ZM6 12.5V17c3 2.5 9 2.5 12 0v-4.5" /></Stroke>
export const PaperPlaneIcon = ({ size = 20 }) => <Stroke size={size}><path d="m21 3-9.5 18-2.5-7.5L1.5 11ZM21 3 9 13.5" /></Stroke>
export const FileIcon = ({ size = 20 }) => <Stroke size={size}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8ZM14 3v5h5M9 13h6M9 17h6" /></Stroke>

const NAV_ICON_MAP = {
  user: UserIcon,
  briefcase: BriefcaseIcon,
  cap: CapIcon,
  folder: FolderIcon,
  layers: LayersIcon,
  branch: BranchIcon,
  file: FileIcon,
  send: PaperPlaneIcon,
}

/** Icon for a navigation item, looked up by the `icon` name in data/navigation.js. */
export function NavIcon({ name }) {
  const Component = NAV_ICON_MAP[name]
  return <Component size={20} />
}
