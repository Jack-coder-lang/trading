import React from 'react'
import { CandlestickChart } from '../components/illustrations/CandlestickChart'

function CandleExample({ open, close, high, low, width = 60, height = 100, label, bullish }) {
  const padding = 10
  const bodyTop = Math.min(open, close)
  const bodyBot = Math.max(open, close)
  const bodyH = Math.max(3, bodyBot - bodyTop)
  const color = bullish ? '#14b8a6' : '#ef4444'
  const cx = width / 2

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <line x1={cx} y1={high} x2={cx} y2={low} stroke={color} strokeWidth="1.5" />
        <rect x={cx - 10} y={bodyTop} width={20} height={bodyH} fill={color} rx="1" opacity="0.85" />
      </svg>
      <p className="text-xs text-center text-text-muted font-mono leading-tight">{label}</p>
    </div>
  )
}

export default function Module07_CandlestickPatterns() {
  const patterns = [
    {
      category: 'Bougies simples',
      items: [
        { label: 'Marteau\n(Hammer)', bull: true, open: 35, close: 25, high: 22, low: 80, desc: 'Long corps + longue mèche basse. Signal haussier après downtrend.' },
        { label: 'Pendu\n(Hanging Man)', bull: false, open: 25, close: 35, high: 22, low: 80, desc: 'Même forme que Hammer mais après un uptrend. Signal baissier.' },
        { label: 'Doji', bull: true, open: 50, close: 52, high: 20, low: 80, desc: 'Ouverture ≈ Clôture. Indécision totale.' },
        { label: 'Shooting Star', bull: false, open: 70, close: 80, high: 15, low: 85, desc: 'Longue mèche haute. Rejet des niveaux hauts. Baissier.' },
      ]
    },
    {
      category: 'Patterns en 2 bougies',
      items: [
        { label: 'Engulfing\nHaussier', bull: true, open: 55, close: 30, high: 25, low: 60, desc: 'Grande verte englobe la rouge précédente. Fort signal haussier.' },
        { label: 'Engulfing\nBaissier', bull: false, open: 30, close: 55, high: 25, low: 60, desc: 'Grande rouge englobe la verte précédente. Fort signal baissier.' },
        { label: 'Harami\nHaussier', bull: true, open: 60, close: 35, high: 30, low: 65, desc: 'Petit corps à l\'intérieur de la bougie précédente. Signal modéré.' },
        { label: 'Tweezer\nBottom', bull: true, open: 45, close: 30, high: 25, low: 85, desc: 'Deux mèches basses identiques. Support fort identifié.' },
      ]
    }
  ]

  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Maîtriser la lecture des chandeliers japonais et les patterns les plus importants pour anticiper les mouvements de marché.</p>
      </div>

      <h2>Anatomie d'une bougie japonaise</h2>
      <div className="flex items-center gap-8 my-6 flex-wrap">
        <div className="flex-shrink-0">
          <svg width="80" height="150" viewBox="0 0 80 150">
            <line x1="40" y1="5" x2="40" y2="35" stroke="#14b8a6" strokeWidth="2" />
            <rect x="20" y="35" width="40" height="70" fill="#14b8a6" rx="2" opacity="0.85" />
            <line x1="40" y1="105" x2="40" y2="145" stroke="#14b8a6" strokeWidth="2" />
            <text x="50" y="10" fill="#a3a3a3" fontSize="9" fontFamily="monospace">Plus haut</text>
            <text x="50" y="40" fill="#14b8a6" fontSize="9" fontFamily="monospace">Clôture</text>
            <text x="50" y="70" fill="#f5f5f5" fontSize="9" fontFamily="monospace">Corps</text>
            <text x="50" y="102" fill="#14b8a6" fontSize="9" fontFamily="monospace">Ouverture</text>
            <text x="50" y="140" fill="#a3a3a3" fontSize="9" fontFamily="monospace">Plus bas</text>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="space-y-2">
            {[
              { part: 'Corps (Real Body)', desc: 'Différence entre ouverture et clôture. Vert = hausse, Rouge = baisse.' },
              { part: 'Mèche supérieure', desc: 'Du corps au plus haut. Montre la pression vendeuse qui a rejeté les niveaux hauts.' },
              { part: 'Mèche inférieure', desc: 'Du corps au plus bas. Montre la pression acheteuse qui a soutenu les niveaux bas.' },
            ].map((p, i) => (
              <div key={i} className="p-2 rounded-lg bg-bg-secondary border border-border-subtle">
                <p className="text-xs font-semibold text-text-primary">{p.part}</p>
                <p className="text-xs text-text-muted mt-0.5">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border-default bg-bg-secondary p-4">
        <p className="text-xs font-mono text-text-muted mb-3">EXEMPLE — Graphique avec chandeliers</p>
        <CandlestickChart />
      </div>

      {patterns.map((section, si) => (
        <div key={si}>
          <h2>{section.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            {section.items.map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-border-default rounded-xl p-3 flex flex-col items-center">
                <CandleExample
                  open={p.open} close={p.close} high={p.high} low={p.low}
                  bullish={p.bull} label={p.label}
                  width={60} height={100}
                />
                <p className="text-xs text-text-muted text-center mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2>Patterns en 3 bougies (les plus puissants)</h2>
      <div className="space-y-3">
        {[
          {
            name: 'Morning Star (Étoile du matin)',
            type: 'haussier',
            desc: '1) Grande bougie rouge → 2) Petit corps (Doji ou quasi) → 3) Grande bougie verte clôturant dans le corps de la 1ère. Signal de fin de downtrend.',
            color: 'teal'
          },
          {
            name: 'Evening Star (Étoile du soir)',
            type: 'baissier',
            desc: '1) Grande bougie verte → 2) Petit corps → 3) Grande bougie rouge. Inverse du Morning Star. Signal de fin d\'uptrend.',
            color: 'red'
          },
          {
            name: 'Three White Soldiers',
            type: 'haussier',
            desc: 'Trois grandes bougies vertes consécutives, chacune ouvrant dans le corps de la précédente et clôturant plus haut. Signal haussier très fort.',
            color: 'teal'
          },
          {
            name: 'Three Black Crows',
            type: 'baissier',
            desc: 'Trois grandes bougies rouges consécutives, chacune ouvrant dans le corps de la précédente et clôturant plus bas. Signal baissier très fort.',
            color: 'red'
          },
        ].map((p, i) => (
          <div key={i} className={`p-4 rounded-lg border ${p.color === 'teal' ? 'border-teal-500/20 bg-teal-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-semibold text-text-primary">{p.name}</p>
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${p.color === 'teal' ? 'bg-teal-500/15 text-teal-400' : 'bg-red-500/15 text-red-400'}`}>
                {p.type === 'haussier' ? '↑ Haussier' : '↓ Baissier'}
              </span>
            </div>
            <p className="text-xs text-text-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="info-box yellow">
        <p className="text-sm font-mono text-yellow-400 font-semibold mb-1">⚠️ Règle importante</p>
        <p className="text-sm">Un pattern de chandelier n'est jamais un signal seul. Il doit être confirmé par : 1) le contexte de la tendance, 2) un niveau clé (support/résistance), 3) idéalement un autre indicateur. Un Hammer sur un graphique aléatoire ne vaut rien.</p>
      </div>
    </div>
  )
}
