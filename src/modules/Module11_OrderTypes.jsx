import React from 'react'

export default function Module11_OrderTypes() {
  const orders = [
    {
      name: 'Market Order',
      icon: '⚡',
      desc: 'S\'exécute immédiatement au meilleur prix disponible.',
      pros: ['Exécution garantie', 'Idéal pour entrer/sortir vite', 'Simple à utiliser'],
      cons: ['Prix non garanti (slippage possible)', 'Coûteux en conditions volatiles'],
      use: 'Quand vous devez entrer ou sortir immédiatement (ex: actualité imprévue).',
    },
    {
      name: 'Limit Order',
      icon: '🎯',
      desc: 'S\'exécute uniquement si le prix atteint votre niveau limite ou mieux.',
      pros: ['Prix garanti ou meilleur', 'Aucun slippage négatif', 'Permet d\'entrer sur pull-back'],
      cons: ['Pas d\'exécution garantie', 'Peut "rater" un mouvement'],
      use: 'Pour entrer sur un pull-back à un prix précis, ou pour sécuriser un profit (Take Profit).',
    },
    {
      name: 'Stop Loss Order',
      icon: '🛡️',
      desc: 'Ordre conditionnel : s\'active comme Market order si le prix dépasse un niveau.',
      pros: ['Limite automatiquement les pertes', 'Aucune surveillance constante nécessaire', 'Discipline forcée'],
      cons: ['Peut être déclenché par un pic temporaire (wick)', 'Slippage possible à l\'activation'],
      use: 'TOUJOURS utiliser pour limiter les pertes sur chaque position.',
    },
    {
      name: 'Stop Limit Order',
      icon: '🔒',
      desc: 'Combine un Stop et un Limit : s\'active au Stop, s\'exécute à la limite ou mieux.',
      pros: ['Prix minimum/maximum garanti', 'Plus de contrôle que le Stop Market'],
      cons: ['Risque de non-exécution si gap de prix', 'Plus complexe à paramétrer'],
      use: 'Pour les entrées en breakout avec contrôle du prix d\'exécution.',
    },
    {
      name: 'Trailing Stop',
      icon: '📈',
      desc: 'Stop loss dynamique qui suit le prix dans la direction favorable.',
      pros: ['Sécurise progressivement les profits', 'Automatique, sans intervention', 'Laisse courir les gagnants'],
      cons: ['Peut être déclenché trop tôt sur une correction normale', 'Distance difficile à calibrer'],
      use: 'Pour protéger des gains sur une position en fort mouvement.',
    },
    {
      name: 'OCO (One Cancels Other)',
      icon: '⚖️',
      desc: 'Deux ordres liés : l\'exécution de l\'un annule automatiquement l\'autre.',
      pros: ['Gestion automatisée sortie de position', 'TP + SL simultanément', 'Pas besoin de surveiller'],
      cons: ['Nécessite une bonne configuration initiale'],
      use: 'Après l\'entrée en position : placer TP et SL simultanément.',
    },
  ]

  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Maîtriser tous les types d'ordres disponibles pour entrer et sortir du marché avec précision, contrôle et efficacité.</p>
      </div>

      <h2>Vue d'ensemble des ordres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {orders.map((order, i) => (
          <div key={i} className="bg-bg-secondary border border-border-default rounded-xl p-4 hover:border-border-strong transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{order.icon}</span>
              <h3 className="text-sm font-semibold text-text-primary m-0">{order.name}</h3>
            </div>
            <p className="text-xs text-text-muted mb-3">{order.desc}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-accent-teal font-semibold mb-1">✅ Avantages</p>
                <ul className="space-y-0.5">
                  {order.pros.map((p, j) => <li key={j} className="text-text-muted">• {p}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-accent-red font-semibold mb-1">⚠️ Limites</p>
                <ul className="space-y-0.5">
                  {order.cons.map((c, j) => <li key={j} className="text-text-muted">• {c}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border-subtle">
              <p className="text-xs text-accent-violet"><strong>Utilisation :</strong> {order.use}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Buy Stop vs Buy Limit — Quelle différence ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="info-box teal">
          <p className="text-sm font-semibold text-accent-teal mb-2">Buy Limit (en dessous du prix)</p>
          <div className="text-xs space-y-1 text-text-muted">
            <p>Prix actuel : 1.1000</p>
            <p>Buy Limit à : <strong className="text-text-primary">1.0950</strong></p>
            <p>→ Achète si le prix <strong>descend</strong> jusqu'à 1.0950</p>
            <p className="mt-2">Utilisé : pour entrer sur un pull-back vers un support</p>
          </div>
        </div>
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-violet mb-2">Buy Stop (au-dessus du prix)</p>
          <div className="text-xs space-y-1 text-text-muted">
            <p>Prix actuel : 1.1000</p>
            <p>Buy Stop à : <strong className="text-text-primary">1.1050</strong></p>
            <p>→ Achète si le prix <strong>monte</strong> jusqu'à 1.1050</p>
            <p className="mt-2">Utilisé : pour entrer sur un breakout de résistance</p>
          </div>
        </div>
      </div>

      <h2>Le Slippage : comprendre et minimiser</h2>
      <p>
        Le slippage est la différence entre le prix auquel vous souhaitez exécuter un ordre et le prix réel d'exécution. Il est inévitable avec les ordres Market, surtout :
      </p>
      <ul>
        <li>En période de <strong>forte volatilité</strong> (communiqués économiques)</li>
        <li>Sur des <strong>marchés peu liquides</strong> (paires exotiques, cryptos mineures)</li>
        <li>À l'<strong>ouverture des marchés</strong> après un gap</li>
      </ul>
      <div className="info-box teal">
        <p className="text-sm">💡 <strong>Pour minimiser le slippage :</strong> Utilisez des ordres Limit quand possible. Évitez les ordres Market pendant les grandes annonces économiques. Tradez des marchés liquides (EUR/USD, S&P 500, BTC).</p>
      </div>

      <h2>Take Profit : où le placer ?</h2>
      <p>Le Take Profit (TP) est aussi important que le Stop Loss. Règles de placement :</p>
      <ul>
        <li><strong>Avant</strong> un niveau de résistance (en long) ou support (en short)</li>
        <li>Basé sur le <strong>ratio R:R</strong> minimum défini dans votre plan (ex: R:R 1:2 minimum)</li>
        <li>Aux <strong>niveaux Fibonacci</strong> projetés (127.2%, 161.8% en extension)</li>
        <li>Peut être <strong>partiel</strong> : clôturer 50% à R:R 1:1, laisser courir le reste avec trailing stop</li>
      </ul>

      <h2>Exemple complet : entrée avec OCO</h2>
      <div className="bg-bg-secondary border border-border-default rounded-xl p-4 font-mono text-sm">
        <p className="text-xs text-text-muted mb-3">SCÉNARIO — Achat EUR/USD sur pull-back</p>
        <div className="space-y-2">
          <div className="flex justify-between"><span className="text-text-secondary">Entrée (Limit Order)</span><span className="text-text-primary">1.0900</span></div>
          <div className="flex justify-between"><span className="text-accent-red">Stop Loss</span><span className="text-accent-red">1.0860 (-40 pips)</span></div>
          <div className="flex justify-between"><span className="text-accent-teal">Take Profit</span><span className="text-accent-teal">1.1020 (+120 pips)</span></div>
          <div className="flex justify-between"><span className="text-accent-violet">Ratio R:R</span><span className="text-accent-violet">1:3</span></div>
          <div className="flex justify-between"><span className="text-text-secondary">Taille (capital 5 000€, risque 1%)</span><span className="text-text-primary">0.125 lot</span></div>
        </div>
        <p className="text-xs text-text-muted mt-3">→ Placer un Limit Order à 1.0900 + OCO (SL à 1.0860 / TP à 1.1020)</p>
      </div>
    </div>
  )
}
