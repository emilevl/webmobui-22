import { getSong } from "../api";

const lyricsSection  = document.querySelector('#lyrics-section');
const lyricsSectionSongTitle  = lyricsSection.querySelector('h4');
const lyricsSectionArtistName  = lyricsSection.querySelector('h5');
const lyricsSectionLyrics  = lyricsSection.querySelector('p');


async function renderLyricsSection(idSong) {
    const song = await getSong(id)
    console.log(song);
    lyricsSectionSongTitle = song.title;
    lyricsSectionArtistName = song.
}

export default renderLyricsSection;

