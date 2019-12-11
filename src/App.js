import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Category from './Category/Category'
import AddSolutions from './AddSolutions/AddSolutions';
import Others from './Others/Others';
import Solutions from'./Solutions/Solutions';
import Context from './context';
import './App.css';
import dummyStore from './dummy-store';

class App extends Component {
  state = {
    categories: [],
    selectedCategory: 0,
    solutions: []
  };

  componentDidMount() {
    //dummyData loading
    this.setState(dummyStore);
  };

  setSelectedCategory = (e) => {
    this.setState({ selectedCategory: e.target.value })
  };

  handleDeleteSolution = solutionId => {
    this.setState({
      solutions: this.state.solutions.filter(solution => solution.id !== solutionId)
    })
  };

  render() {
    const contextValue = {
      categories: this.state.categories,
      selectedCategory: this.state.selectedCategory,
      setSelectedCategory: this.setSelectedCategory,
      solutions: this.state.solutions,
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
        <Route path='/category'component={Category}/>
        <Route path='/category' component={Solutions}/>
        <Route path='/add-solutions' component={AddSolutions}/>
        
        {/* Add in later version */}
        <Route path='/others/:solution_id' component={Others}/>
      </div>
      </Context.Provider>
    );
  }
}

export default App;