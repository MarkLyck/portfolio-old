import React from 'react'

import recentProjects from '../other/recentProjects'
import Project from './Project'

const Portfolio = React.createClass({
  render() {
    let allRecentProjects = recentProjects.map((project, i) => {
      return (<Project
        key={i}
        number={i}
        name={project.name}
        project={project}/>)
    })
    return (
      <div id="recent-projects">
        <h2 className="section-header">Recent Projects</h2>
        <ul className="recent-projects-list">
          {allRecentProjects}
        </ul>
      </div>
    )
  }
})

export default Portfolio
