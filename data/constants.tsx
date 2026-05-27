import { ExperienceItem, LightningItem, Project, Recommendation } from './types';

export type ProjectFilterOption = {
  id: string;
  label: string;
  categories?: string[];
};

export const PROJECT_FILTER_OPTIONS: ProjectFilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'ux-ui-design', label: 'UX/UI Design', categories: ['UX/UI Design'] },
  { id: 'development', label: 'Development', categories: ['Development'] },
  { id: 'branding', label: 'Branding', categories: ['Branding'] },
  { id: 'visual-communication', label: 'Visual Communication', categories: ['Visual Communication'] },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    year: "Mar. 2022 – Present",
    role: "Operations & Marketing Manager, UX/UI Consultant",
    company: "TMS Group",
    logo: ["/images/experience/tms-group.png"],
    website: "https://www.tms-group.be",
    description: "I lead the operational strategy and internal branding of the digital consultancy company while providing high-level UX/UI consulting and frontend integration for our clients. As Operations & Marketing Manager, I bridge the gap between human capital and business objectives by coaching consultants, refining market positioning, and driving the company's digital transformation.",
    subRoles: [
      { year: "2025-2026", title: "Marketing, Operations Manager & UX/UI Consultant" },
      { year: "2023-2025", title: "Manager & UX/UI Consultant" },
      { year: "2022–2023", title: "UX/UI Consultant" }
    ],
    bottomLine: "I lead the operational strategy and internal branding of the digital consultancy company while providing high-level UX/UI consulting and frontend integration for our clients. As Operations & Marketing Manager, I bridge the gap between human capital and business objectives by coaching consultants, refining market positioning, and driving the company's digital transformation.",
    valueAdd: "A rare combination of leadership, design thinking, and front-end execution that ensures both operational excellence and a strong, consistent brand presence."
  },
  {
    year: "Mar. 2023 - Mar. 2025",
    role: "UX/UI Designer",
    company: "FR Team (Autotuner)",
    logo: ["/images/experience/fr-team.png", "/images/experience/autotuner.png"],
    website: ["https://www.fr-team.lu", "https://www.autotuner.com"],
    description: "Led the complete UX/UI overhaul of the <a href=\"https://www.autotuner.cloud/login\" target=\"_blank\">AutoTuner web application</a>, a complex SaaS ecosystem centralizing file exchanges, customer relations, and vehicle diagnostics for the automotive tuning industry.",
    missionVia: {
      label: "Mission via",
      company: "TMS Group",
    },
    bottomLine: "Led the complete UX/UI overhaul of the <a href=\"https://www.autotuner.cloud/login\" target=\"_blank\">AutoTuner web application</a>, a complex SaaS ecosystem centralizing file exchanges, customer relations, and vehicle diagnostics for the automotive tuning industry.",
    valueAdd: "Scalability by design. Transforming a purely technical tool into a seamless, high-performance product used by dealers and clients worldwide."
  },
  {
    year: "Apr. 2022 – Mar. 2023",
    role: "Front-End Developer",
    company: "Contraste Digital (Rossel)",
    logo: ["/images/experience/contraste-digital.png", "/images/experience/rossel.png"],
    website: ["https://www.contraste-digital.com/", "https://www.rossel.be"],
    description: "Integrated within the digital team of a major media group (<a href=\"https://www.rossel.be\" target=\"_blank\">Rossel</a>), I handled the development and maintenance of high-traffic news platforms like <a href=\"https://www.sudinfo.be\" target=\"_blank\">Sudinfo</a>, <a href=\"https://www.lesoir.be\" target=\"_blank\">Le Soir</a>, <a href=\"https://www.rtl.be\" target=\"_blank\">RTL</a>, <a href=\"https://www.sillonbelge.be\" target=\"_blank\">Le Sillon Belge</a> and also <a href=\"https://www.lavoixdunord.fr\" target=\"_blank\">La Voix du Nord</a>, serving millions of readers daily across multiple press brands.",
    missionVia: {
      label: "Mission via",
      company: "TMS Group",
    },
    bottomLine: "Integrated within the digital team of a major media group (<a href=\"https://www.rossel.be\" target=\"_blank\">Rossel</a>), I handled the development and maintenance of high-traffic news platforms like <a href=\"https://www.sudinfo.be\" target=\"_blank\">Sudinfo</a>, <a href=\"https://www.lesoir.be\" target=\"_blank\">Le Soir</a>, <a href=\"https://www.rtl.be\" target=\"_blank\">RTL</a>, <a href=\"https://www.sillonbelge.be\" target=\"_blank\">Le Sillon Belge</a> and also <a href=\"https://www.lavoixdunord.fr\" target=\"_blank\">La Voix du Nord</a>, serving millions of readers daily across multiple press brands.",
    valueAdd: "Technical reliability and delivery speed in a high-pressure, content-driven environment where performance, uptime, and consistency across brands are non-negotiable."
  },
  {
    year: "Aug. 2020 - Jan. 2022",
    role: "Digital Creative Specialist",
    company: "The Service Company",
    logo: ["/images/experience/tsc-experts-2.png"],
    website: "https://www.tsc-experts.com/",
    description: "Acted as a multidisciplinary creative lead for a wide range of B2B and B2C clients, crafting brand identities, designing digital interfaces, and delivering end-to-end web solutions across diverse industries.",
    bottomLine: "Acted as a multidisciplinary creative lead for a wide range of B2B and B2C clients, crafting brand identities, designing digital interfaces, and delivering end-to-end web solutions across diverse industries.",
    valueAdd: "Versatility across sectors and disciplines. The ability to own an entire project, from brand identity to CMS integration, while adapting tone, aesthetic, and approach to each client's unique context."
  },
  {
    year: "Sep. 2015 - Aug. 2020",
    role: "Digital Marketing, Graphic, Web & UX/UI Designer",
    company: "OncoDNA",
    logo: ["/images/experience/oncodna.png"],
    website: "https://www.oncodna.com",
    description: "Managed the digital presence of a precision medicine leader for 5 years. I also spearheaded the UX/UI redesign of the flagship <a href=\"https://oncodna.com/clinical-oncokdm/\" target=\"_blank\">OncoKDM™ platform</a>, transforming complex genomic data into intuitive interfaces for both clinical experts and patients.",
    subRoles: [
      { year: "2017-2020", title: "Digital Marketing - Graphic, Web & UX/UI Designer" },
      { year: "2015–2017", title: "Graphic & Web Designer" }
    ],
    bottomLine: "Managed the digital presence of a precision medicine leader for 5 years. I also spearheaded the UX/UI redesign of the flagship <a href=\"https://oncodna.com/clinical-oncokdm/\" target=\"_blank\">OncoKDM™ platform</a>, transforming complex genomic data into intuitive interfaces for both clinical experts and patients.",
    valueAdd: "Expertise in 'Adaptive Information Design', the ability to present the same high-level scientific data through different lenses to meet the specific emotional and technical needs of doctors versus patients."
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "pierres-et-marees",
    title: "Pierres & Marées",
    category: ["Development", "UX/UI Design"],
    type: "Vacation Rental & Travel",
    date: "May 2026",
    thumbnail: "/images/projects/pierres-et-marees/crozette/ipad-crozette.jpg",
    description: "Complete redesign of a vacation rental platform, transforming two outdated WordPress sites into a unified, modern booking experience.",
    content: "This project reimagined the entire digital presence for two exceptional French holiday homes: La Crozette in Provence and Uranie overlooking the Bay of Somme. The original 2015 WordPress site suffered from fragmented navigation and a confusing user experience, treating both properties as disconnected entities across separate pages. The challenge was to create a cohesive ecosystem that allows visitors to seamlessly explore both houses, check real-time availability, and book directly through an integrated form. The solution is a fluid one-page site featuring an elegant property-switching system, a calendar synchronized with Airbnb and Booking.com via iCal, and a multilingual architecture (FR/EN/NL/ES) designed for an international audience seeking authentic French countryside getaways.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/pierres-et-marees/old/crozette_0.jpg", caption: "Old wordpress website - Homepage" },
          { url: "/images/projects/pierres-et-marees/old/crozette_1.jpg", caption: "Old wordpress website - Description" },
          { url: "/images/projects/pierres-et-marees/old/crozette_2.jpg", caption: "Old wordpress website - Access" },
          { url: "/images/projects/pierres-et-marees/old/crozette_3.jpg", caption: "Old wordpress website - Booking" },
          { url: "/images/projects/pierres-et-marees/old/crozette_4.jpg", caption: "Old wordpress website - Uranie Homepage" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/pierres-et-marees/crozette/mockup-crozette-1.jpg", caption: "Mockups - La Crozette" },
          { url: "/images/projects/pierres-et-marees/crozette/ipad-crozette.jpg", caption: "Mockups - La Crozette" },
          { url: "/images/projects/pierres-et-marees/crozette/mockup-crozette-2.jpg", caption: "Mockups - La Crozette"},
          { url: "/images/projects/pierres-et-marees/crozette/home_pm.jpg", caption: "Mockups - La Crozette" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/pierres-et-marees/uranie/mockup-uranie-1.jpg", caption: "Mockups - Uranie" },
          { url: "/images/projects/pierres-et-marees/uranie/ipad-uranie.jpg", caption: "Mockups - Uranie" },
          { url: "/images/projects/pierres-et-marees/uranie/mockup-uranie-2.jpg", caption: "Mockups - Uranie"},
          { url: "/images/projects/pierres-et-marees/uranie/home_pm_2.jpg", caption: "Mockups - Uranie" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/pierres-et-marees/crozette/mobile-crozette-1.jpg", caption: "Mobile - La Crozette"},
          { url: "/images/projects/pierres-et-marees/crozette/mobile-crozette-2.jpg", caption: "Mobile - La Crozette"},
          { url: "/images/projects/pierres-et-marees/uranie/mobile-uranie-1.jpg", caption: "Mobile - Uranie"},
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
    type: "E-commerce & Fitness",
    date: "April 2026",
    thumbnail: "/images/projects/grit/home_grit.jpg",
    description: "Strategic UX/UI design challenge for a fictional fitness brand, demonstrating full-stack design thinking from typography system to high-fidelity e-commerce prototypes.",
    content: "Created as part of a recruitment process Web Designer position, this project showcases end-to-end design methodology on a mock gym membership platform. Starting with a custom typographic design system, progressing through low-fidelity wireframes built with Odoo's official Wireframe Library, and culminating in polished high-fidelity prototypes. The result is a complete e-commerce flow for a nationwide gym chain, balancing aggressive pricing clarity with premium fitness branding — all designed in Figma to demonstrate technical rigor and visual storytelling under tight deadlines.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/grit/high-def.jpg", caption: "High-fidelity Mockup" },
          { url: "/images/projects/grit/low-def.jpg", caption: "Low-fidelity wireframes (Odoo Library with Bebas font)" },
        ],
      },
    ],
    images: [
      { url: "/images/projects/grit/font-system.jpg", caption: "Design system fonts hierarchy" },
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
    type: "Consulting & Digital Strategy",
    date: "April 2026",
    thumbnail: "/images/projects/tms/home_tms.jpg",
    description: "A proactive end-to-end digital transformation for TMS Group, evolving from a strategic vision to a fully functional React-based platform.",
    content: "Originally initiated to modernize the group's digital footprint, this project was carried out as a personal mission to bridge the gap between design and production. Although a strategic shift in the company's direction prevented an official commercial launch, the project was completed as a matter of principle. I handled the entire lifecycle: from strategic copywriting and high-fidelity UI prototyping to the full technical integration using React and Vite, ensuring a high-performance and scalable showcase.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tms/image_ca_1.jpg"},
          { url: "/images/projects/tms/image_ca_2.jpg"},
          { url: "/images/projects/tms/image_ca_3.jpg"},
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
    images: [
      { url: "/images/projects/tms/image_tms_1.jpg" },
     
    ],
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
    type: "Automotive Software & SaaS",
    date: "2025",
    thumbnail: "/images/projects/autotuner/home_autotuner.jpg",
    description: "Architecting a high-performance SaaS ecosystem for the automotive tuning industry leader, bridging complex binary data management with a premium user experience.",
    content: "This project focused on the complete UI/UX overhaul of the AutoTuner web platform, centralizing file exchanges, customer relations, and vehicle diagnostics. To solve the challenge of scalability across their growing suite of tools, I spearheaded the creation of a robust Design System. Built with Svelte and documented via Storybook, this component library allowed for a seamless integration into the Symfony backend. The result is a unified, developer-friendly environment that ensures visual consistency while significantly reducing front-end production time for new features.",
    images: [
      { url: "/images/projects/autotuner/image_0.jpg" },
      { url: "/images/projects/autotuner/mockup-0.png" },
      { url: "/images/projects/autotuner/mockup-1.png" },
      { url: "/images/projects/autotuner/mockup-2.png" },
      { url: "/images/projects/autotuner/mockup-3.png" },
      { url: "/images/projects/autotuner/design-1.png", caption: "Design system colors" },
      { url: "/images/projects/autotuner/design-2.png", caption: "Design system fonts, buttons, inputs, etc." },
      { url: "/images/projects/autotuner/design-3.png", caption: "Design system spacings, columns, etc." },
      { url: "/images/projects/autotuner/sidebar.png" },
      { url: "/images/projects/autotuner/signup-process.jpg", caption: "Signup process" },
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
    type: "Mass Media & Digital Publishing",
    date: "2023",
    thumbnail: "/images/projects/rossel/home_rossel.jpg",
    description: "Strategic contribution to Belgium’s leading media group, optimizing reader engagement and digital retention through high-traffic news interfaces.",
    content: "This mission was less about designing isolated pages and more about orchestrating consistency across a complex media ecosystem. Working inside the <a href=\"https://www.rossel.be\" target=\"_blank\">Rossel</a> environment, I contributed to major editorial platforms such as <a href=\"https://www.sudinfo.be\" target=\"_blank\">Sudinfo</a>, <a href=\"https://www.lesoir.be\" target=\"_blank\">Le Soir</a>, <a href=\"https://www.rtl.be\" target=\"_blank\">RTL</a>, <a href=\"https://www.sillonbelge.be\" target=\"_blank\">Le Sillon Belge</a> and <a href=\"https://www.lavoixdunord.fr\" target=\"_blank\">La Voix du Nord</a>. On Le Soir, RTL and La Voix du Nord, my role focused primarily on maintenance and continuous improvements. For Sudinfo and Le Sillon Belge, we handled full-scope integrations from scratch, from implementation to production release. Across all platforms, we also optimized newsletter workflows, user profile management, and subscription funnels (GPG/PCG).",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Image-vdn01.jpg"},
          { url: "/images/projects/rossel/Image-vdn02.jpg"},
          { url: "/images/projects/rossel/Image-vdn03.jpg"},
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Sillon-01.jpg"},
          { url: "/images/projects/rossel/Sillon-03.jpg"},
          { url: "/images/projects/rossel/Sillon-04.jpg"},
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/rossel/Sudinfo_01.jpg"},
          { url: "/images/projects/rossel/Sudinfo_02.jpg"},
          { url: "/images/projects/rossel/Sudinfo_03.jpg"},
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
    type: "Sport & Lifestyle",
    date: "2022",
    thumbnail: "/images/projects/tsc/sept/home_sept.jpg",
    description: "Creation of a comprehensive brand universe for a premium sports club, translating an entrepreneurial vision into a strong, modern visual identity.",
    content: "Built from the ground up, the brand architecture and graphic identity were defined to reflect values of community and excellence. The project culminated in the launch of a high-conversion showcase website designed to attract new members by highlighting the club’s unique atmosphere and ensuring effortless information access.",
    images: [
      { url: "/images/projects/tsc/sept/portfolio24.jpg" },
      { url: "/images/projects/tsc/sept/image_1.jpg" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: [
      "Brand Design", 
      "Visual Identity", 
      "UX/UI Design"
    ],
    website: "https://www.septclub.be/",
  },

  {
    id: "jardins",
    title: "Les Jardins de Là-Bas",
    category: ["Branding", "Development", "UX/UI Design"],
    type: "Urban Development & Living",
    date: "2022",
    thumbnail: "/images/projects/tsc/jardin/home_jardin.jpg",
    description: "Digital communication strategy for an ambitious intergenerational real estate development, aimed at humanizing the project for future residents.",
    content: "The work included the design of the visual identity and an informative website dedicated to the new district. Artistic direction was guided by on-site photography to capture the true essence of the location. The resulting platform allows for seamless navigation through project details while conveying a sustainable and social vision.",
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
    type: "Traffic & Emergency Solutions",
    date: "2022",
    thumbnail: "/images/projects/tsc/rauwers/home_rauwers.jpg",
    description: "User experience optimization for a European leader in mobility and safety solutions, aimed at clarifying a complex digital presence.",
    content: "The mission focused on restructuring a content-heavy platform for better performance. Information architecture was reworked to divide massive amounts of data into intuitive categories, ensuring a fluid browsing experience. The project also included a new iconography system and full SEO optimization to support international growth.",
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
    type: "Financial & Tax Consulting",
    date: "2022",
    thumbnail: "/images/projects/tsc/sogenam/home_sogenam.jpg",
    description: "Modernizing the image of a long-standing fiduciary group by making accounting expertise accessible and human without compromising professional rigor.",
    content: "A new modern graphic identity and showcase website were designed for the group. By introducing team photography and refining the visual vocabulary, the client relationship was humanized.",
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
    type: "Craftsmanship & Interior Design",
    date: "2021",
    thumbnail: "/images/projects/tsc/aubier/home_aubier.jpg",
    description: "Digital transformation for a high-end carpentry business with a 35-year legacy, moving from social media presence to a premium web showcase.",
    content: "The project focused on structuring a content architecture that highlights craftsmanship in custom furniture and interior fittings. High-fidelity prototypes with fluid interactions were developed to mirror the elegance of the woodwork. The final result involved close collaboration with the development team for a pixel-perfect WordPress integration.",
    images: [
      { url: "/images/projects/tsc/aubier/image_0.jpg" },
      { url: "/images/projects/tsc/aubier/image_1.jpg" },
    ],
    scope: ["UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: [
      "UX/UI Design", 
      "UX Strategy", 
      "Content Architecture"
      ],
      website: "https://www.aubier.be/",
  },

  {
    id: "palais",
    title: "Pa'lais",
    category: ["UX/UI Design"],
    type: "Organic Food Retail",
    date: "2021",
    thumbnail: "/images/projects/tsc/palais/home_palais.jpg",
    description: "Creative proposal for a bio-organic plant-based brand, aiming to modernize its digital image while staying true to its ethical roots.",
    content: "As part of a website redesign tender, the homepage user experience was reimagined to better translate the texture and taste pleasure of the products. The result is a fresh, appetizing interface that bridges the gap between modern aesthetics and product discovery.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/palais/mockup_1.png"},
          { url: "/images/projects/tsc/palais/mockup_2.png"},
          { url: "/images/projects/tsc/palais/mockup_3.png"},
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/palais/proto_1.jpg"},
          { url: "/images/projects/tsc/palais/proto_2.jpg"},
          { url: "/images/projects/tsc/palais/proto_3.jpg"},
        ],
      },
    ],
    images: [
      { url: "/images/projects/tsc/palais/image_1.jpg" },
    ],
    scope: ["UX/UI Design"],
    focus: [
      "UX/UI Design", 
      "Idenitity Modernization", 
      "Food Tech UI", "Visual Refresh"
    ],
    website: "https://www.palais.bio/fr/",
  },

  {
    id: "helpix",
    title: "Helpix",
    category: ["UX/UI Design", "Branding", "Development"],
    type: "E-commerce & Device Repair",
    date: "2020",
    thumbnail: "/images/projects/tsc/helpix/home_helpix.jpg",
    description: "Design of a complex e-commerce sales funnel for a leader in the Belgian smartphone repair market.",
    content: "The entire user journey was reimagined, from selecting a device model to finalizing repair orders or accessory purchases. The challenge lay in making a technical process simple and reassuring through an elegant interface. This involved UX/UI workshops, prototyping, and custom front-end styling.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/helpix/wireframe_1.jpg", caption: "Wireframes low fidelity" },
          { url: "/images/projects/tsc/helpix/wireframe_2.jpg", caption: "Wireframes high fidelity" },
        ],
      },
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/helpix/process_1.png", caption: "Process ordering repair" },
          { url: "/images/projects/tsc/helpix/process_2.png", caption: "Process ordering repair" },
          { url: "/images/projects/tsc/helpix/process_3.png", caption: "Process ordering repair" },
          { url: "/images/projects/tsc/helpix/process_4.png", caption: "Process ordering repair" },
          { url: "/images/projects/tsc/helpix/process_5.png", caption: "Process ordering repair" },
          { url: "/images/projects/tsc/helpix/process_6.png", caption: "Process ordering repair" },
          { url: "/images/projects/tsc/helpix/process_7.png", caption: "Process ordering repair" },
        ],
      },
    ],
    images: [
      { url: "/images/projects/tsc/helpix/image_1.jpg" },
    ],
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
    type: "ERP Solutions & Digital Strategy",
    date: "2021",
    thumbnail: "/images/projects/tsc/tsc-brand/corporate-mockup.jpg",
    description: "Evolution of a digital agency’s brand image from a generic startup aesthetic to a credible, authoritative, and innovative corporate identity.",
    content: "This project involved leading a complete rebranding effort to establish a unique market position. The work focused on creating a distinctive visual identity, including a new logo and a cohesive graphic charter designed to reflect the agency’s technical expertise. This branding now serves as the foundation for all internal and external communications, ensuring professional consistency across every touchpoint.",
    images: [
      { url: "/images/projects/tsc/tsc-brand/mockup_logo.jpg" },
      { url: "/images/projects/tsc/tsc-brand/evolution.png", caption: "Evolution logo TSC" },
      { url: "/images/projects/tsc/tsc-brand/portfolio15.jpg" },
    ],
    scope: ["Branding & Visual Communication"],
    focus: [
      "Brand Strategy", 
      "Visual Identity System", 
      "Logo Design"
    ],
    website: "https://www.tsc-experts.com",
  },

  {
    id: "tsc-website",
    title: "TSC Website",
    category: ["UX/UI Design", "Development", "Branding"],
    type: "ERP Solutions & Digital Strategy",
    date: "2021",
    thumbnail: "/images/projects/tsc/tsc-website/accueil.jpg",
    description: "Development of a high-performance corporate platform to replace a basic template-based site with a bespoke digital showcase.",
    content: "The objective was to design and build a website that fulfills all the requirements of a modern digital company. The project involved rethinking the site’s architecture to improve service visibility and lead generation. The result is a fully responsive, engaging platform featuring custom iconography and optimized content, specifically designed to demonstrate the agency's capabilities to prospective clients.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/tsc/tsc-website/mockup_1.jpg"},
          { url: "/images/projects/tsc/tsc-website/mockup_2.jpg"},
          { url: "/images/projects/tsc/tsc-website/mockup_3.jpg"},
          { url: "/images/projects/tsc/tsc-website/mockup_4.jpg"},
        ],
      },
    ],
    images: [
      { url: "/images/projects/tsc/tsc-website/image_1.jpg" },
    ],
    scope: ["Branding, UX/UI Design & Development"],
    stack: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    focus: ["UX/UI Design", "Information Architecture", "SEO Strategy"],
    website: "https://www.tsc-experts.com",
  },

  {
    id: "helpilepsy",
    title: "Helpilepsy",
    category: ["UX/UI Design"],
    type: "HealthTech & Patient Data",
    date: "2021",
    thumbnail: "/images/projects/helpilepsy/home_helpilepsy.jpg",
    description: "UX audit and optimization for a leading digital assistant dedicated to epilepsy management, bridging the gap between patients and neurologists.",
    content: "The mission involved a deep-dive audit of the existing mobile application to refine the user journey. The focus was placed on the critical 'event logging' process (seizures, medication, and appointments) to ensure data entry is as intuitive as possible for patients. In addition to the UX overhaul, a visual 'facelift' was proposed to modernize the interface while maintaining the clarity required for medical use.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/helpilepsy/image_1.jpg"},
          { url: "/images/projects/helpilepsy/image_2.jpg"},
          { url: "/images/projects/helpilepsy/image_3.jpg"},
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
    type: "Real Estate & Property Tech",
    date: "2021",
    thumbnail: "/images/projects/allenkeapler/mockup_1.jpg",
    description: "Visual communication for a high-end real estate holding specializing in exceptional properties and luxury estates.",
    content: "In support of the agency’s premium positioning, a series of elegant marketing leaflets was designed. The creative direction focused on showcasing prestigious properties, from contemporary villas to historic castles, through sophisticated layouts that align with the high standards of the real estate investment world.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/allenkeapler/image_1.jpg" , caption: "Cover images for facebook" },
          { url: "/images/projects/allenkeapler/image_2.jpg" , caption: "Cover images for facebook" },
          { url: "/images/projects/allenkeapler/image_3.jpg" , caption: "Cover images for facebook" },
          { url: "/images/projects/allenkeapler/image_4.jpg" , caption: "Cover images for facebook" },
          { url: "/images/projects/allenkeapler/image_5.jpg" , caption: "Cover images for facebook" },
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
    type: "HealthTech & Precision Medicine",
    date: "2020",
    thumbnail: "/images/projects/oncodna/oncokdm/home-oncokdm.jpg",
    description: "Full UX/UI redesign and frontend integration of a flagship clinical decision support system, bridging the gap between genomic complexity and medical actionability.",
    content: "OncoKDM™ is a specialized platform designed to interpret NGS (Next-Generation Sequencing) data. My mission in collaboration with an other UX/UI Designer was to redesign the entire interface to serve two distinct audiences: oncologists requiring deep technical insights and patients seeking understandable health journeys. I tackled the challenge of 'Adaptive Information Design'—ensuring that the same genomic data was visualized with surgical precision for professionals and with clear, reassuring storytelling for patients. Beyond design, I handled the frontend integration using Angular Material to ensure a robust, accessible, and high-performance healthcare application.",
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
    type: "Precision Oncology & MedTech",
    date: "2019",
    thumbnail: "/images/projects/oncodna/oncodna-website/mockup_1.jpg",
    description: "Leading the internal digital transformation for a major genomic and IT oncology company to better serve a global audience.",
    content: "Serving as Project Manager, the role involved coordinating planning and hosting workshops with cross-functional teams to tailor content for diverse targets. The project encompassed the end-to-end creation of high-fidelity prototypes and the full front-end development using Django CMS, resulting in a robust platform that reflects the company’s cutting-edge scientific expertise.",
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
    type: "Business Transformation & Consulting",
    date: "2019",
    thumbnail: "/images/projects/ink/mockup_3.jpg",
    description: "Defining the visual footprint for a consulting firm specializing in Change Management and Salesforce implementation.",
    content: "The objective was to build a strong corporate identity that conveys the company’s values of transformation and efficiency. Following the successful branding phase, the mandate was extended to include the design of website prototypes, ensuring a seamless transition from brand identity to digital experience.",
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
    focus: ["Brand Identity", "Visual Identity System", "UI/UX Design", "SEO Strategy"],
  },

  {
    id: "mcid",
    title: "My Cancer is Different",
    category: ["Development", "UX/UI Design"],
    type: "Precision Oncology & MedTech",
    date: "2016",
    thumbnail: "/images/projects/oncodna/mcid/home_mcid.jpg",
    description: "Development of a patient-centric educational platform highlighting the importance of personalized molecular profiling in oncology.",
    content: "The platform was designed to empower patients by providing information on the unique molecular signatures of cancer. Key features included the ability for users to generate and download personalized medical PDF files to facilitate discussions with their oncologists. The project involved the creation of high-fidelity prototypes and precision web development in HTML/CSS.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url: "/images/projects/oncodna/mcid/browser_1.png", caption: "Landing page for HR+ Breast Cancer" },
          { url: "/images/projects/oncodna/mcid/browser_2.png", caption: "Landing page for HER2+ Breast Cancer" },
          { url: "/images/projects/oncodna/mcid/browser_3.png", caption: "Landing page for Triple Negative Breast Cancer" },
          { url: "/images/projects/oncodna/mcid/browser_4.png", caption: "Landing page for Colorectal Cancer" },
          { url: "/images/projects/oncodna/mcid/browser_5.png", caption: "Landing page for Non Small Cell Lung Cancer" },
          { url: "/images/projects/oncodna/mcid/browser_6.png", caption: "Landing page for Prostate Cancer" },
        ],
      },
    ],
    images: [
      { url: "/images/projects/oncodna/mcid/portfolio8-2.jpg" },
      { url: "/images/projects/oncodna/mcid/image_1.jpg" },
      { url: "/images/projects/oncodna/mcid/image_2.jpg", caption: "Generated PDF file for HER2+ Breast Cancer" },
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
    type: "Precision Oncology & MedTech",
    date: "2016",
    thumbnail: "/images/projects/oncodna/webinar/home_webinar.jpg",
    description: "Creation of a dedicated scientific hub for oncology professionals to access molecular profiling webinars.",
    content: "To support the growing interest in OncoDNA’s scientific content, a dedicated viewing platform was prototyped. The design focused on a clean, distraction-free environment for professional learning. Although the project eventually merged into the main corporate website, the high-fidelity prototypes served as the blueprint for the integrated webinar system currently in use.",
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
      "Educational Platform"
    ],
    website: "https://www.oncodna.com",
  },

  {
    id: "oncodna-biopharma",
    title: "OncoDNA BioPharma",
    category: ["UX/UI Design"],
    type: "Precision Oncology & MedTech",
    date: "2016",
    thumbnail: "/images/projects/oncodna/biopharma/home_biopharma.jpg",
    description: "Strategy and design for a specialized digital gateway catering specifically to the pharmaceutical industry’s R&D needs.",
    content: "This project involved the development of an independent microsite tailored for BioPharma partners. The work focused on creating a professional, data-driven aesthetic distinct from the patient-facing materials. While the microsite was ultimately integrated into the centralized website, the visual language and high-fidelity prototypes heavily influenced the current design system.",
    contentBlocks: [
      {
        type: "carousel",
        images: [
          { url:"/images/projects/oncodna/biopharma/image_2.jpg" },
          { url:"/images/projects/oncodna/biopharma/image_3.jpg" },
          { url:"/images/projects/oncodna/biopharma/image_4.jpg" },
          { url:"/images/projects/oncodna/biopharma/image_5.jpg" },
        ],
      },
    ],
    images: [
      { url: "/images/projects/oncodna/biopharma/mockup_1.jpg" },
      { url: "/images/projects/oncodna/biopharma/image_1.jpg" },
      { url:"/images/projects/oncodna/biopharma/image_6.jpg" },
    ],
    scope: ["UX/UI Design"],
    focus: [
      "UX/UI Design", 
      "R&D Gateway", 
      "B2B Digital Strategy", 
      "Microsite Design"
    ],
    website: "https://www.oncodna.com",
  },

  {
    id: "oncodna-branding",
    title: "OncoDNA Branding",
    category: ["Branding", "Visual Communication"],
    type: "Precision Oncology & MedTech",
    date: "2016",
    thumbnail: "/images/projects/oncodna/oncodna-brand/portfolio5.jpg",
    description: "Foundation and evolution of a cohesive graphic identity for a growing biotech startup over a five-year period.",
    content: "Upon arrival, the priority was to establish a durable and recognizable brand image. This ongoing effort included the design of various communication media (brochures, solution packaging, and trade show materials) ensuring total consistency across all physical and digital touchpoints during the company’s expansion.",
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
    type: "Community & Event Platform",
    date: "2015",
    thumbnail: "/images/projects/webkot/image_1.jpg",
    description: "Enhancing student life through a dynamic, community-driven photo-sharing platform for the University of Namur.",
    content: "The project aimed to revitalize campus life by providing a central hub for event photography and social interaction. Features were designed to allow students to manage profiles, share photo albums, and engage with event calendars. The focus was on creating a fast-paced, engaging user experience website in HTML/CSS that encourages community participation.",
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
    type: "Tourism & Nautical Experience",
    date: "2015",
    thumbnail: "/images/projects/namourette/home_namourette.jpg",
    description: "Reimagining urban mobility in Namur by transforming a traditional river shuttle into a modern, iconic tourism experience.",
    content: "This project proposed a shift in the local transport model, drawing inspiration from high-end river tours to create a 'must-see' attraction. Beyond the aesthetic redesign, the focus was on information design to educate tourists about the city's history while addressing urban congestion by promoting river-based travel.",
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
    type: "Public Awareness & Social Campaign",
    date: "2015",
    thumbnail: "/images/projects/beer/home_beer.jpg",
    description: "Awareness and safety campaign designed for the University of Namur student community.",
    content: "Commissioned by the university, this campaign focused on student empowerment during campus events. The visual strategy addressed sensitive topics (alcohol consumption, noise pollution, city cleanliness, and safety) through an engaging and non-judgmental graphic style, aiming to foster responsible behavior without sacrificing the social spirit of student life.",
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
    quote: "I had the real pleasure to work with Kevin since his first day in OncoDNA. I was (and still) positivelly astonished by his fast understanding of complex problems related to scientific questions. As a non-scientist I was afraid that it will be very hard for him to understand and translate scientific content in marketing documents, website... But actually I was wrong.<br><br> His level of understanding is really high and he can fastly translate complex information in a very beautiful and comprehensive message, not only for other scientists but also for non-scientists. This is a key asset that I never (or rarely) met in my career. <br><br>He is very hard-worker, always willing to help people by finding solutions taking into account the ressouces available and the time constraints. Stress resistant, fully dedicated to his work and always in good mood, he is a real added value for a company and I recommend him without any hesitation..",
  },
  {
    id: "rec-2",
    name: "Sébastien Sauvage",
    linkedin: "https://www.linkedin.com/in/s%C3%A9bastien-sauvage-8260b548/",
    role: "Production Director",
    company: "OncoDNA",
    image: "/images/recommendations/sebastien-sauvage.jpeg",
    date: "July 2020",
    quote: "It was really a nice opportunity and a pleasure to work with Kevin in OncoDNA all those years. He clearly understood the philosophy of the company and was always able to translate the scientific vision in nice marketing tools.<br>He understands fast and even if oncology was not his field at the beginning, with these five years in the company he has gain some scientific background that could and certainly will be useful for his next challenges to come.<br><br>Kevin never counted the hours and is really focus to deliver on time his work. He is always in good mood at work. For all these reasons I recommend him without hesitation, he was a real plus for OncoDNA.",
  },
  {
    id: "rec-3",
    name: "Marc Buchet",
    linkedin: "https://www.linkedin.com/in/marc-buchet-salesmarketingpharma/",
    role: "Marketing Director",
    company: "OncoDNA",
    image: "/images/recommendations/marc-buchet.jpeg",
    date: "June 2020",
    quote: "Kevin is key asset in a department, brimming with innovative ideas, strong team member, he is a hard worker and high socialiser.<br>Creative management, innovation and strong coherence in branding or corporate visual identity, Kevin is a key asset for your company.<br>Kevin was 2 years my graphic and web manager where he delivered high quality creative and sales driven marketing materials. His productions from website creation to fair booth design are alway the best fit between the commercial objectives and the visual balance.<br><br>Moreover digital and social media marketing has no secret for him and he will be happy to teach you as much as he can.<br><br>In short, he's an essential communication and collegial strength for your team and I will definitely recommend him to join your squad.",
  },
];
