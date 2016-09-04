import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

//<p>Contact me at <a className="blue-color" href="mailto:hello@markdid.it">hello@markdid.it</a></p>
const Footer = React.createClass({
  getInitialState() {
    return {animate: false}
  },
  componentDidMount() {
    $(window).on('scroll', this.animate)
  },
  componentWillUnmount() {
    $(window).off('scroll', this.animate)
  },
  animate() {
    let hT = $(this.refs.container).offset().top
    let hH = $(this.refs.container).outerHeight()
    let wH = $(window).height()

    if ($(window).scrollTop() > (hT + hH - wH) - 100) {
      console.log('animate');
      this.setState({animate: true})
      $(window).off('scroll', this.animate)
    };
  },
  render: function() {
    let containerClass = "container"
    if (this.state.animate) {
      containerClass = "container fade-in"
    }
    return (
      <footer>
        <h2>Let's talk!</h2>
        <div className={containerClass} ref="container">
          <a href="mailto:hello@markdid.it" className="social-link">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <p>hello@markdid.it</p>
          </a>

          <a href="https://linkedin.com/in/marklyck" target="_blank" className="social-link">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <p>LinkedIn</p>
          </a>

          <a href="https://github.com/MarkLyck" target="_blank" className="social-link">
            <i className="fa fa-github" aria-hidden="true"></i>
            <p>Github</p>
          </a>
        </div>
        <p>I also do freelance work</p>
      </footer>
    )
  }
})

export default Footer
