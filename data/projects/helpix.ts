import type { Project } from '../types';

export const HELPIX: Project = {
  id: "helpix",
  title: "Helpix",
  category: ["UX/UI Design", "Branding", "Development"],
  type: {
    en: "E-commerce & Device Repair",
    fr: "E-commerce & Réparation de Smartphones",
  },
  date: "2020",
  thumbnail: "/images/projects/tsc/helpix/home_helpix.jpg",
  description: {
    en: "Design of a complex e-commerce sales funnel for a leader in the Belgian smartphone repair market.",
    fr: "Conception d'un tunnel de vente e-commerce complexe pour un acteur majeur du marché belge de la réparation de smartphones.",
  },
  role: {
    en: "Only UX/UI designer on the project, from initial workshops to final prototypes. Worked alongside a dedicated frontend developer who handled the technical integration into Odoo. Also responsible for the brand identity, ensuring visual consistency across the full customer experience.",
    fr: "Seul designer UX/UI sur le projet, des premiers ateliers jusqu'aux prototypes finaux. Collaboration avec un développeur frontend dédié pour l'intégration technique sous Odoo. Également responsable de l'identité de marque, garantissant la cohérence visuelle sur l'ensemble de l'expérience client.",
  },
  challenge: {
    en: "Smartphone repair is a technical, fragmented process — different brands, models, repair types, accessories. The existing user experience reflected that complexity: too many steps, unclear options, and a general lack of reassurance at the most critical moments of the funnel. The challenge was to transform a technically complex ordering process into something simple, fast, and confidence-inspiring, without oversimplifying the underlying logic.",
    fr: "La réparation de smartphones est un processus technique et fragmenté : marques, modèles, types de réparation, accessoires différents. L'expérience utilisateur existante reflétait cette complexité : trop d'étapes, des options peu claires et un manque général de réassurance aux moments les plus critiques du tunnel. L'enjeu était de transformer un processus de commande techniquement complexe en quelque chose de simple, rapide et rassurant, sans trop simplifier la logique sous-jacente.",
  },
  content: {
    en: "The process started with UX/UI workshops involving both the client team and end users, mapping the existing journey and identifying the main friction points. The information architecture was restructured around three clear entry paths: repair order, accessory purchase, and device trade-in. Wireframes were iterated with the client before moving to high-fidelity prototypes. Special attention was paid to the repair selection flow — reducing the number of steps while keeping every option visible and accessible. The frontend developer integrated the final designs into Odoo, with custom styling to align with the new brand identity.",
    fr: "La démarche a débuté par des ateliers UX/UI impliquant à la fois l'équipe client et des utilisateurs finaux, pour cartographier le parcours existant et identifier les principaux points de friction. L'architecture de l'information a été restructurée autour de trois parcours d'entrée clairs : commande de réparation, achat d'accessoires et reprise d'appareil. Les wireframes ont été itérés avec le client avant de passer aux prototypes haute fidélité. Une attention particulière a été portée au parcours de sélection de réparation, réduisant le nombre d'étapes tout en maintenant chaque option visible et accessible. Le développeur frontend a intégré les designs finaux dans Odoo, avec un styling personnalisé pour s'aligner sur la nouvelle identité de marque.",
  },
  contentBlocks: [
    {
      type: "carousel",
      images: [
        {
          url: "/images/projects/tsc/helpix/wireframe_1.jpg",
          caption: { en: "Wireframes low fidelity", fr: "Wireframes basse fidélité" },
        },
        {
          url: "/images/projects/tsc/helpix/wireframe_2.jpg",
          caption: { en: "Wireframes high fidelity", fr: "Wireframes haute fidélité" },
        },
      ],
    },
    {
      type: "carousel",
      images: [
        {
          url: "/images/projects/tsc/helpix/process_1.png",
          caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
        },
        {
          url: "/images/projects/tsc/helpix/process_2.png",
          caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
        },
        {
          url: "/images/projects/tsc/helpix/process_3.png",
          caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
        },
        {
          url: "/images/projects/tsc/helpix/process_4.png",
          caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
        },
        {
          url: "/images/projects/tsc/helpix/process_5.png",
          caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
        },
        {
          url: "/images/projects/tsc/helpix/process_6.png",
          caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
        },
        {
          url: "/images/projects/tsc/helpix/process_7.png",
          caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
        },
      ],
    },
  ],
  images: [{ url: "/images/projects/tsc/helpix/image_1.jpg" }],
  scope: ["Branding, UX/UI Design & Development"],
  stack: ["Odoo", "HTML", "SCSS", "JavaScript"],
  focus: [
    "Brand Identity",
    "E-commerce UX/UI",
    "User Journey Mapping",
    "Conversion Optimization",
  ],
};