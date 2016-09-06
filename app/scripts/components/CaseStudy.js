import React from 'react'
import _ from 'underscore'
import {Link} from 'react-router'
import Carousel from 'nuka-carousel'

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
  getInitialState() {
    return {
			buttonColor: '',
			linkColor: '#fff',
      project: false,
			animate: false
    }
  },
  hoverState(e) {
    console.log(e.target.classList);
    if (_.toArray(e.target.classList).indexOf('see-it-live') !== -1) {
      this.setState({buttonColor: ColorLuminance(this.state.project.domColor, -0.25)})
    } else if (_.toArray(e.target.classList).indexOf('github-link') !== -1) {
      this.setState({linkColor: this.state.project.domColor})
    }
  },
  normalState(e) {
    console.log(e.target.classList);
    if (_.toArray(e.target.classList).indexOf('see-it-live') !== -1) {
      this.setState({buttonColor: this.state.project.domColor})
    } else if (_.toArray(e.target.classList).indexOf('github-link') !== -1) {
      this.setState({linkColor: '#fff'})
    }
  },
	componentWillReceiveProps() {
		setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
	},
  componentDidMount() {
    let project = recentProjects.filter((project) => {
      let projectName = this.props.params.project.replace('-', ' ')
      if (project.name === projectName) {
        return true
      } else {
        return false
      }
    })[0]
    this.setState({project: project, buttonColor: project.domColor})
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  },
  render() {
    if (!this.state.project) {
      return null
    }
    let wireframes = this.state.project.caseStudy.wireframes.map((wireframe, i) => {
      const wfStyle = {backgroundImage: `url("${wireframe}")`}
      return <div className="wireframe" style={wfStyle} key={i}></div>
    })

    let technologies = this.state.project.caseStudy.technologies.map((tech, i) => {
      return <li className="tech" key={i}>{tech}</li>
    })

    let caseStudyStyles = { backgroundColor: this.state.project.backgroundColor }
    let tabletStyle = { background: `${ColorLuminance(this.state.project.backgroundColor, -0.25)}` }
    let buttonStyles = {background: this.state.buttonColor}

		// <div className="device tablet-landscape" style={tabletStyle}>
		// 	<img className="tablet" src={this.state.project.caseStudy.tabletImage}/>
		// </div>

		let slideShowImages = this.state.project.screenshots.map((image, i) => {
			return <img className="tablet" src={image} key={i}/>
		})

    return (
      <div className="case-study" style={caseStudyStyles}>
        <Nav/>

        <header>
          <h2>{this.state.project.name}</h2>
          <p>{this.state.project.description}</p>
					<div className="device tablet-landscape" style={tabletStyle}>
						<Carousel decorators={[]} autoplay={true} wrapAround={true}>
			        {slideShowImages}
			      </Carousel>
					</div>

        </header>
        <main>
          <section className="process">
            <h3>Process</h3>
            <p>{this.state.project.caseStudy.process}</p>
          </section>
          <section className="wireframes">
            <h3>Wireframe examples</h3>
            <div className="wireframes-container">
              {wireframes}
            </div>
          </section>
          <section>
            <h3>Performance</h3>
            <p>{this.state.project.caseStudy.performance}</p>
          </section>
          <section className="tech-stack">
            <h3>Technology Stack</h3>
            <p>{this.state.project.caseStudy.technologyStack}</p>
            <ul className="technologies">{technologies}</ul>
          </section>
          <section>
            <h3>Tracking and Statistics</h3>
            <p>{this.state.project.caseStudy.tracking}</p>
            <img src={this.state.project.caseStudy.trackingImage}/>
          </section>
          <div className="cta-container">
            <Link to="/" className="back-btn"><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link>
            <a className="see-it-live" target="_blank" href={this.state.project.liveLink} onMouseOver={this.hoverState} onMouseOut={this.normalState} style={buttonStyles}>View Website</a>
          </div>
        </main>


      </div>
    )
  }
})

export default CaseStudy
