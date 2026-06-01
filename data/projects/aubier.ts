import type { Project } from '../types';

export const AUBIER: Project = {
    id: "aubier",
    title: "L'Aubier",
    category: ["UX/UI Design", "Development"],
    type: {
      en: "Craftsmanship & Interior Design",
      fr: "Artisanat & Design d'Intérieur",
    },
    date: "2021",
    thumbnail: "/images/projects/tsc/aubier/home_aubier.jpg",
    description: {
      en: "Digital transformation for a high-end carpentry business with a 35-year legacy, moving from social media presence to a premium web showcase.",
      fr: "Transformation digitale pour une entreprise de menuiserie haut de gamme forte de 35 ans d'histoire, passant d'une simple présence sur les réseaux sociaux à une vitrine web premium.",
    },
    content: {
      en: "The project focused on structuring a content architecture that highlights craftsmanship in custom furniture and interior fittings. High-fidelity prototypes with fluid interactions were developed to mirror the elegance of the woodwork. The final result involved close collaboration with the development team for a pixel-perfect WordPress integration.",
      fr: "Le projet s'est concentré sur la structuration d'une architecture de contenu valorisant le savoir-faire en matière de mobilier sur mesure et d'aménagement intérieur. Des prototypes haute fidélité aux interactions soignées ont été développés pour refléter l'élégance des réalisations en bois. Le résultat final a nécessité une collaboration étroite avec l'équipe de développement pour une intégration WordPress au pixel près.",
    },
    images: [
      { url: "/images/projects/tsc/aubier/image_0.jpg" },
      { url: "/images/projects/tsc/aubier/image_1.jpg" },
    ],
    scope: ["UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: ["UX/UI Design", "UX Strategy", "Content Architecture"],
    website: "https://www.aubier.be/",
};
