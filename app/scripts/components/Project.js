import React from 'react'

const Project = React.createClass({
  render() {
    console.log(this.props);
    let projectStyles = {
      background: this.props.backgroundColor
    }
    return (
      <div className="project" style={projectStyles}>
        <div className="left">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <div className="bottom">
            <button>See it live</button>
            <a>Or view it on Github</a>
          </div>
        </div>
        <div className="right">
          <img src={this.props.img}/>
        </div>
      </div>
    )
  }
})

export default Project
