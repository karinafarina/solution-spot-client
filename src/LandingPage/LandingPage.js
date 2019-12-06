import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <header role="banner">
        <h1>Solution Spot</h1>
        <h3>A place where solution oriented people can share and discuss their ideas!</h3>
      </header>
      <section>
        <header>
          <h3>
            <Link to='/category'>
              Choose from Categories of issues to post your solution ideas!
            </Link>
          </h3>
        </header>
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


