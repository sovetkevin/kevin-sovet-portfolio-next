import type { Project } from '../types';

export const ONCODNA_WEBSITE: Project = {
    id: "oncodna-website",
    title: "OncoDNA Website",
    category: ["Branding", "UX/UI Design", "Development"],
    type: {
      en: "Precision Oncology & MedTech",
      fr: "Oncologie de Précision & MedTech",
    },
    date: "2019",
    thumbnail: "/images/projects/oncodna/oncodna-website/mockup_1.jpg",
    description: {
      en: "Leading the internal digital transformation for a major genomic and IT oncology company to better serve a global audience.",
      fr: "Pilotage de la transformation digitale interne d'une société d'oncologie génomique et informatique de premier plan, pour mieux servir une audience mondiale.",
    },
    role: {
      en: "Project Manager and lead frontend developer. Responsible for coordinating planning, facilitating workshops with the scientific and marketing teams, and overseeing content strategy for multiple target audiences. Also handled the full frontend integration in Django CMS, working alongside a backend developer.",
      fr: "Chef de projet et développeur frontend principal. En charge de la coordination de la planification, de l'animation d'ateliers avec les équipes scientifiques et marketing, et de la supervision de la stratégie éditoriale pour plusieurs audiences cibles. Également responsable de l'intégration frontend complète sous Django CMS, en collaboration avec un développeur backend.",
    },
    challenge: {
      en: "OncoDNA needed a platform that could speak credibly to three very different audiences: oncologists, BioPharma partners, and patients. Each has a different vocabulary, different expectations, and a different relationship with the science. The challenge was to design a unified content architecture that could adapt its tone and depth depending on who was reading, while projecting the scientific authority that a precision medicine company requires.",
      fr: "OncoDNA avait besoin d'une plateforme capable de s'adresser de manière crédible à trois audiences très différentes : des oncologues, des partenaires BioPharma et des patients. Chacun possède un vocabulaire différent, des attentes différentes et une relation différente avec la science. L'enjeu était de concevoir une architecture de contenu unifiée capable d'adapter son ton et sa profondeur selon le lecteur, tout en projetant l'autorité scientifique qu'une entreprise de médecine de précision exige.",
    },
    content: {
      en: "The process was built around a series of workshops with the scientific, medical, and marketing teams to map out the content needs of each audience. User journey testing helped validate the navigation structure before development. High-fidelity prototypes were produced for all key pages before moving into Django CMS integration. The backend developer handled data modeling and CMS configuration, while frontend templating, animations, and responsive behavior were developed independently.",
      fr: "La démarche s'est construite autour d'une série d'ateliers avec les équipes scientifiques, médicales et marketing pour cartographier les besoins en contenu de chaque audience. Des tests de parcours utilisateurs ont permis de valider la structure de navigation avant le développement. Des prototypes haute fidélité ont été produits pour toutes les pages clés avant de passer à l'intégration sous Django CMS. Le développeur backend a pris en charge la modélisation des données et la configuration du CMS, tandis que le templating frontend, les animations et le comportement responsive ont été développés de manière indépendante.",
    },
    images: [
      { url: "/images/projects/oncodna/oncodna-website/image_1.jpg" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_2.png" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_3.png" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_4.png" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_5.png" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Django CMS", "Python", "SCSS", "JavaScript"],
    focus: [
      "UX/UI Design",
      "Prototyping & Wireframing",
      "Content Strategy",
      "Stakeholder coordination",
      "SEO Strategy",
    ],
    website: "https://www.oncodna.com",
};
