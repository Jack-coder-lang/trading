import React from 'react'

export default function Module05_Crypto() {
  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Comprendre la blockchain, Bitcoin, Ethereum, les altcoins, la DeFi et les risques spécifiques au marché crypto.</p>
      </div>

      <div className="info-box red">
        <p className="text-sm font-mono text-accent-red font-semibold mb-1">⚠️ Avertissement</p>
        <p className="text-sm">Le marché des cryptomonnaies est extrêmement volatil. Des chutes de -80% en quelques mois sont historiquement fréquentes. N'investissez que ce que vous pouvez vous permettre de perdre entièrement.</p>
      </div>

      <h2>La Blockchain : le fondement technique</h2>
      <p>
        La blockchain est un <strong>registre distribué</strong> — une base de données partagée sur des milliers d'ordinateurs dans le monde, sans serveur central. Ses propriétés clés :
      </p>
      <ul>
        <li><strong>Décentralisation</strong> — Aucune entité unique ne contrôle le réseau</li>
        <li><strong>Immuabilité</strong> — Une transaction enregistrée ne peut pas être modifiée</li>
        <li><strong>Transparence</strong> — Toutes les transactions sont publiquement vérifiables</li>
        <li><strong>Sécurité</strong> — La cryptographie rend la falsification quasi-impossible</li>
      </ul>

      <h2>Bitcoin (BTC) : la réserve de valeur numérique</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
        {[
          { label: 'Créé en', value: '2009' },
          { label: 'Offre max', value: '21M BTC' },
          { label: 'Prochain halving', value: '~2028' },
          { label: 'Dominance', value: '~48%' },
        ].map((s, i) => (
          <div key={i} className="bg-bg-secondary border border-border-default rounded-lg p-3 text-center">
            <p className="text-lg font-mono font-bold text-accent-violet">{s.value}</p>
            <p className="text-xs text-text-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <p>
        Bitcoin est conçu comme une <strong>monnaie numérique décentralisée</strong> et une réserve de valeur. Sa politique monétaire est gravée dans le code : au maximum 21 millions de BTC seront jamais créés, ce qui en fait un actif déflationniste par design.
      </p>

      <h2>Le Halving Bitcoin : mécanisme clé</h2>
      <p>
        Tous les ~210 000 blocs (~4 ans), la récompense accordée aux mineurs est divisée par deux :
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm font-mono">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left py-2 pr-4 text-text-muted">Date</th>
              <th className="text-left py-2 pr-4 text-text-muted">Récompense</th>
              <th className="text-left py-2 text-text-muted">Prix avant / après (aprox.)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Nov 2012', '25 BTC', '$12 → $1 000'],
              ['Juil 2016', '12.5 BTC', '$650 → $20 000'],
              ['Mai 2020', '6.25 BTC', '$9 000 → $69 000'],
              ['Avr 2024', '3.125 BTC', '$~70 000 → ?'],
            ].map(([date, reward, price], i) => (
              <tr key={i} className="border-b border-border-subtle">
                <td className="py-2 pr-4 text-text-secondary">{date}</td>
                <td className="py-2 pr-4 text-accent-violet">{reward}</td>
                <td className="py-2 text-accent-teal">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Ethereum (ETH) : la plateforme programmable</h2>
      <p>
        Ethereum (2015) va bien au-delà d'une simple monnaie. C'est une <strong>plateforme de calcul décentralisée</strong> permettant d'exécuter des <strong>smart contracts</strong> — des programmes autonomes qui s'exécutent automatiquement quand les conditions sont remplies.
      </p>
      <p>Sur Ethereum reposent :</p>
      <ul>
        <li><strong>DeFi</strong> — Uniswap, Aave, Compound (échanges et prêts décentralisés)</li>
        <li><strong>NFT</strong> — Tokens non-fongibles représentant la propriété numérique</li>
        <li><strong>DAO</strong> — Organisations autonomes décentralisées</li>
        <li><strong>Layer 2</strong> — Polygon, Arbitrum, Optimism (solutions de scalabilité)</li>
      </ul>

      <h2>Altcoins et tokens : l'univers au-delà du BTC/ETH</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
        {[
          { name: 'Stablecoins', desc: 'USDT, USDC : arrimés au dollar. Essentiel pour le trading et la DeFi.', color: 'teal' },
          { name: 'Layer 1', desc: 'Solana, Avalanche, Cardano : blockchains alternatives à Ethereum.', color: 'violet' },
          { name: 'DeFi Tokens', desc: 'UNI, AAVE, CRV : gouvernance et utilité dans les protocoles DeFi.', color: 'blue' },
          { name: 'Meme Coins', desc: 'DOGE, SHIB : spéculatifs, extrêmement volatils. TRÈS risqués.', color: 'red' },
        ].map((c, i) => (
          <div key={i} className={`info-box ${c.color === 'red' ? 'red' : c.color === 'teal' ? 'teal' : ''}`}>
            <p className="text-sm font-semibold text-text-primary mb-1">{c.name}</p>
            <p className="text-xs text-text-muted">{c.desc}</p>
          </div>
        ))}
      </div>

      <h2>DeFi (Finance Décentralisée)</h2>
      <p>
        La DeFi reproduit les services financiers traditionnels (échanges, prêts, épargne) sur la blockchain, sans intermédiaires. Avantages et risques :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        <div className="info-box teal">
          <p className="text-sm font-semibold text-accent-teal mb-2">✅ Avantages</p>
          <ul className="text-xs space-y-1">
            <li>Vous gardez la custody de vos fonds</li>
            <li>Accessible 24h/7j sans compte bancaire</li>
            <li>Rendements potentiellement élevés (yield farming)</li>
          </ul>
        </div>
        <div className="info-box red">
          <p className="text-sm font-semibold text-accent-red mb-2">⚠️ Risques</p>
          <ul className="text-xs space-y-1">
            <li>Smart contracts bugués (hacks possibles)</li>
            <li>Impermanent loss sur les AMM</li>
            <li>Rug pulls et projets frauduleux</li>
          </ul>
        </div>
      </div>

      <h2>Sécurité des cryptomonnaies</h2>
      <div className="info-box yellow">
        <p className="text-sm font-mono text-yellow-400 font-semibold mb-2">🔐 Règles d'or</p>
        <ul className="text-sm space-y-1">
          <li><strong>"Not your keys, not your coins"</strong> — Si vos cryptos sont sur un exchange, vous n'en êtes pas vraiment propriétaire</li>
          <li>Utilisez un <strong>hardware wallet</strong> (Ledger, Trezor) pour les sommes importantes</li>
          <li>N'investissez jamais plus que ce que vous pouvez perdre</li>
          <li>Méfiez-vous des promesses de rendements extraordinaires</li>
        </ul>
      </div>
    </div>
  )
}
