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
    // Handle hash navigation for #demo
    const handleHashChange = () => {
      const hash = window.location.hash.split('#').filter(Boolean)[0]
      if (hash === 'demo') {
        setDemoOpen(true)
      }
    }

    // Check initial hash on mount
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('openDemo', () => setDemoOpen(true))

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('openDemo', () => setDemoOpen(true))
    }
  }, [])

  return (
    <DemoContext.Provider value={{ demoOpen, setDemoOpen }}>
      {children}
      <RequestDemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </DemoContext.Provider>
  )
}
