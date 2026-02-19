import React from 'react'
import { PsychologyCycle } from '../components/illustrations/PsychologyCycle'

export default function Module10_Psychology() {
  const biases = [
    { name: 'Biais de confirmation', desc: 'Chercher uniquement les informations qui confirment notre opinion préexistante. On ignore les signaux contraires.', danger: 'Élevé' },
    { name: 'FOMO (Fear Of Missing Out)', desc: 'Entrer impulsivement sur un marché en fort mouvement par peur de rater l\'opportunité. On entre souvent au pire moment.', danger: 'Élevé' },
    { name: 'Overconfidence (Sur-confiance)', desc: 'Après une série de gains, croire qu\'on est "imbattable". On sur-trade, on sous-estime les risques, on augmente les tailles.', danger: 'Élevé' },
    { name: 'Biais de récence', desc: 'Sur-pondérer les événements récents. Après une série de gains, on pense que ça va continuer. Après des pertes, on doute de tout.', danger: 'Moyen' },
    { name: 'Aversion à la perte', desc: 'La douleur d\'une perte est psychologiquement 2× plus intense que le plaisir d\'un gain équivalent. On coupe les gagnants trop tôt et on laisse courir les perdants.', danger: 'Élevé' },
    { name: 'Anchoring (Ancrage)', desc: 'S\'accrocher à un prix de référence (prix d\'achat, ATH) pour prendre des décisions. "Je vends quand ça revient à mon prix d\'achat."', danger: 'Moyen' },
  ]

  return (
    <div className="prose-trading space-y-6">
      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">🎯 Objectifs du module</p>
        <p className="text-sm">Comprendre les biais cognitifs qui détruisent les traders, apprendre à gérer ses émotions et développer la discipline d'un professionnel.</p>
      </div>

      <div className="rounded-xl border border-border-default bg-bg-secondary p-4">
        <p className="text-xs font-mono text-text-muted mb-3">LE CYCLE ÉMOTIONNEL DU TRADER</p>
        <PsychologyCycle />
      </div>

      <h2>Pourquoi la psychologie est-elle si importante ?</h2>
      <p>
        Les études montrent que <strong>80-90% des traders retail perdent de l'argent</strong> à long terme. Pourtant, beaucoup connaissent parfaitement l'analyse technique. Le problème n'est souvent pas la stratégie — c'est <strong>l'exécution émotionnelle</strong>.
      </p>
      <p>
        Un trader peut avoir une stratégie parfaite sur papier mais prendre de mauvaises décisions dans le feu de l'action à cause de la peur, de l'avidité, ou de l'ego.
      </p>

      <h2>Les Biais Cognitifs du Trader</h2>
      <div className="space-y-3 my-4">
        {biases.map((b, i) => (
          <div key={i} className="p-3 rounded-lg bg-bg-secondary border border-border-default">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-semibold text-text-primary">{b.name}</p>
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                b.danger === 'Élevé' ? 'bg-red-500/15 text-red-400' : 'bg-yellow-500/15 text-yellow-400'
              }`}>
                Danger {b.danger}
              </span>
            </div>
            <p className="text-xs text-text-muted">{b.desc}</p>
          </div>
        ))}
      </div>

      <h2>Peur et Avidité : les deux ennemis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="info-box red">
          <p className="text-sm font-semibold text-accent-red mb-2">😰 La Peur</p>
          <p className="text-xs text-text-muted mb-2">Manifestations :</p>
          <ul className="text-xs space-y-1">
            <li>Couper ses gains trop tôt (peur de voir fondre le profit)</li>
            <li>Refuser d'entrer sur un signal valide (peur de perdre)</li>
            <li>Déplacer le SL pour "donner une chance" au trade</li>
            <li>Arrêter de trader après une série de pertes</li>
          </ul>
        </div>
        <div className="info-box yellow">
          <p className="text-sm font-semibold text-yellow-400 mb-2">🤑 L'Avidité</p>
          <p className="text-xs text-text-muted mb-2">Manifestations :</p>
          <ul className="text-xs space-y-1">
            <li>Tenir trop longtemps ses positions gagnantes</li>
            <li>FOMO — entrer sur des setups médiocres</li>
            <li>Augmenter les tailles après une série de gains</li>
            <li>Overtrader (trop de positions simultanées)</li>
          </ul>
        </div>
      </div>

      <h2>Le Revenge Trading : le tueur de comptes</h2>
      <p>
        Le revenge trading est l'une des causes les plus fréquentes de blown account. Après une perte, la réaction émotionnelle naturelle est de vouloir "récupérer" immédiatement :
      </p>
      <ul>
        <li>On entre sur le premier trade qui se présente, souvent sans setup valide</li>
        <li>On augmente la taille pour "récupérer plus vite"</li>
        <li>On est en état émotionnel, pas analytique → les décisions sont mauvaises</li>
        <li>Résultat : deuxième perte, souvent plus grande → spirale destructrice</li>
      </ul>
      <div className="info-box teal">
        <p className="text-sm"><strong>Solution :</strong> Règle stricte — après une perte, minimum 30 minutes de pause. Revoyez votre journal. Demandez-vous si le trade respectait votre plan. Si non, identifiez l'erreur. Puis revenez, calmement.</p>
      </div>

      <h2>Le Journal de Trading : outil #1</h2>
      <p>Un journal de trading est votre meilleur outil d'amélioration. Pour chaque trade, enregistrez :</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
        {['Date & heure', 'Paire / Actif', 'Direction (Long/Short)', 'Prix d\'entrée', 'Stop Loss', 'Take Profit', 'Taille de position', 'Résultat (€ / pips)', 'Raison du trade', 'État émotionnel', 'Erreurs commises', 'Screenshot du graphique'].map((item, i) => (
          <div key={i} className="px-3 py-2 rounded-lg bg-bg-secondary border border-border-subtle text-xs text-text-secondary font-mono">
            {item}
          </div>
        ))}
      </div>

      <h2>Développer la Discipline</h2>
      <ul>
        <li><strong>Traitez le trading comme une entreprise</strong>, pas comme un jeu ou une loterie</li>
        <li><strong>Suivez votre plan à la lettre</strong> — si vous déviez, notez pourquoi</li>
        <li><strong>Établissez des règles non-négociables</strong> : stop journalier, nombre max de trades/jour</li>
        <li><strong>Méditation et sport</strong> — La gestion du stress commence hors des marchés</li>
        <li><strong>Acceptez les pertes</strong> — Elles font partie du processus. Une perte dans les règles n'est pas un échec.</li>
        <li><strong>Mesurez-vous à votre plan</strong>, pas aux autres traders (les réseaux sociaux montrent les gains, jamais les pertes)</li>
      </ul>

      <div className="info-box">
        <p className="text-sm font-mono text-accent-violet font-semibold mb-1">Citation à méditer</p>
        <p className="text-sm italic text-text-secondary">"The goal of a successful trader is to make the best trades. Money is secondary." — Alexander Elder</p>
        <p className="text-xs text-text-muted mt-1">Traduction : Focalisez-vous sur l'exécution parfaite de votre plan, les profits suivront naturellement.</p>
      </div>
    </div>
  )
}
