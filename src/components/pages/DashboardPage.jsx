import React from 'react'
import { useApp } from '../../context/AppContext'
import { Card } from '../ui/Card'
import { Badge, LevelBadge, CategoryBadge } from '../ui/Badge'
import { ProgressBar, CircularProgress } from '../ui/ProgressBar'
import { Button } from '../ui/Button'

export function DashboardPage() {
  const { modules, totalModules, isModuleComplete, isModuleStarted, getQuizScore, getOverallProgress, goToModule, resetProgress, progress } = useApp()

  const overallPct = getOverallProgress(totalModules)
  const completedCount = modules.filter(m => isModuleComplete(m.id)).length
  const startedCount = modules.filter(m => isModuleStarted(m.id) && !isModuleComplete(m.id)).length

  const nextModule = modules.find(m => !isModuleComplete(m.id))

  const categories = [...new Set(modules.map(m => m.category))]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Dashboard</h1>
        <p className="text-text-secondary text-sm">Suivez votre progression dans la formation trading.</p>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Progress card */}
        <div className="md:col-span-1 bg-bg-secondary border border-border-default rounded-xl p-5 flex items-center gap-4">
          <CircularProgress value={completedCount} max={totalModules} size={80} />
          <div>
            <p className="text-xs text-text-muted">Progression globale</p>
            <p className="text-2xl font-mono font-bold text-text-primary">{overallPct}%</p>
            <p className="text-xs text-text-muted mt-1">{completedCount}/{totalModules} modules terminés</p>
          </div>
        </div>

        {/* Stats */}
        <div className="md:col-span-2 grid grid-cols-3 gap-3">
          {[
            { label: 'Complétés', value: completedCount, color: 'text-accent-teal', icon: '✓' },
            { label: 'En cours', value: startedCount, color: 'text-accent-violet', icon: '◈' },
            { label: 'À faire', value: totalModules - completedCount - startedCount, color: 'text-text-muted', icon: '○' },
          ].map((s, i) => (
            <div key={i} className="bg-bg-secondary border border-border-default rounded-xl p-4 text-center">
              <p className={`text-2xl font-mono font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Continue learning */}
      {nextModule && (
        <div className="mb-8 p-5 rounded-xl bg-accent-violet/8 border border-accent-violet/25">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-mono text-accent-violet mb-1">CONTINUER LA FORMATION</p>
              <p className="text-lg font-semibold text-text-primary">
                {nextModule.icon} Module {nextModule.id} — {nextModule.title}
              </p>
              <p className="text-sm text-text-secondary mt-1">{nextModule.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <LevelBadge level={nextModule.level} />
                <CategoryBadge category={nextModule.category} />
                <span className="text-xs text-text-muted">{nextModule.duration}</span>
              </div>
            </div>
            <Button variant="primary" onClick={() => goToModule(nextModule.id)}>
              {isModuleStarted(nextModule.id) ? 'Reprendre' : 'Commencer'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      )}

      {/* All modules by category */}
      {categories.map(cat => {
        const catModules = modules.filter(m => m.category === cat)
        return (
          <div key={cat} className="mb-8">
            <h2 className="text-sm font-mono font-semibold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>{cat}</span>
              <span className="text-border-strong">({catModules.length} modules)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {catModules.map((mod) => {
                const done = isModuleComplete(mod.id)
                const started = isModuleStarted(mod.id)
                const quizScore = getQuizScore(mod.id)

                return (
                  <button
                    key={mod.id}
                    onClick={() => goToModule(mod.id)}
                    className="flex items-start gap-4 p-4 rounded-xl bg-bg-secondary border border-border-default text-left hover:border-accent-violet/40 hover:bg-bg-hover hover:shadow-[0_0_12px_rgba(124,58,237,0.12)] transition-all duration-200"
                  >
                    {/* Status icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl ${
                      done ? 'bg-teal-500/15 border border-teal-500/30' : started ? 'bg-accent-violet/15 border border-accent-violet/30' : 'bg-bg-primary border border-border-default'
                    }`}>
                      {done ? '✓' : mod.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs font-mono text-text-muted">Module {String(mod.id).padStart(2, '0')}</p>
                          <p className="text-sm font-semibold text-text-primary leading-tight">{mod.title}</p>
                          <p className="text-xs text-text-muted mt-0.5">{mod.subtitle}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <LevelBadge level={mod.level} />
                          {done && (
                            <span className="text-xs font-mono text-accent-teal">✓ Terminé</span>
                          )}
                          {started && !done && (
                            <span className="text-xs font-mono text-accent-violet">En cours</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-text-muted">{mod.duration}</span>
                        <span className="text-xs text-text-muted">{mod.quiz.length} questions</span>
                        {quizScore && (
                          <span className={`text-xs font-mono ${quizScore.percentage >= 60 ? 'text-accent-teal' : 'text-accent-red'}`}>
                            Quiz: {quizScore.percentage}%
                          </span>
                        )}
                      </div>

                      {/* Progress bar for started modules */}
                      {started && !done && (
                        <ProgressBar value={33} max={100} size="sm" className="mt-2" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* Reset button */}
      <div className="mt-8 pt-6 border-t border-border-subtle text-center">
        <button
          onClick={() => {
            if (window.confirm('Réinitialiser toute la progression ? Cette action est irréversible.')) {
              resetProgress()
            }
          }}
          className="text-xs text-text-muted hover:text-accent-red transition-colors font-mono"
        >
          Réinitialiser la progression
        </button>
      </div>
    </div>
  )
}
