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

    let caseStudyStyles = {
      backgroundColor: project.backgroundColor
    }

    let tabletStyle = {
      background: `${ColorLuminance(project.backgroundColor, -0.25)}`
    }

    return (
      <div className="case-study" style={caseStudyStyles}>
        <Nav/>
        <header>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </header>
        <div className="device tablet-landscape" style={tabletStyle}>
          <img className="tablet" src={project.caseStudy.tabletImage}/>
        </div>
      </div>
    )
  }
})

export default CaseStudy
