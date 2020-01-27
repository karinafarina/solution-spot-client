import React, { Component } from 'react';
// import Context from '../context';
// import config from '../config';
// import ValidationError from '../ValidationError';
import AuthApiService from '../services/auth-api-service'
import './AddUser.css';

export default class AddUser extends Component {

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
        this.props.history.push('/login')
      })
  }

  render() {
    // const userNameError = this.validateUserName();
    // const emailError = this.validateEmail();
    // const userPasswordError = this.validateUserPassword();

    return (
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form className='signup-form' onSubmit={this.handleAddUser}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' />
            {/* {this.state.email.touched && (
              <ValidationError message={emailError} />
            )} */}
          </div>
          
          <div>
            <label htmlFor="userPassword">Password</label>
            <input type="text" name='userPassword' id='userPassword' />
            {/* {this.state.userPassword.touched && (
              <ValidationError message={userPasswordError} />
            )} */}
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
