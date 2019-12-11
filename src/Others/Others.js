import React, { Component } from 'react';
import Context from '../context';
import './Others.css';

export default class Others extends Component  {
  static contextType = Context;  
  render() {
    //I want the solution that matches the selected solution
    let solutionId = this.props.match.params.solution_id;
    let solution = this.context.solutions.filter(solution => solutionId === solution.id)
    return (
      <div className="others">
        <h2>{solution[0].title}</h2>
        <p>{solution[0].content}</p>
        {/* <form className="comments">
          <label htmlFor="new-comment" id="new-comment">Comment</label>
          <textarea name="new-comment" id="new-comment" cols="50" rows="20"></textarea>
          <input type="submit"/>
          // After submitting, comment will be added to database 
        </form> */}
      </div>
    )
  }
}
