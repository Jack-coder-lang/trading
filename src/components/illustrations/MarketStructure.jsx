import React from 'react'

export function MarketStructure() {
  // Uptrend path points
  const points = [
    [20, 160], [60, 130], [80, 145], [120, 100], [140, 118], [190, 70], [210, 88], [260, 45], [280, 62], [320, 30]
  ]

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')

  // HH and HL labels
  const hh = [[120, 100], [190, 70], [260, 45]]
  const hl = [[80, 145], [140, 118], [210, 88]]

  return (
    <svg viewBox="0 0 340 190" className="w-full h-auto">
      {/* Grid */}
      {[0,1,2,3].map(i => (
        <line key={i} x1="15" y1={30 + i * 40} x2="330" y2={30 + i * 40} stroke="#1a1a1a" strokeWidth="1" />
      ))}

      {/* Filled area */}
      <path
        d={`${pathD} L320,180 L20,180 Z`}
        fill="url(#areaGrad)"
        opacity="0.3"
      />

      {/* Main line */}
      <path d={pathD} fill="none" stroke="#7c3aed" strokeWidth="2" />

      {/* HH markers */}
      {hh.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="#7c3aed" />
          <text x={x} y={y - 10} fill="#7c3aed" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="600">HH</text>
        </g>
      ))}

      {/* HL markers */}
      {hl.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="#6366f1" />
          <text x={x} y={y + 16} fill="#6366f1" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="600">HL</text>
        </g>
      ))}

      {/* Trend line */}
      <line x1="20" y1="162" x2="320" y2="32" stroke="#14b8a6" strokeWidth="1" strokeDasharray="5,3" opacity="0.6" />

      {/* Labels */}
      <text x="170" y="185" fill="#a3a3a3" fontSize="9" textAnchor="middle" fontFamily="monospace">TENDANCE HAUSSIÈRE — Higher Highs + Higher Lows</text>

      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
