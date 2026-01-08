/*-----------------------------------*\
  #DATA.JS - Contenu du Portfolio
\*-----------------------------------*/

export const profileData = {
  name: "Tariq LAABOUDI",
  role: "Étudiant SIO",
  avatar: "./assets/images/my-avatar.png",
  location: "France",
  email: "tariq.laaboudi.sn@gmail.com",
  socials: [
    { icon: "logo-github", link: "https://github.com/Trq-Builds" }, // Lien Github
    { icon: "globe-outline", link: "https://drift.rip/K4ta" }  // Lien Linktree
]
};

export const aboutData = {
  text: `<p>Étudiant SIO-SISR en 2ᵉ année, spécialisé en réseaux et passionné de hardware. Organisé, méthodique et toujours prêt à bricoler, j'aime comprendre, optimiser et résoudre les problèmes.</p>
         <p>Auteur du projet Optimize Alot et de multiples documentations techniques, je construis des solutions simples, efficaces et reproductibles. Expérience pratique en Windows, dépannage et maintenance.</p>`,

};

export const resumeData = {
  education: [
    {
      school: "BTS SIO - SISR (Lycée Marie Curie)", // J'ai mis le diplôme ICI pour qu'il s'affiche
      date: "2023 — 2025",
      desc: "Option Solutions d'infrastructure, systèmes et réseaux."
    },
    {
      school: "Bac Pro SN (Lycée Saint-Pierre)", // J'ai mis le diplôme ICI pour qu'il s'affiche
      date: "2021 — 2024",
      desc: "Systèmes Numériques."
    }
  ],
  experience: [
    {
      title: "Stage Eursocan", // Titre + Entreprise fusionnés pour l'affichage
      date: "2025",
      desc: "Accueil client, dépannage PC (hardware/software) et gestion logistique."
    },
    {
      title: "Stage RPM MULTIMEDIA",
      date: "2023",
      desc: "Maintenance et réparation PC, électronique de base et support client."
    }
  ],
  skills: [
    { name: "Documentation Technique", percent: 80 }, // Noms raccourcis pour que ça rentre bien
    { name: "Hardware & Dépannage", percent: 90 },
    { name: "Admin Sys & Réseaux", percent: 60 },
    { name: "Gestion Infrastructure", percent: 50 }
  ]
};


// ========== NOUVELLE SECTION : OUTILS ==========
export const outilsData = [
  {
    title: "Intelligence Artificielle",
    icon: "sparkles-outline",
    items: [
      {
        name: "Claude 3.7 Sonnet",
        description: "Assistant IA pour la rédaction, le code et l'analyse technique.",
        link: "https://claude.ai/"
      },
      {
        name: "ChatGPT-5.1",
        description: "IA conversationnelle pour recherche et brainstorming.",
        link: "https://chatgpt.com/"
      },
      {
        name: "Gemini 3.0 PRO",
        description: "IA de Google pour analyse de documents et recherche.",
        link: "https://gemini.google.com/app"
      },
      {
        name: "LmArena.AI",
        description: "Comparaison et test de différents modèles IA.",
        link: "https://lmarena.ai/"
      }
    ]
  },
  {
    title: "Développement & Outils",
    icon: "code-slash-outline",
    items: [
      {
        name: "Visual Studio Code",
        description: "Éditeur de code principal pour tous mes projets.",
        link: "https://code.visualstudio.com/"
      },
      {
        name: "GitHub",
        description: "Gestion de version et hébergement de mes projets.",
        link: "https://github.com/Trq-Builds"
      },
      {
        name: "Netlify",
        description: "Déploiement et hébergement de sites web statiques.",
        link: "https://app.netlify.com/"
      },
      {
        name: "RepoTreeGenerator",
        description: "Générateur d'arborescence ASCII pour documentation.",
        link: "https://ascii-repotree.vercel.app/generator"
      }
    ]
  },
  {
    title: "Documentation & Organisation",
    icon: "document-text-outline",
    items: [
      {
        name: "Notion",
        description: "Organisation de mes notes et planning de projets.",
        link: "https://notion.so"
      },
      {
        name: "Markdown",
        description: "Format de documentation pour tous mes README et guides.",
        link: ""
      },
      {
        name: "Draw.io",
        description: "Création de schémas réseau et diagrammes techniques.",
        link: "https://app.diagrams.net/"
      }
    ]
  }
];


export const portfolioData = [
  {
    title: "Documentation AD",
    category: "Windows",
    image: "./assets/images/project-2.svg",
    link: "https://github.com/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine"
  },
  {
    title: "Documentation FOG",
    category: "Linux",
    image: "./assets/images/project-1.svg",
    link: "https://github.com/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG"
  },
  {
    title: "Repos Portfolio",
    category: "Autre",
    image: "./assets/images/project-3.svg", // Attention j'ai remis .svg (si c'est .jpg change le)
    link: "https://github.com/Trq-Builds/2025-Portfolio-V1.8"
  },
];