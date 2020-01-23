import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Context from '../context';
import AddCategory from '../AddCategory/AddCategory';
import FilteredSolutions from '../FilteredSolutions/FilteredSolutions'
import './Category.css';

export default class Category extends Component {
  
  static contextType = Context;  
  
  render() {
    const { categories, currentCategoryId, setCurrentCategoryId } = this.context;
    const currentCategory = categories.find(category => category.id === currentCategoryId);
    return (
      <div className="category-container">
        <h2>Societal Issues to Discuss</h2>
        <h3>Categories</h3>
        
        <form className="categories">
          
          <select id="select" value={currentCategoryId} onChange={e => setCurrentCategoryId(e)}>
            <option value="blank">Choose a Category</option>
            {categories.map(category =>
            <option key={category.id} value={category.id}>{category.title}</option>
            )}
          </select>
        </form>
        <AddCategory/>
        
        <div className="solutions">
          {currentCategory ? <h4>Solutions for {currentCategory.title}</h4> : <h4>All Solutions</h4>}
          
            <FilteredSolutions />
          
          {currentCategoryId ? <Link to={`./add-solutions/${currentCategoryId}`}><h4>Add Your Solution</h4></Link> : ""}
           
        </div>
      </div>
    )
  }
}