import JsonStorage from '../lib/JsonStorage'

// Storage pour les likes
// Exemple: likesStorage.getItem(post.id)
const likesStorage = new JsonStorage({ name: 'likes', eventName: 'likes_updated' })

// Cette fonction toggle une publication dans la liste de likes
function toggleLike(post) {
  if(isLiked(post)) {
    likesStorage.removeItem(post.id.toString())
  } else {
    likesStorage.setItem(post.id.toString(), post)
  }
}

// Vérifie si une publication est dans les likes (retourne l'entry si oui, undefined si non)
function isLiked(post) {
  return likesStorage.getItem(post.id.toString())
}

// Retourne la liste des likes sous forme de tableau avec seulement la valeur
function getLikes() {
  return likesStorage.toArray().map((e) => e[1])
}

export { toggleLike, isLiked, getLikes }
