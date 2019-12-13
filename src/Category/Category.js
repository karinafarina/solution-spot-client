import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Context from '../context'
import Solutions from '../Solutions/Solutions'
import './Category.css';

export default class Category extends Component {
  
  static contextType = Context;  
  
  render() {
    const { categories, selectedCategory, setSelectedCategory } = this.context;
    return (
      <div className="category-container">
        <h2>Societal Issues to Discuss</h2>
        <h3>Categories</h3>
        
        <form className="categories">
          <label>
            Pick Category:
          <select id="select" value={selectedCategory} onChange={e => setSelectedCategory(e)}>
            <option value="blank">Choose a Category</option>
            {categories.map(category =>
            <option key={category.id} value={category.id}>{category.title}</option>
            )}
              {/* <option value="new-category">New Category</option> */}
            {/* Add a category to create new category which appends to the categories in the database */}
          </select>
          </label>
          {/* On submit, go to SolutionsHome and dynamically add chosen category value to top of page */}
          {/* <input type="submit" value="Submit" /> */}
        </form>
        
        <div className="solutions">
          <h4>Solutions</h4>
          
            <Solutions/>
          
          <Link to='./add-solutions'><h4>Add Your Solution</h4></Link> 
        </div>
      </div>
    )
  }
}