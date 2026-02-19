import React from 'react'

export function MovingAverages() {
  // Price data (simulated)
  const price = [100,105,98,112,108,120,115,125,119,132,128,140,135,145,138,152,146,158,150,165,158,170,162,175]
  const ma20 = [100,102,101,104,104,108,108,112,112,117,118,123,124,128,129,134,135,140,141,146,148,152,154,158]
  const ma50 = [100,101,100,102,102,105,105,108,108,112,112,116,117,120,121,125,126,130,131,135,137,140,142,145]

  const w = 400, h = 160, pad = 20
  const minV = 90, maxV = 180
  const scaleY = (v) => pad + (h - 2 * pad) * (1 - (v - minV) / (maxV - minV))
  const scaleX = (i) => pad + (i / (price.length - 1)) * (w - 2 * pad)

  const toPath = (arr) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i)},${scaleY(v)}`).join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h + 30}`} className="w-full h-auto">
      {/* Grid */}
      {[0,1,2,3].map(i => (
        <line key={i} x1={pad} y1={pad + i * (h - 2*pad)/3} x2={w - pad} y2={pad + i * (h - 2*pad)/3} stroke="#1a1a1a" strokeWidth="1" />
      ))}

      {/* Area under price */}
      <path d={`${toPath(price)} L${scaleX(price.length-1)},${h-pad} L${pad},${h-pad} Z`} fill="url(#priceGrad)" opacity="0.1" />

      {/* MA 50 */}
      <path d={toPath(ma50)} fill="none" stroke="#6366f1" strokeWidth="1.5" opacity="0.7" />
      {/* MA 20 */}
      <path d={toPath(ma20)} fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
      {/* Price */}
      <path d={toPath(price)} fill="none" stroke="#f5f5f5" strokeWidth="1.5" />

      {/* Crossover signal */}
      <circle cx={scaleX(14)} cy={scaleY(138)} r="5" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
      <text x={scaleX(14)} y={scaleY(138) - 10} fill="#14b8a6" fontSize="7" textAnchor="middle" fontFamily="monospace">Cross ↑</text>

      {/* Legend */}
      <g transform={`translate(${pad}, ${h + 10})`}>
        <rect x="0" y="0" width="10" height="3" fill="#f5f5f5" rx="1" />
        <text x="14" y="5" fill="#a3a3a3" fontSize="8" fontFamily="monospace">Prix</text>

        <rect x="45" y="0" width="10" height="3" fill="#f59e0b" rx="1" />
        <text x="59" y="5" fill="#a3a3a3" fontSize="8" fontFamily="monospace">MA 20</text>

        <rect x="100" y="0" width="10" height="3" fill="#6366f1" rx="1" />
        <text x="114" y="5" fill="#a3a3a3" fontSize="8" fontFamily="monospace">MA 50</text>
      </g>

      <defs>
        <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
