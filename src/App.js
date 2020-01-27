import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';
import AddUser from './AddUser/AddUser';
import Login from './Login/Login';
import Category from './Category/Category'
import AddSolutions from './AddSolutions/AddSolutions';
import SolutionView from './SolutionView/SolutionView';
import Context from './context';
import './App.css';
import config from './config';

/* eslint-disable no-restricted-globals */

class App extends Component {
  
  constructor(props) {
    super(props) 
      this.state = {
        categories: [],
        currentCategoryId: 0,
        solutions: [],
        users: [],
        currentUserId: null,
      };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${config.TOKEN_KEY}`,
        "Content-Type": "application/json"
      }
    };
    Promise.all([
      fetch(`${config.API_BASE_URL}/categories`, options),
      fetch(`${config.API_BASE_URL}/solutions`, options),
    ])
      .then(([categoriesRes, solutionsRes]) => {
        if (!categoriesRes.ok)
          return categoriesRes.json().then(e => Promise.reject(e))
        if (!solutionsRes.ok)
          return solutionsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          categoriesRes.json(),
          solutionsRes.json(),
        ])
      })
      .then(([categories, solutions]) => {
        this.setState({ categories, solutions })
      })
    .catch(error => {
      
    })
  };

  setCurrentCategoryId = (e) => {
    this.setState({ currentCategoryId: parseInt(e.target.value, 10) })
  };

  setCurrentUser = (currentUserId) => {    
    this.setState({ currentUserId })
  }

  handleDeleteSolution = solutionId => {
    this.setState({
      solutions: this.state.solutions.filter(solution => solution.id !== solutionId)
    })
  };

  addUser = (newUser) => {
    const users = [...this.state.users, newUser]
    this.setState({
      users
    })
  }

  addCategory = (newCategory) => {
    const categories = [...this.state.categories, newCategory]
    this.setState({
      categories
    })
  }

  addSolution = (newSolution) => {
    const solutions = [...this.state.solutions, newSolution];
    this.setState({
      solutions
    })
    this.props.history.push(`/categories/${newSolution.categoryId}`)
  }

  render() {

    const contextValue = {
      categories: this.state.categories,
      addCategory: this.addCategory,
      currentCategoryId: this.state.currentCategoryId,
      setCurrentCategoryId: this.setCurrentCategoryId,
      solutions: this.state.solutions,
      addSolution: this.addSolution,
      users: this.state.users,
      addUser: this.addUser,
      currentUserId: this.state.currentUserId,
      setCurrentUser: this.setCurrentUser,
      deleteSolution: this.handleDeleteSolution
    }
    return (
      <Context.Provider value={contextValue}>
        
          <div className='App'>
            <Route 
              path='/' 
              component={Navigation} 
            />
            <Route
              exact 
              path='/' 
              component={LandingPage}
            />
              
            <Route path='/sign-up' component={AddUser}/>
            <Route path='/login' component={Login}/>
            <Route path='/categories' component={Category}/>
            <Route path='/add-solutions/:categoryId' component={AddSolutions}/>
            {/* <Route path='/solutions' component={SolutionView}/> */}
            {/* Add in later version */}
            <Route path='/solutions/:solutionId' component={SolutionView}/>
          </div>
        
      </Context.Provider>
    );
  }
}

export default withRouter(App);