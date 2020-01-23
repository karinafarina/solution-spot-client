import React, { Component } from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service'
import Context from '../context';
// import config from '../config';
import './Login.css';

export default class Login extends Component {

  static contextType = Context;  

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { email, userPassword } = ev.target;

    AuthApiService.postLogin({
      email: email.value,
      userPassword: userPassword.value,
    })
      .then(res => {
        console.log('here', res)

        this.context.setCurrentUser(res.userId)
        //send back userId CALL SETCURRENTUSER(ID) NEED ID FROM BACKEND
        email.value = ''
        userPassword.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.history.push('/categories')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  // handleGetUser = e => {
  //    e.preventDefault();
  //   const { users } = this.context;
  //   console.log('users', users)
  //   const currentUser = users.find(user => user.email === this.state.email.value);
  //   if(currentUser) {
  //     this.context.setCurrentUser(currentUser.id)
  //   }
  //   alert('Invalid User, please try again or sign up');
  //   this.props.history.push('/')

  // }

  render() {
    
    return (
      <div className="login">
        <h2>Log In</h2>
        <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name='email'
              id='email'
            // onChange={e => this.updateEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name='userPassword'
              id='userPassword'
            // onChange={e => this.updateUserPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Log In</button>
        </form>
      </div>
    )
  }
}