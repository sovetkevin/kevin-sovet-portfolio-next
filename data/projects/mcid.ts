import type { Project } from '../types';

export const MCID: Project = {
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
};
