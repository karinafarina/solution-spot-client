import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../context';
import Comments from '../Comments/Comments';
import './SolutionView.css';

class SolutionView extends Component  {
  static contextType = Context;  
  
  state = {
    textAreaValue: "",
  };

  handleCommentInput = (e) => {
    // this.state.textAreaValue.value = "";
    this.setState({ textAreaValue: e.target.value })
  }

  render() {
    let solutionId = parseInt(this.props.match.params.solutionId);
    console.log('solutionId', typeof(solutionId));
    let solution = this.context.solutions.filter(solution => solutionId === solution.id);
    console.log('solution', solution)
    let users = this.context.users.filter(user => user.id === solution[0].userId);
    let author = users[0].name;
    let comments = this.context.comments.filter(comment => comment.solutionId === solutionId);
    
    return (
      <div className="solution-view">
        <Link to="/categories"><h5>Go back</h5></Link>
        <h3>{author}</h3>
        <p>{solution[0].content}</p>
        
        {/* // TODO: CREATE A FUNCTIONAL COMPONENT FOR RENDERING AND STYLING COMMENTS */}
        <Comments comments={comments}/>
        
        <form className="comments" onSubmit={e => this.context.handleCommentSubmit(e, this.state.textAreaValue, solutionId)}>
          <label htmlFor="new-comment" id="new-comment">Comment</label>
          <textarea name="new-comment" id="new-comment" cols="50" rows="12" onChange={e => this.handleCommentInput(e)}></textarea>
          <input type="submit"/>
          {/* After submitting, comment will be added to database  */}
        </form>
      </div>
    )
  }
}

export default withRouter(SolutionView);