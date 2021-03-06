import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import Context from '../context'
import './Navigation.css';

export default class Navigation extends Component {

  static contextType = Context;  

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setCurrentUser(0)
  }

  renderLogoutLink() {
    return (
      <div className="logged-in">
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className="logged-out">
        <Link
          to='/sign-up'>
          Sign Up
        </Link>
        <Link
          to='/login'>
          Login
        </Link>
      </div> 
    )
  }

  render() {
    return (
      <nav className="header">
        <div className="icon">
          <Link to='/'>
            Solution Spot
            </Link>
        </div>
        <div className="nav-group">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    )
  }
}
   