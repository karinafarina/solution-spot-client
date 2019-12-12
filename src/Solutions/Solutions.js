import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Context from '../context';
import './Solutions.css';

export  default class Solutions extends Component {
  static contextType = Context;
  render() {
    let outputDivs;
    let { solutions, selectedCategory } = this.context;
    const filteredSolutions = solutions.filter(solution => solution.categoryId === selectedCategory);
    const solutionsToUse = selectedCategory ? filteredSolutions : solutions;
    
    outputDivs = solutionsToUse.map(entry => {
      return (    
        <li key={entry.id}>
          <Link to={'/others/' + entry.id} data-tip={entry.content}>
            {entry.content.substring(0, 20) + "...."}
          </Link>
          <ReactTooltip place="top" type="dark" effect="float" />
        </li>
      );
    })
    
    return (
      <ul>{outputDivs}</ul>
    ) 
  }
}
