import { loadSongs } from "../api";


const songSection = document.getElementById('song-section');
const songList = songSection.querySelector('.list');
const songListItemTmpl = document.querySelector('#song-list-item-template');

export async function showSongs(id) {
    const songs = await loadSongs(id);

    songSection.querySelector('h4').textContent = 'Artistes > ' + songs[0].artist.name
    songList.replaceChildren();
    songs.forEach(song => {
        showSong(song)
    });
}

export async function showSong(song) {
    console.log(song);

    const newSong = songListItemTmpl.content.cloneNode(true);
    newSong.querySelector('a').href = `#song-${song.id}`;
    newSong.querySelector('div.list-item-title').textContent = song.title;
    songList.append(newSong);
}