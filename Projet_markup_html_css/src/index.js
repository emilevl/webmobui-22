import './css/index.css'
import * as api from './lib/api.js';
import dom, { domOn } from './lib/dom.js';


const links = document.querySelectorAll('nav a')
const artistList = document.querySelector(".artist-list");
const artistListItemTemplate = document.querySelector("#artist-list-item-template");

const songList = document.querySelector(".song-list");
const songListItemTemplate = document.querySelector("#artist-song-list-item-template");

window.onhashchange = function(event) {
  let hash = document.location.hash;
  let hashNoTag = hash.split('#')[1];
  event.preventDefault();

  //console.log("adresse: " + document.location + ", état: " + JSON.stringify(event.state));
  if (hashNoTag.split('-')[1] == 'section') toggleNav(hashNoTag);
  displaySection(hashNoTag);
  history.pushState(null, null, hash);
};

function toggleNav(hash) {
  document.querySelector('nav a.active').classList.remove('active');
  document.querySelector(`nav a[href='#${hash}']`).classList.add('active');
}

async function displaySection(hash) {
  let hashSplitted = hash.split('-');

  switch(hashSplitted[0]) {
  case 'artists':
    if (hashSplitted[1] == 'section') {
      showArtists();
    }else {
      showArtistSongs(hashSplitted[1]);
    }
    break;
  }
  
  document.querySelectorAll('section').forEach((section) => section.id == hash ? section.classList.add('active') : section.classList.remove('active'))

}

async function showArtist(artist) {
  const newArtist = artistListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  newArtist.querySelector("a").href = "#artists-" + artist.id
  newArtist.querySelector("img").src = artist.image_url
  newArtist.querySelector(".artist-list-item-title").innerText = artist.name
  artistList.append(newArtist);
}


async function showArtists() {
  artistList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
  api.loadArtists().then(artists => {
    for(const artist of artists){
      showArtist(artist);
    }
  })
}

async function showArtistSongs(id) {
  console.log(id);
  songList.replaceChildren()
  api.loadArtistSong(id).then(songs => {
    console.log(songs);
    for(const song of songs){
      showArtistSong(song);
    }
  })
  displaySection("list-section");
}

async function showArtistSong(song) {
  const newSong = songListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  newSong.querySelector("a").href = song.audio_url
  newSong.querySelector(".list-item-title").innerText = song.title
  songList.append(newSong);
}