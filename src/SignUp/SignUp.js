import React, { Component } from 'react'
import './SignUp.css';

export default class SignUp extends Component {

  SubmitSignUp = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form className='signup-form' onSubmit={this.SubmitSignUp}>
          <div>
            <label htmlFor="first-name">First name</label>
            <input placeholder='First Name' type="text" name='first-name' id='first-name' />
          </div>
          <div>
            <label htmlFor="last-name">Last name</label>
            <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name='username' id='username' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}
