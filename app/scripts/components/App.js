import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'

const App = React.createClass({
  render: function() {
    return (
      <div id="app">
        <Header/>
        <Home/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})

export default App
