import {getPost } from '../api'

// Les tags dont nous avons besoin pour afficher une publication détaillée
const postSection = document.getElementById('post-section');
const postSectionTitle= postSection.querySelector('h4');

// Les tags qui concernent l'utilisateur
const postUser = postSection.querySelector('.post-user')
const postUserImg = postUser.querySelector('.post-user-image')
const postUserName = postUser.querySelector('.post-user-name')

// Les tags concernant la publication
const postContent = postSection.querySelector('.post-content')
const postImg = postSection.querySelector('.post-image-wrapper img')


// Afficher une publication (donnée en paramètre)
function renderPost(post) {

  // Définition des bons liens, pour l'utilisateur
  postUser.href = '#users-' + post.user.id
  
  // Définition des bonnes images pour l'avatar de l'utilisateur et la publication
  postUserImg.src = post.user.avatar_url
  postImg.src = post.image_url
  
  // Nom d'utilisateur
  postUserName.innerText = post.user.name
  // Commentaire du post
  postContent.innerText = post.content
}

async function renderPostSection(postId) {
    const post = await getPost(postId);
    postSectionTitle.innerText = `Post > Numéro ${post.id}`
    renderPost(post);
}

export default renderPostSection