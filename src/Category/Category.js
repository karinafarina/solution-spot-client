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
        <h3>Get started by selecting a category or, add a new one!</h3>
        
        <form className="categories">
          
          <select id="select" value={currentCategoryId} onChange={e => setCurrentCategoryId(e)}>
            <option value="blank">Choose a Category</option>
            {categories.map(category =>
            <option key={category.id} value={category.id}>{category.title}</option>
            )}
          </select>
        </form>
        <AddCategory/>
        
        <div className="filtered-solutions">
          {currentCategory ? <h4>View and comment on or add solution for {currentCategory.title}</h4> : ""}
          
            <FilteredSolutions />
          
          {currentCategoryId ? <Link to={`/add-solutions/${currentCategoryId}`}><button>Add Your Solution</button></Link> : ""}
           
        </div>
      </div>
    )
  }
}