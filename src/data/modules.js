export const MODULES = [
  {
    id: 1,
    title: "Introduction aux marchés financiers",
    subtitle: "Comprendre les bases",
    description: "Découvrez ce qu'est le trading, comment fonctionnent les marchés financiers et les opportunités qu'ils offrent.",
    duration: "25 min",
    level: "Débutant",
    icon: "📊",
    category: "Fondamentaux",
    quiz: [
      {
        id: "q1_1",
        question: "Qu'est-ce qu'un marché financier ?",
        options: [
          "Un lieu physique où on achète des marchandises",
          "Un système permettant l'échange d'actifs financiers entre acheteurs et vendeurs",
          "Une banque centrale qui fixe les prix",
          "Un logiciel de gestion de portefeuille"
        ],
        correct: 1,
        explanation: "Un marché financier est un système (physique ou électronique) permettant l'échange d'actifs financiers entre acheteurs et vendeurs à des prix déterminés par l'offre et la demande."
      },
      {
        id: "q1_2",
        question: "Quelle est la différence entre un marché spot et un marché à terme ?",
        options: [
          "Le marché spot concerne uniquement les actions, le marché à terme uniquement le Forex",
          "Sur le marché spot, la livraison est immédiate ; sur le marché à terme, elle est différée",
          "Le marché spot est plus risqué que le marché à terme",
          "Il n'y a aucune différence pratique"
        ],
        correct: 1,
        explanation: "Sur le marché spot (au comptant), les transactions sont réglées immédiatement (T+2 max). Sur les marchés à terme (futures, options), la livraison ou le règlement est prévu à une date future convenue."
      },
      {
        id: "q1_3",
        question: "Qu'est-ce que la liquidité d'un marché ?",
        options: [
          "La quantité d'argent liquide disponible",
          "La facilité avec laquelle on peut acheter ou vendre un actif sans impacter son prix",
          "Le niveau de risque d'un investissement",
          "Le taux d'intérêt appliqué par les banques"
        ],
        correct: 1,
        explanation: "La liquidité mesure la facilité avec laquelle un actif peut être acheté ou vendu rapidement sans que cela n'affecte significativement son prix. Un marché liquide a beaucoup d'acheteurs et de vendeurs actifs."
      },
      {
        id: "q1_4",
        question: "Quel est le rôle principal d'une bourse de valeurs ?",
        options: [
          "Prêter de l'argent aux entreprises",
          "Fournir un cadre réglementé pour l'échange de titres financiers",
          "Déterminer la valeur intrinsèque des entreprises",
          "Garantir les bénéfices des investisseurs"
        ],
        correct: 1,
        explanation: "Une bourse (NYSE, Euronext, etc.) fournit une plateforme réglementée et transparente permettant aux acheteurs et vendeurs de titres financiers de se rencontrer."
      },
      {
        id: "q1_5",
        question: "Qu'est-ce que le spread bid-ask ?",
        options: [
          "La différence entre le prix le plus haut et le plus bas d'une journée",
          "La commission facturée par le broker",
          "La différence entre le prix d'achat et le prix de vente proposés par le marché",
          "Le rendement annuel d'un actif"
        ],
        correct: 2,
        explanation: "Le spread bid-ask est la différence entre le prix auquel vous pouvez vendre (bid) et le prix auquel vous pouvez acheter (ask). C'est un coût de transaction implicite."
      }
    ]
  },
  {
    id: 2,
    title: "Participants et structure des marchés",
    subtitle: "Qui fait quoi sur les marchés",
    description: "Identifiez les différents acteurs des marchés financiers et comprenez comment leurs interactions créent les mouvements de prix.",
    duration: "20 min",
    level: "Débutant",
    icon: "🏦",
    category: "Fondamentaux",
    quiz: [
      {
        id: "q2_1",
        question: "Qui sont les market makers ?",
        options: [
          "Des traders particuliers très actifs",
          "Des institutions qui cotent en permanence des prix d'achat et de vente pour assurer la liquidité",
          "Les autorités de régulation des marchés",
          "Les fonds d'investissement qui achètent uniquement"
        ],
        correct: 1,
        explanation: "Les market makers (teneurs de marché) sont des institutions financières qui s'engagent à proposer en permanence des prix d'achat (bid) et de vente (ask). Ils fournissent de la liquidité au marché et gagnent sur le spread."
      },
      {
        id: "q2_2",
        question: "Quelle est la différence entre un hedge fund et un fonds commun de placement ?",
        options: [
          "Les hedge funds sont accessibles à tous les particuliers",
          "Les hedge funds utilisent des stratégies plus complexes et sont réservés aux investisseurs qualifiés",
          "Les fonds communs ne sont pas réglementés",
          "Il n'y a aucune différence significative"
        ],
        correct: 1,
        explanation: "Les hedge funds utilisent des stratégies sophistiquées (short selling, levier, dérivés) et sont réservés aux investisseurs institutionnels. Les fonds communs sont plus réglementés et accessibles à tous."
      },
      {
        id: "q2_3",
        question: "Qu'est-ce que le trading algorithmique ?",
        options: [
          "Un trading effectué uniquement par des débutants",
          "L'utilisation de programmes informatiques pour exécuter des ordres selon des règles prédéfinies",
          "Une stratégie basée uniquement sur l'analyse fondamentale",
          "Un type de trading réservé aux marchés de matières premières"
        ],
        correct: 1,
        explanation: "Le trading algorithmique utilise des programmes qui analysent le marché et exécutent automatiquement des ordres selon des critères prédéfinis. Il représente aujourd'hui une part majeure des volumes échangés."
      },
      {
        id: "q2_4",
        question: "Quel est le rôle d'un broker (courtier) ?",
        options: [
          "Garantir vos profits sur les marchés",
          "Servir d'intermédiaire entre vous et les marchés pour exécuter vos ordres",
          "Analyser les marchés à votre place",
          "Gérer votre argent de façon autonome"
        ],
        correct: 1,
        explanation: "Un broker est un intermédiaire qui exécute vos ordres d'achat et de vente sur les marchés financiers. Il vous donne accès aux marchés en échange de commissions ou de spreads."
      },
      {
        id: "q2_5",
        question: "Qu'est-ce que le trading haute fréquence (HFT) ?",
        options: [
          "Un trading effectué plusieurs fois par heure par des humains",
          "Des algorithmes qui exécutent des milliers d'ordres par seconde pour capturer de micro-profits",
          "Une stratégie d'investissement à long terme",
          "Le trading sur les marchés asiatiques pendant la nuit"
        ],
        correct: 1,
        explanation: "Le HFT utilise des algorithmes ultra-rapides exécutant des milliers d'ordres par seconde, cherchant à capturer de minuscules différences de prix avec une latence minimale."
      }
    ]
  },
  {
    id: 3,
    title: "Le Forex — Marché des devises",
    subtitle: "Le marché le plus grand du monde",
    description: "Maîtrisez le fonctionnement du marché Forex, les paires de devises, les pips, et les sessions de trading mondiales.",
    duration: "35 min",
    level: "Débutant",
    icon: "💱",
    category: "Marchés",
    quiz: [
      {
        id: "q3_1",
        question: "Qu'est-ce qu'un pip sur le Forex ?",
        options: [
          "Un indicateur de tendance",
          "La plus petite unité de variation de prix d'une paire de devises (généralement 0.0001)",
          "Un type d'ordre de trading",
          "Le nom d'une stratégie de trading"
        ],
        correct: 1,
        explanation: "Un pip (Percentage in Point) est la plus petite variation conventionnelle du taux de change. Pour la plupart des paires, c'est le 4ème chiffre après la virgule (0.0001). Pour les paires JPY, c'est le 2ème chiffre (0.01)."
      },
      {
        id: "q3_2",
        question: "Quelle est la paire de devises la plus tradée au monde ?",
        options: [
          "GBP/USD (Cable)",
          "USD/JPY",
          "EUR/USD (Fiber)",
          "AUD/USD"
        ],
        correct: 2,
        explanation: "EUR/USD est la paire la plus tradée, représentant environ 23% du volume quotidien du Forex. Sa liquidité extrême se traduit par des spreads très faibles."
      },
      {
        id: "q3_3",
        question: "Combien de temps le marché Forex est-il ouvert ?",
        options: [
          "8h par jour, 5 jours par semaine",
          "16h par jour, 5 jours par semaine",
          "24h par jour, 5 jours par semaine (du lundi au vendredi)",
          "24h par jour, 7 jours par semaine"
        ],
        correct: 2,
        explanation: "Le Forex fonctionne 24h/24, 5 jours sur 7, grâce à la rotation des sessions mondiales : Sydney → Tokyo → Londres → New York."
      },
      {
        id: "q3_4",
        question: "Qu'est-ce que l'effet de levier sur le Forex ?",
        options: [
          "Un indicateur qui mesure la force d'une tendance",
          "La possibilité de contrôler une position plus grande que votre capital initial",
          "Un type de compte de trading spécial",
          "La différence entre deux taux d'intérêt"
        ],
        correct: 1,
        explanation: "L'effet de levier permet de contrôler une position importante avec un capital limité. Avec un levier de 100:1, vous contrôlez 100 000€ avec 1 000€ de marge. C'est une arme à double tranchant qui amplifie gains et pertes."
      },
      {
        id: "q3_5",
        question: "Qu'est-ce qu'une 'cross' sur le Forex ?",
        options: [
          "Un signal de trading généré par deux moyennes mobiles",
          "Une paire de devises qui ne contient pas le dollar américain",
          "Une stratégie d'arbitrage entre deux marchés",
          "Le nom d'une formation de chandeliers japonais"
        ],
        correct: 1,
        explanation: "Une cross est une paire de devises qui n'inclut pas le dollar américain (USD). Exemples : EUR/GBP, EUR/JPY, GBP/JPY. Les crosses ont généralement des spreads plus larges que les paires majeures."
      },
      {
        id: "q3_6",
        question: "Quelle session Forex est connue pour sa forte volatilité ?",
        options: [
          "La session de Sydney",
          "La session de Tokyo",
          "La session de Londres (overlap avec New York)",
          "La session du week-end"
        ],
        correct: 2,
        explanation: "L'overlap entre les sessions de Londres et New York génère la plus forte volatilité car les deux plus grands centres financiers mondiaux sont simultanément actifs."
      }
    ]
  },
  {
    id: 4,
    title: "Le marché des actions",
    subtitle: "Investir dans les entreprises",
    description: "Comprenez comment fonctionne le marché boursier, les indices, les dividendes, et comment analyser les actions.",
    duration: "30 min",
    level: "Débutant",
    icon: "📈",
    category: "Marchés",
    quiz: [
      {
        id: "q4_1",
        question: "Qu'est-ce qu'une action (stock) ?",
        options: [
          "Un prêt accordé à une entreprise",
          "Une part de propriété dans une entreprise",
          "Un contrat à terme sur matières premières",
          "Un dépôt bancaire rémunéré"
        ],
        correct: 1,
        explanation: "Une action représente une part de propriété dans une entreprise. En achetant des actions, vous devenez actionnaire et pouvez recevoir des dividendes et bénéficier de l'appréciation du cours."
      },
      {
        id: "q4_2",
        question: "Qu'est-ce qu'un indice boursier comme le CAC 40 ?",
        options: [
          "Un fonds d'investissement géré activement",
          "Un panier représentatif d'actions mesurant la performance d'un marché",
          "Le prix moyen de toutes les actions d'une bourse",
          "Un indicateur technique utilisé par les traders"
        ],
        correct: 1,
        explanation: "Un indice boursier (CAC 40, S&P 500, NASDAQ) est un panier d'actions sélectionnées selon des critères précis qui mesure la performance globale d'un marché ou d'un secteur."
      },
      {
        id: "q4_3",
        question: "Qu'est-ce qu'un dividende ?",
        options: [
          "La différence entre le prix d'achat et de vente d'une action",
          "Une part des bénéfices d'une entreprise distribuée aux actionnaires",
          "Une commission payée au broker pour chaque transaction",
          "Un bonus donné lors d'une introduction en bourse"
        ],
        correct: 1,
        explanation: "Un dividende est une distribution d'une partie des bénéfices d'une entreprise à ses actionnaires. Versé généralement trimestriellement ou annuellement, il représente une source de revenus passive."
      },
      {
        id: "q4_4",
        question: "Qu'est-ce qu'une IPO ?",
        options: [
          "Un type d'ordre de trading avancé",
          "Le premier jour de cotation d'une action déjà existante",
          "Le processus par lequel une entreprise privée offre ses actions au public pour la première fois",
          "Une méthode d'analyse fondamentale"
        ],
        correct: 2,
        explanation: "Une IPO (Initial Public Offering) est le processus par lequel une entreprise privée vend ses actions au public pour la première fois via une bourse. C'est souvent une façon de lever des capitaux pour financer la croissance."
      },
      {
        id: "q4_5",
        question: "Que signifie le ratio P/E (Price-to-Earnings) ?",
        options: [
          "Le ratio entre le prix et le volume d'échange",
          "Le nombre d'années nécessaires pour récupérer son investissement via les bénéfices",
          "La performance d'une action par rapport à son indice",
          "Le pourcentage de dividende par rapport au prix"
        ],
        correct: 1,
        explanation: "Le P/E = Prix de l'action / Bénéfice par action. Un P/E de 20 signifie que vous payez 20€ pour 1€ de bénéfice annuel. Il permet de comparer la valorisation de différentes entreprises."
      }
    ]
  },
  {
    id: 5,
    title: "Les crypto-monnaies",
    subtitle: "Bitcoin, Ethereum et au-delà",
    description: "Explorez l'univers des cryptomonnaies, la blockchain, DeFi, et apprenez à naviguer dans ces marchés volatils.",
    duration: "35 min",
    level: "Débutant",
    icon: "₿",
    category: "Marchés",
    quiz: [
      {
        id: "q5_1",
        question: "Qu'est-ce que la blockchain ?",
        options: [
          "Un type de bourse de cryptomonnaies",
          "Un registre distribué et immuable enregistrant toutes les transactions",
          "Un portefeuille électronique pour stocker des cryptos",
          "Un algorithme de trading automatique"
        ],
        correct: 1,
        explanation: "La blockchain est un registre distribué sur des milliers d'ordinateurs. Les transactions sont regroupées en blocs, chiffrés et liés de façon chronologique et immuable, éliminant le besoin d'intermédiaire centralisé."
      },
      {
        id: "q5_2",
        question: "Quelle est la différence principale entre Bitcoin et Ethereum ?",
        options: [
          "Bitcoin est plus récent qu'Ethereum",
          "Bitcoin est principalement une réserve de valeur ; Ethereum est une plateforme de contrats intelligents",
          "Ethereum est plus sécurisé que Bitcoin",
          "Il n'y a aucune différence technique significative"
        ],
        correct: 1,
        explanation: "Bitcoin (2009) est conçu comme une monnaie numérique et réserve de valeur décentralisée, avec une offre limitée à 21 millions. Ethereum (2015) est une plateforme programmable permettant d'exécuter des smart contracts et DApps."
      },
      {
        id: "q5_3",
        question: "Qu'est-ce que le 'halving' du Bitcoin ?",
        options: [
          "Une division du prix du Bitcoin par deux",
          "La réduction de moitié de la récompense des mineurs, tous les 4 ans environ",
          "Un split des tokens Bitcoin en deux nouvelles cryptos",
          "Une mise à jour majeure du protocole Bitcoin"
        ],
        correct: 1,
        explanation: "Le halving réduit de moitié la récompense accordée aux mineurs pour chaque bloc validé. Il se produit tous les ~210 000 blocs (~4 ans), créant une pression déflationniste qui a historiquement précédé des hausses de prix."
      },
      {
        id: "q5_4",
        question: "Qu'est-ce qu'un stablecoin ?",
        options: [
          "Une cryptomonnaie dont la valeur est arrimée à un actif stable (ex: dollar)",
          "Une cryptomonnaie émise par une banque centrale",
          "Un Bitcoin dont le prix ne peut pas baisser",
          "Un token utilisé uniquement pour les NFT"
        ],
        correct: 0,
        explanation: "Un stablecoin est une cryptomonnaie dont la valeur est arrimée à un actif stable, généralement le dollar américain. Exemples : USDT, USDC. Ils permettent de rester dans l'écosystème crypto sans subir la volatilité."
      },
      {
        id: "q5_5",
        question: "Qu'est-ce que la DeFi (Finance Décentralisée) ?",
        options: [
          "Un service bancaire en ligne classique",
          "Des services financiers basés sur des smart contracts sans intermédiaires centralisés",
          "Un réseau de distributeurs automatiques de crypto",
          "Une réglementation gouvernementale sur les cryptos"
        ],
        correct: 1,
        explanation: "La DeFi regroupe des protocoles financiers (échanges, prêts, épargne) fonctionnant via des smart contracts sur la blockchain, sans intermédiaire centralisé. Les utilisateurs gardent le contrôle de leurs fonds."
      }
    ]
  },
  {
    id: 6,
    title: "Analyse technique — Fondamentaux",
    subtitle: "Lire les graphiques",
    description: "Apprenez à lire les graphiques de prix, identifier les tendances, les supports et résistances, et les structures de marché.",
    duration: "40 min",
    level: "Intermédiaire",
    icon: "📉",
    category: "Analyse",
    quiz: [
      {
        id: "q6_1",
        question: "Qu'est-ce qu'un support en analyse technique ?",
        options: [
          "Une ligne de tendance haussière",
          "Un niveau de prix où la demande est suffisamment forte pour stopper ou inverser une baisse",
          "Le plus haut atteint par un actif sur une période",
          "Une moyenne mobile à court terme"
        ],
        correct: 1,
        explanation: "Un support est un niveau de prix où les acheteurs sont assez nombreux pour absorber la pression vendeuse. Plus il a été testé souvent sans être cassé, plus il est fort. Un support cassé peut devenir une résistance."
      },
      {
        id: "q6_2",
        question: "Comment définit-on une tendance haussière (uptrend) ?",
        options: [
          "Le prix augmente tous les jours sans exception",
          "Une série de plus hauts et plus bas successifs plus élevés que les précédents",
          "Le RSI est au-dessus de 50",
          "Le volume d'échange augmente régulièrement"
        ],
        correct: 1,
        explanation: "Une tendance haussière se définit par une succession de Higher Highs (HH) et de Higher Lows (HL) - c'est la théorie de Dow, fondement de l'analyse technique classique."
      },
      {
        id: "q6_3",
        question: "Qu'est-ce qu'un pull-back en trading ?",
        options: [
          "Une inversion complète de tendance",
          "Une correction temporaire contre la tendance principale avant la reprise",
          "Un ordre de protection automatique",
          "Une stratégie de trading à contre-tendance"
        ],
        correct: 1,
        explanation: "Un pull-back est un mouvement temporaire contre la tendance principale qui permet au marché de 'souffler' avant de reprendre sa direction. Les traders l'utilisent pour entrer dans la tendance à de meilleurs prix."
      },
      {
        id: "q6_4",
        question: "Que représente le volume en analyse technique ?",
        options: [
          "Le nombre de brokers actifs sur ce marché",
          "La quantité d'actifs échangés sur une période donnée",
          "L'écart entre le plus haut et le plus bas d'une bougie",
          "Le nombre de positions ouvertes"
        ],
        correct: 1,
        explanation: "Le volume représente la quantité totale d'actifs échangée sur une période. Il confirme la force d'un mouvement : une cassure de résistance avec un fort volume est plus significative qu'avec un faible volume."
      },
      {
        id: "q6_5",
        question: "Qu'est-ce que le retracement de Fibonacci ?",
        options: [
          "Une technique de gestion du risque",
          "Des niveaux de prix clés calculés à partir des ratios de Fibonacci (23.6%, 38.2%, 61.8%)",
          "Un indicateur oscillant entre 0 et 100",
          "Une stratégie de trading sur les actualités économiques"
        ],
        correct: 1,
        explanation: "Le retracement de Fibonacci identifie des niveaux de support/résistance potentiels lors d'une correction. Les niveaux 38.2%, 50%, et 61.8% sont particulièrement surveillés car le marché y réagit souvent."
      },
      {
        id: "q6_6",
        question: "Qu'est-ce qu'une cassure (breakout) ?",
        options: [
          "Un bug dans une plateforme de trading",
          "Quand le prix franchit un niveau de support ou résistance important avec conviction",
          "Une forte chute du prix en peu de temps",
          "Un trade qui a atteint son stop loss"
        ],
        correct: 1,
        explanation: "Un breakout se produit lorsque le prix casse un niveau clé avec un volume élevé. C'est souvent le début d'un nouveau mouvement directionnel. Les faux breakouts (bull traps, bear traps) sont cependant fréquents."
      }
    ]
  },
  {
    id: 7,
    title: "Les chandeliers japonais",
    subtitle: "L'art de lire les bougies",
    description: "Maîtrisez les patterns de chandeliers japonais les plus puissants pour anticiper les retournements et continuations de marché.",
    duration: "45 min",
    level: "Intermédiaire",
    icon: "🕯️",
    category: "Analyse",
    quiz: [
      {
        id: "q7_1",
        question: "Que représente le corps d'une bougie japonaise ?",
        options: [
          "La différence entre le plus haut et le plus bas de la période",
          "La différence entre le prix d'ouverture et le prix de clôture",
          "Le volume échangé pendant la période",
          "La direction de la tendance principale"
        ],
        correct: 1,
        explanation: "Le corps d'une bougie représente la différence entre le prix d'ouverture et de clôture. Verte : clôture au-dessus de l'ouverture (haussier). Rouge : clôture en dessous (baissier)."
      },
      {
        id: "q7_2",
        question: "Qu'est-ce qu'un Doji ?",
        options: [
          "Une bougie avec un très long corps haussier",
          "Une bougie dont l'ouverture et la clôture sont quasi identiques, signalant l'indécision",
          "Un pattern de renversement baissier à trois bougies",
          "Une bougie sans mèches"
        ],
        correct: 1,
        explanation: "Un Doji se forme quand le prix ouvre et clôture au même niveau. Il représente l'équilibre entre acheteurs et vendeurs, signalant l'indécision. Après une tendance forte, il peut annoncer un retournement."
      },
      {
        id: "q7_3",
        question: "Qu'est-ce qu'un 'Hammer' (Marteau) ?",
        options: [
          "Une bougie avec un long corps et aucune mèche",
          "Un pattern baissier formé de trois bougies rouges",
          "Une bougie avec un petit corps en haut et une longue mèche inférieure, signal haussier potentiel",
          "Deux bougies de même taille en opposition"
        ],
        correct: 2,
        explanation: "Le Hammer est une bougie avec un petit corps en haut et une longue mèche inférieure (au moins 2x le corps). Après une tendance baissière, il signale que les acheteurs ont repris le contrôle."
      },
      {
        id: "q7_4",
        question: "Qu'est-ce qu'une bougie Engulfing haussière ?",
        options: [
          "Une petite bougie verte suivie d'une grande bougie rouge",
          "Une grande bougie verte dont le corps englobe entièrement le corps de la bougie rouge précédente",
          "Deux bougies vertes consécutives de même taille",
          "Une bougie avec des mèches égales des deux côtés"
        ],
        correct: 1,
        explanation: "Le Bullish Engulfing est formé d'une bougie rouge suivie d'une verte dont le corps englobe entièrement le corps rouge précédent, indiquant que les acheteurs ont pris le dessus avec force."
      },
      {
        id: "q7_5",
        question: "Qu'est-ce qu'une étoile du matin (Morning Star) ?",
        options: [
          "Une simple bougie verte après une longue bougie rouge",
          "Un pattern baissier à deux bougies",
          "Un pattern de renversement haussier à 3 bougies : grande rouge, petit corps, grande verte",
          "Une bougie qui ouvre en gap haussier"
        ],
        correct: 2,
        explanation: "Le Morning Star est un signal de renversement haussier en 3 bougies : 1) Grande bougie rouge, 2) Petit corps (indécision), 3) Grande bougie verte. Signal fort de fin de baisse."
      },
      {
        id: "q7_6",
        question: "Qu'indique une longue mèche supérieure sur une bougie ?",
        options: [
          "Les acheteurs ont fortement poussé le prix à la hausse",
          "Les vendeurs ont repoussé les tentatives de hausse, signe de pression vendeuse",
          "Le volume échangé était très élevé",
          "La bougie est nécessairement baissière"
        ],
        correct: 1,
        explanation: "Une longue mèche supérieure montre que le prix est monté mais a été repoussé avant la clôture. Les vendeurs ont rejeté les niveaux hauts — signe de pression vendeuse significative."
      }
    ]
  },
  {
    id: 8,
    title: "Les indicateurs techniques",
    subtitle: "Outils d'analyse quantitative",
    description: "Découvrez les principaux indicateurs techniques (RSI, MACD, Moyennes mobiles, Bandes de Bollinger) et apprenez à les utiliser correctement.",
    duration: "40 min",
    level: "Intermédiaire",
    icon: "🔧",
    category: "Analyse",
    quiz: [
      {
        id: "q8_1",
        question: "Que mesure le RSI (Relative Strength Index) ?",
        options: [
          "La différence entre deux moyennes mobiles",
          "La volatilité du marché sur une période",
          "La vitesse et l'amplitude des mouvements de prix (surachat/survente)",
          "Le volume relatif par rapport à la moyenne"
        ],
        correct: 2,
        explanation: "Le RSI (0-100) mesure la vitesse des variations de prix. Au-dessus de 70 : surachat. En dessous de 30 : survente. La divergence entre RSI et prix est l'un des signaux les plus puissants."
      },
      {
        id: "q8_2",
        question: "Qu'est-ce qu'une divergence baissière sur le RSI ?",
        options: [
          "Le RSI passe en dessous de 30",
          "Le prix fait de nouveaux plus hauts mais le RSI fait des plus hauts de plus en plus bas",
          "Le RSI et le prix baissent simultanément",
          "Le RSI croise sa ligne de signal vers le bas"
        ],
        correct: 1,
        explanation: "Une divergence baissière se produit quand le prix atteint un nouveau plus haut alors que le RSI forme un sommet plus bas, indiquant un affaiblissement du momentum malgré la hausse des prix."
      },
      {
        id: "q8_3",
        question: "Comment le MACD génère-t-il un signal d'achat ?",
        options: [
          "Quand le MACD passe au-dessus de zéro",
          "Quand la ligne MACD croise la ligne de signal vers le haut",
          "Quand l'histogramme MACD est positif",
          "Quand le prix croise la moyenne mobile à 26 périodes"
        ],
        correct: 1,
        explanation: "Le MACD génère un signal d'achat quand la ligne MACD (EMA 12 - EMA 26) croise la ligne de signal (EMA 9) vers le haut. Ce signal est plus fiable quand il se produit en zone de survente."
      },
      {
        id: "q8_4",
        question: "Que sont les Bandes de Bollinger ?",
        options: [
          "Trois lignes de support/résistance horizontales fixes",
          "Une moyenne mobile centrale encadrée de deux bandes d'écart-type",
          "Un indicateur de volume à trois composantes",
          "Des niveaux de Fibonacci adaptés dynamiquement"
        ],
        correct: 1,
        explanation: "Les Bandes de Bollinger sont composées d'une moyenne mobile centrale (MM20) et de deux bandes à ±2 écarts-types. Quand les bandes se resserrent, une forte explosion de volatilité est imminente."
      },
      {
        id: "q8_5",
        question: "Quelle est la règle d'or pour utiliser les indicateurs techniques ?",
        options: [
          "Plus on utilise d'indicateurs, meilleurs sont les signaux",
          "Les indicateurs ne fonctionnent que sur les marchés boursiers",
          "Ne jamais utiliser les indicateurs seuls ; les confirmer avec l'action des prix et d'autres contextes",
          "Un seul indicateur suffit pour trader avec succès"
        ],
        correct: 2,
        explanation: "Les indicateurs sont des outils de confirmation. La règle d'or : utiliser 2-3 indicateurs max qui se confirment mutuellement, toujours dans le contexte de la structure de marché et du price action."
      }
    ]
  },
  {
    id: 9,
    title: "Gestion du risque",
    subtitle: "Protéger son capital",
    description: "La compétence la plus importante du trading. Apprenez le position sizing, le ratio risque/récompense, et comment protéger votre capital sur le long terme.",
    duration: "45 min",
    level: "Intermédiaire",
    icon: "🛡️",
    category: "Stratégie",
    quiz: [
      {
        id: "q9_1",
        question: "Qu'est-ce que la règle des 1-2% en gestion du risque ?",
        options: [
          "Investir seulement 1-2% de son capital total sur les marchés",
          "Ne jamais risquer plus de 1-2% de son capital total sur un seul trade",
          "Viser un profit de 1-2% par trade",
          "Utiliser un levier maximum de 1:2"
        ],
        correct: 1,
        explanation: "La règle des 1-2% stipule de ne jamais risquer plus de 1-2% de son capital sur un seul trade. Avec cette règle, même après 10 trades perdants consécutifs, vous n'avez perdu que 10-20% du capital."
      },
      {
        id: "q9_2",
        question: "Comment calculer la taille de position ?",
        options: [
          "Toujours trader avec un lot standard de 100 000 unités",
          "Capital risqué = Capital × % risque ; Taille = Capital risqué / (Entrée - Stop Loss)",
          "Utiliser la même taille pour tous les trades",
          "Augmenter la taille après chaque perte pour récupérer"
        ],
        correct: 1,
        explanation: "Position sizing = (Capital × % Risque) / Distance au Stop Loss. Exemple : Capital 10 000€, risque 1% = 100€, SL à 50 pips → taille = 100€ / 50 = 0.2 lot. Cette formule assure que chaque perte est limitée au % de risque défini."
      },
      {
        id: "q9_3",
        question: "Qu'est-ce qu'un ratio risque/récompense (R:R) de 1:3 ?",
        options: [
          "Vous risquez 3€ pour en gagner 1€",
          "Vous risquez 1€ pour en gagner 3€",
          "Votre taux de réussite est de 33%",
          "Vous utilisez un levier de 1:3"
        ],
        correct: 1,
        explanation: "Un R:R de 1:3 signifie que pour chaque euro risqué, vous visez 3€ de profit. Avec ce ratio, même à 40% de trades gagnants, vous êtes rentable (0.4×3 - 0.6×1 = +0.6€ par trade en moyenne)."
      },
      {
        id: "q9_4",
        question: "Qu'est-ce qu'un stop loss ?",
        options: [
          "Un ordre pour sécuriser les profits quand le prix monte",
          "Un ordre automatique pour clôturer une position en perte si le prix atteint un niveau défini",
          "Une stratégie pour moyenner à la baisse",
          "Un indicateur qui signale quand arrêter de trader"
        ],
        correct: 1,
        explanation: "Un stop loss est un ordre conditionnel qui clôture automatiquement votre position si le prix atteint un niveau prédéfini, limitant la perte maximale. Il doit être placé à un niveau logique selon l'analyse."
      },
      {
        id: "q9_5",
        question: "Qu'est-ce que la drawdown maximale ?",
        options: [
          "La perte maximale sur un seul trade",
          "Le profit maximum réalisé sur une période",
          "La baisse maximale depuis un sommet du capital avant une nouvelle hausse",
          "Le nombre de trades perdants consécutifs"
        ],
        correct: 2,
        explanation: "La drawdown maximale mesure la baisse maximale de la valeur d'un portefeuille depuis son point le plus haut jusqu'à son point le plus bas. Une drawdown de 50% nécessite +100% pour revenir au niveau initial."
      },
      {
        id: "q9_6",
        question: "Pourquoi ne doit-on jamais martingaler (doubler la mise après chaque perte) ?",
        options: [
          "C'est interdit par les régulateurs financiers",
          "Parce que les séries de pertes peuvent ruiner le compte avant que la stratégie fonctionne",
          "Parce que les brokers ne le permettent pas",
          "Parce que ça fonctionne seulement sur les actions"
        ],
        correct: 1,
        explanation: "La martingale est dangereuse : après 7 pertes consécutives, la mise est ×128 la mise initiale. Une série de 10 pertes = ×1024 la mise initiale. La plupart des comptes sont détruits avant que la stratégie ne se rétablisse."
      }
    ]
  },
  {
    id: 10,
    title: "Psychologie du trading",
    subtitle: "Maîtriser ses émotions",
    description: "Comprendre les biais cognitifs, gérer la peur et l'avidité, et développer la discipline mentale nécessaire pour trader avec succès.",
    duration: "35 min",
    level: "Intermédiaire",
    icon: "🧠",
    category: "Stratégie",
    quiz: [
      {
        id: "q10_1",
        question: "Qu'est-ce que le biais de confirmation en trading ?",
        options: [
          "Confirmer un signal avec plusieurs indicateurs avant d'entrer",
          "La tendance à chercher uniquement les informations qui confirment notre opinion préexistante",
          "Un biais qui affecte uniquement les traders débutants",
          "Une méthode pour confirmer la validité d'une stratégie"
        ],
        correct: 1,
        explanation: "Le biais de confirmation nous pousse à ne retenir que les informations qui soutiennent notre thèse. C'est l'un des biais les plus dangereux car il nous rend sélectivement aveugles à l'information contraire."
      },
      {
        id: "q10_2",
        question: "Qu'est-ce que le FOMO en trading ?",
        options: [
          "Un indicateur de momentum basé sur les options",
          "Fear Of Missing Out : la peur de rater un mouvement qui pousse à entrer tardivement",
          "Une stratégie de trading sur les nouvelles économiques",
          "Un acronyme désignant une zone de prix clé"
        ],
        correct: 1,
        explanation: "Le FOMO pousse les traders à entrer précipitamment sur un marché déjà en fort mouvement, souvent au pire moment (en haut d'une hausse), avec un R:R défavorable."
      },
      {
        id: "q10_3",
        question: "Qu'est-ce que le 'revenge trading' ?",
        options: [
          "Une stratégie avancée de récupération des pertes",
          "Reprendre le marché après une journée calme",
          "Trader impulsivement pour récupérer rapidement une perte, menant à des pertes supplémentaires",
          "Une technique légale de manipulation de marché"
        ],
        correct: 2,
        explanation: "Le revenge trading survient après une perte : la colère pousse à reprendre le marché immédiatement avec des positions plus grandes, sans respecter le plan. C'est l'une des principales causes de blown accounts."
      },
      {
        id: "q10_4",
        question: "Qu'est-ce que le biais de récence en trading ?",
        options: [
          "S'appuyer excessivement sur les événements récents pour prévoir l'avenir",
          "Utiliser des données historiques trop anciennes pour l'analyse",
          "Un biais qui affecte les traders après plusieurs années de pratique",
          "La tendance à préférer les actifs nouvellement listés"
        ],
        correct: 0,
        explanation: "Le biais de récence nous fait surpondérer les événements récents. Après une série de gains, on se croit invincible. Après des pertes, on doute de tout. En trading, l'historique récent ne garantit pas le futur."
      },
      {
        id: "q10_5",
        question: "Pourquoi un journal de trading est-il essentiel ?",
        options: [
          "Pour satisfaire les obligations fiscales uniquement",
          "Pour analyser ses trades, identifier ses erreurs récurrentes et améliorer sa stratégie objectivement",
          "Pour impressionner ses followers sur les réseaux sociaux",
          "Parce que les brokers l'exigent réglementairement"
        ],
        correct: 1,
        explanation: "Un journal de trading enregistre chaque trade. Il permet d'analyser objectivement ses performances, d'identifier les patterns d'erreurs, et de mesurer l'amélioration réelle. C'est l'outil d'apprentissage le plus puissant d'un trader."
      }
    ]
  },
  {
    id: 11,
    title: "Les types d'ordres",
    subtitle: "Exécuter ses trades avec précision",
    description: "Maîtrisez tous les types d'ordres disponibles (market, limit, stop, OCO...) pour entrer et sortir du marché avec précision et efficacité.",
    duration: "25 min",
    level: "Débutant",
    icon: "⚡",
    category: "Pratique",
    quiz: [
      {
        id: "q11_1",
        question: "Quelle est la différence entre un ordre Market et un ordre Limit ?",
        options: [
          "L'ordre Market est plus sécurisé que l'ordre Limit",
          "L'ordre Market s'exécute immédiatement au meilleur prix ; l'ordre Limit s'exécute uniquement à un prix spécifié ou meilleur",
          "L'ordre Limit est uniquement disponible pour les actions",
          "L'ordre Market ne peut être utilisé que pendant les heures officielles"
        ],
        correct: 1,
        explanation: "L'ordre Market s'exécute instantanément au meilleur prix disponible (exécution certaine, prix non garanti). L'ordre Limit garantit un prix mais l'exécution n'est pas certaine si le prix n'atteint pas votre limite."
      },
      {
        id: "q11_2",
        question: "Qu'est-ce qu'un ordre Stop Loss Trailing ?",
        options: [
          "Un stop loss fixe qui ne bouge jamais",
          "Un stop loss qui se déplace automatiquement dans la direction du profit, sécurisant les gains",
          "Un ordre qui double la mise si le stop est touché",
          "Un stop loss activé uniquement pendant certaines heures"
        ],
        correct: 1,
        explanation: "Le trailing stop se déplace automatiquement dans la direction favorable au trade d'une distance fixe. Il ne remonte jamais si le prix baisse, sécurisant progressivement les profits."
      },
      {
        id: "q11_3",
        question: "Qu'est-ce qu'un ordre OCO (One Cancels the Other) ?",
        options: [
          "Un ordre qui annule automatiquement votre compte après une perte",
          "Deux ordres liés où l'exécution de l'un annule automatiquement l'autre",
          "Un ordre utilisable uniquement sur les marchés d'options",
          "Un type d'ordre réservé aux traders institutionnels"
        ],
        correct: 1,
        explanation: "L'ordre OCO couple deux ordres : si l'un s'exécute, l'autre est annulé. Exemple : après un achat, vous placez un Take Profit et un Stop Loss simultanément. Si le TP est atteint, le SL est annulé."
      },
      {
        id: "q11_4",
        question: "Qu'est-ce que le slippage ?",
        options: [
          "Une commission cachée facturée par les brokers",
          "La différence entre le prix attendu d'un ordre et le prix auquel il s'exécute réellement",
          "Un glissement de la tendance vers une direction opposée",
          "Le coût de maintien d'une position overnight"
        ],
        correct: 1,
        explanation: "Le slippage est l'écart entre le prix voulu et le prix d'exécution réel. Il se produit surtout avec les ordres Market en période de forte volatilité ou faible liquidité."
      },
      {
        id: "q11_5",
        question: "Quand utilise-t-on un ordre Buy Stop ?",
        options: [
          "Pour acheter en dessous du prix actuel",
          "Pour acheter au-dessus du prix actuel (anticiper une cassure haussière)",
          "Pour sécuriser un profit sur une position longue",
          "Pour entrer short sur le marché"
        ],
        correct: 1,
        explanation: "Un Buy Stop est placé au-dessus du prix actuel. Il s'active quand le prix monte jusqu'à ce niveau. Utilisé par les breakout traders qui veulent entrer uniquement si la cassure est confirmée."
      }
    ]
  },
  {
    id: 12,
    title: "Construire son plan de trading",
    subtitle: "De la stratégie à l'exécution",
    description: "Assemblez toutes vos connaissances en un plan de trading cohérent et testez-le. L'étape finale avant de trader avec du capital réel.",
    duration: "50 min",
    level: "Avancé",
    icon: "📋",
    category: "Pratique",
    quiz: [
      {
        id: "q12_1",
        question: "Qu'est-ce qu'un plan de trading ?",
        options: [
          "Un document légal requis par les autorités financières",
          "Un ensemble de règles objectives qui définissent comment, quand et pourquoi trader",
          "Un programme informatique de trading automatique",
          "Un rapport de performance mensuel"
        ],
        correct: 1,
        explanation: "Un plan de trading est votre 'constitution' : il définit votre stratégie d'entrée, sortie, gestion du risque, créneaux et règles de discipline. Il transforme le trading en processus méthodique."
      },
      {
        id: "q12_2",
        question: "Qu'est-ce que le backtesting ?",
        options: [
          "Tester sa stratégie sur des données historiques pour évaluer ses performances passées",
          "Analyser les trades perdants de la semaine précédente",
          "Un test de connexion internet avant de trader",
          "Revérifier ses analyses après la clôture du marché"
        ],
        correct: 0,
        explanation: "Le backtesting consiste à appliquer votre stratégie à des données historiques pour simuler ses performances passées. Cela permet d'évaluer la viabilité avant de risquer du capital réel."
      },
      {
        id: "q12_3",
        question: "Qu'est-ce qu'un compte démo et quand passer au réel ?",
        options: [
          "Un compte avec de l'argent réel mais des commissions réduites",
          "Un compte simulé avec de l'argent virtuel pour pratiquer sans risque",
          "Un compte pour les algorithmes de trading seulement",
          "Un compte gratuit sans toutes les fonctionnalités"
        ],
        correct: 1,
        explanation: "Un compte démo utilise de l'argent virtuel. Passez au réel uniquement quand : stratégie profitable en démo sur 3+ mois, respect du plan >90%, gestion des émotions maîtrisée."
      },
      {
        id: "q12_4",
        question: "Quels sont les éléments essentiels d'un plan de trading ?",
        options: [
          "Uniquement la stratégie d'entrée et le take profit",
          "Marchés, timeframe, setup d'entrée, stop loss, take profit, gestion du risque, créneaux, règles de discipline",
          "Le capital de départ et le levier maximum",
          "La liste des actualités économiques à suivre"
        ],
        correct: 1,
        explanation: "Un plan complet définit : marchés tradés, timeframe, setups d'entrée précis, SL et TP, taille de position, sessions de trading, et règles de discipline. Chaque élément est aussi important."
      },
      {
        id: "q12_5",
        question: "Combien de temps faut-il pour devenir un trader profitable ?",
        options: [
          "1-2 semaines avec les bons outils",
          "Cela dépend uniquement du capital de départ",
          "En moyenne 1-3 ans de pratique intensive, d'apprentissage et d'adaptation de sa stratégie",
          "6 mois exactement pour tout le monde"
        ],
        correct: 2,
        explanation: "Devenir profitable demande typiquement 1-3 ans : apprentissage des bases (6 mois), développement de stratégie (6-12 mois), trading démo profitable (3-6 mois), puis passage progressif au réel."
      },
      {
        id: "q12_6",
        question: "Quelle est la meilleure façon de mesurer ses performances ?",
        options: [
          "Uniquement par le profit total en euros",
          "Seulement par le taux de réussite",
          "Par un ensemble de métriques : profit factor, win rate, R:R moyen, drawdown max",
          "En comparant avec la performance d'un autre trader"
        ],
        correct: 2,
        explanation: "Les performances se mesurent avec plusieurs métriques : Profit Factor, Win Rate, R:R moyen, Max Drawdown, Expectancy. Un trader à 40% win rate avec R:R 1:3 est plus rentable qu'un trader à 70% avec R:R 1:0.5."
      }
    ]
  }
]

export const MODULE_CATEGORIES = {
  "Fondamentaux": { color: "violet", icon: "🎯" },
  "Marchés": { color: "blue", icon: "🌍" },
  "Analyse": { color: "teal", icon: "🔍" },
  "Stratégie": { color: "yellow", icon: "⚡" },
  "Pratique": { color: "orange", icon: "🛠️" },
}
