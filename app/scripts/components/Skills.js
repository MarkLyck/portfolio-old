import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

import skills from '../other/skills';

const Skills = React.createClass({
  getInitialState() {
    return {resized: false, hoverEffect:false, windowWidth: $(window).width()};
  },
  componentDidMount() {
    $(window).resize(() => {
      this.setState({resize: true, windowWidth: $(window).width()});
    });
  },
  componentWillUnmount() {
    $(window).off('resize');
  },
  hoverEffect(i) {
    this.setState({hoverEffect: i});
  },
  cancelHoverEffect() {
    this.setState({hoverEffect: false});
  },
  render() {
    const skillWidth = 111;
    let maxSkillsInOneList = Math.floor(((this.state.windowWidth - 110) / skillWidth));

    let skillsetItems = skills.map((skill, i) => {
      if (this.state.hoverEffect === i) {
        return (<li key={i} className="skill hover" data-name={skill.name} onMouseOver={this.hoverEffect.bind(this, i)} onMouseOut={this.cancelHoverEffect}><img src={skill.img}/></li>);
      } else if (this.state.hoverEffect !== false) {
        return (<li key={i} className="skill unselected" data-name={skill.name} onMouseOver={this.hoverEffect.bind(this, i)}><img src={skill.img}/></li>);
      } else {
        return (<li key={i} className="skill" data-name={skill.name} onMouseOver={this.hoverEffect.bind(this, i)}><img src={skill.img}/></li>);
      }
    })

    let skillLists = [];

    // Problem: every second line, will have 1 less item in it. And maxSkillsInOneList is too many.

    let numberOfLists = Math.ceil(skillsetItems.length / (maxSkillsInOneList - 0.5));

    // console.log('lists: ', numberOfLists);
    // console.log('maxSkills: ', maxSkillsInOneList);
    // console.log('skillsLength: ', skillsetItems.length);
    // if (numberOfLists % 2 === 0) {
    //   console.log('true');
    // }

    while (skillLists.length < numberOfLists) { skillLists.push('list') }

    let currentSkill = 0;

    skillLists = skillLists.map((skillList, i) => {
      let skillsInList = [];
      if(i % 2 === 0) {
        while (skillsInList.length < maxSkillsInOneList) {
          skillsInList.push(skillsetItems[currentSkill]);
          currentSkill++;
        }
      } else {
        while (skillsInList.length < (maxSkillsInOneList - 1)) {
          skillsInList.push(skillsetItems[currentSkill]);
          currentSkill++;
        }
      }

      skillsInList = _.without(skillsInList, undefined);

      let skillsInAboveList = maxSkillsInOneList
      if ((numberOfLists - 2) % 2 !== 0) { skillsInAboveList = maxSkillsInOneList - 1 }

      let aboveListIsEven = true;
      if (skillsInAboveList % 2 !== 0) { aboveListIsEven = false; }

      let lastListIsEven = true;
      if ((skillsInList.length) % 2 !== 0) { lastListIsEven = false; }

      if (currentSkill >= skillsetItems.length && aboveListIsEven === lastListIsEven) {
        return (<ul className="skill-list" key={i} style={{marginRight: "110px"}}>{skillsInList}</ul>);
      } else {
        return (<ul className="skill-list" key={i}>{skillsInList}</ul>);
      }
    })

    return (
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillLists}
        </div>
      </div>
    )
  }
})

export default Skills;
