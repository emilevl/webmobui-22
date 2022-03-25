import { loadArtists } from "../api";

const artistList = document.querySelector('.artist-list');
const artistListItemTmpl = document.querySelector('#artist-list-item-template');

export async function showArtists() {
    const artists = await loadArtists();

    artistList.replaceChildren();
    artists.forEach(artist => {
        showArtist(artist)
    });
}

export async function showArtist(artist) {
    console.log(artist);

    const newArtist = artistListItemTmpl.content.cloneNode(true);
    newArtist.querySelector('a').href = `#artist-${artist.id}`;
    newArtist.querySelector('img').src = artist.image_url;
    newArtist.querySelector('div.artist-list-item-title').textContent = artist.name;
    artistList.append(newArtist);
}