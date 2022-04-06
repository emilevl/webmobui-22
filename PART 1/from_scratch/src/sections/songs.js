import { loadArtists, loadSearchRequest, loadSongs } from "../api";


const songSection = document.getElementById('song-section');
const songList = songSection.querySelector('.list');
const songListItemTmpl = document.querySelector('#song-list-item-template');
const songsSectionTitle = songSection.querySelector('h4')


export async function showSongs(songResult) {
    songList.replaceChildren();
    songResult.forEach(song => {
        showSong(song)
    });
}

export async function showSong(song) {
    //console.log(song);

    const newSong = songListItemTmpl.content.cloneNode(true);
    newSong.querySelector('a').href = `#song-${song.id}`;
    newSong.querySelector('div.list-item-title').textContent = song.title;
    songList.append(newSong);
}

export async function renderSearchSongsSection(query) {
  const songs = await loadSearchRequest(query)
  songsSectionTitle.innerText = `Résultats de recherche pour "${query}"`
  showSongs(songs)
}

// Charge la section des chansons selon l'id de l'artiste
export async function renderSongsSection(id) {
    const songs = await loadSongs(id)
    songsSectionTitle.innerText = `Artistes > ${songs[0].artist.name}`
    showSongs(songs)
  }
  