import React from 'react'

export function CandlestickChart({ width = 500, height = 220 }) {
  const candles = [
    { x: 30, open: 150, close: 130, high: 120, low: 165, bull: false },
    { x: 70, open: 132, close: 115, high: 108, low: 145, bull: false },
    { x: 110, open: 118, close: 100, high: 93, low: 130, bull: false },
    { x: 150, open: 102, close: 120, high: 88, low: 125, bull: true },
    { x: 190, open: 118, close: 140, high: 105, low: 148, bull: true },
    { x: 230, open: 138, close: 125, high: 118, low: 152, bull: false },
    { x: 270, open: 127, close: 145, high: 112, low: 152, bull: true },
    { x: 310, open: 143, close: 162, high: 130, low: 168, bull: true },
    { x: 350, open: 160, close: 148, high: 138, low: 172, bull: false },
    { x: 390, open: 150, close: 170, high: 135, low: 175, bull: true },
    { x: 430, open: 168, close: 188, high: 155, low: 192, bull: true },
    { x: 470, open: 186, close: 175, high: 168, low: 195, bull: false },
  ]

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {/* Grid lines */}
      {[0, 1, 2, 3, 4].map(i => (
        <line
          key={i}
          x1="15" y1={40 + i * 38} x2={width - 10} y2={40 + i * 38}
          stroke="#1f1f1f" strokeWidth="1"
        />
      ))}
      {/* Price labels */}
      {['200', '162', '124', '86', '48'].map((label, i) => (
        <text key={i} x="10" y={44 + i * 38} fill="#525252" fontSize="8" textAnchor="end">{label}</text>
      ))}

      {candles.map((c, i) => {
        const bullColor = '#14b8a6'
        const bearColor = '#ef4444'
        const color = c.bull ? bullColor : bearColor
        const bodyTop = Math.min(c.open, c.close)
        const bodyBot = Math.max(c.open, c.close)
        const bodyH = Math.max(2, bodyBot - bodyTop)

        return (
          <g key={i}>
            {/* Wick */}
            <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1.5" />
            {/* Body */}
            <rect x={c.x - 8} y={bodyTop} width={16} height={bodyH} fill={color} rx="1" opacity="0.9" />
          </g>
        )
      })}

      {/* Moving average line */}
      <polyline
        points={candles.map(c => `${c.x},${(c.open + c.close) / 2}`).join(' ')}
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1.5"
        strokeDasharray="4,2"
        opacity="0.7"
      />

      {/* Labels */}
      <text x="15" y="12" fill="#a3a3a3" fontSize="10" fontFamily="JetBrains Mono, monospace">BTCUSDT · 1D</text>
      <text x={width - 10} y="12" fill="#14b8a6" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="end">+12.4%</text>
    </svg>
  )
}
