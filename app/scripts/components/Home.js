import React from 'react'

import RecentProjects from './RecentProjects'
import Skills from './Skills'

const Home = React.createClass({
  render() {
    return (
      <div id="home">
        <RecentProjects/>
        <Skills/>
      </div>
    )
  }
})

export default Home
