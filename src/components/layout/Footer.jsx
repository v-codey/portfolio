import { profile } from '@/data'

// Evaluated once when the page loads, so the year always matches the visitor's current year.
const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return <footer className="foot">© {CURRENT_YEAR} - {profile.name}</footer>
}
