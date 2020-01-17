import React, { Component } from 'react';
import Context from '../context';
import config from '../config';
import ValidationError from '../ValidationError';
import AuthApiService from '../services/auth-api-service'
import './AddUser.css';

export default class AddUser extends Component {
  
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }
    

  handleAddUser = e => {
    e.preventDefault();
    //get form fields from event
    const { email, userPassword } = e.target;

    this.setState({ error: null })
    AuthApiService.postUser({
      email: email.value,
      userPassword: userPassword.value
    })
      .then(user => {
        email.value = ''
        userPassword.value = ''
        this.props.onRegistrationSuccess()
      })
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
