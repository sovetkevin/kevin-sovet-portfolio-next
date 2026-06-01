import type { Project } from '../types';

export const TSC_CORPO: Project = {
    id: "tsc-corpo",
    title: "TSC Branding",
    category: ["Branding", "Visual Communication"],
    type: {
      en: "ERP Solutions & Digital Strategy",
      fr: "Solutions ERP & Stratégie Digitale",
    },
    date: "2021",
    thumbnail: "/images/projects/tsc/tsc-brand/corporate-mockup.jpg",
    description: {
      en: "Evolution of a digital agency's brand image from a generic startup aesthetic to a credible, authoritative, and innovative corporate identity.",
      fr: "Évolution de l'image de marque d'une agence digitale, d'une esthétique générique de startup vers une identité corporate crédible, affirmée et innovante.",
    },
    content: {
      en: "This project involved leading a complete rebranding effort to establish a unique market position. The work focused on creating a distinctive visual identity, including a new logo and a cohesive graphic charter designed to reflect the agency's technical expertise. This branding now serves as the foundation for all internal and external communications, ensuring professional consistency across every touchpoint.",
      fr: "Ce projet a consisté à piloter un rebranding complet pour affirmer un positionnement unique sur le marché. Le travail a porté sur la création d'une identité visuelle distinctive, nouveau logo, charte graphique cohérente, conçue pour refléter l'expertise technique de l'agence. Cette identité sert désormais de socle à l'ensemble des communications internes et externes, garantissant une cohérence professionnelle sur chaque point de contact.",
    },
    images: [
      { url: "/images/projects/tsc/tsc-brand/mockup_logo.jpg" },
      {
        url: "/images/projects/tsc/tsc-brand/evolution.png",
        caption: { en: "Evolution logo TSC", fr: "Évolution du logo TSC" },
      },
      { url: "/images/projects/tsc/tsc-brand/portfolio15.jpg" },
    ],
    scope: ["Branding & Visual Communication"],
    focus: ["Brand Strategy", "Visual Identity System", "Logo Design"],
    website: "https://www.tsc-experts.com",
};
