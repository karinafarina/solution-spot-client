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
        currentUserId: 0,
        comments: []
      };
  }
  

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        // "Authorization": `Bearer ${config.API_KEY}`,
        "Content-Type": "application/json"
      }
    };
    Promise.all([
      fetch(`${config.API_BASE_URL}/users`, options),
      fetch(`${config.API_BASE_URL}/categories`, options),
      fetch(`${config.API_BASE_URL}/solutions`, options),
      fetch(`${config.API_BASE_URL}/comments`, options),
    ])
      .then(([usersRes, categoriesRes, solutionsRes, commentsRes]) => {
        if(!usersRes.ok) 
          return usersRes.json().then(e => Promise.reject(e))
        if (!categoriesRes.ok)
          return categoriesRes.json().then(e => Promise.reject(e))
        if (!solutionsRes.ok)
          return solutionsRes.json().then(e => Promise.reject(e))
        if (!commentsRes.ok)
          return commentsRes.json().then(e => Promise.reject(e))
        
        return Promise.all([
          usersRes.json(),
          categoriesRes.json(),
          solutionsRes.json(),
          commentsRes.json()
        ])
      })
      .then(([users, categories, solutions, comments]) => {
        this.setState({ users, categories, solutions, comments })
      })
      // .catch(error => {
      //   console.log(error({error}));
      // })
  };

  setCurrentCategoryId = (e) => {
    this.setState({ currentCategoryId: parseInt(e.target.value, 10) })
  };

  setCurrentUser = (currentUserId) => {
    console.log('e', currentUserId)
    this.setState({ currentUserId })
  }

  handleCommentSubmit = (e, commentInput, solutionId) => {
    e.preventDefault();
    console.log('e, comentinput', e, commentInput)
    this.setState({
      comments: this.state.comments.concat([ 
        {
          id: "",
          userId:"",
          solutionId: solutionId,
          content: commentInput,
      }
    ])
      //  TODO: ADD NEW COMMENT TO CONTEXT, RANDOMLY GENERATE ID'S, USE ACTUAL SOLUTIONID AND USERID
    })
  }

  handleDeleteSolution = solutionId => {
    this.setState({
      solutions: this.state.solutions.filter(solution => solution.id !== solutionId)
    })
  };

  addUser = (newUser) => {
    console.log('newUserApp', newUser)
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
  }

  render() {
    if (this.state.users.length === 0) {
      return "Loading";
    }

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
      comments: this.state.comments,
      handleCommentSubmit: this.handleCommentSubmit,
      // handleSubmitNewSolution: this.handleSubmitNewSolution,
      deleteSolution: this.handleDeleteSolution
    }
    return (
      <Context.Provider value={contextValue}>
        
          <div className='App'>
            <Route path='/' component={Navigation} />
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