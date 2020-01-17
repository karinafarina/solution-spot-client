import React from 'react'

export default React.createContext({
  solutions: [],
  categories: [],
  users: [],
  comments: [],
  
  addUser: () => {},
  setCurrentUser: () => {},
  addCategory: () => {},
  
  currentCategoryId: () => { },
  setCurrentCategoryId: () => { },

  addSolution: () => {},
  deleteSolution: () => {},
  
  handleSubmitNewSolution: () => {},
  handleCommentSubmit: () => {}
})