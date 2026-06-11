import type { Project } from '../types';

export const ROSSEL_MEDIA: Project = {
    id: "rossel-media",
    title: "Rossel Media",
    category: ["Development"],
    type: {
      en: "Mass Media & Digital Publishing",
      fr: "Médias & Édition Numérique",
    },
    date: "2023",
    thumbnail: "/images/projects/rossel/home_rossel.jpg",
    description: {
      en: "Strategic contribution to Belgium's leading media group, optimizing reader engagement and digital retention through high-traffic news interfaces.",
      fr: "Contribution stratégique au premier groupe de presse belge, en optimisant l'engagement des lecteurs et la rétention digitale à travers des interfaces d'information à fort trafic.",
    },
    role: {
      en: "Frontend developer within a two-person team on the full integration of Sudinfo and Le Sillon Belge, from first component to production release. Also part of a larger team of 3-4 frontend and 3-4 backend developers handling maintenance and continuous improvements across Le Soir, RTL, and La Voix du Nord.",
      fr: "Développeur frontend au sein d'une équipe de deux personnes sur l'intégration complète de Sudinfo et Le Sillon Belge, du premier composant jusqu'à la mise en production. Également intégré à une équipe plus large de 3-4 développeurs frontend et 3-4 backend pour la maintenance et l'amélioration continue du Soir, RTL et La Voix du Nord.",
    },
    challenge: {
      en: "Working across multiple press brands simultaneously means navigating a complex constraint: each platform has its own editorial identity, its own audience, and its own business rules, yet all must share the same technical foundation, the same Drupal/Twig architecture, and the same deployment pipeline. Maintaining consistency without erasing distinctiveness was the constant challenge, in a high-pressure environment where a broken feature affects millions of readers.",
      fr: "Travailler sur plusieurs marques de presse simultanément implique de naviguer une contrainte complexe : chaque plateforme a son identité éditoriale propre, son audience, ses règles métier, et pourtant toutes partagent la même base technique, la même architecture Drupal/Twig et le même pipeline de déploiement. Maintenir la cohérence sans effacer la distinctivité était le défi permanent, dans un environnement sous pression où une fonctionnalité cassée impacte des millions de lecteurs.",
    },
    content: {
      en: "Each integration followed a structured process: technical audit of the existing codebase, alignment with the lead developer on the component breakdown, then iterative development with continuous testing across devices and browsers. Newsletter workflows, user profile management, and subscription funnels were optimized across all platforms, requiring a deep understanding of both the editorial and the business logic behind each brand. The complexity of large-scale media systems, where a single template change can cascade across hundreds of article layouts, was a constant learning experience.",
      fr: "Chaque intégration suivait un processus structuré : audit technique du code existant, alignement avec le développeur principal sur le découpage des composants, puis développement itératif avec des tests continus sur les appareils et navigateurs. Les workflows de newsletters, la gestion des profils utilisateurs et les tunnels d'abonnement ont été optimisés sur toutes les plateformes, nécessitant une compréhension approfondie à la fois de la logique éditoriale et business propre à chaque marque. La complexité des systèmes médias à grande échelle, où un seul changement de template peut se répercuter sur des centaines de mises en page d'articles, a été une expérience d'apprentissage permanente.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Image-vdn01.jpg" },
          { url: "/images/projects/rossel/Image-vdn02.jpg" },
          { url: "/images/projects/rossel/Image-vdn03.jpg" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Sudinfo_01.jpg" },
          { url: "/images/projects/rossel/Sudinfo_02.jpg" },
          { url: "/images/projects/rossel/Sudinfo_03.jpg" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Sillon-01.jpg" },
          { url: "/images/projects/rossel/Sillon-03.jpg" },
          { url: "/images/projects/rossel/Sillon-04.jpg" },
        ],
      },
      {
        type: "image",
        image: { url: "/images/projects/rossel/mockup_aplat_sillon.jpg" },
      },
    ],
    scope: ["Development"],
    stack: ["Drupal", "Twig", "SCSS","JavaScript"],
    focus: [
      "Multi-Brand Design Systems",
      "User Journey Optimization",
      "CMS Management",
      "Email Marketing",
      "Subscription Funnel Design",
    ],
    website: "https://www.rossel.be/",
};
