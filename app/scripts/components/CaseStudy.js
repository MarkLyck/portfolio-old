import React from 'react'

import Nav from './Nav'
import recentProjects from '../other/recentProjects'

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

const CaseStudy = React.createClass({
  render() {
    let project = recentProjects.filter((project) => {
      let projectName = this.props.params.project.replace('-', ' ')
      if (project.name === projectName) {
        return true
      } else {
        return false
      }
    })[0]

    let wireframes = project.caseStudy.wireframes.map((wireframe, i) => {
      const wfStyle = {backgroundImage: `url("${wireframe}")`}
      return <div className="wireframe" style={wfStyle} key={i}></div>
    })

    let technologies = project.caseStudy.technologies.map((tech, i) => {
      return <li className="tech" key={i}>{tech}</li>
    })

    let caseStudyStyles = { backgroundColor: project.backgroundColor }
    let tabletStyle = { background: `${ColorLuminance(project.backgroundColor, -0.25)}` }

    return (
      <div className="case-study" style={caseStudyStyles}>
        <Nav/>
        <header>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="device tablet-landscape" style={tabletStyle}>
            <img className="tablet" src={project.caseStudy.tabletImage}/>
          </div>
        </header>
        <main>
          <section className="process">
            <h3>Process</h3>
            <p>{project.caseStudy.process}</p>
          </section>
          <section className="wireframes">
            <h3>Wireframe examples</h3>
            <div className="wireframes-container">
              {wireframes}
            </div>
          </section>
          <section>
            <h3>Performance</h3>
            <p>{project.caseStudy.performance}</p>
          </section>
          <section className="tech-stack">
            <h3>Technology Stack</h3>
            <p>{project.caseStudy.technologyStack}</p>
            <ul className="technologies">{technologies}</ul>
          </section>
          <section>
            <h3>Tracking and Statistics</h3>
            <p>{project.caseStudy.tracking}</p>
            <img src={project.caseStudy.trackingImage}/>
          </section>
        </main>


      </div>
    )
  }
})

export default CaseStudy
