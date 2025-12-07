/*-----------------------------------*\
  #MAIN.JS - Version Finale Corrigée
\*-----------------------------------*/

import { profileData, aboutData, resumeData, portfolioData } from './data.js';

// --- 1. FONCTIONS UTILITAIRES ---
const getElement = (selector) => document.querySelector(selector);
const getAllElements = (selector) => document.querySelectorAll(selector);

const render = (selector, html) => {
  const el = getElement(selector);
  if (el) {
    el.innerHTML = html;
  } else {
    console.warn(`Attention: L'élément "${selector}" n'a pas été trouvé dans le HTML.`);
  }
};

// --- 2. GENERATION NAVBAR (Le correctif manquant) ---
function loadNavbar() {
    // Liste des pages basées sur tes <article data-page="...">
    const pages = ["À propos", "Parcours", "Portfolio"];
    
    const navHTML = pages.map((page, index) => {
        // La première page est active par défaut
        const activeClass = index === 0 ? 'active' : ''; 
        return `
            <li class="navbar-item">
                <button class="navbar-link ${activeClass}" data-nav-link>${page}</button>
            </li>
        `;
    }).join('');
    
    render('.navbar-list', navHTML);
}

// --- 3. INJECTION DU PROFIL ---
function loadProfile() {
  const imgEl = getElement('.avatar-box img');
  if(imgEl) imgEl.src = profileData.avatar;
  
  const nameEl = getElement('.info-content .name');
  if(nameEl) nameEl.textContent = profileData.name;
  
  const roleEl = getElement('.info-content .title');
  if(roleEl) roleEl.textContent = profileData.role;

  // Contact
  const contactHTML = `
    <li class="contact-item">
      <div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
      <div class="contact-info">
        <p class="contact-title">Email</p>
        <a href="mailto:${profileData.email}" class="contact-link">${profileData.email}</a>
      </div>
    </li>
    <li class="contact-item">
      <div class="icon-box"><ion-icon name="location-outline"></ion-icon></div>
      <div class="contact-info">
        <p class="contact-title">Localisation</p>
        <address>${profileData.location}</address>
      </div>
    </li>
  `;
  render('.contacts-list', contactHTML);

  // Socials
  const socialHTML = profileData.socials.map(social => `
    <li class="social-item">
      <a href="${social.link}" class="social-link" target="_blank">
        <ion-icon name="${social.icon}"></ion-icon>
      </a>
    </li>
  `).join('');
  render('.social-list', socialHTML);
}

// --- 4. INJECTION CONTENU ---
function loadAbout() {
  render('.about-text', aboutData.text);

  const servicesHTML = aboutData.services.map(service => `
    <li class="service-item">
      <div class="service-icon-box">
        <img src="${service.icon}" alt="icon" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">${service.title}</h4>
        <p class="service-item-text">${service.text}</p>
      </div>
    </li>
  `).join('');
  render('.service-list', servicesHTML);
}

function loadResume() {
  // Education (Attention au sélecteur CSS class)
  const eduHTML = resumeData.education.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.school}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join('');
  render('.education-list', eduHTML); // Doit matcher <ol class="timeline-list education-list">

  // Expérience
  const expHTML = resumeData.experience.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.title}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join('');
  render('.experience-list', expHTML);

  // Skills
  const skillsHTML = resumeData.skills.map(skill => `
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5">${skill.name}</h5>
        <data value="${skill.percent}">${skill.percent}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${skill.percent}%;"></div>
      </div>
    </li>
  `).join('');
  render('.skills-list', skillsHTML);
}

function loadPortfolio() {
  // Projets
  const projectsHTML = portfolioData.map(project => `
    <li class="project-item active" data-category="${project.category}">
      <a href="${project.link}">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Projet'">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    </li>
  `).join('');
  render('.project-list', projectsHTML);

  // Filtres
  const categories = ["Tout", ...new Set(portfolioData.map(p => p.category))];
  const filterHTML = categories.map((cat, index) => `
    <li class="filter-item">
      <button class="${index === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    </li>
  `).join('');
  render('.filter-list', filterHTML);

  setupFilters();
}

// --- 5. LOGIQUE D'INTERACTION ---

function setupNavigation() {
  const navLinks = getAllElements('[data-nav-link]');
  const pages = getAllElements('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // 1. Récupérer le texte du bouton cliqué (ex: "Parcours")
      const targetPageName = this.innerHTML.toLowerCase().trim();

      // 2. Mettre à jour la classe active sur les liens
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // 3. Afficher la bonne page
      let pageFound = false;
      pages.forEach(page => {
        if (page.dataset.page.toLowerCase() === targetPageName) {
          page.classList.add('active');
          pageFound = true;
          window.scrollTo(0, 0);
        } else {
          page.classList.remove('active');
        }
      });
      
      if(!pageFound) console.warn("Aucune page trouvée pour : " + targetPageName);
    });
  });
}

function setupFilters() {
  const filterBtns = getAllElements('[data-filter]');
  const projects = getAllElements('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-filter');

      projects.forEach(project => {
        if (category === 'Tout' || project.getAttribute('data-category') === category) {
          project.classList.add('active');
        } else {
          project.classList.remove('active');
        }
      });
    });
  });
}

function setupSidebar() {
  const sidebar = getElement('.sidebar');
  const sidebarBtn = getElement('[data-sidebar-btn]');
  
  if(sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. D'abord on charge la navbar
  loadNavbar();
  
  // 2. Ensuite le contenu
  loadProfile();
  loadAbout();
  loadResume();
  loadPortfolio();
  
  // 3. Enfin on active les écouteurs d'événements (après que le HTML soit généré)
  setupNavigation();
  setupSidebar();
});