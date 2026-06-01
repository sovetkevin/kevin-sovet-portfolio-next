import type { Project } from '../types';

export const GRIT_GYM: Project = {
  id: "grit-gym",
  title: "GRIT Gym Club",
  category: ["UX/UI Design"],
  type: {
    en: "E-commerce & Fitness",
    fr: "E-commerce & Fitness",
  },
  date: "April 2026",
  thumbnail: "/images/projects/grit/home_grit.jpg",
  description: {
    en: "Strategic UX/UI design challenge for a fictional fitness brand, demonstrating full-stack design thinking from typography system to high-fidelity e-commerce prototypes.",
    fr: "Exercice de design stratégique UX/UI pour une marque de fitness fictive, illustrant une démarche de conception complète, du système typographique aux prototypes e-commerce haute fidélité.",
  },
  role: {
    en: "Recruitment exercise for an Odoo Web Designer position. Responsible for the entire design process: brand identity, typography system, low-fidelity wireframes, and high-fidelity prototypes, all delivered within one week, in parallel with another live development project.",
    fr: "Exercice de recrutement pour un poste de Web Designer chez Odoo. Responsable de l'intégralité du processus de design : identité de marque, système typographique, wireframes basse fidélité et prototypes haute fidélité, le tout livré en une semaine, en parallèle d'un autre projet de développement en cours pour le même poste.",
  },
  challenge: {
    en: "Designing a credible, premium fitness brand from scratch under a one-week deadline, while simultaneously handling another development project. The brief required demonstrating the full design methodology: from foundational decisions like typography and visual identity, through structural wireframing with Odoo's Wireframe Library, to polished high-fidelity prototypes. Every decision had to be intentional and justifiable under time pressure.",
    fr: "Concevoir une marque de fitness crédible et premium de zéro en une semaine, tout en gérant en parallèle un autre projet de développement. Le brief demandait de démontrer une méthodologie de design complète : des fondations typographiques et visuelles, en passant par le cadrage wireframe avec la bibliothèque Odoo, jusqu'aux prototypes haute fidélité finalisés. Chaque décision devait être intentionnelle et justifiable sous contrainte de temps.",
  },
  content: {
    en: "The process started with the typographic design system — defining the visual hierarchy, tone, and brand personality before touching any layout. Low-fidelity wireframes were built using Odoo's official Wireframe Library, ensuring structural alignment with the platform's component logic. From there, the work moved into high-fidelity prototypes in Figma, covering the full e-commerce flow: homepage, membership plans, pricing table, and checkout. The final result balances premium fitness branding with aggressive pricing clarity, two aesthetics that rarely coexist naturally.",
    fr: "La démarche a débuté par le système typographique : définir la hiérarchie visuelle, le ton et la personnalité de la marque avant de toucher au moindre layout. Les wireframes basse fidélité ont été construits avec la bibliothèque Wireframe officielle d'Odoo, garantissant un alignement structurel avec la logique des composants de la plateforme. De là, le travail a progressé vers des prototypes haute fidélité dans Figma, couvrant le parcours e-commerce complet : homepage, plans d'adhésion, tableau tarifaire et checkout. Le résultat final équilibre un branding fitness premium avec une hiérarchie tarifaire lisible et directe, deux esthétiques qui cohabitent rarement naturellement.",
  },
  contentBlocks: [
    {
      type: "carousel",
      images: [
        {
          url: "/images/projects/grit/high-def.jpg",
          caption: { en: "High-fidelity Mockup", fr: "Maquette haute fidélité" },
        },
        {
          url: "/images/projects/grit/low-def.jpg",
          caption: {
            en: "Low-fidelity wireframes (Odoo Library with Bebas font)",
            fr: "Wireframes basse fidélité (Bibliothèque Odoo, police Bebas)",
          },
        },
      ],
    },
  ],
  images: [
    {
      url: "/images/projects/grit/font-system.jpg",
      caption: {
        en: "Design system fonts hierarchy",
        fr: "Hiérarchie typographique du design system",
      },
    },
  ],
  scope: ["UX/UI Design"],
  focus: [
    "Design System Engineering",
    "Odoo Wireframe Library Integration",
    "E-commerce User Flow",
    "Pricing Table UX",
    "Recruitment Case Study",
    "Figma Prototyping",
  ],
};