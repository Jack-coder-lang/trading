import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useApp } from '../../context/AppContext'
import { Button } from '../ui/Button'
import { Badge, LevelBadge, CategoryBadge } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'
import { QuizEngine } from '../quiz/QuizEngine'
import { Card } from '../ui/Card'

const moduleComponents = {
  1: lazy(() => import('../../modules/Module01_Introduction')),
  2: lazy(() => import('../../modules/Module02_MarketParticipants')),
  3: lazy(() => import('../../modules/Module03_Forex')),
  4: lazy(() => import('../../modules/Module04_Stocks')),
  5: lazy(() => import('../../modules/Module05_Crypto')),
  6: lazy(() => import('../../modules/Module06_TechnicalAnalysis')),
  7: lazy(() => import('../../modules/Module07_CandlestickPatterns')),
  8: lazy(() => import('../../modules/Module08_Indicators')),
  9: lazy(() => import('../../modules/Module09_RiskManagement')),
  10: lazy(() => import('../../modules/Module10_Psychology')),
  11: lazy(() => import('../../modules/Module11_OrderTypes')),
  12: lazy(() => import('../../modules/Module12_TradingPlan')),
}

export function ModulePage() {
  const { currentParams, modules, markModuleStarted, isModuleComplete, isModuleStarted, getQuizScore, goToModule, goToDashboard } = useApp()
  const [showQuiz, setShowQuiz] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const moduleId = currentParams.moduleId
  const module = modules.find(m => m.id === moduleId)
  const prevModule = modules.find(m => m.id === moduleId - 1)
  const nextModule = modules.find(m => m.id === moduleId + 1)

  const ModuleContent = moduleComponents[moduleId]
  const quizScore = module ? getQuizScore(module.id) : null
  const done = module ? isModuleComplete(module.id) : false

  useEffect(() => {
    if (module) markModuleStarted(module.id)
  }, [moduleId])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setScrollProgress(total > 0 ? Math.round((scrolled / total) * 100) : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!module) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-text-muted text-lg mb-4">Module introuvable.</p>
        <Button variant="secondary" onClick={goToDashboard}>Retour au Dashboard</Button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-slide-up">
      {/* Reading progress bar */}
      <div className="fixed top-14 left-0 right-0 h-0.5 bg-bg-secondary z-20">
        <div
          className="h-full bg-gradient-to-r from-accent-violet to-accent-blue transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Module header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <span className="text-xs font-mono text-text-muted bg-bg-secondary border border-border-default px-3 py-1 rounded-full">
            Module {String(module.id).padStart(2, '0')}/{modules.length}
          </span>
          <LevelBadge level={module.level} />
          <CategoryBadge category={module.category} />
          <span className="text-xs text-text-muted">{module.duration}</span>
          {done && (
            <span className="text-xs font-mono text-accent-teal bg-teal-500/10 border border-teal-500/25 px-3 py-1 rounded-full">
              ✓ Terminé
            </span>
          )}
        </div>

        <div className="flex items-start gap-4">
          <span className="text-4xl">{module.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-text-primary leading-tight">{module.title}</h1>
            <p className="text-text-secondary mt-1">{module.description}</p>
          </div>
        </div>

        {/* Module progress in list */}
        <div className="flex items-center gap-2 mt-4 text-xs text-text-muted font-mono overflow-x-auto no-scrollbar py-2">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => goToModule(m.id)}
              title={m.title}
              className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs transition-all ${
                m.id === moduleId
                  ? 'bg-accent-violet text-white font-bold'
                  : isModuleComplete(m.id)
                    ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                    : 'bg-bg-secondary border border-border-default text-text-muted hover:border-border-strong'
              }`}
            >
              {isModuleComplete(m.id) && m.id !== moduleId ? '✓' : m.id}
            </button>
          ))}
        </div>
      </div>

      {/* Module content */}
      {!showQuiz ? (
        <>
          <div className="bg-bg-secondary border border-border-default rounded-2xl p-6 md:p-8 mb-6">
            <Suspense fallback={
              <div className="flex items-center justify-center py-16">
                <div className="w-6 h-6 border-2 border-accent-violet border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              {ModuleContent && <ModuleContent />}
            </Suspense>
          </div>

          {/* Quiz section */}
          <div className="bg-bg-secondary border border-accent-violet/25 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs font-mono text-accent-violet mb-1">QUIZ DU MODULE</p>
                <p className="text-base font-semibold text-text-primary">Testez vos connaissances</p>
                <p className="text-sm text-text-secondary mt-1">
                  {module.quiz.length} questions · Score requis : 60%
                </p>
                {quizScore && (
                  <p className={`text-sm font-mono mt-1 ${quizScore.percentage >= 60 ? 'text-accent-teal' : 'text-accent-red'}`}>
                    Dernier score : {quizScore.score}/{quizScore.total} ({quizScore.percentage}%)
                  </p>
                )}
              </div>
              <Button variant="primary" onClick={() => setShowQuiz(true)}>
                {quizScore ? 'Refaire le quiz' : 'Démarrer le quiz'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            {prevModule ? (
              <Button variant="secondary" onClick={() => goToModule(prevModule.id)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {prevModule.title}
              </Button>
            ) : (
              <Button variant="ghost" onClick={goToDashboard}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Dashboard
              </Button>
            )}

            {nextModule && (
              <Button variant="primary" onClick={() => goToModule(nextModule.id)}>
                {nextModule.title}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            )}
          </div>
        </>
      ) : (
        /* Quiz mode */
        <div className="bg-bg-secondary border border-border-default rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-mono text-accent-violet mb-1">QUIZ</p>
              <h2 className="text-lg font-semibold text-text-primary">{module.title}</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowQuiz(false)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Fermer
            </Button>
          </div>
          <QuizEngine module={module} onClose={() => setShowQuiz(false)} />
        </div>
      )}
    </div>
  )
}
