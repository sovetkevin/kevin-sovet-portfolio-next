import type { Project } from '../types';

export const HELPILEPSY: Project = {
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
};
