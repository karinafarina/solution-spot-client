import React, { Component } from 'react';
import Context from '../context';


export class Comments extends Component {
  static contextType = Context;  


  render() {
    
    return (
      <div className="comments">
        <h4>Comments</h4>
        {this.props.comments.map((comment, index) => <p key={index}>{comment.content}</p>)}
      </div>
    )
  }
}

export default Comments
