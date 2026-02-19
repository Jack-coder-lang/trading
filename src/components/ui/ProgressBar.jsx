import React from 'react'

export function ProgressBar({ value = 0, max = 100, className = '', showLabel = false, size = 'md', color = 'violet' }) {
  const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)))

  const heights = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

  const colors = {
    violet: 'from-accent-violet to-accent-blue',
    teal: 'from-accent-teal to-cyan-400',
    red: 'from-accent-red to-rose-400',
    yellow: 'from-yellow-500 to-amber-400',
  }

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-text-secondary">Progression</span>
          <span className="text-xs font-mono text-accent-violet">{pct}%</span>
        </div>
      )}
      <div className={`w-full bg-bg-primary rounded-full overflow-hidden ${heights[size]}`}>
        <div
          className={`${heights[size]} rounded-full bg-gradient-to-r ${colors[color]} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function CircularProgress({ value = 0, max = 100, size = 80 }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  const radius = (size - 10) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (pct / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1f1f1f"
          strokeWidth="5"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#grad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-sm font-mono font-semibold text-text-primary">
        {Math.round(pct)}%
      </span>
    </div>
  )
}
