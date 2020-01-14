import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Context from '../context';
import config from '../config';
// import ValidationError from '../ValidationError';
import './AddSolutions.css';

class AddSolutions extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  
  static contextType = Context;
  // constructor(props) {
  //   super(props)
  //   //HOW DO I GET userId, categoryId of this solution
  //   this.state = {
  //     content: {
  //       value: '',
  //       touched: false
  //     },
  //     userId: {
  //       value: ''
  //     },
  //     categoryId: {
  //       value: ''
  //     },

  //     contentError: null,
  //   };
  // }

  // updateContent(content) {
  //   this.setState({ content: { value: content, touched: true } })
  // };

  //Not sure about this
  // updateUserId = e => {
  //   this.setState({ userId: e.target.value })
  // }

  handleAddSolution = e => {
    e.preventDefault();
    const newSolution = {
      content: this.state.content.value.trim(),
      userId: this.state.userId,
      categoryId: this.state.categoryId,
      modified: new Date()
    }
     
    console.log('solutionFields', content, userId, categoryId)

    const options = {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: {
        "content-type": "application/json",
      }
    }
    fetch(`${config.API_BASE_URL}/solutions`, options)
      .then(res => {
        console.log('res', res)
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then((newSolution) => {
        this.context.addSolution(newSolution);
        this.props.history.push(`/categories/${newSolution.categoryId}`)
      })
      .catch(error => {
        console.log(error)
      })
    // this.props.history.push('/')
  
  }

  render() {
    const { categories=[] } = this.context

    return (
      <div className="solutions">
        <h3>Post New Solutions</h3>
        <div className="form-container">
          {/* replace category with the category that was selected in category page */}
          <h4>Category</h4>
          <form className="solutions-form" onSubmit={this.handleAddSolution}>
            <label htmlFor="Content">My Solution Content</label>
            <textarea id="content" name="content" cols="30" rows="10" onChange={e => this.updateContent(e.target.value)}></textarea>
            {/* {this.state.content.touched && (
              <ValidationError message={contentError} />
            )} */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

AddSolutions.defaultProps = {
  content: ""
};

export default withRouter(AddSolutions);
