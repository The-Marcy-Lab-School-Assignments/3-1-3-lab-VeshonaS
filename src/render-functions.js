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
  coolInput.setAttribute('type', 'Checkbox ')
  langSelect.setAttribute('id', 'favorite-language')
  langSelect.setAttribute('name', 'favoriteLanguage')
  button.textContent = "Create User"
  // select
  const langArray = ['None', 'JavaScript', 'Python', 'Ruby ']
  for (let i = 0; i < langArray.length; i++){
    let options = document.createElement('option')
    options.value = langArray[i]
    options.text = langArray[i]
    langSelect.appendChild(options)
    // appending 
    form.append(usernameLabel, usernameInput, coolLabel, coolInput,langLabel,langSelect,button)
    newUserFormEl.append(form)
  }
}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = ''
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
pTag.textContent = newUser.favoriteLanguage 
// append 
newUserEl.append(h2, p , pTag)
}