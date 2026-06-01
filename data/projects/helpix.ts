import type { Project } from '../types';

export const HELPIX: Project = {
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
};
