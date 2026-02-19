import React, { useState } from 'react'
import { AppProvider, useApp } from './context/AppContext'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { LandingPage } from './components/pages/LandingPage'
import { DashboardPage } from './components/pages/DashboardPage'
import { ModulePage } from './components/pages/ModulePage'
import { GlossaryPage } from './components/pages/GlossaryPage'

function AppContent() {
  const { currentPage } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const showSidebar = currentPage !== 'landing'

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Header
        onToggleSidebar={() => setSidebarOpen(o => !o)}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex flex-1">
        {/* Sidebar (only when not on landing) */}
        {showSidebar && (
          <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 overflow-x-hidden">
          <PageRenderer currentPage={currentPage} />
        </main>
      </div>
    </div>
  )
}

function PageRenderer({ currentPage }) {
  switch (currentPage) {
    case 'landing':
      return <LandingPage />
    case 'dashboard':
      return <DashboardPage />
    case 'module':
      return <ModulePage />
    case 'glossary':
      return <GlossaryPage />
    default:
      return <LandingPage />
  }
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
