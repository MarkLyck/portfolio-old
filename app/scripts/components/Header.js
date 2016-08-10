import React from 'react'
import {Link} from 'react-router'

import Hero from './Hero'

const Header = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <Link to="/" id="logo">Mark Lyck</Link>
          <div className="right">
            <Link to="/">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>
        <Hero/>
      </header>
    )
  }
})

export default Header
