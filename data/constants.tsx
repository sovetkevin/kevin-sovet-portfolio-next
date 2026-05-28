import {
  ExperienceItem,
  LightningItem,
  Project,
  Recommendation,
} from "./types";

export type ProjectFilterOption = {
  id: string;
  label: string;
  categories?: string[];
};

export const PROJECT_FILTER_OPTIONS: ProjectFilterOption[] = [
  { id: "all", label: "All" },
  { id: "ux-ui-design", label: "UX/UI Design", categories: ["UX/UI Design"] },
  { id: "development", label: "Development", categories: ["Development"] },
  { id: "branding", label: "Branding", categories: ["Branding"] },
  {
    id: "visual-communication",
    label: "Visual Communication",
    categories: ["Visual Communication"],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
 {
  year: {
    en: "Mar. 2022 – Present",
    fr: "Mars 2022 – Aujourd'hui",
  },
  role: "Operations & Marketing Manager, UX/UI Consultant",
  company: "TMS Group",
  logo: ["/images/experience/tms-group.png"],
  website: "https://www.tms-group.be",
  description: {
    en: "I lead the operational strategy and internal branding of the digital consultancy company while providing high-level UX/UI consulting and frontend integration for our clients. As Operations & Marketing Manager, I bridge the gap between human capital and business objectives by coaching consultants, refining market positioning, and driving the company's digital transformation.",
    fr: "Je pilote la stratégie opérationnelle et l'image de marque de la société, tout en assurant des missions de consultance en UX/UI Design et d'intégration frontend pour nos clients. En tant que Responsable des Opérations et du Marketing, je fais le lien entre le capital humain et les objectifs business, en accompagnant les consultants, en affinant le positionnement marché et en conduisant la transformation digitale de l'entreprise.",
  },
  subRoles: [
    {
      year: "2025-2026",
      title: "Marketing, Operations Manager & UX/UI Consultant",
    },
    { year: "2023-2025", title: "Manager & UX/UI Consultant" },
    { year: "2022–2023", title: "UX/UI Consultant" },
  ],
  bottomLine: {
    en: "I lead the operational strategy and internal branding of the digital consultancy company while providing high-level UX/UI consulting and frontend integration for our clients. As Operations & Marketing Manager, I bridge the gap between human capital and business objectives by coaching consultants, refining market positioning, and driving the company's digital transformation.",
    fr: "Je pilote la stratégie opérationnelle et l'image de marque de la société, tout en assurant des missions de consultance en UX/UI Design et d'intégration frontend pour nos clients. En tant que Responsable des Opérations et du Marketing, je fais le lien entre le capital humain et les objectifs business, en accompagnant les consultants, en affinant le positionnement marché et en conduisant la transformation digitale de l'entreprise.",
  },
  valueAdd: {
    en: "A rare combination of leadership, design thinking, and front-end execution that ensures both operational excellence and a strong, consistent brand presence.",
    fr: "Un excellent mix de leadership, de design thinking et d'exécution frontend, qui garantit à la fois l'excellence opérationnelle et une présence de marque forte et cohérente.",
  },
},
  {
    year: {
      en: "Mar. 2023 - Mar. 2025",
      fr: "Mars 2023 - Mars 2025" ,
    },
    role: "UX/UI Designer",
    company: "FR Team (Autotuner)",
    logo: [
      "/images/experience/fr-team.png",
      "/images/experience/autotuner.png",
    ],
    website: ["https://www.fr-team.lu", "https://www.autotuner.com"],
    description: {
      en: 'Led the complete UX/UI overhaul of the <a href="https://www.autotuner.cloud/login" target="_blank">AutoTuner web application</a>, a complex SaaS ecosystem centralizing file exchanges, customer relations, and vehicle diagnostics for the automotive tuning industry.',
      fr: 'J\'ai dirigé la refonte complète de l\'UX/UI de l\'<a href="https://www.autotuner.cloud/login" target="_blank">application Web AutoTuner</a>, un écosystème SaaS complexe centralisant les échanges de fichiers, les relations clients et les diagnostics de véhicules pour l\'industrie du tuning automobile.',
    },
    missionVia: {
      label: "Mission via",
      company: "TMS Group",
    },
    bottomLine: {
      en: 'Led the complete UX/UI overhaul of the <a href="https://www.autotuner.cloud/login" target="_blank">AutoTuner web application</a>, a complex SaaS ecosystem centralizing file exchanges, customer relations, and vehicle diagnostics for the automotive tuning industry.',
      fr: 'J\'ai dirigé la refonte complète de l\'UX/UI de l\'<a href="https://www.autotuner.cloud/login" target="_blank">application Web AutoTuner</a>, un écosystème SaaS complexe centralisant les échanges de fichiers, les relations clients et les diagnostics de véhicules pour l\'industrie du tuning automobile.',
    },
    valueAdd: {
      en: "Scalability by design. Transforming a purely technical tool into a seamless, high-performance product used by dealers and clients worldwide.",
      fr: "La scalabilité au service du design. Transformer un outil purement technique en un produit fluide et haute performance, utilisé par des revendeurs et clients à travers le monde.",
    },
  },
  {
    year: {
      en: "Apr. 2022 – Mar. 2023",
      fr: "Avr. 2022 – Mars 2023" ,
    },
    role: "Front-End Developer",
    company: "Contraste Digital (Rossel)",
    logo: [
      "/images/experience/contraste-digital.png",
      "/images/experience/rossel.png",
    ],
    website: ["https://www.contraste-digital.com/", "https://www.rossel.be"],
    description: {
      en: 'Integrated within the digital team of a major media group (<a href="https://www.rossel.be" target="_blank">Rossel</a>), I handled the development and maintenance of high-traffic news platforms like <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> and also <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, serving millions of readers daily across multiple press brands.',
      fr: 'Intégré au sein de l\'équipe digitale du groupe de presse <a href="https://www.rossel.be" target="_blank">Rossel</a>, j\'ai assuré le développement et la maintenance de plateformes d\'information à fort trafic : <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> et <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, au service de millions de lecteurs quotidiens.',
    },
    missionVia: {
      label: "Mission via",
      company: "TMS Group",
    },
    bottomLine: {
      en: 'Integrated within the digital team of a major media group (<a href="https://www.rossel.be" target="_blank">Rossel</a>), I handled the development and maintenance of high-traffic news platforms like <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> and also <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, serving millions of readers daily across multiple press brands.',
      fr: 'Intégré au sein de l\'équipe digitale du groupe de presse <a href="https://www.rossel.be" target="_blank">Rossel</a>, j\'ai assuré le développement et la maintenance de plateformes d\'information à fort trafic : <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> et <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, au service de millions de lecteurs quotidiens.',
    },
    valueAdd: {
      en: "Technical reliability and delivery speed in a high-pressure, content-driven environment where performance, uptime, and consistency across brands are non-negotiable.",
      fr: "Fiabilité technique et vélocité de livraison dans un environnement exigeant, orienté contenu, où performance, disponibilité et cohérence entre les marques sont non négociables.",
    },
  },
  {
    year: {
      en: "Aug. 2020 - Jan. 2022",
      fr: "Août 2020 - Janv. 2022" ,
    },
    role: "Digital Creative Specialist",
    company: "The Service Company",
    logo: ["/images/experience/tsc-experts-2.png"],
    website: "https://www.tsc-experts.com/",
    description: {
      en: "Acted as a multidisciplinary creative lead for a wide range of B2B and B2C clients, crafting brand identities, designing digital interfaces, and delivering end-to-end web solutions across diverse industries.",
      fr: "Rôle de lead créatif multidisciplinaire pour un portefeuille varié de clients B2B et B2C : création d'identités de marque, conception d'interfaces digitales et livraison de solutions web complètes dans des secteurs d'activité très divers.",
    },
    bottomLine: {
      en: "Acted as a multidisciplinary creative lead for a wide range of B2B and B2C clients, crafting brand identities, designing digital interfaces, and delivering end-to-end web solutions across diverse industries.",
      fr: "Rôle de lead créatif multidisciplinaire pour un portefeuille varié de clients B2B et B2C : création d'identités de marque, conception d'interfaces digitales et livraison de solutions web complètes dans des secteurs d'activité très divers.",
    },
    valueAdd: {
      en: "Versatility across sectors and disciplines. The ability to own an entire project, from brand identity to CMS integration, while adapting tone, aesthetic, and approach to each client's unique context.",
      fr: "Polyvalence sectorielle et disciplinaire. La capacité à porter un projet dans sa globalité — de l'identité de marque à l'intégration CMS — en adaptant le ton, l'esthétique et l'approche au contexte propre de chaque client.",
    },
  },
  {
    year: {
      en: "Sep. 2015 - Aug. 2020",
      fr: "Sept. 2015 - Août 2020" ,
    },
    role: "Digital Marketing, Graphic, Web & UX/UI Designer",
    company: "OncoDNA",
    logo: ["/images/experience/oncodna.png"],
    website: "https://www.oncodna.com",
    description: {
      en: 'Managed the digital presence of a precision medicine leader for 5 years. I also spearheaded the UX/UI redesign of the flagship <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™ platform</a>, transforming complex genomic data into intuitive interfaces for both clinical experts and patients.',
      fr: 'Gestion de la présence digitale d\'un leader de la médecine de précision pendant 5 ans. Direction de la refonte UX/UI de la plateforme phare <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™</a>, transformant des données génomiques complexes en interfaces intuitives, adaptées aussi bien aux experts cliniques qu\'aux patients.',
    },
    subRoles: [
      {
        year: "2017-2020",
        title: "Digital Marketing - Graphic, Web & UX/UI Designer",
      },
      { year: "2015–2017", title: "Graphic & Web Designer" },
    ],
    bottomLine: {
      en: 'Managed the digital presence of a precision medicine leader for 5 years. I also spearheaded the UX/UI redesign of the flagship <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™ platform</a>, transforming complex genomic data into intuitive interfaces for both clinical experts and patients.',
      fr: 'Gestion de la présence digitale d\'un leader de la médecine de précision pendant 5 ans. Direction de la refonte UX/UI de la plateforme phare <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™</a>, transformant des données génomiques complexes en interfaces intuitives, adaptées aussi bien aux experts cliniques qu\'aux patients.',
    },
    valueAdd: {
      en: "Expertise in 'Adaptive Information Design', the ability to present the same high-level scientific data through different lenses to meet the specific emotional and technical needs of doctors versus patients.",
      fr: "Expertise en « conception adaptative de l'information » : la capacité à présenter les mêmes données scientifiques complexes sous des angles différents, pour répondre aux besoins émotionnels et techniques distincts des médecins d'un côté, des patients de l'autre.",
    },
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "pierres-et-marees",
    title: "Pierres & Marées",
    category: ["Development", "UX/UI Design"],
    type: {
      en: "Vacation Rental & Travel",
      fr: "Location de vacances & Tourisme",
    },
    date: "May 2026",
    thumbnail: "/images/projects/pierres-et-marees/crozette/ipad-crozette.jpg",
    description: {
      en: "Complete redesign of a vacation rental platform, transforming an outdated WordPress site into a unified, modern booking experience.",
      fr: "Refonte complète d'une plateforme de location de vacances, transformant un site WordPress daté en une expérience de réservation unifiée et moderne.",
    },
    content: {
      en: "This project reimagined the entire digital presence for two exceptional French holiday homes: La Crozette in Provence and Uranie overlooking the Bay of Somme. The original 2015 WordPress site suffered from fragmented navigation and a confusing user experience, treating both properties as disconnected entities across separate pages. The challenge was to create a cohesive ecosystem that allows visitors to seamlessly explore both houses, check real-time availability, and book directly through an integrated form. The solution is a fluid one-page site featuring an elegant property-switching system, a calendar synchronized with Airbnb and Booking.com via iCal, and a multilingual architecture (FR/EN/NL/ES) designed for an international audience seeking authentic French countryside getaways.",
      fr: "Ce projet a entièrement repensé la présence digitale de deux maisons de vacances d'exception : La Crozette en Drôme Provençale et Uranie face à la Baie de Somme. Le site WordPress d'origine, datant de 2015, souffrait d'une navigation fragmentée et d'une expérience utilisateur confuse, les deux propriétés étant traitées comme des entités distinctes sur des pages séparées. L'enjeu : créer un écosystème cohérent permettant aux visiteurs de découvrir les deux maisons sans friction, de vérifier les disponibilités en temps réel et de réserver directement via un formulaire intégré. La solution est un site one-page fluide, doté d'un système de bascule élégant entre les deux propriétés, d'un calendrier synchronisé avec Airbnb et Booking.com via iCal, et d'une architecture multilingue (FR/EN/NL/ES) pensée pour un public international en quête d'authenticité.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/pierres-et-marees/old/crozette_0.jpg",
            caption: {
              en: "Old wordpress website - Homepage",
              fr: "Ancien site WordPress, Page d'accueil",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/old/crozette_1.jpg",
            caption: {
              en: "Old wordpress website - Description",
              fr: "Ancien site WordPress, Description",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/old/crozette_2.jpg",
            caption: {
              en: "Old wordpress website - Access",
              fr: "Ancien site WordPress, Accès",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/old/crozette_3.jpg",
            caption: {
              en: "Old wordpress website - Booking",
              fr: "Ancien site WordPress, Réservation",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/old/crozette_4.jpg",
            caption: {
              en: "Old wordpress website - Uranie Homepage",
              fr: "Ancien site WordPress, Accueil Uranie",
            },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/pierres-et-marees/crozette/mockup-crozette-1.jpg",
            caption: {
              en: "Mockups - La Crozette",
              fr: "Maquettes, La Crozette",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/ipad-crozette.jpg",
            caption: {
              en: "Mockups - La Crozette",
              fr: "Maquettes, La Crozette",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/mockup-crozette-2.jpg",
            caption: {
              en: "Mockups - La Crozette",
              fr: "Maquettes, La Crozette",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/home_pm.jpg",
            caption: {
              en: "Mockups - La Crozette",
              fr: "Maquettes, La Crozette",
            },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/pierres-et-marees/uranie/mockup-uranie-1.jpg",
            caption: {
              en: "Mockups - Uranie",
              fr: "Maquettes, Uranie",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/ipad-uranie.jpg",
            caption: {
              en: "Mockups - Uranie",
              fr: "Maquettes, Uranie",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/mockup-uranie-2.jpg",
            caption: {
              en: "Mockups - Uranie",
              fr: "Maquettes, Uranie",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/home_pm_2.jpg",
            caption: {
              en: "Mockups - Uranie",
              fr: "Maquettes, Uranie",
            },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/pierres-et-marees/crozette/mobile-crozette-1.jpg",
            caption: {
              en: "Mobile - La Crozette",
              fr: "Mobile, La Crozette",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/mobile-crozette-2.jpg",
            caption: {
              en: "Mobile - La Crozette",
              fr: "Mobile, La Crozette",
            },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/mobile-uranie-1.jpg",
            caption: {
              en: "Mobile - Uranie",
              fr: "Mobile, Uranie",
            },
          },
        ],
      },
    ],
    scope: ["UX/UI Design & Development"],
    focus: [
      "Travel Platform Design",
      "Booking System Integration",
      "Multilingual Architecture",
      "iCal Synchronization",
      "One-Page Navigation",
      "Responsive Design",
      "SEO Strategy",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    website: "https://pierres-et-marees.by-sovet.me",
  },
  {
    id: "grit-gym",
    title: "GRIT Gym Club",
    category: ["UX/UI Design"],
    type: {
      en: "E-commerce & Fitness",
      fr: "E-commerce & Fitness",
    },
    date: "April 2026",
    thumbnail: "/images/projects/grit/home_grit.jpg",
    description: {
      en: "Strategic UX/UI design challenge for a fictional fitness brand, demonstrating full-stack design thinking from typography system to high-fidelity e-commerce prototypes.",
      fr: "Exercice de design stratégique UX/UI pour une marque de fitness fictive, illustrant une démarche de conception complète, du système typographique aux prototypes e-commerce haute fidélité.",
    },
    content: {
      en: "Created as part of a recruitment process Web Designer position, this project showcases end-to-end design methodology on a mock gym membership platform. Starting with a custom typographic design system, progressing through low-fidelity wireframes built with Odoo's official Wireframe Library, and culminating in polished high-fidelity prototypes. The result is a complete e-commerce flow for a nationwide gym chain, balancing aggressive pricing clarity with premium fitness branding, all designed in Figma to demonstrate technical rigor and visual storytelling under tight deadlines.",
      fr: "Réalisé dans le cadre d'un processus de recrutement pour un poste de Web Designer, ce projet présente une méthodologie de conception de bout en bout appliquée à une fausse plateforme d'adhésion à une salle de sport. Partant d'un système typographique sur mesure, passant par des wireframes basse fidélité construits avec la bibliothèque Odoo officielle, pour aboutir à des prototypes haute fidélité soignés. Le résultat est un parcours e-commerce complet pour une chaîne de salles de sport nationale, alliant une hiérarchie tarifaire lisible à un branding fitness premium, le tout conçu dans Figma pour démontrer rigueur technique et narration visuelle sous contrainte de temps.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/grit/high-def.jpg",
            caption: {
              en: "High-fidelity Mockup",
              fr: "Maquette haute fidélité",
            },
          },
          {
            url: "/images/projects/grit/low-def.jpg",
            caption: {
              en: "Low-fidelity wireframes (Odoo Library with Bebas font)",
              fr: "Wireframes basse fidélité (Bibliothèque Odoo, police Bebas)",
            },
          },
        ],
      },
    ],
    images: [
      {
        url: "/images/projects/grit/font-system.jpg",
        caption: {
          en: "Design system fonts hierarchy",
          fr: "Hiérarchie typographique du design system",
        },
      },
    ],
    scope: ["UX/UI Design"],
    focus: [
      "Design System Engineering",
      "Odoo Wireframe Library Integration",
      "E-commerce User Flow",
      "Pricing Table UX",
      "Recruitment Case Study",
      "Figma Prototyping",
    ],
  },
  {
    id: "tms-website",
    title: "TMS Group Website",
    category: ["Development", "UX/UI Design", "Branding"],
    type: {
      en: "Consulting & Digital Strategy",
      fr: "Conseil & Stratégie Digitale",
    },
    date: "April 2026",
    thumbnail: "/images/projects/tms/home_tms.jpg",
    description: {
      en: "A proactive end-to-end digital transformation for TMS Group, evolving from a strategic vision to a fully functional React-based platform.",
      fr: "Une transformation digitale proactive de A à Z pour TMS Group, passant d'une vision stratégique à une plateforme React entièrement fonctionnelle.",
    },
    content: {
      en: "Originally initiated to modernize the group's digital footprint, this project was carried out as a personal mission to bridge the gap between design and production. Although a strategic shift in the company's direction prevented an official commercial launch, the project was completed as a matter of principle. I handled the entire lifecycle: from strategic copywriting and high-fidelity UI prototyping to the full technical integration using React and Vite, ensuring a high-performance and scalable showcase.",
      fr: "Initialement lancé pour moderniser l'empreinte digitale du groupe, ce projet a été mené comme une mission personnelle, pour combler le fossé entre design et production. Bien qu'un changement de cap stratégique ait empêché un lancement commercial officiel, le projet a été mené à son terme par principe. J'ai géré l'intégralité du cycle de vie : de la rédaction stratégique et du prototypage UI haute fidélité jusqu'à l'intégration technique complète avec React et Vite, pour un résultat performant et évolutif.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tms/image_ca_1.jpg" },
          { url: "/images/projects/tms/image_ca_2.jpg" },
          { url: "/images/projects/tms/image_ca_3.jpg" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tms/page_home.jpg" },
          { url: "/images/projects/tms/page_services.jpg" },
          { url: "/images/projects/tms/page_consultants.jpg" },
          { url: "/images/projects/tms/page_companies.jpg" },
          { url: "/images/projects/tms/page_about.jpg" },
          { url: "/images/projects/tms/page_contact.jpg" },
          { url: "/images/projects/tms/page_career.jpg" },
          { url: "/images/projects/tms/page_career_in.jpg" },
        ],
      },
    ],
    images: [{ url: "/images/projects/tms/image_tms_1.jpg" }],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["React", "Vite", "TypeScript"],
    focus: [
      "Interactive Prototyping",
      "Brand Storytelling",
      "Information Architecture",
      "Technical Problem Solving",
    ],
    website: "https://tms-website.by-sovet.me/",
  },
  {
    id: "at-cloud",
    title: "AutoTuner Cloud Platform",
    category: ["Development", "UX/UI Design"],
    type: {
      en: "Automotive Software & SaaS",
      fr: "Logiciel Automobile & SaaS",
    },
    date: "2025",
    thumbnail: "/images/projects/autotuner/home_autotuner.jpg",
    description: {
      en: "Architecting a high-performance SaaS ecosystem for the automotive tuning industry leader, bridging complex binary data management with a premium user experience.",
      fr: "Conception d'un écosystème SaaS haute performance pour le leader du tuning automobile, à la croisée de la gestion de données binaires complexes et d'une expérience utilisateur premium.",
    },
    content: {
      en: "This project focused on the complete UI/UX overhaul of the AutoTuner web platform, centralizing file exchanges, customer relations, and vehicle diagnostics. To solve the challenge of scalability across their growing suite of tools, I spearheaded the creation of a robust Design System. Built with Svelte and documented via Storybook, this component library allowed for a seamless integration into the Symfony backend. The result is a unified, developer-friendly environment that ensures visual consistency while significantly reducing front-end production time for new features.",
      fr: "Ce projet s'est articulé autour de la refonte complète UI/UX de la plateforme web AutoTuner, centralisant échanges de fichiers, relation client et diagnostics véhicules. Pour répondre aux enjeux de scalabilité d'une suite d'outils en pleine expansion, j'ai initié et structuré un Design System robuste. Développé en Svelte et documenté via Storybook, cette bibliothèque de composants a permis une intégration fluide dans le backend Symfony. Résultat : un environnement unifié, pensé pour les développeurs, qui garantit la cohérence visuelle tout en réduisant considérablement les délais de production frontend.",
    },
    images: [
      { url: "/images/projects/autotuner/image_0.jpg" },
      { url: "/images/projects/autotuner/mockup-0.png" },
      { url: "/images/projects/autotuner/mockup-1.png" },
      { url: "/images/projects/autotuner/mockup-2.png" },
      { url: "/images/projects/autotuner/mockup-3.png" },
      {
        url: "/images/projects/autotuner/design-1.png",
        caption: {
          en: "Design system colors",
          fr: "Couleurs du design system",
        },
      },
      {
        url: "/images/projects/autotuner/design-2.png",
        caption: {
          en: "Design system fonts, buttons, inputs, etc.",
          fr: "Typographie, boutons, champs de saisie, etc.",
        },
      },
      {
        url: "/images/projects/autotuner/design-3.png",
        caption: {
          en: "Design system spacings, columns, etc.",
          fr: "Espacements, colonnes et grille du design system",
        },
      },
      { url: "/images/projects/autotuner/sidebar.png" },
      {
        url: "/images/projects/autotuner/signup-process.jpg",
        caption: {
          en: "Signup process",
          fr: "Parcours d'inscription",
        },
      },
      { url: "/images/projects/autotuner/device-light.png" },
      { url: "/images/projects/autotuner/device-dark.png" },
      { url: "/images/projects/autotuner/datalog-1.png" },
    ],
    scope: ["Development & UX/UI Design"],
    stack: ["Symfony", "Svelte", "Storybook"],
    focus: [
      "SaaS Product Strategy",
      "Information Architecture",
      "Design System Engineering",
      "Interactive Data Visualization",
    ],
    website: "https://www.autotuner.cloud",
  },
  {
    id: "rossel-media",
    title: "Rossel Media",
    category: ["Development"],
    type: {
      en: "Mass Media & Digital Publishing",
      fr: "Médias & Édition Numérique",
    },
    date: "2023",
    thumbnail: "/images/projects/rossel/home_rossel.jpg",
    description: {
      en: "Strategic contribution to Belgium's leading media group, optimizing reader engagement and digital retention through high-traffic news interfaces.",
      fr: "Contribution stratégique au premier groupe de presse belge, en optimisant l'engagement des lecteurs et la rétention digitale à travers des interfaces d'information à fort trafic.",
    },
    content: {
      en: 'This mission was less about designing isolated pages and more about orchestrating consistency across a complex media ecosystem. Working inside the <a href="https://www.rossel.be" target="_blank">Rossel</a> environment, I contributed to major editorial platforms such as <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> and <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>. On Le Soir, RTL and La Voix du Nord, my role focused primarily on maintenance and continuous improvements. For Sudinfo and Le Sillon Belge, we handled full-scope integrations from scratch, from implementation to production release. Across all platforms, we also optimized newsletter workflows, user profile management, and subscription funnels (GPG/PCG).',
      fr: 'Cette mission consistait moins à concevoir des pages de manière isolée qu\'à orchestrer la cohérence à travers un écosystème médiatique complexe. Au sein du groupe <a href="https://www.rossel.be" target="_blank">Rossel</a>, j\'ai contribué aux grandes plateformes éditoriales : <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> et <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>. Sur Le Soir, RTL et La Voix du Nord, mon rôle s\'est concentré sur la maintenance et l\'amélioration continue. Pour Sudinfo et Le Sillon Belge, nous avons géré des intégrations complètes de A à Z, de la mise en œuvre jusqu\'à la mise en production. Sur l\'ensemble des plateformes, nous avons également optimisé les workflows de newsletters, la gestion des profils utilisateurs et les tunnels d\'abonnement (GPG/PCG).',
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Image-vdn01.jpg" },
          { url: "/images/projects/rossel/Image-vdn02.jpg" },
          { url: "/images/projects/rossel/Image-vdn03.jpg" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Sillon-01.jpg" },
          { url: "/images/projects/rossel/Sillon-03.jpg" },
          { url: "/images/projects/rossel/Sillon-04.jpg" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Sudinfo_01.jpg" },
          { url: "/images/projects/rossel/Sudinfo_02.jpg" },
          { url: "/images/projects/rossel/Sudinfo_03.jpg" },
        ],
      },
    ],
    scope: ["Development"],
    stack: ["Drupal", "Twig", "JavaScript"],
    focus: [
      "Multi-Brand Design Systems",
      "User Journey Optimization",
      "CMS Management",
      "Email Marketing",
      "Subscription Funnel Design",
    ],
    website: "https://www.rossel.be/",
  },
  {
    id: "sept-padel",
    title: "Sep7 - Padel Club",
    category: ["Branding", "UX/UI Design", "Development"],
    type: {
      en: "Sport & Lifestyle",
      fr: "Sport & Lifestyle",
    },
    date: "2022",
    thumbnail: "/images/projects/tsc/sept/home_sept.jpg",
    description: {
      en: "Creation of a comprehensive brand universe for a premium sports club, translating an entrepreneurial vision into a strong, modern visual identity.",
      fr: "Création d'un univers de marque complet pour un club de sport premium, traduisant une vision entrepreneuriale en une identité visuelle forte et contemporaine.",
    },
    content: {
      en: "Built from the ground up, the brand architecture and graphic identity were defined to reflect values of community and excellence. The project culminated in the launch of a high-conversion showcase website designed to attract new members by highlighting the club's unique atmosphere and ensuring effortless information access.",
      fr: "Construite de zéro, l'architecture de marque et l'identité graphique ont été pensées pour incarner les valeurs de communauté et d'excellence. Le projet s'est conclu par le lancement d'un site vitrine à fort taux de conversion, conçu pour attirer de nouveaux membres en valorisant l'atmosphère unique du club et en facilitant l'accès à l'information.",
    },
    images: [
      { url: "/images/projects/tsc/sept/portfolio24.jpg" },
      { url: "/images/projects/tsc/sept/image_1.jpg" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: ["Brand Design", "Visual Identity", "UX/UI Design"],
    website: "https://www.septclub.be/",
  },
  {
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
  },
  {
    id: "rauwers",
    title: "Rauwers Controle",
    category: ["UX/UI Design", "Development"],
    type: {
      en: "Traffic & Emergency Solutions",
      fr: "Solutions de Mobilité & Sécurité",
    },
    date: "2022",
    thumbnail: "/images/projects/tsc/rauwers/home_rauwers.jpg",
    description: {
      en: "User experience optimization for a European leader in mobility and safety solutions, aimed at clarifying a complex digital presence.",
      fr: "Optimisation de l'expérience utilisateur pour un leader européen des solutions de mobilité et de sécurité, avec pour objectif de clarifier une présence digitale complexe.",
    },
    content: {
      en: "The mission focused on restructuring a content-heavy platform for better performance. Information architecture was reworked to divide massive amounts of data into intuitive categories, ensuring a fluid browsing experience. The project also included a new iconography system and full SEO optimization to support international growth.",
      fr: "La mission s'est concentrée sur la restructuration d'une plateforme dense en contenu pour en améliorer les performances. L'architecture d'information a été entièrement repensée pour organiser un volume massif de données en catégories intuitives, garantissant une navigation fluide. Le projet incluait également la création d'un nouveau système d'iconographie et une optimisation SEO complète pour soutenir le développement international.",
    },
    images: [
      { url: "/images/projects/tsc/rauwers/image_0.jpg" },
      { url: "/images/projects/tsc/rauwers/image_1.jpg" },
    ],
    scope: ["UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: [
      "Information Architecture",
      "UX/UI Design",
      "Iconography System",
      "SEO Strategy",
    ],
    website: "https://www.rauwers.be/fr/",
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
    content: {
      en: "The entire user journey was reimagined, from selecting a device model to finalizing repair orders or accessory purchases. The challenge lay in making a technical process simple and reassuring through an elegant interface. This involved UX/UI workshops, prototyping, and custom front-end styling.",
      fr: "L'ensemble du parcours utilisateur a été repensé, de la sélection du modèle d'appareil jusqu'à la finalisation d'une commande de réparation ou d'achat d'accessoires. L'enjeu : rendre un processus technique simple et rassurant grâce à une interface élégante. La démarche a impliqué des ateliers UX/UI, du prototypage et une intégration frontend sur mesure.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/tsc/helpix/wireframe_1.jpg",
            caption: {
              en: "Wireframes low fidelity",
              fr: "Wireframes basse fidélité",
            },
          },
          {
            url: "/images/projects/tsc/helpix/wireframe_2.jpg",
            caption: {
              en: "Wireframes high fidelity",
              fr: "Wireframes haute fidélité",
            },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/tsc/helpix/process_1.png",
            caption: {
              en: "Process ordering repair",
              fr: "Parcours de commande, réparation",
            },
          },
          {
            url: "/images/projects/tsc/helpix/process_2.png",
            caption: {
              en: "Process ordering repair",
              fr: "Parcours de commande, réparation",
            },
          },
          {
            url: "/images/projects/tsc/helpix/process_3.png",
            caption: {
              en: "Process ordering repair",
              fr: "Parcours de commande, réparation",
            },
          },
          {
            url: "/images/projects/tsc/helpix/process_4.png",
            caption: {
              en: "Process ordering repair",
              fr: "Parcours de commande, réparation",
            },
          },
          {
            url: "/images/projects/tsc/helpix/process_5.png",
            caption: {
              en: "Process ordering repair",
              fr: "Parcours de commande, réparation",
            },
          },
          {
            url: "/images/projects/tsc/helpix/process_6.png",
            caption: {
              en: "Process ordering repair",
              fr: "Parcours de commande, réparation",
            },
          },
          {
            url: "/images/projects/tsc/helpix/process_7.png",
            caption: {
              en: "Process ordering repair",
              fr: "Parcours de commande, réparation",
            },
          },
        ],
      },
    ],
    images: [{ url: "/images/projects/tsc/helpix/image_1.jpg" }],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Odoo", "HTML", "CSS", "JavaScript"],
    focus: [
      "Brand Identity",
      "E-commerce UX/UI",
      "User Journey Mapping",
      "Conversion Optimization",
    ],
  },
  {
    id: "tsc-corpo",
    title: "TSC Branding",
    category: ["Branding", "Visual Communication"],
    type: {
      en: "ERP Solutions & Digital Strategy",
      fr: "Solutions ERP & Stratégie Digitale",
    },
    date: "2021",
    thumbnail: "/images/projects/tsc/tsc-brand/corporate-mockup.jpg",
    description: {
      en: "Evolution of a digital agency's brand image from a generic startup aesthetic to a credible, authoritative, and innovative corporate identity.",
      fr: "Évolution de l'image de marque d'une agence digitale, d'une esthétique générique de startup vers une identité corporate crédible, affirmée et innovante.",
    },
    content: {
      en: "This project involved leading a complete rebranding effort to establish a unique market position. The work focused on creating a distinctive visual identity, including a new logo and a cohesive graphic charter designed to reflect the agency's technical expertise. This branding now serves as the foundation for all internal and external communications, ensuring professional consistency across every touchpoint.",
      fr: "Ce projet a consisté à piloter un rebranding complet pour affirmer un positionnement unique sur le marché. Le travail a porté sur la création d'une identité visuelle distinctive, nouveau logo, charte graphique cohérente, conçue pour refléter l'expertise technique de l'agence. Cette identité sert désormais de socle à l'ensemble des communications internes et externes, garantissant une cohérence professionnelle sur chaque point de contact.",
    },
    images: [
      { url: "/images/projects/tsc/tsc-brand/mockup_logo.jpg" },
      {
        url: "/images/projects/tsc/tsc-brand/evolution.png",
        caption: {
          en: "Evolution logo TSC",
          fr: "Évolution du logo TSC",
        },
      },
      { url: "/images/projects/tsc/tsc-brand/portfolio15.jpg" },
    ],
    scope: ["Branding & Visual Communication"],
    focus: ["Brand Strategy", "Visual Identity System", "Logo Design"],
    website: "https://www.tsc-experts.com",
  },
  {
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
  },
  {
    id: "helpilepsy",
    title: "Helpilepsy",
    category: ["UX/UI Design"],
    type: {
      en: "HealthTech & Patient Data",
      fr: "HealthTech & Données Patients",
    },
    date: "2021",
    thumbnail: "/images/projects/helpilepsy/home_helpilepsy.jpg",
    description: {
      en: "UX audit and optimization for a leading digital assistant dedicated to epilepsy management, bridging the gap between patients and neurologists.",
      fr: "Audit UX et optimisation d'un assistant numérique de référence dédié à la gestion de l'épilepsie, faisant le pont entre patients et neurologues.",
    },
    content: {
      en: "The mission involved a deep-dive audit of the existing mobile application to refine the user journey. The focus was placed on the critical 'event logging' process (seizures, medication, and appointments) to ensure data entry is as intuitive as possible for patients. In addition to the UX overhaul, a visual 'facelift' was proposed to modernize the interface while maintaining the clarity required for medical use.",
      fr: "La mission a débuté par un audit approfondi de l'application mobile existante pour affiner le parcours utilisateur. L'accent a été mis sur le processus critique de « journalisation des événements » (crises, médicaments, rendez-vous) afin de rendre la saisie aussi intuitive que possible pour les patients. En complément de la refonte UX, un rafraîchissement visuel a été proposé pour moderniser l'interface tout en préservant la clarté indispensable à un usage médical.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/helpilepsy/image_1.jpg" },
          { url: "/images/projects/helpilepsy/image_2.jpg" },
          { url: "/images/projects/helpilepsy/image_3.jpg" },
        ],
      },
    ],
    images: [
      { url: "/images/projects/helpilepsy/image_0.png" },
      { url: "/images/projects/helpilepsy/image_4.jpg" },
      { url: "/images/projects/helpilepsy/image_5.jpg" },
      { url: "/images/projects/helpilepsy/image_6.jpg" },
    ],
    scope: ["UX/UI Design"],
    focus: [
      "UX Audit & Strategy",
      "Mobile User Experience",
      "Information Architecture",
      "Healteach UI Design",
    ],
    website: "https://www.helpilepsy.com",
  },
  {
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
            caption: {
              en: "Cover images for facebook",
              fr: "Visuels de couverture Facebook",
            },
          },
          {
            url: "/images/projects/allenkeapler/image_2.jpg",
            caption: {
              en: "Cover images for facebook",
              fr: "Visuels de couverture Facebook",
            },
          },
          {
            url: "/images/projects/allenkeapler/image_3.jpg",
            caption: {
              en: "Cover images for facebook",
              fr: "Visuels de couverture Facebook",
            },
          },
          {
            url: "/images/projects/allenkeapler/image_4.jpg",
            caption: {
              en: "Cover images for facebook",
              fr: "Visuels de couverture Facebook",
            },
          },
          {
            url: "/images/projects/allenkeapler/image_5.jpg",
            caption: {
              en: "Cover images for facebook",
              fr: "Visuels de couverture Facebook",
            },
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
  },
  {
    id: "oncokdm",
    title: "OncoKDM™ Platform",
    category: ["Development", "UX/UI Design"],
    type: {
      en: "HealthTech & Precision Medicine",
      fr: "HealthTech & Médecine de Précision",
    },
    date: "2020",
    thumbnail: "/images/projects/oncodna/oncokdm/home-oncokdm.jpg",
    description: {
      en: "Full UX/UI redesign and frontend integration of a flagship clinical decision support system, bridging the gap between genomic complexity and medical actionability.",
      fr: "Refonte complète UX/UI et intégration frontend d'un système d'aide à la décision clinique de référence, faisant le pont entre la complexité génomique et l'actionnabilité médicale.",
    },
    content: {
      en: "OncoKDM™ is a specialized platform designed to interpret NGS (Next-Generation Sequencing) data. My mission in collaboration with an other UX/UI Designer was to redesign the entire interface to serve two distinct audiences: oncologists requiring deep technical insights and patients seeking understandable health journeys. I tackled the challenge of 'Adaptive Information Design'—ensuring that the same genomic data was visualized with surgical precision for professionals and with clear, reassuring storytelling for patients. Beyond design, I handled the frontend integration using Angular Material to ensure a robust, accessible, and high-performance healthcare application.",
      fr: "OncoKDM™ est une plateforme spécialisée dans l'interprétation des données NGS (Next-Generation Sequencing). Ma mission, menée en collaboration avec un autre UX/UI Designer, consistait à repenser l'intégralité de l'interface pour deux publics distincts : les oncologues en quête d'insights techniques approfondis, et les patients souhaitant comprendre leur parcours de santé. J'ai relevé le défi de la « conception adaptative de l'information », garantissant que les mêmes données génomiques soient visualisées avec une précision chirurgicale pour les professionnels, et avec une narration claire et rassurante pour les patients. Au-delà du design, j'ai assuré l'intégration frontend via Angular Material pour livrer une application de santé robuste, accessible et performante.",
    },
    images: [
      { url: "/images/projects/oncodna/oncokdm/mockup-02.jpg" },
      { url: "/images/projects/oncodna/oncokdm/mockup-01.png" },
      { url: "/images/projects/oncodna/oncokdm/report-oncokdm.jpg" },
    ],
    scope: ["UX/UI Design & Development"],
    stack: ["Angular", "Material Design", "TypeScript"],
    focus: [
      "Adaptive Information Design",
      "HealthTech Data Visualization",
      "Multi-User Persona Strategy",
      "Medical Compliance UX",
      "Agile Product Collaboration",
    ],
    website: "https://app.oncokdm.com/",
  },
  {
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
    content: {
      en: "Serving as Project Manager, the role involved coordinating planning and hosting workshops with cross-functional teams to tailor content for diverse targets. The project encompassed the end-to-end creation of high-fidelity prototypes and the full front-end development using Django CMS, resulting in a robust platform that reflects the company's cutting-edge scientific expertise.",
      fr: "En tant que chef de projet, le rôle consistait à coordonner la planification et à animer des ateliers avec des équipes pluridisciplinaires pour adapter le contenu à des cibles variées. Le projet a couvert la création de bout en bout de prototypes haute fidélité et le développement frontend complet sous Django CMS, aboutissant à une plateforme robuste qui reflète l'expertise scientifique de pointe de l'entreprise.",
    },
    images: [
      { url: "/images/projects/oncodna/oncodna-website/image_1.jpg" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_2.png" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_3.png" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_4.png" },
      { url: "/images/projects/oncodna/oncodna-website/mockup_5.png" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Django CMS", "Python", "CSS", "JavaScript"],
    focus: [
      "UX/UI Design",
      "Prototyping & Wireframing",
      "Content Strategy",
      "Stakeholder coordination",
      "SEO Strategy",
    ],
    website: "https://www.oncodna.com",
  },
  {
    id: "ink-consulting",
    title: "Ink' Consulting",
    category: ["Branding", "UX/UI Design"],
    type: {
      en: "Change Management & Consulting",
      fr: "Change Management & Consultance",
    },
    date: "2019",
    thumbnail: "/images/projects/ink/mockup_3.jpg",
    description: {
      en: "Defining the visual footprint for a consulting firm specializing in Change Management and Salesforce implementation.",
      fr: "Création de l'identité visuelle d'une entreprise de consultance spécialisée dans le change management et l'implémentation Salesforce.",
    },
    content: {
      en: "The objective was to build a strong corporate identity that conveys the company's values of transformation and efficiency. Following the successful branding phase, the mandate was extended to include the design of website prototypes, ensuring a seamless transition from brand identity to digital experience.",
      fr: "L'objectif était de construire une identité corporate forte, véhiculant les valeurs de transformation et d'efficacité de l'entreprise. Suite au succès de la phase de branding, le mandat a été étendu à la conception de prototypes de site web, assurant une transition fluide de l'identité de marque vers l'expérience digitale.",
    },
    images: [
      { url: "/images/projects/ink/portfolio11.jpg" },
      { url: "/images/projects/ink/business_cards_1.png" },
      { url: "/images/projects/ink/image_1.jpg" },
      { url: "/images/projects/ink/image_2.jpg" },
      { url: "/images/projects/ink/image_3.jpg" },
      { url: "/images/projects/ink/image_4.jpg" },
      { url: "/images/projects/ink/mockup_2.png" },
      { url: "/images/projects/ink/mockup_3.jpg" },
      { url: "/images/projects/ink/mockup_4.jpg" },
    ],
    scope: ["Branding, UX/UI Design"],
    focus: [
      "Brand Identity",
      "Visual Identity System",
      "UI/UX Design",
      "SEO Strategy",
    ],
  },
  {
    id: "mcid",
    title: "My Cancer is Different",
    category: ["Development", "UX/UI Design"],
    type: {
      en: "Precision Oncology & MedTech",
      fr: "Oncologie de Précision & MedTech",
    },
    date: "2016",
    thumbnail: "/images/projects/oncodna/mcid/home_mcid.jpg",
    description: {
      en: "Development of a patient-centric educational platform highlighting the importance of personalized molecular profiling in oncology.",
      fr: "Développement d'une plateforme éducative centrée patient, soulignant l'importance du profilage moléculaire personnalisé en oncologie.",
    },
    content: {
      en: "The platform was designed to empower patients by providing information on the unique molecular signatures of cancer. Key features included the ability for users to generate and download personalized medical PDF files to facilitate discussions with their oncologists. The project involved the creation of high-fidelity prototypes and precision web development in HTML/CSS.",
      fr: "La plateforme a été conçue pour autonomiser les patients en leur fournissant des informations sur les signatures moléculaires propres à leur cancer. Parmi les fonctionnalités clés : la possibilité de générer et télécharger des fichiers PDF médicaux personnalisés pour faciliter les échanges avec leur oncologue. Le projet a impliqué la création de prototypes haute fidélité et un développement web précis en HTML/CSS.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/oncodna/mcid/browser_1.png",
            caption: {
              en: "Landing page for HR+ Breast Cancer",
              fr: "Page d'accueil, Cancer du sein HR+",
            },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_2.png",
            caption: {
              en: "Landing page for HER2+ Breast Cancer",
              fr: "Page d'accueil, Cancer du sein HER2+",
            },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_3.png",
            caption: {
              en: "Landing page for Triple Negative Breast Cancer",
              fr: "Page d'accueil, Cancer du sein triple négatif",
            },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_4.png",
            caption: {
              en: "Landing page for Colorectal Cancer",
              fr: "Page d'accueil, Cancer colorectal",
            },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_5.png",
            caption: {
              en: "Landing page for Non Small Cell Lung Cancer",
              fr: "Page d'accueil, Cancer du poumon non à petites cellules",
            },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_6.png",
            caption: {
              en: "Landing page for Prostate Cancer",
              fr: "Page d'accueil, Cancer de la prostate",
            },
          },
        ],
      },
    ],
    images: [
      { url: "/images/projects/oncodna/mcid/portfolio8-2.jpg" },
      { url: "/images/projects/oncodna/mcid/image_1.jpg" },
      {
        url: "/images/projects/oncodna/mcid/image_2.jpg",
        caption: {
          en: "Generated PDF file for HER2+ Breast Cancer",
          fr: "Fichier PDF généré, Cancer du sein HER2+",
        },
      },
    ],
    scope: ["UX/UI Design & Development"],
    stack: ["HTML", "CSS", "JavaScript"],
    focus: [
      "Patient Education",
      "UX/UI Design",
      "Information Architecture",
      "SEO Strategy",
      "Content redaction",
    ],
    website: "https://www.oncodna.com",
  },
  {
    id: "oncodna-webinar",
    title: "OncoDNA Webinar",
    category: ["UX/UI Design"],
    type: {
      en: "Precision Oncology & MedTech",
      fr: "Oncologie de Précision & MedTech",
    },
    date: "2016",
    thumbnail: "/images/projects/oncodna/webinar/home_webinar.jpg",
    description: {
      en: "Creation of a dedicated scientific hub for oncology professionals to access molecular profiling webinars.",
      fr: "Création d'un hub scientifique dédié permettant aux professionnels de l'oncologie d'accéder à des webinaires sur le profilage moléculaire.",
    },
    content: {
      en: "To support the growing interest in OncoDNA's scientific content, a dedicated viewing platform was prototyped. The design focused on a clean, distraction-free environment for professional learning. Although the project eventually merged into the main corporate website, the high-fidelity prototypes served as the blueprint for the integrated webinar system currently in use.",
      fr: "Pour répondre à l'intérêt croissant pour le contenu scientifique d'OncoDNA, une plateforme de visionnage dédiée a été prototypée. Le design s'est concentré sur un environnement épuré, sans distraction, propice à l'apprentissage professionnel. Bien que le projet ait finalement été intégré au site corporate principal, les prototypes haute fidélité ont servi de référence pour le système de webinaires actuellement en production.",
    },
    images: [
      { url: "/images/projects/oncodna/webinar/mockup-1.jpg" },
      { url: "/images/projects/oncodna/webinar/image_1.jpg" },
      { url: "/images/projects/oncodna/webinar/image_2.jpg" },
    ],
    scope: ["UX/UI Design"],
    focus: [
      "Content Strategy",
      "Visual Design",
      "UX/UI Design",
      "Educational Platform",
    ],
    website: "https://www.oncodna.com",
  },
  {
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
  },
  {
    id: "oncodna-branding",
    title: "OncoDNA Branding",
    category: ["Branding", "Visual Communication"],
    type: {
      en: "Precision Oncology & MedTech",
      fr: "Oncologie de Précision & MedTech",
    },
    date: "2016",
    thumbnail: "/images/projects/oncodna/oncodna-brand/portfolio5.jpg",
    description: {
      en: "Foundation and evolution of a cohesive graphic identity for a growing biotech startup over a five-year period.",
      fr: "Création et évolution d'une identité graphique cohérente pour une startup biotech en pleine croissance, sur une période de cinq ans.",
    },
    content: {
      en: "Upon arrival, the priority was to establish a durable and recognizable brand image. This ongoing effort included the design of various communication media (brochures, solution packaging, and trade show materials) ensuring total consistency across all physical and digital touchpoints during the company's expansion.",
      fr: "Dès mon arrivée, la priorité était d'asseoir une image de marque durable et reconnaissable. Ce travail de fond s'est traduit par la conception de nombreux supports de communication (brochures, packaging de solutions, matériaux pour salons professionnels), garantissant une cohérence totale sur l'ensemble des points de contact physiques et digitaux, au fil de l'expansion de l'entreprise.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/oncodna/oncodna-brand/rollup_1.jpg" },
          { url: "/images/projects/oncodna/oncodna-brand/rollup_2.jpg" },
          { url: "/images/projects/oncodna/oncodna-brand/rollup_3.jpg" },
        ],
      },
    ],
    images: [
      { url: "/images/projects/oncodna/oncodna-brand/stationery.jpg" },
      { url: "/images/projects/oncodna/oncodna-brand/logo_evolution.png" },
      { url: "/images/projects/oncodna/oncodna-brand/logo_structure.png" },
      { url: "/images/projects/oncodna/oncodna-brand/logo_variation.png" },
      { url: "/images/projects/oncodna/oncodna-brand/logo_association.png" },
      { url: "/images/projects/oncodna/oncodna-brand/packagings.png" },
      { url: "/images/projects/oncodna/tumor/mockup_2.jpg" },
      { url: "/images/projects/oncodna/tumor/mockup_3.png" },
      { url: "/images/projects/oncodna/oncodna-brand/mockup_1.png" },
      { url: "/images/projects/oncodna/oncodna-brand/mockup_2.jpg" },
    ],
    scope: ["Branding & Visual Communication"],
    focus: [
      "Brand Identity",
      "Visual Identity System",
      "Packaging",
      "Exhibition Design",
      "Marketing Materials",
      "Marketing Strategy",
    ],
    website: "https://www.oncodna.com",
  },
  {
    id: "webkot",
    title: "Webkot",
    category: ["Development", "UX/UI Design", "Branding"],
    type: {
      en: "Community & Event Platform",
      fr: "Plateforme Communautaire & Événementielle",
    },
    date: "2015",
    thumbnail: "/images/projects/webkot/image_1.jpg",
    description: {
      en: "Enhancing student life through a dynamic, community-driven photo-sharing platform for the University of Namur.",
      fr: "Enrichissement de la vie étudiante à travers une plateforme de partage de photos dynamique et communautaire pour l'Université de Namur.",
    },
    content: {
      en: "The project aimed to revitalize campus life by providing a central hub for event photography and social interaction. Features were designed to allow students to manage profiles, share photo albums, and engage with event calendars. The focus was on creating a fast-paced, engaging user experience website in HTML/CSS that encourages community participation.",
      fr: "Le projet visait à dynamiser la vie sur le campus en offrant un espace central pour la photographie événementielle et l'interaction sociale. Les fonctionnalités ont été pensées pour permettre aux étudiants de gérer leurs profils, partager des albums photos et consulter des calendriers d'événements. L'accent était mis sur la création d'une expérience utilisateur rapide et engageante en HTML/CSS, favorisant la participation de toute la communauté.",
    },
    images: [
      { url: "/images/projects/webkot/image_2.jpg" },
      { url: "/images/projects/webkot/image_3.jpg" },
      { url: "/images/projects/webkot/image_4.jpg" },
      { url: "/images/projects/webkot/image_5.jpg" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["HTML", "CSS", "JavaScript"],
    focus: [
      "Photo-Sharing",
      "Event Calendar",
      "UX/UI Design",
      "Interaction Design",
    ],
  },
  {
    id: "namourette",
    title: "La Namourette",
    category: ["Branding", "Visual Communication"],
    type: {
      en: "Tourism & Nautical Experience",
      fr: "Tourisme & Expérience Nautique",
    },
    date: "2015",
    thumbnail: "/images/projects/namourette/home_namourette.jpg",
    description: {
      en: "Reimagining urban mobility in Namur by transforming a traditional river shuttle into a modern, iconic tourism experience.",
      fr: "Réinvention de la mobilité urbaine à Namur en transformant une navette fluviale traditionnelle en une expérience touristique moderne et emblématique.",
    },
    content: {
      en: "This project proposed a shift in the local transport model, drawing inspiration from high-end river tours to create a 'must-see' attraction. Beyond the aesthetic redesign, the focus was on information design to educate tourists about the city's history while addressing urban congestion by promoting river-based travel.",
      fr: "Ce projet proposait une rupture dans le modèle de transport local, en s'inspirant des croisières fluviales haut de gamme pour créer une attraction incontournable. Au-delà de la refonte esthétique, l'accent était mis sur la conception éditoriale pour sensibiliser les touristes à l'histoire de la ville, tout en répondant à la congestion urbaine en promouvant les déplacements par voie d'eau.",
    },
    images: [
      { url: "/images/projects/namourette/image_2.jpg" },
      { url: "/images/projects/namourette/image_3.jpg" },
      { url: "/images/projects/namourette/image_4.jpg" },
      { url: "/images/projects/namourette/image_5.jpg" },
      { url: "/images/projects/namourette/image_6.jpg" },
      { url: "/images/projects/namourette/image_7.jpg" },
      { url: "/images/projects/namourette/image_1.jpg" },
    ],
    scope: ["Branding & Visual Communication"],
    focus: [
      "Concept Development",
      "Brand Identity",
      "Urban Mobility Strategy",
      "Service Design",
    ],
  },
  {
    id: "beer",
    title: "Be(er) Responsible",
    category: ["Visual Communication", "Branding"],
    type: {
      en: "Public Awareness & Social Campaign",
      fr: "Campagne de Sensibilisation & Communication Sociale",
    },
    date: "2015",
    thumbnail: "/images/projects/beer/home_beer.jpg",
    description: {
      en: "Awareness and safety campaign designed for the University of Namur student community.",
      fr: "Campagne de sensibilisation et de sécurité conçue pour la communauté étudiante de l'Université de Namur.",
    },
    content: {
      en: "Commissioned by the university, this campaign focused on student empowerment during campus events. The visual strategy addressed sensitive topics (alcohol consumption, noise pollution, city cleanliness, and safety) through an engaging and non-judgmental graphic style, aiming to foster responsible behavior without sacrificing the social spirit of student life.",
      fr: "Commandée par l'université, cette campagne visait à responsabiliser les étudiants lors des événements sur le campus. La stratégie visuelle abordait des sujets sensibles, consommation d'alcool, nuisances sonores, propreté de la ville, sécurité, à travers un style graphique engageant et bienveillant, pour encourager des comportements responsables sans sacrifier l'esprit festif de la vie étudiante.",
    },
    images: [
      { url: "/images/projects/beer/image_1.jpg" },
      { url: "/images/projects/beer/image_2.jpg" },
      { url: "/images/projects/beer/image_3.jpg" },
    ],
    scope: ["Branding & Visual Communication"],
    focus: [
      "Awareness Campaign Strategy",
      "Brand Indentity",
      "Social Impact Design",
      "Marketing Materials",
    ],
  },
];

export const RECOMMENDATIONS_DATA: Recommendation[] = [
  {
    id: "rec-1",
    name: "Dr. Jean-François Laes",
    linkedin: "https://www.linkedin.com/in/jean-francois-laes-594aa023/",
    role: "Chief Scientific Officer",
    company: "OncoDNA",
    image: "/images/recommendations/jf-laes.jpeg",
    date: "July 2020",
    quote: {
      en: "I had the real pleasure to work with Kevin since his first day in OncoDNA. I was (and still) positivelly astonished by his fast understanding of complex problems related to scientific questions. As a non-scientist I was afraid that it will be very hard for him to understand and translate scientific content in marketing documents, website... But actually I was wrong.<br><br> His level of understanding is really high and he can fastly translate complex information in a very beautiful and comprehensive message, not only for other scientists but also for non-scientists. This is a key asset that I never (or rarely) met in my career. <br><br>He is very hard-worker, always willing to help people by finding solutions taking into account the ressouces available and the time constraints. Stress resistant, fully dedicated to his work and always in good mood, he is a real added value for a company and I recommend him without any hesitation..",
      fr: "J'ai eu le vrai plaisir de travailler avec Kevin dès son premier jour chez OncoDNA. J'ai été — et je le suis toujours — positivement surpris par sa capacité à saisir rapidement des problématiques complexes liées aux questions scientifiques. En tant que non-scientifique, je craignais qu'il lui soit difficile de comprendre et de retranscrire du contenu scientifique dans des documents marketing, sur un site web... Mais j'avais tort.<br><br>Son niveau de compréhension est remarquable : il parvient à traduire des informations complexes en messages à la fois clairs et percutants, accessibles aussi bien aux scientifiques qu'au grand public. C'est une qualité que j'ai rarement rencontrée dans ma carrière.<br><br>Travailleur acharné, toujours prêt à aider en trouvant des solutions adaptées aux ressources disponibles et aux contraintes de temps, résistant au stress, pleinement investi dans son travail et d'une bonne humeur constante — Kevin est une vraie valeur ajoutée pour toute entreprise. Je le recommande sans la moindre hésitation.",
    },
  },
  {
    id: "rec-2",
    name: "Sébastien Sauvage",
    linkedin: "https://www.linkedin.com/in/s%C3%A9bastien-sauvage-8260b548/",
    role: "Production Director",
    company: "OncoDNA",
    image: "/images/recommendations/sebastien-sauvage.jpeg",
    date: "July 2020",
    quote: {
      en: "It was really a nice opportunity and a pleasure to work with Kevin in OncoDNA all those years. He clearly understood the philosophy of the company and was always able to translate the scientific vision in nice marketing tools.<br>He understands fast and even if oncology was not his field at the beginning, with these five years in the company he has gain some scientific background that could and certainly will be useful for his next challenges to come.<br><br>Kevin never counted the hours and is really focus to deliver on time his work. He is always in good mood at work. For all these reasons I recommend him without hesitation, he was a real plus for OncoDNA.",
      fr: "Travailler avec Kevin chez OncoDNA pendant toutes ces années a été une vraie chance et un réel plaisir. Il a su s'approprier la philosophie de l'entreprise et a toujours été capable de traduire la vision scientifique en outils marketing pertinents et efficaces.<br>Il comprend vite, et même si l'oncologie n'était pas son domaine de départ, ces cinq années passées dans l'entreprise lui ont permis d'acquérir une culture scientifique solide qui sera sans aucun doute un atout précieux pour ses prochains défis.<br><br>Kevin n'a jamais compté ses heures et se concentre vraiment sur la livraison dans les délais. Il est de bonne humeur au travail, sans exception. Pour toutes ces raisons, je le recommande sans hésitation — il a été un vrai plus pour OncoDNA.",
    },
  },
  {
    id: "rec-3",
    name: "Marc Buchet",
    linkedin: "https://www.linkedin.com/in/marc-buchet-salesmarketingpharma/",
    role: "Marketing Director",
    company: "OncoDNA",
    image: "/images/recommendations/marc-buchet.jpeg",
    date: "June 2020",
    quote: {
      en: "Kevin is key asset in a department, brimming with innovative ideas, strong team member, he is a hard worker and high socialiser.<br>Creative management, innovation and strong coherence in branding or corporate visual identity, Kevin is a key asset for your company.<br>Kevin was 2 years my graphic and web manager where he delivered high quality creative and sales driven marketing materials. His productions from website creation to fair booth design are alway the best fit between the commercial objectives and the visual balance.<br><br>Moreover digital and social media marketing has no secret for him and he will be happy to teach you as much as he can.<br><br>In short, he's an essential communication and collegial strength for your team and I will definitely recommend him to join your squad.",
      fr: "Kevin est un atout majeur dans une équipe : débordant d'idées innovantes, excellent coéquipier, travailleur acharné et doté d'un grand sens du collectif.<br>Gestion créative, innovation, cohérence forte dans le branding et l'identité visuelle d'entreprise — Kevin est une ressource précieuse pour votre organisation.<br>Il a été pendant deux ans mon responsable graphique et web, livrant des supports marketing créatifs et orientés résultats d'une qualité constante. Ses productions, de la création de sites à la conception de stands de salon, trouvent toujours le juste équilibre entre objectifs commerciaux et pertinence visuelle.<br><br>Le marketing digital et les réseaux sociaux n'ont pas de secrets pour lui, et il saura partager ses connaissances avec enthousiasme.<br><br>En résumé, c'est une force de communication et de cohésion essentielle pour votre équipe — je le recommande vivement.",
    },
  },
];