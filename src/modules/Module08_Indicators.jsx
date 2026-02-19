import React from 'react'
import { MovingAverages } from '../components/illustrations/MovingAverages'

export default function Module08_Indicators() {
  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Comprendre et utiliser correctement les principaux indicateurs techniques : Moyennes Mobiles, RSI, MACD et Bandes de Bollinger.</p>
      </div>

      <div className="info-box yellow">
        <p className="text-sm">⚠️ <strong>Rappel fondamental :</strong> Les indicateurs sont des outils basés sur des prix <em>passés</em>. Ils ont tous un délai (lag). Ils ne prédisent pas l'avenir ; ils aident à contextualiser le mouvement présent. Ne jamais trader sur indicateur seul sans price action.</p>
      </div>

      <h2>1. Les Moyennes Mobiles (MA)</h2>
      <p>
        Une moyenne mobile calcule la moyenne des cours de clôture sur une période N. Elle <strong>lisse les fluctuations</strong> pour révéler la tendance sous-jacente.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-violet mb-1">SMA — Simple Moving Average</p>
          <p className="text-xs text-text-muted">Moyenne arithmétique simple. Chaque période a le même poids. Plus lente à réagir mais moins de faux signaux.</p>
          <p className="text-xs font-mono mt-2 text-text-secondary">SMA(20) = (C1+C2+...+C20) / 20</p>
        </div>
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-blue mb-1">EMA — Exponential Moving Average</p>
          <p className="text-xs text-text-muted">Poids plus important aux données récentes. Réagit plus vite aux changements de prix. Préférée par la plupart des traders actifs.</p>
          <p className="text-xs font-mono mt-2 text-text-secondary">EMA(9) = prix × k + EMA(prev) × (1-k)</p>
        </div>
      </div>

      <div className="rounded-xl border border-border-default bg-bg-secondary p-4">
        <p className="text-xs font-mono text-text-muted mb-3">ILLUSTRATION — Prix + MA 20 (jaune) + MA 50 (violet)</p>
        <MovingAverages />
      </div>

      <p>Les MA les plus utilisées et leur utilisation :</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm mt-3">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left py-2 pr-4 text-text-muted font-normal text-xs font-mono">Période</th>
              <th className="text-left py-2 pr-4 text-text-muted font-normal text-xs font-mono">Usage</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['MA 9 / EMA 9', 'Court terme, scalping/day trading. Très sensible.'],
              ['MA 20 / EMA 20', 'Référence des swing traders. Représente ~1 mois de trading.'],
              ['MA 50 / EMA 50', 'Tendance moyen terme. Très surveillée par institutionnels.'],
              ['MA 200', 'Tendance long terme. Au-dessus = bull market, en dessous = bear market.'],
            ].map(([ma, usage], i) => (
              <tr key={i} className="border-b border-border-subtle">
                <td className="py-2 pr-4 font-mono text-accent-violet text-xs">{ma}</td>
                <td className="py-2 text-text-secondary text-xs">{usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>2. RSI — Relative Strength Index</h2>
      <p>
        Créé par Welles Wilder en 1978, le RSI est un oscillateur (0-100) qui mesure la <strong>vitesse et l'amplitude des mouvements de prix</strong>.
      </p>

      <div className="bg-bg-secondary border border-border-default rounded-xl p-4 my-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-text-muted">RSI (14)</span>
        </div>
        <div className="relative h-16">
          <div className="absolute inset-0 bg-bg-primary rounded-lg" />
          <div className="absolute top-0 left-0 right-0 h-px bg-red-500/30" style={{top:'20%'}} />
          <div className="absolute top-0 left-0 right-0 h-px bg-teal-500/30" style={{top:'60%'}} />
          <div className="absolute left-2" style={{top:'17%'}}>
            <span className="text-xs font-mono text-accent-red">— 70 Surachat</span>
          </div>
          <div className="absolute left-2" style={{top:'57%'}}>
            <span className="text-xs font-mono text-accent-teal">— 30 Survente</span>
          </div>
          <svg className="absolute inset-0 w-full h-full">
            <polyline
              points="0,38 30,35 60,20 90,25 120,48 150,52 180,58 210,40 240,30 270,32 300,45 330,50 360,55 380,60"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      <ul>
        <li><strong>RSI &gt; 70</strong> → Zone de <span className="bearish">surachat</span> : possible retournement baissier</li>
        <li><strong>RSI &lt; 30</strong> → Zone de <span className="bullish">survente</span> : possible retournement haussier</li>
        <li><strong>Divergence haussière</strong> → Prix fait un LL, RSI fait un HL → signal d'achat</li>
        <li><strong>Divergence baissière</strong> → Prix fait un HH, RSI fait un LH → signal de vente</li>
      </ul>

      <h2>3. MACD — Moving Average Convergence Divergence</h2>
      <p>
        Le MACD est composé de trois éléments calculés à partir des EMA :
      </p>
      <div className="space-y-2 my-4 font-mono text-sm">
        <div className="p-3 rounded-lg bg-bg-secondary border border-border-default">
          <span className="text-accent-violet">Ligne MACD</span> <span className="text-text-muted">= EMA(12) - EMA(26)</span>
        </div>
        <div className="p-3 rounded-lg bg-bg-secondary border border-border-default">
          <span className="text-yellow-400">Ligne Signal</span> <span className="text-text-muted">= EMA(9) de la ligne MACD</span>
        </div>
        <div className="p-3 rounded-lg bg-bg-secondary border border-border-default">
          <span className="text-text-secondary">Histogramme</span> <span className="text-text-muted">= Ligne MACD - Ligne Signal</span>
        </div>
      </div>
      <ul>
        <li><strong>Croisement haussier</strong> → MACD croise Signal vers le haut → Signal d'achat</li>
        <li><strong>Croisement baissier</strong> → MACD croise Signal vers le bas → Signal de vente</li>
        <li><strong>Divergences</strong> → Même principe que RSI, souvent plus fiable</li>
      </ul>

      <h2>4. Bandes de Bollinger</h2>
      <p>
        Créées par John Bollinger, les bandes encadrent le prix en fonction de sa volatilité statistique :
      </p>
      <ul>
        <li><strong>Bande centrale</strong> = MM20 (moyenne mobile 20 périodes)</li>
        <li><strong>Bande supérieure</strong> = MM20 + 2 × écart-type</li>
        <li><strong>Bande inférieure</strong> = MM20 - 2 × écart-type</li>
      </ul>
      <div className="info-box teal">
        <p className="text-sm">💡 <strong>Bollinger Squeeze :</strong> Quand les bandes se resserrent (faible volatilité), une expansion explosive est imminente. C'est l'un des signaux les plus fiables pour anticiper un fort mouvement, même si la direction reste à confirmer par d'autres éléments.</p>
      </div>

      <h2>Règles d'utilisation des indicateurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="info-box teal">
          <p className="text-sm font-semibold text-accent-teal mb-2">✅ À faire</p>
          <ul className="text-xs space-y-1">
            <li>Utiliser 2-3 indicateurs complémentaires max</li>
            <li>Toujours confirmer avec le price action</li>
            <li>Adapter la période au timeframe tradé</li>
            <li>Chercher la convergence de signaux</li>
          </ul>
        </div>
        <div className="info-box red">
          <p className="text-sm font-semibold text-accent-red mb-2">❌ À éviter</p>
          <ul className="text-xs space-y-1">
            <li>Ajouter 8+ indicateurs (paralysie d'analyse)</li>
            <li>Sur-optimiser les paramètres (overfitting)</li>
            <li>Ignorer le contexte général de marché</li>
            <li>Croire qu'un indicateur prédit l'avenir</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
