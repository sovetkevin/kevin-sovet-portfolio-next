import type { Project } from '../types';

export const WEBKOT: Project = {
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
    stack: ["HTML", "SCSS", "JavaScript"],
    focus: [
      "Photo-Sharing",
      "Event Calendar",
      "UX/UI Design",
      "Interaction Design",
    ],
};
