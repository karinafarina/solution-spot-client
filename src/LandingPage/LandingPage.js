import React, { Component } from 'react';
import Context from '../context';
import { Link } from 'react-router-dom';
import './LandingPage.css'

export default class LandingPage extends Component {

  static contextType = Context;  

  // state = {
  //   currentUserId: null
  // }
  render() {
    const { currentUserId } = this.context;
    console.log('curenuserid', currentUserId)
    return (
      <div className="landing">
        <h1>Solution Spot</h1>
        <section className="banner" role="banner">
          <h3>A place where solution oriented people can share and discuss their ideas!</h3>
        </section>
        <section>
          {currentUserId ? <header>
            <h3>
              <Link to='/categories' className="link-to-categories">
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
        <footer>
          <div className="footer-content">
            <div className="name">Karina Gaulin</div>
            <div className="copy">&copy; 2020</div>
          </div>
        </footer>
      </div>
    )
  }
}


