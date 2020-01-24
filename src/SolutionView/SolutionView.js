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
    comments: [],
    content: {
      value: '',
      touched: false
    },
    currentCategory: {},
    currentSolution: [],
    textAreaValue: "",
  };

  updateContent(content) {
    this.setState({ content: { value: content, touched: true } })
  };

  handleCommentSubmit = e => {
    e.preventDefault();
    const newComment = {
      content: this.state.textAreaValue,
      userId: this.context.currentUserId,
      solutionId: this.props.match.params.solutionId,
    }
    console.log('new comment', newComment)
    const options = {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        "authorization": `Bearer ${config.TOKEN_KEY}`,
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
          commentsForSolution
        })
        console.log('this.prps', this.props.history)
        this.props.history.push(`/solutions/${this.state.currentCategory.id}`)
      })
      .catch(error => {
        console.log(error)
      })
    //this.props.history.push('/')
  }

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

  componentDidMount() {
    const solutionId = this.props.match.params.solutionId;
    fetch(`${config.API_BASE_URL}/solutions/${solutionId}/comments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        "authorization": `Bearer ${config.TOKEN_KEY}`,
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

  render() {
    const { commentsForSolution, currentSolution, currentCategory } = this.state;
    // console.log('currentsolution', currentSolution.content)
    return (
      <div className="solution-view">
        <Link to="/categories"><h5>Go back</h5></Link>
        <h3>{currentCategory ? currentCategory.title : ""}</h3>
        <p>{currentSolution.content}</p>
        <button
          className='solution-delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <Link to="/categories">Delete</Link>

        </button>
        
        {/* // TODO: CREATE A FUNCTIONAL COMPONENT FOR RENDERING AND STYLING COMMENTS */}
        <Comments commentsForSolution={commentsForSolution}/>
        
        <form className="new-comments" onSubmit={this.handleCommentSubmit}>
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