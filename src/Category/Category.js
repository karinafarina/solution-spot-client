import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

export default function Category() {
  return (
    <div className="category-container">
      <h2>Societal Issues to Discuss</h2>
      <h3>Categories</h3>
      <form className="categories">
        <label>
          Pick Category:
        <select>
          <option value="Homelessness">Homelessness</option>
          <option value="Substance Addicted Births">Substance Addicted Births</option>
          <option value="Mass Shootings">Mass Shootings</option>
          <option value="Obesety Epidemic">Obesety Epidemic</option>
          <option value="Teen Vaping">Teen Vaping</option>
          {/* Add a category to create new category which appends to the categories in the database */}
          {/* <option value="">New Category</option> */}
        </select>
        </label>
        {/* On submit, go to SolutionsHome and dynamically add chosen category value to top of page */}
        <input type="submit" value="Submit" />
      </form>
      <form className="add-category">
        <label htmlFor="new-category">New Category</label>
        <input type="text"/>
      </form>
      {/* Remove link after functionality for submit is added, this is just for user flow */}
      <Link to='/solutions-home'>Click through here to post idea.</Link>
    </div>
  )
}
