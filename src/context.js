import React from 'react'

export default React.createContext({
  solutions: [],
  categories: [],
  users: [],
  comments: [],
  addUser: () => {},
  addCategory: () => {},
  addSolution: () => {},
  deleteSolution: () => {},
  selectedCategory: () => {},
  setSelectedCategory: () => {},
  handleSubmitNewSolution: () => {},
  handleCommentSubmit: () => {}
})