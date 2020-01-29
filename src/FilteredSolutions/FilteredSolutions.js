import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Context from '../context';
import './FilteredSolutions.css';

//CHANGE TO FILTEREDSOLUTIONS
export  default class FilteredSolutions extends Component {
  static contextType = Context;
    
  render() {
    let outputDivs;
    let { solutions, currentCategoryId } = this.context;
    const filteredSolutions = solutions.filter(solution => solution.categoryId === parseInt(currentCategoryId));
    const solutionsToUse = currentCategoryId ? filteredSolutions : solutions;

    outputDivs = solutionsToUse.map(entry => {
      return (    
        <li key={entry.id}>
          <Link to={'/solutions/' + entry.id} data-tip={entry.content}>
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
