import React from 'react'

const Project = React.createClass({
  render() {
    return (
      <div className="project">
        <div className="left">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
        <div className="right">
          <img src={this.props.img}/>
        </div>
      </div>
    )
  }
})

export default Project
