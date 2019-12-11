import React from 'react'

export default React.createContext({
  solutions: [],
  categories: [],
  addCategory: () => {},
  addSolution: () => {},
  deleteSolution: () => {},
  selectedCategory: () => {},
  setSelectedCategory: () => {},
})