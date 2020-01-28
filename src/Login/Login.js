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
        this.context.setCurrentUser(res.userId)
        email.value = ''
        userPassword.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.history.push('/categories')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    }
    render() {
      const { error } = this.state;
      return (
        <div className="login">
          <h2>Log In</h2>
          <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            
            <div>
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name='email'
                id='email'
              />
            </div>
            <div>
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                name='userPassword'
                id='userPassword'
                required
              />
            </div>
            <button type='submit'>Log In</button>
          </form>
        </div>
      )
    }
}