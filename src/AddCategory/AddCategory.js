import React, { Component } from 'react';
import Context from '../context';
import config from '../config';
import ValidationError from '../ValidationError';
import './AddCategory.css';
import { withRouter } from 'react-router';

class AddCategory extends Component {

  static contextType = Context;

  constructor(props) {
    super(props)
    this.state = {
      title: {
        value: '',
        touched: false
      },
      titleError: null,
      show: false,
    };
  }

  updateTitle(title) {
    this.setState({ title: { value: title, touched: true } })
  };

  handleAddCategory = e => {
    e.preventDefault();
    //get form fields from event

    const title = this.state.title.value.trim();
    

    const options = {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        "content-type": "application/json",
      }
    }
    fetch(`${config.API_BASE_URL}/categories`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then((newCategory) => {
        this.context.addCategory(newCategory);
      })
      .catch(error => {
        console.log(error)
      })
    this.toggleShow();
  }

  validateTitle() {
    const title = this.state.title.value.trim();
    if (title.length === 0) {
      return "Title is required";
    } else if (title.length < 3) {
      return "Title must be at least 3 characters long";
    }
  }

  toggleShow = () => {
    const { show } = this.state;
    this.setState({
      show: !show
    })
  }

  render() {
    const titleError = this.validateTitle();

    return (
      <div className="new-category">
        <button type="button" onClick={this.toggleShow}>Add Category</button>
        {this.state.show ? <form className='new-category-form' onSubmit={this.handleAddCategory}>
          <div>
            <input placeholder='Title' type="text" name='title' id='title' onChange={e => this.updateTitle(e.target.value)} />
            {this.state.title.touched && (
              <ValidationError message={titleError} />
            )}
          </div>
          <button type='submit'>Submit</button>
        </form> : ""}
        
      </div>
    )
  }
}

AddCategory.defaultProps = {
  title: ""
};

export default withRouter(AddCategory);
