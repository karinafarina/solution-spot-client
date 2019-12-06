import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Category from './Category/Category'
import AddSolutions from './AddSolutions/AddSolutions';
import Others from './Others/Others';
import './App.css';
import dummyStore from './dummy-store';

class App extends Component {
  state = {
    categories: [],
    solutions: []
  }

  componentDidMount() {
    //dummyData loading
    setTimeout(() => this.setState(dummyStore), 600);
  }
  render() {
    
    const { categories, solutions } = this.state;
    return (
      <BrowserRouter>
      <div className='App'>
        <Route path='/' component={Navigation} />
        <Route
           exact 
           path='/' 
           component={LandingPage}
          //  render={routeProps => (
          //    <LandingPage
          //       categories={categories}
          //       solutions={solutions}
          //       {...routeProps}
          //     />
          //  )}
        />
          
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/log-in' component={Login}/>
        <Route 
          path='/category'
            render={routeProps => (
              <Category
                categories={categories}
                solutions={solutions}
                {...routeProps}
              />
            )}
          />
        <Route path='/add-solutions' component={AddSolutions}/>
        
        {/* Add in later version */}
        <Route 
          path='/others/:solution_id' 
          render={routeProps => (
            <Others
              categories={categories}
              solutions={solutions}
              {...routeProps}
            />
          )}
        />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;