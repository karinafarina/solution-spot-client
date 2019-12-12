import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Category from './Category/Category'
import AddSolutions from './AddSolutions/AddSolutions';
import Others from './Others/Others';
import Context from './context';
import './App.css';
import dummyStore from './dummy-store';

class App extends Component {
  state = {
    categories: [],
    selectedCategory: 0,
    solutions: [],
    users: [],
    comments: []
  };

  componentDidMount() {
    //dummyData loading
    this.setState(dummyStore);
  };

  setSelectedCategory = (e) => {
    this.setState({ selectedCategory: e.target.value })
  };

  handleCommentSubmit = (e, commentInput) => {
    e.preventDefault();
    
    this.setState({
      comments: this.state.comments.concat([ 
        {
          id: "c1",
          userId: "u1",
          solutionId: "s4",
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

  render() {
    if (this.state.users.length === 0) {
      return "Loading";
    }
    const contextValue = {
      categories: this.state.categories,
      selectedCategory: this.state.selectedCategory,
      setSelectedCategory: this.setSelectedCategory,
      solutions: this.state.solutions,
      users: this.state.users,
      comments: this.state.comments,
      handleCommentSubmit: this.handleCommentSubmit,
      deleteSolution: this.handleDeleteSolution
    }
    return (
      <Context.Provider value={contextValue}>
        <BrowserRouter>
          <div className='App'>
            <Route path='/' component={Navigation} />
            <Route
              exact 
              path='/' 
              component={LandingPage}
            />
              
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/log-in' component={Login}/>
            <Route path='/category'component={Category}/>
            <Route path='/add-solutions' component={AddSolutions}/>
            
            {/* Add in later version */}
            <Route path='/others/:solution_id' component={Others}/>
          </div>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;