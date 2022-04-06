// URL de base du serveur
const BASE_URL = 'https://webmobui-22-exa-backend.herokuapp.com/'

// Fonction loadJson utilisée à l'interne. Elle s'occupe de charger l'url passée en paramètre et convertir
// son résultat en json
async function loadJson(url) {
  const response = await fetch(url)
  const parsedJson = await response.json()
  return parsedJson
}

// Retourne une liste d'artistes
async function getPosts() {
  return await loadJson(`${BASE_URL}/api/posts`)
}

async function getUserPosts(id) {
    return await loadJson(`${BASE_URL}api/users/${id}/posts`)
}

async function getPost(id) {
    return await loadJson(`${BASE_URL}api/posts/${id}`)
}

async function getUsers() {
    return await loadJson(`${BASE_URL}api/users`)
}

export { getPosts, getUserPosts, getPost, getUsers}
