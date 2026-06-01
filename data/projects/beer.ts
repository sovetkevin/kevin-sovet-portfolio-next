import type { Project } from '../types';

export const BEER: Project = {
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
};
