/*-----------------------------------*\
  #DATA.JS - Contenu du Portfolio
\*-----------------------------------*/

export const profileData = {
  name: "Tariq LAABOUDI", // Ton Prénom/Nom
  role: "Étudiant SIO", // Statut
  avatar: "./assets/images/my-avatar.png", 
  location: "France", // Localisation
  email: "tariq.laaboudi.sn@gmail.com", // Email
  phone: "06 12 34 56 78", // Numéro de téléphone
  socials: [
    { icon: "logo-github", link: "https://github.com/Trq-Builds" },
    { icon: "logo-linkedin", link: "#" },
    { icon: "logo-twitter", link: "#" }
  ]
};

export const aboutData = {
  text: `
    <p>Étudiant SIO-SISR en 2ᵉ année, spécialisé en réseaux et passionné de hardware. Organisé, méthodique et toujours prêt à bricoler, j'aime comprendre, optimiser et résoudre les problèmes que les autres préfèrent éviter. Auteur du projet Optimize Alot et de multiples documentations techniques, je construis des solutions simples, efficaces et reproductibles.</p>
    <p>Expérience pratique en Windows, dépannage et montage/maintenance de postes. Rigoureux, autonome et communicatif.</p>
  `,
  services: [
    { title: "Développement Web", text: "Création de sites modernes et responsive.", icon: "./assets/images/icon-dev.svg" },
    { title: "Design UI/UX", text: "Maquettes et prototypage d'interfaces.", icon: "./assets/images/icon-design.svg" },
    { title: "Applications Mobiles", text: "Développement iOS et Android.", icon: "./assets/images/icon-app.svg" },
    { title: "Photographie", text: "Shooting et retouche professionnelle.", icon: "./assets/images/icon-photo.svg" }
  ]
};

export const resumeData = {
  education: [
    { title: "BTS SIO", school: "Lycée Marie Curie BTS Services Informatiques aux Organisations ", date: "2023 — 2025", desc: "Option SISR (Solutions d'infrastructure, systèmes et réseaux)" },
    { title: "Bac Pro SN", school: "Bac PRO SN Lycée Saint-Pierre", date: "2021 — 2024", desc: "Systèmes Numériques" }
  ],
  experience: [
    { title: "Stage Eursocan", company: "Euroscan", date: "2025", desc: "Accueil et conseils client, dépannage PC (hardware et software) et gestion logistique." },
    { title: "Stage RPM MULTIMEDIA", company: "RPM MULTIMEDIA", date: "2023", desc: "Maintenance et réparation PC, électronique de base et interaction/support client." }
  ],
  skills: [
    { name: "Gestion & Documentation de Processus Techniques", percent: 60 },
    { name: "Bricolage Hardware & Analyse Matérielle", percent: 70 },
    { name: "Administration Systèmes & Réseaux", percent: 50 },
    { name: "Gestion d’Infrastructure & Services Réseaux", percent: 40 }
  ]
};

export const portfolioData = [
  { 
    title: "Documentation FOG", 
    category: "Développement Web", 
    image: "./assets/images/project-1.svg", 
    link: "https://github.com/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG" 
  },
  { 
    title: "Documentation AD", 
    category: "Applications", 
    image: "./assets/images/project-2.svg", 
    link: "https://github.com/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine" 
  },
  { 
    title: "Design Gamma", 
    category: "Web Design", 
    image: "./assets/images/project-3.jpg", 
    link: "#" 
  },
  { 
    title: "Site Delta", 
    category: "Développement Web", 
    image: "./assets/images/project-4.jpg", 
    link: "#" 
  }
];