import React from 'react'

export default React.createContext({
  solutions: [],
  categories: [],
  users: [],
  comments: [],
  addCategory: () => {},
  addSolution: () => {},
  deleteSolution: () => {},
  selectedCategory: () => {},
  setSelectedCategory: () => {},
  handleCommentSubmit: () => {}
})