import { profile } from '@/data'

/** Round "VK" monogram used in the sidebar and the top bar. */
export default function LogoMark() {
  return <span className="logo-mark" aria-hidden="true">{profile.initials}</span>
}
