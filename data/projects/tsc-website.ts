import type { Project } from '../types';

export const TSC_WEBSITE: Project = {
    id: "tsc-website",
    title: "TSC Website",
    category: ["UX/UI Design", "Development", "Branding"],
    type: {
      en: "ERP Solutions & Digital Strategy",
      fr: "Solutions ERP & Stratégie Digitale",
    },
    date: "2021",
    thumbnail: "/images/projects/tsc/tsc-website/accueil.jpg",
    description: {
      en: "Development of a high-performance corporate platform to replace a basic template-based site with a bespoke digital showcase.",
      fr: "Développement d'une plateforme corporate performante pour remplacer un site basé sur des templates génériques par une vitrine digitale sur mesure.",
    },
    content: {
      en: "The objective was to design and build a website that fulfills all the requirements of a modern digital company. The project involved rethinking the site's architecture to improve service visibility and lead generation. The result is a fully responsive, engaging platform featuring custom iconography and optimized content, specifically designed to demonstrate the agency's capabilities to prospective clients.",
      fr: "L'objectif était de concevoir et de développer un site répondant à toutes les exigences d'une agence digitale moderne. Le projet a impliqué de repenser l'architecture du site pour améliorer la visibilité des services et optimiser la génération de leads. Le résultat est une plateforme entièrement responsive et engageante, dotée d'une iconographie personnalisée et d'un contenu optimisé, pensée pour démontrer les savoir-faire de l'agence à de futurs clients.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/tsc-website/mockup_1.jpg" },
          { url: "/images/projects/tsc/tsc-website/mockup_2.jpg" },
          { url: "/images/projects/tsc/tsc-website/mockup_3.jpg" },
          { url: "/images/projects/tsc/tsc-website/mockup_4.jpg" },
        ],
      },
    ],
    images: [{ url: "/images/projects/tsc/tsc-website/image_1.jpg" }],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: ["UX/UI Design", "Information Architecture", "SEO Strategy"],
    website: "https://www.tsc-experts.com",
};
