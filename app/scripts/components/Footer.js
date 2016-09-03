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
      </footer>
    )
  }
})

export default Footer


// <a href="https://twitter.com/MarkLyck" target="_blank" className="mail-link">
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M32 7.075c-1.175.525-2.444.875-3.77 1.03 1.357-.812 2.395-2.1 2.888-3.63-1.27.75-2.675 1.3-4.17 1.594C25.75 4.793 24.044 4 22.156 4c-3.625 0-6.563 2.938-6.563 6.563 0 .512.056 1.012.17 1.494C10.304 11.782 5.466 9.17 2.23 5.195c-.563.97-.887 2.1-.887 3.3 0 2.275 1.156 4.287 2.92 5.463-1.076-.03-2.088-.33-2.976-.82v.082c0 3.18 2.263 5.838 5.27 6.437-.55.15-1.132.23-1.732.23-.425 0-.83-.043-1.237-.118.838 2.605 3.263 4.505 6.13 4.562-2.25 1.762-5.074 2.813-8.155 2.813-.53 0-1.05-.03-1.57-.094C2.908 28.92 6.357 30 10.064 30c12.075 0 18.68-10.005 18.68-18.68 0-.287-.005-.57-.018-.85 1.28-.92 2.394-2.075 3.275-3.394z"></path></svg>
//   <p>Twitter</p>
// </a>
