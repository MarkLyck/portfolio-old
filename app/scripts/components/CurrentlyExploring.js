import React from 'react';

const CurrentlyExploring = React.createClass({
  render() {
    return (
      <section className="currently-exploring">
        <h2>I'm currently exploring</h2>
        <div className="right">
          <img src="/assets/images/skills/angular.png"/>
          <h2>Angular</h2>
        </div>
      </section>
    )
  }
})

export default CurrentlyExploring;
