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
  button.dataset.authorURLKey = book.author.urlKey

  li.append(img, p, button)
  bookListEl.append(li)
}) 
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = '';
  author.forEach(auth => {
    // made structure 
    const h2 = createElement('h2')
    const img = createElement('img')
    const p = createElement('p')
    const pTag = createElement('p')
    const link = createElement('a')
    // add value 
    h2.textContent = auth.name 
    img.src = auth.picture 
    img.alt =`A picture of ${auth.name}`
    p.textContent = `Born:${auth.birthDate}`
    pTag.textContent = auth.bio 
    link.textContent = `Wikipedia Link: ${auth.wikipediaUrl}`
    // add to div 
    authorInfoEl.append(h2, img, p, pTag, link)
    
  })
}

export const renderNewUserForm = (newUserFormEl) => {
  // make form
  const form = document.createElement('form ')
  const usernameLabel = document.createElement('label')
  const usernameInput = document.createElement('input')
  const coolLabel = document.createElement('label')
  const coolInput = document.createElement('input')
  const langLabel = document.createElement('label')
  const langSelect = document.createElement('select')
  const button = document.createElement('button')
// specify elements 
  usernameInput.setAttribute('id','username')
  usernameInput.setAttribute('name', 'username')
  coolInput.setAttribute('id', 'is-cool')
  coolInput.setAttribute('name', 'isCool')
  langSelect.setAttribute('id', 'favorite-language')
  langSelect.setAttribute('name', 'favoriteLanguage')
  button.textContent = "Create User"
  // 
}

export const renderNewUser = (newUserEl, newUser) => {
}