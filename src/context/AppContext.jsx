import React, { createContext, useContext } from 'react'
import { useProgress } from '../hooks/useProgress'
import { useNavigation } from '../hooks/useNavigation'
import { MODULES } from '../data/modules'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const progressApi = useProgress()
  const navigationApi = useNavigation()

  const value = {
    modules: MODULES,
    totalModules: MODULES.length,
    ...progressApi,
    ...navigationApi,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
