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
      en: "Operational strategy, internal branding, and high-level UX/UI consulting for a digital consultancy company, bridging human capital and business objectives through consultant coaching, market positioning, and digital transformation.",
      fr: "Stratégie opérationnelle, image de marque interne et conseil UX/UI pour une société de consultance IT, faire le lien entre capital humain et objectifs business, en accompagnant les consultants, affinant le positionnement marché et conduisant la transformation digitale.",
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
      en: "Operational strategy, internal branding, and high-level UX/UI consulting for a digital consultancy company, bridging human capital and business objectives through consultant coaching, market positioning, and digital transformation.",
      fr: "Stratégie opérationnelle, image de marque interne et conseil UX/UI pour une société de consultance IT, faire le lien entre capital humain et objectifs business, en accompagnant les consultants, affinant le positionnement marché et conduisant la transformation digitale.",
    },
    valueAdd: {
      en: "A rare combination of leadership, design thinking, and front-end execution that ensures both operational excellence and a strong, consistent brand presence.",
      fr: "Un excellent mix de leadership, de design thinking et d'exécution frontend, qui garantit à la fois l'excellence opérationnelle et une présence de marque forte et cohérente.",
    },
  },
  {
    year: {
      en: "Mar. 2023 - Mar. 2025",
      fr: "Mars 2023 - Mars 2025",
    },
    role: "UX/UI Designer",
    company: "FR Team (Autotuner)",
    logo: [
      "/images/experience/fr-team.png",
      "/images/experience/autotuner.png",
    ],
    website: ["https://www.fr-team.lu", "https://www.autotuner.com"],
    description: {
      en: 'Complete UX/UI overhaul of the <a href="https://www.autotuner.cloud/login" target="_blank">AutoTuner web application</a>, a complex SaaS ecosystem centralizing file exchanges, customer relations, and vehicle diagnostics for the automotive tuning industry.',
      fr: 'Refonte complète de l\'UX/UI de l\'<a href="https://www.autotuner.cloud/login" target="_blank">application web AutoTuner</a>, un écosystème SaaS complexe centralisant les échanges de fichiers, la relation client et les diagnostics véhicules pour l\'industrie du tuning automobile.',
    },
    missionVia: {
      label: "Mission via",
      company: "TMS Group",
    },
    bottomLine: {
      en: 'Complete UX/UI overhaul of the <a href="https://www.autotuner.cloud/login" target="_blank">AutoTuner web application</a>, a complex SaaS ecosystem centralizing file exchanges, customer relations, and vehicle diagnostics for the automotive tuning industry.',
      fr: 'Refonte complète de l\'UX/UI de l\'<a href="https://www.autotuner.cloud/login" target="_blank">application web AutoTuner</a>, un écosystème SaaS complexe centralisant les échanges de fichiers, la relation client et les diagnostics véhicules pour l\'industrie du tuning automobile.',
    },
    valueAdd: {
      en: "Scalability by design. Transforming a purely technical tool into a seamless, high-performance product used by dealers and clients worldwide.",
      fr: "La scalabilité au service du design. Transformer un outil purement technique en un produit fluide et haute performance, utilisé par des revendeurs et clients à travers le monde.",
    },
  },
  {
    year: {
      en: "Apr. 2022 – Mar. 2023",
      fr: "Avr. 2022 – Mars 2023",
    },
    role: "Front-End Developer",
    company: "Contraste Digital (Rossel)",
    logo: [
      "/images/experience/contraste-digital.png",
      "/images/experience/rossel.png",
    ],
    website: ["https://www.contraste-digital.com/", "https://www.rossel.be"],
    description: {
      en: 'Development and maintenance of high-traffic news platforms within the <a href="https://www.rossel.be" target="_blank">Rossel</a> media group, including <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> and <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, serving millions of readers daily across multiple press brands.',
      fr: 'Développement et maintenance de plateformes d\'information à fort trafic au sein du groupe de presse <a href="https://www.rossel.be" target="_blank">Rossel</a>, dont <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> et <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, au service de millions de lecteurs quotidiens.',
    },
    missionVia: {
      label: "Mission via",
      company: "TMS Group",
    },
    bottomLine: {
      en: 'Development and maintenance of high-traffic news platforms within the <a href="https://www.rossel.be" target="_blank">Rossel</a> media group, including <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> and <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, serving millions of readers daily across multiple press brands.',
      fr: 'Développement et maintenance de plateformes d\'information à fort trafic au sein du groupe de presse <a href="https://www.rossel.be" target="_blank">Rossel</a>, dont <a href="https://www.sudinfo.be" target="_blank">Sudinfo</a>, <a href="https://www.lesoir.be" target="_blank">Le Soir</a>, <a href="https://www.rtl.be" target="_blank">RTL</a>, <a href="https://www.sillonbelge.be" target="_blank">Le Sillon Belge</a> et <a href="https://www.lavoixdunord.fr" target="_blank">La Voix du Nord</a>, au service de millions de lecteurs quotidiens.',
    },
    valueAdd: {
      en: "Technical reliability and delivery speed in a high-pressure, content-driven environment where performance, uptime, and consistency across brands are non-negotiable.",
      fr: "Fiabilité technique et vélocité de livraison dans un environnement exigeant, orienté contenu, où performance, disponibilité et cohérence entre les marques sont non négociables.",
    },
  },
  {
    year: {
      en: "Aug. 2020 - Jan. 2022",
      fr: "Août 2020 - Janv. 2022",
    },
    role: "Digital Creative Specialist",
    company: "The Service Company",
    logo: ["/images/experience/tsc-experts-2.png"],
    website: "https://www.tsc-experts.com/",
    description: {
      en: "Multidisciplinary creative lead for a wide range of B2B and B2C clients, crafting brand identities, designing digital interfaces, and delivering end-to-end web solutions across diverse industries.",
      fr: "Lead créatif multidisciplinaire pour un portefeuille varié de clients B2B et B2C : création d'identités de marque, conception d'interfaces digitales et livraison de solutions web complètes dans des secteurs d'activité très divers.",
    },
    bottomLine: {
      en: "Multidisciplinary creative lead for a wide range of B2B and B2C clients, crafting brand identities, designing digital interfaces, and delivering end-to-end web solutions across diverse industries.",
      fr: "Lead créatif multidisciplinaire pour un portefeuille varié de clients B2B et B2C : création d'identités de marque, conception d'interfaces digitales et livraison de solutions web complètes dans des secteurs d'activité très divers.",
    },
    valueAdd: {
      en: "Versatility across sectors and disciplines. The ability to own an entire project, from brand identity to CMS integration, while adapting tone, aesthetic, and approach to each client's unique context.",
      fr: "Polyvalence sectorielle et disciplinaire. La capacité à porter un projet dans sa globalité, de l'identité de marque à l'intégration CMS, en adaptant le ton, l'esthétique et l'approche au contexte propre de chaque client.",
    },
  },
  {
    year: {
      en: "Sep. 2015 - Aug. 2020",
      fr: "Sept. 2015 - Août 2020",
    },
    role: "Digital Marketing, Graphic, Web & UX/UI Designer",
    company: "OncoDNA",
    logo: ["/images/experience/oncodna.png"],
    website: "https://www.oncodna.com",
    description: {
      en: 'Five years managing the digital presence of a precision medicine leader, including the UX/UI redesign of the flagship <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™ platform</a>, transforming complex genomic data into intuitive interfaces for both clinical experts and patients.',
      fr: 'Cinq ans de gestion de la présence digitale d\'un leader de la médecine de précision, avec notamment la refonte UX/UI de la plateforme phare <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™</a>, transformant des données génomiques complexes en interfaces intuitives pour experts cliniques et patients.',
    },
    subRoles: [
      {
        year: "2017-2020",
        title: "Digital Marketing - Graphic, Web & UX/UI Designer",
      },
      { year: "2015–2017", title: "Graphic & Web Designer" },
    ],
    bottomLine: {
      en: 'Five years managing the digital presence of a precision medicine leader, including the UX/UI redesign of the flagship <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™ platform</a>, transforming complex genomic data into intuitive interfaces for both clinical experts and patients.',
      fr: 'Cinq ans de gestion de la présence digitale d\'un leader de la médecine de précision, avec notamment la refonte UX/UI de la plateforme phare <a href="https://oncodna.com/clinical-oncokdm/" target="_blank">OncoKDM™</a>, transformant des données génomiques complexes en interfaces intuitives pour experts cliniques et patients.',
    },
    valueAdd: {
      en: "Expertise in 'Adaptive Information Design': the ability to present the same high-level scientific data through different lenses to meet the specific emotional and technical needs of doctors versus patients.",
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
    role: {
      en: "End-to-end ownership of the project, from initial concept and UX strategy to full frontend development, without any CMS. Every design decision, line of code, and content architecture was handled independently, in close collaboration with the family owners to capture the soul of each property.",
      fr: "Prise en charge complète du projet de A à Z, du concept initial et de la stratégie UX jusqu'au développement frontend complet, sans CMS. Chaque décision de design, ligne de code et architecture de contenu a été gérée de manière indépendante, en étroite collaboration avec les propriétaires pour capturer l'âme de chaque maison.",
    },
    challenge: {
      en: "Two distinct properties, two different atmospheres, one coherent platform. The original WordPress site treated them as separate entities, forcing visitors to navigate between disconnected pages. The challenge was to unify them under a single elegant experience while preserving each property's individual identity, and to integrate real-time availability synced with Airbnb and Booking.com without relying on any third-party CMS or plugin.",
      fr: "Deux propriétés distinctes, deux atmosphères différentes, une seule plateforme cohérente. L'ancien site WordPress les traitait comme des entités séparées, forçant les visiteurs à naviguer entre des pages déconnectées. L'enjeu était de les unifier sous une seule expérience élégante tout en préservant l'identité propre de chaque maison, et d'intégrer une disponibilité en temps réel synchronisée avec Airbnb et Booking.com sans dépendre d'un CMS ou d'un plugin tiers.",
    },
    content: {
      en: "The project started with an audit of the existing site and a series of conversations with the owners to understand what each property means to them and to their guests. The one-page architecture was chosen deliberately to guide visitors through a narrative rather than a catalogue. The property-switching system was designed to feel effortless: same page, different soul. The multilingual structure (FR/EN/NL/ES) was built natively into the codebase to serve an international audience. The iCal synchronization was implemented from scratch to keep availability up to date across all booking platforms.",
      fr: "Le projet a débuté par un audit du site existant et une série d'échanges avec les propriétaires pour comprendre ce que chaque maison représente pour eux et pour leurs hôtes. L'architecture one-page a été choisie délibérément pour guider les visiteurs à travers une narration plutôt qu'un catalogue. Le système de bascule entre les propriétés a été pensé pour être fluide : même page, âme différente. La structure multilingue (FR/EN/NL/ES) a été intégrée nativement dans le code pour servir un public international. La synchronisation iCal a été implémentée de zéro pour maintenir les disponibilités à jour sur toutes les plateformes de réservation.",
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
            caption: { en: "Mockups - La Crozette", fr: "Maquettes, La Crozette" },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/ipad-crozette.jpg",
            caption: { en: "Mockups - La Crozette", fr: "Maquettes, La Crozette" },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/mockup-crozette-2.jpg",
            caption: { en: "Mockups - La Crozette", fr: "Maquettes, La Crozette" },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/home_pm.jpg",
            caption: { en: "Mockups - La Crozette", fr: "Maquettes, La Crozette" },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/pierres-et-marees/uranie/mockup-uranie-1.jpg",
            caption: { en: "Mockups - Uranie", fr: "Maquettes, Uranie" },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/ipad-uranie.jpg",
            caption: { en: "Mockups - Uranie", fr: "Maquettes, Uranie" },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/mockup-uranie-2.jpg",
            caption: { en: "Mockups - Uranie", fr: "Maquettes, Uranie" },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/home_pm_2.jpg",
            caption: { en: "Mockups - Uranie", fr: "Maquettes, Uranie" },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/pierres-et-marees/crozette/mobile-crozette-1.jpg",
            caption: { en: "Mobile - La Crozette", fr: "Mobile, La Crozette" },
          },
          {
            url: "/images/projects/pierres-et-marees/crozette/mobile-crozette-2.jpg",
            caption: { en: "Mobile - La Crozette", fr: "Mobile, La Crozette" },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/mobile-uranie-1.jpg",
            caption: { en: "Mobile - Uranie", fr: "Mobile, Uranie" },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/pierres-et-marees/crozette/mockup_aplat_crozette.jpg",
            caption: { en: "La Crozette", fr: "La Crozette" },
          },
          {
            url: "/images/projects/pierres-et-marees/uranie/mockup_aplat_uranie.jpg",
            caption: { en: "Uranie", fr: "Uranie" },
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
      en: "Created as part of a recruitment process for a Web Designer position, this project showcases end-to-end design methodology on a mock gym membership platform. Starting with a custom typographic design system, progressing through low-fidelity wireframes built with Odoo's official Wireframe Library, and culminating in polished high-fidelity prototypes. The result is a complete e-commerce flow for a nationwide gym chain, balancing aggressive pricing clarity with premium fitness branding, all designed in Figma to demonstrate technical rigor and visual storytelling under tight deadlines.",
      fr: "Réalisé dans le cadre d'un processus de recrutement pour un poste de Web Designer, ce projet présente une méthodologie de conception de bout en bout appliquée à une fausse plateforme d'adhésion à une salle de sport. Partant d'un système typographique sur mesure, passant par des wireframes basse fidélité construits avec la bibliothèque Odoo officielle, pour aboutir à des prototypes haute fidélité soignés. Le résultat est un parcours e-commerce complet pour une chaîne de salles de sport nationale, alliant une hiérarchie tarifaire lisible à un branding fitness premium, le tout conçu dans Figma pour démontrer rigueur technique et narration visuelle sous contrainte de temps.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/grit/high-def.jpg",
            caption: { en: "High-fidelity Mockup", fr: "Maquette haute fidélité" },
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
    role: {
      en: "Complete ownership of the project, from strategic positioning to production. Every element was self-initiated and self-directed: content strategy, copywriting, UX architecture, visual design, and full frontend integration in React and Vite.",
      fr: "Prise en charge complète du projet, du positionnement stratégique jusqu'à la mise en production. Chaque élément a été initié et dirigé de manière autonome : stratégie éditoriale, rédaction, architecture UX, design visuel et intégration frontend complète en React et Vite.",
    },
    challenge: {
      en: "TMS Group had no digital presence that reflected its actual value as a consultancy. The challenge was to build a platform from scratch, without a brief, without a client validation process, and without a guaranteed launch. Defining the positioning, the narrative, and the technical architecture all at once, while keeping the result credible and production-ready.",
      fr: "TMS Group n'avait pas de présence digitale à la hauteur de sa valeur réelle en tant que société de conseil. L'enjeu était de construire une plateforme de zéro, sans brief, sans processus de validation client, et sans garantie de lancement. Définir le positionnement, la narration et l'architecture technique simultanément, tout en livrant un résultat crédible et prêt pour la production.",
    },
    content: {
      en: "The project started with a positioning exercise: defining what TMS Group actually sells, who it talks to, and how it should present itself to both clients and potential consultants. From there, the information architecture was structured around three core audiences. High-fidelity prototypes were built in Figma before moving to development. The full frontend was integrated in React and Vite, with a focus on performance and scalability. Although a strategic shift within the company prevented an official launch, the project was completed in full.",
      fr: "Le projet a débuté par un exercice de positionnement : définir ce que TMS Group vend réellement, à qui il s'adresse, et comment se présenter à la fois aux clients et aux consultants potentiels. De là, l'architecture de l'information a été structurée autour de trois audiences principales. Des prototypes haute fidélité ont été réalisés dans Figma avant de passer au développement. L'intégralité du frontend a été intégrée en React et Vite, avec un accent sur la performance et l'évolutivité. Bien qu'un changement stratégique au sein de l'entreprise ait empêché le lancement officiel, le projet a été mené à son terme.",
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
    role: {
      en: "Sole UX/UI Designer for the first 6 months, responsible for the full audit of the existing platform, all UX concepts, wireframes, and high-fidelity prototypes. Also heavily involved in frontend integration alongside a second designer who joined later to accelerate delivery.",
      fr: "Seul UX/UI Designer pendant les 6 premiers mois, en charge de l'audit complet de la plateforme existante, de tous les concepts UX, wireframes et prototypes haute fidélité. Fortement impliqué également dans l'intégration frontend, aux côtés d'un second designer arrivé en renfort pour accélérer la livraison.",
    },
    challenge: {
      en: "The existing platform had grown organically over the years, resulting in a fragmented interface full of inconsistencies, complex workflows, and confusing navigation. The challenge was to rethink the entire product experience without disrupting the workflows that power users had built their habits around, while also laying the foundation for a scalable Design System that the development team could maintain long-term.",
      fr: "La plateforme existante avait évolué de manière organique au fil des années, aboutissant à une interface fragmentée, pleine d'incohérences, de parcours complexes et d'une navigation confuse. L'enjeu était de repenser toute l'expérience produit sans désorienter les utilisateurs avancés qui avaient construit leurs habitudes dessus, tout en posant les bases d'un Design System évolutif que l'équipe de développement pourrait maintenir sur le long terme.",
    },
    content: {
      en: "The process started with a thorough audit of the legacy platform, identifying pain points, redundant flows, and structural inconsistencies. Card sorting sessions helped reorganize the information architecture before any screen was designed. From there, the work progressed iteratively: low-fidelity concepts, stakeholder reviews, high-fidelity prototypes, and frontend integration using Svelte. The Design System was built and documented in Storybook in parallel, ensuring every component was reusable and consistent across the growing suite of tools.",
      fr: "La démarche a débuté par un audit approfondi de l'ancienne plateforme, identification des points de friction, des parcours redondants et des incohérences structurelles. Des sessions de tri de cartes ont permis de réorganiser l'architecture de l'information avant de concevoir le moindre écran. Le travail a ensuite progressé de manière itérative : concepts basse fidélité, revues avec les parties prenantes, prototypes haute fidélité, puis intégration frontend en Svelte. Le Design System a été construit et documenté dans Storybook en parallèle, garantissant que chaque composant soit réutilisable et cohérent à travers la suite d'outils en expansion.",
    },
    images: [
      { url: "/images/projects/autotuner/image_0.jpg" },
      { url: "/images/projects/autotuner/mockup-0.png" },
      { url: "/images/projects/autotuner/mockup-1.png" },
      { url: "/images/projects/autotuner/mockup-2.png" },
      { url: "/images/projects/autotuner/mockup-3.png" },
      {
        url: "/images/projects/autotuner/design-1.png",
        caption: { en: "Design system colors", fr: "Couleurs du design system" },
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
        caption: { en: "Signup process", fr: "Parcours d'inscription" },
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
    role: {
      en: "Frontend developer within a two-person team on the full integration of Sudinfo and Le Sillon Belge, from first component to production release. Also part of a larger team of 3-4 frontend and 3-4 backend developers handling maintenance and continuous improvements across Le Soir, RTL, and La Voix du Nord.",
      fr: "Développeur frontend au sein d'une équipe de deux personnes sur l'intégration complète de Sudinfo et Le Sillon Belge, du premier composant jusqu'à la mise en production. Également intégré à une équipe plus large de 3-4 développeurs frontend et 3-4 backend pour la maintenance et l'amélioration continue du Soir, RTL et La Voix du Nord.",
    },
    challenge: {
      en: "Working across multiple press brands simultaneously means navigating a complex constraint: each platform has its own editorial identity, its own audience, and its own business rules, yet all must share the same technical foundation, the same Drupal/Twig architecture, and the same deployment pipeline. Maintaining consistency without erasing distinctiveness was the constant challenge, in a high-pressure environment where a broken feature affects millions of readers.",
      fr: "Travailler sur plusieurs marques de presse simultanément implique de naviguer une contrainte complexe : chaque plateforme a son identité éditoriale propre, son audience, ses règles métier, et pourtant toutes partagent la même base technique, la même architecture Drupal/Twig et le même pipeline de déploiement. Maintenir la cohérence sans effacer la distinctivité était le défi permanent, dans un environnement sous pression où une fonctionnalité cassée impacte des millions de lecteurs.",
    },
    content: {
      en: "Each integration followed a structured process: technical audit of the existing codebase, alignment with the lead developer on the component breakdown, then iterative development with continuous testing across devices and browsers. Newsletter workflows, user profile management, and subscription funnels were optimized across all platforms, requiring a deep understanding of both the editorial and the business logic behind each brand. The complexity of large-scale media systems, where a single template change can cascade across hundreds of article layouts, was a constant learning experience.",
      fr: "Chaque intégration suivait un processus structuré : audit technique du code existant, alignement avec le développeur principal sur le découpage des composants, puis développement itératif avec des tests continus sur les appareils et navigateurs. Les workflows de newsletters, la gestion des profils utilisateurs et les tunnels d'abonnement ont été optimisés sur toutes les plateformes, nécessitant une compréhension approfondie à la fois de la logique éditoriale et business propre à chaque marque. La complexité des systèmes médias à grande échelle, où un seul changement de template peut se répercuter sur des centaines de mises en page d'articles, a été une expérience d'apprentissage permanente.",
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
          { url: "/images/projects/rossel/Sudinfo_01.jpg" },
          { url: "/images/projects/rossel/Sudinfo_02.jpg" },
          { url: "/images/projects/rossel/Sudinfo_03.jpg" },
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
        type: "image",
        image: { url: "/images/projects/rossel/mockup_aplat_sillon.jpg" },
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
            caption: { en: "Wireframes low fidelity", fr: "Wireframes basse fidélité" },
          },
          {
            url: "/images/projects/tsc/helpix/wireframe_2.jpg",
            caption: { en: "Wireframes high fidelity", fr: "Wireframes haute fidélité" },
          },
        ],
      },
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/tsc/helpix/process_1.png",
            caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
          },
          {
            url: "/images/projects/tsc/helpix/process_2.png",
            caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
          },
          {
            url: "/images/projects/tsc/helpix/process_3.png",
            caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
          },
          {
            url: "/images/projects/tsc/helpix/process_4.png",
            caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
          },
          {
            url: "/images/projects/tsc/helpix/process_5.png",
            caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
          },
          {
            url: "/images/projects/tsc/helpix/process_6.png",
            caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
          },
          {
            url: "/images/projects/tsc/helpix/process_7.png",
            caption: { en: "Process ordering repair", fr: "Parcours de commande, réparation" },
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
        caption: { en: "Evolution logo TSC", fr: "Évolution du logo TSC" },
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
    role: {
      en: "UX audit and redesign proposal as part of a recruitment process. Full heuristic analysis of the existing mobile application, identification of friction points, and delivery of a redesigned user journey with updated visual direction.",
      fr: "Audit UX et proposition de redesign dans le cadre d'un processus de recrutement. Analyse heuristique complète de l'application mobile existante, identification des points de friction, et livraison d'un parcours utilisateur repensé avec une nouvelle direction visuelle.",
    },
    challenge: {
      en: "Epilepsy management requires patients to log events, seizures, medication, appointments, often in stressful or post-ictal states. The existing app made this process unnecessarily complex, with a cluttered interface that added cognitive load at exactly the wrong moment. The challenge was to redesign the event logging flow to be as fast, intuitive, and reassuring as possible, without losing the medical precision required by neurologists.",
      fr: "La gestion de l'épilepsie demande aux patients de journaliser des événements, crises, médicaments, rendez-vous, souvent dans des états de stress ou post-ictaux. L'application existante rendait ce processus inutilement complexe, avec une interface surchargée qui ajoutait de la charge cognitive au pire moment. L'enjeu était de repenser le parcours de journalisation pour le rendre aussi rapide, intuitif et rassurant que possible, sans perdre la précision médicale requise par les neurologues.",
    },
    content: {
      en: "The audit was based on Nielsen's 10 heuristics, applied to each screen of the existing application. The most critical issues were identified in the event logging flow: too many steps, unclear hierarchy, and no sense of progress or confirmation. The redesign proposal focused on reducing the number of taps to log a seizure, introducing a clearer visual hierarchy, and adding micro-interactions to provide reassurance during the input process. A visual refresh was also proposed to modernize the interface while maintaining the clinical clarity required for medical use.",
      fr: "L'audit s'est appuyé sur les 10 heuristiques de Nielsen, appliquées à chaque écran de l'application existante. Les problèmes les plus critiques ont été identifiés dans le parcours de journalisation des événements : trop d'étapes, hiérarchie visuelle peu claire, absence de sentiment de progression ou de confirmation. La proposition de redesign s'est concentrée sur la réduction du nombre de taps pour journaliser une crise, l'introduction d'une hiérarchie visuelle plus claire, et l'ajout de micro-interactions pour rassurer l'utilisateur pendant la saisie. Un rafraîchissement visuel a également été proposé pour moderniser l'interface tout en conservant la clarté clinique indispensable à un usage médical.",
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
    role: {
      en: "For 3 years, sole UX/UI Designer on the OncoSHARE platform (OncoKDM's predecessor), building and evolving the product from the ground up. When a full redesign was initiated, the work was shared with a second designer, collaborating closely on user flows and page designs, while also taking the lead on frontend integration using Angular Material (the second designer had no development background).",
      fr: "Pendant 3 ans, seul UX/UI Designer sur la plateforme OncoSHARE (l'ancêtre d'OncoKDM), construisant et faisant évoluer le produit de A à Z. Lors du redesign complet, le travail a été partagé avec une seconde designer, collaboration étroite sur les parcours utilisateurs et les designs de pages, tout en prenant en charge l'intégration frontend via Angular Material (la seconde designer n'ayant pas de profil développement).",
    },
    challenge: {
      en: "OncoKDM™ serves two fundamentally different audiences: oncologists who need dense, precise clinical data at a glance, and patients who need to understand their health journey in clear, reassuring terms. Designing a single platform that speaks fluently to both, without compromising depth for professionals or clarity for patients, was the core challenge. Added to this was the medical compliance context, where every UX decision carries real consequences.",
      fr: "OncoKDM™ s'adresse à deux publics fondamentalement différents : des oncologues qui ont besoin de données cliniques denses et précises en un coup d'œil, et des patients qui cherchent à comprendre leur parcours de santé en termes clairs et rassurants. Concevoir une seule plateforme qui parle couramment aux deux, sans sacrifier la profondeur pour les professionnels ni la clarté pour les patients, était le défi central. À cela s'ajoutait le contexte de conformité médicale, où chaque décision UX a des conséquences réelles.",
    },
    content: {
      en: "User testing was conducted primarily with oncologists, given the difficulty of recruiting patients for clinical tools. Workshops with the medical and product teams helped map the critical workflows: report generation, genomic data visualization, and appointment tracking. The interface was designed to adapt its information density based on the user profile, with a shared component library ensuring visual consistency across both experiences. Frontend integration in Angular Material was handled in close collaboration with the development team.",
      fr: "Les tests utilisateurs ont été réalisés principalement avec des oncologues, compte tenu de la difficulté à recruter des patients pour des outils cliniques. Des ateliers avec les équipes médicales et produit ont permis de cartographier les parcours critiques : génération de rapports, visualisation des données génomiques, suivi des rendez-vous. L'interface a été conçue pour adapter sa densité d'information selon le profil utilisateur, avec une bibliothèque de composants commune garantissant la cohérence visuelle des deux expériences. L'intégration frontend en Angular Material a été assurée en étroite collaboration avec l'équipe de développement.",
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
    role: {
      en: "Design lead and co-developer on an OncoDNA campaign project. Responsible for the full UX and visual design, the content architecture across 6 cancer types, and the frontend integration. The dynamic PDF generation system was built in collaboration with the backend developer.",
      fr: "Lead design et co-développeur sur un projet de campagne OncoDNA. Responsable du design UX et visuel complet, de l'architecture de contenu sur 6 types de cancer, et de l'intégration frontend. Le système de génération dynamique de PDF a été construit en collaboration avec le développeur backend.",
    },
    challenge: {
      en: "Cancer is not a single disease, and patients with different molecular profiles need different information. The challenge was to design a platform that could deliver personalized, scientifically accurate content to patients across 6 of the most common cancer types, without overwhelming them. Each landing page needed to feel relevant and specific, not generic, while staying within a coherent visual and editorial system. The downloadable PDF feature added a technical layer: generating a document personalized to each patient's profile, ready to bring to a medical consultation.",
      fr: "Le cancer n'est pas une maladie unique, et les patients avec des profils moléculaires différents ont besoin d'informations différentes. L'enjeu était de concevoir une plateforme capable de délivrer un contenu personnalisé et scientifiquement précis aux patients sur 6 des types de cancer les plus répandus, sans les submerger. Chaque page d'accueil devait sembler pertinente et spécifique, pas générique, tout en s'inscrivant dans un système visuel et éditorial cohérent. La fonctionnalité de PDF téléchargeable ajoutait une couche technique : générer un document personnalisé selon le profil de chaque patient, prêt à apporter lors d'une consultation médicale.",
    },
    content: {
      en: "The project started with a content mapping exercise across the 6 cancer types covered: HR+ Breast Cancer, HER2+ Breast Cancer, Triple Negative Breast Cancer, Colorectal Cancer, Non-Small Cell Lung Cancer, and Prostate Cancer. For each, the information hierarchy was designed to guide patients from their diagnosis context toward understanding why molecular profiling matters for their specific case. High-fidelity prototypes were validated with the medical team before development. The frontend was built in HTML/CSS with dynamic data integration handled by the backend, feeding the personalized PDF generation system.",
      fr: "Le projet a débuté par un exercice de cartographie du contenu sur les 6 types de cancer couverts : Cancer du sein HR+, Cancer du sein HER2+, Cancer du sein triple négatif, Cancer colorectal, Cancer du poumon non à petites cellules et Cancer de la prostate. Pour chacun, la hiérarchie de l'information a été pensée pour guider les patients depuis leur contexte de diagnostic vers la compréhension de pourquoi le profilage moléculaire importe dans leur cas spécifique. Les prototypes haute fidélité ont été validés avec l'équipe médicale avant le développement. Le frontend a été construit en HTML/CSS avec une intégration dynamique des données gérée par le backend, alimentant le système de génération de PDF personnalisés.",
    },
    contentBlocks: [
      {
        type: "carousel",
        images: [
          {
            url: "/images/projects/oncodna/mcid/browser_1.png",
            caption: { en: "Landing page for HR+ Breast Cancer", fr: "Page d'accueil, Cancer du sein HR+" },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_2.png",
            caption: { en: "Landing page for HER2+ Breast Cancer", fr: "Page d'accueil, Cancer du sein HER2+" },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_3.png",
            caption: { en: "Landing page for Triple Negative Breast Cancer", fr: "Page d'accueil, Cancer du sein triple négatif" },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_4.png",
            caption: { en: "Landing page for Colorectal Cancer", fr: "Page d'accueil, Cancer colorectal" },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_5.png",
            caption: { en: "Landing page for Non Small Cell Lung Cancer", fr: "Page d'accueil, Cancer du poumon non à petites cellules" },
          },
          {
            url: "/images/projects/oncodna/mcid/browser_6.png",
            caption: { en: "Landing page for Prostate Cancer", fr: "Page d'accueil, Cancer de la prostate" },
          },
        ],
      },
    ],
    images: [
      { url: "/images/projects/oncodna/mcid/portfolio8-2.jpg" },
      { url: "/images/projects/oncodna/mcid/image_1.jpg" },
      {
        url: "/images/projects/oncodna/mcid/image_2.jpg",
        caption: { en: "Generated PDF file for HER2+ Breast Cancer", fr: "Fichier PDF généré, Cancer du sein HER2+" },
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
      en: "From the very start, the priority was to establish a durable and recognizable brand image. This ongoing effort included the design of various communication media (brochures, solution packaging, and trade show materials) ensuring total consistency across all physical and digital touchpoints during the company's expansion.",
      fr: "Dès le départ, la priorité était d'asseoir une image de marque durable et reconnaissable. Ce travail de fond s'est traduit par la conception de nombreux supports de communication (brochures, packaging de solutions, matériaux pour salons professionnels), garantissant une cohérence totale sur l'ensemble des points de contact physiques et digitaux, au fil de l'expansion de l'entreprise.",
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
      en: "The project aimed to revitalize campus life by providing a central hub for event photography and social interaction. Features were designed to allow students to manage profiles, share photo albums, and engage with event calendars. The focus was on creating a fast-paced, engaging user experience in HTML/CSS that encourages community participation.",
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
      en: "This project proposed a shift in the local transport model, drawing inspiration from high-end river tours to create a must-see attraction. Beyond the aesthetic redesign, the focus was on information design to educate tourists about the city's history while addressing urban congestion by promoting river-based travel.",
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