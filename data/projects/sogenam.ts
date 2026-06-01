import type { Project } from '../types';

export const SOGENAM: Project = {
    id: "sogenam",
    title: "Sogenam",
    category: ["Branding", "Development", "UX/UI Design"],
    type: {
      en: "Financial & Tax Consulting",
      fr: "Conseil Financier & Fiscal",
    },
    date: "2022",
    thumbnail: "/images/projects/tsc/sogenam/home_sogenam.jpg",
    description: {
      en: "Modernizing the image of a long-standing fiduciary group by making accounting expertise accessible and human without compromising professional rigor.",
      fr: "Modernisation de l'image d'un groupe fiduciaire historique, pour rendre l'expertise comptable accessible et humaine sans sacrifier la rigueur professionnelle.",
    },
    content: {
      en: "A new modern graphic identity and showcase website were designed for the group. By introducing team photography and refining the visual vocabulary, the client relationship was humanized.",
      fr: "Une nouvelle identité graphique moderne et un site vitrine ont été conçus pour le groupe. L'introduction de photographies d'équipe et l'affinage du vocabulaire visuel ont permis de donner un visage plus humain à la relation client.",
    },
    images: [
      { url: "/images/projects/tsc/sogenam/image_0.jpg" },
      { url: "/images/projects/tsc/sogenam/image_1.jpg" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: [
      "Brand Design",
      "Visual Identity",
      "UX/UI Design",
      "UX Writing",
      "Stakeholder management",
    ],
    website: "https://www.sogenam.com/",
};
