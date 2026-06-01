import type { Project } from '../types';

export const AT_CLOUD: Project = {
    id: "at-cloud",
    title: "AutoTuner Cloud Platform",
    category: ["Development", "UX/UI Design"],
    type: {
      en: "Automotive Software & SaaS",
      fr: "Logiciel Automobile & SaaS",
    },
    date: "2025",
    thumbnail: "/images/projects/autotuner/home_autotuner.jpg",
    description: {
      en: "Architecting a high-performance SaaS ecosystem for the automotive tuning industry leader, bridging complex binary data management with a premium user experience.",
      fr: "Conception d'un écosystème SaaS haute performance pour le leader du tuning automobile, à la croisée de la gestion de données binaires complexes et d'une expérience utilisateur premium.",
    },
    role: {
      en: "Sole UX/UI Designer for the first 6 months, responsible for the full audit of the existing platform, all UX concepts, wireframes, and high-fidelity prototypes. Also heavily involved in frontend integration alongside a second designer who joined later to accelerate delivery.",
      fr: "Seul UX/UI Designer pendant les 6 premiers mois, en charge de l'audit complet de la plateforme existante, de tous les concepts UX, wireframes et prototypes haute fidélité. Fortement impliqué également dans l'intégration frontend, aux côtés d'un second designer arrivé en renfort pour accélérer la livraison.",
    },
    challenge: {
      en: "The existing platform had grown organically over the years, resulting in a fragmented interface full of inconsistencies, complex workflows, and confusing navigation. The challenge was to rethink the entire product experience without disrupting the workflows that power users had built their habits around, while also laying the foundation for a scalable Design System that the development team could maintain long-term.",
      fr: "La plateforme existante avait évolué de manière organique au fil des années, aboutissant à une interface fragmentée, pleine d'incohérences, de parcours complexes et d'une navigation confuse. L'enjeu était de repenser toute l'expérience produit sans désorienter les utilisateurs avancés qui avaient construit leurs habitudes dessus, tout en posant les bases d'un Design System évolutif que l'équipe de développement pourrait maintenir sur le long terme.",
    },
    content: {
      en: "The process started with a thorough audit of the legacy platform, identifying pain points, redundant flows, and structural inconsistencies. Card sorting sessions helped reorganize the information architecture before any screen was designed. From there, the work progressed iteratively: low-fidelity concepts, stakeholder reviews, high-fidelity prototypes, and frontend integration using Svelte. The Design System was built and documented in Storybook in parallel, ensuring every component was reusable and consistent across the growing suite of tools.",
      fr: "La démarche a débuté par un audit approfondi de l'ancienne plateforme, identification des points de friction, des parcours redondants et des incohérences structurelles. Des sessions de tri de cartes ont permis de réorganiser l'architecture de l'information avant de concevoir le moindre écran. Le travail a ensuite progressé de manière itérative : concepts basse fidélité, revues avec les parties prenantes, prototypes haute fidélité, puis intégration frontend en Svelte. Le Design System a été construit et documenté dans Storybook en parallèle, garantissant que chaque composant soit réutilisable et cohérent à travers la suite d'outils en expansion.",
    },
    images: [
      { url: "/images/projects/autotuner/image_0.jpg" },
      { url: "/images/projects/autotuner/mockup-0.png" },
      { url: "/images/projects/autotuner/mockup-1.png" },
      { url: "/images/projects/autotuner/mockup-2.png" },
      { url: "/images/projects/autotuner/mockup-3.png" },
      {
        url: "/images/projects/autotuner/design-1.png",
        caption: { en: "Design system colors", fr: "Couleurs du design system" },
      },
      {
        url: "/images/projects/autotuner/design-2.png",
        caption: {
          en: "Design system fonts, buttons, inputs, etc.",
          fr: "Typographie, boutons, champs de saisie, etc.",
        },
      },
      {
        url: "/images/projects/autotuner/design-3.png",
        caption: {
          en: "Design system spacings, columns, etc.",
          fr: "Espacements, colonnes et grille du design system",
        },
      },
      { url: "/images/projects/autotuner/sidebar.png" },
      {
        url: "/images/projects/autotuner/signup-process.jpg",
        caption: { en: "Signup process", fr: "Parcours d'inscription" },
      },
      { url: "/images/projects/autotuner/device-light.png" },
      { url: "/images/projects/autotuner/device-dark.png" },
      { url: "/images/projects/autotuner/datalog-1.png" },
    ],
    scope: ["Development & UX/UI Design"],
    stack: ["Symfony", "Svelte", "Storybook"],
    focus: [
      "SaaS Product Strategy",
      "Information Architecture",
      "Design System Engineering",
      "Interactive Data Visualization",
    ],
    website: "https://www.autotuner.cloud",
};
