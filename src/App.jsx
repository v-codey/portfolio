import { Route, Routes } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import HomePage from '@/pages/HomePage'
import ResumePage from '@/pages/ResumePage'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AppShell>
  )
}
