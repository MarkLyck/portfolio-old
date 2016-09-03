import React from 'react'
import {Link} from 'react-router'


const Footer = React.createClass({
  render: function() {
    return (
      <footer>
      <p>Contact me at <a className="blue-color" href="mailto:hello@markdid.it">hello@markdid.it</a></p>
      </footer>
    )
  }
})

export default Footer
