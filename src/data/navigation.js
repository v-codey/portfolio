// Sidebar / drawer links. `id` matches a section id on the home page.
// Items with a `to` open a separate route instead of scrolling.
export const NAV_ITEMS = [
  { id: 'top', label: 'About', icon: 'user' },
  { id: 'experience', label: 'Experience', icon: 'briefcase' },
  { id: 'education', label: 'Education', icon: 'cap' },
  { id: 'work', label: 'Proof of work', icon: 'folder' },
  { id: 'stack', label: 'Stack', icon: 'layers' },
  { id: 'engineering', label: 'Engineering', icon: 'branch' },
  { id: 'resume', label: 'Resume', icon: 'file', to: '/resume' },
  { id: 'contact', label: 'Contact', icon: 'send' },
]

// Section ids watched by the scroll spy (everything that lives on the home page).
export const SPY_IDS = NAV_ITEMS.filter((item) => !item.to).map((item) => item.id)
