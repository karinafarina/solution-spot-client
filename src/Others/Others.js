import React from 'react';
import './Others.css';

export default function Others(props) {
  console.log('porpus', props)
  //I want the solution that matches the selected solution
  let solutionId = props.match.params.solution_id;
  let solution = props.solutions.filter(solution => solutionId === solution.id)
  console.log('solution', solution);
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
