const url = "https://webmob-ui-22-spotlified.herokuapp.com/api/";

export async function loadArtists() {
    const response = await fetch(url + "artists")
    const artists = await response.json();
    return artists;
}

export async function loadSongs(id) {
    const response = await fetch(url + "artists/" + id + "/songs")
    const artists = await response.json();
    return artists;
}