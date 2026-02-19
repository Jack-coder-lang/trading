import React from 'react'

export function ForexPairs() {
  const pairs = [
    { pair: 'EUR/USD', bid: '1.0921', ask: '1.0923', change: '+0.12%', bull: true },
    { pair: 'GBP/USD', bid: '1.2645', ask: '1.2648', change: '+0.08%', bull: true },
    { pair: 'USD/JPY', bid: '149.82', ask: '149.85', change: '-0.21%', bull: false },
    { pair: 'AUD/USD', bid: '0.6538', ask: '0.6541', change: '+0.05%', bull: true },
    { pair: 'USD/CHF', bid: '0.8912', ask: '0.8915', change: '-0.09%', bull: false },
    { pair: 'USD/CAD', bid: '1.3621', ask: '1.3624', change: '+0.15%', bull: true },
  ]

  return (
    <svg viewBox="0 0 380 200" className="w-full h-auto">
      {/* Header */}
      <rect x="0" y="0" width="380" height="26" fill="#111111" rx="6" />
      <text x="15" y="17" fill="#a3a3a3" fontSize="9" fontFamily="monospace">PAIRE</text>
      <text x="140" y="17" fill="#a3a3a3" fontSize="9" fontFamily="monospace">BID</text>
      <text x="200" y="17" fill="#a3a3a3" fontSize="9" fontFamily="monospace">ASK</text>
      <text x="270" y="17" fill="#a3a3a3" fontSize="9" fontFamily="monospace">VARIATION</text>

      {pairs.map((p, i) => {
        const y = 38 + i * 27
        const rowFill = i % 2 === 0 ? '#0d0d0d' : 'transparent'
        return (
          <g key={i}>
            <rect x="0" y={y - 9} width="380" height="24" fill={rowFill} rx="3" />
            {/* Flag placeholder */}
            <rect x="10" y={y - 4} width="14" height="10" fill="#2a2a2a" rx="2" />
            <text x="30" y={y + 4} fill="#f5f5f5" fontSize="10" fontFamily="monospace" fontWeight="500">{p.pair}</text>
            <text x="140" y={y + 4} fill="#a3a3a3" fontSize="10" fontFamily="monospace">{p.bid}</text>
            <text x="200" y={y + 4} fill="#a3a3a3" fontSize="10" fontFamily="monospace">{p.ask}</text>
            <text x="270" y={y + 4} fill={p.bull ? '#14b8a6' : '#ef4444'} fontSize="10" fontFamily="monospace" fontWeight="600">
              {p.change}
            </text>
            {/* Mini bar */}
            <rect x="330" y={y - 3} width="40" height="12" fill="#1a1a1a" rx="2" />
            <rect
              x="330"
              y={p.bull ? y - 3 : y + 3}
              width="40"
              height="6"
              fill={p.bull ? '#14b8a6' : '#ef4444'}
              rx="2"
              opacity="0.7"
            />
          </g>
        )
      })}

      {/* Bottom label */}
      <text x="190" y="196" fill="#525252" fontSize="8" textAnchor="middle" fontFamily="monospace">FOREX — Marché OTC 24h/5j · Volume ~7 500 Mds USD/jour</text>
    </svg>
  )
}
