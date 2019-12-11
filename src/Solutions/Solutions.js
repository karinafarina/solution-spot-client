import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context'

export  default class Solutions extends Component {
  static contextType = Context;
  render() {
    let outputDivs;
    let { solutions, selectedCategory } = this.context;
    const filteredSolutions = solutions.filter(solution => solution.categoryId === selectedCategory);
    if (selectedCategory === 0) {
      outputDivs = solutions.map(entry => {
        return (    
          <li key={entry.id}>
            <Link to={'/others/' + entry.id}>
              {entry.title}
            </Link>
          </li>
        );
      })
    } else {
      outputDivs = filteredSolutions.map(entry => {
        return (
          <li key={entry.id}>   
            <Link to={'/others/' + entry.id}>
              {entry.title}
            </Link>
          </li>
        )
      })
    }
    return (
      <ul>{outputDivs}</ul>
    ) 
  }
}
