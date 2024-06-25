export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = '';
  books.forEach(book =>{
  const li = document.createElement('li')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const button = document.createElement('button')

  img.src = book.coverUrl 
  img.alt = `An old cover of ${book.title}`
  p.textContent =  `Title: ${book.title}`
  button.textContent = `View ${book.author.name}`
  button.dataset.authorUrlKey = book.author.urlKey

  li.append(img, p, button)
  bookListEl.append(li)
}) 
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = '';
    // made structure 
    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const pTag = document.createElement('p')
    const link = document.createElement('a')
    // add value 
    h2.textContent = author.name 
    img.src = author.pictureUrl
    img.alt =`A picture of ${author.name}`
    p.textContent = `Born: ${author.birthDate}`
    pTag.textContent = author.bio 
    link.textContent = `Wikipedia Link`
    link.href = author.wikipediaUrl
    // add to div 
    authorInfoEl.append(h2, img, p, pTag, link)
    

}

export const renderNewUserForm = (form) => {
  // make form
 form.innerHTML = `
 <label for='username'>Username</label>
 <input id="username" name="username">
 <label for='is-cool'>Is this user cool?</label>
 <input id="is-cool" name="isCool" type='checkbox'>
 <label for='favorite-language'>Favorite Language</label>
 <select id="favorite-language" name="favoriteLanguage">
 <option>None</option>
 <option>JavaScript</option>
 <option>Python</option>
 <option>Ruby</option>
 </select>
<button>Create User</button>
 `

}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = '';
// make elements 
const h2 = document.createElement('h2')
const p = document.createElement('p')
const pTag = document.createElement('p')
// values 
h2.dataset.userId = newUser.id
h2.textContent = newUser.username 
if (newUser.isCool === true) {
  p.textContent ='The hippest in the house!'
} else {
  p.textContent = 'A real square.'
}
pTag.textContent = `Favorite Language: ${newUser.favoriteLanguage}`
// append 
newUserEl.append(h2, p , pTag)
}