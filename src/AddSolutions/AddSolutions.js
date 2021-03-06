import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Context from '../context';
import config from '../config';
// import ValidationError from '../ValidationError';
import './AddSolutions.css';

class AddSolutions extends Component {
  
  static contextType = Context;
  
  constructor(props) {
    super(props)
    //HOW DO I GET userId, categoryId of this new solution
    this.state = {
      content: {
        value: '',
        touched: false
      },
      contentError: null,
    };
  }

  updateContent(content) {
    this.setState({ content: { value: content, touched: true } })
  };

  handleAddSolution = e => {
    e.preventDefault();
    const newSolution = {
      content: this.state.content.value.trim(),
      userId: this.context.currentUserId,
      categoryId: this.context.currentCategoryId,
      modified: new Date()
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(newSolution),
      headers: {
        "content-type": "application/json",
      }
    }
    fetch(`${config.API_BASE_URL}/solutions`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then((newSolution) => {
        this.context.addSolution(newSolution);
      })
      .catch(error => {
        console.log(error)
      })  
  }

  handleDeleteSolution = () => {

  }

  render() {
    const { currentCategoryId, categories } = this.context;
    const currentCategory = categories.find(category => currentCategoryId === category.id);
    return (
      <div className="add-solutions">
        <h3>Post New Solution For...</h3>
        <div className="form-container">
          {currentCategory ? <h4>{currentCategory.title}</h4> : ""}
          
          <form className="solutions-form" onSubmit={this.handleAddSolution}>
            <label htmlFor="Content">My Solution</label>
            <textarea id="content" name="content" cols="30" rows="10" onChange={e => this.updateContent(e.target.value)}></textarea>
            {/* {this.state.content.touched && (
              <ValidationError message={contentError} />
            )} */}
            <input type="submit" />
          </form>
          <Link to="/categories"><button className="go-back" type="button">Cancel</button></Link>
        </div>
      </div>
    )
  }
}

AddSolutions.defaultProps = {
  content: ""
};

export default withRouter(AddSolutions);
