import React from 'react'
import { useApp } from '../../context/AppContext'
import { ProgressBar } from '../ui/ProgressBar'
import { CircularProgress } from '../ui/ProgressBar'

export function Sidebar({ open, onClose }) {
  const { modules, currentPage, currentParams, goToModule, goToDashboard, goToGlossary, isModuleComplete, isModuleStarted, getOverallProgress, totalModules } = useApp()

  const overallPct = getOverallProgress(totalModules)
  const completedCount = modules.filter(m => isModuleComplete(m.id)).length

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-20 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 z-20
        flex flex-col bg-bg-primary border-r border-border-subtle
        transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-auto lg:flex
      `}>

        {/* Progress summary */}
        <div className="p-4 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <CircularProgress value={completedCount} max={totalModules} size={52} />
            <div className="min-w-0">
              <p className="text-xs text-text-secondary">Progression globale</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">
                {completedCount}/{totalModules} modules
              </p>
            </div>
          </div>
        </div>

        {/* Module list */}
        <nav className="flex-1 overflow-y-auto py-2 no-scrollbar">
          {/* Dashboard link */}
          <div className="px-3 pb-2">
            <SidebarNavLink
              active={currentPage === 'dashboard'}
              onClick={() => { goToDashboard(); onClose() }}
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              }
              label="Dashboard"
            />
          </div>

          <div className="px-3 mb-2">
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider px-2 mb-2">Modules</p>
            <div className="space-y-0.5">
              {modules.map((mod) => {
                const isActive = currentPage === 'module' && currentParams.moduleId === mod.id
                const done = isModuleComplete(mod.id)
                const started = isModuleStarted(mod.id)

                return (
                  <button
                    key={mod.id}
                    onClick={() => { goToModule(mod.id); onClose() }}
                    className={`
                      w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left transition-all duration-150
                      ${isActive
                        ? 'bg-accent-violet/15 border border-accent-violet/30 text-text-primary'
                        : 'hover:bg-bg-hover text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {/* Status indicator */}
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      {done ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : started ? (
                        <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
                      ) : (
                        <span className="w-2 h-2 rounded-full border border-border-strong" />
                      )}
                    </span>

                    {/* Module number */}
                    <span className={`text-xs font-mono flex-shrink-0 ${isActive ? 'text-accent-violet' : 'text-text-muted'}`}>
                      {String(mod.id).padStart(2, '0')}
                    </span>

                    {/* Title */}
                    <span className="text-xs leading-tight truncate">{mod.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Glossary link */}
          <div className="px-3">
            <SidebarNavLink
              active={currentPage === 'glossary'}
              onClick={() => { goToGlossary(); onClose() }}
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
              }
              label="Glossaire"
            />
          </div>
        </nav>
      </aside>
    </>
  )
}

function SidebarNavLink({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left transition-all duration-150 text-sm
        ${active
          ? 'bg-accent-violet/15 border border-accent-violet/30 text-text-primary'
          : 'hover:bg-bg-hover text-text-secondary hover:text-text-primary'
        }
      `}
    >
      <span className={active ? 'text-accent-violet' : ''}>{icon}</span>
      {label}
    </button>
  )
}
