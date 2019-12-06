import React, { Component } from 'react'
import './AddSolutions.css';

export default class AddSolutions extends Component {

  handleSubmit = (e) => {
     e.preventDefault();
    console.log('Hi')
    // save new post object to the array
    // this.props.history.push('/')
  }

  render() {
    // const { categories } = this.props;
    return (
      <div className="solutions">
        <h3>Post New Solutions</h3>
        <div className="form-container">
          {/* replace category with the category that was selected in category page */}
          <h4>Category</h4>
          <form className="solutions-form" onSubmit={this.handleSubmit}>
            <label htmlFor="my-solution">My Solution</label>
            <textarea id="my-solution" name="my-solution" cols="30" rows="10"></textarea>

            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
