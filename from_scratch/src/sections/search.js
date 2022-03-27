import { loadArtists, loadSearchRequest } from "../api";
import { showSong, showSongs } from "./songs";

const searchInput = document.getElementById('search-input')


document.getElementById('search-trigger').addEventListener('click', toggleSearchBar)

document.querySelector('main').addEventListener('click', evt => {
    if (searchInput.classList.contains('active'))
      toggleSearchBar();
  })

searchInput.addEventListener('change', async (evt) => {
    if (searchInput === document.activeElement) {
        const search = evt.currentTarget.value
        const result = await  loadSearchRequest(search);
        if (result.length != 0){
            document.getElementById('song-section').querySelector('h4').textContent = 'Search > ' + searchInput.value;
            showSongs(result);
            displaySection('song');
        }
    }
})

searchInput.addEventListener('input', () => {
    window.location.hash = `#search-${encodeURIComponent(searchInput.value)}`
  })

function toggleSearchBar() {
    if (searchInput.classList.contains('active') && searchInput !== document.activeElement) {
      searchInput.classList.remove('active');
      searchInput.value = "";
    } else
      searchInput.classList.add('active');
      searchInput.focus()
  }