import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(createNewUser)

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks()
  console.log(books  )
  // const books =
  // render out the books
  renderBookList(bookListEl, books)

  bookListEl.addEventListener('click', async (event) => {
    if (event.target.tagName === 'BUTTON'){
       const key = event.target.dataset.authorUrlKey
      const authorInfo = await getAuthor(key)
      renderAuthorInfo(authorInfoEl, authorInfo)
    }
  })
  renderNewUserForm(newUserFormEl)

  newUserFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newForm = new FormData(e.target);
    const data = Object.fromEntries(newForm)
     const newUser = await createNewUser(data);

     renderNewUser(newUserEl, newUser)
  })
}
