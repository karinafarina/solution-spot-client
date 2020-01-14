import React, { Component } from 'react';
import Context from '../context';
import config from '../config';
import ValidationError from '../ValidationError';
import './AddUser.css';

export default class AddUser extends Component {
  
  static contextType = Context;

  constructor(props) {
    super(props)
    this.state = {
      userName: {
        value: '',
        touched: false
      },
      email: {
        value: '',
        touched: false
      },
      userPassword: {
        value: '',
        touched: false
      },
      userNameError: null,
      emailError: null,
      userPasswordError: null
    };
  }
    
  updateUserName(userName) {
    this.setState({ userName: { value: userName, touched: true } })
  };
  updateEmail(email) {
    this.setState({ email: { value: email, touched: true } })
  };
  updateUserPassword(userPassword) {
    this.setState({ userPassword: { value: userPassword, touched: true } })
  };
  
  handleAddUser = e => {
    e.preventDefault();
    //get form fields from event

    const userName = this.state.userName.value.trim();
    const email = this.state.email.value.trim();
    const userPassword = this.state.userPassword.value.trim();
    console.log('fields', userName, email, userPassword)

    const options = {
      method: 'POST',
      body: JSON.stringify({ userName, email, userPassword }),
      headers: {
        "content-type": "application/json",
      }
    }
    fetch(`${config.API_BASE_URL}/users`, options)
      .then(res => {
        console.log('res', res)
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then((user) => {
        console.log('newUser', user)
        this.context.addUser(user);
      })
      .catch(error => {
        console.log(error)
      })
      this.props.history.push('/')
  }

  validateUserName() {
    const userName = this.state.userName.value.trim();
    if(userName.length === 0) {
      return "User name is required";
    } else if (userName.length < 3) {
      return "User name must be at least 3 characters long";
    }
  }

  validateEmail() {
    const email = this.state.email.value.trim();
    if (email.length === 0) {
      return "Email is required";
    } 
  }

  validateUserPassword() {
    const userPassword = this.state.userPassword.value.trim();
    if (userPassword.length === 0) {
      return "Password is required";
    } else if (userPassword.length < 3) {
      return "Password name must be at least 3 characters long";
    }
  }

  render() {
    const userNameError = this.validateUserName();
    const emailError = this.validateEmail();
    const userPasswordError = this.validateUserPassword();

    return (
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form className='signup-form' onSubmit={this.handleAddUser}>
          <div>
            <label htmlFor="userName">First name</label>
            <input placeholder='Full Name' type="text" name='userName' id='userName' onChange={e => this.updateUserName(e.target.value)} />
            {this.state.userName.touched && (
              <ValidationError message={userNameError} />
            )}
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' onChange={e => this.updateEmail(e.target.value)}/>
            {this.state.email.touched && (
              <ValidationError message={emailError} />
            )}
          </div>
          
          <div>
            <label htmlFor="userPassword">Password</label>
            <input type="userPassword" name='userPassword' id='userPassword' onChange={e => this.updateUserPassword(e.target.value)}/>
            {this.state.userPassword.touched && (
              <ValidationError message={userPasswordError} />
            )}
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}

AddUser.defaultProps = {
  userName: "",
  email: "",
  userPassword: ""
};
