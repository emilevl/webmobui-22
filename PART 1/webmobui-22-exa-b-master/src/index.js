import './css/index.css'
import { domOn, domForEach } from './lib/domManipulator'

import {renderPostsLikedSection, renderPostsSection, renderUserPostsSection} from './sections/posts'
import renderPostSection from './sections/detailPost'
import renderHomeSection from './sections/home'


function toggleSection(section) {
  document.querySelector('section.active')?.classList.remove('active')
  document.querySelector(`${section}-section`)?.classList.add('active')
}

function toggleNav(section) {
  document.querySelector('nav a.active')?.classList.remove('active')
  document.querySelector(`nav a[href="${section}"]`)?.classList.add('active')
}

// Affichage d'une section
function displaySection() {
  const section = window.location.hash || '#home'
  const sectionSplit = section.split('-')

  toggleSection(sectionSplit[0])
  toggleNav(sectionSplit[0])

  // Chargement des éléments custom par section
  switch(sectionSplit[0]) {
    case '#posts':
      // Si contient un id (posts-[id]), affichage publication détaillée
      if(sectionSplit[1]) {
        toggleSection('#post')
        // render Post (sans S !)
        renderPostSection(sectionSplit[1]);
      }
      else {
        renderPostsSection()
      }
    break;

    case '#users':
      // réutilisation de la section 'posts' pour afficher les publications de l'utilisateur
      toggleSection('#posts')
      renderUserPostsSection(sectionSplit[1])
    break;

    case '#likes':
      // On réutilise la section 'posts'
      toggleSection('#posts')
      // Affichage des publications aimées
      renderPostsLikedSection()
    break;

    case '#home':
      renderHomeSection();
    break;
  }
}

window.addEventListener('hashchange', displaySection)

// Ecoute si list des likes est mise à jour
window.addEventListener('likes_updated', () => {
  if(window.location.hash == '#likes')
    renderPostsLikedSection()
})

displaySection()

// On enregistre le worker pour s'occuper de la mise en cache
navigator.serviceWorker.register('/workerCacheFetched.js')