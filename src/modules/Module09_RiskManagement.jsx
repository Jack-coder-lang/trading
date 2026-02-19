import React from 'react'
import { RiskRewardDiagram } from '../components/illustrations/RiskRewardDiagram'

export default function Module09_RiskManagement() {
  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Maîtriser les fondamentaux de la gestion du risque : position sizing, ratio R:R, stop loss, drawdown. C'est LA compétence qui sépare les traders survivants des autres.</p>
      </div>

      <div className="info-box teal">
        <p className="text-sm">💡 <strong>Principe fondamental :</strong> En trading, vous ne contrôlez pas vos profits — le marché décide. Mais vous contrôlez entièrement vos pertes. La gestion du risque est le seul levier de contrôle réel que vous avez.</p>
      </div>

      <h2>La Règle des 1-2%</h2>
      <p>
        La règle la plus simple et la plus importante : <strong>ne jamais risquer plus de 1-2% de votre capital total sur un seul trade</strong>.
      </p>
      <div className="bg-bg-secondary border border-border-default rounded-xl p-4 my-4 font-mono">
        <p className="text-xs text-text-muted mb-3">SIMULATION — Série de 10 pertes consécutives</p>
        <div className="space-y-2">
          {[
            { risque: '10%', capital: '34 868 €', perte: '-65%', color: 'text-accent-red' },
            { risque: '5%', capital: '59 874 €', perte: '-40%', color: 'text-yellow-400' },
            { risque: '2%', capital: '81 707 €', perte: '-18%', color: 'text-orange-400' },
            { risque: '1%', capital: '90 438 €', perte: '-10%', color: 'text-accent-teal' },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Risque {row.risque}/trade</span>
              <span className="text-text-primary">→ {row.capital}</span>
              <span className={row.color}>{row.perte}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-3">Capital initial : 100 000 € · Après 10 trades perdants</p>
      </div>

      <h2>Le Ratio Risque/Récompense (R:R)</h2>
      <div className="rounded-xl border border-border-default bg-bg-secondary p-4 my-4">
        <p className="text-xs font-mono text-text-muted mb-3">ILLUSTRATION — Exemple de trade R:R 1:3</p>
        <RiskRewardDiagram />
      </div>

      <p>Le R:R répond à la question : "<strong>Pour chaque euro que je risque, combien est-ce que je vise à gagner ?</strong>"</p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left py-2 pr-4 text-text-muted font-normal text-xs font-mono">R:R</th>
              <th className="text-left py-2 pr-4 text-text-muted font-normal text-xs font-mono">Win Rate nécessaire pour être rentable</th>
              <th className="text-left py-2 text-text-muted font-normal text-xs font-mono">Expectancy à 50% win rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1:1', '> 50%', '+0€ (neutre)'],
              ['1:2', '> 33%', '+0.50€ par trade'],
              ['1:3', '> 25%', '+1.00€ par trade'],
              ['1:5', '> 17%', '+2.00€ par trade'],
            ].map(([rr, wr, exp], i) => (
              <tr key={i} className="border-b border-border-subtle">
                <td className="py-2 pr-4 font-mono text-accent-violet">{rr}</td>
                <td className="py-2 pr-4 text-text-secondary text-xs">{wr}</td>
                <td className="py-2 text-accent-teal text-xs">{exp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Le Position Sizing : calcul précis</h2>
      <div className="bg-bg-secondary border border-accent-violet/30 rounded-xl p-4 my-4 font-mono">
        <p className="text-xs text-accent-violet mb-3 font-semibold">FORMULE — Position Sizing</p>
        <div className="space-y-2 text-sm">
          <p className="text-text-secondary">Capital risqué = Capital total × % Risque</p>
          <p className="text-text-secondary">Taille = Capital risqué ÷ (Distance Stop Loss × Valeur du pip)</p>
        </div>
        <div className="mt-4 pt-4 border-t border-border-subtle">
          <p className="text-xs text-text-muted mb-2">EXEMPLE — EUR/USD</p>
          <p className="text-xs text-text-secondary">Capital : 10 000€ · Risque : 1% → <span className="text-text-primary">100€ à risquer</span></p>
          <p className="text-xs text-text-secondary">SL : 50 pips · 1 pip sur mini lot = 1€</p>
          <p className="text-xs text-accent-teal mt-1">→ Taille = 100 ÷ 50 = <strong>2 mini lots (0.2 lot)</strong></p>
        </div>
      </div>

      <h2>Placement du Stop Loss</h2>
      <p>Un stop loss doit être placé à un niveau <strong>logiquement invalidant</strong> pour votre thèse de trade, pas arbitrairement :</p>
      <ul>
        <li>En achat : en dessous du <strong>dernier Higher Low</strong> ou du support testé</li>
        <li>En vente : au-dessus du <strong>dernier Lower High</strong> ou de la résistance cassée</li>
        <li>Toujours <strong>hors de la zone de bruit</strong> du marché (pas trop proche)</li>
        <li>Jamais basé uniquement sur un montant en € (ex: "je ne veux pas perdre plus de 50€")</li>
      </ul>

      <div className="info-box red">
        <p className="text-sm font-mono text-accent-red font-semibold mb-1">❌ Les pires erreurs de gestion du risque</p>
        <ul className="text-sm space-y-1">
          <li><strong>Déplacer le SL</strong> pour "donner une chance" au trade qui va dans le mauvais sens</li>
          <li><strong>Martingale</strong> — Doubler la mise après chaque perte (recette pour le désastre)</li>
          <li><strong>Trader sans SL</strong> — "Cette fois ça va revenir..." — Non.</li>
          <li><strong>Averaging down</strong> — Renforcer une position perdante sans raison analytique</li>
        </ul>
      </div>

      <h2>La Drawdown : comprendre et gérer</h2>
      <p>
        La drawdown maximale = baisse maximale depuis un sommet jusqu'à un creux avant récupération. Une drawdown de 50% nécessite +100% pour revenir au niveau initial.
      </p>
      <div className="grid grid-cols-3 gap-3 my-4 text-center">
        {[
          { dd: '-10%', need: '+11%', color: 'text-accent-teal' },
          { dd: '-25%', need: '+33%', color: 'text-yellow-400' },
          { dd: '-50%', need: '+100%', color: 'text-orange-400' },
        ].map((d, i) => (
          <div key={i} className="bg-bg-secondary border border-border-default rounded-lg p-3">
            <p className="text-lg font-mono font-bold text-accent-red">{d.dd}</p>
            <p className="text-xs text-text-muted">Nécessite</p>
            <p className={`text-base font-mono font-bold ${d.color}`}>{d.need}</p>
            <p className="text-xs text-text-muted">pour récupérer</p>
          </div>
        ))}
      </div>

      <h2>Règles de discipline additionnelles</h2>
      <ul>
        <li><strong>Maximum 3-5 trades simultanés</strong> — Diversification oui, surinvestissement non</li>
        <li><strong>Stop journalier</strong> — Si vous perdez X% dans la journée, arrêtez de trader</li>
        <li><strong>Ne jamais "all-in"</strong> — Même votre meilleure opportunité peut échouer</li>
        <li><strong>Corrélation des positions</strong> — 3 paires USD long = 1 seul trade USD, pas trois</li>
      </ul>
    </div>
  )
}
