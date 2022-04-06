
import { getPosts, getUserPosts, getPost } from '../api'
import { getLikes, toggleLike, isLiked } from './likes'

// Les tags dont nous avons besoin pour afficher les publications
const postList = document.querySelector('.post-list')
const postListItemTemplate = document.querySelector('#post-list-item-template')
const postsSection = document.getElementById('posts-section');
const postsSectionTitle= postsSection.querySelector('h4');


// Pour indiquer si la publication est liké ou non
function toggleLikeIcon(likeIcon, post) {
    if(isLiked(post))
        likeIcon.innerText = 'favorite'
    else
        likeIcon.innerText = 'favorite_border'
}

// Afficher une publication (donnée en paramètre)
function renderPost(post) {
  const newPost = postListItemTemplate.content.cloneNode(true)
  
  // Définition des bons liens, pour l'avatar du user et la publication
  newPost.querySelector('a.post-list-item-image-link').href = '#posts-' + post.id
  newPost.querySelector('a.post-list-item-user').href = '#users-' + post.user.id
  
  // Définition des bonnes images pour l'avatar de l'utilisateur et la publication
  newPost.querySelector('img.post-list-item-user-image').src = post.user.avatar_url
  newPost.querySelector('a.post-list-item-image-link img').src = post.image_url
  
  // Nom d'utilisateur
  newPost.querySelector('div.post-list-item-user-name').innerText = post.user.name
  // Commentaire du post
  newPost.querySelector('div.post-list-item-content').innerText = post.content

  // Au clique sur le bouton like,  ajout / suppression de la publication dans le storage 
  // et on ajuste son icone en fonction
  newPost.querySelector('.like-button').addEventListener('click', (event) => {

    toggleLike(post)
    toggleLikeIcon(event.target, post)
  })
  // A l'insertion, on met à jour l'icone, si la chanson est présente dans les likes
  toggleLikeIcon(newPost.querySelector('.like-button .material-icons'), post)


  postList.append(newPost)
}

// Itère sur toutes les postes
function renderPosts(posts) {
  // On vide la liste
  postList.replaceChildren()

  // On itère sur le tableau pour les insérer dans la liste
  for(const post of posts) {
    renderPost(post)
  }
}

// Charge les postes et itère dessus
async function renderPostsSection() {
  const posts = await getPosts()
  postsSectionTitle.innerText = 'Posts'
  renderPosts(posts)
}

async function renderUserPostsSection(userId) {
    const userPosts = await getUserPosts(userId);
    postsSectionTitle.innerText = `Posts > ${userPosts[0].user.name}`
    renderPosts(userPosts);
}

// Charge la section des publications likées
function renderPostsLikedSection() {
    const posts = getLikes()
    postsSectionTitle.innerText = `Posts likés (${posts.length})`
    renderPosts(posts)
}

export {renderPostsSection, renderUserPostsSection, renderPostsLikedSection}