import React, { Component } from 'react';
import Context from '../context';
import './AddSolutions.css';

export default class AddSolutions extends Component {
  static contextType = Context;

  state = {
    solutionInput: ""
  }

  handleSolutionInput = (e) => {
    // this.setState({ solutionInput: "" });
    this.setState({ solutionInput: e.target.value })
  }

  render() {
    return (
      <div className="solutions">
        <h3>Post New Solutions</h3>
        <div className="form-container">
          {/* replace category with the category that was selected in category page */}
          <h4>Category</h4>
          <form className="solutions-form" onSubmit={e => this.context.handleSubmitNewSolution(e, this.state.solutionInput)}>
            <label htmlFor="my-solution" id="my-solution">My Solution</label>
            <textarea id="my-solution" name="my-solution" cols="30" rows="10" onChange={e => this.handleSolutionInput(e)}></textarea>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
