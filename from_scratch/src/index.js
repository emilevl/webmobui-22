import './css/index.css'
import {showArtists} from './sections/artists.js';
import {renderSearchSongsSection, renderSongsSection, showSongs} from './sections/songs.js';
import {showPlayer} from './sections/player.js';
import * as api from './api.js';
import * as search from './sections/search.js';



// Détection du changement de hash (location)
window.addEventListener('hashchange', displaySection)

displaySection();

//Affichage de la section, en fonction du hash
async function displaySection() {
  const section = window.location.hash;
  const sectionNoHashtag = section.split('#')[1];
  const sectionSplit = sectionNoHashtag.split('-');
  //console.log(sectionSplit);
  
 
  toggleNav(sectionSplit[0]);
  toggleSection(sectionSplit[0]);
  

  switch(sectionSplit[0]) {
    case 'artist':
      if (sectionSplit[1] != 'section'){
        toggleSection('song');
        renderSongsSection(sectionSplit[1]);
      }else 
        showArtists()
    break;
    case 'home':
      
    break;
    case 'player':
      toggleSection('player');
      //showPlayer(30);
    break;
    case 'search':
      // On réutilise la section 'songs' en arrière plan
      toggleSection('song')
      // on décode la chaine de recherche pour l'afficher proprement
      renderSearchSongsSection(decodeURIComponent(sectionSplit[1]))
    break;
    default:
      
    break;
  }
}

function toggleNav(section) {
  //Le “?” veut dire “si ce qu’il y a avant retourne quelque chose, on fait ce qu’il y a après”
  // Mise en évidence de la page en cours dans la navigation
  document.querySelector('nav a.active')?.classList.remove('active');
  document.querySelector(`nav a[href="#${section}-section"]`)?.classList.add('active');
}

function toggleSection(section) {
    // Affichage de la bonne section
    document.querySelector('section.active')?.classList.remove('active');
    document.querySelector(`#${section}-section`)?.classList.add('active');
}
