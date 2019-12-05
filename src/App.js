import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Category from './Category/Category'
import SolutionsHome from './SolutionsHome/SolutionsHome';
import Others from './Others/Others';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
        <Route path='/' component={Navigation} />
        <Route exact path='/' component={LandingPage}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/log-in' component={Login}/>
        <Route path='/solutions-home' component={SolutionsHome}/>
        <Route path='/category' component={Category}/>
        <Route path='/others' component={Others}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;