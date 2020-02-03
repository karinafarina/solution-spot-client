import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../context';
import Comments from '../Comments/Comments';
import config from '../config';
import '../services/token-service';
import './SolutionView.css';

class SolutionView extends Component  {
  static contextType = Context;  
  
  state = {
    commentsForSolution: [],
    comments: [],
    content: {
      value: '',
      touched: false
    },
    currentCategory: {},
    currentSolution: [],
    textAreaValue: "",
  };

  componentDidMount() {
    const solutionId = this.props.match.params.solutionId;
    fetch(`${config.API_BASE_URL}/solutions/${solutionId}/comments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        "authorization": `Bearer ${window.sessionStorage.getItem("token")}`,
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
        this.setState({
          commentsForSolution
        })
        this.setCurrentSolution();
        this.setCurrentCategory();
      })
      .catch(error => {
        console.error(error)
      });
  }

  setCurrentCategory = () => {
    const { categories, currentCategoryId } = this.context;
    const currentCategory = categories.find(category => category.id === currentCategoryId);
    this.setState({
      currentCategory
    })
  }

  setCurrentSolution = () => {
    let solutionId = parseInt(this.props.match.params.solutionId);
    let currentSolution = this.context.solutions.filter(solution => solutionId === solution.id);
    this.setState({
      currentSolution: currentSolution[0]
    })
  }

  handleCommentInput = (e) => {
    this.setState({ textAreaValue: e.target.value })
  }
  
  handleCommentSubmit = e => {
    e.preventDefault();
    const newComment = {
      content: this.state.textAreaValue,
      userId: this.context.currentUserId,
      solutionId: this.props.match.params.solutionId,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        "authorization": `Bearer ${window.sessionStorage.getItem("token")}`,
        "content-type": "application/json"
      }
    }
    fetch(`${config.API_BASE_URL}/comments`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then((newComment) => {
        const commentsForSolution = [...this.state.commentsForSolution, newComment];
        this.setState({
          commentsForSolution,
          textAreaValue: "",
        })
      })
      .catch(error => {
        console.log(error)
      })
    //this.props.history.push('/')
  }

  handleClickDelete = e => {
    e.preventDefault()
    const solutionId = this.props.match.params.solutionId;

    fetch(`${config.API_BASE_URL}/solutions/${solutionId}`, {
      method: 'DELETE',
      headers: {
        "authorization": `Bearer ${window.sessionStorage.getItem("token")}`,
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const error = res.json();
        throw error;
      })
      .then(() => {
        this.context.deleteSolution(solutionId)
        this.props.history.push('/categories')
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { commentsForSolution, currentSolution = ["loading..."], currentCategory } = this.state;
    return (
      <div className="solution-view">
        <h3>{currentCategory ? currentCategory.title : ""}</h3>
        <p>{currentSolution.content}</p>
        <button
          className='solution-delete'
          type='button'
          onClick={this.handleClickDelete}>
          Delete Solution
        </button>
        
        <Comments commentsForSolution={commentsForSolution}/>
        
        <form className="new-comments" onSubmit={this.handleCommentSubmit}>
          <label htmlFor="new-comment" id="new-comment">Add comment for this solution idea</label>
          <textarea name="new-comment" id="new-comment" cols="50" rows="12" value={this.state.textAreaValue} onChange={e => this.handleCommentInput(e)}></textarea>
          <input type="submit"/>
        </form>
        <Link to="/categories"><button className="go-back" type="button">Cancel</button></Link>

      </div>
    )
  }
}

export default withRouter(SolutionView);