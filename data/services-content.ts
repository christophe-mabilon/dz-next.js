import { SeoFaq } from "@/types";

/**
 * Contenu éditorial spécifique par service : sections rédigées, FAQ métier
 * et avantages. Rédigé à la main (pas de template) pour que chaque page
 * service ait un contenu réellement distinct — clé anti-duplication,
 * rich snippets FAQ et argumentaire commercial.
 */

export type EditorialBlock = { title: string; paragraphs: string[] };

export const serviceEditorial: Record<string, EditorialBlock[]> = {
  terrassement: [
    {
      title: "Le terrassement, la fondation invisible de votre projet",
      paragraphs: [
        "Un terrassement raté ne se voit pas tout de suite — il se paie des années plus tard : dalle fissurée, terrasse qui s'affaisse, eau qui stagne contre la maison. C'est l'étape qui conditionne tout le reste du chantier, et c'est précisément pour cela qu'elle ne s'improvise pas.",
        "En Nord-Isère, nous travaillons des terrains souvent argileux, parfois en pente, avec des sols qui retiennent l'eau. Notre connaissance du secteur nous permet d'anticiper : sens d'écoulement, portance réelle du sol, profondeur hors gel. Chaque chantier commence par une visite technique gratuite où nous lisons votre terrain avant de chiffrer quoi que ce soit.",
      ],
    },
    {
      title: "Ce que comprend notre prestation",
      paragraphs: [
        "Décapage de la terre végétale, fouilles et tranchées, création de plateformes, empierrement et fonds de forme compactés au niveau laser, drainage, gestion des eaux pluviales et viabilisation (tranchées réseaux) : nous couvrons l'intégralité du terrassement, du premier coup de godet à la plateforme prête à construire.",
        "La question des terres excavées est traitée dès le devis — réutilisation sur place quand c'est possible (c'est autant d'économisé), évacuation en filière agréée sinon. Vous savez exactement ce que vous payez, poste par poste, avant le premier jour de chantier.",
      ],
    },
  ],
  "maconnerie-neuf": [
    {
      title: "Un gros œuvre solide, des fondations à la toiture",
      paragraphs: [
        "Le gros œuvre représente la colonne vertébrale de votre construction : fondations, soubassements, élévation des murs, planchers et chaînages. Un travail précis à cette étape, c'est des décennies de tranquillité ensuite — et une maison qui traverse le temps sans désordre.",
        "Nous construisons dans les règles de l'art : DTU en vigueur, normes parasismiques applicables en Isère, et une étude de sol systématique pour dimensionner les fondations au plus juste. Chaque étape est contrôlée avant de passer à la suivante.",
      ],
    },
    {
      title: "Un seul interlocuteur pour votre projet",
      paragraphs: [
        "De la lecture des plans à la réception du chantier, vous avez un interlocuteur unique qui connaît votre dossier. Nous coordonnons les étapes du gros œuvre avec les autres corps d'état pour que votre projet avance sans temps mort.",
        "Particuliers en maîtrise d'œuvre, architectes, constructeurs : nous adaptons notre intervention à votre organisation, avec un planning contractuel remis dès le devis.",
      ],
    },
  ],
  "renovation-maconnerie": [
    {
      title: "Redonner vie au bâti ancien sans le dénaturer",
      paragraphs: [
        "Le Nord-Isère possède un patrimoine bâti riche : maisons en pisé, murs en pierre, fermes dauphinoises. Ces constructions demandent des techniques spécifiques — un enduit ciment sur un mur en pisé, et c'est l'humidité piégée qui ronge le mur de l'intérieur. Nous utilisons des matériaux compatibles : chaux naturelle, enduits respirants, mortiers adaptés.",
        "Fissures, murs humides, linteaux affaissés : avant de réparer, nous diagnostiquons. Traiter une fissure sans comprendre son origine, c'est la voir revenir dans deux ans.",
      ],
    },
    {
      title: "De la simple reprise à la restructuration complète",
      paragraphs: [
        "Réparation de murs porteurs, reprise en sous-œuvre, création d'ouvertures, consolidation de maçonneries anciennes : nous intervenons sur tous les niveaux de rénovation, de la reprise localisée à la restructuration complète.",
        "Chaque intervention structurelle est couverte par notre garantie décennale, et nous vous accompagnons sur les démarches (déclaration préalable, conformité PLU).",
      ],
    },
  ],
  "agrandissement-maison": [
    {
      title: "Gagner des mètres carrés sans déménager",
      paragraphs: [
        "Une chambre en plus, un bureau, une suite parentale : agrandir sa maison coûte souvent bien moins cher qu'un déménagement — et valorise durablement votre bien. Extension au sol ou surélévation, chaque solution a ses contraintes : nous étudions la faisabilité structurelle et réglementaire avant de vous engager.",
        "La surélévation exige une vérification de la capacité portante des murs et fondations existants ; l'extension au sol, une étude du terrain disponible et du PLU. Dans les deux cas, vous savez où vous allez avant de signer.",
      ],
    },
    {
      title: "Un chantier maîtrisé, une maison habitable",
      paragraphs: [
        "Nous organisons le chantier pour que vous continuiez à vivre chez vous : l'ouverture vers l'existant intervient en toute fin, une fois l'extension close et couverte. Poussière et nuisances restent dehors le plus longtemps possible.",
        "Permis de construire ou déclaration préalable, plans, intégration architecturale : nous vous accompagnons sur le dossier administratif comme sur le chantier.",
      ],
    },
  ],
  "extension-maison": [
    {
      title: "Une extension qui ne fait qu'un avec votre maison",
      paragraphs: [
        "La réussite d'une extension se joue à la jonction avec l'existant. Tassements différentiels, fissures au raccord, pont thermique : ces désordres classiques s'évitent par une conception rigoureuse — joint de rupture entre les fondations, chaînages soignés, raccord de toiture étanche.",
        "Nous dimensionnons les fondations de l'extension d'après une étude de sol récente, indépendamment de celles de la maison : sur les terrains argileux du Nord-Isère, c'est la garantie que les deux structures vieillissent bien ensemble.",
      ],
    },
    {
      title: "Du garage à la pièce à vivre",
      paragraphs: [
        "Garage, cuisine agrandie, séjour traversant, chambre de plain-pied : nous réalisons le gros œuvre complet de votre extension — terrassement, fondations, élévation en parpaing ou brique, plancher, mise hors d'eau.",
        "Le chantier type d'une extension de 20 à 30 m² se déroule sur 6 à 10 semaines pour le gros œuvre, avec un planning précis remis au devis.",
      ],
    },
  ],
  "piscine-terrasse": [
    {
      title: "Une piscine maçonnée, le choix de la durabilité",
      paragraphs: [
        "Une piscine béton bien construite dure plusieurs générations. Radier armé, murs en blocs à bancher ou banchés, ceinture périphérique : la structure maçonnée autorise toutes les formes, toutes les profondeurs, et supporte sans broncher les terrains difficiles.",
        "Nous prenons en charge le terrassement, la structure béton complète et les plages — les lots techniques (étanchéité, filtration) sont réalisés en coordination avec des spécialistes piscine.",
      ],
    },
    {
      title: "Des plages et terrasses qui subliment le bassin",
      paragraphs: [
        "Le tour de piscine mérite autant d'attention que le bassin : béton balayé antidérapant, grès cérame sur plots, dalles avec parement… Nous concevons des plages qui restent agréables pieds nus, évacuent l'eau et vieillissent sans entretien.",
        "Le bon calendrier : terrasser à l'automne, maçonner l'hiver, plonger dès les premiers beaux jours. Nous planifions le chantier pour que l'été ne soit pas perdu.",
      ],
    },
  ],
  "clotures-murs": [
    {
      title: "Des murs qui tiennent, des limites nettes",
      paragraphs: [
        "Un mur de clôture, c'est d'abord une fondation hors gel et un dimensionnement correct — c'est ce qui sépare un mur droit dans vingt ans d'un mur qui penche dans cinq. Parpaing enduit, couvertine, piliers de portail : nous construisons des clôtures durables et conformes au PLU de votre commune.",
        "Le mur de soutènement est un autre métier : il retient des tonnes de terre. Béton armé calculé, drainage à l'arrière, barbacanes — nous concevons ces ouvrages techniques dans les règles, car un soutènement sous-dimensionné est un danger réel.",
      ],
    },
    {
      title: "Conformité et tranquillité",
      paragraphs: [
        "Hauteurs autorisées, implantation en limite de propriété, déclaration préalable : les règles varient d'une commune à l'autre. Nous vérifions le PLU avant travaux et fournissons les plans du dossier administratif.",
        "Fondations, élévation, enduit et finitions : un seul artisan responsable de l'ouvrage complet, couvert par la garantie décennale.",
      ],
    },
  ],
  "abri-de-jardin": [
    {
      title: "Une base solide pour votre abri",
      paragraphs: [
        "Un abri de jardin posé sur un sol mal préparé se déforme, prend l'humidité et vieillit mal. La dalle béton ferraillée sur hérisson compacté reste la meilleure assise : plane, saine, durable — elle protège votre abri des remontées d'humidité et garantit un montage sans mauvaise surprise.",
        "Nous réalisons aussi des abris entièrement maçonnés : murs parpaing enduits assortis à la maison, plus durables qu'un kit bois, utilisables en atelier ou local technique de piscine.",
      ],
    },
    {
      title: "Les règles à connaître",
      paragraphs: [
        "Au-delà de 5 m², un abri est soumis à déclaration préalable ; au-delà de 20 m², au permis de construire — et la taxe d'aménagement s'applique dès 5 m². Nous vous aidons à caler la surface au plus juste de votre besoin et des règles locales.",
        "Le chantier dalle se déroule en 2 à 3 jours ; comptez ensuite quelques semaines de séchage avant le montage de l'abri, selon la saison.",
      ],
    },
  ],
  "dalle-beton": [
    {
      title: "La dalle béton, un ouvrage plus technique qu'il n'y paraît",
      paragraphs: [
        "Couler du béton est facile ; réaliser une dalle qui ne fissure pas, ne retient pas l'eau et reste plane pendant trente ans l'est beaucoup moins. Tout se joue dans la préparation : fond de forme compacté, hérisson drainant, film polyane, treillis positionné à mi-épaisseur, joints de fractionnement aux bons endroits.",
        "Sur les terrains argileux du Nord-Isère, la préparation du support est encore plus déterminante : un sol qui gonfle et se rétracte au fil des saisons casse les dalles mal assises. Notre connaissance des sols locaux fait la différence.",
      ],
    },
    {
      title: "Terrasse, garage, atelier : à chaque usage sa dalle",
      paragraphs: [
        "Une terrasse piétonne n'exige pas la même dalle qu'un garage qui reçoit deux véhicules : épaisseur (12 à 15 cm), ferraillage, dosage béton et finition varient selon l'usage. Lissée mécaniquement, talochée fine ou balayée antidérapante — nous adaptons la finition à votre projet.",
        "Pompe à béton pour les accès difficiles, calepinage des joints, cure par temps chaud : chaque détail d'exécution compte, et c'est notre travail de n'en négliger aucun.",
      ],
    },
  ],
  "dalles-sur-plot": [
    {
      title: "La terrasse moderne, démontable et sans contrainte",
      paragraphs: [
        "Les dalles sur plots ont conquis les terrasses contemporaines pour de bonnes raisons : pose sans colle ni mortier, planéité parfaite même sur support irrégulier, et l'eau s'écoule librement dessous — fini les flaques et le gel en surface.",
        "C'est aussi la solution reine sur toit-terrasse et étanchéité : aucun percement, aucune charge de mortier, et un accès permanent aux réseaux ou à l'étanchéité en soulevant simplement une dalle.",
      ],
    },
    {
      title: "Grès cérame 20 mm : l'esthétique sans l'entretien",
      paragraphs: [
        "Le grès cérame épaisseur 20 mm est ingélif, antidérapant, insensible aux taches et aux UV : l'aspect pierre naturelle ou bois, sans le vieillissement. Sur plots réglables, il rattrape les pentes et niveaux au millimètre.",
        "Nous préparons le support (dalle, gravier compacté ou étanchéité), calepinons la pose et traitons les rives — pour une terrasse nette, stable et definitivement sans entretien.",
      ],
    },
  ],
};

export const serviceFaqs: Record<string, SeoFaq[]> = {
  "maconnerie-neuf": [
    {
      question: "Quelles normes respectez-vous pour une construction neuve ?",
      answer:
        "Nos constructions respectent les DTU maçonnerie (20.1, 13.3), la réglementation environnementale RE2020 et les règles parasismiques applicables en Isère (zone de sismicité 3 modérée). Chaque chantier démarre par une étude de sol conforme.",
    },
    {
      question: "Réalisez-vous uniquement le gros œuvre ou aussi le clos couvert ?",
      answer:
        "Nous réalisons le gros œuvre complet : fondations, soubassement, élévation des murs, planchers et chaînages. Nous pouvons livrer hors d'eau hors d'air en coordination avec charpentier et menuisier partenaires.",
    },
    {
      question: "Quel délai pour le gros œuvre d'une maison individuelle ?",
      answer:
        "Comptez généralement 3 à 5 mois pour le gros œuvre d'une maison de plain-pied de 100 m², selon la complexité du terrain et la météo. Un planning précis est remis avec le devis.",
    },
    {
      question: "Travaillez-vous avec des constructeurs ou uniquement des particuliers ?",
      answer:
        "Les deux : nous intervenons en direct pour les particuliers qui font construire en maîtrise d'œuvre, et en sous-traitance gros œuvre pour des constructeurs et architectes du Nord-Isère.",
    },
  ],
  "renovation-maconnerie": [
    {
      question: "Pouvez-vous rénover des murs en pisé, fréquents dans le Nord-Isère ?",
      answer:
        "Oui. Le bâti ancien du Nord-Isère compte beaucoup de constructions en pisé (terre crue). Nous utilisons des enduits à la chaux respirants et évitons le ciment qui piège l'humidité et dégrade ces murs.",
    },
    {
      question: "Comment traitez-vous les fissures sur un mur ?",
      answer:
        "Nous diagnostiquons d'abord l'origine (retrait-gonflement des argiles, tassement, défaut de chaînage). Selon le cas : agrafage, reprise en sous-œuvre, joint de dilatation, puis reprise de la maçonnerie. Une fissure évolutive justifie un suivi avant réparation.",
    },
    {
      question: "Faut-il une autorisation pour ouvrir un mur porteur ?",
      answer:
        "Dans une maison individuelle, une ouverture intérieure ne demande pas d'autorisation d'urbanisme. En copropriété, l'accord de la copropriété et une étude structure sont nécessaires. Dans tous les cas, nous réalisons l'ouverture dans les règles : étaiement, linteau dimensionné, reprise des charges.",
    },
    {
      question: "Peut-on ouvrir un mur porteur dans une maison en pisé ?",
      answer:
        "Oui, mais le pisé demande une méthode spécifique : passes de découpe courtes, appuis élargis et reprise immédiate pour ne jamais laisser le mur travailler à vide. C'est une intervention que nous pratiquons régulièrement dans le bâti ancien du Nord-Isère.",
    },
  ],
  "agrandissement-maison": [
    {
      question: "Permis de construire ou déclaration préalable pour agrandir ?",
      answer:
        "Jusqu'à 40 m² d'emprise en zone urbaine avec PLU, une déclaration préalable suffit ; au-delà, permis de construire. Si la surface totale dépasse 150 m² après travaux, le recours à un architecte devient obligatoire.",
    },
    {
      question: "Une surélévation est-elle possible sur ma maison ?",
      answer:
        "Cela dépend de la capacité des fondations et murs porteurs à reprendre la charge. Nous réalisons une étude de structure préalable ; si nécessaire, un renforcement des fondations est chiffré dans le devis.",
    },
    {
      question: "Quel budget pour un agrandissement de 30 m² ?",
      answer:
        "En gros œuvre, comptez généralement 1 200 à 1 800 €/m² selon le terrain, l'accès et la complexité de la jonction avec l'existant. Une surélévation coûte davantage qu'une extension au sol.",
    },
    {
      question: "Peut-on habiter la maison pendant les travaux ?",
      answer:
        "Oui dans la grande majorité des cas : l'ouverture vers l'existant est réalisée en fin de chantier, ce qui limite poussière et nuisances au strict minimum.",
    },
  ],
  "extension-maison": [
    {
      question: "Comment garantir la liaison entre l'extension et la maison ?",
      answer:
        "La jonction est le point critique : nous désolidarisons les fondations (joint de rupture) pour éviter les fissures liées aux tassements différentiels, et nous soignons l'étanchéité et le raccord de toiture.",
    },
    {
      question: "L'extension doit-elle avoir les mêmes fondations que la maison ?",
      answer:
        "Pas nécessairement : les fondations de l'extension sont dimensionnées d'après l'étude de sol récente. Sur terrain argileux, fréquent en Nord-Isère, elles descendent souvent plus profond que celles de l'existant.",
    },
    {
      question: "Extension en parpaing ou en brique ?",
      answer:
        "Les deux se pratiquent. Le parpaing offre le meilleur rapport solidité/prix ; la brique apporte une meilleure inertie. Nous conseillons selon le bâti existant, la performance visée et votre budget.",
    },
    {
      question: "Quelle durée de chantier pour une extension de 20-30 m² ?",
      answer:
        "Le gros œuvre demande en général 6 à 10 semaines : terrassement, fondations, élévation, plancher/toiture, jonction. Les finitions intérieures s'ajoutent selon les corps d'état choisis.",
    },
  ],
  "piscine-terrasse": [
    {
      question: "Réalisez-vous la piscine complète ou uniquement le bassin maçonné ?",
      answer:
        "Nous réalisons le terrassement, le bassin béton (radier + murs banchés ou blocs à bancher), les plages et la terrasse. L'étanchéité, le liner et la filtration sont posés par nos pisciniers partenaires.",
    },
    {
      question: "Quelle terrasse autour d'une piscine : béton, bois, carrelage ?",
      answer:
        "Le béton balayé est antidérapant, durable et sans entretien — idéal en plage de piscine. Le grès cérame sur plots est une belle alternative : drainant, réglable au millimètre et très élégant. Nous chiffrons les deux options.",
    },
    {
      question: "Faut-il un permis pour une piscine enterrée ?",
      answer:
        "De 10 à 100 m² de bassin, une déclaration préalable suffit dans la plupart des cas. Un abri de plus de 1,80 m de haut ou un bassin de plus de 100 m² exigent un permis de construire.",
    },
    {
      question: "Quelle est la meilleure période pour construire une piscine ?",
      answer:
        "L'automne et l'hiver : le terrassement se planifie plus facilement, et la piscine est prête pour l'été. Les sols du Nord-Isère se prêtent bien aux chantiers hors gel.",
    },
  ],
  "clotures-murs": [
    {
      question: "Quelle hauteur maximale pour un mur de clôture ?",
      answer:
        "La règle générale du Code civil prévoit 2,60 m dans les communes de moins de 50 000 habitants, mais le PLU local peut fixer d'autres limites. Nous vérifions systématiquement les règles de votre commune avant le devis.",
    },
    {
      question: "Mur de soutènement : quelles précautions sur terrain en pente ?",
      answer:
        "Un mur de soutènement reprend la poussée des terres : il exige un dimensionnement béton armé, un drainage à l'arrière (drain + barbacanes) et des fondations adaptées. C'est un ouvrage technique que nous calculons, pas un simple mur.",
    },
    {
      question: "Quel prix au mètre linéaire pour un mur de clôture ?",
      answer:
        "Pour un mur parpaing enduit de 1,60 à 2 m de haut, comptez généralement 150 à 300 €/ml selon fondation, hauteur et finition. Un mur de soutènement se chiffre après étude, la poussée des terres changeant tout.",
    },
    {
      question: "La clôture doit-elle être déclarée en mairie ?",
      answer:
        "Dans la plupart des communes dotées d'un PLU, l'édification d'une clôture est soumise à déclaration préalable. Nous fournissons les plans nécessaires au dossier.",
    },
  ],
  terrassement: [
    {
      question: "Quels engins utilisez-vous pour le terrassement ?",
      answer:
        "Des mini-pelles et engins de terrassement adaptés à la taille et à l'accès de chaque chantier, avec godets appropriés. Les accès difficiles ou étroits sont étudiés lors de la visite technique gratuite.",
    },
    {
      question: "Que faites-vous des terres excavées ?",
      answer:
        "Trois options chiffrées au devis : réutilisation sur place (remblais, nivellement), régalage sur votre terrain, ou évacuation en filière agréée. L'évacuation représente souvent 30 à 40 % du budget terrassement.",
    },
    {
      question: "Le terrassement est-il possible en hiver ?",
      answer:
        "Oui, sauf sol gelé en profondeur ou fortes pluies prolongées. Les terres argileuses du Nord-Isère se travaillent d'ailleurs mieux hors période de saturation en eau.",
    },
    {
      question: "Réalisez-vous les VRD (tranchées et réseaux) ?",
      answer:
        "Oui : tranchées de réseaux (eau, électricité, télécom), drainage périphérique et gestion des eaux pluviales.",
    },
  ],
  "abri-de-jardin": [
    {
      question: "Quelle dalle pour un abri de jardin ?",
      answer:
        "Une dalle béton de 10 à 12 cm d'épaisseur, ferraillée, sur hérisson de graves compactées, avec un débord de 5 cm environ. Elle garantit la planéité et protège l'abri des remontées d'humidité.",
    },
    {
      question: "Un abri de jardin nécessite-t-il une autorisation ?",
      answer:
        "Jusqu'à 5 m² : rien. De 5 à 20 m² : déclaration préalable. Au-delà de 20 m² : permis de construire. Attention aussi à la taxe d'aménagement, calculée dès 5 m².",
    },
    {
      question: "Construisez-vous des abris maçonnés en dur ?",
      answer:
        "Oui : murs parpaing enduits, sur dalle béton, avec charpente simple. Plus durable qu'un abri bois et sans entretien, il peut aussi servir d'atelier ou de local technique piscine.",
    },
    {
      question: "Quel délai pour une dalle d'abri de jardin ?",
      answer:
        "Le chantier type (terrassement, coffrage, ferraillage, coulage) se fait en 2 à 3 jours, plus 2 à 4 semaines de séchage avant le montage de l'abri selon la saison.",
    },
  ],
  "dalle-beton": [
    {
      question: "Quelle épaisseur pour une dalle béton ?",
      answer:
        "12 cm pour une terrasse piétonne, 15 cm pour un garage ou un accès véhicule, avec treillis soudé adapté et béton dosé à 350 kg/m³. Sur les argiles du Nord-Isère, la préparation du support est aussi importante que la dalle elle-même.",
    },
    {
      question: "Combien de temps de séchage avant utilisation ?",
      answer:
        "Circulation piétonne après 48-72 h, montage de cloisons après 1 semaine, résistance complète à 28 jours. Pour un carrelage, attendez 4 à 8 semaines selon l'épaisseur et la saison.",
    },
    {
      question: "Dalle qui fissure : comment l'éviter ?",
      answer:
        "Support compacté, béton correctement dosé, treillis positionné à mi-épaisseur, joints de fractionnement tous les 20-25 m² et cure par temps chaud. Ce sont ces règles de l'art qui font la différence à 10 ans.",
    },
    {
      question: "Quel prix au m² pour une dalle béton ?",
      answer:
        "Comptez généralement 60 à 90 €/m² pose comprise pour une dalle standard, davantage pour un accès difficile nécessitant une pompe à béton.",
    },
  ],
  "dalles-sur-plot": [
    {
      question: "Quels avantages des dalles sur plots par rapport à une dalle béton ?",
      answer:
        "Pose sans colle ni joint, démontable, parfaite planéité même sur support irrégulier, et l'eau s'évacue dessous : pas de flaque ni de gel en surface. Idéal sur une étanchéité de toit-terrasse qu'il ne faut pas percer.",
    },
    {
      question: "Sur quel support poser des dalles sur plots ?",
      answer:
        "Dalle béton existante, étanchéité de toiture-terrasse, ou lit de graves compactées. Les plots réglables (de 8 à 200 mm et plus) rattrapent les pentes et niveaux.",
    },
    {
      question: "Grès cérame ou bois pour la finition ?",
      answer:
        "Le grès cérame 20 mm est ingélif, antidérapant et sans entretien — le choix le plus durable. Les lames bois ou composite se posent sur la même structure de plots avec lambourdes.",
    },
    {
      question: "Les dalles sur plots conviennent-elles autour d'une piscine ?",
      answer:
        "Oui, à condition de choisir un grès cérame antidérapant (classement R11/C) et de soigner les rives. L'évacuation de l'eau sous les dalles évite les zones glissantes.",
    },
  ],
};

export const serviceBenefits: Record<string, string[]> = {
  "maconnerie-neuf": [
    "Étude de sol et fondations dimensionnées (zone sismique 3)",
    "Respect des DTU et de la RE2020",
    "Gros œuvre complet : fondations, murs, planchers, chaînages",
    "Coordination possible jusqu'au hors d'eau hors d'air",
    "Planning contractuel remis avec le devis",
    "Garantie décennale sur la structure",
  ],
  "renovation-maconnerie": [
    "Expérience du bâti ancien du Nord-Isère (pisé, pierre, mollasse)",
    "Enduits chaux respirants adaptés aux murs anciens",
    "Diagnostic fissures avant toute réparation",
    "Accompagnement déclaration préalable et démarches d'urbanisme",
    "Reprise en sous-œuvre maîtrisée",
    "Garantie décennale sur les travaux structurels",
  ],
  "agrandissement-maison": [
    "Étude de faisabilité structure avant engagement",
    "Accompagnement permis de construire / DP",
    "Surélévation ou extension au sol selon votre terrain",
    "Jonction à l'existant sans désordre (joint de rupture)",
    "Maison habitable pendant le chantier",
    "Garantie décennale sur l'ouvrage complet",
  ],
  "extension-maison": [
    "Fondations dimensionnées d'après étude de sol récente",
    "Joint de rupture anti-fissures à la jonction",
    "Parpaing ou brique selon bâti existant et budget",
    "Gros œuvre en 6 à 10 semaines (20-30 m²)",
    "Intégration architecturale soignée",
    "Garantie décennale",
  ],
  "piscine-terrasse": [
    "Bassin béton armé : radier et murs banchés",
    "Terrassement et évacuation des terres inclus",
    "Plages antidérapantes : béton balayé, grès cérame sur plots",
    "Coordination avec pisciniers partenaires",
    "Chantier planifié hors saison pour un été dans l'eau",
    "Garantie décennale sur la structure du bassin",
  ],
  "clotures-murs": [
    "Vérification du PLU et des limites avant travaux",
    "Murs de soutènement calculés (drainage, béton armé)",
    "Fondations hors gel systématiques",
    "Finitions enduit ou couvertine au choix",
    "Dossier de déclaration préalable fourni",
    "Garantie décennale sur les ouvrages",
  ],
  terrassement: [
    "Engins adaptés à chaque chantier et à ses accès",
    "Devis distinguant réutilisation et évacuation des terres",
    "Connaissance des sols argileux du Nord-Isère",
    "VRD : tranchées de réseaux et eaux pluviales",
    "Nivellement laser et fonds de forme compactés",
    "Intervention rapide, y compris en hiver",
  ],
  "abri-de-jardin": [
    "Dalle ferraillée sur hérisson compacté",
    "Conseil autorisation (DP dès 5 m²) et taxe d'aménagement",
    "Abris maçonnés en dur possibles",
    "Chantier dalle en 2-3 jours",
    "Implantation au cordeau et niveau laser",
    "Devis gratuit sous 24h",
  ],
  "dalle-beton": [
    "Épaisseur et ferraillage adaptés à l'usage (12-15 cm)",
    "Béton dosé 350 kg/m³, joints de fractionnement",
    "Support compacté : la garantie anti-fissures",
    "Finitions : lissée, talochée ou balayée selon l'usage",
    "Pompe à béton pour les accès difficiles",
    "Garantie décennale",
  ],
  "dalles-sur-plot": [
    "Pose sans percer l'étanchéité (toit-terrasse)",
    "Plots réglables : rattrapage de pente parfait",
    "Grès cérame 20 mm ingélif et antidérapant",
    "Démontable pour accès aux réseaux",
    "Évacuation de l'eau sous les dalles",
    "Pose rapide et sans temps de séchage",
  ],
};
