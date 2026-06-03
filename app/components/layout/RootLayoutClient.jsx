'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import RequestDemoForm from '../form/RequestDemoForm'

export const DemoContext = createContext()

export function useDemoContext() {
  const context = useContext(DemoContext)
  if (!context) {
    throw new Error('useDemoContext must be used within DemoProvider')
  }
  return context
}

export default function RootLayoutClient({ children }) {
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'demo') {
        setDemoOpen(true)
        window.history.replaceState(null, '', window.location.pathname)
      }
    }

    const handleOpenDemo = () => setDemoOpen(true)

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('openDemo', handleOpenDemo)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('openDemo', handleOpenDemo)
    }
  }, [])

  return (
    <DemoContext.Provider value={{ demoOpen, setDemoOpen }}>
      {children}
      <RequestDemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </DemoContext.Provider>
  )
}