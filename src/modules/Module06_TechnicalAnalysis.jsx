import React from 'react'
import { MarketStructure } from '../components/illustrations/MarketStructure'

export default function Module06_TechnicalAnalysis() {
  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Maîtriser la lecture des graphiques, l'identification des tendances, des supports/résistances et des structures de marché.</p>
      </div>

      <h2>Les 3 postulats de l'analyse technique</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {[
          { n: '1', title: 'Le prix intègre tout', desc: 'Toutes les informations disponibles (fondamentaux, sentiments, actualités) sont déjà reflétées dans le prix.' },
          { n: '2', title: 'Le prix se meut en tendances', desc: 'Les prix ne bougent pas aléatoirement. Ils suivent des tendances qui persistent dans le temps.' },
          { n: '3', title: 'L\'histoire se répète', desc: 'Les mêmes patterns se reproduisent car la psychologie humaine (peur, avidité) reste constante.' },
        ].map((p, i) => (
          <div key={i} className="p-4 rounded-xl bg-bg-secondary border border-border-default">
            <span className="text-3xl font-mono font-bold text-accent-violet/30">{p.n}</span>
            <p className="text-sm font-semibold text-text-primary mt-1 mb-2">{p.title}</p>
            <p className="text-xs text-text-muted leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <h2>La Théorie de Dow : structure de marché</h2>
      <div className="rounded-xl border border-border-default bg-bg-secondary p-4 mb-4">
        <p className="text-xs font-mono text-text-muted mb-3">ILLUSTRATION — Structure de tendance haussière</p>
        <MarketStructure />
      </div>
      <p>
        Charles Dow (fondateur du Wall Street Journal) a posé les bases de l'AT. Sa théorie centrale : une <strong>tendance haussière</strong> (uptrend) est définie par une succession de <strong>Higher Highs</strong> (HH) et <strong>Higher Lows</strong> (HL). L'inverse définit une tendance baissière.
      </p>

      <h2>Supports et Résistances</h2>
      <p>
        Les supports et résistances sont les niveaux les plus importants en AT. Ils représentent des <strong>zones de mémoire du marché</strong> — des prix où les participants ont historiquement acheté ou vendu massivement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="info-box teal">
          <p className="text-sm font-semibold text-accent-teal mb-2">Support 📗</p>
          <p className="text-xs text-text-muted">Zone où les <strong>acheteurs dominent</strong>. Le prix a "rebondi" plusieurs fois sur ce niveau. Plus il est testé sans être cassé, plus il est fort.</p>
        </div>
        <div className="info-box red">
          <p className="text-sm font-semibold text-accent-red mb-2">Résistance 📕</p>
          <p className="text-xs text-text-muted">Zone où les <strong>vendeurs dominent</strong>. Le prix a été repoussé plusieurs fois à la baisse depuis ce niveau. Un support cassé devient une résistance.</p>
        </div>
      </div>

      <h2>Les Types de Tendances</h2>
      <div className="space-y-3 my-4">
        {[
          { name: 'Tendance haussière (Uptrend)', sign: '↑', color: 'teal', desc: 'HH + HL. Chaque pullback est une opportunité d\'achat.' },
          { name: 'Tendance baissière (Downtrend)', sign: '↓', color: 'red', desc: 'LH + LL. Chaque rebond est une opportunité de vente à découvert.' },
          { name: 'Range (Consolidation)', sign: '↔', color: 'yellow', desc: 'Le prix oscille entre support et résistance. Acheter au support, vendre à la résistance.' },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary border border-border-default">
            <span className={`text-2xl font-bold ${t.color === 'teal' ? 'text-accent-teal' : t.color === 'red' ? 'text-accent-red' : 'text-yellow-400'}`}>{t.sign}</span>
            <div>
              <p className="text-sm font-semibold text-text-primary">{t.name}</p>
              <p className="text-xs text-text-muted">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Les Pull-Backs : entrer dans la tendance</h2>
      <p>
        Un pull-back est une <strong>correction temporaire contre la tendance principale</strong>. En uptrend, quand le prix corrige vers un support (ou la dernière HL), c'est souvent une zone d'entrée optimale :
      </p>
      <ul>
        <li>Meilleur prix d'entrée (ne pas "chaser" le mouvement)</li>
        <li>Stop loss plus proche (sous le HL précédent)</li>
        <li>Meilleur ratio risque/récompense</li>
      </ul>

      <h2>Les Retracements de Fibonacci</h2>
      <p>
        Fibonacci (mathématicien du 13ème siècle) a découvert une séquence où chaque nombre est la somme des deux précédents : 1, 1, 2, 3, 5, 8, 13... Les ratios entre ces nombres donnent des niveaux utilisés en AT :
      </p>
      <div className="flex flex-wrap gap-2 my-3">
        {['23.6%', '38.2%', '50.0%', '61.8%', '78.6%'].map((level, i) => (
          <div key={i} className={`px-3 py-1.5 rounded-lg border text-sm font-mono ${level === '61.8%' ? 'bg-accent-violet/15 border-accent-violet/40 text-accent-violet font-bold' : 'bg-bg-secondary border-border-default text-text-secondary'}`}>
            {level} {level === '61.8%' && '← Golden Ratio'}
          </div>
        ))}
      </div>
      <p className="text-sm text-text-muted">
        Ces niveaux sont utilisés comme zones de support potentielles lors d'un pull-back. Le niveau 61.8% (golden ratio) est le plus respecté par les traders institutionnels.
      </p>

      <h2>Le Volume : confirmateur essentiel</h2>
      <div className="info-box">
        <p className="text-sm">Le volume est le nombre d'unités échangées sur une période. Règles clés :</p>
        <ul className="text-sm mt-2 space-y-1">
          <li>Breakout + Fort volume = Signal <span className="text-accent-teal">fiable</span></li>
          <li>Breakout + Faible volume = <span className="text-accent-red">Méfiance</span> (possible faux breakout)</li>
          <li>Tendance + Volume décroissant = <span className="text-yellow-400">Affaiblissement</span> probable</li>
        </ul>
      </div>
    </div>
  )
}
