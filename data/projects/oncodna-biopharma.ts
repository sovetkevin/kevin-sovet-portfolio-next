import type { Project } from '../types';

export const ONCODNA_BIOPHARMA: Project = {
    id: "oncodna-biopharma",
    title: "OncoDNA BioPharma",
    category: ["UX/UI Design"],
    type: {
      en: "Precision Oncology & MedTech",
      fr: "Oncologie de Précision & MedTech",
    },
    date: "2016",
    thumbnail: "/images/projects/oncodna/biopharma/home_biopharma.jpg",
    description: {
      en: "Strategy and design for a specialized digital gateway catering specifically to the pharmaceutical industry's R&D needs.",
      fr: "Stratégie et design d'une passerelle digitale spécialisée, répondant aux besoins R&D spécifiques de l'industrie pharmaceutique.",
    },
    content: {
      en: "This project involved the development of an independent microsite tailored for BioPharma partners. The work focused on creating a professional, data-driven aesthetic distinct from the patient-facing materials. While the microsite was ultimately integrated into the centralized website, the visual language and high-fidelity prototypes heavily influenced the current design system.",
      fr: "Ce projet a consisté à développer un microsite indépendant, pensé pour les partenaires BioPharma. Le travail s'est concentré sur la création d'une esthétique professionnelle et orientée données, distincte des supports destinés aux patients. Bien que le microsite ait finalement été intégré au site centralisé, le langage visuel et les prototypes haute fidélité ont fortement influencé le design system actuel.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/oncodna/biopharma/image_2.jpg" },
          { url: "/images/projects/oncodna/biopharma/image_3.jpg" },
          { url: "/images/projects/oncodna/biopharma/image_4.jpg" },
          { url: "/images/projects/oncodna/biopharma/image_5.jpg" },
        ],
      },
    ],
    images: [
      { url: "/images/projects/oncodna/biopharma/mockup_1.jpg" },
      { url: "/images/projects/oncodna/biopharma/image_1.jpg" },
      { url: "/images/projects/oncodna/biopharma/image_6.jpg" },
    ],
    scope: ["UX/UI Design"],
    focus: [
      "UX/UI Design",
      "R&D Gateway",
      "B2B Digital Strategy",
      "Microsite Design",
    ],
    website: "https://www.oncodna.com",
};
