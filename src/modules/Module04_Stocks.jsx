import React from 'react'

export default function Module04_Stocks() {
  const indices = [
    { name: 'S&P 500', country: '🇺🇸', description: '500 plus grandes capitalisations américaines. Référence mondiale.', perf: '+10.5%/an' },
    { name: 'NASDAQ 100', country: '🇺🇸', description: 'Top 100 valeurs tech. Apple, Microsoft, Google, Meta...', perf: '+15.2%/an' },
    { name: 'Dow Jones', country: '🇺🇸', description: '30 grandes entreprises américaines représentatives.', perf: '+9.8%/an' },
    { name: 'CAC 40', country: '🇫🇷', description: '40 plus grandes capitalisations françaises (Euronext Paris).', perf: '+8.3%/an' },
    { name: 'DAX 40', country: '🇩🇪', description: '40 plus grandes capitalisations allemandes (Frankfurt).', perf: '+9.1%/an' },
    { name: 'Nikkei 225', country: '🇯🇵', description: '225 actions de la Bourse de Tokyo.', perf: '+7.5%/an' },
  ]

  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Comprendre le fonctionnement du marché boursier, les indices, les dividendes et les bases de l'analyse fondamentale d'une action.</p>
      </div>

      <h2>Qu'est-ce qu'une action ?</h2>
      <p>
        Une <strong>action</strong> (stock en anglais) est un titre de propriété représentant une fraction du capital d'une entreprise. En achetant des actions, vous devenez <strong>actionnaire</strong> et possédez une part de cette entreprise.
      </p>
      <p>En tant qu'actionnaire, vous avez le droit de :</p>
      <ul>
        <li>Recevoir des <strong>dividendes</strong> (part des bénéfices distribués)</li>
        <li>Voter aux <strong>assemblées générales</strong> (AGO/AGE)</li>
        <li>Bénéficier de la <strong>plus-value</strong> si le cours de l'action monte</li>
        <li>Participer à d'éventuelles <strong>augmentations de capital</strong></li>
      </ul>

      <h2>Les indices boursiers majeurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
        {indices.map((idx, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary border border-border-default hover:border-border-strong transition-colors">
            <span className="text-2xl">{idx.country}</span>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-text-primary font-mono">{idx.name}</p>
                <span className="text-xs text-accent-teal font-mono">{idx.perf}</span>
              </div>
              <p className="text-xs text-text-muted mt-0.5">{idx.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Comment est déterminé le prix d'une action ?</h2>
      <p>
        Le prix d'une action reflète ce que les investisseurs sont <strong>collectivement prêts à payer</strong> pour posséder une part de cette entreprise. Il est influencé par :
      </p>
      <ul>
        <li><strong>Résultats financiers</strong> — Bénéfices, chiffre d'affaires, marges</li>
        <li><strong>Perspectives de croissance</strong> — Le marché paie souvent plus pour la croissance future</li>
        <li><strong>Sentiment de marché</strong> — Optimisme ou pessimisme général</li>
        <li><strong>Taux d'intérêt</strong> — Des taux plus élevés rendent les obligations plus attractives vs actions</li>
        <li><strong>Actualités</strong> — Résultats trimestriels, fusions, scandales, nouvelles produits</li>
      </ul>

      <h2>Les ratios fondamentaux clés</h2>
      <div className="space-y-3 my-4">
        {[
          { ratio: 'P/E (Price/Earnings)', formula: 'Prix / Bénéfice par action', description: 'Combien vous payez pour 1€ de bénéfice. P/E de 20 = vous payez 20× les bénéfices annuels. Comparer entre entreprises du même secteur.' },
          { ratio: 'PEG Ratio', formula: 'P/E / Taux de croissance', description: 'Version améliorée du P/E tenant compte de la croissance. PEG < 1 = potentiellement sous-évalué.' },
          { ratio: 'Dividend Yield', formula: 'Dividende annuel / Prix × 100', description: 'Rendement en dividendes. Un yield de 4% signifie 4€ de dividende pour 100€ investis.' },
          { ratio: 'P/B (Price/Book)', formula: 'Prix / Valeur comptable par action', description: 'Compare le prix au marché avec la valeur comptable des actifs. P/B < 1 peut indiquer une sous-évaluation.' },
        ].map((r, i) => (
          <div key={i} className="p-3 rounded-lg bg-bg-secondary border border-border-default">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-semibold text-text-primary">{r.ratio}</p>
              <span className="text-xs font-mono text-accent-violet bg-accent-violet/10 px-2 py-0.5 rounded">{r.formula}</span>
            </div>
            <p className="text-xs text-text-muted">{r.description}</p>
          </div>
        ))}
      </div>

      <h2>Dividendes : comprendre le processus</h2>
      <div className="info-box teal">
        <p className="text-sm">
          Pour recevoir un dividende, vous devez posséder l'action <strong>avant la date ex-dividende</strong>. Le jour de l'ex-dividende, le cours de l'action baisse théoriquement du montant du dividende. Il n'y a donc pas de "cadeau" : c'est un transfert de valeur de l'entreprise vers l'actionnaire.
        </p>
      </div>

      <h2>IPO : Introduction en Bourse</h2>
      <p>
        Une IPO (Initial Public Offering) permet à une entreprise privée de lever des fonds en vendant ses actions au public pour la première fois. Pour les traders, les IPO sont risquées car :
      </p>
      <ul>
        <li>Peu ou pas d'historique de trading disponible</li>
        <li>Forte volatilité les premiers jours</li>
        <li>Les insiders (fondateurs, investisseurs précoces) peuvent vendre à la cotation</li>
        <li>La valorisation est souvent gonflée par l'enthousiasme médiatique</li>
      </ul>

      <h2>ETF : la diversification facile</h2>
      <p>
        Un ETF (Exchange-Traded Fund) réplique la performance d'un indice entier (ex: S&P 500) en une seule transaction. C'est l'outil idéal pour les débutants :
      </p>
      <ul>
        <li>Diversification instantanée (500 entreprises avec un seul achat)</li>
        <li>Frais très bas (souvent 0.03% à 0.20%/an)</li>
        <li>Liquidité élevée (s'achète et se vend comme une action)</li>
        <li>Historiquement : le S&P 500 a rapporté ~10.5%/an sur 50 ans</li>
      </ul>
    </div>
  )
}
