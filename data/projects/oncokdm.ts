import type { Project } from '../types';

export const ONCOKDM: Project = {
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
    stack: ["Angular", "Angular Material", "TypeScript"],
    focus: [
      "Adaptive Information Design",
      "HealthTech Data Visualization",
      "Multi-User Persona Strategy",
      "Medical Compliance UX",
      "Agile Product Collaboration",
    ],
    website: "https://app.oncokdm.com/",
};
