import React from 'react'
import _ from 'underscore'
import $ from 'jquery'

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
  gotoLiveSite() {
		window.open(this.props.project.liveLink, '_blank');
  },
  hoverState(e) {
    console.log(e.target.classList);
    if (_.toArray(e.target.classList).indexOf('see-it-live') !== -1) {
      this.setState({buttonColor: ColorLuminance(this.props.project.domColor, -0.1)})
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
	componentDidMount() {
    $(window).on('scroll', this.animate)
  },
  componentWillUnmount() {
    $(window).off('scroll', this.animate)
  },
  animate() {
    let hT = $(this.refs.project).offset().top
    let hH = $(this.refs.project).outerHeight()
    let wH = $(window).height()

    if ($(window).scrollTop() > (hT + hH - wH) - 350) {
      console.log('animate');
      this.setState({animate: true})
      $(window).off('scroll', this.animate)
    };
  },
  render() {
    let projectStyles = {
      background: this.props.project.backgroundColor
    }
    let buttonStyles = {
      background: this.state.buttonColor
    }
    let linkStyles = {
      color: this.state.linkColor
    }
    let firstClass
    let lastClass
    if (this.props.number % 2 === 0) {
      firstClass = "left"
      lastClass = "right"
    } else {
      firstClass = "right"
      lastClass = "left"
    }

		let imgClass = "project-image"
		if (this.state.animate) {
			imgClass = "project-image slide-up"
		}

		console.log(imgClass);

    return (
      <li className="project" style={projectStyles} ref="project">
        <div className={firstClass}>
          <h3>{this.props.project.name}</h3>
          <p className="time-span"><span className="light">built in:</span> {this.props.project.timespan}</p>
          <p className="description">{this.props.project.description}</p>
          <div className="bottom">
            <button className="see-it-live" onClick={this.gotoLiveSite} onMouseOver={this.hoverState} onMouseOut={this.normalState} style={buttonStyles}>See it live</button>
            <a className="github-link" target="_blank" href={this.props.project.githubLink} onMouseOver={this.hoverState} onMouseOut={this.normalState} style={linkStyles}><i className="fa fa-github" aria-hidden="true"></i>View it on GitHub</a>
          </div>
        </div>
        <div className={lastClass}>
          <img src={this.props.project.img} className={imgClass}/>
        </div>
      </li>
    )
  }
})

export default Project
