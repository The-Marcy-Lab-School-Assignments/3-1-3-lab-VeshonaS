// import { post } from "fetch-mock";

export const getFirstThreeFantasyBooks = async() => {

    try {
      const res = await fetch('https://openlibrary.org/subjects/fantasy.json')
      
      if(!res.ok){  
        throw new Error('Failed to get fantasy books')
      }
      const data = await res.json()
      console.log(data)
      return data.works.slice(0, 3).map(work => {
        return {
        title: work.title ,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key
        },
        coverUrl:`https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
      }
    })
    }
    catch (error){
        console.warn(error.message)
        return null
    }
};

export const getAuthor = async (urlKey) => {
  try {
    const response = await fetch(`https://openlibrary.org${urlKey}.json`)
    
    if(!response.ok){
      throw new Error('Failed to get author')
    }
    const data = await response.json()
    // not sure what to slice 
    return data.author.slice(0, 3).map(author => {
      return {
          bio: author.bio,
          birthDate: author.birthDate,
          name: author.name,
          pictureUrl: `https://covers.openlibrary.org/a/id/${author.pictureUrl}-M.jpg`,
          wikipediaLink: author.wikipediaLink
      }
    })
  }
  catch(error){
    console.warn(error.message)
    return null 
  }
};

export const createNewUser = async (user) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com', { method:"POST", user })
    if (!res.ok){
      throw new Error('Failed to create new user')
    }
    const data = await res.json()
    return data.map(newUser => {
     return  {
        username: newUser.username,
        isCool: newUser.isTrue ,
        favoriteLanguage: newUser.favoriteLanguage ,
        id:newUser.id 
      }
    })
  }
  catch(error) {
    console.warn(error.message)
    return null 
  }
}