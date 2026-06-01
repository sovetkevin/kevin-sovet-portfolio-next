import type { Project } from '../types';

export const GRIT_GYM: Project = {
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
};
