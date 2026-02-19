import React from 'react'

export default function Module12_TradingPlan() {
  const steps = [
    { n: '01', title: 'Définir vos marchés', desc: 'Choisissez 2-4 marchés maximum. Maîtrisez-les parfaitement avant d\'en ajouter d\'autres. EUR/USD + NAS100 par exemple.' },
    { n: '02', title: 'Choisir votre timeframe', desc: 'Day trader (M15-H1), swing trader (H4-D1), scalper (M1-M5). Votre timeframe d\'entrée doit s\'aligner sur votre timeframe d\'analyse.' },
    { n: '03', title: 'Définir votre setup', desc: 'Conditions précises pour entrer un trade. Ex: "Je n\'achète que si : 1) Uptrend D1, 2) Pull-back sur EMA 20 H4, 3) Pattern bullish H1."' },
    { n: '04', title: 'Règles de gestion du risque', desc: 'Risque max par trade (1-2%), risque max journalier (3-5%), taille max de position. Non-négociables.' },
    { n: '05', title: 'Règles d\'entrée et sortie', desc: 'Comment entrer (Market? Limit? sur quelle confirmation?), où placer SL et TP, comment gérer si le trade va bien (trailing stop?).' },
    { n: '06', title: 'Créneaux de trading', desc: 'Quand tradez-vous ? Sessions de Londres? New York? Définissez vos heures et respectez-les.' },
    { n: '07', title: 'Règles de discipline', desc: 'Max de trades/jour. Pas de trading après X pertes consécutives. Pas de trading sans setup. Pas de FOMO.' },
    { n: '08', title: 'Revue et amélioration', desc: 'Revue hebdomadaire du journal. Revue mensuelle des statistiques. Ajuster la stratégie selon les données.' },
  ]

  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Construire un plan de trading complet et cohérent. Comprendre le backtesting et la transition démo → réel.</p>
      </div>

      <div className="info-box teal">
        <p className="text-sm">💡 <strong>"Fail to plan = plan to fail"</strong> — Chaque trader professionnel a un plan de trading écrit, détaillé et qu'il suit rigoureusement. C'est ce qui différencie le trading professionnel du gambling.</p>
      </div>

      <h2>Les 8 éléments d'un plan de trading complet</h2>
      <div className="space-y-3 my-4">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-xl bg-bg-secondary border border-border-default hover:border-border-strong transition-colors">
            <span className="text-3xl font-mono font-bold text-accent-violet/25 flex-shrink-0">{s.n}</span>
            <div>
              <p className="text-sm font-semibold text-text-primary mb-1">{s.title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Exemple de Setup : Le Pull-Back sur Tendance</h2>
      <div className="bg-bg-secondary border border-accent-violet/30 rounded-xl p-4 font-mono my-4">
        <p className="text-xs text-accent-violet mb-3 font-semibold">SETUP EXAMPLE — "Trend Pullback"</p>
        <div className="space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-text-muted w-36 flex-shrink-0">Condition 1</span>
            <span className="text-text-secondary">Prix au-dessus de la MA200 (D1) → Biais haussier</span>
          </div>
          <div className="flex gap-2">
            <span className="text-text-muted w-36 flex-shrink-0">Condition 2</span>
            <span className="text-text-secondary">Pull-back vers EMA 20 (H4) ou zone S/R H4</span>
          </div>
          <div className="flex gap-2">
            <span className="text-text-muted w-36 flex-shrink-0">Condition 3</span>
            <span className="text-text-secondary">Pattern haussier sur H1 (Hammer, Engulfing, Doji)</span>
          </div>
          <div className="flex gap-2">
            <span className="text-text-muted w-36 flex-shrink-0">Entrée</span>
            <span className="text-accent-teal">Limit order au prix du pattern ou market à confirmation</span>
          </div>
          <div className="flex gap-2">
            <span className="text-text-muted w-36 flex-shrink-0">Stop Loss</span>
            <span className="text-accent-red">Sous le dernier HL H4 (ou 10 pips en dessous)</span>
          </div>
          <div className="flex gap-2">
            <span className="text-text-muted w-36 flex-shrink-0">Take Profit</span>
            <span className="text-accent-teal">R:R minimum 1:2 · Avant résistance H4</span>
          </div>
          <div className="flex gap-2">
            <span className="text-text-muted w-36 flex-shrink-0">Risque</span>
            <span className="text-accent-violet">1% du capital par trade</span>
          </div>
        </div>
      </div>

      <h2>Le Backtesting : valider avant de risquer</h2>
      <p>
        Le backtesting consiste à appliquer votre stratégie à des données historiques pour évaluer sa performance théorique. Méthodes :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-violet mb-2">Manuel</p>
          <p className="text-xs text-text-muted">Parcourir les graphiques historiques en "mode replay" et identifier les setups selon vos règles. Long mais formateur. Tradingview propose ce mode.</p>
        </div>
        <div className="info-box">
          <p className="text-sm font-semibold text-accent-blue mb-2">Automatisé</p>
          <p className="text-xs text-text-muted">Coder la stratégie pour qu'elle s'exécute automatiquement sur des données historiques. Plus rapide mais requiert des compétences techniques.</p>
        </div>
      </div>
      <p>Les métriques à analyser après backtesting :</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
        {[
          { metric: 'Win Rate', target: '> 40%', desc: 'Taux de réussite' },
          { metric: 'Profit Factor', target: '> 1.5', desc: 'Gains / Pertes bruts' },
          { metric: 'Max Drawdown', target: '< 20%', desc: 'Perte max depuis sommet' },
          { metric: 'R:R moyen', target: '> 1.5:1', desc: 'Ratio moyen des trades' },
          { metric: 'Nb de trades', target: '> 100', desc: 'Pour être statistiquement valide' },
          { metric: 'Expectancy', target: '> 0', desc: 'Gain espéré par trade' },
        ].map((m, i) => (
          <div key={i} className="bg-bg-secondary border border-border-default rounded-lg p-3 text-center">
            <p className="text-xs font-mono text-text-muted">{m.metric}</p>
            <p className="text-base font-mono font-bold text-accent-teal my-1">{m.target}</p>
            <p className="text-xs text-text-muted">{m.desc}</p>
          </div>
        ))}
      </div>

      <h2>Démo → Compte Réel : quand franchir le pas ?</h2>
      <div className="space-y-3 my-4">
        {[
          { check: 'Stratégie profitable sur 3+ mois en démo', done: true },
          { check: 'Respect du plan de trading > 90% du temps', done: true },
          { check: 'Toutes les règles de risque respectées systématiquement', done: true },
          { check: 'Journal de trading complet et régulier', done: true },
          { check: 'Statistiques comprises et analysées', done: true },
          { check: 'Capital à risquer est de l\'argent que vous POUVEZ perdre', done: true },
          { check: 'Vous n\'avez pas besoin de cet argent pour vivre', done: true },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary border border-border-default">
            <div className="w-5 h-5 rounded border-2 border-accent-teal flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-sm text-text-secondary">{item.check}</p>
          </div>
        ))}
      </div>

      <h2>La Vérité sur le Temps Nécessaire</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {[
          { phase: 'Phase 1', duration: '0-6 mois', title: 'Apprentissage', desc: 'Formation, basics, premiers trades démo. Beaucoup d\'erreurs, c\'est normal.' },
          { phase: 'Phase 2', duration: '6-18 mois', title: 'Développement', desc: 'Backtesting, affinage de stratégie, trading démo cohérent. Patience requise.' },
          { phase: 'Phase 3', duration: '18-36 mois', title: 'Maturité', desc: 'Transition vers le réel, gestion émotionnelle acquise, profits consistants.' },
        ].map((p, i) => (
          <div key={i} className="bg-bg-secondary border border-border-default rounded-xl p-4">
            <p className="text-xs font-mono text-accent-violet mb-1">{p.phase} · {p.duration}</p>
            <p className="text-sm font-semibold text-text-primary mb-2">{p.title}</p>
            <p className="text-xs text-text-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-2">🎓 Félicitations ! Vous avez terminé la formation.</p>
        <p className="text-sm text-text-secondary">Vous avez maintenant les bases solides pour commencer votre parcours de trader. Souvenez-vous : la théorie ne vaut rien sans la pratique. Ouvrez un compte démo, appliquez ce que vous avez appris, tenez votre journal, et améliorez-vous chaque jour. Le marché sera toujours là demain.</p>
      </div>
    </div>
  )
}
