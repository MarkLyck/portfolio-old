import React from 'react'

import Header from './Header'
import Footer from './Footer'

const App = React.createClass({
  render: function() {
    return (
      <div id="app">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})

export default App
