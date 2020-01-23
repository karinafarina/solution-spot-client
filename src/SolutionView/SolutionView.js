import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../context';
import Comments from '../Comments/Comments';
import config from '../config';
import './SolutionView.css';

class SolutionView extends Component  {
  static contextType = Context;  
  
  state = {
    commentsForSolution: [],
    textAreaValue: "",
  };

  handleCommentInput = (e) => {
    // this.state.textAreaValue.value = "";
    this.setState({ textAreaValue: e.target.value })
  }

  handleClickDelete = e => {
    e.preventDefault()
    const solutionId = this.props.match.params.solutionId;

    fetch(`http://localhost:8000/api/solutions/${solutionId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(solutionId)
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleCommentSubmit = (e, commentInput, solutionId) => {
    e.preventDefault();
    this.setState({
      comments: this.state.comments.concat([
        {
          id: "",
          userId: "",
          solutionId: solutionId,
          content: commentInput,
        }
      ])
      //  TODO: ADD NEW COMMENT TO CONTEXT, RANDOMLY GENERATE ID'S, USE ACTUAL SOLUTIONID AND USERID
    })
  }


  componentDidMount() {
    const solutionId = this.props.match.params.solutionId;
    fetch(`${config.API_BASE_URL}/solutions/${solutionId}/comments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(commentsForSolution => {
        console.log('comments', commentsForSolution)
        this.setState({
          commentsForSolution
        })
      })
      .catch(error => {
        console.error(error)
      });
  }

  render() {
    const { commentsForSolution } = this.state;
    console.log('comments', commentsForSolution)
    let solutionId = parseInt(this.props.match.params.solutionId);
    let solution = this.context.solutions.filter(solution => solutionId === solution.id);
    //let commentsForThisSolution = commentsForSolution.filter(comment => comment.solutionId === solutionId);
    const { categories, currentCategoryId } = this.context;
    const currentCategory = categories.find(category => category.id === currentCategoryId);
    //console.log('coomesolutio', commentsForSolution)
    return (
      <div className="solution-view">
        <Link to="/categories"><h5>Go back</h5></Link>
        <h3>{currentCategory.title}</h3>
        <p>{solution[0].content}</p>
        <button
          className='solution-delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <Link to="/categories">Delete</Link>

        </button>
        
        {/* // TODO: CREATE A FUNCTIONAL COMPONENT FOR RENDERING AND STYLING COMMENTS */}
        <Comments commentsForSolution={commentsForSolution}/>
        
        <form className="new-comments" onSubmit={e => this.context.handleCommentSubmit(e, this.state.textAreaValue, solutionId)}>
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