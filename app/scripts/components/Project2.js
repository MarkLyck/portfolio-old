import React from 'react'
import _ from 'underscore'
import {Link} from 'react-router'

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

const Project = React.createClass({
  getInitialState() {
    return {
			buttonColor: this.props.project.domColor,
			linkColor: '#fff',
			animate: false}
  },
  hoverState(e) {
    console.log(e.target.classList);
    if (_.toArray(e.target.classList).indexOf('see-it-live') !== -1) {
      this.setState({buttonColor: ColorLuminance(this.props.project.domColor, -0.25)})
    } else if (_.toArray(e.target.classList).indexOf('github-link') !== -1) {
      this.setState({linkColor: this.props.project.domColor})
    }
  },
  normalState(e) {
    console.log(e.target.classList);
    if (_.toArray(e.target.classList).indexOf('see-it-live') !== -1) {
      this.setState({buttonColor: this.props.project.domColor})
    } else if (_.toArray(e.target.classList).indexOf('github-link') !== -1) {
      this.setState({linkColor: '#fff'})
    }
  },
  render() {
    let devices = this.props.project.devices.map((device, i) => {
      let style = {
        background: `${ColorLuminance(this.props.project.backgroundColor, -0.25)}`
      }
      // let style = {
        // background: `#262C32`,
      // }
      if (device.name === 'tablet') {
        return <div className="device tablet-landscape" key={i} style={style}><img className="tablet" src={device.image}/></div>
      } else if (device.name === 'phone') {
        return <img className="phone" src={device.image} key={i}/>
      }
    })

    let listStyle = {
      backgroundColor: this.props.project.backgroundColor
    }
    // let listStyle = {
		// 	background: this.props.project.backgroundColor,
		// 	background: `-moz-linear-gradient(-45deg,  #323b42 40%, #323b42 40%, ${this.props.project.domColor} 100%)`,
		// 	background: `-webkit-linear-gradient(-45deg,  #323b42 40%,#323b42 40%,${this.props.project.domColor} 100%)`,
		// 	background: `linear-gradient(135deg,  #323b42 40%,#323b42 40%,${this.props.project.domColor} 100%)`,
		// 	filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#323b42', endColorstr='${this.props.project.domColor}',GradientType=1 )`,
    // }

    // let listStyle = {
		// 	background: `#323b42`,
		// 	background: `-moz-linear-gradient(top,  #323b42 50%, ${this.props.project.domColor} 100%)`,
		// 	background: `-webkit-linear-gradient(top,  #323b42 50%,${this.props.project.domColor} 100%)`,
		// 	background: `linear-gradient(to bottom,  #323b42 50%,${this.props.project.domColor} 100%)`,
		// 	filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#323b42', endColorstr='${this.props.project.domColor}',GradientType=0 )`
    // }


    let caseStudy;
    if (this.props.project.caseStudy) {
      const caseStudyLink = this.props.project.name.replace(' ', '-')
      caseStudy = <Link className="case-study-btn" to={`/projects/${caseStudyLink}`}>View Case Study</Link>
    }

    let buttonStyles = {background: this.state.buttonColor}
    let linkStyles = {color: this.state.linkColor}

		let liveLink, githubLink;
		if (this.props.project.liveLink) {
			liveLink = <a className="see-it-live" target="_blank" href={this.props.project.liveLink} onMouseOver={this.hoverState} onMouseOut={this.normalState} style={buttonStyles}>View Website</a>
		}
		if (this.props.project.githubLink) {
			githubLink = <a className="github-link" target="_blank" href={this.props.project.githubLink} style={linkStyles}><i className="fa fa-github" aria-hidden="true"></i>GitHub</a>
		}


    return (
      <li className="project" style={listStyle}>
        <header>
          <h2>{this.props.project.name}</h2>
          <p>{this.props.project.description}</p>
          <div className="cta-container">
            {caseStudy}
						{liveLink}
						{githubLink}
          </div>
        </header>
        <div className="container">
          {devices}
        </div>
      </li>
    )
  }
})

export default Project
