import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Category.css';

export default class Category extends Component {
  state = {
    selected: 0
  }

  componentDidMount() {
    this.setState({ selected: this.props.categories[0].id})
  }

  handleCategorySelect = (e) => {
    console.log('selected categroy', e.target.value)
    this.setState( {selected: e.target.value} )
  }
  
  render() {
    const { categories, solutions } = this.props;
    const newSolutions = this.props.solutions.filter(solution => solution.categoryId.toString() == this.state.selected);
    console.log('filtered solutions', newSolutions, typeof(this.state.selected))

    return (
      <div className="category-container">
        <h2>Societal Issues to Discuss</h2>
        <h3>Categories</h3>
        <form className="categories">
          <label>
            Pick Category:
          <select id="select" value={this.state.selected} onChange={this.handleCategorySelect}>
            {categories.map(category =>
            <option key={category.id} value={category.id}>{category.title}</option>
            )}
              {/* <option value="new-category">New Category</option> */}
            {/* Add a category to create new category which appends to the categories in the database */}
          </select>
          <input type="submit"/>
          </label>
          {/* On submit, go to SolutionsHome and dynamically add chosen category value to top of page */}
          {/* <input type="submit" value="Submit" /> */}
        </form>
        
        <div className="solutions">
          <h4>Solutions</h4>
          {/* Replace all solutions title with whichSolution function */}
          {/* {whichSolution} */}
          <ul>
              
            {
              this.props.solutions.filter(solution => solution.categoryId.toString() == this.state.selected).map(entry => 
                <Link to={'/others/' + entry.id}>
                  <li key={entry.id}>
                    {entry.title}
                  </li>
                </Link>
              )
            }
            
          </ul>
          <Link to='./add-solutions'><h4>Add Your Solution</h4></Link> 
        </div>
      </div>
    )
  }
}