import SidebarContent from './SidebarContent'

/** Fixed left sidebar, shown on desktop. */
export default function Sidebar({ active }) {
  return (
    <aside className="side" aria-label="Site navigation">
      <SidebarContent active={active} />
    </aside>
  )
}
