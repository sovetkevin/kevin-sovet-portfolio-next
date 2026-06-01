import type { Project } from '../types';

export const ALLEN_KEAPLER: Project = {
    id: "allen-keapler",
    title: "Allen Keapler",
    category: ["Visual Communication"],
    type: {
      en: "Real Estate & Property Tech",
      fr: "Immobilier & PropTech",
    },
    date: "2021",
    thumbnail: "/images/projects/allenkeapler/mockup_1.jpg",
    description: {
      en: "Visual communication for a high-end real estate holding specializing in exceptional properties and luxury estates.",
      fr: "Communication visuelle pour une holding immobilière haut de gamme spécialisée dans les propriétés d'exception et les domaines de prestige.",
    },
    content: {
      en: "In support of the agency's premium positioning, a series of elegant marketing leaflets was designed. The creative direction focused on showcasing prestigious properties, from contemporary villas to historic castles, through sophisticated layouts that align with the high standards of the real estate investment world.",
      fr: "Pour soutenir le positionnement premium de l'agence, une série de brochures marketing élégantes a été conçue. La direction créative s'est articulée autour de la mise en valeur de propriétés de prestige, villas contemporaines, châteaux historiques, à travers des compositions sophistiquées à la hauteur des exigences du monde de l'investissement immobilier.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/allenkeapler/image_1.jpg",
            caption: { en: "Cover images for facebook", fr: "Visuels de couverture Facebook" },
          },
          {
            url: "/images/projects/allenkeapler/image_2.jpg",
            caption: { en: "Cover images for facebook", fr: "Visuels de couverture Facebook" },
          },
          {
            url: "/images/projects/allenkeapler/image_3.jpg",
            caption: { en: "Cover images for facebook", fr: "Visuels de couverture Facebook" },
          },
          {
            url: "/images/projects/allenkeapler/image_4.jpg",
            caption: { en: "Cover images for facebook", fr: "Visuels de couverture Facebook" },
          },
          {
            url: "/images/projects/allenkeapler/image_5.jpg",
            caption: { en: "Cover images for facebook", fr: "Visuels de couverture Facebook" },
          },
        ],
      },
    ],
    images: [
      { url: "/images/projects/allenkeapler/portfolio14.jpg" },
      { url: "/images/projects/allenkeapler/mockup_1.jpg" },
      { url: "/images/projects/allenkeapler/mockup_2.jpg" },
    ],
    scope: ["Visual Communication"],
    focus: [
      "Editorial Design",
      "Leaflets",
      "Brand Consistency",
      "Print Production",
      "Premium Visual Identity",
    ],
    website: "https://www.allenkeapler.be/",
};
