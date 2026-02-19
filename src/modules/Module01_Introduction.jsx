import React from 'react'
import { CandlestickChart } from '../components/illustrations/CandlestickChart'

export default function Module01_Introduction() {
  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Comprendre ce qu'est un marché financier, ses participants, ses mécanismes de base et pourquoi le trading représente une opportunité.</p>
      </div>

      <h2>Qu'est-ce qu'un marché financier ?</h2>
      <p>
        Un <strong>marché financier</strong> est un système qui permet aux acheteurs et aux vendeurs d'échanger des actifs financiers — actions, devises, obligations, matières premières — à des prix déterminés par <strong>l'offre et la demande</strong>.
      </p>
      <p>
        Contrairement à ce que beaucoup imaginent, les marchés ne sont plus nécessairement des lieux physiques (comme la Bourse de New York avec ses traders qui crient). Aujourd'hui, la quasi-totalité des transactions s'effectue <strong>électroniquement</strong>, en quelques millisecondes.
      </p>

      <div className="rounded-xl overflow-hidden border border-border-default bg-bg-secondary p-4">
        <p className="text-xs font-mono text-text-muted mb-3">GRAPHIQUE — Chandeliers japonais (Exemple)</p>
        <CandlestickChart />
      </div>

      <h2>Les grandes catégories de marchés</h2>
      <ul>
        <li><strong>Marché des actions (Equities)</strong> — Achat/vente de parts d'entreprises cotées en bourse</li>
        <li><strong>Marché Forex</strong> — Échange de devises (EUR/USD, GBP/USD...), le plus grand marché du monde (~7 500 Mds$/jour)</li>
        <li><strong>Marché des cryptomonnaies</strong> — Bitcoin, Ethereum et milliers d'altcoins, disponibles 24h/7j</li>
        <li><strong>Marché des obligations</strong> — Titres de dette émis par États et entreprises</li>
        <li><strong>Marché des matières premières</strong> — Or, pétrole, blé, café...</li>
        <li><strong>Marché des dérivés</strong> — Futures, options, CFD basés sur des actifs sous-jacents</li>
      </ul>

      <h2>Marché Spot vs Marché à Terme</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="info-box teal">
          <p className="text-sm font-semibold text-accent-teal mb-2">Marché Spot (au comptant)</p>
          <p className="text-sm">La transaction est réglée <strong>immédiatement</strong> (T+0 à T+2). Vous achetez l'actif réel. Exemple : acheter 100 actions Apple à 180$.</p>
        </div>
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-violet mb-2">Marché à Terme</p>
          <p className="text-sm">Le règlement est <strong>différé</strong> à une date future. Inclut futures, options et CFD. Souvent avec effet de levier.</p>
        </div>
      </div>

      <h2>La loi fondamentale : Offre et Demande</h2>
      <p>
        Tout mouvement de prix sur les marchés financiers résulte de l'interaction entre <strong>l'offre</strong> (vendeurs) et <strong>la demande</strong> (acheteurs) :
      </p>
      <ul>
        <li>Plus de demande que d'offre → le prix <span className="bullish font-semibold">monte ↑</span></li>
        <li>Plus d'offre que de demande → le prix <span className="bearish font-semibold">baisse ↓</span></li>
        <li>Offre = Demande → le prix <strong>reste stable</strong> (consolidation)</li>
      </ul>

      <h2>Le Bid, l'Ask et le Spread</h2>
      <p>
        Sur tout marché, il existe deux prix simultanément :
      </p>
      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="bg-bg-secondary rounded-lg p-3 border border-border-default text-center">
          <p className="text-xs text-text-muted font-mono mb-1">BID (Vente)</p>
          <p className="text-2xl font-mono font-bold text-accent-red">1.0920</p>
          <p className="text-xs text-text-muted mt-1">Prix où vous vendez</p>
        </div>
        <div className="bg-bg-secondary rounded-lg p-3 border border-border-default text-center">
          <p className="text-xs text-text-muted font-mono mb-1">ASK (Achat)</p>
          <p className="text-2xl font-mono font-bold text-accent-teal">1.0922</p>
          <p className="text-xs text-text-muted mt-1">Prix où vous achetez</p>
        </div>
      </div>
      <p>
        Le <strong>spread</strong> (ici 2 pips) est la différence entre les deux. C'est le coût implicite de chaque transaction et la principale source de revenus des brokers et market makers.
      </p>

      <h2>Liquidité : pourquoi c'est crucial</h2>
      <p>
        La <strong>liquidité</strong> est la capacité à acheter ou vendre rapidement un actif sans faire bouger son prix. Un marché liquide offre :
      </p>
      <ul>
        <li>Des spreads plus faibles (moins coûteux à trader)</li>
        <li>Une exécution rapide des ordres</li>
        <li>Moins de slippage (différence entre prix voulu et prix obtenu)</li>
        <li>La possibilité de sortir d'une position rapidement en cas d'urgence</li>
      </ul>

      <div className="info-box yellow">
        <p className="text-sm font-mono text-yellow-400 font-semibold mb-1">⚠️ Point clé à retenir</p>
        <p className="text-sm">Le trading n'est pas un moyen de "gagner de l'argent facilement". C'est une compétence professionnelle qui s'apprend sur des années. La grande majorité des débutants perdent de l'argent à court terme. La formation et la pratique sérieuse sont indispensables.</p>
      </div>

      <h2>Pourquoi apprendre le trading ?</h2>
      <ul>
        <li><strong>Indépendance financière</strong> — Compléter ou remplacer un revenu salarial</li>
        <li><strong>Protection du capital</strong> — Savoir investir plutôt que laisser dormir son épargne</li>
        <li><strong>Compréhension de l'économie</strong> — Les marchés reflètent l'état de l'économie mondiale</li>
        <li><strong>Flexibilité</strong> — Trader depuis n'importe où dans le monde</li>
      </ul>
    </div>
  )
}
