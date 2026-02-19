import React from 'react'
import { useApp } from '../../context/AppContext'
import { ProgressBar } from '../ui/ProgressBar'

export function Header({ onToggleSidebar, sidebarOpen }) {
  const { currentPage, currentParams, modules, goToLanding, goToDashboard, goToModule, goToGlossary, getOverallProgress, totalModules } = useApp()

  const overallPct = getOverallProgress(totalModules)

  const getBreadcrumb = () => {
    if (currentPage === 'landing') return []
    if (currentPage === 'dashboard') return [{ label: 'Dashboard', action: goToDashboard }]
    if (currentPage === 'glossary') return [{ label: 'Glossaire', action: goToGlossary }]
    if (currentPage === 'module') {
      const mod = modules.find(m => m.id === currentParams.moduleId)
      return [
        { label: 'Modules', action: goToDashboard },
        { label: mod ? `Module ${mod.id} — ${mod.title}` : 'Module', action: null },
      ]
    }
    return []
  }

  const breadcrumbs = getBreadcrumb()

  return (
    <header className="sticky top-0 z-30 glass border-b border-border-subtle">
      <div className="flex items-center h-14 px-4 gap-4">
        {/* Sidebar toggle (mobile) */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {sidebarOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Logo */}
        <button
          onClick={goToLanding}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <div className="w-7 h-7 rounded-lg bg-accent-violet/20 border border-accent-violet/40 flex items-center justify-center text-sm">
            📈
          </div>
          <span className="font-mono font-semibold text-text-primary text-sm hidden sm:block">
            Formation<span className="text-accent-violet">Trade</span>
          </span>
        </button>

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-1.5 text-sm min-w-0">
            <span className="text-border-strong">/</span>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-border-strong">/</span>}
                {crumb.action ? (
                  <button
                    onClick={crumb.action}
                    className="text-text-secondary hover:text-text-primary transition-colors truncate max-w-[120px]"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-text-primary truncate max-w-[200px]">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="flex-1" />

        {/* Progress indicator */}
        {currentPage !== 'landing' && (
          <div className="hidden md:flex items-center gap-3">
            <div className="w-32">
              <ProgressBar value={overallPct} max={100} size="sm" />
            </div>
            <span className="text-xs font-mono text-accent-violet">{overallPct}%</span>
          </div>
        )}

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          <NavBtn active={currentPage === 'dashboard'} onClick={goToDashboard} title="Dashboard">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <span className="hidden sm:inline text-xs">Dashboard</span>
          </NavBtn>
          <NavBtn active={currentPage === 'glossary'} onClick={goToGlossary} title="Glossaire">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
            <span className="hidden sm:inline text-xs">Glossaire</span>
          </NavBtn>
        </nav>
      </div>
    </header>
  )
}

function NavBtn({ children, active, onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all duration-150
        ${active
          ? 'bg-accent-violet/15 text-accent-violet border border-accent-violet/30'
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
        }`}
    >
      {children}
    </button>
  )
}
