const url = "https://webmob-ui-22-spotlified.herokuapp.com/api/";

async function loadJson(url) {
    const response = await fetch(url);
    return await response.json();
}
export async function loadArtists() {
    return await loadJson(url + "artists");
}

export async function loadSongs(id) {
    return await loadJson(url + "artists/" + id + "/songs");
}

export async function loadPlayer(songId) {
    return await loadJson(url + "songs/" + songId);
}

export async function loadSearchRequest(searchRequest) {
    return await loadJson(url + "songs/search/" + encodeURIComponent(searchRequest));
}