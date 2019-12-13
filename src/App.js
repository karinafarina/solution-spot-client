import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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

/* eslint-disable no-restricted-globals */



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

  handleSubmitNewSolution = (e, solutionInput) => {
    e.preventDefault();
    console.log('this', this.props)
    this.setState({
      solutions: this.state.solutions.concat([
        {
          id: "",
          userId: "",
          categoryId: "",
          modified: Date(),
          content: solutionInput,
        }
      ])
    }, () => { this.props.history.push('/category')});

   //go to category route
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
      handleSubmitNewSolution: this.handleSubmitNewSolution,
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
              
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/log-in' component={Login}/>
            <Route path='/category' component={Category}/>
            <Route path='/add-solutions' component={AddSolutions}/>
            
            {/* Add in later version */}
            <Route path='/others/:solution_id' component={Others}/>
          </div>
        
      </Context.Provider>
    );
  }
}

export default withRouter(App);