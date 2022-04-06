
import { getUsers } from '../api'

// Les tags dont nous avons besoin pour afficher les utilisateurs
const userList = document.querySelector('.user-list')
const userTemplate = document.querySelector('#user-template')

// Afficher un utilisateur (donné en paramètre)
function renderUser(user) {
  const newUser = userTemplate.content.cloneNode(true)
  
  // Définition des bons liens, pour l'avatar du user et la publication
  newUser.querySelector('a').href = '#users-' + user.id
  newUser.querySelector('a').innerText = user.name
  userList.append(newUser)
}

// Itère sur toutes les postes
function renderUsers(users) {
  // On vide la liste
  userList.replaceChildren()

  // On itère sur le tableau pour les insérer dans la liste
  for(const user of users) {
    renderUser(user)
  }
}

async function renderHomeSection() {
    const users = await getUsers();
    renderUsers(users);
}

export default renderHomeSection