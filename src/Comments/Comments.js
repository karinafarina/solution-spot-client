import React, { Component } from 'react';
import Context from '../context';


export class Comments extends Component {
  static contextType = Context;  


  render() {
    const { commentsForSolution } = this.props;
    return (
      <div className="comments">
        <h4>Comments</h4>
        {commentsForSolution ? commentsForSolution.map((comment, index) => <p key={index}>{comment.content}</p>) : ""}
      </div>
    )
  }
}

export default Comments
