import type { Project } from '../types';

export const PIERRES_ET_MAREES: Project = {
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
};
