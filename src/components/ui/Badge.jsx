import React from 'react'

const COLORS = {
  violet: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  blue: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  teal: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
  red: 'bg-red-500/15 text-red-400 border-red-500/30',
  yellow: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  orange: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  gray: 'bg-neutral-500/15 text-neutral-400 border-neutral-500/30',
  green: 'bg-green-500/15 text-green-400 border-green-500/30',
}

export function Badge({ children, color = 'violet', className = '' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono border ${COLORS[color] || COLORS.gray} ${className}`}>
      {children}
    </span>
  )
}

export function LevelBadge({ level }) {
  const map = {
    'Débutant': 'teal',
    'Intermédiaire': 'yellow',
    'Avancé': 'orange',
  }
  return <Badge color={map[level] || 'gray'}>{level}</Badge>
}

export function CategoryBadge({ category }) {
  const map = {
    'Fondamentaux': 'violet',
    'Marchés': 'blue',
    'Analyse': 'teal',
    'Stratégie': 'yellow',
    'Pratique': 'orange',
  }
  return <Badge color={map[category] || 'gray'}>{category}</Badge>
}
