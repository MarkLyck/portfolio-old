import React from 'react'
import {Link} from 'react-router'

import Hero from './Hero'

const Header = React.createClass({
  openResume() {
    window.open('assets/Mark_Lyck_Resume.pdf', '_blank');
  },
  render: function() {
    return (
      <header>
        <nav>
          <Link to="/" id="logo">Mark Lyck</Link>
          <div className="right">
            <a onClick={this.openResume}>Résumé</a>
          </div>
        </nav>
        <Hero/>
      </header>
    )
  }
})

export default Header
