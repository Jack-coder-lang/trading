import React from 'react'
import { Button } from '../ui/Button'
import { CircularProgress } from '../ui/ProgressBar'

export function QuizResult({ score, total, moduleTitle, onRetry, onContinue }) {
  const pct = Math.round((score / total) * 100)
  const passed = pct >= 60

  const getMessage = () => {
    if (pct === 100) return { title: 'Parfait ! 🎯', sub: 'Vous maîtrisez parfaitement ce module.', color: 'teal' }
    if (pct >= 80) return { title: 'Excellent ! 🚀', sub: 'Très bonne compréhension du module.', color: 'teal' }
    if (pct >= 60) return { title: 'Bien joué !', sub: 'Vous avez une bonne base. Continuez ainsi !', color: 'violet' }
    if (pct >= 40) return { title: 'Pas mal...', sub: 'Relisez le module pour consolider vos bases.', color: 'yellow' }
    return { title: 'À retravailler', sub: 'Reprenez le module et retentez le quiz.', color: 'red' }
  }

  const msg = getMessage()
  const colorMap = {
    teal: 'text-accent-teal',
    violet: 'text-accent-violet',
    yellow: 'text-yellow-400',
    red: 'text-accent-red',
  }

  return (
    <div className="text-center animate-fade-in py-4">
      {/* Score circle */}
      <div className="flex justify-center mb-5">
        <CircularProgress value={score} max={total} size={100} />
      </div>

      {/* Result message */}
      <h3 className={`text-xl font-bold mb-1 ${colorMap[msg.color]}`}>{msg.title}</h3>
      <p className="text-text-secondary text-sm mb-2">{msg.sub}</p>
      <p className="text-text-muted text-xs font-mono mb-6">
        {score}/{total} bonnes réponses · {pct}%
      </p>

      {/* Stars */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3].map(star => (
          <svg
            key={star}
            width="28" height="28"
            viewBox="0 0 24 24"
            fill={pct >= star * 33 ? '#f59e0b' : 'none'}
            stroke={pct >= star * 33 ? '#f59e0b' : '#3a3a3a'}
            strokeWidth="1.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-center">
        <Button variant="secondary" onClick={onRetry} size="md">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
          </svg>
          Réessayer
        </Button>
        <Button variant={passed ? 'primary' : 'secondary'} onClick={onContinue} size="md">
          {passed ? 'Module suivant' : 'Retour au module'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
