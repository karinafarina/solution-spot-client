import React, { Component } from 'react';
// import Context from '../context';
// import config from '../config';
// import ValidationError from '../ValidationError';
import AuthApiService from '../services/auth-api-service'
import './AddUser.css';

export default class AddUser extends Component {

  state = { 
    error: null 
  }
    

  handleAddUser = e => {
    e.preventDefault();
    //get form fields from event
    const { email, userPassword, confirmPassword } = e.target;
    if(userPassword.value === confirmPassword.value) {
      this.setState({ error: null })
      AuthApiService.postUser({
        email: email.value,
        userPassword: userPassword.value,
      })
        .then(user => {
          email.value = ''
          userPassword.value = ''
          this.props.history.push('/login')
        })
    } else {
      alert("Passwords do not match");
    }
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
            <input type="email" name='email' id='email' required />
            {/* {this.state.email.touched && (
              <ValidationError message={emailError} />
            )} */}
          </div>
          
          <div>
            <label htmlFor="userPassword">Password</label>
            <input type="password" name='userPassword' id='userPassword' required />
            {/* {this.state.userPassword.touched && (
              <ValidationError message={userPasswordError} />
            )} */}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name='confirmPassword' id='confirmPassword' required />
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
