import React from 'react'

export function RiskRewardDiagram() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto">
      {/* Background grid */}
      {[1,2,3,4].map(i => (
        <line key={i} x1="60" y1={20 + i * 36} x2="380" y2={20 + i * 36} stroke="#1f1f1f" strokeWidth="1" />
      ))}

      {/* Entry line */}
      <line x1="60" y1="110" x2="380" y2="110" stroke="#3a3a3a" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="52" y="114" fill="#a3a3a3" fontSize="9" textAnchor="end" fontFamily="monospace">Entry</text>
      <text x="55" y="114" fill="#f5f5f5" fontSize="9" fontFamily="monospace">1.1050</text>

      {/* Stop Loss */}
      <line x1="60" y1="146" x2="380" y2="146" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="52" y="150" fill="#ef4444" fontSize="9" textAnchor="end" fontFamily="monospace">SL</text>
      <text x="55" y="150" fill="#ef4444" fontSize="9" fontFamily="monospace">1.0990</text>

      {/* Take Profit */}
      <line x1="60" y1="38" x2="380" y2="38" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="52" y="42" fill="#14b8a6" fontSize="9" textAnchor="end" fontFamily="monospace">TP</text>
      <text x="55" y="42" fill="#14b8a6" fontSize="9" fontFamily="monospace">1.1230</text>

      {/* Risk zone (red) */}
      <rect x="200" y="110" width="50" height="36" fill="#ef4444" opacity="0.15" rx="2" />
      <text x="225" y="132" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="600">RISK</text>
      <text x="225" y="143" fill="#ef4444" fontSize="8" textAnchor="middle">-60 pips</text>

      {/* Reward zone (teal) */}
      <rect x="200" y="38" width="50" height="72" fill="#14b8a6" opacity="0.15" rx="2" />
      <text x="225" y="72" fill="#14b8a6" fontSize="9" textAnchor="middle" fontWeight="600">REWARD</text>
      <text x="225" y="83" fill="#14b8a6" fontSize="8" textAnchor="middle">+180 pips</text>

      {/* R:R label */}
      <rect x="280" y="68" width="88" height="30" fill="#1a1a1a" stroke="#7c3aed" strokeWidth="1" rx="6" />
      <text x="324" y="80" fill="#7c3aed" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="monospace">R:R = 1:3</text>
      <text x="324" y="93" fill="#a3a3a3" fontSize="8" textAnchor="middle" fontFamily="monospace">Risk 1% → Win 3%</text>

      {/* Arrow up */}
      <line x1="190" y1="110" x2="190" y2="42" stroke="#14b8a6" strokeWidth="1.5" markerEnd="url(#arrowUp)" />
      {/* Arrow down */}
      <line x1="170" y1="110" x2="170" y2="142" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowDown)" />

      <defs>
        <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M2,6 L4,2 L6,6" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        </marker>
        <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M2,2 L4,6 L6,2" fill="none" stroke="#ef4444" strokeWidth="1.5" />
        </marker>
      </defs>
    </svg>
  )
}
