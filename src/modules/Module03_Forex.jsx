import React from 'react'
import { ForexPairs } from '../components/illustrations/ForexPairs'

export default function Module03_Forex() {
  const sessions = [
    { name: 'Sydney', time: '22h - 07h CET', volatility: 20, color: '#6366f1' },
    { name: 'Tokyo', time: '01h - 09h CET', volatility: 35, color: '#7c3aed' },
    { name: 'Londres', time: '08h - 17h CET', volatility: 80, color: '#14b8a6' },
    { name: 'New York', time: '14h - 23h CET', volatility: 70, color: '#f59e0b' },
    { name: 'Overlap LDN/NY', time: '14h - 17h CET', volatility: 100, color: '#ef4444' },
  ]

  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Comprendre le fonctionnement du marché Forex, ses paires de devises, ses sessions et comment calculer les pips et la valeur d'une position.</p>
      </div>

      <h2>Le Forex en chiffres</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
        {[
          { v: '~7 500', u: 'Mds USD/jour', l: 'Volume quotidien' },
          { v: '24/5', u: '', l: 'Heures d\'ouverture' },
          { v: '180+', u: 'devises', l: 'Cotées' },
          { v: '5%', u: 'min de marge', l: 'Levier max UE (20:1)' },
        ].map((s, i) => (
          <div key={i} className="bg-bg-secondary border border-border-default rounded-lg p-3 text-center">
            <p className="text-xl font-mono font-bold text-accent-violet">{s.v}<span className="text-sm text-text-muted ml-1">{s.u}</span></p>
            <p className="text-xs text-text-muted mt-1">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border-default bg-bg-secondary p-4">
        <p className="text-xs font-mono text-text-muted mb-3">COTATIONS EN DIRECT — Principales paires Forex</p>
        <ForexPairs />
      </div>

      <h2>Les paires de devises</h2>
      <p>
        Une <strong>paire de devises</strong> compare toujours deux monnaies. EUR/USD signifie "combien de dollars vaut 1 euro". La première devise (EUR) est la <strong>devise de base</strong>, la seconde (USD) est la <strong>devise de cotation</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-violet mb-2">Paires Majeures</p>
          <p className="text-xs text-text-muted mb-2">Toujours en USD, spreads les plus faibles</p>
          {['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF', 'AUD/USD', 'USD/CAD'].map(p => (
            <p key={p} className="text-xs font-mono text-text-secondary">{p}</p>
          ))}
        </div>
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-blue mb-2">Crosses</p>
          <p className="text-xs text-text-muted mb-2">Sans USD, spreads plus larges</p>
          {['EUR/GBP', 'EUR/JPY', 'GBP/JPY', 'EUR/CHF', 'AUD/JPY', 'GBP/CHF'].map(p => (
            <p key={p} className="text-xs font-mono text-text-secondary">{p}</p>
          ))}
        </div>
        <div className="info-box teal">
          <p className="text-sm font-semibold text-accent-teal mb-2">Exotiques</p>
          <p className="text-xs text-text-muted mb-2">Faible liquidité, spreads très larges</p>
          {['USD/TRY', 'USD/BRL', 'EUR/PLN', 'USD/ZAR', 'USD/MXN', 'USD/SEK'].map(p => (
            <p key={p} className="text-xs font-mono text-text-secondary">{p}</p>
          ))}
        </div>
      </div>

      <h2>Les Pips et le calcul de profit/perte</h2>
      <p>
        Un <strong>pip</strong> (Percentage In Point) est la plus petite variation standard du taux de change. Pour EUR/USD : 1 pip = 0.0001. Si EUR/USD passe de 1.0920 à 1.0925, il a bougé de <strong>5 pips</strong>.
      </p>
      <div className="bg-bg-secondary border border-border-default rounded-lg p-4 my-4 font-mono">
        <p className="text-xs text-text-muted mb-2">CALCUL — Valeur d'un pip sur EUR/USD</p>
        <p className="text-sm text-text-secondary">1 lot standard = 100 000 unités de devise de base</p>
        <p className="text-sm text-accent-violet mt-1">1 pip = 100 000 × 0.0001 = <span className="text-text-primary font-bold">10 USD</span></p>
        <p className="text-sm text-text-secondary mt-2">0.1 lot (mini) = 100 000 × 0.1 × 0.0001 = <span className="text-text-primary">1 USD/pip</span></p>
        <p className="text-sm text-text-secondary">0.01 lot (micro) = <span className="text-text-primary">0.10 USD/pip</span></p>
      </div>

      <h2>Les Sessions de Trading</h2>
      <p>Le Forex est ouvert 24h/24 grâce à la rotation des sessions mondiales. Chaque session a sa propre volatilité :</p>
      <div className="space-y-2 my-4">
        {sessions.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-24 flex-shrink-0">
              <p className="text-xs font-mono text-text-primary font-semibold">{s.name}</p>
              <p className="text-xs text-text-muted">{s.time}</p>
            </div>
            <div className="flex-1 bg-bg-primary rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${s.volatility}%`, backgroundColor: s.color, opacity: 0.8 }}
              />
            </div>
            <span className="text-xs font-mono text-text-muted w-10 text-right">{s.volatility}%</span>
          </div>
        ))}
      </div>

      <h2>L'Effet de Levier : une arme à double tranchant</h2>
      <div className="info-box red">
        <p className="text-sm font-mono text-accent-red font-semibold mb-2">⚠️ Danger : L'effet de levier amplifie les pertes</p>
        <p className="text-sm">Avec un levier de 50:1, un mouvement de 2% contre vous efface 100% de votre capital investi. La réglementation européenne (ESMA) limite le levier pour les particuliers à 30:1 sur les paires majeures.</p>
      </div>
      <div className="bg-bg-secondary border border-border-default rounded-lg p-4 font-mono">
        <p className="text-xs text-text-muted mb-3">EXEMPLE — Levier 20:1</p>
        <div className="space-y-1 text-sm">
          <p className="text-text-secondary">Capital : <span className="text-text-primary">1 000 €</span></p>
          <p className="text-text-secondary">Levier 20:1 → Position contrôlée : <span className="text-accent-violet">20 000 €</span></p>
          <p className="text-text-secondary">Mouvement de +1% → Profit : <span className="text-accent-teal">+200 € (+20%)</span></p>
          <p className="text-text-secondary">Mouvement de -1% → Perte : <span className="text-accent-red">-200 € (-20%)</span></p>
        </div>
      </div>

      <h2>Le Swap (coût de financement overnight)</h2>
      <p>
        Si vous laissez une position ouverte au-delà de 17h (heure de New York), vous payez ou recevez un <strong>swap</strong> — un intérêt calculé sur le différentiel des taux d'intérêt entre les deux devises. Pour les day traders qui clôturent avant 17h, le swap ne s'applique pas.
      </p>
    </div>
  )
}
