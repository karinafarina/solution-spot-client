import React, { Component } from 'react';
import Context from '../context';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {

  static contextType = Context;  

  state = {
    currentUserId: null
  }
  render() {
    return (
      <div>
        <header role="banner">
          <h1>Solution Spot</h1>
          <h3>A place where solution oriented people can share and discuss their ideas!</h3>
        </header>
        <section>
          {console.log('this.state.user', this.state.currentUserId)}
          {this.state.currentUserId ? <header>
            <h3>
              <Link to='/categories'>
                Choose from Categories of issues to post your solution ideas!
              </Link>
            </h3>
          </header> : ""} 
          
        </section>

        {/* <section>
          <header>
            <h3>
              <Link to='/solutions-home'>
                Post your ideas for solutions to social issues
              </Link>
            </h3>
          </header>
        </section> */}
        {/* <section>
          <header>
            <h3>
              <Link to='/others'>
                Rate and comment on the ideas of others
              </Link>
            </h3>
          </header>
        </section> */}
        {/* <section>
          <header>
            <h3>See ratings and comments on your solutions, start a conversation!</h3>
          </header>
        </section> */}
        <footer>Footer</footer>
      </div>
    )
  }
}


