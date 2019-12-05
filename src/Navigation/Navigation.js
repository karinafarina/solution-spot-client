import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="header">
      <h5 className="icon">
        <Link to="/">
          Solution Spot
        </Link>
      </h5>
      <div className="nav-group">
        <h5>
          <Link to="/sign-up">
            Sign Up
          </Link>
        </h5>
        <h5>
          <Link to="/log-in">
            Log in
          </Link>
        </h5>
      </div>
    </nav>
  )
}
