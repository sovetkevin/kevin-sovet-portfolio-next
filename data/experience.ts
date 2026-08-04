import type { ExperienceGroup, ExperienceItem } from './types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'keyes',
    kind: 'employment',
    year: {
      en: "Aug. 2026 – Present",
      fr: "Août 2026 – Aujourd'hui",
    },
    role: "UX/UI Designer",
    company: "KEYES (NRB)",
    logo: ["/images/experience/keyes.png"],
    website: "https://www.keyes.eu",
    description: {
      en: "Designing user experiences and digital interfaces for partner clients within KEYES, supporting organizations in their digital transformation by combining UX expertise, interface craftsmanship, and a long-term product vision to deliver lasting value.",
      fr: "Conception d'expériences utilisateur et d'interfaces digitales pour les clients partenaires de KEYES, accompagnant les organisations dans leur transformation digitale en alliant expertise UX, maîtrise de l'interface et vision produit à long terme, pour créer une valeur durable.",
    },
    bottomLine: {
      en: "Designing user experiences and digital interfaces for partner clients within KEYES, supporting organizations in their digital transformation by combining UX expertise, interface craftsmanship, and a long-term product vision to deliver lasting value.",
      fr: "Conception d'expériences utilisateur et d'interfaces digitales pour les clients partenaires de KEYES, accompagnant les organisations dans leur transformation digitale en alliant expertise UX, maîtrise de l'interface et vision produit à long terme, pour créer une valeur durable.",
    },
    valueAdd: {
      en: "Bringing design clarity to complex digital solutions — turning business and technical challenges into usable, coherent interfaces for organizations that need lasting impact.",
      fr: "Apporter de la clarté design à des solutions digitales complexes — transformer des enjeux métier et techniques en interfaces utilisables et cohérentes, pour des organisations qui cherchent un impact durable.",
    },
  },
  {
    id: 'tms-group',
    kind: 'employment',
    year: {
      en: "Mar. 2022 – Apr. 2026",
      fr: "Mars 2022 – Avr. 2026",
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
    id: 'fr-team-autotuner',
    kind: 'mission',
    parentId: 'tms-group',
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
    id: 'contraste-rossel',
    kind: 'mission',
    parentId: 'tms-group',
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
    id: 'tsc',
    kind: 'employment',
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
    id: 'oncodna',
    kind: 'employment',
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

/** Rough end date from localized year strings like "Mar. 2023 - Mar. 2025". */
function experienceEndValue(item: ExperienceItem): number {
  const raw = typeof item.year === 'string' ? item.year : item.year.en;
  const parts = [...raw.matchAll(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z.]*\s+(\d{4})/gi)];
  const target = parts.length > 1 ? parts[parts.length - 1] : parts[0];
  if (!target) {
    const years = [...raw.matchAll(/(\d{4})/g)];
    const last = years[years.length - 1];
    return last ? Number(last[1]) * 100 : 0;
  }
  const months: Record<string, number> = {
    jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
  };
  const month = months[target[1].slice(0, 3).toLowerCase()] ?? 1;
  return Number(target[2]) * 100 + month;
}

/** Group missions under their parent employment. Missions render below the parent, newest → oldest. */
export function groupExperiences(items: ExperienceItem[]): ExperienceGroup[] {
  const employments = items.filter((item) => item.kind === 'employment');
  const missions = items.filter((item) => item.kind === 'mission');

  return employments.map((employment) => ({
    employment,
    missions: missions
      .filter((mission) => mission.parentId === employment.id)
      .sort((a, b) => experienceEndValue(b) - experienceEndValue(a)),
  }));
}
