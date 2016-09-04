import React from 'react'
import {Link} from 'react-router'

const Nav = React.createClass({
  openResume() {
    window.open('assets/Mark_Lyck_Resume.pdf', '_blank');
  },
  render() {
    return (
      <nav>
        <Link id="logo" to="/">Mark Lyck</Link>
        <div className="right">
          <a onClick={this.openResume}>Résumé</a>
        </div>
      </nav>
    )
  }
})

export default Nav
