import type { Project } from '../types';

export const JARDINS: Project = {
    id: "jardins",
    title: "Les Jardins de Là-Bas",
    category: ["Branding", "Development", "UX/UI Design"],
    type: {
      en: "Urban Development & Living",
      fr: "Développement Urbain & Habitat",
    },
    date: "2022",
    thumbnail: "/images/projects/tsc/jardin/home_jardin.jpg",
    description: {
      en: "Digital communication strategy for an ambitious intergenerational real estate development, aimed at humanizing the project for future residents.",
      fr: "Stratégie de communication digitale pour un projet immobilier intergénérationnel ambitieux, visant à donner un visage humain au quartier pour ses futurs habitants.",
    },
    content: {
      en: "The work included the design of the visual identity and an informative website dedicated to the new district. Artistic direction was guided by on-site photography to capture the true essence of the location. The resulting platform allows for seamless navigation through project details while conveying a sustainable and social vision.",
      fr: "Les travaux ont englobé la conception de l'identité visuelle et d'un site informatif dédié au nouveau quartier. La direction artistique s'est appuyée sur une photographie de terrain pour capter l'essence authentique du lieu. La plateforme permet une navigation fluide dans les détails du projet tout en transmettant une vision résolument durable et sociale.",
    },
    images: [
      { url: "/images/projects/tsc/jardin/image_0.jpg" },
      { url: "/images/projects/tsc/jardin/image_1.jpg" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: [
      "Brand Design",
      "Visual Identity",
      "Art Direction",
      "Photography",
      "UX/UI Design",
    ],
    website: "https://www.lesjardinsdelabas.be/",
};
