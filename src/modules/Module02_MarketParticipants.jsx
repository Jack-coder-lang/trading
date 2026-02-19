import React from 'react'

export default function Module02_MarketParticipants() {
  const participants = [
    { icon: '🏦', name: 'Banques centrales', role: 'Régulation monétaire, taux d\'intérêt, interventions de change. Les plus influentes : Fed (USA), BCE (Europe), BoJ (Japon).', impact: 'Très élevé' },
    { icon: '🏢', name: 'Banques commerciales', role: 'Échanges de devises pour leurs clients, spéculation propriétaire, tenue de marché (market making).', impact: 'Élevé' },
    { icon: '📊', name: 'Hedge Funds', role: 'Fonds spéculatifs utilisant des stratégies complexes (long/short, arbitrage, macro). Gèrent des milliards.', impact: 'Élevé' },
    { icon: '💼', name: 'Fonds de pension', role: 'Gèrent l\'épargne retraite. Investisseurs à très long terme, principalement en actions et obligations.', impact: 'Élevé' },
    { icon: '🤖', name: 'Traders algo (HFT)', role: 'Algorithmes exécutant des milliers d\'ordres/seconde. Représentent ~50-70% des volumes sur actions US.', impact: 'Moyen' },
    { icon: '👤', name: 'Traders particuliers', role: 'Individus comme vous. Petit pourcentage du volume total, mais de plus en plus nombreux grâce aux plateformes modernes.', impact: 'Faible' },
  ]

  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Identifier les différents acteurs des marchés financiers et comprendre comment leurs comportements créent les mouvements de prix.</p>
      </div>

      <h2>La hiérarchie des marchés</h2>
      <p>
        Les marchés financiers ne sont pas un terrain de jeu équitable. Il existe une <strong>hiérarchie claire</strong> entre les participants, du plus grand (banques centrales) au plus petit (trader retail comme vous et moi).
      </p>

      <div className="space-y-3 my-6">
        {participants.map((p, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary border border-border-default hover:border-border-strong transition-colors">
            <span className="text-2xl flex-shrink-0">{p.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-text-primary">{p.name}</p>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                  p.impact === 'Très élevé' ? 'bg-red-500/15 text-red-400' :
                  p.impact === 'Élevé' ? 'bg-orange-500/15 text-orange-400' :
                  p.impact === 'Moyen' ? 'bg-yellow-500/15 text-yellow-400' :
                  'bg-teal-500/15 text-teal-400'
                }`}>Impact {p.impact}</span>
              </div>
              <p className="text-sm text-text-muted mt-1">{p.role}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Les Market Makers (Teneurs de Marché)</h2>
      <p>
        Les market makers jouent un rôle fondamental : ils <strong>assurent la liquidité</strong> du marché en cotant en permanence des prix d'achat (bid) et de vente (ask).
      </p>
      <p>
        Leur modèle économique : gagner la différence entre bid et ask (le spread) sur d'énormes volumes. En échange, ils s'engagent à toujours donner un prix, même dans des conditions difficiles.
      </p>
      <div className="info-box teal">
        <p className="text-sm">💡 <strong>Pour le trader retail :</strong> Votre broker est souvent un market maker. Il peut prendre la contrepartie de vos trades (si vous achetez, il vend à votre contrepartie). Ce n'est pas illégal, mais il est important de le savoir.</p>
      </div>

      <h2>Le Trading Haute Fréquence (HFT)</h2>
      <p>
        Les firms HFT (High Frequency Trading) utilisent des algorithmes ultra-rapides et des serveurs physiquement proches des bourses (<strong>co-location</strong>) pour exécuter des milliers d'ordres par seconde.
      </p>
      <ul>
        <li>Ils exploitent des inefficiences de quelques <strong>microsecondes</strong></li>
        <li>Ils représentent entre 50% et 70% du volume sur les marchés US</li>
        <li>Leur impact sur les traders retail est limité (ils n'opèrent pas sur les mêmes horizons de temps)</li>
      </ul>

      <h2>Les Banques Centrales : acteurs hors-normes</h2>
      <p>
        Les banques centrales (Fed, BCE, BoJ...) peuvent déplacer les marchés de façon massive par :
      </p>
      <ul>
        <li><strong>Décisions sur les taux d'intérêt</strong> — Hausse = monnaie plus forte, actions potentiellement sous pression</li>
        <li><strong>Quantitative Easing (QE)</strong> — Injection de liquidités qui soutient les prix des actifs</li>
        <li><strong>Interventions directes</strong> — Rare mais possible (ex: BoJ sur le yen)</li>
        <li><strong>Communications (Forward Guidance)</strong> — Les simples discours des gouverneurs font bouger les marchés</li>
      </ul>

      <div className="info-box yellow">
        <p className="text-sm font-mono text-yellow-400 font-semibold mb-1">⚠️ Ne combattez jamais une banque centrale</p>
        <p className="text-sm">"Don't fight the Fed" est l'un des adages les plus connus en trading. Quand une banque centrale est résolue à intervenir, les pertes peuvent être catastrophiques pour ceux qui vont à contre-courant.</p>
      </div>

      <h2>Comment cela impacte votre trading ?</h2>
      <p>En tant que trader retail, voici ce que vous devez retenir :</p>
      <ul>
        <li>Vous n'avez <strong>pas accès aux mêmes informations</strong> que les institutionnels en temps réel</li>
        <li>Votre avantage est la <strong>flexibilité</strong> : vous pouvez entrer et sortir du marché sans impacter les prix</li>
        <li>Suivez les <strong>calendriers économiques</strong> pour anticiper les annonces importantes (NFP, décisions Fed, etc.)</li>
        <li>Méfiez-vous des périodes de <strong>faible liquidité</strong> (overnight, week-end, jours fériés) : les spreads s'élargissent</li>
      </ul>
    </div>
  )
}
