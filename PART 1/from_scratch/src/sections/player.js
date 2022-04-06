
import { loadPlayer } from "../api";
import formatTimestamp from "../lib/formatTimestamp";

const player = document.getElementById('player');
const playerAudio = document.getElementById('audio-player');
const playerControls = document.getElementById('player-controls');

const playerCtrlPlay = playerControls.querySelector('#player-control-play');
const playerCtrlNext = playerControls.querySelector('#player-control-next');
const playerCtrlPrevious= playerControls.querySelector('#player-control-previous');
const playerProgress = player.querySelector('#player-progress-bar');
const playerTimeDuration = player.querySelector('#player-time-duration');
const playerTimeCurrent = player.querySelector('#player-time-current');

const waitingPlaylist = []

const random = parseInt(Math.random() * 60);
loadPlayer(random).then(song => {
    waitingPlaylist.push(song)
    showPlayer(0);
    togglePlayPause();
})

// Play a first song straight
//togglePlayPause();


export async function showPlayer(currentSong) {
    //const song = await loadPlayer(idSong);
    const song = waitingPlaylist[currentSong];
    player.querySelector('#player-thumbnail-image').src = song.artist.image_url;
    player.querySelector('#player-infos-song-title').textContent = song.title;
    player.querySelector('#player-infos-artist-name').textContent = song.artist.name;
    playerAudio.src = song.audio_url;
    // player.querySelector('#player-time-current').textContent = '00:00';
    // player.querySelector('#player-time-duration').textContent = '00:00';
}

player.querySelector('#player-control-play').addEventListener('click', togglePlayPause)

export function togglePlayPause() {
    if (playerAudio.paused){
        playerAudio.play();
        playerControls.querySelector('#player-control-play .material-icons').textContent = "pause";
    }else if(!playerAudio.paused) {
        playerAudio.pause();
        playerControls.querySelector('#player-control-play .material-icons').textContent = "play_arrow";
    }
}

export function setNewTime(event) {
    playerAudio.currentTime = event.currentTarget.value;
}

export function updateCurrentTimeSlider(event) {
    playerTimeCurrent.textContent = formatTimestamp(playerAudio.currentTime);
    playerProgress.value = playerAudio.currentTime;
}

playerProgress.addEventListener('change', setNewTime);

// Lorsque nous faison ".src = " sur le player, celui-ci va télécharger la chanson en arrière plan et calculer
// sa longueur. Lorsque c'est fait, il émet un event "durationchange" pour nous informer qu'il connait maintenant
// sa durée (en secondes!) et que l'on peut se servir de cette information
playerAudio.addEventListener('durationchange', () => {
    // On défini la valeur maximum du slider de la chanson comme étant sa durée en secondes
    playerProgress.max = playerAudio.duration
    // On affiche la durée totale, grâce à la fonction de formattage du temps
    playerTimeDuration.innerText = formatTimestamp(playerAudio.duration)
  })

  playerAudio.addEventListener('timeupdate', updateCurrentTimeSlider);

  document.body.onkeyup = function(e) {
      if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        if (document.getElementById('search-input') !== document.activeElement)
            togglePlayPause();
    }
  }


playerAudio.addEventListener('ended', evt => {
    playerControls.querySelector('#player-control-play .material-icons').textContent = "play_arrow";
});
