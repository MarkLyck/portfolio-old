import React from 'react'

import RecentProjects from './RecentProjects'
import Skills from './Skills'
import CurrentlyExploring from './CurrentlyExploring'


const Home = React.createClass({
  render() {
    return (
      <div id="home">
        <RecentProjects/>
        <Skills/>
        <CurrentlyExploring/>
      </div>
    )
  }
})

export default Home
