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
  role: {
    en: "Only UX/UI designer on the project, working alongside a frontend developer who assisted with integration. The brief was co-built directly with the other team members, working from the inside made it easier to align on positioning, tone, and content without the usual back-and-forth of external client work.",
    fr: "Seul designer UX/UI sur le projet, en collaboration avec un développeur frontend pour l'intégration. Le brief a été co-construit directement avec les autres membres de l'équipe, travailler de l'intérieur facilitait l'alignement sur le positionnement, le ton et le contenu, sans les allers-retours habituels d'une relation client externe.",
  },
  challenge: {
    en: "TSC had no web presence at all when the project started. The challenge was to build everything from scratch: define what the agency actually sells, structure its services clearly, and create a visual identity that could establish credibility in a competitive digital consultancy market, all while working from the inside, where the positioning was still evolving.",
    fr: "TSC n'avait aucune présence web lorsque le projet a démarré. L'enjeu était de tout construire de zéro : définir ce que l'agence vend réellement, structurer ses services clairement et créer une identité visuelle capable d'établir une crédibilité sur un marché de la consultance digitale très concurrentiel, tout en travaillant de l'intérieur, là où le positionnement était encore en cours de définition.",
  },
  content: {
    en: "The project started with a content architecture workshop to define the agency's services, target audiences, and key messages, working collaboratively with the internal team to clarify a positioning that hadn't been formally articulated before. The site structure was built around three core objectives: attract new clients, recruit consultants, and establish digital credibility. High-fidelity prototypes were built in Figma and validated internally before integration. A custom iconography system was designed to give the platform a distinctive visual language from day one. The frontend developer integrated the designs into WordPress with Elementor, with extensive custom CSS to match the specifications precisely. The site ran for 4 years before the agency underwent a complete visual rebrand in May 2026.",
    fr: "Le projet a débuté par un atelier d'architecture de contenu pour définir les services de l'agence, les audiences cibles et les messages clés, en travaillant de manière collaborative avec l'équipe interne pour clarifier un positionnement qui n'avait jamais été formellement articulé. La structure du site a été pensée autour de trois objectifs principaux : attirer de nouveaux clients, recruter des consultants et asseoir une crédibilité digitale. Des prototypes haute fidélité ont été construits dans Figma et validés en interne avant l'intégration. Un système d'iconographie sur mesure a été conçu pour donner à la plateforme un langage visuel distinctif dès le premier jour. Le développeur frontend a intégré les designs sous WordPress avec Elementor, avec un CSS personnalisé extensif pour correspondre précisément aux spécifications. Le site a tourné pendant 4 ans avant que l'agence ne procède à un rebranding visuel complet fin mai 2026.",
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