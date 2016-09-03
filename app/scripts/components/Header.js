import React from 'react'
import {Link} from 'react-router'
import Scroll from 'react-scroll'

import Hero from './Hero'

const Header = React.createClass({
  openResume() {
    window.open('assets/Mark_Lyck_Resume.pdf', '_blank');
  },
  render: function() {
    let scroll = Scroll.animateScroll
    return (
      <header>
        <nav>
          <a id="logo" onClick={() => {scroll.scrollToTop({duration: 350, smooth: true})}}>Mark Lyck</a>
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
