import type { Project } from '../types';

export const PALAIS: Project = {
    id: "palais",
    title: "Pa'lais",
    category: ["UX/UI Design"],
    type: {
      en: "Organic Food Retail",
      fr: "Alimentation Bio & Végétale",
    },
    date: "2021",
    thumbnail: "/images/projects/tsc/palais/home_palais.jpg",
    description: {
      en: "Creative proposal for a bio-organic plant-based brand, aiming to modernize its digital image while staying true to its ethical roots.",
      fr: "Proposition créative pour une marque bio et végétale, avec pour objectif de moderniser son image digitale tout en restant fidèle à ses valeurs éthiques.",
    },
    content: {
      en: "As part of a website redesign tender, the homepage user experience was reimagined to better translate the texture and taste pleasure of the products. The result is a fresh, appetizing interface that bridges the gap between modern aesthetics and product discovery.",
      fr: "Dans le cadre d'un appel d'offres pour la refonte du site, l'expérience utilisateur de la page d'accueil a été entièrement repensée pour mieux retranscrire la texture et le plaisir gustatif des produits. Le résultat est une interface fraîche et appétissante, à mi-chemin entre esthétique contemporaine et découverte produit.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/palais/mockup_1.png" },
          { url: "/images/projects/tsc/palais/mockup_2.png" },
          { url: "/images/projects/tsc/palais/mockup_3.png" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/palais/proto_1.jpg" },
          { url: "/images/projects/tsc/palais/proto_2.jpg" },
          { url: "/images/projects/tsc/palais/proto_3.jpg" },
        ],
      },
    ],
    images: [{ url: "/images/projects/tsc/palais/image_1.jpg" }],
    scope: ["UX/UI Design"],
    focus: [
      "UX/UI Design",
      "Idenitity Modernization",
      "Food Tech UI",
      "Visual Refresh",
    ],
    website: "https://www.palais.bio/fr/",
};
