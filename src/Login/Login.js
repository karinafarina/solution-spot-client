import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login">
      <h2>Log In</h2>
      <form className="login-form">
        <div>
          <label for="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Log In</button>
      </form>
      
    </div>
  )
}
