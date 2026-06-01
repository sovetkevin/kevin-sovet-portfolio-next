import type { Project } from '../types';

export const TMS_WEBSITE: Project = {
    id: "tms-website",
    title: "TMS Group Website",
    category: ["Development", "UX/UI Design", "Branding"],
    type: {
      en: "Consulting & Digital Strategy",
      fr: "Conseil & Stratégie Digitale",
    },
    date: "April 2026",
    thumbnail: "/images/projects/tms/home_tms.jpg",
    description: {
      en: "A proactive end-to-end digital transformation for TMS Group, evolving from a strategic vision to a fully functional React-based platform.",
      fr: "Une transformation digitale proactive de A à Z pour TMS Group, passant d'une vision stratégique à une plateforme React entièrement fonctionnelle.",
    },
    role: {
      en: "Complete ownership of the project, from strategic positioning to production. Every element was self-initiated and self-directed: content strategy, copywriting, UX architecture, visual design, and full frontend integration in React and Vite.",
      fr: "Prise en charge complète du projet, du positionnement stratégique jusqu'à la mise en production. Chaque élément a été initié et dirigé de manière autonome : stratégie éditoriale, rédaction, architecture UX, design visuel et intégration frontend complète en React et Vite.",
    },
    challenge: {
      en: "TMS Group had no digital presence that reflected its actual value as a consultancy. The challenge was to build a platform from scratch, without a brief, without a client validation process, and without a guaranteed launch. Defining the positioning, the narrative, and the technical architecture all at once, while keeping the result credible and production-ready.",
      fr: "TMS Group n'avait pas de présence digitale à la hauteur de sa valeur réelle en tant que société de conseil. L'enjeu était de construire une plateforme de zéro, sans brief, sans processus de validation client, et sans garantie de lancement. Définir le positionnement, la narration et l'architecture technique simultanément, tout en livrant un résultat crédible et prêt pour la production.",
    },
    content: {
      en: "The project started with a positioning exercise: defining what TMS Group actually sells, who it talks to, and how it should present itself to both clients and potential consultants. From there, the information architecture was structured around three core audiences. High-fidelity prototypes were built in Figma before moving to development. The full frontend was integrated in React and Vite, with a focus on performance and scalability. Although a strategic shift within the company prevented an official launch, the project was completed in full.",
      fr: "Le projet a débuté par un exercice de positionnement : définir ce que TMS Group vend réellement, à qui il s'adresse, et comment se présenter à la fois aux clients et aux consultants potentiels. De là, l'architecture de l'information a été structurée autour de trois audiences principales. Des prototypes haute fidélité ont été réalisés dans Figma avant de passer au développement. L'intégralité du frontend a été intégrée en React et Vite, avec un accent sur la performance et l'évolutivité. Bien qu'un changement stratégique au sein de l'entreprise ait empêché le lancement officiel, le projet a été mené à son terme.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tms/image_ca_1.jpg" },
          { url: "/images/projects/tms/image_ca_2.jpg" },
          { url: "/images/projects/tms/image_ca_3.jpg" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tms/page_home.jpg" },
          { url: "/images/projects/tms/page_services.jpg" },
          { url: "/images/projects/tms/page_consultants.jpg" },
          { url: "/images/projects/tms/page_companies.jpg" },
          { url: "/images/projects/tms/page_about.jpg" },
          { url: "/images/projects/tms/page_contact.jpg" },
          { url: "/images/projects/tms/page_career.jpg" },
          { url: "/images/projects/tms/page_career_in.jpg" },
        ],
      },
    ],
    images: [{ url: "/images/projects/tms/image_tms_1.jpg" }],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["React", "Vite", "TypeScript"],
    focus: [
      "Interactive Prototyping",
      "Brand Storytelling",
      "Information Architecture",
      "Technical Problem Solving",
    ],
    website: "https://tms-website.by-sovet.me/",
};
