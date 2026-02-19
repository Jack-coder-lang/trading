import React from 'react'

export function PsychologyCycle() {
  const emotions = [
    { label: 'Optimisme', angle: -90, color: '#14b8a6', r: 80 },
    { label: 'Excitation', angle: -30, color: '#22d3ee', r: 80 },
    { label: 'Euphorie', angle: 30, color: '#f59e0b', r: 80 },
    { label: 'Anxiété', angle: 90, color: '#f97316', r: 80 },
    { label: 'Peur', angle: 150, color: '#ef4444', r: 80 },
    { label: 'Panique', angle: 180, color: '#dc2626', r: 80 },
    { label: 'Dépression', angle: 210, color: '#991b1b', r: 80 },
    { label: 'Espoir', angle: 270, color: '#7c3aed', r: 80 },
  ]

  const cx = 160, cy = 110

  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto">
      {/* Orbit circle */}
      <circle cx={cx} cy={cy} r="80" fill="none" stroke="#2a2a2a" strokeWidth="1.5" strokeDasharray="4,3" />

      {/* Center */}
      <circle cx={cx} cy={cy} r="28" fill="#111111" stroke="#3a3a3a" strokeWidth="1" />
      <text x={cx} y={cy - 4} fill="#a3a3a3" fontSize="8" textAnchor="middle">Cycle</text>
      <text x={cx} y={cy + 7} fill="#a3a3a3" fontSize="8" textAnchor="middle">émotionnel</text>

      {emotions.map((e, i) => {
        const rad = (e.angle * Math.PI) / 180
        const x = cx + e.r * Math.cos(rad)
        const y = cy + e.r * Math.sin(rad)
        const lx = cx + (e.r + 22) * Math.cos(rad)
        const ly = cy + (e.r + 22) * Math.sin(rad)

        return (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill={e.color} opacity="0.85" />
            <text
              x={lx}
              y={ly + 3}
              fill={e.color}
              fontSize="7.5"
              textAnchor="middle"
              fontFamily="monospace"
              fontWeight="500"
            >
              {e.label}
            </text>
          </g>
        )
      })}

      {/* Arrow indicating direction */}
      <path
        d="M 240 110 A 80 80 0 0 1 220 170"
        fill="none"
        stroke="#3a3a3a"
        strokeWidth="2"
        markerEnd="url(#cycleArrow)"
      />

      <defs>
        <marker id="cycleArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#3a3a3a" />
        </marker>
      </defs>
    </svg>
  )
}
