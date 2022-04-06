const urlApi = "https://webmob-ui-22-spotlified.herokuapp.com/api/";

export async function loadArtists () {
    return fetch(urlApi + "artists")
        .then((response) => response.json())
}

export async function searchSong(query) {
    return fetch(urlApi + "songs/search/" + query)
        .then((response) => response.json());
}

export async function loadArtistSong(artist) {
    return fetch(urlApi + "artists/" + artist + "/songs")
        .then((response) => response.json());
}